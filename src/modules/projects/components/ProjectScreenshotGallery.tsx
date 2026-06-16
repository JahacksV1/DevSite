'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { DemoStatusDetail } from '../lib/demoStatus'
import {
  getScreenshotDimensions,
  projectScreenshotImageProps,
} from '../lib/projectUtils'
import type { Project } from '../lib/projectsData'

interface ProjectScreenshotGalleryProps {
  title: string
  screenshots: string[]
  status: DemoStatusDetail
  category: string
  screenshotLayout?: Project['screenshotLayout']
  maxHeightClassName?: string
  roundedClassName?: string
  headerActions?: ReactNode
}

export const ProjectScreenshotGallery = ({
  title,
  screenshots,
  status,
  category,
  screenshotLayout = 'desktop',
  maxHeightClassName,
  roundedClassName = 'rounded-t-2xl',
  headerActions,
}: ProjectScreenshotGalleryProps) => {
  const [activeShot, setActiveShot] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const hasScreenshots = screenshots.length > 0
  const hasMultiple = screenshots.length > 1
  const isMobile = screenshotLayout === 'mobile'
  const dimensions = getScreenshotDimensions(screenshotLayout)
  const resolvedMaxHeight =
    maxHeightClassName ??
    (isMobile ? 'max-h-[520px] md:max-h-[580px]' : 'max-h-[480px] md:max-h-[540px]')

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 })
  }, [activeShot])

  const prevShot = () => {
    setActiveShot((index) => Math.max(0, index - 1))
  }

  const nextShot = () => {
    setActiveShot((index) => Math.min(screenshots.length - 1, index + 1))
  }

  return (
    <div className={cn('w-full overflow-hidden', roundedClassName)}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6 bg-bg-secondary border-b border-border-subtle">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'px-3 py-1 rounded-full text-xs font-semibold border',
              status.className
            )}
          >
            {status.label}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-bg-tertiary border border-border-subtle text-text-secondary">
            {category}
          </span>
        </div>
        {headerActions}
      </div>

      <div
        className={cn('relative w-full', isMobile ? 'bg-zinc-950' : 'bg-white')}
      >
        {hasScreenshots ? (
          <>
            <div
              ref={scrollRef}
              className={cn(
                'overflow-y-auto overflow-x-hidden overscroll-contain',
                isMobile && 'flex justify-center px-4 py-6 md:px-8 md:py-8',
                resolvedMaxHeight
              )}
            >
              {screenshots.map((src, index) => (
                <div
                  key={src}
                  className={cn(
                    index === activeShot ? 'block' : 'hidden',
                    isMobile && 'w-full max-w-[320px] sm:max-w-[360px] mx-auto'
                  )}
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${index + 1}`}
                    width={dimensions.width}
                    height={dimensions.height}
                    {...projectScreenshotImageProps}
                    priority={index === 0}
                    draggable={false}
                    className={cn(
                      'block h-auto w-full',
                      isMobile &&
                        'rounded-[1.75rem] shadow-2xl ring-1 ring-white/10'
                    )}
                    sizes={
                      isMobile
                        ? '(max-width: 640px) 280px, 360px'
                        : '(max-width: 1024px) 100vw, 1024px'
                    }
                  />
                </div>
              ))}
            </div>

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={prevShot}
                  disabled={activeShot === 0}
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
                  onClick={nextShot}
                  disabled={activeShot === screenshots.length - 1}
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
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`View screenshot ${index + 1}`}
                      aria-current={index === activeShot ? 'true' : undefined}
                      onClick={() => setActiveShot(index)}
                      className={cn(
                        'rounded-full transition-all duration-200 shadow-sm',
                        index === activeShot
                          ? 'bg-primary w-5 h-2'
                          : isMobile
                            ? 'bg-white/40 w-2 h-2 hover:bg-white/70'
                            : 'bg-white/80 w-2 h-2 hover:bg-white'
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="min-h-[280px] flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-br from-bg-tertiary to-bg-elevated">
            <div className="w-16 h-16 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
              <Lock className="w-7 h-7 text-text-muted" />
            </div>
            <p className="text-sm text-text-muted text-center max-w-xs leading-relaxed">
              {status.note || 'Screenshots coming soon.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
