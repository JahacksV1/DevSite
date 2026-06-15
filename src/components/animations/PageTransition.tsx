'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

/**
 * Lightweight enter-only fade for route changes.
 * Avoids AnimatePresence "wait" mode, which caused a visible double-load
 * (exit fade + enter fade + hero mount animations stacking).
 */
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  },
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div key={pathname}>{children}</div>
  }

  return (
    <motion.div
      key={pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  )
}
