'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'

const SHOW_DELAY_MS = 150

/**
 * Progress bar only when navigation is slow enough to notice.
 * Instant prefetched route changes skip the bar entirely.
 */
export const NavigationProgress = () => {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const showTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const prevPathnameRef = useRef(pathname)

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      clearTimeout(showTimerRef.current)
      setVisible(false)
      prevPathnameRef.current = pathname
    }
  }, [pathname])

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
        return
      }
      if (href === pathname) return

      clearTimeout(showTimerRef.current)
      showTimerRef.current = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    }

    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
      clearTimeout(showTimerRef.current)
    }
  }, [pathname, prefersReducedMotion])

  if (prefersReducedMotion || !visible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-primary origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      aria-hidden
    />
  )
}
