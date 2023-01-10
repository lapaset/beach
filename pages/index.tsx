import dynamic from 'next/dynamic'
import Head from 'next/head'
import Cell, { CellProps } from '../components/Cell/Cell'
import Grid from '../components/Grid/Grid'
import styles from '../styles/Home.module.css'

interface Shape {
  name: string
  item: CellProps,
  next: CellProps,
  previous: CellProps
}

const testCells = [
  {
    name: "topRightRounded3x3",
    item: {
      background: "transparent",
      borderRight: "54px solid black",
      borderTop: "54px solid black",
      outline: "46px solid white",
      outlineOffset: "-50px",
      borderRadius: "90%",
      gridColumn: "1 / 4",
      gridRow: "1 / 4",
      marginTop: "-2",
      marginLeft: "-150px",
      width: "300px",
      height: "300px"
    }
  }
]

const shapes: Shape[] = [
  {
    name: "default",
    item: {},
    next: {},
    previous: {}
  },
  {
    name: "topRightRounded",
    item: {
      borderRight: "4px solid black",
      borderTop: "4px solid black",
      borderRadius: "0 90% 0 0",
      marginTop: "-2px",
      width: "50px"
    },
    next: {
    },
    previous: {}
  },
  {
    name: "topLeftRounded",
    item: {
      borderLeft: "4px solid black",
      borderTop: "4px solid black",
      borderRadius: "90% 0 0 0",
      width: "50px",
      marginTop: "-2px",
      marginLeft: "-4px"
    },
    next: {
    },
    previous: {}
  },
  {
    name: "topBorder",
    item: {
      borderTop: "4px solid black",
      marginTop: "-2px",
    },
    next: {
    },
    previous: {}
  }
]

const isBorderColumn = (i: number) => (i + 1) % 20 === 0 ||( i + 1) % 20 === 1 

const randomWithProbability = () =>{
  var notRandomNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3];
  var idx = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[idx];
}

export default function Home() {
  const cells = Array.from({length: 400}, (_, i) => i).map(_i => shapes[randomWithProbability()])

  const DynamicCell = dynamic(() => import('../components/Cell/Cell'), {ssr: false})

  return (
    <>
      <Head>
        <title>Beach</title>
        <meta name="description" content="🌴 created for enjoyment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes='any' type="image/svg+xml" />
      </Head>
      <main className={styles.main}>
        <Grid className="base-grid">
          {cells.map((i, index) =>
            (<Cell key={`base-${index}`}/>))}
        </Grid>
        <Grid className="grid">
          {cells.map((i, index) => {
              const item = isBorderColumn(index) ? {} : i.item 
              return (<DynamicCell key={index} {...item} />)
            }
          )}
        </Grid>
        <Grid className="test-grid">
          {testCells.map((i, index) => {
              return (<DynamicCell key={index} {...i.item} />)
            }
          )}
        </Grid>
      </main>
    </>
  )
}
