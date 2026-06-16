import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { ResultCard } from './ResultCard'
import { ResultReasoning } from './ResultReasoning'
import { ResultActions } from './ResultActions'
import type {
  QualificationResult as Result,
  PreQualData,
} from '@/types/preQual'

interface QualificationResultProps {
  result: Result
  formData: PreQualData
  onReset: () => void
}

export const QualificationResult = ({
  result,
  formData,
  onReset,
}: QualificationResultProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <Card variant="elevated">
        <ResultCard result={result} />
        <ResultReasoning result={result} />
        <ResultActions result={result} formData={formData} onReset={onReset} />
      </Card>

      {result.fit !== 'not-a-fit' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-text-muted mt-6"
        >
          No spam. No pressure. Just honest conversation about your project.
        </motion.p>
      )}
    </motion.div>
  )
}
