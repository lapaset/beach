import dynamic from 'next/dynamic'
import Head from 'next/head'
import Grid from '../components/Grid/Grid'
import Item, { ItemProps } from '../components/Item/Item'
import styles from '../styles/Home.module.css'

interface Shape {
  name: string
  probability: number
  item: ItemProps
}

const shapes: Shape[] = [
  {
    name: 'default',
    probability: 15,
    item: {},
  },
  {
    name: 'topRightRounded',
    probability: 2,
    item: {
      background: 'transparent',
      borderWidth: '4px 4px 0 0',
      borderRadius: '0 90% 0 0',
      marginLeft: '-4px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '2',
    },
  },
  {
    name: 'topLeftRounded',
    probability: 1,
    item: {
      background: 'transparent',
      borderWidth: '4px 0 0 4px',
      borderRadius: '90% 0 0 0',
      marginLeft: '-4px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '1',
    },
  },
  {
    name: 'bottomRightRounded',
    probability: 2,
    item: {
      background: 'transparent',
      borderRadius: '0 0 90% 0',
      borderWidth: '0 4px 4px 0',
      marginLeft: '-4px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '2',
    },
  },
  {
    name: 'bottomLeftRounded',
    probability: 1,
    item: {
      background: 'transparent',
      borderRadius: '0 0 0 90%',
      borderWidth: '0 0 4px 4px',
      marginLeft: '-4px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '1',
    },
  },
  {
    name: 'horizontalCell',
    probability: 4,
    item: {
      background: 'white',
      borderWidth: '4px 0',
      marginLeft: '-4px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '0',
    },
  },
]

const randomWithProbability = (array: number[]) => {
  const idx = Math.floor(Math.random() * array.length)
  return array[idx]
}

const createShapePropablityArray = (shapes: Shape[]): number[] =>
  shapes.reduce(
    (previous: number[], current: Shape, index: number): number[] => {
      for (let i = 0; i < current.probability; i++) previous.push(index)
      return previous
    },
    []
  )

export default function Home() {
  const cells = Array.from({ length: 400 }, (_, i) => i).map(
    () => shapes[randomWithProbability(createShapePropablityArray(shapes))]
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
        <Grid className="base-grid">
          {cells.map((i, index) => (
            <DynamicCell key={`base-${index}`}>
              <Item {...i.item} />
            </DynamicCell>
          ))}
        </Grid>
      </main>
    </>
  )
}
