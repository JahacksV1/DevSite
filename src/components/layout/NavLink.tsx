'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

/**
 * NavLink - Ghost-style nav link with active text state.
 * Active underline is rendered by Navigation (desktop) to avoid
 * Framer layoutId bugs when scrolling + route changes overlap.
 */
export const NavLink = ({
  href,
  children,
  onClick,
  className,
}: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      data-nav-link={href}
      onClick={onClick}
      className={cn(
        'relative px-2.5 md:px-3 lg:px-4 py-2 rounded-lg whitespace-nowrap',
        'text-sm lg:text-base font-medium',
        'transition-all duration-200',
        isActive
          ? 'text-primary'
          : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
        className
      )}
    >
      {children}
    </Link>
  )
}
