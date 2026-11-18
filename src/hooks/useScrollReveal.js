import { useEffect } from 'react'

export function useScrollReveal(dependencyKey = 'default') {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')
    if (elements.length === 0) return undefined

    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      elements.forEach((el) => {
        el.dataset.revealGroup = String(dependencyKey)
        el.classList.add('is-visible')
      })
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.revealGroup = String(dependencyKey)
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.02,
        rootMargin: '0px 0px -12px 0px',
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [dependencyKey])
}
