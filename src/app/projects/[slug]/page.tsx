import { notFound } from 'next/navigation'
import { projects } from '@/modules/projects/lib/projectsData'
import { ProjectCaseStudy } from '@/modules/projects/components/ProjectCaseStudy'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()
  return <ProjectCaseStudy project={project} />
}
