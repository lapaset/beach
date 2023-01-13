import dynamic from 'next/dynamic'
import Head from 'next/head'
import styled from 'styled-components'

const Home = () => {
  const DynamicGrid = dynamic(
    () => import('../components/RandomisedGrid/RandomisedGrid'),
    { ssr: false }
  )

  const DynamicHeader = dynamic(
    () => import('../components/Header/Header'),
    { ssr: false }
  )

  return (
    <>
      <Head>
        <title>Beach</title>
        <meta name="description" content="🌴 created for enjoyment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <Main>
        <DynamicHeader />
        <DynamicGrid />
      </Main>
    </>
  )
}

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default Home
