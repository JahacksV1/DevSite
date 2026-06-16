'use client'

import { useEffect, type ReactNode } from 'react'
import { initializeCalEmbed } from '@/lib/integrations/cal'

interface CalProviderProps {
  children: ReactNode
}

/**
 * CalProvider - Initializes Cal.com immediately on mount
 * Script is preloaded in layout for instant availability
 */
export const CalProvider = ({ children }: CalProviderProps) => {
  useEffect(() => {
    // Wait for Cal script to load, then initialize
    const initCal = () => {
      if (window.Cal) {
        initializeCalEmbed()
      } else {
        // Retry every 100ms until loaded
        setTimeout(initCal, 100)
      }
    }

    initCal()
  }, [])

  return <>{children}</>
}

export default CalProvider
