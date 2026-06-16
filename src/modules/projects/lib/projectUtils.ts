import { projects, type Project } from './projectsData'

export const DESKTOP_SCREENSHOT_WIDTH = 1024
export const DESKTOP_SCREENSHOT_HEIGHT = 582
export const MOBILE_SCREENSHOT_WIDTH = 851
export const MOBILE_SCREENSHOT_HEIGHT = 1024

/** 2× export targets — use `npm run normalize-screenshots` after adding assets */
export const DESKTOP_SCREENSHOT_WIDTH_2X = DESKTOP_SCREENSHOT_WIDTH * 2
export const DESKTOP_SCREENSHOT_HEIGHT_2X = DESKTOP_SCREENSHOT_HEIGHT * 2
export const MOBILE_SCREENSHOT_WIDTH_2X = MOBILE_SCREENSHOT_WIDTH * 2
export const MOBILE_SCREENSHOT_HEIGHT_2X = MOBILE_SCREENSHOT_HEIGHT * 2

/** Skip Next.js optimizer so pre-compressed PNG/WebP assets are not re-encoded */
export const projectScreenshotImageProps = {
  unoptimized: true,
} as const

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function isMobileScreenshotProject(
  project: Pick<Project, 'screenshotLayout'>
): boolean {
  return project.screenshotLayout === 'mobile'
}

export function getScreenshotDimensions(
  layout: Project['screenshotLayout']
): { width: number; height: number } {
  if (layout === 'mobile') {
    return {
      width: MOBILE_SCREENSHOT_WIDTH,
      height: MOBILE_SCREENSHOT_HEIGHT,
    }
  }

  return {
    width: DESKTOP_SCREENSHOT_WIDTH,
    height: DESKTOP_SCREENSHOT_HEIGHT,
  }
}
