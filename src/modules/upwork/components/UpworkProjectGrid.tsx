'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { demoStatusBadges } from '@/modules/projects/lib/demoStatus'
import { projects } from '@/modules/projects/lib/projectsData'

export const UpworkProjectGrid = () => {
  return (
    <section className="py-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            Our Work
          </h2>
          <p className="text-text-secondary">
            Real products we have designed, architected, and shipped. Click any
            project to see the full case study.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const status = demoStatusBadges[project.demoStatus]
            const heroShot = project.screenshots[0]

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
                  <div className="relative h-52 bg-gradient-to-br from-bg-tertiary to-bg-elevated overflow-hidden shrink-0">
                    {heroShot ? (
                      <Image
                        src={heroShot}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
                          <Lock className="w-5 h-5 text-text-muted" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span
                        className={cn(
                          'px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm',
                          status.className
                        )}
                      >
                        {status.label}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-bg-primary/80 backdrop-blur-sm border border-border-subtle text-text-secondary">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-muted mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mb-4 px-3 py-2 rounded-lg bg-primary/5 border border-primary/15">
                      <p className="text-xs text-text-muted mb-0.5 font-semibold uppercase tracking-wide">
                        Relevant for
                      </p>
                      <p className="text-xs text-primary">
                        {project.relevantFor.slice(0, 3).join(' · ')}
                      </p>
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
