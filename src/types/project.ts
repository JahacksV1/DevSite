/**
 * Project types for the portfolio showcase
 * See POSITIONING_STRATEGY.md for project categorization
 */

export type ProjectCategory =
  | 'saas'
  | 'ai'
  | 'automation'
  | 'integration'
  | 'video'
  | 'legal'

export interface TechStackItem {
  name: string
  icon?: string
}

export interface ProjectMetric {
  label: string
  value: string
  description?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface ProjectResults {
  metrics: ProjectMetric[]
  testimonial?: Testimonial
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  category: ProjectCategory
  techStack: TechStackItem[]
  image: string
  images?: string[]
  featured: boolean
  completedAt: Date | string
  timeline?: string
  priceRange?: string
  challenge?: string
  solution?: string
  results?: ProjectResults
}

// Category display configuration
export const PROJECT_CATEGORIES = [
  { value: 'saas', label: 'Custom SaaS', icon: 'Layers' },
  { value: 'ai', label: 'AI Integration', icon: 'Brain' },
  { value: 'automation', label: 'Automation', icon: 'Workflow' },
  { value: 'integration', label: 'Integrations', icon: 'Plug' },
  { value: 'video', label: 'Video/Comms', icon: 'Video' },
  { value: 'legal', label: 'Legal Tech', icon: 'Scale' },
] as const

export type CategoryValue = (typeof PROJECT_CATEGORIES)[number]['value']
