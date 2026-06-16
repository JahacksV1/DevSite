import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'purple' | 'outline'
  size?: 'sm' | 'md'
  interactive?: boolean
  className?: string
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  interactive = false,
  className,
}: BadgeProps) => {
  const baseClasses =
    'inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200'

  const variantClasses = {
    default: cn(
      'bg-bg-tertiary border border-border-subtle text-text-secondary',
      interactive && 'hover:border-primary hover:text-primary'
    ),
    success: 'bg-primary/10 border border-primary/30 text-primary',
    purple: cn(
      'bg-secondary/10 border border-secondary/30 text-secondary',
      interactive && 'hover:bg-secondary/20'
    ),
    outline: cn(
      'bg-transparent border border-border-default text-text-secondary',
      interactive && 'hover:border-primary hover:text-primary'
    ),
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  }

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
