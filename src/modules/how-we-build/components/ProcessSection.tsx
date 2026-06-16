'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  FileText,
  Eye,
  Rocket,
  HeadphonesIcon,
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    day: 'Day 1',
    title: 'Discovery + Scoping',
    description:
      'We get on a call, understand what you need, and define the scope. By end of day we have a clear project brief, tech stack, and milestone plan.',
  },
  {
    icon: FileText,
    day: 'Day 2-3',
    title: 'Multi-Agent Build',
    description:
      'Agents handle architecture, frontend, backend, and tests in parallel — all working from the same brief. What takes weeks sequentially gets done in days.',
  },
  {
    icon: Eye,
    day: 'Day 4-5',
    title: 'Human Review + Refinement',
    description:
      'Engineers go through every part of the codebase. Security, architecture, edge cases — anything the agents missed gets caught and fixed here.',
  },
  {
    icon: Rocket,
    day: 'Day 6-7',
    title: 'Deploy + Handoff',
    description:
      'We deploy to production, transfer the GitHub repo, and walk you through the codebase. You own everything — code, infra, IP.',
  },
  {
    icon: HeadphonesIcon,
    day: 'Day 8-30',
    title: 'Post-Launch Support',
    description:
      "Bug fixes, questions, small adjustments. We stay available for 30 days after launch so you're not left figuring things out on your own.",
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
            The Day One Process
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From idea to deployed app in 7-14 days (typical). Here&apos;s
            exactly what happens.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.day}
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
                  {step.day}
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

        {/* Why It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10x</div>
            <div className="text-text-secondary">
              Faster than traditional dev (parallel work, not sequential)
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">95+</div>
            <div className="text-text-secondary">
              Lighthouse scores standard (performance built in)
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-text-secondary">
              Code ownership (you own the repos, IP, everything)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
