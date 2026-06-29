'use client'

import type { ReactNode, ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import type { Variants, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type MotionButtonProps = Omit<
  HTMLMotionProps<'button'>,
  'children' | 'disabled'
>

interface ButtonProps extends MotionButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'purple'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  animate?: boolean
  disabled?: boolean
}

const buttonVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -2,
    scale: 1.02,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
  tap: { y: 0, scale: 0.98, transition: { duration: 0.1 } },
}

const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  animate = true,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-primary inline-flex items-center justify-center'

  const variantClasses = {
    primary:
      'bg-gradient-to-br from-primary to-primary-dim text-bg-primary hover:shadow-glow-lg',
    secondary:
      'border-2 border-primary text-primary bg-transparent hover:bg-primary/10 hover:shadow-glow',
    ghost: 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary',
    purple:
      'border-2 border-secondary text-secondary bg-transparent hover:bg-secondary/10 hover:shadow-glow-purple',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const isDisabled = disabled || loading

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    isDisabled && 'opacity-50 cursor-not-allowed',
    className
  )

  const content = (
    <>
      {loading && <LoadingSpinner />}
      {children}
    </>
  )

  if (!animate) {
    return (
      <button
        disabled={isDisabled}
        className={buttonClasses}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    )
  }

  return (
    <motion.button
      variants={buttonVariants}
      initial="rest"
      whileHover={isDisabled ? undefined : 'hover'}
      whileTap={isDisabled ? undefined : 'tap'}
      disabled={isDisabled}
      className={buttonClasses}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button
