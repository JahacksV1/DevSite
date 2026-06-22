import type { Project } from './projectsData'

type DemoStatus = Project['demoStatus']

export interface DemoStatusBadge {
  label: string
  className: string
}

export interface DemoStatusDetail extends DemoStatusBadge {
  note: string
}

const liveBadge: DemoStatusBadge = {
  label: 'Live Demo',
  className: 'bg-success/10 border-success/30 text-success',
}

const authBadge: DemoStatusBadge = {
  label: 'Login Required',
  className: 'bg-primary/10 border-primary/30 text-primary',
}

const privateBadge: DemoStatusBadge = {
  label: 'Case Study Only',
  className: 'bg-text-muted/10 border-text-muted/30 text-text-muted',
}

const inDevelopmentBadge: DemoStatusBadge = {
  label: 'In Development',
  className: 'bg-warning/10 border-warning/30 text-warning',
}

export const demoStatusBadges: Record<DemoStatus, DemoStatusBadge> = {
  'Live — Public': liveBadge,
  'Live — Auth Required': authBadge,
  'Private — Case Study Only': privateBadge,
  'In Development': inDevelopmentBadge,
}

export const demoStatusDetails: Record<DemoStatus, DemoStatusDetail> = {
  'Live — Public': {
    ...liveBadge,
    note: 'This project is live and publicly accessible.',
  },
  'Live — Auth Required': {
    ...authBadge,
    note: 'This project is live but requires authentication.',
  },
  'Private — Case Study Only': {
    ...privateBadge,
    note: 'This project is private. This case study uses sanitized screenshots, feature breakdowns, and architecture notes.',
  },
  'In Development': {
    ...inDevelopmentBadge,
    note: 'This project is actively in development and not yet released.',
  },
}
