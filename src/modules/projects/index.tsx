'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, categories, timelineFilters, type Category, type TimelineFilter } from './lib/projectsData'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import type { Project } from './lib/projectsData'

/**
 * ProjectsPage - Portfolio showcase with timeline and category filtering
 */
const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineFilter>('All Projects')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Filter projects by category and timeline
  let filteredProjects = projects

  // Category filter
  if (selectedCategory !== 'All') {
    filteredProjects = filteredProjects.filter((p) => p.category === selectedCategory)
  }

  // Timeline filter
  if (selectedTimeline !== 'All Projects') {
    filteredProjects = filteredProjects.filter((p) => {
      if (selectedTimeline === 'Production-Grade') return p.productionGrade
      if (selectedTimeline === 'With Live Demo') return p.demoStatus === 'Live — Public'
      if (selectedTimeline === 'Private Projects') return p.demoStatus === 'Private — Case Study Only'
      return true
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-text-primary mb-2">
                Built Fast.
              </span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Built Right.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Real projects, real timelines, real results. 
              See how we turn ideas into deployed apps in days.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            {/* Timeline Filters */}
            <div className="mb-6">
              <div className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3 text-center">
                Filter by Type
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {timelineFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedTimeline(filter)}
                    className={`
                      px-4 py-2 rounded-lg font-medium text-sm
                      transition-all duration-200
                      ${
                        selectedTimeline === filter
                          ? 'bg-primary text-bg-primary shadow-glow'
                          : 'bg-bg-tertiary text-text-secondary border border-border-subtle hover:border-primary hover:text-primary'
                      }
                    `}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filters */}
            <div>
              <div className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3 text-center">
                Filter by Type
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      px-4 py-2 rounded-lg font-medium text-sm
                      transition-all duration-200
                      ${
                        selectedCategory === category
                          ? 'bg-secondary text-bg-primary shadow-[0_0_20px_rgba(167,139,250,0.4)]'
                          : 'bg-bg-tertiary text-text-secondary border border-border-subtle hover:border-secondary hover:text-secondary'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-text-secondary">
                No projects in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default ProjectsPage
