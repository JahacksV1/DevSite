'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'
import type { Project } from '../../lib/projectsData'
import { getScreenshotDimensions, isMobileScreenshotLayout } from '../assets'
import { ScreenshotImage } from './ScreenshotImage'

interface ScreenshotGalleryStageProps {
  title: string
  screenshots: string[]
  layout?: Project['screenshotLayout']
  displayedIndex: number
  requestedIndex: number
  onSlidePainted: (index: number) => void
  maxHeightClassName?: string
}

function getMountedIndices(
  displayedIndex: number,
  requestedIndex: number,
  count: number
): Set<number> {
  const indices = new Set<number>([0, count - 1])

  for (const center of [displayedIndex, requestedIndex]) {
    for (let offset = -2; offset <= 2; offset += 1) {
      const index = center + offset
      if (index >= 0 && index < count) {
        indices.add(index)
      }
    }
  }

  return indices
}

export function ScreenshotGalleryStage({
  title,
  screenshots,
  layout,
  displayedIndex,
  requestedIndex,
  onSlidePainted,
  maxHeightClassName,
}: ScreenshotGalleryStageProps) {
  const isMobile = isMobileScreenshotLayout(layout)
  const dimensions = getScreenshotDimensions(layout)
  const mountedIndices = useMemo(
    () => getMountedIndices(displayedIndex, requestedIndex, screenshots.length),
    [displayedIndex, requestedIndex, screenshots.length]
  )

  return (
    <div
      className={cn(
        'relative w-full',
        isMobile ? 'bg-zinc-950' : 'bg-zinc-100'
      )}
    >
      <div
        className={cn(
          'w-full',
          maxHeightClassName,
          isMobile && 'px-4 py-6 md:px-8 md:py-8'
        )}
      >
        <div className="grid">
          {screenshots.map((src, index) => {
            const isDisplayed = index === displayedIndex
            const isNeighbor = Math.abs(index - displayedIndex) === 1
            const shouldMount = mountedIndices.has(index)

            return (
              <div
                key={src}
                aria-hidden={!isDisplayed}
                className={cn(
                  'row-start-1 col-start-1',
                  isMobile && 'flex justify-center w-full',
                  isDisplayed
                    ? 'z-10 opacity-100'
                    : 'z-0 opacity-0 pointer-events-none'
                )}
              >
                <div
                  className={cn(
                    'w-full',
                    isMobile && 'max-w-[320px] sm:max-w-[360px]'
                  )}
                  style={{ aspectRatio: `${dimensions.width} / ${dimensions.height}` }}
                >
                  {shouldMount ? (
                    <ScreenshotImage
                      src={src}
                      alt={`${title} screenshot ${index + 1}`}
                      layout={layout}
                      context="gallery"
                      priority={index <= 1 || index === screenshots.length - 1}
                      fetchPriority={
                        isDisplayed ? 'high' : isNeighbor ? 'low' : 'auto'
                      }
                      onPainted={() => onSlidePainted(index)}
                      className={
                        isMobile
                          ? 'rounded-[1.75rem] shadow-2xl ring-1 ring-white/10'
                          : undefined
                      }
                    />
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
