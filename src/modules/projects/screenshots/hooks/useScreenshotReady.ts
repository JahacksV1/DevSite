'use client'

import { useEffect, useState } from 'react'
import type { Project } from '../../lib/projectsData'
import type { ScreenshotContext } from '../assets'
import {
  isScreenshotPainted,
  subscribeScreenshotPainted,
} from '../cache'

export function useScreenshotReady(
  src: string | undefined,
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext
): boolean {
  const [ready, setReady] = useState(() =>
    src ? isScreenshotPainted(src, layout, context) : false
  )

  useEffect(() => {
    if (!src) {
      setReady(false)
      return
    }

    const sync = () => {
      setReady(isScreenshotPainted(src, layout, context))
    }

    sync()
    return subscribeScreenshotPainted(src, layout, context, sync)
  }, [src, layout, context])

  return ready
}
