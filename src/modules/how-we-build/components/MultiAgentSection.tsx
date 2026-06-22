'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Layers,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const standards = [
  {
    icon: Layers,
    name: 'Clean Structure',
    description:
      'UI, server logic, API routes, and database concerns stay separated and readable.',
    color: 'primary' as const,
  },
  {
    icon: CheckCircle2,
    name: 'Verification Discipline',
    description:
      'TypeScript, linting, formatting, and production builds pass before handoff.',
    color: 'secondary' as const,
  },
  {
    icon: ServerCog,
    name: 'Deployment Reliability',
    description:
      'GitHub to Vercel preview and production flow so every release is reviewable.',
    color: 'primary' as const,
  },
  {
    icon: ShieldCheck,
    name: 'Production Safety',
    description:
      'Auth, validation, error handling, and integration behavior are checked against failure cases.',
    color: 'secondary' as const,
  },
]

const buildWorkflow = [
  'Scope milestone one and define what ships now vs later.',
  'Build frontend, backend, and database flow end-to-end.',
  'Review architecture, edge cases, and integration behavior.',
  'Deploy and hand off with environment/setup notes.',
]

const repairWorkflow = [
  'Reproduce the issue locally or on staging.',
  'Inspect deploy health and file structure before refactors.',
  'Trace failing flow across frontend, API, and database.',
  'Ship focused fixes, rerun checks, and provide a change log.',
]

/**
 * MultiAgentSection - Delivery standards and dual workflow
 */
export const MultiAgentSection = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            What &quot;Done&quot; Means on Every Project
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Same baseline whether we are building from scratch or stabilizing an
            existing codebase.
          </p>
        </motion.div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {standards.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full p-6 rounded-xl card-static">
                {/* Icon */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
                    'bg-gradient-to-br',
                    item.color === 'primary'
                      ? 'from-primary/20 to-primary/10'
                      : 'from-secondary/20 to-secondary/10'
                  )}
                >
                  <item.icon
                    className={cn(
                      'w-6 h-6',
                      item.color === 'primary'
                        ? 'text-primary'
                        : 'text-secondary'
                    )}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two workflow paths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-xl bg-bg-secondary border border-border-subtle">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4 uppercase tracking-wide">
              <Sparkles className="w-4 h-4" />
              Build From Zero
            </div>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {buildWorkflow.map((step) => (
                <li key={step}>- {step}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-bg-secondary border border-border-subtle">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4 uppercase tracking-wide">
              <Wrench className="w-4 h-4" />
              Stabilize Existing App
            </div>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {repairWorkflow.map((step) => (
                <li key={step}>- {step}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Scope guidance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">
            Scope the First Milestone
          </h3>
          <p className="text-text-secondary text-center max-w-3xl mx-auto mb-6">
            Every engagement starts with a practical first deliverable. We
            define what ships now, what waits, and how we will verify quality
            before handoff.
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-primary mb-1">
                Current State
              </div>
              <div className="text-text-muted">
                Idea, fragile MVP, or active codebase
              </div>
            </div>
            <div>
              <div className="font-semibold text-primary mb-1">
                First Deliverable
              </div>
              <div className="text-text-muted">Specific scope we can ship now</div>
            </div>
            <div>
              <div className="font-semibold text-primary mb-1">
                Verification Plan
              </div>
              <div className="text-text-muted">Checks before release and handoff</div>
            </div>
            <div>
              <div className="font-semibold text-primary mb-1">
                Next Milestones
              </div>
              <div className="text-text-muted">Follow-up roadmap after launch</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
