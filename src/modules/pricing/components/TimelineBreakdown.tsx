'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  GitBranch,
  Plug,
  Shield,
  TestTube,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const timelineItems = [
  {
    icon: MessageSquare,
    name: 'Discovery',
    percentage: '20-30%',
    description:
      'Understanding your vision, user flows, business model. The clearer the requirements, the faster everything else goes.',
  },
  {
    icon: Zap,
    name: 'The Actual Building',
    percentage: '30-40%',
    description:
      "This is where we shine. Multi-agent orchestration builds in days what takes weeks traditionally. But it's not the whole project.",
    highlight: true,
  },
  {
    icon: GitBranch,
    name: 'Iteration Cycles',
    percentage: '15-25%',
    description:
      'You see it, realize you want something tweaked. This is normal. We build in time for feedback and refinement.',
  },
  {
    icon: Plug,
    name: 'Integration Setup',
    percentage: '10-20%',
    description:
      'Connecting Stripe, setting up domains, third-party API keys, deployment. Not coding — just connecting accounts.',
  },
  {
    icon: TestTube,
    name: 'Testing & Polish',
    percentage: '10-15%',
    description:
      'We test, you test, edge cases get caught. Production-ready means actually ready, not "mostly works."',
  },
  {
    icon: Shield,
    name: 'Compliance & Security',
    percentage: '0-30%',
    description:
      "Enterprise only. If you need SOC 2, HIPAA, or security audits, there's review time we can't skip.",
  },
]

/**
 * TimelineBreakdown - Honest breakdown of where time goes
 */
export const TimelineBreakdown = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            What Actually Takes Time
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We&apos;re transparent: The coding is the fast part. Here&apos;s
            where the rest of the time goes.
          </p>
        </motion.div>

        {/* Timeline items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={cn(
                'p-6 rounded-xl border transition-all duration-300',
                item.highlight
                  ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30'
                  : 'bg-bg-secondary border-border-subtle hover:border-primary/30'
              )}
            >
              {/* Icon & percentage */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center',
                    item.highlight ? 'bg-primary/20' : 'bg-bg-tertiary'
                  )}
                >
                  <item.icon
                    className={cn(
                      'w-5 h-5',
                      item.highlight ? 'text-primary' : 'text-text-muted'
                    )}
                  />
                </div>
                <div
                  className={cn(
                    'text-sm font-semibold px-2 py-1 rounded',
                    item.highlight
                      ? 'text-primary bg-primary/10'
                      : 'text-text-muted bg-bg-tertiary'
                  )}
                >
                  {item.percentage}
                </div>
              </div>

              {/* Name & description */}
              <h3
                className={cn(
                  'text-lg font-semibold mb-2',
                  item.highlight ? 'text-primary' : 'text-text-primary'
                )}
              >
                {item.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto p-8 rounded-xl bg-bg-secondary border border-border-subtle"
        >
          <h3 className="text-xl font-bold text-text-primary mb-4 text-center">
            The Honest Truth
          </h3>
          <p className="text-text-secondary text-center leading-relaxed">
            We build the code faster than traditional developers because of
            multi-agent orchestration. But discovery, iteration, integrations,
            and testing? Those take the same time as anyone else. We just
            don&apos;t hide that from you. Typical project:{' '}
            <span className="font-semibold text-primary">
              1-4 weeks depending on complexity
            </span>
            , with building being the fastest part.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
