'use client'

import { motion } from 'framer-motion'
import { Zap, Rocket, Building2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BookCall } from '@/components/ui'

const tiers = [
  {
    icon: Zap,
    name: 'Starter Build',
    price: '$8k - $12k',
    timeline: '1-2 weeks typical',
    description: 'Perfect for MVPs, internal tools, or validating ideas fast.',
    features: [
      'Single-purpose application',
      'Standard auth (OAuth or magic link)',
      'Basic database setup',
      'Responsive UI',
      'Deployed live (Vercel + Supabase)',
      '7-day post-launch support',
    ],
    examples: 'Internal dashboards, beta MVPs, simple automation tools',
    color: 'primary' as const,
    popular: false,
  },
  {
    icon: Rocket,
    name: 'Production Build',
    price: '$15k - $30k',
    timeline: '2-4 weeks typical',
    description: 'Go to market with confidence. Built to scale from day one.',
    features: [
      'Everything in Starter, plus:',
      'Payment processing (Stripe)',
      'Advanced features (real-time, file uploads)',
      'Third-party integrations (APIs, webhooks)',
      'Security hardening',
      'CI/CD pipeline',
      '30-day post-launch support',
    ],
    examples: 'SaaS platforms, client portals, multi-user apps',
    color: 'secondary' as const,
    popular: true,
  },
  {
    icon: Building2,
    name: 'Enterprise Build',
    price: '$30k - $60k+',
    timeline: '4-8 weeks typical',
    description: 'Complex systems with compliance, scale, and security needs.',
    features: [
      'Everything in Production, plus:',
      'Multi-tenant architecture',
      'Compliance prep (SOC 2, HIPAA)',
      'SSO & role-based permissions',
      'Enterprise integrations',
      'Load testing & optimization',
      'Ongoing partnership available',
    ],
    examples: 'Legal software, healthcare platforms, enterprise SaaS',
    color: 'primary' as const,
    popular: false,
  },
]

/**
 * PricingTiers - Three clear pricing tiers
 */
export const PricingTiers = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Choose Your Build
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Pricing based on complexity and scope, not arbitrary hourly rates.
            All projects include clean code, full ownership, and real support.
          </p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-bg-primary text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={cn(
                  'h-full p-8 rounded-xl border',
                  'bg-bg-secondary transition-all duration-300',
                  tier.popular
                    ? 'border-primary shadow-[0_0_30px_rgba(0,255,198,0.2)] scale-105'
                    : 'border-border-subtle hover:border-primary/50'
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-6',
                    'bg-gradient-to-br',
                    tier.color === 'primary'
                      ? 'from-primary/20 to-primary/10'
                      : 'from-secondary/20 to-secondary/10'
                  )}
                >
                  <tier.icon
                    className={cn(
                      'w-6 h-6',
                      tier.color === 'primary'
                        ? 'text-primary'
                        : 'text-secondary'
                    )}
                  />
                </div>

                {/* Name & Price */}
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {tier.price}
                </div>
                <div className="text-sm text-text-muted mb-4">
                  {tier.timeline}
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Examples */}
                <div className="pt-6 border-t border-border-subtle mb-6">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                    Perfect For:
                  </div>
                  <div className="text-sm text-text-secondary">
                    {tier.examples}
                  </div>
                </div>

                {/* CTA */}
                <BookCall
                  variant={tier.popular ? 'primary' : 'secondary'}
                  className="w-full group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </BookCall>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom projects note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-4">
            Need something bigger or more complex? We do custom builds starting
            at $60k+.
          </p>
          <BookCall variant="ghost" className="group">
            Discuss Custom Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </BookCall>
        </motion.div>
      </div>
    </section>
  )
}
