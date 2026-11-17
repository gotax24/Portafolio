import { clsx } from 'clsx'
import { ArrowUpRightIcon } from '@/components/ui/Icons'

export function JourneyItem({ item }) {
  return (
    <article
      className={clsx('journey-row', item.isOrigin && 'is-origin')}
      data-reveal
    >
      <div className="journey-date-col">
        <span className="journey-date">{item.date}</span>
        <span className="journey-stage">{item.stage}</span>
      </div>

      <div className="journey-main-col">
        <h3 className="journey-name">{item.name}</h3>
        <p className="journey-description">{item.description}</p>
        <p className="journey-stack">{item.stack}</p>
      </div>

      <div className="journey-links-col">
        {item.liveUrl ? (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="action-link"
            aria-label={`Ver demostración de ${item.name}`}
          >
            <span>Ver demo</span>
            <ArrowUpRightIcon />
          </a>
        ) : null}

        {item.repoUrl ? (
          <a
            href={item.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="action-link"
            aria-label={`Ver código en GitHub de ${item.name}`}
          >
            <span>Repositorio</span>
            <ArrowUpRightIcon />
          </a>
        ) : null}
      </div>
    </article>
  )
}
