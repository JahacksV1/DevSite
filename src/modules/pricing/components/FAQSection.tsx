'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Do you only take brand-new builds?',
    answer:
      'No. We join at any stage: new builds, fragile MVP stabilization, AI-generated codebase cleanup, and targeted support (deployments, Supabase, Stripe, integrations, debugging).',
  },
  {
    question: 'How do you use AI without creating messy code?',
    answer:
      'AI accelerates implementation, but every release goes through engineering review. We verify architecture, type safety, lint/build checks, and integration behavior before handoff.',
  },
  {
    question: 'How is pricing decided?',
    answer:
      'Pricing is milestone-based. After intake, we scope the first deliverable clearly and quote that milestone. Additional layers (payments, observability, compliance, enterprise integration) are added only when needed.',
  },
  {
    question: 'What does production-ready mean for you?',
    answer:
      'Readable structure, passing TypeScript/lint/build checks, stable deployment flow, and validation of auth, error handling, and integration behavior before release.',
  },
  {
    question: 'What if my codebase is messy or half-finished?',
    answer:
      'That is common. We start by reproducing issues, tracing architecture and integrations, then applying focused fixes in controlled steps with clear notes on what changed.',
  },
  {
    question: 'Do you work hourly or fixed-price?',
    answer:
      'Mostly milestone-based fixed pricing. If a project needs ongoing support after the first scope, we can also structure recurring feature work.',
  },
  {
    question: 'How do we start?',
    answer:
      'Send your repo, live URL, screenshots, or a short brief. We identify the safest first milestone and recommend the clearest path forward.',
  },
  {
    question: 'Can I see examples of your work?',
    answer:
      'Yes. Review our project case studies for architecture details, integration scope, and delivery outcomes across SaaS, document automation, AI workflows, and internal tools.',
  },
]

/**
 * FAQSection - Common questions about pricing and timelines
 */
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Common Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The honest answers to what people actually want to know.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  'w-full p-6 rounded-xl text-left',
                  'bg-bg-secondary border transition-all duration-300',
                  openIndex === index
                    ? 'border-primary shadow-[0_0_20px_rgba(0,255,198,0.1)]'
                    : 'border-border-subtle hover:border-primary/30'
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </div>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border-subtle">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
