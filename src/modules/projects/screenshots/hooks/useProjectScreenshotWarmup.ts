'use client'

import { useCallback } from 'react'
import type { Project } from '../../lib/projectsData'
import { warmProjectGallery } from '../cache'

export function useProjectScreenshotWarmup(
  project: Pick<Project, 'screenshots' | 'screenshotLayout'>
) {
  const warm = useCallback(() => {
    warmProjectGallery(project)
  }, [project])

  return { warm }
}
