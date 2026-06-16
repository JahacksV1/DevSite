import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectCaseStudy } from '@/modules/projects/components/ProjectCaseStudy'
import { getProjectBySlug } from '@/modules/projects/lib/projectUtils'
import { projects } from '@/modules/projects/lib/projectsData'

interface ProjectPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    return {}
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    notFound()
  }

  return <ProjectCaseStudy project={project} />
}
