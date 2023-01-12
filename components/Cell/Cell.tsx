import { FC, ReactNode } from 'react'
import styled from 'styled-components'

export interface CellProps {
  cellHeight?: string
  cellMarginLeft?: string
  cellMarginTop?: string
  cellWidth?: string
  children: ReactNode
  overflow?: string
}

const Cell: FC<CellProps> = props => {
  const { children, ...rest } = props
  return <CellDiv {...rest}>{children}</CellDiv>
}

const CellDiv = styled.div<Omit<CellProps, 'children'>>`
  height: ${({ cellHeight }) => (cellHeight ? cellHeight : '100%')};
  width: ${({ cellWidth }) => (cellWidth ? cellWidth : '100%')};
  background: white;
  margin-left: ${({ cellMarginLeft }) =>
    cellMarginLeft ? cellMarginLeft : 'auto'};
  margin-top: ${({ cellMarginTop }) =>
    cellMarginTop ? cellMarginTop : 'auto'};
  position: relative;
  overflow: ${({ overflow }) =>
    overflow ? overflow : 'visible'};
`

export default Cell
