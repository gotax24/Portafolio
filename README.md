# gotax.dev — Portafolio de Ernesto Bracho R

Portafolio profesional de **Ernesto Bracho R.** (`gotax.dev`), construido con **React 19 (`.jsx`)**, **Vite 8 (Rolldown)** y **CSS nativo modular**.

## Arquitectura del Proyecto

```text
src/
├── components/
│   ├── certifications/
│   │   ├── CertificationsSection.jsx # Formación continua y certificaciones verificadas
│   │   └── CertificationItem.jsx     # Fila individual de certificación
│   ├── experience/
│   │   ├── ExperienceSection.jsx     # Línea de tiempo laboral con progreso de scroll
│   │   └── TimelineItem.jsx          # Nodo individual de experiencia (LinkedIn 2021–Actualidad)
│   ├── hero/
│   │   ├── HeroSection.jsx           # Retrato con skeleton shimmer, presentación y enlaces
│   │   └── TechStackBar.jsx          # Cinta corredora infinita (marquee) del stack principal
│   ├── journey/
│   │   ├── CodeJourneySection.jsx    # Evolución desde el primer repositorio (notitas, 2024)
│   │   └── JourneyItem.jsx           # Fila de repositorio del trayecto
│   ├── layout/
│   │   ├── Header.jsx                # Cabecera fija con navegación responsiva
│   │   └── Footer.jsx                # Contacto directo (ernesto@gotax.dev) y redes
│   ├── projects/
│   │   ├── ProjectsSection.jsx       # Compound Component con React 19 Context + useTransition
│   │   ├── ProjectFilterBar.jsx      # Barra de filtros accesible (role="tablist")
│   │   ├── ProjectRow.jsx            # Ficha técnica con El Desafío / Cómo lo hice
│   │   └── ProjectRowSkeleton.jsx    # Skeleton shimmer al filtrar categorías
│   └── ui/
│       ├── Icons.jsx                 # Iconografía SVG de interfaz y redes
│       ├── SectionExpandButton.jsx   # Botón reutilizable Ver completo / Mostrar menos
│       ├── SkipLink.jsx              # Accesibilidad por teclado (WCAG 2.4.1)
│       └── TechIcons.jsx             # Iconografía SVG técnica del stack
├── data/
│   ├── certificationsData.js         # Certificaciones de EDteam y URBE
│   ├── experienceData.js             # Historial laboral completo
│   ├── journeyData.js                # Archivo cronológico de repositorios desde 2024
│   ├── profileData.js                # Información personal y enlaces de contacto
│   ├── projectsData.js               # Proyectos públicos y privados (textos editables)
│   └── techStackData.js              # Lista de tecnologías principales para la barra del Hero
├── hooks/
│   ├── useScrollReveal.js          # Animaciones de entrada al hacer scroll (IntersectionObserver)
│   └── useTimelineProgress.js      # Cálculo pasivo de progreso en la línea de tiempo
└── styles/
    ├── tokens.css                  # Variables CSS (:root) y paleta oscura
    ├── base.css                    # Reset, tipografía, accesibilidad y animaciones
    └── layout.css                  # Composición editorial y diseño responsivo
```

## Cómo editar los textos de "El desafío" y "Cómo lo hice"

Abre `src/data/projectsData.js` y modifica las propiedades `challenge` y `solution` de cada proyecto. Los cambios se reflejan automáticamente sin tocar los componentes de interfaz.

## Comandos

```bash
pnpm dev       # Servidor de desarrollo
pnpm lint      # Verificación estática con Oxlint (react + jsx-a11y + import)
pnpm build     # Build de producción con Vite 8 + React Compiler
pnpm preview   # Vista previa del build
```
