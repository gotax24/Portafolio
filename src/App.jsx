import { ExperienceSection } from '@/components/experience/ExperienceSection'
import { HeroSection } from '@/components/hero/HeroSection'
import { CodeJourneySection } from '@/components/journey/CodeJourneySection'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { SkipLink } from '@/components/ui/SkipLink'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function App() {
  useScrollReveal()

  return (
    <div className="page-shell">
      <SkipLink />
      <Header />
      <main id="contenido-principal">
        <div id="inicio">
          <HeroSection />
        </div>
        <ProjectsSection />
        <CodeJourneySection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
