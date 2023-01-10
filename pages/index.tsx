import dynamic from 'next/dynamic'
import Head from 'next/head'
import { CellProps } from '../components/Cell/Cell'
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
      marginTop: "0",
      marginLeft: "-148px",
      width: "302px",
      height: "302px",
      zIndex: "4"
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
      background: "transparent",
      borderRight: "4px solid black",
      borderTop: "4px solid black",
      borderRadius: "0 90% 0 0",
      marginTop: "-4px",
      marginLeft: "-4px",
      width: "54px",
      zIndex: "1"
    },
    next: {
    },
    previous: {}
  },
  {
    name: "topLeftRounded",
    item: {
      background: "transparent",
      borderLeft: "4px solid black",
      borderTop: "4px solid black",
      borderRadius: "90% 0 0 0",
      width: "54px",
      marginTop: "-4px",
      marginLeft: "-4px",
      zIndex: "1"
    },
    next: {
    },
    previous: {}
  },
  {
    name: "bottomRightRounded",
    item: {
      background: "transparent",
      borderRight: "4px solid black",
      borderBottom: "4px solid black",
      borderRadius: "0 0 90% 0",
      marginLeft: "-4px",
      width: "54px",
      zIndex: "1"
    },
    next: {
    },
    previous: {}
  },
  {
    name: "bottomLeftRounded",
    item: {
      background: "transparent",
      borderLeft: "4px solid black",
      borderBottom: "4px solid black",
      borderRadius: "0 0 0 90%",
      marginLeft: "-4px",
      width: "54px",
      zIndex: "1"
    },
    next: {
    },
    previous: {}
  },
  {
    name: "horizontalCell",
    item: {
      borderBottom: "4px solid black",
      borderTop: "4px solid black",
      marginLeft: "-4px",
      marginTop: "-4px",
      width: "54px",
      height: "52px",
      zIndex: "0"
    },
    next: {
    },
    previous: {}
  }
]

const isBorderColumn = (i: number) => (i + 1) % 20 === 0 ||( i + 1) % 20 === 1 

const randomWithProbability = () =>{
  var notRandomNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 4, 5, 5, 5, 5];
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
            (<DynamicCell key={`base-${index}`}/>))}
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
