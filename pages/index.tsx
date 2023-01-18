import dynamic from 'next/dynamic'
import Head from 'next/head'
import styled from 'styled-components'

const Home = () => {
  const DynamicGrid = dynamic(
    () => import('../components/RandomisedGrid/RandomisedGrid'),
    { ssr: false }
  )

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
      <Main>
        <Container>
          <h1>Random shapes</h1>
          <DynamicGrid />
        </Container>
      </Main>
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

export default Home
