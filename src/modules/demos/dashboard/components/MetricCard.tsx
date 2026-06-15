'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

interface MetricCardProps {
  icon: LucideIcon
  title: string
  value: number
  prefix?: string
  suffix?: string
  change: number
  index: number
}

export const MetricCard = ({
  icon: Icon,
  title,
  value: initialValue,
  prefix = '',
  suffix = '',
  change: initialChange,
  index,
}: MetricCardProps) => {
  const [value, setValue] = useState(initialValue)
  const [change, setChange] = useState(initialChange)

  useEffect(() => {
    const interval = setInterval(
      () => {
        // Simulate random updates
        const delta = (Math.random() - 0.5) * 0.1
        setValue((prev) => Math.max(0, prev * (1 + delta)))
        setChange((Math.random() - 0.5) * 10)
      },
      3000 + index * 500
    )

    return () => clearInterval(interval)
  }, [index])

  const isPositive = change >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-xl bg-bg-secondary border border-border-subtle hover:border-primary/50 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            isPositive
              ? 'bg-primary/10 text-primary'
              : 'bg-red-500/10 text-red-500'
          }`}
        >
          {isPositive ? '+' : ''}
          {change.toFixed(1)}%
        </div>
      </div>

      {/* Value */}
      <div className="mb-2">
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-3xl font-bold text-text-primary"
        >
          {prefix}
          {value.toLocaleString('en-US', {
            maximumFractionDigits: 0,
          })}
          {suffix}
        </motion.div>
      </div>

      {/* Title */}
      <div className="text-sm text-text-muted">{title}</div>
    </motion.div>
  )
}
