export interface PreQualData {
  name: string
  email: string
  projectDescription: string
  budget: 'under-3k' | '3k-8k' | '8k-20k' | '20k-plus' | 'flexible'
  pricingModel: 'fixed' | 'hourly' | 'not-sure'
  timeline: 'this-week' | '2-4-weeks' | 'flexible' | 'exploring'
  previousAttempts: Array<
    'nothing' | 'no-code' | 'agencies' | 'freelancers' | 'in-house'
  >
}

export interface QualificationResult {
  fit: 'great' | 'possible' | 'not-a-fit'
  score: number
  message: string
  reasoning: string[]
  action: 'book-cal' | 'book-cal-with-note' | 'show-alternatives'
}
