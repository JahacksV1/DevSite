'use client'

import { Lock } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { getCategoryBadgeClassName } from '../../lib/categoryBadge'
import type { Project } from '../../lib/projectsData'
import { useScreenshotGallery } from '../hooks/useScreenshotGallery'
import { ScreenshotGalleryControls } from './ScreenshotGalleryControls'
import { ScreenshotGalleryStage } from './ScreenshotGalleryStage'

interface ProjectScreenshotGalleryProps {
  title: string
  screenshots: string[]
  category: Project['category']
  screenshotLayout?: Project['screenshotLayout']
  maxHeightClassName?: string
  roundedClassName?: string
  headerActions?: ReactNode
}

export function ProjectScreenshotGallery({
  title,
  screenshots,
  category,
  screenshotLayout,
  maxHeightClassName,
  roundedClassName = 'rounded-t-2xl',
  headerActions,
}: ProjectScreenshotGalleryProps) {
  const hasScreenshots = screenshots.length > 0
  const {
    displayedIndex,
    requestedIndex,
    goTo,
    goNext,
    goPrev,
    prefetchNext,
    prefetchPrev,
    markSlidePainted,
    hasMultiple,
    isFirst,
    isLast,
  } = useScreenshotGallery({
    screenshots,
    layout: screenshotLayout,
  })

  return (
    <div className={cn('w-full overflow-hidden', roundedClassName)}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6 bg-bg-secondary border-b border-border-subtle">
        <span
          className={cn(
            'px-3 py-1 rounded-full text-xs font-semibold border',
            getCategoryBadgeClassName(category)
          )}
        >
          {category}
        </span>
        {headerActions}
      </div>

      {hasScreenshots ? (
        <div className="relative">
          <ScreenshotGalleryStage
            title={title}
            screenshots={screenshots}
            layout={screenshotLayout}
            displayedIndex={displayedIndex}
            requestedIndex={requestedIndex}
            onSlidePainted={markSlidePainted}
            maxHeightClassName={maxHeightClassName}
          />

          {hasMultiple && (
            <ScreenshotGalleryControls
              layout={screenshotLayout}
              count={screenshots.length}
              activeIndex={requestedIndex}
              isFirst={isFirst}
              isLast={isLast}
              onPrev={goPrev}
              onNext={goNext}
              onSelect={goTo}
              onPrefetchPrev={prefetchPrev}
              onPrefetchNext={prefetchNext}
            />
          )}
        </div>
      ) : (
        <div className="min-h-[280px] flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-br from-bg-tertiary to-bg-elevated">
          <div className="w-16 h-16 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
            <Lock className="w-7 h-7 text-text-muted" />
          </div>
          <p className="text-sm text-text-muted text-center max-w-xs leading-relaxed">
            Screenshots coming soon.
          </p>
        </div>
      )}
    </div>
  )
}
