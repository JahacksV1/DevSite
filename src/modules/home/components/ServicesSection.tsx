'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  FileText,
  LayoutDashboard,
  Layers,
  Users,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Brain,
    title: 'AI Workflow Systems',
    description:
      'GPT-integrated products with structured output routing, multi-step pipelines, context management, and user-scoped AI features. We build AI into the product architecture, not as an afterthought.',
    examples: [
      'Document Q&A',
      'Situation intelligence routing',
      'AI quiz generation',
      'Structured extraction',
    ],
    color: 'primary',
  },
  {
    icon: LayoutDashboard,
    title: 'MVPs & SaaS Platforms',
    description:
      'Full-stack SaaS products with auth, database, billing, and a working UI. Designed for founders who need a functional product to show investors or early customers, not a mockup.',
    examples: [
      'Multi-tenant SaaS',
      'Stripe billing',
      'Supabase backend',
      'Dashboard + analytics',
    ],
    color: 'secondary',
  },
  {
    icon: FileText,
    title: 'Document Automation',
    description:
      "Systems that process, transform, generate, or review documents at scale. We've built DOCX parsers, AI extraction workflows, certificate generators, and legal document tools.",
    examples: [
      'DOCX parsing + replacement',
      'PDF generation',
      'Template-based assembly',
      'Audit trail logging',
    ],
    color: 'primary',
  },
  {
    icon: Layers,
    title: 'Internal Tools & Dashboards',
    description:
      'Operations tools, admin panels, and data dashboards that your team actually uses. Built with real data models, role-based access, and the workflows that match how your business runs.',
    examples: [
      'Role-based access control',
      'Data tables + filters',
      'Approval workflows',
      'Real-time updates',
    ],
    color: 'secondary',
  },
  {
    icon: Users,
    title: 'Social & Consumer Apps',
    description:
      'User-facing applications with auth, profiles, feeds, messaging, onboarding flows, and mobile-responsive design. We understand product UX, not just engineering.',
    examples: [
      'Onboarding flows',
      'User profiles + history',
      'Voice and image input',
      'Mobile-first UX',
    ],
    color: 'primary',
  },
  {
    icon: Zap,
    title: 'Business & Local Sites',
    description:
      'Marketing sites, lead generation pages, and local business websites built to convert. Fast, SEO-ready, with real lead capture and mobile-first design.',
    examples: [
      'Lead forms + validation',
      'Multi-industry templates',
      'SEO structured data',
      'Mobile CTAs',
    ],
    color: 'secondary',
  },
]

export const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What We Build
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We work across these six categories. Each one is backed by shipped
            code you can inspect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={cn(
                  'group p-6 rounded-xl',
                  'bg-bg-secondary border border-border-subtle',
                  'hover:border-primary/50 hover:shadow-[0_0_24px_rgba(0,255,198,0.08)]',
                  'transition-all duration-300'
                )}
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-lg flex items-center justify-center mb-4',
                    'bg-gradient-to-br transition-all duration-300',
                    service.color === 'primary'
                      ? 'from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/15'
                      : 'from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/15'
                  )}
                >
                  <Icon
                    className={cn(
                      'w-5 h-5',
                      service.color === 'primary'
                        ? 'text-primary'
                        : 'text-secondary'
                    )}
                  />
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.examples.map((ex) => (
                    <span
                      key={ex}
                      className="px-2 py-0.5 text-xs rounded bg-bg-tertiary border border-border-subtle text-text-muted"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
