export type ScreenSize = 'mobile' | 'tablet' | 'desktop'

export const breakpoints: Record<ScreenSize, number> = {
  mobile: 768,
  tablet: 1024,
  desktop: 9999,
}

const constants = {
  mobile: {
    border: 2,
    cellInner: 22,
    horizontalMargin: 80,
    verticalMargin: 120,
  },
  tablet: {
    border: 4,
    cellInner: 44,
    horizontalMargin: 160,
    verticalMargin: 120,
  },
  desktop: {
    border: 4,
    cellInner: 44,
    horizontalMargin: 500,
    verticalMargin: 120,
  },
}

export interface Constants {
  border: number
  cellInner: number
  cellWithBorder: number
  cellWithBorders: number
  gap: number
  horizontalMargin: number
  verticalMargin: number
}

export const getConstants = (size: ScreenSize): Constants => {
  const values = constants[size]
  return {
    ...values,
    cellWithBorder: values.cellInner + values.border,
    cellWithBorders: values.cellInner + 2 * values.border,
    gap: values.border,
  }
}
