import dynamic from 'next/dynamic'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  const DynamicGrid = dynamic(() => import('../components/Grid/Grid'), {ssr: false})

  return (
    <>
      <Head>
        <title>Beach</title>
        <meta name="description" content="🌴 created for enjoyment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <main className={styles.main}>
        <DynamicGrid />
      </main>
    </>
  )
}

export default Home
