import { Input } from '@/components/ui'
import type { PreQualData } from '@/types/preQual'

interface ContactFieldsProps {
  formData: PreQualData
  errors: Partial<Record<keyof PreQualData, string>>
  onUpdate: <K extends keyof PreQualData>(
    field: K,
    value: PreQualData[K]
  ) => void
}

export const ContactFields = ({
  formData,
  errors,
  onUpdate,
}: ContactFieldsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-text-primary mb-4">
        Contact Details
      </h3>

      <Input
        label="Your Name"
        type="text"
        placeholder="John Doe"
        value={formData.name}
        onChange={(e) => onUpdate('name', e.target.value)}
        error={errors.name}
        required
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="john@company.com"
        value={formData.email}
        onChange={(e) => onUpdate('email', e.target.value)}
        error={errors.email}
        required
      />
    </div>
  )
}
