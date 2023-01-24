import countapi from 'countapi-js'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Home = () => {
  const [visitCount, setVisitCount] = useState<number | undefined>(undefined)
  const isBrowser = typeof window !== undefined

  const DynamicCounterHeader = dynamic(
    () => import('../components/CounterHeading/CounterHeading'),
    { ssr: false }
  )

  const DynamicGrid = dynamic(
    () => import('../components/RandomisedGrid/RandomisedGrid'),
    { ssr: false }
  )

  useEffect(() => {
    const countVisits = async () => {
      const visits = await countapi.visits()
      setVisitCount(visits.value)
    }
    if (isBrowser) {
      countVisits()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Shapes</title>
        <meta name="description" content="🌴 created for enjoyment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'true'}
        />
      </Head>
      {visitCount && (
        <Main>
          <Container>
            <DynamicCounterHeader visits={visitCount} />
            <DynamicGrid />
          </Container>
        </Main>
      )}
      <Footer>

      </Footer>
    </>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 90vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.p`

`

export default Home
