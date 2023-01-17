import { FC } from 'react'
import styled from 'styled-components'

export interface ItemProps {
  background?: string
  borderRadius?: string
  borderWidth?: string
  gridColumn?: string
  gridRow?: string
  height?: string
  isFirstRow?: boolean
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  width?: string
  zIndex?: string
}

const Item: FC<ItemProps> = props => <ItemDiv {...props} />

const ItemDiv = styled.div<ItemProps>`
  position: relative;
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-style: ${({ borderWidth }) => borderWidth ? 'solid' : 'none'};
  border-width: ${({ borderWidth }) => borderWidth};
  color: black;
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  height: ${({ height }) => height};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ isFirstRow, marginTop }) => isFirstRow ? 0 : marginTop};
  width: ${({ width }) => width};
  z-index: ${({ zIndex }) => zIndex};

  @media (prefers-color-scheme: dark) {
    & {
      background: ${({ background }) =>
        background === 'white' ? 'black' : background};
      color: white;
    }
  }
`

export default Item
