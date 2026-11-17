import { useEffect, useRef } from 'react'

export function useTimelineProgress() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const updateProgress = () => {
      const container = timelineRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const triggerPoint = viewportHeight * 0.65
      const traveled = triggerPoint - rect.top
      const ratio = Math.max(0.08, Math.min(1, traveled / Math.max(rect.height, 1)))
      container.style.setProperty('--timeline-scale', ratio.toFixed(3))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return timelineRef
}
