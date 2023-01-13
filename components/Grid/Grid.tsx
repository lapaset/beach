import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  rows: number
  mobileRows: number
}

const Grid: FC<Props> = (props) => {
  const {children, ...rest} = props
  return <GridDiv {...rest}>{children}</GridDiv>
}

export default Grid

const GridDiv = styled.div<Omit<Props, 'children'>>`
  display: grid;
  position: absolute;
  grid-template-columns: repeat(20, 44px);
  grid-template-rows: ${({rows}) => `repeat(${rows - 1}, 48px) 44px`};
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
    grid-template-rows: ${({mobileRows}) => `repeat(${mobileRows - 1}, 24px) 22px`};
    gap: 0 2px;
  }
`
