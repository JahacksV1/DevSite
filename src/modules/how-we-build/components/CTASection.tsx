'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Button, BookCall } from '@/components/ui'

/**
 * CTASection - Final call to action for How We Build page
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
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-text-primary mb-2">Ready to Build</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              This Way?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Free discovery call. No pressure. We&apos;ll discuss your idea, give
            you an honest timeline and quote, and see if we&apos;re a fit.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <BookCall variant="primary" size="lg" className="group">
              Book Discovery Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </BookCall>
            <Button variant="secondary" size="lg" className="group">
              <Mail className="w-5 h-5 mr-2" />
              Email Us Instead
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border-subtle"
          >
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                No Lock-In
              </div>
              <div className="text-sm text-text-muted">
                You own the code, repos, IP. Take it anywhere.
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                Fixed Price
              </div>
              <div className="text-sm text-text-muted">
                No hourly surprises. Quote upfront, stick to it.
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                Same-Week Starts
              </div>
              <div className="text-sm text-text-muted">
                Ready when you are. Most projects start within days.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
