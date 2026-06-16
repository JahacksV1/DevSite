import type { ReactNode } from 'react'

/**
 * Global utility types used across the application
 */

// Component prop helpers
export type WithClassName<T = object> = T & { className?: string }
export type WithChildren<T = object> = T & { children: ReactNode }
export type WithClassNameAndChildren<T = object> = T & {
  className?: string
  children: ReactNode
}

// Make specific properties optional
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// Make all properties required
export type RequiredAll<T> = { [K in keyof T]-?: T[K] }

// Extract component props
export type ComponentProps<T> =
  T extends React.ComponentType<infer P> ? P : never

// Animation prop helper
export type WithAnimation<T = object> = T & {
  animate?: boolean
  delay?: number
}

// Common API response type
export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
  error?: string
}

// Form submission status
export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

// Navigation link type
export interface NavLink {
  label: string
  href: string
  isExternal?: boolean
}

// Social link type
export interface SocialLink {
  platform: string
  url: string
  icon: string
}
