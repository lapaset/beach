import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}
const Grid: FC<Props> = ({ children }) => {
  return <GridDiv>{children}</GridDiv>
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
    grid-template-columns: repeat(20, 22px);
    grid-template-rows: repeat(39, 24px) 22px;
    gap: 0 2px;
    padding: 2px;
  }
`
