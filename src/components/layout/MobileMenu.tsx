'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from './NavLink'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { href: '/', label: 'Portfolio' },
  { href: '/projects', label: 'Projects' },
  { href: '/how-we-build', label: 'How We Build' },
  { href: '/pricing', label: 'Pricing' },
]

// Animation variants from ANIMATION_SYSTEM.md
const menuVariants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1], // easeIn for exit
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1], // easeOut for enter
    },
  },
}

const itemVariants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0 },
}

/**
 * MobileMenu - Animated mobile navigation drawer
 * Follows stagger animation pattern from ANIMATION_SYSTEM.md
 */
export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className={cn(
            'md:hidden absolute top-full left-0 right-0',
            'bg-bg-secondary/95 backdrop-blur-lg',
            'border-t border-b border-border-subtle',
            'shadow-lg shadow-black/20'
          )}
        >
          <nav className="container-main py-6">
            <motion.div
              className="flex flex-col gap-2"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <NavLink
                    href={link.href}
                    onClick={onClose}
                    className="w-full"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="pt-4 mt-2 border-t border-border-subtle"
              >
                <NavLink href="/" onClick={onClose} className="w-full">
                  View Portfolio →
                </NavLink>
              </motion.div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
