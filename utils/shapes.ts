import { ItemProps } from "../components/Item/Item"

export interface Shape {
  name: string
  probability: number
  item: ItemProps
}

export const getShapes = (border: number, cell: number): Shape[] => {

  return [
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
        borderWidth: `${border}px ${border}px 0 0`,
        borderRadius: '0 90% 0 0',
        marginLeft: `-${border}px`,
        marginTop: `-${border}px`,
        width: `${cell}px`,
        height: `${cell}px`,
        zIndex: '2',
      },
    },
    {
      name: 'topLeftRounded',
      probability: 1,
      item: {
        background: 'transparent',
        borderWidth: `${border}px 0 0 ${border}px`,
        borderRadius: '90% 0 0 0',
        marginLeft: `-${border}px`,
        marginTop: `-${border}px`,
        width: `${cell}px`,
        height: `${cell}px`,
        zIndex: '1',
      },
    },
    {
      name: 'bottomRightRounded',
      probability: 2,
      item: {
        background: 'transparent',
        borderRadius: '0 0 90% 0',
        borderWidth: `0 ${border}px ${border}px 0`,
        marginLeft: `-${border}px`,
        marginTop: `-${border}px`,
        width: `${cell}px`,
        height: `${cell}px`,
        zIndex: '2',
      },
    },
    {
      name: 'bottomLeftRounded',
      probability: 1,
      item: {
        background: 'transparent',
        borderRadius: '0 0 0 90%',
        borderWidth: `0 0 ${border}px ${border}px`,
        marginLeft: `-${border}px`,
        marginTop: `-${border}px`,
        width: `${cell}px`,
        height: `${cell}px`,
        zIndex: '1',
      },
    },
    {
      name: 'horizontalCell',
      probability: 4,
      item: {
        background: 'white',
        borderWidth: `${border}px 0`,
        marginLeft: `-${border}px`,
        marginTop: `-${border}px`,
        width: `${cell}px`,
        height: `${cell}px`,
        zIndex: '0',
      },
    },
  ]
}
