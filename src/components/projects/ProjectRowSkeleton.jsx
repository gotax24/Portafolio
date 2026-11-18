export function ProjectRowSkeleton() {
  return (
    <div className="project-row project-row-skeleton" aria-hidden="true">
      <div className="project-meta">
        <div className="project-meta-header">
          <span className="skeleton-block skel-line skel-w-45 skel-h-12" />
          <span className="skeleton-block skel-line skel-w-75 skel-h-14" />
        </div>

        <div className="project-meta-footer">
          <div className="project-specs">
            <span className="skeleton-block skel-line skel-w-85 skel-h-12" />
            <span className="skeleton-block skel-line skel-w-65 skel-h-12" />
            <span className="skeleton-block skel-line skel-w-90 skel-h-12" />
          </div>
          <div className="project-actions">
            <span className="skeleton-block skel-line skel-w-55 skel-h-16" />
          </div>
        </div>
      </div>

      <div className="project-body">
        <span className="skeleton-block skel-line skel-w-60 skel-h-24" />
        <span className="skeleton-block skel-line skel-w-90 skel-h-14 skel-mt-12" />
        <span className="skeleton-block skel-line skel-w-70 skel-h-14 skel-mt-6" />

        <div className="challenge-solution-grid">
          <div className="narrative-column">
            <span className="skeleton-block skel-line skel-w-35 skel-h-12 skel-mb-10" />
            <span className="skeleton-block skel-line skel-w-100 skel-h-12 skel-mb-6" />
            <span className="skeleton-block skel-line skel-w-95 skel-h-12 skel-mb-6" />
            <span className="skeleton-block skel-line skel-w-80 skel-h-12" />
          </div>
          <div className="narrative-column">
            <span className="skeleton-block skel-line skel-w-35 skel-h-12 skel-mb-10" />
            <span className="skeleton-block skel-line skel-w-100 skel-h-12 skel-mb-6" />
            <span className="skeleton-block skel-line skel-w-90 skel-h-12 skel-mb-6" />
            <span className="skeleton-block skel-line skel-w-75 skel-h-12" />
          </div>
        </div>
      </div>
    </div>
  )
}
