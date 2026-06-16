'use client'

import Link from 'next/link'
import { ExternalLink, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../lib/projectsData'

interface ProjectCaseStudySidebarProps {
  project: Project
}

export const ProjectCaseStudySidebar = ({
  project,
}: ProjectCaseStudySidebarProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1.5 text-xs font-mono rounded-lg bg-bg-tertiary border border-border-subtle text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.relevantFor.length > 0 && (
        <div className="p-4 rounded-xl bg-bg-secondary border border-border-subtle">
          <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            Relevant For
          </h2>
          <ul className="space-y-1.5">
            {project.relevantFor.map((item) => (
              <li
                key={item}
                className="text-xs text-text-secondary flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.demoUrl && project.demoStatus === 'Live — Public' && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl',
            'bg-gradient-to-br from-primary to-primary/80',
            'text-bg-primary font-semibold text-sm',
            'hover:shadow-[0_0_20px_rgba(0,255,198,0.35)] transition-all duration-200'
          )}
        >
          <ExternalLink className="w-4 h-4" />
          View Live Project
        </a>
      )}
    </div>
  )
}

export const ProjectCaseStudyFooter = () => {
  return (
    <div className="mt-16 pt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <p className="text-lg font-bold text-text-primary mb-1">
          Need something similar built?
        </p>
        <p className="text-sm text-text-secondary">
          We build systems like this for founders and businesses through Upwork.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/projects"
          className={cn(
            'px-5 py-2.5 rounded-xl text-sm font-semibold',
            'bg-bg-tertiary border border-border-subtle text-text-secondary',
            'hover:border-primary hover:text-primary transition-all duration-200'
          )}
        >
          ← All Projects
        </Link>
        <Link
          href="/upwork"
          className={cn(
            'px-5 py-2.5 rounded-xl text-sm font-semibold',
            'bg-primary/10 border border-primary/30 text-primary',
            'hover:bg-primary/20 transition-all duration-200'
          )}
        >
          View Portfolio →
        </Link>
      </div>
    </div>
  )
}
