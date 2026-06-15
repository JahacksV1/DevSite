'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CategoryData {
  name: string
  value: number
  color: string
}

export const BarChart = () => {
  const [data, setData] = useState<CategoryData[]>([
    { name: 'SaaS', value: 45, color: 'from-cyan-500 to-cyan-600' },
    { name: 'AI Apps', value: 30, color: 'from-purple-500 to-purple-600' },
    { name: 'Automation', value: 15, color: 'from-primary to-cyan-400' },
    { name: 'Enterprise', value: 10, color: 'from-secondary to-purple-400' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((cat) => ({
          ...cat,
          value: Math.max(
            5,
            Math.min(60, cat.value + (Math.random() - 0.5) * 10)
          ),
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="p-6 rounded-xl bg-bg-secondary border border-border-subtle"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-1">
          Projects by Category
        </h3>
        <p className="text-sm text-text-muted">Distribution</p>
      </div>

      {/* Bars */}
      <div className="space-y-4">
        {data.map((category, index) => (
          <div key={category.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-text-secondary">
                {category.name}
              </span>
              <motion.span
                key={category.value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-semibold text-text-primary"
              >
                {category.value.toFixed(0)}%
              </motion.span>
            </div>
            <div className="h-3 bg-bg-tertiary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(category.value / maxValue) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`h-full bg-gradient-to-r ${category.color} relative`}
              >
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-white/20"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
