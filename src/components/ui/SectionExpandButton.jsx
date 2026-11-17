import { ChevronDownIcon } from '@/components/ui/Icons'

export function SectionExpandButton({
  isExpanded,
  totalCount,
  initialCount = 3,
  expandText,
  collapseText = 'Mostrar menos',
  controlsId,
  onToggle,
}) {
  if (totalCount <= initialCount) {
    return null
  }

  const remaining = totalCount - initialCount

  return (
    <div className="section-expand-bar">
      <button
        type="button"
        className="section-expand-btn"
        aria-expanded={isExpanded}
        aria-controls={controlsId}
        onClick={onToggle}
      >
        <span>
          {isExpanded
            ? `${collapseText} (mostrando ${totalCount} de ${totalCount})`
            : `${expandText} (+${remaining} más · ${totalCount} en total)`}
        </span>
        <ChevronDownIcon isRotated={isExpanded} />
      </button>
    </div>
  )
}
