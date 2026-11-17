import { clsx } from 'clsx'
import { useProjectsFilter } from '@/components/projects/projectsFilterContextObject'

export function ProjectFilterBar() {
  const {
    state: { activeFilter, isPending },
    actions: { selectFilter },
    meta: { tabs },
  } = useProjectsFilter()

  return (
    <div
      className={clsx('filter-bar', isPending && 'is-transitioning')}
      role="tablist"
      aria-label="Filtrar proyectos por estado o visibilidad"
    >
      {tabs.map((tab) => {
        const isSelected = activeFilter === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={clsx('filter-tab', isSelected && 'is-active')}
            onClick={() => selectFilter(tab.id)}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
