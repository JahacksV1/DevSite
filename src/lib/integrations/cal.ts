/**
 * Cal.com Integration
 * Uses global Cal namespace preloaded in layout for instant modal
 */

import { CAL_CONFIG, INTEGRATIONS } from '@/lib/constants'

// Global Cal API type
type CalFunction = (command: string, options?: Record<string, unknown>) => void

declare global {
  interface Window {
    Cal?: CalFunction
  }
}

/**
 * Initialize Cal.com with design system configuration
 * Uses preloaded Cal script for instant initialization
 */
export const initializeCalEmbed = () => {
  if (typeof window === 'undefined') return

  // Wait for Cal to be available
  if (window.Cal) {
    window.Cal('init', { origin: 'https://app.cal.com' })
    window.Cal('ui', CAL_CONFIG)
  }
}

/**
 * Open Cal.com booking modal - INSTANT (no async)
 * Opens as overlay with website background visible
 */
export const openCalModal = () => {
  if (typeof window === 'undefined') return

  if (!window.Cal) {
    // Fallback: open in new tab
    console.warn('Cal.com not loaded, opening in new tab')
    window.open(`https://cal.com/${INTEGRATIONS.calLink}`, '_blank')
    return
  }

  // Open modal as overlay (not fullscreen)
  window.Cal('modal', {
    calLink: INTEGRATIONS.calLink,
    config: {
      ...CAL_CONFIG,
      // Modal overlay settings
      modalOverlay: true,
      modalBackdrop: true,
    },
  })
}
