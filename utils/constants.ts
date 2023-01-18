export type ScreenSize = 'mobile' | 'desktop'

export const breakpoints: Record<ScreenSize, number> = {
  mobile: 768,
  desktop: 9999,
}

const borders: Record<ScreenSize, number> = {
  mobile: 2,
  desktop: 4,
}

const cellSizes: Record<ScreenSize, number> = {
  mobile: 22,
  desktop: 44,
}

export interface Constants {
  border: number
  cellInner: number
  cellWithBorder: number
  cellWithBorders: number
  gap: number
}

export const getConstants = (size: ScreenSize): Constants => ({
  border: borders[size],
  cellInner: cellSizes[size],
  cellWithBorder: cellSizes[size] + borders[size],
  cellWithBorders: cellSizes[size] + 2 * borders[size],
  gap: borders[size],
})
