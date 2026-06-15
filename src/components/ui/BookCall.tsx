'use client'

import { type ReactNode } from 'react'
import Link from 'next/link'
import { Button } from './Button'

interface BookCallProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'purple'
  size?: 'sm' | 'md' | 'lg'
  children?: ReactNode
  className?: string
}

/**
 * BookCall - Links to pre-qualification form before Cal.com booking
 * Filters leads and ensures good fit before scheduling
 *
 * @example
 * <BookCall variant="primary" size="lg">
 *   Book Free Discovery Call
 * </BookCall>
 */
export const BookCall = ({
  variant = 'primary',
  size = 'md',
  children = 'Book a Call',
  className,
}: BookCallProps) => {
  return (
    <Link href="/book-call">
      <Button variant={variant} size={size} className={className}>
        {children}
      </Button>
    </Link>
  )
}

export default BookCall
