'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getCategoryBadgeClassName } from '@/modules/projects/lib/categoryBadge'
import { projects, type Project } from '@/modules/projects/lib/projectsData'
import {
  getScreenshotDimensions,
  isMobileScreenshotProject,
  projectScreenshotImageProps,
} from '@/modules/projects/lib/projectUtils'

const hasTech = (project: Project, keyword: string) =>
  project.techStack.some((item) => item.toLowerCase().includes(keyword))

const getProofTags = (project: Project) => {
  const tags: string[] = []

  if (project.productionGrade) tags.push('Production-Grade')
  if (hasTech(project, 'supabase')) tags.push('Supabase')
  if (hasTech(project, 'stripe')) tags.push('Stripe')
  if (hasTech(project, 'openai')) tags.push('OpenAI')
  if (hasTech(project, 'sentry')) tags.push('Sentry')
  if (
    project.description.toLowerCase().includes('docx') ||
    project.description.toLowerCase().includes('pdf')
  ) {
    tags.push('Document Automation')
  }

  return Array.from(new Set(tags)).slice(0, 5)
}

export const UpworkProjectGrid = () => {
  return (
    <section id="proof" className="py-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            Project Proof
          </h2>
          <p className="text-text-secondary">
            Real products we designed, built, and shipped. Each case study shows
            architecture decisions, stack choices, and delivery outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const heroShot = project.screenshots[0]
            const isMobile = isMobileScreenshotProject(project)
            const dimensions = getScreenshotDimensions(project.screenshotLayout)
            const proofTags = getProofTags(project)
            const whatThisProves =
              project.results ??
              project.uniqueFeatures[0] ??
              project.architectureHighlights[0]

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(
                    'group flex flex-col rounded-xl overflow-hidden',
                    'bg-bg-secondary border border-border-subtle',
                    'hover:border-primary/60 hover:shadow-[0_0_28px_rgba(0,255,198,0.08)]',
                    'transition-all duration-300'
                  )}
                >
                  <div
                    className={cn(
                      'relative h-52 overflow-hidden shrink-0',
                      isMobile
                        ? 'bg-zinc-950'
                        : 'bg-gradient-to-br from-bg-tertiary to-bg-elevated'
                    )}
                  >
                    {heroShot ? (
                      isMobile ? (
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                          <Image
                            src={heroShot}
                            alt={`${project.title} screenshot`}
                            width={dimensions.width}
                            height={dimensions.height}
                            {...projectScreenshotImageProps}
                            className="h-full w-auto max-h-full rounded-2xl object-contain shadow-lg ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="180px"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-3 rounded overflow-hidden shadow-sm group-hover:inset-2 transition-all duration-500">
                          <Image
                            src={heroShot}
                            alt={`${project.title} screenshot`}
                            fill
                            {...projectScreenshotImageProps}
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
                          <Lock className="w-5 h-5 text-text-muted" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className={cn(
                          'px-2.5 py-1 rounded-full text-xs font-semibold border',
                          getCategoryBadgeClassName(project.category)
                        )}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-muted mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mb-4 px-3 py-2 rounded-lg bg-bg-tertiary border border-border-subtle">
                      <p className="text-xs text-text-muted mb-0.5 font-semibold uppercase tracking-wide">
                        What this proves
                      </p>
                      <p className="text-xs text-text-secondary line-clamp-2">
                        {whatThisProves}
                      </p>
                    </div>

                    <div className="mb-4 px-3 py-2 rounded-lg bg-primary/5 border border-primary/15">
                      <p className="text-xs text-text-muted mb-0.5 font-semibold uppercase tracking-wide">
                        Good fit if you need
                      </p>
                      <p className="text-xs text-primary">
                        {project.relevantFor.slice(0, 3).join(' · ')}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proofTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary border border-primary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
