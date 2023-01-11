import dynamic from 'next/dynamic'
import Head from 'next/head'
import Grid from '../components/Grid/Grid'
import Item, { ItemProps } from '../components/Item/Item'
import styles from '../styles/Home.module.css'

interface Shape {
  name: string
  item: ItemProps
}

const testCells = [
  {
    name: 'topRightRounded3x3',
    item: {
      background: 'transparent',
      borderRight: '52px solid black',
      borderTop: '52px solid black',
      outline: '44px solid white',
      outlineOffset: '-48px',
      borderRadius: '90%',
      gridColumn: '1 / 4',
      gridRow: '1 / 4',
      marginTop: '0',
      marginLeft: '-148px',
      width: '296px',
      height: '296px',
      zIndex: '4',
    },
  },
]


const shapes: Shape[] = [
  {
    name: 'default',
    item: {},
  },
  {
    name: 'topRightRounded',
    item: {
      background: 'transparent',
      borderRight: '4px solid black',
      borderTop: '4px solid black',
      borderRadius: '0 90% 0 0',
      marginTop: '-4px',
      marginLeft: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '2',
    },
  },
  {
    name: 'topLeftRounded',
    item: {
      background: 'transparent',
      borderLeft: '4px solid black',
      borderTop: '4px solid black',
      borderRadius: '90% 0 0 0',
      width: '52px',
      height: '52px',
      marginTop: '-4px',
      marginLeft: '-4px',
      zIndex: '1',
    },
  },
  {
    name: 'bottomRightRounded',
    item: {
      background: 'transparent',
      borderRight: '4px solid black',
      borderBottom: '4px solid black',
      borderRadius: '0 0 90% 0',
      marginTop: '-4px',
      marginLeft: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '2',
    },
  },
  {
    name: 'bottomLeftRounded',
    item: {
      background: 'transparent',
      borderLeft: '4px solid black',
      borderBottom: '4px solid black',
      borderRadius: '0 0 0 90%',
      marginTop: '-4px',
      marginLeft: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '1',
    },
  },
  {
    name: 'horizontalCell',
    item: {
      background: 'white',
      borderBottom: '4px solid black',
      borderTop: '4px solid black',
      marginLeft: '-4px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '0',
    },
  },
]

const randomWithProbability = () => {
  const notRandomNumbers = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 4, 5, 5, 5, 5,
  ]
  const idx = Math.floor(Math.random() * notRandomNumbers.length)
  return notRandomNumbers[idx]
}

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cells = Array.from({ length: 400 }, (_, i) => i).map(
    _i => shapes[randomWithProbability()]
  )

  const DynamicCell = dynamic(() => import('../components/Cell/Cell'), {
    ssr: false,
  })

  return (
    <>
      <Head>
        <title>Beach</title>
        <meta name="description" content="🌴 created for enjoyment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <main className={styles.main}>
        {/* <Test /> */}
        <Grid className="base-grid">
          {cells.map((i, index) => (
            <DynamicCell key={`base-${index}`}>
              <Item {...i.item} />
            </DynamicCell>
          ))}
        </Grid>
        {/*         <Grid className="test-grid">
          {testCells.map((i, index) => {
              return (<DynamicCell key={index} />)
            }
          )}
        </Grid> */}
      </main>
    </>
  )
}
