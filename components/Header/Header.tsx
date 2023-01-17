import styled from 'styled-components'
import { useIsMobile } from '../../hooks/useIsMobile'
import { desktop, mobile } from '../../utils/constants'
import { getShapes } from '../../utils/shapes'
import Cell from '../Cell/Cell'
import Grid from '../Grid/Grid'
import Item from '../Item/Item'

const headerShapes = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1,
  2, 5, 5, 2, 5, 1, 2, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 4, 5, 5, 0, 5, 0, 0, 0, 0, 0, 5, 0,
  0, 0, 0, 0, 0, 0, 5, 1, 2, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 4, 5, 5, 0,
  0, 0, 4, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]

const Header = () => {
  const isMobile = useIsMobile()
  const shapes = getShapes(isMobile)
  const constants = isMobile ? mobile : desktop

  const cells = headerShapes.map(i => shapes[i])

  return (
    <GridDiv {...constants}>
      {cells.map((i, index) => (
        <Cell key={`header${index}`}>
          <Item {...i.item} />
        </Cell>
      ))}
    </GridDiv>
  )
}

const GridDiv = styled(Grid)<{ border: number }>`
  top: 0;
  padding: ${({ border }) => `${border}px ${border}px 0`};
`

export default Header
