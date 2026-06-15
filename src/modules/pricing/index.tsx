/**
 * Pricing Page Module
 * Transparent pricing with honest timeline breakdowns
 */
import { HeroSection } from './components/HeroSection'
import { PricingTiers } from './components/PricingTiers'
import { TimelineBreakdown } from './components/TimelineBreakdown'
import { FAQSection } from './components/FAQSection'
import { CTASection } from './components/CTASection'

const PricingPage = () => {
  return (
    <main>
      <HeroSection />
      <PricingTiers />
      <TimelineBreakdown />
      <FAQSection />
      <CTASection />
    </main>
  )
}

export default PricingPage
