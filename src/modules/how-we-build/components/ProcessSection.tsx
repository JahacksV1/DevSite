'use client'

import { motion } from 'framer-motion'
import {
  GitBranch,
  Layers,
  MessageSquare,
  Rocket,
  ShieldCheck,
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    phase: 'Step 1',
    title: 'Share Context',
    description:
      'Send your repo, live URL, screenshots, or a short brief. We first make sure we understand your real starting point.',
  },
  {
    icon: Layers,
    phase: 'Step 2',
    title: 'Scope First Milestone',
    description:
      'Define one clear deliverable that can ship and be validated. We separate immediate scope from later improvements.',
  },
  {
    icon: GitBranch,
    phase: 'Step 3',
    title: 'Implement in Controlled Steps',
    description:
      'Frontend, backend, and database work are coordinated with clear boundaries and small reviewable changes.',
  },
  {
    icon: ShieldCheck,
    phase: 'Step 4',
    title: 'Verify and Harden',
    description:
      'TypeScript, linting, build checks, and integration behavior are verified before release so handoff is stable.',
  },
  {
    icon: Rocket,
    phase: 'Step 5',
    title: 'Deploy + Handoff',
    description:
      'Deploy to production, transfer repo ownership, and provide clear notes on what changed and what should come next.',
  },
]

/**
 * ProcessSection - Step-by-step breakdown of the build process
 */
export const ProcessSection = () => {
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
            Practical Delivery Process
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We keep execution transparent and milestone-based, whether we are
            building from scratch or stabilizing an existing app.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 border-b border-border-subtle last:border-0">
                <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  {step.phase}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-primary mb-2">
              Milestone Scope
            </div>
            <div className="text-text-secondary">
              Clear deliverables before implementation starts.
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">
              Verification
            </div>
            <div className="text-text-secondary">
              Type, lint, build, and integration checks before handoff.
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">
              Ownership
            </div>
            <div className="text-text-secondary">
              You own repo access, deployments, and implementation notes.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
