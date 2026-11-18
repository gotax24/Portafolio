import { ArrowUpRightIcon, LockIcon } from '@/components/ui/Icons'

function PublicRepoAction({ url, projectName }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="action-link"
      aria-label={`Ver repositorio de código de ${projectName}`}
    >
      <span>Ver repositorio</span>
      <ArrowUpRightIcon />
    </a>
  )
}

function PrivateRepoNotice() {
  return (
    <span className="private-notice">
      <LockIcon />
      <span>Código privado (no público)</span>
    </span>
  )
}

export function ProjectRow({ project }) {
  return (
    <article className="project-row" data-reveal>
      <aside className="project-meta" aria-label={`Ficha técnica de ${project.name}`}>
        <div className="project-meta-header">
          <div className="project-period">{project.period}</div>
          <div className="project-context">{project.context}</div>
        </div>

        <div className="project-meta-footer">
          <dl className="project-specs">
            <div className="spec-line">
              <dt>Acceso</dt>
              <dd>{project.visibility}</dd>
            </div>
            <div className="spec-line">
              <dt>Estado</dt>
              <dd className="spec-status">{project.statusLabel}</dd>
            </div>
            <div className="spec-line">
              <dt>Stack</dt>
              <dd>{project.stack}</dd>
            </div>
          </dl>

          <div className="project-actions">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="action-link"
                aria-label={`Abrir sitio en vivo de ${project.name}`}
              >
                <span>Abrir aplicación</span>
                <ArrowUpRightIcon />
              </a>
            ) : null}

            {project.repoUrl ? (
              <PublicRepoAction url={project.repoUrl} projectName={project.name} />
            ) : (
              <PrivateRepoNotice />
            )}
          </div>
        </div>
      </aside>

      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="challenge-solution-grid">
          <div className="narrative-column">
            <h4 className="narrative-heading">El desafío</h4>
            <p>{project.challenge}</p>
          </div>
          <div className="narrative-column">
            <h4 className="narrative-heading">Cómo lo hice</h4>
            <p>{project.solution}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
