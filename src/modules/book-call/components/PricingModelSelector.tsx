import type { PreQualData } from '@/types/preQual'
import { pricingModelOptions } from '../lib/formOptions'

interface PricingModelSelectorProps {
  selectedModel: PreQualData['pricingModel']
  onSelect: (model: PreQualData['pricingModel']) => void
}

export const PricingModelSelector = ({
  selectedModel,
  onSelect,
}: PricingModelSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-text-secondary">
        How would you like to structure engagement?
      </label>
      <div className="space-y-2">
        {pricingModelOptions.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center p-4 rounded-lg border cursor-pointer
              transition-all duration-200
              ${
                selectedModel === option.value
                  ? 'border-primary bg-primary/5 shadow-glow'
                  : 'border-border-subtle hover:border-primary/50'
              }
            `}
          >
            <input
              type="radio"
              name="pricingModel"
              value={option.value}
              checked={selectedModel === option.value}
              onChange={(e) =>
                onSelect(e.target.value as PreQualData['pricingModel'])
              }
              className="choice-radio"
            />
            <span className="text-text-primary">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
