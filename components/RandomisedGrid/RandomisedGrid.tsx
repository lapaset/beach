import { FC } from 'react'
import styled from 'styled-components'
import { useScreenSize } from '../../hooks/useScreenSize'
import { breakpoints, getConstants } from '../../utils/constants'
import {
  createShapePropablityArray,
  randomWithProbability
} from '../../utils/randomise'
import { getShapes } from '../../utils/shapes'
import Cell from '../Cell/Cell'
import Grid from '../Grid/Grid'
import Item from '../Item/Item'

const RandomisedGrid: FC = () => {
  const screenSize = useScreenSize()
  const device =
    screenSize.width < breakpoints.mobile
      ? 'mobile'
      : screenSize.width < breakpoints.tablet
      ? 'tablet'
      : 'desktop'
      
  const { ...rest } = getConstants(device)
  const {
    border,
    cellWithBorder,
    cellWithBorders,
    horizontalMargin,
    verticalMargin,
  } = rest

  const rows = Math.floor((screenSize.height - verticalMargin) / cellWithBorder)
  const columns = Math.floor(
    (screenSize.width - horizontalMargin) / cellWithBorder
  )

  const shapes = getShapes(border, cellWithBorders)
  const cellArray = Array.from({ length: rows * columns }, (_, i) => i).map(
    () => shapes[randomWithProbability(createShapePropablityArray(shapes))]
  )

  return (
    <GridDiv {...{ ...rest, columns, rows }}>
      {cellArray.map((i, index) => (
        <Cell key={`base-${index}`}>
          <Item {...i.item} isFirstRow={index < columns} />
        </Cell>
      ))}
    </GridDiv>
  )
}

const GridDiv = styled(Grid)<{ border: number }>`
  padding: ${({ border }) => `0 ${border}px`};
`

export default RandomisedGrid
