'use client'

import { motion } from 'framer-motion'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { BookCall, Button } from '@/components/ui'

/**
 * CTASection - Final call to action for pricing page
 */
export const CTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-text-primary mb-2">
              Not Sure Which Tier?
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Let&apos;s Figure It Out Together
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
            Free discovery call. We&apos;ll discuss your project, give you an
            honest timeline and quote, and see if we&apos;re a fit. No pressure,
            no sales pitch.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <BookCall variant="primary" size="lg" className="group">
              Book Discovery Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </BookCall>
            <Button variant="secondary" size="lg">
              View Past Projects
            </Button>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-sm text-text-muted"
          >
            Most projects start within 3-5 days of discovery call. Same-week
            starts available if you&apos;re ready to move fast.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
