'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../../lib/projectsData'
import { isMobileScreenshotLayout } from '../assets'

interface ScreenshotGalleryControlsProps {
  layout?: Project['screenshotLayout']
  count: number
  activeIndex: number
  isFirst: boolean
  isLast: boolean
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
  onPrefetchPrev?: () => void
  onPrefetchNext?: () => void
}

export function ScreenshotGalleryControls({
  layout,
  count,
  activeIndex,
  isFirst,
  isLast,
  onPrev,
  onNext,
  onSelect,
  onPrefetchPrev,
  onPrefetchNext,
}: ScreenshotGalleryControlsProps) {
  const isMobile = isMobileScreenshotLayout(layout)

  return (
    <>
      <button
        type="button"
        onPointerEnter={onPrefetchPrev}
        onFocus={onPrefetchPrev}
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Previous screenshot"
        className={cn(
          'absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full',
          isMobile
            ? 'bg-zinc-900/90 border border-zinc-700 text-zinc-100 shadow-md backdrop-blur-sm hover:border-primary'
            : 'bg-white/95 backdrop-blur-sm border border-zinc-300 text-zinc-700 shadow-md hover:border-primary hover:text-primary',
          'transition-colors disabled:opacity-30 disabled:pointer-events-none'
        )}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        type="button"
        onPointerEnter={onPrefetchNext}
        onFocus={onPrefetchNext}
        onClick={onNext}
        disabled={isLast}
        aria-label="Next screenshot"
        className={cn(
          'absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full',
          isMobile
            ? 'bg-zinc-900/90 border border-zinc-700 text-zinc-100 shadow-md backdrop-blur-sm hover:border-primary'
            : 'bg-white/95 backdrop-blur-sm border border-zinc-300 text-zinc-700 shadow-md hover:border-primary hover:text-primary',
          'transition-colors disabled:opacity-30 disabled:pointer-events-none'
        )}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`View screenshot ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => onSelect(index)}
            className={cn(
              'rounded-full transition-all duration-200 shadow-sm',
              index === activeIndex
                ? 'bg-primary w-5 h-2'
                : isMobile
                  ? 'bg-white/40 w-2 h-2 hover:bg-white/70'
                  : 'bg-white/80 w-2 h-2 hover:bg-white'
            )}
          />
        ))}
      </div>
    </>
  )
}
