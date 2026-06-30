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
