'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui'

export const FinalCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10" />
      </div>

      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-text-primary mb-2">
              Need Software Built?
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              See What We&apos;ve Shipped.
            </span>
          </h2>

          <p className="text-lg text-text-secondary mb-4 leading-relaxed">
            We build for founders, operators, agencies, and businesses that need working software — not agency timelines and six-figure budgets.
          </p>
          <p className="text-base text-text-muted mb-12 max-w-xl mx-auto leading-relaxed">
            AI-assisted engineering with milestone-based delivery. You see working software at each stage before we move forward.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/projects">
              <Button variant="primary" size="lg" className="group">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/upwork">
              <Button variant="secondary" size="lg">
                View Full Portfolio
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-border-subtle grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Milestone-Based</div>
              <div className="text-sm text-text-muted">Review working software at every stage</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Full Ownership</div>
              <div className="text-sm text-text-muted">You own all code, repos, and IP</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Clean Architecture</div>
              <div className="text-sm text-text-muted">Maintainable code, not throwaway scripts</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
