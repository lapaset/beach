import { FC } from 'react'
import styled from 'styled-components'
import { useIsMobile } from '../../hooks/useIsMobile'
import { desktop, mobile } from '../../utils/constants'
import {
  createShapePropablityArray,
  randomWithProbability
} from '../../utils/randomise'
import { getShapes } from '../../utils/shapes'
import Cell from '../Cell/Cell'
import Grid from '../Grid/Grid'
import Item from '../Item/Item'

const RandomisedGrid: FC = () => {
  const isMobile = useIsMobile()
  const shapes = getShapes(isMobile)

  const cells = Array.from({ length: isMobile ? 800 : 400 }, (_, i) => i).map(
    (_, i) => i < 20 ? shapes[randomWithProbability([0, 0, 0, 0, 3, 4, 5])] : shapes[randomWithProbability(createShapePropablityArray(shapes))]
  )

  const constants = isMobile ? mobile : desktop
  const { border, headerRows, cellWithBorder } = constants

  return (
    <GridDiv rows={20} mobileRows={40} border={border} headerHeight={headerRows * cellWithBorder}>
      {cells.map((i, index) => (
        <Cell key={`base-${index}`}>
          <Item {...i.item} />
        </Cell>
      ))}
    </GridDiv>
  )
}

const GridDiv = styled(Grid)<{ border: number, headerHeight: number }>`
  top: ${({ headerHeight }) => `${headerHeight}px`};
  padding: ${({ border }) => `0 ${border}px ${border}px`};
`

export default RandomisedGrid
