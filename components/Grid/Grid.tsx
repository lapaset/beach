import { FC, ReactNode } from 'react'
import styles from './grid.module.scss'

interface Props {
  children: ReactNode
  className: string
}

const Grid: FC<Props> = ({ children, className }) => {
  return <div className={styles[className]}>{children}</div>
}

export default Grid;