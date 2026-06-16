/**
 * How We Build Page Module
 * Explains multi-agent orchestration and the Day One process
 */
import { HeroSection } from './components/HeroSection'
import { MultiAgentSection } from './components/MultiAgentSection'
import { ProcessSection } from './components/ProcessSection'

const HowWeBuildPage = () => {
  return (
    <main>
      <HeroSection />
      <MultiAgentSection />
      <ProcessSection />
    </main>
  )
}

export default HowWeBuildPage
