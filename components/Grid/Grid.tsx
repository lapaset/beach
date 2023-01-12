import { FC } from 'react'
import styled from 'styled-components'
import { useIsMobile } from '../../hooks/useIsMobile'
import {
  createShapePropablityArray,
  randomWithProbability
} from '../../utils/randomise'
import { getShapes } from '../../utils/shapes'
import Cell from '../Cell/Cell'
import Item from '../Item/Item'

const Grid: FC = () => {
  const isMobile = useIsMobile()
  const shapes = getShapes(isMobile)

  const cells = Array.from({ length: isMobile ? 800 : 400 }, (_, i) => i).map(
    () => shapes[randomWithProbability(createShapePropablityArray(shapes))]
  )

  return (
    <GridDiv>
      {cells.map((i, index) => (
        <Cell key={`base-${index}`}>
          <Item {...i.item} />
        </Cell>
      ))}
    </GridDiv>
  )
}

export default Grid

const GridDiv = styled.div`
  padding: 4px;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(20, 44px);
  grid-template-rows: repeat(19, 48px) 44px;
  gap: 0 4px;
  background: black;
  z-index: -1;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    & {
      background: white;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(20, 16.5px);
    grid-template-rows: repeat(39, 18px) 16.5px;
    gap: 0 1.5px;
    padding: 1.5px;
  }
`
