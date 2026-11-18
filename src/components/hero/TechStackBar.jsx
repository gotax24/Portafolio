import { useCallback, useRef } from 'react'
import { TechStackIcon } from '@/components/ui/TechIcons'
import { techStackList } from '@/data/techStackData'

export function TechStackBar() {
  const trackRef = useRef(null)

  const handleSpeedChange = useCallback((rate) => {
    const track = trackRef.current
    if (!track || typeof track.getAnimations !== 'function') return

    for (const animation of track.getAnimations()) {
      if (typeof animation.updatePlaybackRate === 'function') {
        animation.updatePlaybackRate(rate)
      } else {
        animation.playbackRate = rate
      }
    }
  }, [])

  return (
    <section
      className="tech-marquee-section container"
      aria-label="Tecnologías y herramientas principales"
    >
      <div
        className="tech-marquee-viewport"
        data-reveal
        onPointerEnter={() => handleSpeedChange(0.35)}
        onPointerLeave={() => handleSpeedChange(1)}
      >
        <div ref={trackRef} className="tech-marquee-track">
          <ul className="tech-marquee-group">
            {techStackList.map((tech) => (
              <li key={tech.id} className="tech-marquee-item">
                <span className="tech-marquee-icon">
                  <TechStackIcon id={tech.id} />
                </span>
                <span className="tech-marquee-name">{tech.name}</span>
              </li>
            ))}
          </ul>

          <ul className="tech-marquee-group" aria-hidden="true">
            {techStackList.map((tech) => (
              <li key={`${tech.id}-duplicate`} className="tech-marquee-item">
                <span className="tech-marquee-icon">
                  <TechStackIcon id={tech.id} />
                </span>
                <span className="tech-marquee-name">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
