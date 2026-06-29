'use client'

import { Layers, Sparkles, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../lib/projectsData'

interface ProjectDetailSectionsProps {
  project: Project
  headingClassName?: string
  bodyClassName?: string
}

export const ProjectDetailSections = ({
  project,
  headingClassName = 'text-xs font-bold text-text-muted uppercase tracking-widest mb-4',
  bodyClassName = 'text-text-secondary leading-relaxed',
}: ProjectDetailSectionsProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div>
            <h3 className={cn(headingClassName, 'mb-3')}>The Challenge</h3>
            <p className={cn(bodyClassName, 'text-sm')}>{project.challenge}</p>
          </div>
          <div>
            <h3 className={cn(headingClassName, 'mb-3')}>What We Built</h3>
            <ul className="space-y-2">
              {project.solution.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="text-primary mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          {project.uniqueFeatures.length > 0 && (
            <div>
              <h3
                className={cn(
                  headingClassName,
                  'mb-3 flex items-center gap-1.5'
                )}
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                What Makes It Different
              </h3>
              <ul className="space-y-2">
                {project.uniqueFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-secondary mt-0.5 shrink-0">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architectureHighlights.length > 0 && (
            <div>
              <h3
                className={cn(
                  headingClassName,
                  'mb-3 flex items-center gap-1.5'
                )}
              >
                <Layers className="w-3.5 h-3.5 text-secondary" />
                Architecture
              </h3>
              <ul className="space-y-2">
                {project.architectureHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-secondary/70 mt-0.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-2">
              Results
            </h3>
            <p className="text-text-primary font-semibold text-sm leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>
      </div>

      {project.relevantFor.length > 0 && (
        <div className="mb-8 p-4 rounded-xl bg-bg-tertiary border border-border-subtle">
          <h3
            className={cn(headingClassName, 'mb-3 flex items-center gap-1.5')}
          >
            <Users className="w-3.5 h-3.5" />
            Relevant For
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.relevantFor.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs rounded-lg bg-bg-secondary border border-border-subtle text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className={cn(headingClassName, 'mb-4')}>
          Tech Stack — How Each Piece Is Used
        </h3>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {project.techDetails.map((tech) => (
            <div
              key={tech.name}
              className="flex gap-3 p-3 rounded-lg bg-bg-tertiary border border-border-subtle"
            >
              <span className="text-xs font-mono font-bold text-primary shrink-0 pt-0.5 w-[100px]">
                {tech.name}
              </span>
              <span className="text-xs text-text-secondary leading-relaxed">
                {tech.purpose}
              </span>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
