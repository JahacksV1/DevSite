import type { Project } from './projectsData'

type DemoStatus = Project['demoStatus']

export interface DemoStatusBadge {
  label: string
  className: string
}

export interface DemoStatusDetail extends DemoStatusBadge {
  note: string
}

export const demoStatusBadges: Record<DemoStatus, DemoStatusBadge> = {
  'Live — Public': {
    label: 'Live',
    className: 'bg-primary/10 border-primary/40 text-primary',
  },
  'Live — Auth Required': {
    label: 'Live',
    className: 'bg-primary/10 border-primary/40 text-primary',
  },
  'Private — Case Study Only': {
    label: 'Case Study',
    className: 'bg-text-muted/10 border-text-muted/30 text-text-muted',
  },
  'In Development': {
    label: 'In Dev',
    className: 'bg-secondary/10 border-secondary/40 text-secondary',
  },
}

export const demoStatusDetails: Record<DemoStatus, DemoStatusDetail> = {
  'Live — Public': {
    ...demoStatusBadges['Live — Public'],
    label: 'Live — Public',
    note: 'This project is publicly accessible.',
  },
  'Live — Auth Required': {
    ...demoStatusBadges['Live — Auth Required'],
    label: 'Live — Auth Required',
    note: 'Live app requires account creation. Screenshots below show the actual interface.',
  },
  'Private — Case Study Only': {
    ...demoStatusBadges['Private — Case Study Only'],
    label: 'Private — Case Study Only',
    note: 'This project is private or unreleased. This case study uses sanitized screenshots, feature breakdowns, and architecture notes. Live app access is not public.',
  },
  'In Development': {
    ...demoStatusBadges['In Development'],
    label: 'In Development',
    note: 'This project is actively in development and not yet released.',
  },
}
