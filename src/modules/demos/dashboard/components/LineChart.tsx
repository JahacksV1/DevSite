'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface DataPoint {
  label: string
  value: number
}

export const LineChart = () => {
  const [data, setData] = useState<DataPoint[]>([
    { label: 'Mon', value: 4200 },
    { label: 'Tue', value: 5800 },
    { label: 'Wed', value: 4900 },
    { label: 'Thu', value: 6500 },
    { label: 'Fri', value: 7200 },
    { label: 'Sat', value: 5100 },
    { label: 'Sun', value: 6800 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((point) => ({
          ...point,
          value: Math.max(2000, point.value + (Math.random() - 0.5) * 1000),
        }))
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="p-6 rounded-xl bg-bg-secondary border border-border-subtle"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            Revenue Trend
          </h3>
          <p className="text-sm text-text-muted">Last 7 days</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-text-muted">Live</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-64">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-px bg-border-subtle" />
          ))}
        </div>

        {/* Line path */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                stopColor="rgb(0, 255, 198)"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="rgb(0, 255, 198)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <motion.path
            d={`
              M 0 ${((maxValue - data[0].value) / range) * 100}%
              ${data
                .map((point, i) => {
                  const x = (i / (data.length - 1)) * 100
                  const y = ((maxValue - point.value) / range) * 100
                  return `L ${x}% ${y}%`
                })
                .join(' ')}
              L 100% 100%
              L 0 100%
              Z
            `}
            fill="url(#lineGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Line */}
          <motion.path
            d={`
              M 0 ${((maxValue - data[0].value) / range) * 100}%
              ${data
                .map((point, i) => {
                  const x = (i / (data.length - 1)) * 100
                  const y = ((maxValue - point.value) / range) * 100
                  return `L ${x}% ${y}%`
                })
                .join(' ')}
            `}
            stroke="rgb(0, 255, 198)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </svg>

        {/* Data points */}
        {data.map((point, i) => {
          const x = (i / (data.length - 1)) * 100
          const y = ((maxValue - point.value) / range) * 100

          return (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              className="absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-primary border-2 border-bg-secondary cursor-pointer hover:scale-150 transition-transform group/point"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-bg-tertiary border border-border-subtle text-xs whitespace-nowrap opacity-0 group-hover/point:opacity-100 transition-opacity pointer-events-none">
                ${point.value.toLocaleString()}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-4 text-xs text-text-muted">
        {data.map((point) => (
          <div key={point.label}>{point.label}</div>
        ))}
      </div>
    </motion.div>
  )
}
