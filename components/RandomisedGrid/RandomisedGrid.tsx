import { FC } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'
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
    () => shapes[randomWithProbability(createShapePropablityArray(shapes))]
  )

  return (
    <Grid>
      {cells.map((i, index) => (
        <Cell key={`base-${index}`}>
          <Item {...i.item} />
        </Cell>
      ))}
    </Grid>
  )
}

export default RandomisedGrid
