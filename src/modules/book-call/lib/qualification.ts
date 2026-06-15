import type { PreQualData, QualificationResult } from '@/types/preQual'

/**
 * Calculate qualification score based on form data
 * Pure function - no side effects
 */
export function calculateQualification(data: PreQualData): QualificationResult {
  const budgetScore = getBudgetScore(data.budget)
  const timelineScore = getTimelineScore(data.timeline)
  const totalScore = (budgetScore + timelineScore) / 2

  if (totalScore >= 60) {
    return {
      fit: 'great',
      score: totalScore,
      message: "Great! You're a perfect fit for Day One Labs.",
      reasoning: getGreatFitReasoning(data),
      action: 'book-cal',
    }
  }

  if (totalScore >= 30) {
    return {
      fit: 'possible',
      score: totalScore,
      message: "You might be a fit. Let's discuss your project.",
      reasoning: getPossibleFitReasoning(data),
      action: 'book-cal-with-note',
    }
  }

  return {
    fit: 'not-a-fit',
    score: totalScore,
    message: 'Based on your responses, we might not be the best fit.',
    reasoning: getNotAFitReasoning(data),
    action: 'show-alternatives',
  }
}

function getBudgetScore(budget: PreQualData['budget']): number {
  const scores = {
    'under-8k': 0,
    '8k-15k': 50,
    '15k-30k': 75,
    '30k-plus': 100,
    flexible: 60,
  }
  return scores[budget]
}

function getTimelineScore(timeline: PreQualData['timeline']): number {
  const scores = {
    'this-week': 100,
    '2-4-weeks': 75,
    flexible: 40,
    exploring: 0,
  }
  return scores[timeline]
}

function getGreatFitReasoning(data: PreQualData): string[] {
  const reasons: string[] = []

  if (data.budget === '15k-30k' || data.budget === '30k-plus') {
    reasons.push('Your budget aligns with our Production Build tier')
  } else if (data.budget === '8k-15k') {
    reasons.push('Your budget fits our MVP Launch tier perfectly')
  }

  if (data.timeline === 'this-week' || data.timeline === '2-4-weeks') {
    reasons.push('Your timeline matches our typical delivery (1-4 weeks)')
  }

  if (data.previousAttempts.includes('agencies')) {
    reasons.push("You've experienced slow agency timelines - we're 10x faster")
  }

  if (data.previousAttempts.includes('no-code')) {
    reasons.push('You hit no-code limitations - we build real, scalable code')
  }

  return reasons.length > 0
    ? reasons
    : ['Your project scope matches our sweet spot']
}

function getPossibleFitReasoning(data: PreQualData): string[] {
  const concerns: string[] = []

  if (data.budget === 'under-8k') {
    concerns.push('Your budget is below our typical range ($10k-35k)')
  } else if (data.budget === 'flexible') {
    concerns.push("We'll need to discuss budget to ensure alignment")
  }

  if (data.timeline === 'flexible' || data.timeline === 'exploring') {
    concerns.push(
      'Your timeline is flexible - we work best with clear deadlines'
    )
  }

  if (data.previousAttempts.includes('nothing')) {
    concerns.push("You're early in the process - we can help shape your vision")
  }

  return concerns.length > 0
    ? concerns
    : ['A few things to clarify on the call']
}

function getNotAFitReasoning(data: PreQualData): string[] {
  const reasons: string[] = []

  if (data.budget === 'under-8k') {
    reasons.push('Our minimum project size is $10k for quality work')
  }

  if (data.timeline === 'exploring') {
    reasons.push(
      'You are in exploration mode - we work with people ready to build'
    )
  }

  return reasons.length > 0
    ? reasons
    : ['Based on your responses, we might not align right now']
}
