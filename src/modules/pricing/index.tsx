/**
 * Pricing Page Module
 * Transparent pricing with honest timeline breakdowns
 */
import { PricingTiers } from './components/PricingTiers'
import { TimelineBreakdown } from './components/TimelineBreakdown'
import { FAQSection } from './components/FAQSection'

const PricingPage = () => {
  return (
    <main>
      <PricingTiers />
      <TimelineBreakdown />
      <FAQSection />
    </main>
  )
}

export default PricingPage
