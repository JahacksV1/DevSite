import type { PreQualData } from '@/types/preQual'

export const budgetOptions = [
  { value: 'under-3k' as const, label: 'Under $3k' },
  { value: '3k-8k' as const, label: '$3k - $8k' },
  { value: '8k-20k' as const, label: '$8k - $20k' },
  { value: '20k-plus' as const, label: '$20k+' },
  { value: 'flexible' as const, label: 'Flexible / Not sure yet' },
]

export const pricingModelOptions = [
  { value: 'fixed' as const, label: 'Fixed milestone pricing' },
  { value: 'hourly' as const, label: 'Hourly support' },
  { value: 'not-sure' as const, label: 'Not sure yet' },
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
export type PricingModelValue = PreQualData['pricingModel']
export type TimelineValue = PreQualData['timeline']
export type AttemptValue = PreQualData['previousAttempts'][number]
