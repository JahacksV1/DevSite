'use client'

import { motion } from 'framer-motion'
import { Cpu, Palette, Database, Shield, CheckCircle, FileCode } from 'lucide-react'
import { cn } from '@/lib/utils'

const agents = [
  {
    icon: Cpu,
    name: 'Architecture Agent',
    description: 'Designs database schemas, API contracts, folder structure. Thinks like a senior engineer planning a system.',
    color: 'primary' as const,
  },
  {
    icon: Palette,
    name: 'Frontend Agent',
    description: 'Builds UI components, handles styling, ensures responsive design. Knows accessibility and modern patterns.',
    color: 'secondary' as const,
  },
  {
    icon: Database,
    name: 'Backend Agent',
    description: 'Writes business logic, API routes, integrations. Handles auth, permissions, data flow.',
    color: 'primary' as const,
  },
  {
    icon: Shield,
    name: 'Security Agent',
    description: 'Reviews code for vulnerabilities, adds input validation, implements rate limiting and error handling.',
    color: 'secondary' as const,
  },
  {
    icon: CheckCircle,
    name: 'Testing Agent',
    description: 'Writes unit and integration tests, catches edge cases, ensures quality across the stack.',
    color: 'primary' as const,
  },
  {
    icon: FileCode,
    name: 'Documentation Agent',
    description: 'Generates inline docs, API specs, README files. Makes handoff seamless.',
    color: 'secondary' as const,
  },
]

/**
 * MultiAgentSection - Showcase the specialized agents
 */
export const MultiAgentSection = () => {
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
            Meet the Multi-Agent Orchestra
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            While traditional developers write code line-by-line, we direct specialized 
            agents that work simultaneously. Each agent has one job. All guided by your 
            Context Passport.
          </p>
          
          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <div className="p-6 rounded-xl bg-bg-tertiary border border-border-subtle">
              <div className="text-text-muted text-sm font-semibold mb-3 uppercase tracking-wide">
                Traditional Process
              </div>
              <div className="text-text-secondary text-sm space-y-2 text-left">
                <div>Week 1-2: Requirements gathering</div>
                <div>Week 3-4: Design mockups</div>
                <div>Week 5-8: Development (sequential)</div>
                <div>Week 9-10: Testing & QA</div>
                <div className="pt-3 text-text-muted">
                  → 10-12 weeks total
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
              <div className="text-primary text-sm font-semibold mb-3 uppercase tracking-wide">
                Day One Process
              </div>
              <div className="text-text-secondary text-sm space-y-2 text-left">
                <div>Day 1: Discovery + Context Passport</div>
                <div>Day 2-3: Multi-agent build (parallel)</div>
                <div>Day 4-5: Human review + refinement</div>
                <div>Day 6-7: Deploy + handoff</div>
                <div className="pt-3 text-primary font-semibold">
                  → 7-14 days total
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full p-6 rounded-xl card-static">
                {/* Icon */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
                    'bg-gradient-to-br',
                    agent.color === 'primary'
                      ? 'from-primary/20 to-primary/10'
                      : 'from-secondary/20 to-secondary/10'
                  )}
                >
                  <agent.icon
                    className={cn(
                      'w-6 h-6',
                      agent.color === 'primary' ? 'text-primary' : 'text-secondary'
                    )}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {agent.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {agent.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Context Passport Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">
            All Guided by Your Context Passport
          </h3>
          <p className="text-text-secondary text-center max-w-3xl mx-auto mb-6">
            Before any agent writes code, we create your Context Passport — shared understanding 
            of your vision, users, and requirements. This keeps all agents aligned and ensures 
            everything feels cohesive.
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-primary mb-1">Business Model</div>
              <div className="text-text-muted">Who pays, for what, why</div>
            </div>
            <div>
              <div className="font-semibold text-primary mb-1">User Personas</div>
              <div className="text-text-muted">Real people, real needs</div>
            </div>
            <div>
              <div className="font-semibold text-primary mb-1">Feature Priorities</div>
              <div className="text-text-muted">What ships Day 1 vs. later</div>
            </div>
            <div>
              <div className="font-semibold text-primary mb-1">Brand Guidelines</div>
              <div className="text-text-muted">Tone, style, technical needs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

