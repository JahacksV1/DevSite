import { useState, useCallback } from 'react'

interface UseDisclosureReturn {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

/**
 * Hook for managing open/close state (modals, menus, etc.)
 *
 * @param initialState - Initial open state (default: false)
 * @returns Object with isOpen state and control functions
 *
 * @example
 * const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
 *
 * <Button onClick={onOpen}>Open Menu</Button>
 * {isOpen && <Menu onClose={onClose} />}
 */
export const useDisclosure = (initialState = false): UseDisclosureReturn => {
  const [isOpen, setIsOpen] = useState(initialState)

  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return { isOpen, onOpen, onClose, onToggle }
}

export default useDisclosure
