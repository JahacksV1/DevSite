import { projects, type Project } from './projectsData'

export {
  getScreenshotDimensions,
  isMobileScreenshotLayout as isMobileScreenshotProject,
  warmProjectGallery as preloadProjectScreenshots,
  projectScreenshotImageProps,
} from '../screenshots'

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
