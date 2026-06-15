'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, TrendingUp, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { MetricCard } from './components/MetricCard'
import { LineChart } from './components/LineChart'
import { BarChart } from './components/BarChart'

/**
 * DashboardDemo - Real-time analytics dashboard
 * Built in 3 hours to demonstrate UI/UX capabilities
 */
export const DashboardDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      {/* Header */}
      <div className="border-b border-border-subtle bg-bg-primary/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Home</span>
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
                Real-Time Analytics
              </h1>
              <p className="text-sm text-text-muted mt-1">
                Live-updating dashboard • Built in 3 hours with Day One Labs
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-bg-secondary border border-border-subtle">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-text-muted">Live Data</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-12">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={DollarSign}
            title="Total Revenue"
            value={127500}
            prefix="$"
            change={12.5}
            index={0}
          />
          <MetricCard
            icon={Users}
            title="Active Users"
            value={2847}
            change={-3.2}
            index={1}
          />
          <MetricCard
            icon={TrendingUp}
            title="Conversion Rate"
            value={24.8}
            suffix="%"
            change={5.7}
            index={2}
          />
          <MetricCard
            icon={Clock}
            title="Avg. Session"
            value={8}
            suffix="m 42s"
            change={2.1}
            index={3}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart />
          <BarChart />
        </div>

        {/* Demo Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-6 rounded-xl bg-bg-secondary border border-border-subtle"
        >
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            🚀 This Demo Built in 3 Hours
          </h3>
          <div className="space-y-2 text-text-secondary">
            <p>✅ Real-time data updates (simulated with random values)</p>
            <p>✅ Responsive design (works on mobile, tablet, desktop)</p>
            <p>✅ Smooth animations with Framer Motion</p>
            <p>✅ No backend required (client-side only)</p>
            <p className="pt-4 text-text-muted">
              <strong className="text-primary">Tech Stack:</strong> Next.js 14,
              TypeScript, Tailwind CSS, Framer Motion
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-border-subtle">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
            >
              Want a dashboard for your business? Let&apos;s talk →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardDemo
