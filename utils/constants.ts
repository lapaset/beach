export const MOBILE_BREAKPOINT = 768

const DESKTOP_COLUMNS = 20
const DESKTOP_ROWS = 16
const MOBILE_COLUMNS = 16
const MOBILE_ROWS = 30

export const mobile = {
  border: 2,
  cellInner: 22,
  cells: MOBILE_COLUMNS * MOBILE_ROWS,
  cellWithBorder: 24,
  cellWithBorders: 26,
  columns: MOBILE_COLUMNS,
  gap: 2,
  headerRows: 9,
  rows: MOBILE_ROWS,
}

export const desktop = {
  border: 4,
  cellInner: 44,
  cells: DESKTOP_COLUMNS * DESKTOP_ROWS,
  cellWithBorder: 48,
  cellWithBorders: 52,
  columns: DESKTOP_COLUMNS,
  gap: 4,
  headerRows: 8,
  rows: DESKTOP_ROWS,
}