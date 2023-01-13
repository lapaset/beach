import { ItemProps } from "../components/Item/Item"

export interface Shape {
  name: string
  probability: number
  item: ItemProps
}

export const getShapes = (isMobile: boolean): Shape[] => {
  const border = isMobile ? '2px' : '4px'
  const cell = isMobile ? '26px' : '52px'

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
        borderWidth: `${border} ${border} 0 0`,
        borderRadius: '0 90% 0 0',
        marginLeft: `-${border}`,
        marginTop: `-${border}`,
        width: `${cell}`,
        height: `${cell}`,
        zIndex: '2',
      },
    },
    {
      name: 'topLeftRounded',
      probability: 1,
      item: {
        background: 'transparent',
        borderWidth: `${border} 0 0 ${border}`,
        borderRadius: '90% 0 0 0',
        marginLeft: `-${border}`,
        marginTop: `-${border}`,
        width: `${cell}`,
        height: `${cell}`,
        zIndex: '1',
      },
    },
    {
      name: 'bottomRightRounded',
      probability: 2,
      item: {
        background: 'transparent',
        borderRadius: '0 0 90% 0',
        borderWidth: `0 ${border} ${border} 0`,
        marginLeft: `-${border}`,
        marginTop: `-${border}`,
        width: `${cell}`,
        height: `${cell}`,
        zIndex: '2',
      },
    },
    {
      name: 'bottomLeftRounded',
      probability: 1,
      item: {
        background: 'transparent',
        borderRadius: '0 0 0 90%',
        borderWidth: `0 0 ${border} ${border}`,
        marginLeft: `-${border}`,
        marginTop: `-${border}`,
        width: `${cell}`,
        height: `${cell}`,
        zIndex: '1',
      },
    },
    {
      name: 'horizontalCell',
      probability: 4,
      item: {
        background: 'white',
        borderWidth: `${border} 0`,
        marginLeft: `-${border}`,
        marginTop: `-${border}`,
        width: `${cell}`,
        height: `${cell}`,
        zIndex: '0',
      },
    },
  ]
}
