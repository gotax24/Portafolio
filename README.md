# gotax.dev — Portafolio de Ernesto Bracho R

Portafolio profesional de **Ernesto Bracho R.** (`gotax.dev`), construido con **React 19 (`.jsx`)**, **Vite 8 (Rolldown)** y **CSS nativo modular**.

## Arquitectura del Proyecto

```text
src/
├── components/
│   ├── experience/
│   │   ├── ExperienceSection.jsx   # Línea de tiempo laboral con progreso de scroll
│   │   └── TimelineItem.jsx        # Nodo individual de experiencia (LinkedIn 2021–Actualidad)
│   ├── hero/
│   │   └── HeroSection.jsx         # Retrato, presentación y enlaces directos
│   ├── journey/
│   │   ├── CodeJourneySection.jsx  # Evolución desde el primer repositorio (notitas, 2024)
│   │   └── JourneyItem.jsx         # Fila de repositorio del trayecto
│   ├── layout/
│   │   ├── Header.jsx              # Cabecera fija con navegación y selector de acento
│   │   └── Footer.jsx              # Contacto directo (ernesto@gotax.dev) y redes
│   ├── projects/
│   │   ├── ProjectsSection.jsx     # Compound Component con React 19 Context + useTransition
│   │   ├── ProjectFilterBar.jsx    # Barra de filtros accesible (role="tablist")
│   │   └── ProjectRow.jsx          # Ficha técnica con El Desafío / Cómo lo hice
│   └── ui/
│       ├── AccentSwitcher.jsx      # Selector de color de acento en vivo
│       ├── Icons.jsx               # Iconografía SVG optimizada
│       └── SkipLink.jsx            # Accesibilidad por teclado (WCAG 2.4.1)
├── context/
│   └── ThemeContext.jsx            # Estado de tema/acento con API use() de React 19
├── data/
│   ├── profileData.js              # Información personal y enlaces de contacto
│   ├── projectsData.js             # Proyectos públicos y privados (textos editables)
│   ├── journeyData.js              # Archivo cronológico de repositorios desde 2024
│   └── experienceData.js           # Historial laboral completo
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
