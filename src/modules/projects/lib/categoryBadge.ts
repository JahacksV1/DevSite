import type { Project } from './projectsData'

type ProjectCategory = Project['category']

const categoryStyles: Record<ProjectCategory, string> = {
  Enterprise: 'bg-secondary/10 border-secondary/30 text-secondary',
  Fintech: 'bg-primary/10 border-primary/30 text-primary',
  'Legal Tech': 'bg-primary/10 border-primary/25 text-primary',
  Consumer: 'bg-secondary/10 border-secondary/25 text-secondary',
  'Internal Tool': 'bg-text-muted/10 border-text-muted/30 text-text-secondary',
  'Local Business': 'bg-bg-tertiary border-border-subtle text-text-secondary',
  SaaS: 'bg-primary/10 border-primary/30 text-primary',
  AI: 'bg-secondary/10 border-secondary/30 text-secondary',
}

export function getCategoryBadgeClassName(category: ProjectCategory): string {
  return categoryStyles[category]
}
