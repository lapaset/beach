import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface CellProps {
  children: ReactNode
}

const Cell: FC<CellProps> = ({ children }) => <CellDiv>{children}</CellDiv>

const CellDiv = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  position: relative;
`

export default Cell