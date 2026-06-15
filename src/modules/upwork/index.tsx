'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Lock, Layers, Users, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projects } from '@/modules/projects/lib/projectsData'

const demoStatusConfig = {
  'Live — Public': { label: 'Live', className: 'bg-primary/10 border-primary/40 text-primary' },
  'Live — Auth Required': { label: 'Live', className: 'bg-primary/10 border-primary/40 text-primary' },
  'Private — Case Study Only': { label: 'Case Study', className: 'bg-text-muted/10 border-text-muted/30 text-text-muted' },
  'In Development': { label: 'In Dev', className: 'bg-secondary/10 border-secondary/40 text-secondary' },
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

export const UpworkPortfolio = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 md:py-28 border-b border-border-subtle">
        <div className="container-main max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-tertiary border border-border-subtle mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-text-secondary font-medium">AI-Assisted Full-Stack Development</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              We Build Working Software.<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Not Mockups.
              </span>
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
              Two-person AI-assisted engineering team specializing in MVPs, internal tools, AI workflow systems, document automation, and SaaS platforms for founders and businesses.
            </p>
            <p className="text-base text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
              We use AI-assisted engineering workflows with human oversight over architecture, security, and quality. Milestone-based delivery. Clean, maintainable code you own.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects" className={cn('flex items-center gap-2 px-6 py-3 rounded-xl', 'bg-gradient-to-br from-primary to-primary/80', 'text-bg-primary font-semibold', 'hover:shadow-[0_0_20px_rgba(0,255,198,0.35)] transition-all duration-200')}>
                View All Projects
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link href="/how-we-build" className={cn('flex items-center gap-2 px-6 py-3 rounded-xl', 'bg-bg-tertiary border border-border-subtle text-text-secondary font-semibold', 'hover:border-primary hover:text-primary transition-all duration-200')}>
                How We Build
              </Link>
            </div>

            <p className="mt-8 text-xs text-text-muted">
              If you found this page through Upwork, please keep all communication on the Upwork platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-20">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-3">Our Work</h2>
            <p className="text-text-secondary">
              Real products we have designed, architected, and shipped. Click any project to see the full case study.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const status = demoStatusConfig[project.demoStatus]
              const heroShot = project.screenshots[0]
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <Link href={`/projects/${project.slug}`} className={cn('group flex flex-col rounded-xl overflow-hidden', 'bg-bg-secondary border border-border-subtle', 'hover:border-primary/60 hover:shadow-[0_0_28px_rgba(0,255,198,0.08)]', 'transition-all duration-300')}>
                    {/* Screenshot */}
                    <div className="relative h-52 bg-gradient-to-br from-bg-tertiary to-bg-elevated overflow-hidden shrink-0">
                      {heroShot ? (
                        <Image src={heroShot} alt={`${project.title} screenshot`} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
                            <Lock className="w-5 h-5 text-text-muted" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={cn('px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm', status.className)}>{status.label}</span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-bg-primary/80 backdrop-blur-sm border border-border-subtle text-text-secondary">{project.category}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-1">{project.title}</h3>
                      <p className="text-xs text-text-muted mb-3">{project.subtitle}</p>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                      {/* Relevant for */}
                      <div className="mb-4 px-3 py-2 rounded-lg bg-primary/5 border border-primary/15">
                        <p className="text-xs text-text-muted mb-0.5 font-semibold uppercase tracking-wide">Relevant for</p>
                        <p className="text-xs text-primary">{project.relevantFor.slice(0, 3).join(' · ')}</p>
                      </div>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle">{tech}</span>
                        ))}
                        {project.techStack.length > 5 && <span className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle">+{project.techStack.length - 5}</span>}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 border-t border-border-subtle bg-bg-secondary/50">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Technical Capabilities</h2>
            <p className="text-text-secondary text-sm">Technologies we actively use across production projects.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {capabilities.map((cap) => (
              <span key={cap} className="px-4 py-2 text-sm font-mono rounded-lg bg-bg-tertiary border border-border-subtle text-text-secondary">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 border-t border-border-subtle">
        <div className="container-main max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">How We Work</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Layers, title: 'Milestone-Based Delivery', desc: 'Larger projects are broken into clear milestones with deliverables at each stage. You review before we move forward.' },
                { icon: Users, title: 'Human Oversight', desc: 'We use AI-assisted workflows while maintaining direct human oversight over architecture decisions, security, and code quality.' },
                { icon: Zap, title: 'Fast Starts', desc: 'We scope quickly and start building. No multi-week discovery phases before a line of code is written.' },
                { icon: Lock, title: 'Privacy by Default', desc: 'Some of our best work is private or unreleased. Case studies use sanitized screenshots. Your project details stay yours.' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-bg-secondary border border-border-subtle">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upwork notice */}
      <section className="py-10 border-t border-border-subtle">
        <div className="container-main max-w-2xl text-center">
          <p className="text-sm text-text-muted leading-relaxed">
            This portfolio page is shared with prospective clients on Upwork and other platforms. If you are viewing this through Upwork, all communication and project coordination should remain on the Upwork platform per their terms of service.
          </p>
        </div>
      </section>
    </div>
  )
}
