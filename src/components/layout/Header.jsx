import { profileData } from '@/data/profileData'

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="brand-mark" aria-label="Ir al inicio de gotax.dev">
          <span className="brand-domain">{profileData.domain}</span>
          <span className="brand-divider" aria-hidden="true">
            /
          </span>
          <span className="brand-owner">Ernesto Bracho</span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#trayecto-codigo">Trayecto</a>
          <a href="#certificaciones">Cursos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
