'use client'

import { motion } from 'framer-motion'
import { BarChart3, FileText, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const demos = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics Dashboard',
    description:
      'Live-updating dashboard with interactive charts. Built to demonstrate full-stack speed — data simulation, animated charts, live state — all from scratch.',
    action: 'Try Live Demo',
    actionUrl: '/demos/dashboard',
    color: 'primary' as const,
    badge: 'Live Now ✨',
    external: false,
  },
  {
    icon: Sparkles,
    title: 'Home Service Demo Sites',
    description:
      'Three fully-built local business websites — plumbing, landscaping, tree service — from one codebase. Click through each industry vertical.',
    action: 'View Demo Sites',
    actionUrl: 'https://home-service-demos.vercel.app',
    color: 'secondary' as const,
    badge: 'Live ↗',
    external: true,
  },
  {
    icon: FileText,
    title: 'Bond Generator',
    description:
      'Municipal bond certificate generation SaaS. Upload a DOCX template, parse a maturity schedule, and generate production-ready certificates with Stripe billing.',
    action: 'View Project',
    actionUrl: 'https://bond-generator.vercel.app',
    color: 'primary' as const,
    badge: 'Live ↗',
    external: true,
  },
]

const CardInner = ({ demo }: { demo: (typeof demos)[0] }) => {
  const Icon = demo.icon
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'group block h-full p-6 rounded-xl',
        'bg-bg-secondary border border-border-subtle',
        'hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]',
        'transition-all duration-300 cursor-pointer'
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center',
            'bg-gradient-to-br transition-all duration-300',
            demo.color === 'primary'
              ? 'from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20'
              : 'from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/20'
          )}
        >
          <Icon
            className={cn('w-6 h-6', demo.color === 'primary' ? 'text-primary' : 'text-secondary')}
          />
        </div>
        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
          {demo.badge}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
        {demo.title}
      </h3>
      <p className="text-text-secondary mb-6 leading-relaxed min-h-[80px]">{demo.description}</p>

      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-200">
        <span>{demo.action}</span>
        <span className="ml-2">→</span>
      </div>
    </motion.div>
  )
}

export const LiveDemosSection = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            See Our Work{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Don&apos;t take our word for it. Try our live demos and projects. No signup, no sales pitch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {demo.external ? (
                <a href={demo.actionUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <CardInner demo={demo} />
                </a>
              ) : (
                <Link href={demo.actionUrl} className="block h-full">
                  <CardInner demo={demo} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-4">
            Impressed? Imagine what we can build for your business.
          </p>
          <Link
            href="/how-we-build"
            className="text-primary hover:text-primary-hover font-semibold transition-colors"
          >
            See how we build so fast →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
