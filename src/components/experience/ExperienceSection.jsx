import { useState, useTransition } from 'react'
import { TimelineItem } from '@/components/experience/TimelineItem'
import { SectionExpandButton } from '@/components/ui/SectionExpandButton'
import { experienceTimeline } from '@/data/experienceData'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTimelineProgress } from '@/hooks/useTimelineProgress'

const INITIAL_VISIBLE = 3

function TimelineTrack({ ref, children }) {
  return (
    <div className="timeline-wrapper" ref={ref}>
      <div className="timeline-track" aria-hidden="true">
        <div className="timeline-track-fill" />
      </div>
      {children}
    </div>
  )
}

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [, startTransition] = useTransition()
  const timelineRef = useTimelineProgress()

  const handleToggle = () => {
    startTransition(() => {
      setIsExpanded((prev) => !prev)
    })
  }

  const visibleExperience = isExpanded
    ? experienceTimeline
    : experienceTimeline.slice(0, INITIAL_VISIBLE)

  useScrollReveal(isExpanded ? 'exp-expanded' : 'exp-collapsed')

  return (
    <section
      id="experiencia"
      className="section-block container"
      aria-labelledby="experience-heading"
    >
      <div className="section-header-split" data-reveal>
        <div className="section-heading-group">
          <h2 id="experience-heading" className="section-title">
            Trayectoria Laboral
          </h2>
          <p className="section-subtitle">
            Iniciando por mi cargo actual como Analista de TI y Desarrollador Full Stack en
            CEVAZ hasta mis inicios en atención al cliente, inventario físico e instalación
            técnica.
          </p>
        </div>
      </div>

      <TimelineTrack ref={timelineRef}>
        <div id="experience-timeline-list" className="timeline-list" aria-live="polite">
          {visibleExperience.map((job) => (
            <TimelineItem key={job.id} job={job} />
          ))}
        </div>
      </TimelineTrack>

      <SectionExpandButton
        isExpanded={isExpanded}
        totalCount={experienceTimeline.length}
        initialCount={INITIAL_VISIBLE}
        expandText="Ver trayectoria laboral completa"
        controlsId="experience-timeline-list"
        onToggle={handleToggle}
      />
    </section>
  )
}
