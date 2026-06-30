'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Layers,
  Lock,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Wrench,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export const UpworkHeader = () => {
  return (
    <section className="py-20 md:py-28 border-b border-border-subtle">
      <div className="container-main max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-tertiary border border-border-subtle mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-text-secondary font-medium">
              Full-Stack Build + Repair
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            We Build and Repair
            <br className="hidden sm:block" />{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Full-Stack Apps That Ship.
            </span>
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
            We help founders and teams start from zero, fix fragile MVPs, or
            jump in mid-project. We focus on clean architecture, stable
            deployments, and software that stays maintainable.
          </p>
          <p className="text-base text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            From idea to production, we scope practical milestones and ship
            working software you can review at every step.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            <Link
              href="#proof"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl w-full sm:w-auto',
                'bg-gradient-to-br from-primary to-primary/80',
                'text-bg-primary font-semibold',
                'hover:shadow-[0_0_20px_rgba(0,255,198,0.35)] transition-all duration-200'
              )}
            >
              View Project Proof
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              href="#intake"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl w-full sm:w-auto',
                'bg-bg-tertiary border border-border-subtle text-text-secondary font-semibold',
                'hover:border-primary hover:text-primary transition-all duration-200'
              )}
            >
              See Intake Process
            </Link>
          </div>

          <p className="mt-8 text-xs text-text-muted">
            AI helps us move faster. Human engineering review keeps the product
            clean, safe, and production-ready.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const entryPoints = [
  {
    title: 'Starting from an idea',
    desc: 'We scope the first milestone, map architecture, and ship a working version you can actually demo.',
  },
  {
    title: 'MVP is built but fragile',
    desc: 'We clean architecture, stabilize features, and make the codebase easier to extend without regressions.',
  },
  {
    title: 'AI-generated codebase needs structure',
    desc: 'We separate concerns, fix API/database patterns, and harden the app so it survives real usage.',
  },
  {
    title: 'Need specific support now',
    desc: 'Deployments, Supabase issues, Stripe/webhooks, feature debugging, and integration cleanup.',
  },
]

