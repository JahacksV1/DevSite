'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../lib/projectsData'
import { ProjectDetailSections } from './ProjectDetailSections'
import { ProjectScreenshotGallery } from './ProjectScreenshotGallery'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-bg-primary/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'relative w-full max-w-5xl max-h-[92vh] overflow-y-auto',
            'bg-bg-secondary border border-border-default rounded-2xl shadow-2xl'
          )}
        >
          <ProjectScreenshotGallery
            title={project.title}
            screenshots={project.screenshots}
            category={project.category}
            screenshotLayout={project.screenshotLayout}
            headerActions={
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className={cn(
                  'shrink-0 p-2 rounded-lg',
                  'bg-bg-tertiary border border-border-subtle',
                  'hover:border-primary hover:text-primary transition-all duration-200'
                )}
              >
                <X className="w-5 h-5" />
              </button>
            }
          />

          <div className="p-6 md:p-8 border-t border-border-subtle">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                {project.title}
              </h2>
              <p className="text-text-muted text-sm mt-1.5">
                {project.subtitle}
              </p>
              <p className="text-text-secondary leading-relaxed mt-3 text-sm max-w-3xl">
                {project.description}
              </p>
            </div>

            <ProjectDetailSections project={project} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
