export {
  DESKTOP_SCREENSHOT_HEIGHT,
  DESKTOP_SCREENSHOT_HEIGHT_2X,
  DESKTOP_SCREENSHOT_WIDTH,
  DESKTOP_SCREENSHOT_WIDTH_2X,
  MOBILE_SCREENSHOT_HEIGHT,
  MOBILE_SCREENSHOT_HEIGHT_2X,
  MOBILE_SCREENSHOT_WIDTH,
  MOBILE_SCREENSHOT_WIDTH_2X,
  getScreenshotCacheKey,
  getScreenshotDimensions,
  getScreenshotImageProps,
  getScreenshotSizes,
  isMobileScreenshotLayout,
  projectScreenshotImageProps,
  resolveScreenshotLayout,
  type ScreenshotContext,
  type ScreenshotLayout,
} from './assets'

export {
  isScreenshotPainted,
  isScreenshotReady,
  markScreenshotPainted,
  markScreenshotReady,
  preloadProjectGallery,
  preloadScreenshot,
  preloadScreenshotGallery,
  subscribeScreenshotPainted,
  subscribeScreenshotStatus,
  warmProjectGallery,
  warmScreenshot,
  warmScreenshotGallery,
} from './cache'

export { useScreenshotGallery } from './hooks/useScreenshotGallery'
export { useProjectScreenshotWarmup } from './hooks/useProjectScreenshotWarmup'
export { useScreenshotReady } from './hooks/useScreenshotReady'

export { ScreenshotImage } from './components/ScreenshotImage'
export { ScreenshotThumbnail } from './components/ScreenshotThumbnail'
export { ScreenshotGalleryStage } from './components/ScreenshotGalleryStage'
export { ScreenshotGalleryControls } from './components/ScreenshotGalleryControls'
export { ProjectScreenshotGallery } from './components/ProjectScreenshotGallery'

/** @deprecated Use warmProjectGallery */
export { warmProjectGallery as preloadProjectScreenshots } from './cache'

/** @deprecated Use isMobileScreenshotLayout */
export { isMobileScreenshotLayout as isMobileScreenshotProject } from './assets'
