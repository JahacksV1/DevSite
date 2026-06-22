'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Layers, Sparkles, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BookCall } from '@/components/ui'

const engagementModes = [
  {
    icon: Sparkles,
    name: 'Start From Zero',
    subtitle: 'Idea to first release',
    description:
      'Define a practical first milestone, then build the first usable version you can demo and deploy.',
    features: [
      'Scope milestone one before writing code',
      'Core UI + API + database flow',
      'Deployment and handoff notes',
      'Roadmap for what ships next',
    ],
    examples: 'MVPs, internal tools, first customer-facing release',
    color: 'primary' as const,
  },
  {
    icon: Wrench,
    name: 'Stabilize Existing App',
    subtitle: 'Fix fragile architecture',
    description:
      'Jump into your current repo, diagnose issues, and make the app safer to maintain and extend.',
    features: [
      'Reproduce and trace failing workflows',
      'Architecture and file-structure cleanup',
      'Supabase/API/integration debugging',
      'Verified fixes with clear change log',
    ],
    examples: 'Fragile MVPs, AI-generated codebases, half-finished products',
    color: 'secondary' as const,
  },
  {
    icon: Layers,
    name: 'Add Production Layers',
    subtitle: 'Scale reliability over time',
    description:
      'Start simple, then layer in payments, observability, compliance, and deeper integrations when needed.',
    features: [
      'Stripe/webhooks and revenue-critical paths',
      'Observability and deployment safeguards',
      'Permissions/compliance-ready architecture',
      'Milestone-based expansion',
    ],
    examples: 'SaaS growth, team rollouts, regulated feature sets',
    color: 'primary' as const,
  },
]

/**
 * PricingTiers - Three clear pricing tiers
 */
export const PricingTiers = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/50">
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
            How Engagements Start
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Most projects begin with a scoped first milestone. We quote the
            deliverable after understanding your starting point.
          </p>
        </motion.div>

        {/* Engagement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {engagementModes.map((mode, index) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={cn(
                  'h-full p-8 rounded-xl border',
                  'bg-bg-secondary transition-all duration-300',
                  'border-border-subtle hover:border-primary/50'
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-6',
                    'bg-gradient-to-br',
                    mode.color === 'primary'
                      ? 'from-primary/20 to-primary/10'
                      : 'from-secondary/20 to-secondary/10'
                  )}
                >
                  <mode.icon
                    className={cn(
                      'w-6 h-6',
                      mode.color === 'primary'
                        ? 'text-primary'
                        : 'text-secondary'
                    )}
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {mode.name}
                </h3>
                <div className="text-sm text-primary font-semibold mb-4 uppercase tracking-wide">
                  {mode.subtitle}
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {mode.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {mode.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Examples */}
                <div className="pt-6 border-t border-border-subtle mb-6">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                    Good Fit If You Need:
                  </div>
                  <div className="text-sm text-text-secondary">
                    {mode.examples}
                  </div>
                </div>

                {/* CTA */}
                <BookCall variant="secondary" className="w-full group">
                  Scope First Milestone
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </BookCall>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom projects note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-4">
            Pricing depends on the starting point and milestone scope. We quote
            after intake so deliverables are clear before execution begins.
          </p>
          <BookCall variant="ghost" className="group">
            Discuss Your Current Stage
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </BookCall>
        </motion.div>
      </div>
    </section>
  )
}
