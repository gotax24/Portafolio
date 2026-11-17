import { useState, useTransition } from 'react'
import { CertificationItem } from '@/components/certifications/CertificationItem'
import { SectionExpandButton } from '@/components/ui/SectionExpandButton'
import { certificationsList } from '@/data/certificationsData'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const INITIAL_VISIBLE = 3

export function CertificationsSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [, startTransition] = useTransition()

  const handleToggle = () => {
    startTransition(() => {
      setIsExpanded((prev) => !prev)
    })
  }

  const visibleCertifications = isExpanded
    ? certificationsList
    : certificationsList.slice(0, INITIAL_VISIBLE)

  useScrollReveal(isExpanded ? 'certs-expanded' : 'certs-collapsed')

  return (
    <section
      id="certificaciones"
      className="section-block container"
      aria-labelledby="certifications-heading"
    >
      <div className="section-header-split" data-reveal>
        <div className="section-heading-group">
          <h2 id="certifications-heading" className="section-title">
            Formación y Certificaciones
          </h2>
          <p className="section-subtitle">
            Cursos técnicos y rutas de especialización en desarrollo web, control de estado,
            TypeScript, manipulación del DOM, Git y fundamentos de programación.
          </p>
        </div>
      </div>

      <div id="certifications-list" className="cert-ledger" aria-live="polite">
        {visibleCertifications.map((item) => (
          <CertificationItem key={item.id} item={item} />
        ))}
      </div>

      <SectionExpandButton
        isExpanded={isExpanded}
        totalCount={certificationsList.length}
        initialCount={INITIAL_VISIBLE}
        expandText="Ver todas las certificaciones"
        controlsId="certifications-list"
        onToggle={handleToggle}
      />
    </section>
  )
}
