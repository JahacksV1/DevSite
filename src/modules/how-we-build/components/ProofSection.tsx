'use client'

import { motion } from 'framer-motion'
import { Play, Code2, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui'

/**
 * ProofSection - Demos, videos, and evidence
 * Placeholder for future content (voice agent demo, build time-lapses, etc.)
 */
export const ProofSection = () => {
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
            See It in Action
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real builds, real timelines, real code. Here&apos;s proof this actually works.
          </p>
        </motion.div>

        {/* Demo Grid - Placeholders for future videos/demos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Demo 1: Voice Agent Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden card-static bg-bg-tertiary"
          >
            {/* Placeholder Image/Video */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Play className="w-16 h-16 text-primary opacity-60" />
            </div>
            
            <div className="p-6">
              <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                Coming Soon: Video Demo
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Building a Voice Agent in Real-Time
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Watch us build a functional AI voice agent from scratch. 
                See the multi-agent process, the timeline, and the final result.
              </p>
              <Button variant="ghost" size="sm" className="group/btn">
                <span>Watch Demo</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Demo 2: Code Quality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl overflow-hidden card-static bg-bg-tertiary"
          >
            {/* Placeholder Image/Video */}
            <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
              <Code2 className="w-16 h-16 text-secondary opacity-60" />
            </div>
            
            <div className="p-6">
              <div className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wide">
                Coming Soon: Code Walkthrough
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Clean Architecture Deep Dive
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Browse actual codebases we&apos;ve built. See the folder structure, 
                component patterns, and why it&apos;s production-ready.
              </p>
              <Button variant="ghost" size="sm" className="group/btn">
                <span>View Code</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Current Proof Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-xl bg-bg-secondary border border-border-subtle">
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
              Real Results
            </h3>
            
            <div className="space-y-4 text-text-secondary">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-text-primary">This site you&apos;re on?</span> 
                  {' '}Built in 2-3 hours using multi-agent orchestration. Production-ready homepage, 
                  navigation, animations, mobile-responsive. Would quote $5k-10k traditionally.
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-text-primary">AI-powered CRM:</span> 
                  {' '}Built in 11 days with multi-tenant architecture, Stripe billing, real-time 
                  notifications. Client demoed to investors Day 12, raised $150k.
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-text-primary">Document processing platform:</span> 
                  {' '}8 days from kickoff to deployed beta. GPT-4 integration, secure storage, 
                  analytics dashboard. 12 paying customers in week 3.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

