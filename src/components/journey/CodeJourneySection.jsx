import { JourneyItem } from '@/components/journey/JourneyItem'
import { codeJourney } from '@/data/journeyData'

export function CodeJourneySection() {
  return (
    <section
      id="trayecto-codigo"
      className="section-block container"
      aria-labelledby="journey-heading"
    >
      <div className="section-header-split" data-reveal>
        <div className="section-heading-group">
          <h2 id="journey-heading" className="section-title">
            El Trayecto en Código
          </h2>
          <p className="section-subtitle">
            Cómo empecé desde mi primera aplicación sencilla (notitas) en septiembre de 2024 y
            cada repositorio público que construí paso a paso hasta llegar a arquitecturas
            completas.
          </p>
        </div>
      </div>

      <div className="journey-ledger">
        {codeJourney.map((item) => (
          <JourneyItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}
