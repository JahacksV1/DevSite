'use client'

import { motion } from 'framer-motion'

const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Supabase',
  'PostgreSQL',
  'OpenAI',
  'Stripe',
  'Tailwind CSS',
  'Vercel',
  'Framer Motion',
  'Zod',
  'ProseMirror',
  'Deepgram',
  'jsPDF',
  'Resend',
  'Playwright',
  'Sentry',
]


export const TrustBar = () => {
  return (
    <section className="py-12 border-y border-border-subtle bg-bg-secondary/50 backdrop-blur-sm">
      <div className="container-main">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold text-text-muted uppercase tracking-widest mb-6"
        >
          Technologies We Use in Production
        </motion.p>

        {/* Marquee */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              x: { duration: 28, repeat: Infinity, ease: 'linear' },
            }}
            className="flex gap-3 whitespace-nowrap"
          >
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-bg-tertiary border border-border-subtle text-text-secondary font-mono text-sm shrink-0"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
