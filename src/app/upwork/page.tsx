import type { Metadata } from 'next'
import { UpworkPortfolio } from '@/modules/upwork'

export const metadata: Metadata = {
  title: 'Portfolio — Full-Stack Build and Repair',
  description:
    'Real shipped products across SaaS, document automation, AI workflows, and codebase stabilization. Explore stack, process, and intake for milestone-based delivery.',
}

export default function UpworkPage() {
  return <UpworkPortfolio />
}
