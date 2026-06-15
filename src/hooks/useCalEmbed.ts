'use client'

import { useEffect, useState, useCallback } from 'react'
import { initializeCalEmbed, openCalModal } from '@/lib/integrations/cal'

interface UseCalEmbedReturn {
  isReady: boolean
  isLoading: boolean
  openModal: () => Promise<void>
}

/**
 * Hook for Cal.com embed functionality
 * Initializes Cal.com on mount and provides modal controls
 *
 * @returns Object with ready state and openModal function
 *
 * @example
 * const { isReady, openModal } = useCalEmbed()
 * <Button onClick={openModal} disabled={!isReady}>Book Call</Button>
 */
export const useCalEmbed = (): UseCalEmbedReturn => {
  const [isReady, setIsReady] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      try {
        await initializeCalEmbed()
        setIsReady(true)
      } catch (error) {
        console.error('Cal.com initialization failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    init()
  }, [])

  const openModal = useCallback(async () => {
    await openCalModal()
  }, [])

  return { isReady, isLoading, openModal }
}

export default useCalEmbed
