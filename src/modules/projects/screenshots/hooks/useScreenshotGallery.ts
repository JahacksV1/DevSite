'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Project } from '../../lib/projectsData'
import { resolveScreenshotLayout } from '../assets'
import {
  isScreenshotPainted,
  subscribeScreenshotPainted,
  warmScreenshot,
  warmScreenshotGallery,
} from '../cache'

interface UseScreenshotGalleryOptions {
  screenshots: string[]
  layout?: Project['screenshotLayout']
}

function initialPaintedIndices(
  screenshots: string[],
  layout: Project['screenshotLayout'] | undefined
): Set<number> {
  const painted = new Set<number>()

  screenshots.forEach((src, index) => {
    if (isScreenshotPainted(src, layout, 'gallery')) {
      painted.add(index)
    }
  })

  return painted
}

export function useScreenshotGallery({
  screenshots,
  layout,
}: UseScreenshotGalleryOptions) {
  const resolvedLayout = resolveScreenshotLayout(layout)
  const [requestedIndex, setRequestedIndex] = useState(0)
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const [paintedIndices, setPaintedIndices] = useState(() =>
    initialPaintedIndices(screenshots, layout)
  )

  const requestedIndexRef = useRef(0)
  const screenshotsKey = screenshots.join('|')

  const lastIndex = Math.max(0, screenshots.length - 1)

  useEffect(() => {
    requestedIndexRef.current = requestedIndex
  }, [requestedIndex])

  const markSlidePainted = useCallback((index: number) => {
    setPaintedIndices((current) => {
      if (current.has(index)) return current

      const next = new Set(current)
      next.add(index)
      return next
    })
  }, [])

  const warmAround = useCallback(
    (index: number) => {
      const candidates = [index - 2, index - 1, index, index + 1, index + 2].filter(
        (candidate) => candidate >= 0 && candidate < screenshots.length
      )

      for (const candidate of candidates) {
        void warmScreenshot(screenshots[candidate], resolvedLayout, 'gallery')
      }
    },
    [resolvedLayout, screenshots]
  )

  useEffect(() => {
    setRequestedIndex(0)
    setDisplayedIndex(0)
    setPaintedIndices(initialPaintedIndices(screenshots, layout))
    warmScreenshotGallery(screenshots, resolvedLayout)
  }, [layout, resolvedLayout, screenshots, screenshotsKey])

  useEffect(() => {
    warmAround(requestedIndex)
  }, [requestedIndex, warmAround])

  useEffect(() => {
    if (paintedIndices.has(requestedIndex)) {
      setDisplayedIndex(requestedIndex)
    }
  }, [paintedIndices, requestedIndex])

  useEffect(() => {
    const src = screenshots[requestedIndex]
    if (!src) return

    if (isScreenshotPainted(src, resolvedLayout, 'gallery')) {
      markSlidePainted(requestedIndex)
      return
    }

    const targetIndex = requestedIndex

    return subscribeScreenshotPainted(
      src,
      resolvedLayout,
      'gallery',
      () => {
        if (requestedIndexRef.current === targetIndex) {
          markSlidePainted(targetIndex)
        }
      }
    )
  }, [markSlidePainted, requestedIndex, resolvedLayout, screenshots])

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = Math.max(0, Math.min(lastIndex, index))
      setRequestedIndex(nextIndex)
      warmAround(nextIndex)
    },
    [lastIndex, warmAround]
  )

  const goNext = useCallback(() => {
    goTo(requestedIndexRef.current + 1)
  }, [goTo])

  const goPrev = useCallback(() => {
    goTo(requestedIndexRef.current - 1)
  }, [goTo])

  const prefetchNext = useCallback(() => {
    warmAround(requestedIndexRef.current + 1)
  }, [warmAround])

  const prefetchPrev = useCallback(() => {
    warmAround(requestedIndexRef.current - 1)
  }, [warmAround])

  const isSlidePainted = useCallback(
    (index: number) => paintedIndices.has(index),
    [paintedIndices]
  )

  return {
    displayedIndex,
    requestedIndex,
    goTo,
    goNext,
    goPrev,
    prefetchNext,
    prefetchPrev,
    markSlidePainted,
    isSlidePainted,
    hasMultiple: screenshots.length > 1,
    isFirst: requestedIndex === 0,
    isLast: requestedIndex === lastIndex,
  }
}
