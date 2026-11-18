import { useState, useTransition } from 'react'
import { JourneyItem } from '@/components/journey/JourneyItem'
import { SectionExpandButton } from '@/components/ui/SectionExpandButton'
import { codeJourney } from '@/data/journeyData'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const INITIAL_VISIBLE = 3

export function CodeJourneySection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [, startTransition] = useTransition()

  const handleToggle = () => {
    startTransition(() => {
      setIsExpanded((prev) => !prev)
    })
  }

  const visibleJourney = isExpanded
    ? codeJourney
    : codeJourney.slice(0, INITIAL_VISIBLE)

  useScrollReveal(isExpanded ? 'journey-expanded' : 'journey-collapsed')

  return (
    <section
      id="trayecto-codigo"
      className="section-block container"
      aria-labelledby="journey-heading"
    >
      <div className="section-header-split" data-reveal>
        <div className="section-heading-group">
          <h2 id="journey-heading" className="section-title">
            Trayecto en Código
          </h2>
          <p className="section-subtitle">
            Ordenado desde mis prácticas más recientes en React y PHP hacia atrás, hasta llegar
            a mi primera aplicación web (notitas) en septiembre de 2024.
          </p>
        </div>
      </div>

      <div id="journey-ledger-list" className="journey-ledger" aria-live="polite">
        {visibleJourney.map((item) => (
          <JourneyItem key={item.name} item={item} />
        ))}
      </div>

      <SectionExpandButton
        isExpanded={isExpanded}
        totalCount={codeJourney.length}
        initialCount={INITIAL_VISIBLE}
        expandText="Ver trayecto completo hasta mi primera app"
        controlsId="journey-ledger-list"
        onToggle={handleToggle}
      />
    </section>
  )
}
