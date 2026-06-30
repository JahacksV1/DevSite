'use client'

import { cn } from '@/lib/utils'
import { getCategoryBadgeClassName } from '../lib/categoryBadge'
import type { Project } from '../lib/projectsData'
import {
  ScreenshotThumbnail,
  useProjectScreenshotWarmup,
} from '../screenshots'

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
  const { warm } = useProjectScreenshotWarmup(project)

  return (
    <div
      className={cn(
        'group rounded-xl overflow-hidden flex flex-col',
        'bg-bg-secondary border border-border-subtle',
        'hover:border-primary/60 hover:shadow-[0_0_28px_rgba(0,255,198,0.10)]',
        'transition-all duration-300 cursor-pointer'
      )}
      onClick={() => {
        warm()
        onViewDetails()
      }}
      onMouseEnter={warm}
      onFocus={warm}
      onTouchStart={warm}
    >
      <ScreenshotThumbnail project={project} priority={index < 3} />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className={cn(
              'px-2.5 py-1 rounded-full text-xs font-semibold border',
              getCategoryBadgeClassName(project.category)
            )}
          >
            {project.category}
          </span>
        </div>
        <div className="mb-3">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-text-muted mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

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
      </div>
    </div>
  )
}
