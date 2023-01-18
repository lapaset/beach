import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Constants } from '../../utils/constants'

type Props = Constants & {
  children: ReactNode
  columns: number
  rows: number
}

const Grid: FC<Props> = props => {
  const { children, ...rest } = props
  return <GridDiv {...rest}>{children}</GridDiv>
}

export default Grid

const GridDiv = styled.div<Omit<Props, 'children'>>`
  display: grid;
  position: relative;
  grid-template-columns: ${({ cellInner, columns }) =>
    `repeat(${columns}, ${cellInner}px)`};
  grid-template-rows: ${({ cellWithBorder, cellWithBorders, rows }) =>
    `${cellWithBorders}px repeat(${rows - 1}, ${cellWithBorder}px)`};
  gap: ${({gap}) => `0 ${gap}px`};
  background: black;
  z-index: -1;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    & {
      background: white;
    }
  }
`