export const UpworkEntryPoints = () => {
  return (
    <section className="py-16 border-t border-border-subtle bg-bg-secondary/50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Where We Usually Start
          </h2>
          <p className="text-text-secondary text-sm">
            Pick the situation closest to yours. We scope the first milestone
            from there.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {entryPoints.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-bg-secondary border border-border-subtle"
            >
              <p className="text-sm font-semibold text-text-primary mb-1.5">
                {item.title}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const standards = [
  {
    icon: Layers,
    title: 'Clean Structure',
    desc: 'Pages, components, hooks, services, API routes, and database logic stay separated and readable.',
  },
  {
    icon: CheckCircle2,
    title: 'Verification Discipline',
    desc: 'TypeScript, linting, formatting, and build checks are part of delivery, not optional cleanup.',
  },
  {
    icon: ServerCog,
    title: 'Deployment Reliability',
    desc: 'GitHub workflow with Vercel preview and production deploy paths so changes are reviewable.',
  },
  {
    icon: ShieldCheck,
    title: 'Production Safety',
    desc: 'We check auth patterns, validation, error handling, and integration behavior before handoff.',
  },
]

export const UpworkEngineeringStandard = () => {
  return (
    <section className="py-16 border-t border-border-subtle">
      <div className="container-main max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Default Engineering Standard
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            The baseline we apply across projects, whether the scope starts
            small or grows into a larger system.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {standards.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-bg-secondary border border-border-subtle"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-text-primary mb-1.5">
                  {item.title}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const buildWorkflow = [
  'Scope first milestone and define what ships now vs later.',
  'Build frontend, backend, and database flow in parallel.',
  'Run review pass for architecture, edge cases, and quality.',
  'Deploy to Vercel and hand off repo, environment setup, and next steps.',
]

const repairWorkflow = [
  'Run app locally and reproduce issue or workflow gaps.',
  'Check build/deploy status and inspect file architecture.',
  'Trace business logic, Supabase patterns, and integration behavior.',
  'Apply targeted fixes, rerun checks, and document what changed.',
]

export const UpworkWorkflows = () => {
  return (
    <section className="py-16 border-t border-border-subtle bg-bg-secondary/50">
      <div className="container-main max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            How We Execute
          </h2>
          <p className="text-text-secondary text-sm">
            Same standards, different workflow depending on your starting point.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-bg-secondary border border-border-subtle">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-sm font-semibold text-text-primary">
                Build From Zero
              </p>
            </div>
            <ul className="space-y-2.5">
              {buildWorkflow.map((step) => (
                <li key={step} className="text-xs text-text-muted leading-relaxed">
                  - {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-bg-secondary border border-border-subtle">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-4 h-4 text-primary" />
              <p className="text-sm font-semibold text-text-primary">
                Stabilize Existing App
              </p>
            </div>
            <ul className="space-y-2.5">
              {repairWorkflow.map((step) => (
                <li key={step} className="text-xs text-text-muted leading-relaxed">
                  - {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const stackItems = [
  {
    title: 'Next.js + React + TypeScript',
    desc: 'Fast, structured full-stack delivery with typed contracts that reduce fragile changes.',
  },
  {
    title: 'Supabase + PostgreSQL',
    desc: 'Auth, database, storage, and permissions in one reliable backend layer.',
  },
  {
    title: 'GitHub + Vercel',
    desc: 'Preview and production deploy flow with clean handoff and release confidence.',
  },
  {
    title: 'Stripe + Webhooks',
    desc: 'Subscriptions or one-time payments with server-verified access control.',
  },
  {
    title: 'Sentry + Logging',
    desc: 'Visibility into runtime issues so post-launch bugs are diagnosable and fixable.',
  },
  {
    title: 'Playwright / Vitest',
    desc: 'Critical-path confidence where testing matters most for delivery quality.',
  },
]

export const UpworkStack = () => {
  return (
    <section className="py-16 border-t border-border-subtle">
      <div className="container-main max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Standard Delivery Stack
          </h2>
          <p className="text-text-secondary text-sm">
            The tools are consistent. The implementation adapts to your use
            case.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {stackItems.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-bg-secondary border border-border-subtle"
            >
              <p className="text-sm font-semibold text-text-primary mb-1.5">
                {item.title}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const qualityLadder = [
  {
    title: 'Launchable Core',
    desc: 'Auth, database, responsive UI, live deployment, and code ownership handoff.',
  },
  {
    title: 'Production Ready',
    desc: 'Payments, webhooks, integrations, validation, and resilient error handling.',
  },
  {
    title: 'Operational Hardening',
    desc: 'Observability, deployment checks, and test coverage for critical flows.',
  },
  {
    title: 'Enterprise Layers (Optional)',
    desc: 'SSO, advanced permissions, compliance prep, and deeper integration contracts.',
  },
]

export const UpworkQualityLadder = () => {
  return (
    <section className="py-16 border-t border-border-subtle bg-bg-secondary/50">
      <div className="container-main max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Quality Layers, Added As Needed
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            Start focused, then layer in operations and enterprise concerns as
            the product proves itself.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {qualityLadder.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-bg-secondary border border-border-subtle"
            >
              <p className="text-sm font-semibold text-text-primary mb-1.5">
                {item.title}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const intakeItems = [
  {
    icon: GitBranch,
    title: 'Share current state',
    desc: 'Send your repo, live URL, screenshots, or short project brief.',
  },
  {
    icon: Layers,
    title: 'Choose engagement mode',
    desc: 'New build, codebase repair, deployment support, or ongoing feature work.',
  },
  {
    icon: TestTube2,
    title: 'Scope first milestone',
    desc: 'We identify the safest high-impact step and define a clear deliverable.',
  },
  {
    icon: Lock,
    title: 'Execute and report clearly',
    desc: 'Small controlled changes, verification checks, and clear notes on what changed.',
  },
]

export const UpworkIntake = () => {
  return (
    <section id="intake" className="py-16 border-t border-border-subtle">
      <div className="container-main max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
            How Intake Works
          </h2>
          <p className="text-sm text-text-secondary text-center mb-8 max-w-2xl mx-auto">
            We keep the first step practical so momentum starts quickly.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {intakeItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl bg-bg-secondary border border-border-subtle"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="#proof"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                'bg-gradient-to-br from-primary to-primary/80',
                'text-bg-primary font-semibold',
                'hover:shadow-[0_0_20px_rgba(0,255,198,0.35)] transition-all duration-200'
              )}
            >
              View Project Proof
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-sm">
              <Link
                href="/projects"
                className="text-text-muted hover:text-primary transition-colors"
              >
                Need full case studies? Browse all project pages.
              </Link>
            </p>
            <p className="mt-4 text-xs text-text-muted">
              If you found this page through Upwork, keep all communication and
              project coordination on Upwork.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
