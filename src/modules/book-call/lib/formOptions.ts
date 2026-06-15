import type { PreQualData } from '@/types/preQual'

export const budgetOptions = [
  { value: 'under-8k' as const, label: 'Under $8k' },
  { value: '8k-15k' as const, label: '$8k - $15k' },
  { value: '15k-30k' as const, label: '$15k - $30k' },
  { value: '30k-plus' as const, label: '$30k+' },
  { value: 'flexible' as const, label: 'Flexible / Not sure yet' },
]

export const timelineOptions = [
  { value: 'this-week' as const, label: 'ASAP (this week / next week)' },
  { value: '2-4-weeks' as const, label: 'Normal (2-4 weeks)' },
  { value: 'flexible' as const, label: 'Flexible (1-2 months)' },
  { value: 'exploring' as const, label: 'Just exploring' },
]

export const attemptOptions = [
  { value: 'nothing' as const, label: 'Nothing yet (just an idea)' },
  { value: 'no-code' as const, label: 'No-code tools (Bubble, Webflow, etc.)' },
  {
    value: 'agencies' as const,
    label: 'Contacted agencies (too slow/expensive)',
  },
  {
    value: 'freelancers' as const,
    label: 'Hired freelancers (inconsistent quality)',
  },
  { value: 'in-house' as const, label: 'Built in-house (need help scaling)' },
]

export type BudgetValue = PreQualData['budget']
export type TimelineValue = PreQualData['timeline']
export type AttemptValue = PreQualData['previousAttempts'][number]
