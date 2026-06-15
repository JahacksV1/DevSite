import type { PreQualData } from '@/types/preQual'
import { attemptOptions } from '../lib/formOptions'

interface PreviousAttemptsProps {
  selectedAttempts: PreQualData['previousAttempts']
  onToggle: (attempt: PreQualData['previousAttempts'][number]) => void
}

export const PreviousAttempts = ({
  selectedAttempts,
  onToggle,
}: PreviousAttemptsProps) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-text-secondary">
        What have you tried so far? (Select all that apply)
      </label>
      <div className="space-y-2">
        {attemptOptions.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center p-4 rounded-lg border cursor-pointer
              transition-all duration-200
              ${
                selectedAttempts.includes(option.value)
                  ? 'border-primary bg-primary/5'
                  : 'border-border-subtle hover:border-primary/50'
              }
            `}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={selectedAttempts.includes(option.value)}
              onChange={() => onToggle(option.value)}
              className="mr-3 w-4 h-4 text-primary rounded focus:ring-primary"
            />
            <span className="text-text-primary">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
