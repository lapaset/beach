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
`
const Button = styled.button`
  background: transparent;
  padding: 8px 0;
  width: 196px;
  border: 4px solid transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  letter-spacing: 2px;

  &:hover {
    border: 4px solid black;
  }

  &:active {
    border: 4px solid black;
    letter-spacing: 4px;
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    & {
      padding: 4px 8px;
      width: 80px;
      border: 2px solid black;
      font-size: 11px;
      letter-spacing: 1px;
    }

    &:hover {
      border: 2px solid black;
    }

    &:active {
      border: 2px solid black;
      letter-spacing: 2px;
    }
  }
`
