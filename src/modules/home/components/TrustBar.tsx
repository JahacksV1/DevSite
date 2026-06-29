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
    <section className="py-12 border-y border-border-subtle bg-bg-secondary/50">
      <div className="container-main">
        <p className="text-center text-xs font-semibold text-text-muted uppercase tracking-widest mb-6">
          Technologies We Use in Production
        </p>

        {/* Marquee — pure CSS, compositor thread only, zero JS */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex gap-3 whitespace-nowrap w-max">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-bg-tertiary border border-border-subtle text-text-secondary font-mono text-sm shrink-0"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
