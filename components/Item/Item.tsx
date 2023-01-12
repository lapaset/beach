import { FC } from 'react'
import styled from 'styled-components'

export interface ItemProps {
  background?: string
  border?: string
  borderBottom?: string
  borderLeft?: string
  borderRight?: string
  borderTop?: string
  borderRadius?: string
  gridColumn?: string
  gridRow?: string
  height?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  outline?: string
  outlineOffset?: string
  width?: string
  zIndex?: string
}

const Item: FC<ItemProps> = props => <ItemDiv {...props} />

const ItemDiv = styled.div<ItemProps>`
  position: relative;
  background: ${({ background }) => background};
  border: ${({border}) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-right: ${({ borderRight }) => borderRight};
  border-top: ${({ borderTop }) => borderTop};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  height: ${({ height }) => height};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  outline: ${({ outline }) => outline};
  outline-offset: ${({ outlineOffset }) => outlineOffset};
  width: ${({ width }) => width};
  z-index: ${({ zIndex }) => zIndex};
`

export default Item
