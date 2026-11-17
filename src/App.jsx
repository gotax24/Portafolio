import { useEffect, useRef, useState } from 'react'
import {
  accentOptions,
  codeJourney,
  experienceTimeline,
  featuredProjects,
  profileData,
} from './data/portfolioData'

function ArrowUpRightIcon() {
  return (
    <svg
      className="icon-inline"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg
      className="icon-inline"
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.25"
        y="7.25"
        width="9.5"
        height="6.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.25 7.25V5.25C5.25 3.73122 6.48122 2.5 8 2.5C9.51878 2.5 10.75 3.73122 10.75 5.25V7.25"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function App() {
  const [activeAccent, setActiveAccent] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('gotax_accent')
      if (saved && accentOptions.some((item) => item.id === saved)) {
        return saved
      }
    }
    return accentOptions[0].id
  })

  const [projectFilter, setProjectFilter] = useState('all')
  const timelineRef = useRef(null)

  useEffect(() => {
    const selected =
      accentOptions.find((item) => item.id === activeAccent) || accentOptions[0]
    document.documentElement.style.setProperty('--accent', selected.value)
    document.documentElement.style.setProperty('--accent-muted', selected.muted)
    window.localStorage.setItem('gotax_accent', selected.id)
  }, [activeAccent])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [projectFilter])

  useEffect(() => {
    const handleScroll = () => {
      const container = timelineRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const start = viewportHeight * 0.65
      const traveled = start - rect.top
      const ratio = Math.max(0, Math.min(1, traveled / rect.height))
      container.style.setProperty('--timeline-progress', `${(ratio * 100).toFixed(1)}%`)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const filteredProjects = featuredProjects.filter((project) => {
    if (projectFilter === 'production') {
      return project.status.toLowerCase().includes('producción')
    }
    if (projectFilter === 'development') {
      return project.status.toLowerCase().includes('desarrollo')
    }
    if (projectFilter === 'private') {
      return project.visibility.toLowerCase().includes('privado')
    }
    if (projectFilter === 'public') {
      return project.visibility.toLowerCase().includes('público')
    }
    return true
  })

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand-mark" aria-label="Ir al inicio de gotax.dev">
            <span className="brand-domain">{profileData.domain}</span>
            <span className="brand-divider">/</span>
            <span className="brand-owner">Ernesto Bracho</span>
          </a>

          <nav className="site-nav" aria-label="Navegación principal">
            <a href="#proyectos">Proyectos</a>
            <a href="#trayecto-codigo">El Trayecto</a>
            <a href="#experiencia">Carrera Laboral</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="accent-switcher" role="group" aria-label="Selector de color de acento">
            <span className="accent-label">Acento</span>
            {accentOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`accent-swatch ${activeAccent === option.id ? 'is-active' : ''}`}
                style={{ '--swatch-color': option.value }}
                onClick={() => setActiveAccent(option.id)}
                title={`Color de acento: ${option.name}`}
                aria-label={`Cambiar acento a ${option.name}`}
                aria-pressed={activeAccent === option.id}
              />
            ))}
          </div>
        </div>
      </header>

      <main id="inicio">
        {/* HERO SECTION */}
        <section className="hero-section container">
          <div className="hero-grid">
            <div className="hero-portrait-column" data-reveal>
              <figure className="portrait-frame">
                <img
                  src={profileData.photo}
                  alt={`Fotografía de ${profileData.name}`}
                  width="280"
                  height="280"
                  className="portrait-image"
                />
                <figcaption className="portrait-caption">
                  <span>{profileData.location}</span>
                  <span className="mono-detail">URBE · Ing. en Computación</span>
                </figcaption>
              </figure>
            </div>

            <div className="hero-content-column" data-reveal>
              <h1 className="hero-title">{profileData.name}</h1>
              <p className="hero-role">{profileData.role}</p>

              <div className="hero-bio">
                <p>{profileData.intro}</p>
                <p>{profileData.story}</p>
              </div>

              <div className="hero-links" aria-label="Enlaces directos de contacto y perfiles">
                {profileData.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                    className="direct-link"
                  >
                    <span className="direct-link-label">{link.label}</span>
                    <span className="direct-link-handle">
                      {link.handle}
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS PRINCIPALES (PÚBLICOS Y PRIVADOS) */}
        <section id="proyectos" className="section-block container">
          <div className="section-header-split" data-reveal>
            <div className="section-heading-group">
              <h2 className="section-title">Proyectos y Sistemas</h2>
              <p className="section-subtitle">
                Sistemas institucionales privados, aplicaciones comerciales en producción y
                desarrollos actuales con el contexto de cada desafío técnico y cómo fue resuelto.
              </p>
            </div>

            <div className="filter-bar" role="tablist" aria-label="Filtrar proyectos">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'production', label: 'En producción' },
                { id: 'development', label: 'En desarrollo' },
                { id: 'public', label: 'Públicos' },
                { id: 'private', label: 'Privados' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={projectFilter === tab.id}
                  className={`filter-tab ${projectFilter === tab.id ? 'is-active' : ''}`}
                  onClick={() => setProjectFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-ledger">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-row" data-reveal>
                <aside className="project-meta">
                  <div className="project-period">{project.period}</div>
                  <div className="project-context">{project.context}</div>
                  <dl className="project-specs">
                    <div className="spec-line">
                      <dt>Acceso</dt>
                      <dd>{project.visibility}</dd>
                    </div>
                    <div className="spec-line">
                      <dt>Estado</dt>
                      <dd className="spec-status">{project.status}</dd>
                    </div>
                    <div className="spec-line">
                      <dt>Stack</dt>
                      <dd>{project.stack}</dd>
                    </div>
                  </dl>

                  <div className="project-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="action-link"
                      >
                        <span>Abrir aplicación</span>
                        <ArrowUpRightIcon />
                      </a>
                    )}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="action-link"
                      >
                        <span>Ver repositorio</span>
                        <ArrowUpRightIcon />
                      </a>
                    ) : (
                      <span className="private-notice">
                        <LockIcon />
                        <span>Código privado (no público)</span>
                      </span>
                    )}
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
            ))}
          </div>
        </section>

        {/* EL TRAYECTO EN CÓDIGO (DESDE NOTITAS HASTA HOY) */}
        <section id="trayecto-codigo" className="section-block container">
          <div className="section-header-split" data-reveal>
            <div className="section-heading-group">
              <h2 className="section-title">El Trayecto en Código</h2>
              <p className="section-subtitle">
                Cómo empecé desde cero en 2024 y cada repositorio público que construí para
                dominar la lógica, el DOM, el consumo de APIs y el desarrollo en servidor.
              </p>
            </div>
          </div>

          <div className="journey-ledger">
            {codeJourney.map((item, index) => (
              <article
                key={item.name}
                className={`journey-row ${index === 0 ? 'is-origin' : ''}`}
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
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="action-link"
                    >
                      <span>Ver demo</span>
                      <ArrowUpRightIcon />
                    </a>
                  )}
                  {item.repoUrl && (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="action-link"
                    >
                      <span>Repositorio</span>
                      <ArrowUpRightIcon />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LÍNEA DE TIEMPO: CARRERA LABORAL COMPLETA */}
        <section id="experiencia" className="section-block container">
          <div className="section-header-split" data-reveal>
            <div className="section-heading-group">
              <h2 className="section-title">Trayectoria Laboral</h2>
              <p className="section-subtitle">
                Mi recorrido profesional completo desde atención al cliente, inventario físico y
                ventas hasta mi rol actual como Analista de TI y Desarrollador Full Stack.
              </p>
            </div>
          </div>

          <div className="timeline-wrapper" ref={timelineRef}>
            <div className="timeline-track" aria-hidden="true">
              <div className="timeline-track-fill" />
            </div>

            <div className="timeline-list">
              {experienceTimeline.map((job, index) => (
                <article
                  key={job.id}
                  className={`timeline-item ${index === 0 ? 'is-current' : ''}`}
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

                    {job.highlights && job.highlights.length > 0 && (
                      <ul className="timeline-highlights">
                        {job.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}

                    <p className="timeline-skills">
                      <span className="timeline-skills-label">Aptitudes aplicadas: </span>
                      {job.skills.join(' · ')}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACTO */}
      <footer id="contacto" className="site-footer">
        <div className="container footer-inner" data-reveal>
          <div className="footer-main">
            <h2 className="footer-title">Contacto directo</h2>
            <p className="footer-copy">
              Disponible para conversar sobre desarrollo de sistemas web, modernización de
              aplicaciones o colaboraciones técnicas.
            </p>
          </div>

          <div className="footer-links">
            {profileData.links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                className="footer-link-row"
              >
                <span className="footer-link-name">{link.label}</span>
                <span className="footer-link-value">
                  {link.handle}
                  <ArrowUpRightIcon />
                </span>
              </a>
            ))}
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {profileData.name} — {profileData.domain}
            </span>
            <span className="mono-detail">Maracaibo, Venezuela</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
