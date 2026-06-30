'use client'

import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../../lib/projectsData'
import { isMobileScreenshotLayout } from '../assets'
import { ScreenshotImage } from './ScreenshotImage'

interface ScreenshotThumbnailProps {
  project: Pick<Project, 'title' | 'screenshots' | 'screenshotLayout'>
  priority?: boolean
  showCount?: boolean
}

export function ScreenshotThumbnail({
  project,
  priority = false,
  showCount = true,
}: ScreenshotThumbnailProps) {
  const heroShot = project.screenshots[0]
  const isMobile = isMobileScreenshotLayout(project.screenshotLayout)

  return (
    <div
      className={cn(
        'relative h-52 overflow-hidden shrink-0',
        isMobile
          ? 'bg-zinc-950'
          : 'bg-gradient-to-br from-bg-tertiary to-bg-elevated'
      )}
    >
      {heroShot ? (
        isMobile ? (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <ScreenshotImage
              src={heroShot}
              alt={`${project.title} screenshot`}
              layout={project.screenshotLayout}
              context="thumbnail"
              priority={priority}
              className="h-full w-auto max-h-full rounded-2xl object-contain shadow-lg ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="absolute inset-3 rounded overflow-hidden shadow-sm group-hover:inset-2 transition-all duration-500">
            <ScreenshotImage
              src={heroShot}
              alt={`${project.title} screenshot`}
              layout={project.screenshotLayout}
              context="thumbnail"
              priority={priority}
              fill
              className="object-cover object-top"
            />
          </div>
        )
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
          <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
            <Lock className="w-5 h-5 text-text-muted" />
          </div>
          <p className="text-xs text-text-muted text-center leading-relaxed">
            Screenshots coming soon
          </p>
        </div>
      )}

      {showCount && project.screenshots.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1">
          {project.screenshots.map((_, index) => (
            <div
              key={index}
              className={cn(
                'w-1.5 h-1.5 rounded-full',
                index === 0 ? 'bg-primary' : 'bg-white/30'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
