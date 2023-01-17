import { useEffect, useState } from 'react'
import { MOBILE_BREAKPOINT } from '../utils/constants'

export const useIsMobile = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  const handleWindowSizeChange = () => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
      }
    }
  }, [])

  return width <= MOBILE_BREAKPOINT
}
