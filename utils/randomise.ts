import { Shape } from './shapes'

export const randomWithProbability = (array: number[]) => {
  const idx = Math.floor(Math.random() * array.length)
  return array[idx]
}

export const createShapePropablityArray = (shapes: Shape[]): number[] =>
  shapes.reduce(
    (previous: number[], current: Shape, index: number): number[] => {
      for (let i = 0; i < current.probability; i++) previous.push(index)
      return previous
    },
    []
  )
