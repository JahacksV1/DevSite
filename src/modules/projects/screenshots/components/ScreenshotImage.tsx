'use client'

import Image from 'next/image'
import type { SyntheticEvent } from 'react'
import { cn } from '@/lib/utils'
import type { Project } from '../../lib/projectsData'
import {
  getScreenshotDimensions,
  getScreenshotSizes,
  type ScreenshotContext,
} from '../assets'
import { markScreenshotPainted } from '../cache'

interface ScreenshotImageProps {
  src: string
  alt: string
  layout?: Project['screenshotLayout']
  context: ScreenshotContext
  priority?: boolean
  fill?: boolean
  className?: string
  sizes?: string
  fetchPriority?: 'high' | 'low' | 'auto'
  onPainted?: () => void
  /** When true, omit fixed width/height so each asset uses its natural aspect ratio. */
  naturalAspect?: boolean
}

async function notifyWhenPaintReady(
  img: HTMLImageElement,
  onPainted?: () => void
): Promise<void> {
  if (typeof img.decode === 'function') {
    try {
      await img.decode()
    } catch {
      // onload already fired — treat as paintable.
    }
  }

  onPainted?.()
}

export function ScreenshotImage({
  src,
  alt,
  layout,
  context,
  priority = false,
  fill = false,
  className,
  sizes,
  fetchPriority,
  onPainted,
  naturalAspect = false,
}: ScreenshotImageProps) {
  const dimensions = getScreenshotDimensions(layout)
  const resolvedSizes = sizes ?? getScreenshotSizes(layout, context)

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget

    void notifyWhenPaintReady(img, () => {
      markScreenshotPainted(src, layout, context)
      onPainted?.()
    })
  }

  const sharedProps = {
    src,
    alt,
    sizes: resolvedSizes,
    priority,
    loading: 'eager' as const,
    fetchPriority,
    onLoad: handleLoad,
  }

  if (fill) {
    return <Image {...sharedProps} fill className={className} />
  }

  if (naturalAspect) {
    return (
      <Image
        {...sharedProps}
        width={dimensions.width}
        height={dimensions.height}
        draggable={false}
        className={cn('block h-auto w-full aspect-auto', className)}
        style={{ width: '100%', height: 'auto' }}
      />
    )
  }

  return (
    <Image
      {...sharedProps}
      width={dimensions.width}
      height={dimensions.height}
      draggable={false}
      className={cn('block h-auto w-full', className)}
    />
  )
}
