import { TimelineItem } from '@/components/experience/TimelineItem'
import { experienceTimeline } from '@/data/experienceData'
import { useTimelineProgress } from '@/hooks/useTimelineProgress'

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
  const timelineRef = useTimelineProgress()

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
            Mi recorrido profesional completo en LinkedIn: desde atención al cliente, inventario
            físico e instalación técnica hasta Analista de TI y Desarrollador Full Stack.
          </p>
        </div>
      </div>

      <TimelineTrack ref={timelineRef}>
        <div className="timeline-list">
          {experienceTimeline.map((job) => (
            <TimelineItem key={job.id} job={job} />
          ))}
        </div>
      </TimelineTrack>
    </section>
  )
}
