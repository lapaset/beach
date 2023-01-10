import { FC } from "react"
import styled from "styled-components"
import styles from "./cell.module.scss"

export interface CellProps {
  background?: string
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

const Cell: FC<CellProps> = (props) => {
  return <Item className={styles.cell} {...props} />
}

const Item = styled.div<CellProps>`
  background: ${({background}) => background};
  border-bottom: ${({borderBottom}) => borderBottom}; 
  border-left: ${({borderLeft}) => borderLeft};
  border-radius: ${({borderRadius}) => borderRadius};
  border-right: ${({borderRight}) => borderRight};
  border-top: ${({borderTop}) => borderTop};
  grid-column: ${({gridColumn}) => gridColumn};
  grid-row: ${({gridRow}) => gridRow};
  height: ${({height}) => height};
  margin-bottom: ${({marginBottom}) => marginBottom};
  margin-left: ${({marginLeft}) => marginLeft};
  margin-right: ${({marginRight}) => marginRight};
  margin-top: ${({marginTop}) => marginTop};
  outline: ${({outline}) => outline};
  outline-offset: ${({outlineOffset}) => outlineOffset};
  width: ${({width}) => width};
  z-index: ${({zIndex}) => zIndex};
`

export default Cell