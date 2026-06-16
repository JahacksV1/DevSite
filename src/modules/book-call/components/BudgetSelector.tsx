import type { PreQualData } from '@/types/preQual'
import { budgetOptions } from '../lib/formOptions'

interface BudgetSelectorProps {
  selectedBudget: PreQualData['budget']
  onSelect: (budget: PreQualData['budget']) => void
}

export const BudgetSelector = ({
  selectedBudget,
  onSelect,
}: BudgetSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-text-secondary">
        What&apos;s your budget range?
      </label>
      <div className="space-y-2">
        {budgetOptions.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center p-4 rounded-lg border cursor-pointer
              transition-all duration-200
              ${
                selectedBudget === option.value
                  ? 'border-primary bg-primary/5 shadow-glow'
                  : 'border-border-subtle hover:border-primary/50'
              }
            `}
          >
            <input
              type="radio"
              name="budget"
              value={option.value}
              checked={selectedBudget === option.value}
              onChange={(e) =>
                onSelect(e.target.value as PreQualData['budget'])
              }
              className="mr-3 w-4 h-4 text-primary focus:ring-primary"
            />
            <span className="text-text-primary">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
