'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

/**
 * Footer - Site-wide footer with contact & social links
 * Clean, minimal design with placeholders for easy updates
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  // TODO: Update these with real contact info
  const contact = {
    email: 'hello@yourcompany.com', // Update with real email
    linkedin: 'https://linkedin.com/in/yourprofile', // Update with real LinkedIn
    github: 'https://github.com/yourcompany', // Update with real GitHub
    twitter: '', // Optional: Add Twitter URL or leave empty to hide
  }

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'How We Build', href: '/how-we-build' },
    { label: 'Projects', href: '/projects' },
    { label: 'Pricing', href: '/pricing' },
  ]

  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary/50 backdrop-blur-sm">
      <div className="container-main py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* TODO: Add logo/photo here later */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                DevSite
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Enterprise software for complex problems.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Let&apos;s Talk
            </h3>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors duration-200 mb-4"
            >
              <Mail className="w-4 h-4" />
              <span>{contact.email}</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-bg-tertiary border border-border-subtle hover:border-primary hover:text-primary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-bg-tertiary border border-border-subtle hover:border-primary hover:text-primary transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Twitter (conditionally rendered) */}
              {contact.twitter && (
                <a
                  href={contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg-tertiary border border-border-subtle hover:border-primary hover:text-primary transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border-subtle"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
            <p>© {currentYear} DevSite. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with{' '}
              <span className="text-primary font-semibold">Next.js</span> &{' '}
              <span className="text-secondary font-semibold">TypeScript</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
