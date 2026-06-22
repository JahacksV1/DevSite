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
    default: 'Day One Devs - Full-Stack Apps That Ship',
    template: '%s | Day One Devs',
  },
  description:
    'We build and repair full-stack apps for founders and teams: MVPs, fragile codebase stabilization, and production deploys with Next.js, TypeScript, Supabase, Vercel, and Stripe.',
  keywords: [
    'full-stack development',
    'MVP development',
    'codebase stabilization',
    'Supabase developer',
    'Vercel deployment',
    'Stripe integration',
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
