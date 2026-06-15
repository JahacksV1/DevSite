'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Eye, Lock, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { demoStatusBadges } from '../lib/demoStatus'
import type { Project } from '../lib/projectsData'

interface ProjectCardProps {
  project: Project
  index: number
  onViewDetails: () => void
}

export const ProjectCard = ({
  project,
  index,
  onViewDetails,
}: ProjectCardProps) => {
  const status = demoStatusBadges[project.demoStatus]
  const heroShot = project.screenshots[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={cn(
        'group rounded-xl overflow-hidden flex flex-col',
        'bg-bg-secondary border border-border-subtle',
        'hover:border-primary/60 hover:shadow-[0_0_28px_rgba(0,255,198,0.10)]',
        'transition-all duration-300 cursor-pointer'
      )}
      onClick={onViewDetails}
    >
      {/* Screenshot / Preview */}
      <div className="relative h-52 bg-gradient-to-br from-bg-tertiary to-bg-elevated overflow-hidden shrink-0">
        {heroShot ? (
          <Image
            src={heroShot}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
            <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
              {project.demoStatus === 'Private — Case Study Only' ? (
                <Lock className="w-5 h-5 text-text-muted" />
              ) : (
                <Zap className="w-5 h-5 text-text-muted" />
              )}
            </div>
            <p className="text-xs text-text-muted text-center leading-relaxed">
              {project.demoStatus === 'Private — Case Study Only'
                ? 'Private project — screenshots in case study'
                : 'Screenshots coming soon'}
            </p>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-bg-primary/70 backdrop-blur-[2px]',
            'flex items-center justify-center',
            'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          )}
        >
          <span className="flex items-center gap-2 text-primary font-semibold text-sm">
            <Eye className="w-4 h-4" />
            View Case Study
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              'px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm',
              status.className
            )}
          >
            {status.label}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-bg-primary/80 backdrop-blur-sm border border-border-subtle text-text-secondary">
            {project.category}
          </span>
        </div>

        {/* Screenshot count dots */}
        {project.screenshots.length > 1 && (
          <div className="absolute bottom-3 right-3 flex gap-1">
            {project.screenshots.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-1.5 h-1.5 rounded-full',
                  i === 0 ? 'bg-primary' : 'bg-white/30'
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-text-muted mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Relevant for */}
        {project.relevantFor.length > 0 && (
          <div className="mb-4 px-3 py-2 rounded-lg bg-primary/5 border border-primary/15">
            <p className="text-xs text-text-muted mb-1 font-semibold uppercase tracking-wide">
              Relevant for
            </p>
            <p className="text-xs text-primary leading-relaxed">
              {project.relevantFor.slice(0, 3).join(' · ')}
            </p>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          {project.demoUrl && project.demoStatus === 'Live — Public' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold',
                'bg-primary/10 border border-primary/30 text-primary',
                'hover:bg-primary/20 transition-all duration-200'
              )}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Site
            </a>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onViewDetails()
            }}
            className={cn(
              'flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold flex-1 justify-center',
              'bg-bg-tertiary border border-border-subtle text-text-secondary',
              'hover:border-primary hover:text-primary transition-all duration-200'
            )}
          >
            <Eye className="w-3.5 h-3.5" />
            Full Breakdown
          </button>
        </div>
      </div>
    </motion.div>
  )
}
