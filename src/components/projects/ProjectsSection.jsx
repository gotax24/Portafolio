import { useCallback, useMemo, useState, useTransition } from 'react'
import { ProjectFilterBar } from '@/components/projects/ProjectFilterBar'
import { ProjectRow } from '@/components/projects/ProjectRow'
import { ProjectsFilterContext } from '@/components/projects/projectsFilterContextObject'
import { SectionExpandButton } from '@/components/ui/SectionExpandButton'
import { featuredProjects, projectFilterTabs } from '@/data/projectsData'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const INITIAL_VISIBLE = 3

function filterProjectsList(projects, filterId) {
  if (filterId === 'production') {
    return projects.filter((item) => item.statusCategory === 'production')
  }
  if (filterId === 'development') {
    return projects.filter((item) => item.statusCategory === 'development')
  }
  if (filterId === 'private') {
    return projects.filter((item) => item.isPrivate)
  }
  if (filterId === 'public') {
    return projects.filter((item) => !item.isPrivate)
  }
  return projects
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPending, startTransition] = useTransition()

  const selectFilter = useCallback((nextFilter) => {
    startTransition(() => {
      setActiveFilter(nextFilter)
      setIsExpanded(false)
    })
  }, [])

  const toggleExpand = useCallback(() => {
    startTransition(() => {
      setIsExpanded((prev) => !prev)
    })
  }, [])

  const filteredProjects = useMemo(
    () => filterProjectsList(featuredProjects, activeFilter),
    [activeFilter],
  )

  const visibleProjects = useMemo(
    () =>
      isExpanded
        ? filteredProjects
        : filteredProjects.slice(0, INITIAL_VISIBLE),
    [filteredProjects, isExpanded],
  )

  useScrollReveal(`${activeFilter}-${isExpanded ? 'all' : 'top3'}`)

  const contextValue = useMemo(
    () => ({
      state: {
        activeFilter,
        isPending,
        visibleProjects,
      },
      actions: {
        selectFilter,
      },
      meta: {
        tabs: projectFilterTabs,
      },
    }),
    [activeFilter, isPending, visibleProjects, selectFilter],
  )

  return (
    <ProjectsFilterContext value={contextValue}>
      <section
        id="proyectos"
        className="section-block container"
        aria-labelledby="projects-heading"
      >
        <div className="section-header-split" data-reveal>
          <div className="section-heading-group">
            <h2 id="projects-heading" className="section-title">
              Proyectos y Sistemas
            </h2>
            <p className="section-subtitle">
              Sistemas institucionales privados, aplicaciones comerciales en producción y
              desarrollos actuales con el contexto de cada desafío técnico y cómo fue resuelto.
            </p>
          </div>

          <ProjectFilterBar />
        </div>

        <div id="projects-ledger-list" className="projects-ledger" aria-live="polite">
          {visibleProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>

        <SectionExpandButton
          isExpanded={isExpanded}
          totalCount={filteredProjects.length}
          initialCount={INITIAL_VISIBLE}
          expandText="Ver todos los proyectos"
          controlsId="projects-ledger-list"
          onToggle={toggleExpand}
        />
      </section>
    </ProjectsFilterContext>
  )
}
