import { Button } from '@/components/ui'
import { Card } from '@/components/ui/Card'
import { ContactFields } from './ContactFields'
import { ProjectDescription } from './ProjectDescription'
import { BudgetSelector } from './BudgetSelector'
import { PricingModelSelector } from './PricingModelSelector'
import { TimelineSelector } from './TimelineSelector'
import { PreviousAttempts } from './PreviousAttempts'
import type { PreQualData, QualificationResult } from '@/types/preQual'

interface PreQualFormProps {
  hookData: {
    formData: PreQualData
    errors: Partial<Record<keyof PreQualData, string>>
    result: QualificationResult | null
    updateField: <K extends keyof PreQualData>(
      field: K,
      value: PreQualData[K]
    ) => void
    handleSubmit: () => boolean
    reset: () => void
  }
}

export const PreQualForm = ({ hookData }: PreQualFormProps) => {
  const { formData, errors, updateField, handleSubmit } = hookData

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit()
  }

  const toggleAttempt = (value: PreQualData['previousAttempts'][number]) => {
    const newAttempts = formData.previousAttempts.includes(value)
      ? formData.previousAttempts.filter((v) => v !== value)
      : [...formData.previousAttempts, value]
    updateField('previousAttempts', newAttempts)
  }

  return (
    <Card variant="elevated">
      <form onSubmit={onSubmit} className="space-y-8">
        <ContactFields
          formData={formData}
          errors={errors}
          onUpdate={updateField}
        />

        <ProjectDescription
          formData={formData}
          errors={errors}
          onUpdate={updateField}
        />

        <BudgetSelector
          selectedBudget={formData.budget}
          onSelect={(budget) => updateField('budget', budget)}
        />

        <PricingModelSelector
          selectedModel={formData.pricingModel}
          onSelect={(pricingModel) => updateField('pricingModel', pricingModel)}
        />

        <TimelineSelector
          selectedTimeline={formData.timeline}
          onSelect={(timeline) => updateField('timeline', timeline)}
        />

        <PreviousAttempts
          selectedAttempts={formData.previousAttempts}
          onToggle={toggleAttempt}
        />

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Scope First Milestone
        </Button>

        <p className="text-sm text-text-muted text-center">
          We review your context and recommend the clearest next step. No spam,
          no pressure.
        </p>
      </form>
    </Card>
  )
}
