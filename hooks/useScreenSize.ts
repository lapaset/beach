import { useEffect, useState } from 'react';

export const useScreenSize = (): { height: number; width: number } => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)

  const handleWindowSizeChange = () => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
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

  return { height, width }
}
