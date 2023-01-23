import { FC } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

type Props = {
  visits: number
}

const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0')

const CounterHeader: FC<Props> = ({ visits }) => {
  const visitCount = zeroPad(visits, 6)

  const reload = () => {
    window.location.reload()
  }

  return (
    <HeaderRow>
      <h1>{visitCount}</h1>
      <Button onClick={reload}>Refresh</Button>
    </HeaderRow>
  )
}

export default CounterHeader

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;

  @media only screen and (max-width: ${breakpoints.mobile}px) { 
    & {
      align-items: center;
    }
  }
`

const Button = styled.button`
  background: transparent;
  color: black;
  padding: 8px 0;
  width: 196px;
  border: 4px solid transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  letter-spacing: 2px;
  border-style: solid;
  border-width: 4px;
  color: black;
  border-color: transparent;
  transition: letter-spacing 0.5s, border 0.8s;

  &:hover {
    border-color: black;
  }

  &:active {
    border-color: black;
    letter-spacing: 4px;
  }

  @media (prefers-color-scheme: dark) {
    & {
      color: white;
    }
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    & {
      padding: 4px 8px;
      width: 80px;
      border-width: 2px;
      font-size: 11px;
      letter-spacing: 1px;
      border-color: black;
    }

    &:active {
      letter-spacing: 2px;
    }
  }
`
