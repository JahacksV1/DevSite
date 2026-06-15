'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Lock, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const featured = [
  {
    id: 'social-q',
    title: 'Social Q',
    subtitle: 'AI Social Communication Coach',
    category: 'Consumer AI',
    description:
      'Reads conversation context, voice, or screenshots. Routes through a Situation Intelligence layer to give advice that actually matches the moment — not generic AI output.',
    tech: ['Next.js 16', 'OpenAI', 'Deepgram', 'Supabase'],
    highlight: 'Voice input + screenshot analysis + dynamic intent theming',
    status: 'Live',
    demoUrl: 'https://socialq.chat',
    screenshot: '/projects/social-q-composer.png',
  },
  {
    id: 'bond-generator',
    title: 'Bond Generator',
    subtitle: 'Municipal Bond Certificate SaaS',
    category: 'Fintech',
    description:
      'Generates official bond certificates from DOCX templates + maturity schedules. Full Stripe billing, tag-based template system, and audit-ready output.',
    tech: ['Next.js 15', 'Supabase', 'Stripe', 'xlsx'],
    highlight: 'Stripe subscription + DOCX generation + CUSIP data parsing',
    status: 'Live',
    demoUrl: 'https://bond-generator.vercel.app',
    screenshot: '/projects/bond-generator-01-upload.png',
  },
  {
    id: 'home-service-demos',
    title: 'Home Service Demos',
    subtitle: 'Modular Local Business Website System',
    category: 'Local Business',
    description:
      'Three production-ready industry sites — plumbing, landscaping, tree service — from a single reusable component base. Built to prove rapid local business site delivery.',
    tech: ['Next.js 16', 'React 19', 'Tailwind', 'TypeScript'],
    highlight: 'Three distinct industry verticals, one codebase',
    status: 'Live',
    demoUrl: 'https://home-service-demos.vercel.app',
    screenshot: '/projects/home-service-01-hub.png',
  },
]

const statusStyles = {
  Live: 'bg-primary/10 border-primary/40 text-primary',
  'Auth-Gated': 'bg-text-muted/10 border-text-muted/30 text-text-muted',
}

export const FeaturedProjects = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Real Projects, Real Code
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Every project here is deployed and in use. Click through to see the
            live product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                'group rounded-xl overflow-hidden flex flex-col',
                'bg-bg-secondary border border-border-subtle',
                'hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,198,0.12)]',
                'transition-all duration-300'
              )}
            >
              {/* Screenshot */}
              <div className="relative h-48 bg-gradient-to-br from-bg-tertiary to-bg-elevated overflow-hidden shrink-0">
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-10 h-10 rounded-xl bg-bg-tertiary border border-border-subtle flex items-center justify-center">
                      {project.status === 'Auth-Gated' ? (
                        <Lock className="w-5 h-5 text-text-muted" />
                      ) : (
                        <Zap className="w-5 h-5 text-text-muted" />
                      )}
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span
                    className={cn(
                      'px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm',
                      statusStyles[
                        project.status as keyof typeof statusStyles
                      ] ?? statusStyles['Live']
                    )}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-bg-primary/80 backdrop-blur-sm border border-border-subtle text-text-secondary">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-text-muted mt-0.5 mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlight pill */}
                <div className="mb-4 px-3 py-2 rounded-lg bg-primary/5 border border-primary/15">
                  <p className="text-xs text-primary font-medium">
                    {project.highlight}
                  </p>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg',
                      'bg-primary/10 border border-primary/30 text-primary font-semibold text-sm',
                      'hover:bg-primary/20 transition-all duration-200'
                    )}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="group">
              See All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
