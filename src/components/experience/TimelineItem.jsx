import { clsx } from 'clsx'

export function TimelineItem({ job }) {
  return (
    <article
      className={clsx('timeline-item', job.isCurrent && 'is-current')}
      data-reveal
    >
      <div className="timeline-marker" aria-hidden="true" />

      <div className="timeline-meta">
        <time className="timeline-period">{job.period}</time>
        <p className="timeline-company">{job.company}</p>
        <p className="timeline-location">
          {job.location} · {job.employmentType}
        </p>
      </div>

      <div className="timeline-content">
        <h3 className="timeline-role">{job.role}</h3>
        <p className="timeline-summary">{job.summary}</p>

        {job.highlights.length > 0 ? (
          <ul className="timeline-highlights">
            {job.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}

        <p className="timeline-skills">
          <span className="timeline-skills-label">Aptitudes aplicadas: </span>
          {job.skills.join(' · ')}
        </p>
      </div>
    </article>
  )
}
