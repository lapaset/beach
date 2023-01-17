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
  const constants = isMobile ? mobile : desktop
  const { cells, ...rest } = constants

  const cellArray = Array.from({ length: cells }, (_, i) => i).map(
    () => shapes[randomWithProbability(createShapePropablityArray(shapes))]
  )

  return (
    <GridDiv {...rest}>
      {cellArray.map((i, index) => (
        <Cell key={`base-${index}`}>
          <Item {...i.item} isFirstRow={index < rest.columns} />
        </Cell>
      ))}
    </GridDiv>
  )
}

const GridDiv = styled(Grid)<{ border: number }>`
  padding: ${({ border }) => `0 ${border}px`};
`

export default RandomisedGrid
