'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Layers, Lock, Sparkles, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../lib/projectsData'

const demoStatusConfig: Record<Project['demoStatus'], { label: string; note: string; className: string }> = {
  'Live — Public': {
    label: 'Live — Public',
    note: '',
    className: 'bg-primary/10 border-primary/40 text-primary',
  },
  'Live — Auth Required': {
    label: 'Live — Auth Required',
    note: 'Live app requires account creation. Screenshots below show the actual interface.',
    className: 'bg-primary/10 border-primary/40 text-primary',
  },
  'Private — Case Study Only': {
    label: 'Private — Case Study Only',
    note: 'This project is private or unreleased. This case study uses sanitized screenshots, feature breakdowns, and architecture notes. Live app access is not public.',
    className: 'bg-text-muted/10 border-text-muted/30 text-text-muted',
  },
  'In Development': {
    label: 'In Development',
    note: 'This project is actively in development and not yet released.',
    className: 'bg-secondary/10 border-secondary/40 text-secondary',
  },
}

interface Props {
  project: Project
}

export const ProjectCaseStudy = ({ project }: Props) => {
  const [activeShot, setActiveShot] = useState(0)
  const status = demoStatusConfig[project.demoStatus]
  const hasScreenshots = project.screenshots.length > 0

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="container-main pt-8 pb-0">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>
      </div>

      {/* Screenshot gallery */}
      <section className="mt-6">
        <div className="container-main">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-bg-tertiary to-bg-elevated" style={{ height: '480px' }}>
            {hasScreenshots ? (
              <>
                <motion.div
                  key={activeShot}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.screenshots[activeShot]}
                    alt={`${project.title} screenshot ${activeShot + 1}`}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                  />
                </motion.div>

                {project.screenshots.length > 1 && (
                  <>
                    <button onClick={() => setActiveShot((i) => (i - 1 + project.screenshots.length) % project.screenshots.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-border-subtle hover:border-primary transition-all">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={() => setActiveShot((i) => (i + 1) % project.screenshots.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-border-subtle hover:border-primary transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.screenshots.map((_, i) => (
                        <button key={i} onClick={() => setActiveShot(i)} className={cn('rounded-full transition-all duration-200', i === activeShot ? 'bg-primary w-6 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/60')} />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
                  <Lock className="w-9 h-9 text-text-muted" />
                </div>
                <p className="text-sm text-text-muted text-center max-w-xs leading-relaxed">{status.note || 'Screenshots coming soon.'}</p>
              </div>
            )}

            <div className="absolute top-5 left-5 flex gap-2">
              <span className={cn('px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm', status.className)}>{status.label}</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-bg-primary/80 backdrop-blur-sm border border-border-subtle text-text-secondary">{project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container-main max-w-5xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3">{project.title}</h1>
            <p className="text-xl text-text-muted mb-6">{project.subtitle}</p>
            <p className="text-text-secondary leading-relaxed text-lg max-w-3xl">{project.description}</p>
          </motion.div>

          {/* Privacy note */}
          {project.demoStatus === 'Private — Case Study Only' && (
            <div className="mb-10 flex gap-3 p-5 rounded-xl bg-bg-tertiary border border-border-subtle">
              <Lock className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Private Project</p>
                <p className="text-sm text-text-muted leading-relaxed">{status.note}</p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-12">
            {/* Left column — challenge, solution, results */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">The Challenge</h2>
                <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">What We Built</h2>
                <ul className="space-y-3">
                  {project.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-primary mt-1 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unique features */}
              {project.uniqueFeatures.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    What Makes It Different
                  </h2>
                  <ul className="space-y-3">
                    {project.uniqueFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-secondary mt-1 shrink-0">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture */}
              {project.architectureHighlights.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-secondary" />
                    Architecture Highlights
                  </h2>
                  <ul className="space-y-3">
                    {project.architectureHighlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-secondary/60 mt-1 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                <h2 className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-3">Results</h2>
                <p className="text-text-primary font-semibold leading-relaxed">{project.results}</p>
              </div>
            </div>

            {/* Right column — tech stack, relevant for, status */}
            <div className="space-y-8">
              {/* Tech stack */}
              <div>
                <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1.5 text-xs font-mono rounded-lg bg-bg-tertiary border border-border-subtle text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Relevant for */}
              {project.relevantFor.length > 0 && (
                <div className="p-4 rounded-xl bg-bg-secondary border border-border-subtle">
                  <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    Relevant For
                  </h2>
                  <ul className="space-y-1.5">
                    {project.relevantFor.map((item) => (
                      <li key={item} className="text-xs text-text-secondary flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Live link */}
              {project.demoUrl && project.demoStatus === 'Live — Public' && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={cn('flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl', 'bg-gradient-to-br from-primary to-primary/80', 'text-bg-primary font-semibold text-sm', 'hover:shadow-[0_0_20px_rgba(0,255,198,0.35)] transition-all duration-200')}>
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              )}
            </div>
          </div>

          {/* Deep tech breakdown */}
          <div className="mt-16">
            <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6">Tech Stack — How Each Piece Is Used</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.techDetails.map((tech) => (
                <div key={tech.name} className="flex gap-4 p-4 rounded-xl bg-bg-secondary border border-border-subtle">
                  <span className="text-xs font-mono font-bold text-primary shrink-0 pt-0.5 w-[110px]">{tech.name}</span>
                  <span className="text-sm text-text-secondary leading-relaxed">{tech.purpose}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-lg font-bold text-text-primary mb-1">Need something similar built?</p>
              <p className="text-sm text-text-secondary">We build systems like this for founders and businesses through Upwork.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/projects" className={cn('px-5 py-2.5 rounded-xl text-sm font-semibold', 'bg-bg-tertiary border border-border-subtle text-text-secondary', 'hover:border-primary hover:text-primary transition-all duration-200')}>
                ← All Projects
              </Link>
              <Link href="/upwork" className={cn('px-5 py-2.5 rounded-xl text-sm font-semibold', 'bg-primary/10 border border-primary/30 text-primary', 'hover:bg-primary/20 transition-all duration-200')}>
                View Portfolio →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
