'use client'

import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavLink } from './NavLink'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/how-we-build', label: 'How We Build' },
  { href: '/pricing', label: 'Pricing' },
]

/**
 * Navigation - Main navigation component
 * Features: sticky, blur backdrop, scroll-aware, glow effects
 */
export const Navigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })
  const navContainerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 10)
  })

  const updateIndicator = useCallback(() => {
    const container = navContainerRef.current
    if (!container) return

    const active = container.querySelector(`[data-nav-link="${pathname}"]`) as HTMLElement | null
    if (!active) {
      setIndicator({ left: 0, width: 0, visible: false })
      return
    }

    const containerRect = container.getBoundingClientRect()
    const activeRect = active.getBoundingClientRect()
    const inset = 8

    setIndicator({
      left: activeRect.left - containerRect.left + inset,
      width: Math.max(activeRect.width - inset * 2, 0),
      visible: true,
    })
  }, [pathname])

  useLayoutEffect(() => {
    updateIndicator()
  }, [updateIndicator])

  useEffect(() => {
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [updateIndicator])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle shadow-lg shadow-black/10'
          : 'bg-bg-primary/60 backdrop-blur-md border-b border-transparent'
      )}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary rounded-lg"
          >
            <motion.div
              className={cn(
                'w-8 h-8 rounded-lg',
                'bg-gradient-to-br from-primary to-primary-dim',
                'flex items-center justify-center',
                'transition-shadow duration-300',
                'group-hover:shadow-glow'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-bg-primary font-bold text-sm">D</span>
            </motion.div>
            <span className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
              Day One Labs
            </span>
          </Link>

          <div ref={navContainerRef} className="relative hidden md:flex items-center gap-1">
            {indicator.visible && (
              <motion.span
                className="absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-dim pointer-events-none"
                animate={{ left: indicator.left, width: indicator.width }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                aria-hidden
              />
            )}
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/20 transition-all duration-200"
            >
              View Projects
            </Link>
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg',
              'text-text-secondary hover:text-text-primary',
              'hover:bg-bg-tertiary',
              'transition-colors duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            )}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </motion.div>
          </motion.button>
        </nav>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.header>
  )
}
