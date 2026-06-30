import type { Project } from '../lib/projectsData'
import {
  getScreenshotCacheKey,
  getScreenshotImageProps,
  resolveScreenshotLayout,
  type ScreenshotContext,
} from './assets'

const paintedKeys = new Set<string>()
const warmInflightByKey = new Map<string, Promise<void>>()
const listenersByKey = new Map<string, Set<() => void>>()

function notify(key: string) {
  listenersByKey.get(key)?.forEach((listener) => listener())
}

export function isScreenshotPainted(
  src: string,
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext
): boolean {
  return paintedKeys.has(getScreenshotCacheKey(src, layout, context))
}

/** Only called when a mounted gallery/thumbnail <img> has decoded and is paint-ready. */
export function markScreenshotPainted(
  src: string,
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext
): void {
  const key = getScreenshotCacheKey(src, layout, context)
  if (paintedKeys.has(key)) return

  paintedKeys.add(key)
  notify(key)
}

export function subscribeScreenshotPainted(
  src: string,
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext,
  listener: () => void
): () => void {
  const key = getScreenshotCacheKey(src, layout, context)
  const listeners = listenersByKey.get(key) ?? new Set()
  listeners.add(listener)
  listenersByKey.set(key, listeners)

  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) {
      listenersByKey.delete(key)
    }
  }
}

async function decodeImageElement(img: HTMLImageElement): Promise<void> {
  if (typeof img.decode === 'function') {
    try {
      await img.decode()
      return
    } catch {
      // Fall through — onload already fired so bytes are present.
    }
  }
}

/**
 * Warms the HTTP cache with the same optimized URL the gallery uses.
 * Does NOT mark painted — only a mounted <Image> can do that.
 */
export function warmScreenshot(
  src: string,
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext
): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()

  const key = getScreenshotCacheKey(src, layout, context)
  const inflight = warmInflightByKey.get(key)
  if (inflight) return inflight

  const promise = new Promise<void>((resolve, reject) => {
    const { props } = getScreenshotImageProps(src, layout, context)
    const img = new window.Image()

    img.onload = () => {
      void decodeImageElement(img).finally(() => {
        warmInflightByKey.delete(key)
        resolve()
      })
    }

    img.onerror = () => {
      warmInflightByKey.delete(key)
      reject(new Error(`Failed to warm screenshot: ${src}`))
    }

    img.src = props.src
    if (props.srcSet) {
      img.srcset = props.srcSet
    }
  })

  warmInflightByKey.set(key, promise)
  return promise
}

export function warmScreenshotGallery(
  screenshots: string[],
  layout: Project['screenshotLayout'] | undefined,
  options?: { urgentCount?: number }
): void {
  if (typeof window === 'undefined' || screenshots.length === 0) return

  const resolvedLayout = resolveScreenshotLayout(layout)
  const lastIndex = screenshots.length - 1
  const urgentCount =
    options?.urgentCount ??
    Math.min(screenshots.length, screenshots.length >= 8 ? 5 : 3)

  const immediateIndices = new Set<number>([
    0,
    1,
    lastIndex,
    ...(lastIndex > 1 ? [lastIndex - 1] : []),
  ])

  for (let index = 0; index < urgentCount; index += 1) {
    immediateIndices.add(index)
  }

  screenshots.forEach((src, index) => {
    const run = () => void warmScreenshot(src, resolvedLayout, 'gallery')

    if (immediateIndices.has(index)) {
      run()
      return
    }

    setTimeout(run, (index + 1) * 20)
  })
}

export function warmProjectGallery(
  project: Pick<Project, 'screenshots' | 'screenshotLayout'>
): void {
  warmScreenshotGallery(project.screenshots, project.screenshotLayout)
}

/** @deprecated Use warmProjectGallery */
export const preloadProjectGallery = warmProjectGallery

/** @deprecated Use warmScreenshot */
export const preloadScreenshot = warmScreenshot

/** @deprecated Use warmScreenshotGallery */
export const preloadScreenshotGallery = warmScreenshotGallery

/** @deprecated Use isScreenshotPainted */
export function isScreenshotReady(
  src: string,
  layout: Project['screenshotLayout'] | undefined,
  context: ScreenshotContext
): boolean {
  return isScreenshotPainted(src, layout, context)
}

/** @deprecated Use markScreenshotPainted */
export const markScreenshotReady = markScreenshotPainted

/** @deprecated Use subscribeScreenshotPainted */
export const subscribeScreenshotStatus = subscribeScreenshotPainted
