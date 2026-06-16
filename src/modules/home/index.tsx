/**
 * HomePage Module
 * Main landing page with hero, services, demos, projects, and CTA
 */
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { ServicesSection } from './components/ServicesSection'

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
    </main>
  )
}

export default HomePage
