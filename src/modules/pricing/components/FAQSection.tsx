'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'You say you build fast — why does my project take 2-4 weeks?',
    answer:
      'Because "building" is only 30-40% of the project timeline. The rest is discovery (understanding your vision), iteration (you see it and want refinements), integration setup (connecting accounts and APIs), and testing. We cannot skip those — they are what make your app actually work for your business.',
  },
  {
    question: 'Can you build faster if I am ready to move quickly?',
    answer:
      'Yes. If you have crystal-clear requirements, all accounts ready (GitHub, hosting, Stripe, etc.), fast feedback turnaround, and no complex integrations, we can ship in 7-10 days. But most projects benefit from proper discovery and iteration time.',
  },
  {
    question: 'What if I just want a proof of concept fast?',
    answer:
      'We can build a working demo in 3-5 days for $4k-6k. It will not be production-ready (no scalability, basic security, rough edges), but it will prove the concept. Then you can decide whether to build the real thing.',
  },
  {
    question: 'Is it actually good code, or is it AI-generated mess?',
    answer:
      'It is production-grade. AI agents build fast, but senior engineers review every line. We validate architecture, harden security, optimize performance. The result is clean, scalable code — just delivered faster than traditional development.',
  },
  {
    question: 'What if I need changes after launch?',
    answer:
      'All projects include 7-30 days of support (depending on tier). After that, small tweaks are $500-1k. Bigger changes become a new project or you can move to a monthly retainer for ongoing development.',
  },
  {
    question: 'Do you work hourly or fixed-price?',
    answer:
      'Fixed-price only. We quote upfront after discovery and stick to it. No hourly surprises, no scope creep. If requirements change mid-project, we will be transparent about additional costs before doing the work.',
  },
  {
    question: 'What if we are not a good fit?',
    answer:
      'We will tell you in the discovery call (no charge, no pressure). If your budget is under $8k, timeline is "whenever," or you need extensive hand-holding, we will recommend other options. We are honest about fit.',
  },
  {
    question: 'Can I see examples of your work?',
    answer:
      'Yes. Check our Projects page for case studies. Some work is under NDA, but we can show code samples and architecture in the discovery call. We can also connect you with past clients for references.',
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
