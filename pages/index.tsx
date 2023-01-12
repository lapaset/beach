import dynamic from 'next/dynamic'
import Head from 'next/head'
import { CellProps } from '../components/Cell/Cell'
import Grid from '../components/Grid/Grid'
import Item, { ItemProps } from '../components/Item/Item'
import styles from '../styles/Home.module.css'

interface Shape {
  name: string
  probability: number
  item: ItemProps & Omit<CellProps, 'children'>
}

const shapes: Shape[] = [
  {
    name: 'default',
    probability: 30,
    item: {},
  },
  {
    name: 'topRightRounded',
    probability: 8,
    item: {
      background: 'transparent',
      borderRight: '4px solid black',
      borderTop: '4px solid black',
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
    probability: 6,
    item: {
      background: 'transparent',
      borderLeft: '4px solid black',
      borderTop: '4px solid black',
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
    probability: 6,
    item: {
      background: 'transparent',
      borderRight: '4px solid black',
      borderBottom: '4px solid black',
      borderRadius: '0 0 90% 0',
      marginLeft: '-4px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '2',
    },
  },
  {
    name: 'bottomLeftRounded',
    probability: 8,
    item: {
      background: 'transparent',
      borderLeft: '4px solid black',
      borderBottom: '4px solid black',
      borderRadius: '0 0 0 90%',
      marginLeft: '-4px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '1',
    },
  },
  {
    name: 'horizontalCell',
    probability: 35,
    item: {
      background: 'white',
      borderBottom: '4px solid black',
      borderTop: '4px solid black',
      marginLeft: '-4px',
      cellWidth: '52px',
      marginTop: '-4px',
      width: '52px',
      height: '52px',
      zIndex: '0',
    },
  },
  {
    name: 'topLeftRounded3x3',
    probability: 1,
    item: {
      background: 'transparent',
      border: '52px solid black',
      cellHeight: '148px',
      cellMarginLeft: '-4px',
      cellMarginTop: '-4px',
      cellWidth: '144px',
      outline: `44px solid white`,
      outlineOffset: '-48px',
      borderRadius: '90%',
      overflow: 'hidden',
      width: '296px',
      height: '296px',
      zIndex: '800',
    },
  },
  {
    name: 'topRightRounded3x3',
    probability: 1,
    item: {
      background: 'transparent',
      border: '52px solid black',
      cellHeight: '148px',
      cellMarginLeft: '-4px',
      cellMarginTop: '-4px',
      cellWidth: '148px',
      outline: `44px solid white`,
      outlineOffset: '-48px',
      borderRadius: '90%',
      marginLeft: '-148px',
      overflow: 'hidden',
      width: '296px',
      height: '296px',
      zIndex: '800',
    },
  },
  {
    name: 'bottomLeftRounded3x3',
    probability: 1,
    item: {
      background: 'transparent',
      border: '52px solid black',
      cellHeight: '148px',
      cellMarginLeft: '-4px',
      cellMarginTop: '-4px',
      cellWidth: '144px',
      outline: `44px solid white`,
      outlineOffset: '-48px',
      borderRadius: '90%',
      marginTop: '-148px',
      overflow: 'hidden',
      width: '296px',
      height: '296px',
      zIndex: '3',
    },
  },
  {
    name: 'bottomRightRounded3x3',
    probability: 1,
    item: {
      background: 'transparent',
      border: '52px solid black',
      cellHeight: '148px',
      cellMarginLeft: '-4px',
      cellMarginTop: '-4px',
      cellWidth: '148px',
      outline: `44px solid white`,
      outlineOffset: '-48px',
      borderRadius: '90%',
      marginLeft: '-148px',
      marginTop: '-148px',
      overflow: 'hidden',
      width: '296px',
      height: '296px',
      zIndex: '3',
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

const smallShapesArrayWithProbabilities = createShapePropablityArray(shapes)

const allShapesArrayWithProbabilities = createShapePropablityArray(shapes)

export default function Home() {
  const cells = [
    ...Array.from({ length: 200 }, (_, i) => i).map(
      () => shapes[randomWithProbability(smallShapesArrayWithProbabilities)]
    ),
    ...Array.from({ length: 200 }, (_, i) => i).map(
      () => shapes[randomWithProbability(allShapesArrayWithProbabilities)]
    ),
  ]

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
            <DynamicCell
              cellHeight={i.item.cellHeight}
              cellMarginLeft={i.item.cellMarginLeft}
              cellMarginTop={i.item.cellMarginTop}
              cellWidth={i.item.cellWidth}
              key={`base-${index}`}
              overflow={i.item.overflow}
            >
              <Item {...i.item} />
            </DynamicCell>
          ))}
        </Grid>
      </main>
    </>
  )
}
