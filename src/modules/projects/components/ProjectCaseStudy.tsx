'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Layers, Lock, Sparkles } from 'lucide-react'
import { demoStatusDetails } from '../lib/demoStatus'
import type { Project } from '../lib/projectsData'
import {
  ProjectCaseStudyFooter,
  ProjectCaseStudySidebar,
} from './ProjectCaseStudySections'
import { ProjectScreenshotGallery } from './ProjectScreenshotGallery'

interface Props {
  project: Project
}

export const ProjectCaseStudy = ({ project }: Props) => {
  const status = demoStatusDetails[project.demoStatus]

  return (
    <div className="min-h-screen">
      <div className="container-main pt-8 pb-0">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>
      </div>

      <section className="mt-6">
        <div className="container-main">
          <ProjectScreenshotGallery
            title={project.title}
            screenshots={project.screenshots}
            status={status}
            category={project.category}
            screenshotLayout={project.screenshotLayout}
            maxHeightClassName="max-h-[520px] md:max-h-[580px]"
            roundedClassName="rounded-2xl"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container-main max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
              {project.title}
            </h1>
            <p className="text-xl text-text-muted mb-6">{project.subtitle}</p>
            <p className="text-text-secondary leading-relaxed text-lg max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {project.demoStatus === 'Private — Case Study Only' && (
            <div className="mb-10 flex gap-3 p-5 rounded-xl bg-bg-tertiary border border-border-subtle">
              <Lock className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">
                  Private Project
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {status.note}
                </p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
              <div>
                <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
                  The Challenge
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
                  What We Built
                </h2>
                <ul className="space-y-3">
                  {project.solution.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="text-primary mt-1 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.uniqueFeatures.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    What Makes It Different
                  </h2>
                  <ul className="space-y-3">
                    {project.uniqueFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <span className="text-secondary mt-1 shrink-0">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architectureHighlights.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-secondary" />
                    Architecture Highlights
                  </h2>
                  <ul className="space-y-3">
                    {project.architectureHighlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <span className="text-secondary/60 mt-1 shrink-0">
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                <h2 className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-3">
                  Results
                </h2>
                <p className="text-text-primary font-semibold leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>

            <ProjectCaseStudySidebar project={project} />
          </div>

          <div className="mt-16">
            <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6">
              Tech Stack — How Each Piece Is Used
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.techDetails.map((tech) => (
                <div
                  key={tech.name}
                  className="flex gap-4 p-4 rounded-xl bg-bg-secondary border border-border-subtle"
                >
                  <span className="text-xs font-mono font-bold text-primary shrink-0 pt-0.5 w-[110px]">
                    {tech.name}
                  </span>
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {tech.purpose}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ProjectCaseStudyFooter />
        </div>
      </section>
    </div>
  )
}
