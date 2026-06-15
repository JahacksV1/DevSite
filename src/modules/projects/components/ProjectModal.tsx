'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ExternalLink, ChevronLeft, ChevronRight, Sparkles, Lock, Layers, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../lib/projectsData'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const demoStatusConfig: Record<Project['demoStatus'], { label: string; note: string; className: string }> = {
  'Live — Public': {
    label: 'Live — Public',
    note: 'This project is publicly accessible.',
    className: 'bg-primary/10 border-primary/40 text-primary',
  },
  'Live — Auth Required': {
    label: 'Live — Auth Required',
    note: 'This project is live but requires account creation to access.',
    className: 'bg-primary/10 border-primary/40 text-primary',
  },
  'Private — Case Study Only': {
    label: 'Private — Case Study Only',
    note: 'This project is private or unreleased. This case study includes sanitized screenshots, feature breakdowns, and architecture notes. Live app access is not public.',
    className: 'bg-text-muted/10 border-text-muted/30 text-text-muted',
  },
  'In Development': {
    label: 'In Development',
    note: 'This project is actively in development and not yet publicly released.',
    className: 'bg-secondary/10 border-secondary/40 text-secondary',
  },
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeShot, setActiveShot] = useState(0)

  if (!project) return null

  const status = demoStatusConfig[project.demoStatus]
  const hasScreenshots = project.screenshots.length > 0

  const prevShot = () => setActiveShot((i) => (i - 1 + project.screenshots.length) % project.screenshots.length)
  const nextShot = () => setActiveShot((i) => (i + 1) % project.screenshots.length)

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-bg-primary/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'relative w-full max-w-5xl max-h-[92vh] overflow-y-auto',
            'bg-bg-secondary border border-border-default rounded-2xl shadow-2xl'
          )}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className={cn(
              'absolute top-4 right-4 z-20 p-2 rounded-lg',
              'bg-bg-tertiary border border-border-subtle',
              'hover:border-primary hover:text-primary transition-all duration-200'
            )}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Screenshot Gallery */}
          <div className="relative h-72 md:h-[380px] bg-gradient-to-br from-bg-tertiary to-bg-elevated overflow-hidden rounded-t-2xl">
            {hasScreenshots ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeShot}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.screenshots[activeShot]}
                      alt={`${project.title} screenshot ${activeShot + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 900px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {project.screenshots.length > 1 && (
                  <>
                    <button onClick={prevShot} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-border-subtle hover:border-primary transition-all">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={nextShot} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-border-subtle hover:border-primary transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveShot(i)}
                          className={cn('rounded-full transition-all duration-200', i === activeShot ? 'bg-primary w-5 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/60')}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
                  <Lock className="w-7 h-7 text-text-muted" />
                </div>
                <div className="text-center max-w-xs">
                  <p className="text-sm font-medium text-text-secondary">Screenshots Coming Soon</p>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">{status.note}</p>
                </div>
              </div>
            )}

            <div className="absolute top-4 left-4 flex gap-2">
              <span className={cn('px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm', status.className)}>
                {status.label}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-bg-primary/80 backdrop-blur-sm border border-border-subtle text-text-secondary">
                {project.category}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{project.title}</h2>
              <p className="text-text-muted text-sm mt-1">{project.subtitle}</p>
              <p className="text-text-secondary leading-relaxed mt-4 text-sm">{project.description}</p>
            </div>

            {/* Privacy notice for private projects */}
            {project.demoStatus === 'Private — Case Study Only' && (
              <div className="mb-6 flex gap-3 p-4 rounded-xl bg-bg-tertiary border border-border-subtle">
                <Lock className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                <p className="text-xs text-text-muted leading-relaxed">{status.note}</p>
              </div>
            )}

            {/* Two-column content */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">The Challenge</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">What We Built</h3>
                  <ul className="space-y-2">
                    {project.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-primary mt-0.5 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                {/* Unique features */}
                {project.uniqueFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      What Makes It Different
                    </h3>
                    <ul className="space-y-2">
                      {project.uniqueFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-secondary mt-0.5 shrink-0">✦</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Architecture highlights */}
                {project.architectureHighlights.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-secondary" />
                      Architecture
                    </h3>
                    <ul className="space-y-2">
                      {project.architectureHighlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-secondary/70 mt-0.5 shrink-0">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Results */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-2">Results</h3>
                  <p className="text-text-primary font-semibold text-sm leading-relaxed">{project.results}</p>
                </div>
              </div>
            </div>

            {/* Relevant for */}
            {project.relevantFor.length > 0 && (
              <div className="mb-8 p-4 rounded-xl bg-bg-tertiary border border-border-subtle">
                <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Relevant For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.relevantFor.map((item) => (
                    <span key={item} className="px-3 py-1.5 text-xs rounded-lg bg-bg-secondary border border-border-subtle text-text-secondary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Deep tech breakdown */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
                Tech Stack — How Each Piece Is Used
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.techDetails.map((tech) => (
                  <div key={tech.name} className="flex gap-3 p-3 rounded-lg bg-bg-tertiary border border-border-subtle">
                    <span className="text-xs font-mono font-bold text-primary shrink-0 pt-0.5 w-[100px]">{tech.name}</span>
                    <span className="text-xs text-text-secondary leading-relaxed">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            {project.demoUrl && project.demoStatus === 'Live — Public' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                  'bg-gradient-to-br from-primary to-primary/80',
                  'text-bg-primary font-semibold text-sm',
                  'hover:shadow-[0_0_24px_rgba(0,255,198,0.4)] transition-all duration-200'
                )}
              >
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
