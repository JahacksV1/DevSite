import { UpworkPortfolio } from '@/modules/upwork'

export const metadata = {
  title: 'Portfolio — AI-Assisted Full-Stack Development',
  description:
    'Portfolio of shipped software projects: MVPs, AI workflow systems, SaaS platforms, document automation, and internal tools built by a two-person AI-assisted engineering team.',
}

export default function UpworkPage() {
  return <UpworkPortfolio />
}
