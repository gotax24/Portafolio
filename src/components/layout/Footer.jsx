import { ArrowUpRightIcon, SocialPlatformIcon } from '@/components/ui/Icons'
import { profileData } from '@/data/profileData'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer id="contacto" className="site-footer">
      <div className="container footer-inner" data-reveal>
        <div className="footer-grid">
          <div className="footer-main">
            <h2 className="footer-title">Contacto directo</h2>
            <p className="footer-copy">
              Disponible para conversar sobre desarrollo de sistemas web, modernización de
              aplicaciones, infraestructura o colaboraciones técnicas. Escríbeme directamente a{' '}
              <a href={`mailto:${profileData.email}`} className="footer-inline-email">
                {profileData.email}
              </a>
              .
            </p>
          </div>

          <div className="footer-links" aria-label="Canales de contacto directo">
            {profileData.links.map((link) => {
              const isExternal = link.url.startsWith('http')
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="footer-link-row"
                >
                  <span className="footer-link-name">
                    <SocialPlatformIcon id={link.id} />
                    <span>{link.label}</span>
                  </span>
                  <span className="footer-link-value">
                    <span>{link.handle}</span>
                    <ArrowUpRightIcon />
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {CURRENT_YEAR} {profileData.name} — {profileData.domain}
          </span>
          <span className="mono-detail">{profileData.location}</span>
        </div>
      </div>
    </footer>
  )
}
