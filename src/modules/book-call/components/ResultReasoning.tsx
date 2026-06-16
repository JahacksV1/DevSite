import { motion } from 'framer-motion'
import type { QualificationResult } from '@/types/preQual'

interface ResultReasoningProps {
  result: QualificationResult
}

export const ResultReasoning = ({ result }: ResultReasoningProps) => {
  const titleMap = {
    great: "Here's why:",
    possible: 'Potential concerns:',
    'not-a-fit': "Here's why:",
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-text-primary mb-4">
        {titleMap[result.fit]}
      </h3>
      <ul className="space-y-2">
        {result.reasoning.map((reason, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-3 text-text-secondary"
          >
            <span className="text-primary mt-1">→</span>
            <span>{reason}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
