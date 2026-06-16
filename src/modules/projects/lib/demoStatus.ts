import type { Project } from './projectsData'

type DemoStatus = Project['demoStatus']

export interface DemoStatusBadge {
  label: string
  className: string
}

export interface DemoStatusDetail extends DemoStatusBadge {
  note: string
}

const privateBadge: DemoStatusBadge = {
  label: 'Private',
  className: 'bg-text-muted/10 border-text-muted/30 text-text-muted',
}

export const demoStatusBadges: Record<DemoStatus, DemoStatusBadge> = {
  'Live — Public': privateBadge,
  'Live — Auth Required': privateBadge,
  'Private — Case Study Only': privateBadge,
  'In Development': privateBadge,
}

export const demoStatusDetails: Record<DemoStatus, DemoStatusDetail> = {
  'Live — Public': {
    ...privateBadge,
    label: 'Private',
    note: 'This project is private. Screenshots below show the actual interface.',
  },
  'Live — Auth Required': {
    ...privateBadge,
    label: 'Private',
    note: 'This project is private. Screenshots below show the actual interface.',
  },
  'Private — Case Study Only': {
    ...privateBadge,
    label: 'Private',
    note: 'This project is private. This case study uses sanitized screenshots, feature breakdowns, and architecture notes.',
  },
  'In Development': {
    ...privateBadge,
    label: 'Private',
    note: 'This project is actively in development and not yet released.',
  },
}
