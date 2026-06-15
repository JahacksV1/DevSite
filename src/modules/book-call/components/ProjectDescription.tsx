import { Textarea } from '@/components/ui'
import type { PreQualData } from '@/types/preQual'

interface ProjectDescriptionProps {
  formData: PreQualData
  errors: Partial<Record<keyof PreQualData, string>>
  onUpdate: <K extends keyof PreQualData>(
    field: K,
    value: PreQualData[K]
  ) => void
}

export const ProjectDescription = ({
  formData,
  errors,
  onUpdate,
}: ProjectDescriptionProps) => {
  return (
    <div>
      <Textarea
        label="Describe Your Project"
        placeholder="I need a SaaS platform for managing... (2-3 sentences is perfect)"
        value={formData.projectDescription}
        onChange={(e) => onUpdate('projectDescription', e.target.value)}
        error={errors.projectDescription}
        rows={4}
        required
      />
      <p className="text-sm text-text-muted mt-1">
        {formData.projectDescription.length} characters
      </p>
    </div>
  )
}
