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
    name: 'Scope & Starting Point',
    percentage: '20-30%',
    description:
      'New build, fragile MVP, or active codebase repair — this sets the shape of the first milestone.',
  },
  {
    icon: Zap,
    name: 'Core Implementation',
    percentage: '30-40%',
    description:
      'Frontend, backend, database, and integration work for the scoped deliverable. This is only part of the timeline.',
    highlight: true,
  },
  {
    icon: GitBranch,
    name: 'Review & Iteration',
    percentage: '15-25%',
    description:
      'Feedback loops refine behavior and UX. We keep room for this to avoid rushed release quality.',
  },
  {
    icon: Plug,
    name: 'Integration Reliability',
    percentage: '10-20%',
    description:
      'Stripe, domains, API keys, webhooks, and deployment settings take careful setup and verification.',
  },
  {
    icon: TestTube,
    name: 'Verification & Handoff',
    percentage: '10-15%',
    description:
      'Type, lint, build, and critical-flow checks run before release, then we hand off clear implementation notes.',
  },
  {
    icon: Shield,
    name: 'Optional Enterprise Layers',
    percentage: '0-30%',
    description:
      'SSO, compliance prep, advanced permissions, and security hardening are layered in when your product actually needs them.',
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
            Timelines depend on starting condition and scope, not one generic
            build template.
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
            We do not quote from a generic weekly template. We scope milestone
            one first, then estimate based on your codebase condition,
            integrations, and verification requirements. Typical delivery:{' '}
            <span className="font-semibold text-primary">
              milestone-based and stage-dependent
            </span>
            , with the first release scoped for momentum.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
