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
      message: "Great, your project looks like a strong fit.",
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
    'under-3k': 20,
    '3k-8k': 45,
    '8k-20k': 75,
    '20k-plus': 95,
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

  if (data.budget === '8k-20k' || data.budget === '20k-plus') {
    reasons.push('Your budget supports a focused first milestone and follow-up phases')
  } else if (data.budget === '3k-8k') {
    reasons.push('A scoped starter milestone could be a practical path')
  }

  if (data.timeline === 'this-week' || data.timeline === '2-4-weeks') {
    reasons.push('Your timeline supports momentum-based milestone delivery')
  }

  if (data.previousAttempts.includes('agencies')) {
    reasons.push('You already validated that you need a leaner execution approach')
  }

  if (data.previousAttempts.includes('no-code')) {
    reasons.push('You hit no-code limits and need a scalable implementation path')
  }

  return reasons.length > 0
    ? reasons
    : ['Your project scope matches our sweet spot']
}

function getPossibleFitReasoning(data: PreQualData): string[] {
  const concerns: string[] = []

  if (data.budget === 'under-3k') {
    concerns.push('We will likely need to scope a very narrow first milestone')
  } else if (data.budget === 'flexible') {
    concerns.push("We'll align scope and budget after reviewing your starting point")
  }

  if (data.timeline === 'flexible' || data.timeline === 'exploring') {
    concerns.push('Timeline is open-ended, so milestone planning will matter')
  }

  if (data.previousAttempts.includes('nothing')) {
    concerns.push('You are early in planning, which may require extra scoping clarity')
  }

  return concerns.length > 0
    ? concerns
    : ['A few things to clarify on the call']
}

function getNotAFitReasoning(data: PreQualData): string[] {
  const reasons: string[] = []

  if (data.budget === 'under-3k') {
    reasons.push('Current budget likely supports advisory or a very small sprint only')
  }

  if (data.timeline === 'exploring') {
    reasons.push('You appear to be exploring options rather than prioritizing an immediate milestone')
  }

  return reasons.length > 0
    ? reasons
    : ['Based on your responses, we might not align right now']
}
