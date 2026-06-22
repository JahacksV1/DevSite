'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

/**
 * How We Build Hero - Page opener
 */
export const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      </div>

      <div className="container-main text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-tertiary border border-border-subtle mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-text-secondary">
              Full-Stack Build + Repair
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-text-primary mb-2">
              How We Build and Repair
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Full-Stack Apps That Ship
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We help founders and teams start from zero, stabilize fragile MVPs,
            or jump in mid-project. Same engineering standards either way.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
