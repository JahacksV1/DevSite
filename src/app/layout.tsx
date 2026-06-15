import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import { Navigation, Footer, NavigationProgress } from '@/components/layout'
import { CalProvider } from '@/components/CalProvider'
import { PageTransition } from '@/components/animations'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'DevSite - Enterprise Software Development',
    template: '%s | DevSite',
  },
  description:
    'Custom SaaS development, AI integration, and enterprise automation for $10k-50k projects. Full-stack architects for complex problems.',
  keywords: [
    'custom SaaS development',
    'enterprise web applications',
    'AI integration developers',
    'business process automation',
    'custom CRM development',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-primary font-sans antialiased flex flex-col">
        {/* Preload Cal.com script for instant modal */}
        <Script
          src="https://app.cal.com/embed/embed.js"
          strategy="beforeInteractive"
        />
        <CalProvider>
          <NavigationProgress />
          <Navigation />
          <main className="flex-1 pt-16 md:pt-20">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </CalProvider>
      </body>
    </html>
  )
}
