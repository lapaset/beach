import { useEffect, useState } from 'react'

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

  return width <= 768
}