'use client'

import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'purple'
  interactive?: boolean
  animate?: boolean
  className?: string
  onClick?: () => void
}

const cardVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
}

export const Card = ({
  children,
  variant = 'default',
  interactive = false,
  animate = true,
  className,
  onClick,
}: CardProps) => {
  const baseClasses =
    'rounded-lg bg-bg-secondary border transition-all duration-300'

  const variantClasses = {
    default: cn(
      'p-6 border-border-subtle',
      interactive &&
        'hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]'
    ),
    elevated: cn(
      'p-8 rounded-xl border-border-default shadow-md',
      interactive &&
        'hover:shadow-lg hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,198,0.2)]'
    ),
    purple: cn(
      'p-6 border-border-subtle',
      interactive &&
        'hover:border-secondary hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]'
    ),
  }

  const isClickable = interactive || onClick

  if (animate && isClickable) {
    return (
      <motion.div
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        onClick={onClick}
        className={cn(
          baseClasses,
          variantClasses[variant],
          isClickable && 'cursor-pointer',
          className
        )}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        isClickable && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
