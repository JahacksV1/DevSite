'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Layers, Lock, Users, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export const UpworkHeader = () => {
  return (
    <section className="py-20 md:py-28 border-b border-border-subtle">
      <div className="container-main max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-tertiary border border-border-subtle mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-text-secondary font-medium">
              AI-Assisted Full-Stack Development
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            We Build Working Software.
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Not Mockups.
            </span>
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
            Two-person AI-assisted engineering team specializing in MVPs,
            internal tools, AI workflow systems, document automation, and SaaS
            platforms for founders and businesses.
          </p>
          <p className="text-base text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            We use AI-assisted engineering workflows with human oversight over
            architecture, security, and quality. Milestone-based delivery.
            Clean, maintainable code you own.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-xl',
                'bg-gradient-to-br from-primary to-primary/80',
                'text-bg-primary font-semibold',
                'hover:shadow-[0_0_20px_rgba(0,255,198,0.35)] transition-all duration-200'
              )}
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/how-we-build"
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-xl',
                'bg-bg-tertiary border border-border-subtle text-text-secondary font-semibold',
                'hover:border-primary hover:text-primary transition-all duration-200'
              )}
            >
              How We Build
            </Link>
          </div>

          <p className="mt-8 text-xs text-text-muted">
            If you found this page through Upwork, please keep all communication
            on the Upwork platform.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const capabilities = [
  'Next.js / React / TypeScript',
  'Supabase + PostgreSQL',
  'OpenAI / GPT Integration',
  'Stripe Billing + Webhooks',
  'Document Processing (DOCX, PDF)',
  'Role-Based Access Control',
  'Real-Time Features',
  'Vercel Deployment',
  'Mobile-First UI',
  'API Integrations',
  'Tailwind CSS',
  'Voice Input (Deepgram)',
]

export const UpworkCapabilities = () => {
  return (
    <section className="py-16 border-t border-border-subtle bg-bg-secondary/50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Technical Capabilities
          </h2>
          <p className="text-text-secondary text-sm">
            Technologies we actively use across production projects.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="px-4 py-2 text-sm font-mono rounded-lg bg-bg-tertiary border border-border-subtle text-text-secondary"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

const howWeWorkItems = [
  {
    icon: Layers,
    title: 'Milestone-Based Delivery',
    desc: 'Larger projects are broken into clear milestones with deliverables at each stage. You review before we move forward.',
  },
  {
    icon: Users,
    title: 'Human Oversight',
    desc: 'We use AI-assisted workflows while maintaining direct human oversight over architecture decisions, security, and code quality.',
  },
  {
    icon: Zap,
    title: 'Fast Starts',
    desc: 'We scope quickly and start building. No multi-week discovery phases before a line of code is written.',
  },
  {
    icon: Lock,
    title: 'Privacy by Default',
    desc: 'Some of our best work is private or unreleased. Case studies use sanitized screenshots. Your project details stay yours.',
  },
]

export const UpworkHowWeWork = () => {
  return (
    <>
      <section className="py-16 border-t border-border-subtle">
        <div className="container-main max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
              How We Work
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {howWeWorkItems.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-xl bg-bg-secondary border border-border-subtle"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-sm mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 border-t border-border-subtle">
        <div className="container-main max-w-2xl text-center">
          <p className="text-sm text-text-muted leading-relaxed">
            This portfolio page is shared with prospective clients on Upwork and
            other platforms. If you are viewing this through Upwork, all
            communication and project coordination should remain on the Upwork
            platform per their terms of service.
          </p>
        </div>
      </section>
    </>
  )
}
