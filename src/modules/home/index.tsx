import dynamic from 'next/dynamic'
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'

const ServicesSection = dynamic(() =>
  import('./components/ServicesSection').then((m) => ({ default: m.ServicesSection }))
)

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
