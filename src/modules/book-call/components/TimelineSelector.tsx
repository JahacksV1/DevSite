import type { PreQualData } from '@/types/preQual'
import { timelineOptions } from '../lib/formOptions'

interface TimelineSelectorProps {
  selectedTimeline: PreQualData['timeline']
  onSelect: (timeline: PreQualData['timeline']) => void
}

export const TimelineSelector = ({
  selectedTimeline,
  onSelect,
}: TimelineSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-text-secondary">
        What timeline are you targeting?
      </label>
      <div className="space-y-2">
        {timelineOptions.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center p-4 rounded-lg border cursor-pointer
              transition-all duration-200
              ${
                selectedTimeline === option.value
                  ? 'border-secondary bg-secondary/5 shadow-glow-purple'
                  : 'border-border-subtle hover:border-secondary/50'
              }
            `}
          >
            <input
              type="radio"
              name="timeline"
              value={option.value}
              checked={selectedTimeline === option.value}
              onChange={(e) =>
                onSelect(e.target.value as PreQualData['timeline'])
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
