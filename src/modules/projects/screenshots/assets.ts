import { getImageProps } from 'next/image'
import type { Project } from '../lib/projectsData'

export type ScreenshotLayout = NonNullable<Project['screenshotLayout']>
export type ScreenshotContext = 'gallery' | 'thumbnail'

export const DESKTOP_SCREENSHOT_WIDTH = 1024
export const DESKTOP_SCREENSHOT_HEIGHT = 582
export const MOBILE_SCREENSHOT_WIDTH = 851
export const MOBILE_SCREENSHOT_HEIGHT = 1024

/** 2× export targets — use `npm run normalize-screenshots` after adding assets */
export const DESKTOP_SCREENSHOT_WIDTH_2X = DESKTOP_SCREENSHOT_WIDTH * 2
export const DESKTOP_SCREENSHOT_HEIGHT_2X = DESKTOP_SCREENSHOT_HEIGHT * 2
export const MOBILE_SCREENSHOT_WIDTH_2X = MOBILE_SCREENSHOT_WIDTH * 2
export const MOBILE_SCREENSHOT_HEIGHT_2X = MOBILE_SCREENSHOT_HEIGHT * 2

const SIZES: Record<ScreenshotContext, Record<ScreenshotLayout, string>> = {
  gallery: {
    desktop: '(max-width: 1024px) 100vw, 1024px',
    mobile: '(max-width: 640px) 280px, 360px',
  },
  thumbnail: {
    desktop: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    mobile: '180px',
  },
}

export function resolveScreenshotLayout(
  layout?: Project['screenshotLayout']
): ScreenshotLayout {
  return layout ?? 'desktop'
}

export function isMobileScreenshotLayout(
  layout?: Project['screenshotLayout']
): boolean {
  return resolveScreenshotLayout(layout) === 'mobile'
}

export function getScreenshotDimensions(layout?: Project['screenshotLayout']): {
  width: number
  height: number
} {
  if (resolveScreenshotLayout(layout) === 'mobile') {
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

export function getScreenshotSizes(
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext
): string {
  return SIZES[context][resolveScreenshotLayout(layout)]
}

export function getScreenshotCacheKey(
  src: string,
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext
): string {
  return `${src}::${resolveScreenshotLayout(layout)}::${context}`
}

export function getScreenshotImageProps(
  src: string,
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext,
  alt = ''
) {
  const dimensions = getScreenshotDimensions(layout)

  return getImageProps({
    src,
    alt,
    width: dimensions.width,
    height: dimensions.height,
    sizes: getScreenshotSizes(layout, context),
  })
}

/** @deprecated Use getScreenshotImageProps — kept for gradual migration */
export const projectScreenshotImageProps = {} as const
