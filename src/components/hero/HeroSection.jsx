import { ArrowUpRightIcon, SocialPlatformIcon } from '@/components/ui/Icons'
import { profileData } from '@/data/profileData'

export function HeroSection() {
  return (
    <section className="hero-section container" aria-labelledby="hero-heading">
      <div className="hero-grid">
        <div className="hero-portrait-column">
          <figure className="portrait-frame">
            <div className="portrait-image-wrapper">
              <img
                src={profileData.photo}
                srcSet="/perfil-profesional-192w.webp 192w, /perfil-profesional-384w.webp 384w, /perfil-profesional.webp 514w"
                sizes="(max-width: 920px) 96px, 236px"
                alt={`Retrato de ${profileData.name}`}
                width="260"
                height="325"
                fetchPriority="high"
                decoding="async"
                className="portrait-image"
              />
            </div>
            <figcaption className="portrait-caption">
              <span>{profileData.location}</span>
              <span className="mono-detail">{profileData.education}</span>
            </figcaption>
          </figure>
        </div>

        <div className="hero-content-column">
          <h1 id="hero-heading" className="hero-title">
            {profileData.name}
          </h1>
          <p className="hero-role">{profileData.role}</p>

          <div className="hero-bio">
            <p>{profileData.intro}</p>
            <p>{profileData.story}</p>
          </div>

          <div className="hero-links" aria-label="Perfiles y contacto directo">
            {profileData.links.map((link) => {
              const isExternal = link.url.startsWith('http')
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="direct-link"
                >
                  <span className="direct-link-label">
                    <SocialPlatformIcon id={link.id} />
                    <span>{link.label}</span>
                  </span>
                  <span className="direct-link-handle">
                    <span>{link.handle}</span>
                    <ArrowUpRightIcon />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
