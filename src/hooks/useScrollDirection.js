import { useEffect, useState } from 'react'

export default function useScrollDirection() {
  const [dir, setDir] = useState('down')
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setDir(y > lastY ? 'down' : 'up')
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return dir
}
