export const profileData = {
  name: 'Ernesto Bracho R.',
  domain: 'gotax.dev',
  role: 'Ingeniero en Computación · Analista de TI & Desarrollador Full Stack',
  location: 'Maracaibo, Estado Zulia, Venezuela',
  photo: '/ernesto-bracho.jpg',
  intro:
    'Ingeniero en Computación egresado de la URBE. Construyo aplicaciones web y sistemas internos que resuelven problemas operativos reales, combinando desarrollo Full Stack con gestión de infraestructura y bases de datos.',
  story:
    'Antes de consolidarme en tecnología, trabajé en atención al cliente, control de inventarios físicos, ventas técnicas e instalación de equipos en Venezuela y Chile. Esa trayectoria definió mi criterio actual: desarrollar software claro, rápido y pensado para quienes lo operan todos los días.',
  links: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'in/ernesto-bracho',
      url: 'https://www.linkedin.com/in/ernesto-bracho/',
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'github.com/gotax24',
      url: 'https://github.com/gotax24',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@gotax.dev',
      url: 'https://www.instagram.com/gotax.dev/',
    },
    {
      id: 'email',
      label: 'Email',
      handle: 'dev.ejbr@gmail.com',
      url: 'mailto:dev.ejbr@gmail.com',
    },
  ],
}

export const accentOptions = [
  { id: 'steel', name: 'Acero', value: '#7aa2f7', muted: 'rgba(122, 162, 247, 0.14)' },
  { id: 'emerald', name: 'Esmeralda', value: '#4fd6be', muted: 'rgba(79, 214, 190, 0.14)' },
  { id: 'amber', name: 'Ámbar', value: '#e0af68', muted: 'rgba(224, 175, 104, 0.14)' },
  { id: 'copper', name: 'Cobre', value: '#f0886c', muted: 'rgba(240, 136, 108, 0.14)' },
  { id: 'mono', name: 'Monocromo', value: '#e6e8ec', muted: 'rgba(230, 232, 236, 0.12)' },
]

/**
 * PROYECTOS PRINCIPALES (Públicos y Privados)
 * Los textos de `challenge` (El desafío) y `solution` (Cómo lo hice) son genéricos
 * y están listos para que los reemplaces con tus propias palabras cuando gustes.
 */
export const featuredProjects = [
  {
    id: 'cevaz-rm',
    name: 'cevaz-rm — Sistema de Gestión de Recursos',
    context: 'Centro Venezolano Americano del Zulia (CEVAZ)',
    period: '2025 – Actualidad',
    visibility: 'Privado · Institucional',
    status: 'En producción interna',
    stack: 'Node.js · Express · API Modular · Base de Datos Relacional',
    summary:
      'Sistema interno institucional para la gestión operativa y académica del centro.',
    challenge:
      'El sistema original concentraba más de 4.000 líneas de código en un único archivo monolítico, lo que dificultaba el mantenimiento, la detección de errores y la incorporación de nuevas funciones.',
    solution:
      'Realicé una refactorización autónoma hacia una arquitectura de API modular, separando responsabilidades por rutas, controladores y servicios para mejorar la escalabilidad y el rendimiento.',
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'icevaz',
    name: 'ICEVAZ — Sistema de Inventario Institucional',
    context: 'Centro Venezolano Americano del Zulia (CEVAZ)',
    period: '2025 – Actualidad',
    visibility: 'Privado · Institucional',
    status: 'En producción interna',
    stack: 'PHP · Arquitectura MVC · Microsoft SQL Server · Códigos QR',
    summary:
      'Plataforma para el control de activos físicos, ubicaciones por sede/departamento y auditoría de movimientos.',
    challenge:
      'Se requería reemplazar una aplicación de inventario obsoleta en PHP que carecía de arquitectura estructurada y trazabilidad física rápida de los equipos asignados en cada sede.',
    solution:
      'Ejecuté la migración completa hacia un patrón MVC conectado a SQL Server, incorporando autenticación segura, control de sesiones y generación de códigos QR para consultar la ficha de cada activo.',
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'eventos-cevaz',
    name: 'Plataforma de Gestión de Eventos CEVAZ',
    context: 'Centro Venezolano Americano del Zulia (CEVAZ)',
    period: '2025 – Actualidad',
    visibility: 'Privado · Institucional',
    status: 'En producción interna',
    stack: 'PHP · MySQL · Arquitectura MVC · Reportes Operativos',
    summary:
      'Herramienta automatizada para el registro de participantes, control de cupos por sede y seguimiento de eventos institucionales.',
    challenge:
      'El proceso de registro y consolidación de asistencia para talleres y actividades requería centralizarse en una plataforma propia que redujera el trabajo manual entre departamentos.',
    solution:
      'Diseñé y programé de forma independiente una aplicación web en PHP y MySQL con formularios dinámicos de inscripción, panel administrativo por roles y generación de reportes.',
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'marago',
    name: 'Marago',
    context: 'Proyecto Comercial',
    period: '2025 – 2026',
    visibility: 'Repositorio privado',
    status: 'En producción',
    stack: 'React 19 · Vite · Zustand · WhatsApp Integration',
    summary:
      'Menú digital interactivo con carrito de compras bimoneda y automatización de pedidos hacia WhatsApp.',
    challenge:
      'Ofrecer una experiencia de compra ágil desde el teléfono móvil donde el cliente pudiera armar su pedido viendo montos actualizados y enviarlo sin fricción al comercio.',
    solution:
      'Construí una interfaz rápida enfocada en dispositivos móviles con gestión de estado global para el carrito, cálculo automático de tasa de cambio con caché local y generación del pedido estructurado para WhatsApp.',
    liveUrl: 'https://marago.vercel.app',
    repoUrl: null,
  },
  {
    id: 'criptobro',
    name: 'CriptoBro',
    context: 'Proyecto Personal',
    period: '2025 – 2026',
    visibility: 'Repositorio público',
    status: 'En producción',
    stack: 'React 19 · Supabase · React Query · Chart.js · CoinGecko API',
    summary:
      'Aplicación de seguimiento del mercado de criptomonedas en tiempo real con gráficos históricos y lista personalizada de favoritos.',
    challenge:
      'Consultar y visualizar datos cambiantes del mercado financiero manteniendo una navegación fluida, manejo de caché en el cliente y persistencia de favoritos por usuario.',
    solution:
      'Integré la API de CoinGecko con React Query para optimizar las peticiones, gráficos interactivos con Chart.js y autenticación mediante Supabase para sincronizar las preferencias de cada cuenta.',
    liveUrl: 'https://criptobro.vercel.app',
    repoUrl: 'https://github.com/gotax24/criptobro',
  },
  {
    id: 'yalush',
    name: 'Yalush',
    context: 'Proyecto Full Stack',
    period: '2025 – Actualidad',
    visibility: 'Repositorio público',
    status: 'En desarrollo',
    stack: 'React 19 · Express 5 · PostgreSQL · Zustand · JWT & OAuth',
    summary:
      'Monorepo Full Stack de comercio electrónico con catálogo, carrito, autenticación propia y panel de administración.',
    challenge:
      'Reconstruir la arquitectura completa del proyecto para separar claramente el cliente web y el servidor API, garantizando integridad de datos en inventario y sesiones seguras.',
    solution:
      'Estoy desarrollando un monorepo con backend en Express y PostgreSQL mediante consultas SQL parametrizadas, autenticación JWT con proveedores OAuth y un frontend reactivo con Zustand.',
    liveUrl: 'https://yalush.vercel.app',
    repoUrl: 'https://github.com/gotax24/Yalush',
  },
  {
    id: 'wallex',
    name: 'Wallex',
    context: 'Proyecto Full Stack',
    period: '2026 – Actualidad',
    visibility: 'Repositorio privado',
    status: 'En desarrollo',
    stack: 'React · Express · PostgreSQL · Docker · pnpm Workspaces',
    summary:
      'Aplicación de finanzas personales multimoneda (VES / USD / USDT) para control de cuentas, gastos, tasas de cambio y metas de ahorro.',
    challenge:
      'Manejar operaciones financieras cotidianas en múltiples monedas y tasas de referencia sin errores de precisión decimal ni desorden en el esquema de base de datos.',
    solution:
      'Estructuré un monorepo con API en Express y PostgreSQL sobre Docker, utilizando migraciones SQL versionadas y almacenamiento de montos en unidades enteras.',
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'biblioteca-cevaz',
    name: 'Biblioteca CEVAZ',
    context: 'Centro Venezolano Americano del Zulia (CEVAZ)',
    period: '2025 – Actualidad',
    visibility: 'Repositorio privado',
    status: 'En desarrollo',
    stack: 'React 19 · Express 5 · Microsoft SQL Server · JWT',
    summary:
      'Aplicación web cliente-servidor para la administración del catálogo bibliográfico y préstamos internos.',
    challenge:
      'Modernizar la consulta y gestión de ejemplares de la biblioteca conectando una interfaz web actual con una base de datos institucional en SQL Server.',
    solution:
      'Desarrollando una API REST en Express con conector nativo para SQL Server, validación de datos y autenticación por tokens consumida desde un cliente en React.',
    liveUrl: null,
    repoUrl: null,
  },
]

/**
 * EL TRAYECTO EN CÓDIGO (Desde mi primera app en 2024 hasta hoy)
 */
export const codeJourney = [
  {
    name: 'notitas',
    date: 'Sept. 2024',
    stage: 'Mi primera aplicación web',
    stack: 'HTML · CSS · JavaScript',
    description:
      'El punto de partida de todo mi trayecto en código. Una aplicación sencilla de notas rápidas donde aprendí a manipular el DOM, capturar eventos y persistir datos en el navegador.',
    liveUrl: 'https://gotax24.github.io/notitas/',
    repoUrl: 'https://github.com/gotax24/notitas',
  },
  {
    name: 'Ahorcadox',
    date: 'Sept. 2024',
    stage: 'Lógica y control de estado',
    stack: 'HTML · CSS · JavaScript',
    description:
      'Implementación del juego clásico del ahorcado en el navegador para practicar estructuras de datos básicas, ciclos y actualización visual según los intentos del jugador.',
    liveUrl: 'https://gotax24.github.io/Ahorcadox/',
    repoUrl: 'https://github.com/gotax24/Ahorcadox',
  },
  {
    name: 'Generax',
    date: 'Sept. 2024',
    stage: 'Maquetación e interacción',
    stack: 'HTML · CSS · JavaScript',
    description:
      'Herramienta interactiva enfocada en afianzar estilos CSS, diseño adaptable y manipulación de valores desde controles de formulario.',
    liveUrl: 'https://gotax24.github.io/Generax/',
    repoUrl: 'https://github.com/gotax24/Generax',
  },
  {
    name: 'PokeYalush',
    date: 'Sept. 2024',
    stage: 'Consumo de APIs asíncronas',
    stack: 'HTML · CSS · JavaScript · PokéAPI',
    description:
      'Mi primer proyecto realizando peticiones HTTP asíncronas (fetch) a una API externa para buscar, filtrar y renderizar tarjetas dinámicas.',
    liveUrl: 'https://gotax24.github.io/PokeYalush/',
    repoUrl: 'https://github.com/gotax24/PokeYalush',
  },
  {
    name: 'Tix',
    date: 'Sept. 2024',
    stage: 'Cálculos y utilidades',
    stack: 'HTML · CSS · JavaScript',
    description:
      'Utilidad práctica para gestión de cuentas y cálculos rápidos desde el navegador.',
    liveUrl: 'https://gotax24.github.io/cuenta/',
    repoUrl: 'https://github.com/gotax24/Tix',
  },
  {
    name: 'climazaso',
    date: 'Feb. 2025',
    stage: 'Despliegue en la nube y datos en vivo',
    stack: 'JavaScript · CSS · API de Clima · Vercel',
    description:
      'Aplicación de consulta meteorológica en tiempo real, marcando la transición hacia flujos de despliegue continuo en Vercel.',
    liveUrl: 'https://climazaso.vercel.app',
    repoUrl: 'https://github.com/gotax24/climazaso',
  },
  {
    name: 'JuegoLaVieja',
    date: 'Feb. 2025',
    stage: 'Componentes e interactividad',
    stack: 'JavaScript · React · Vite',
    description:
      'Juego de tres en raya con control de turnos, validación de matrices ganadoras y persistencia de partida.',
    liveUrl: 'https://juego-la-vieja-phi.vercel.app',
    repoUrl: 'https://github.com/gotax24/JuegoLaVieja',
  },
  {
    name: 'Bibliotecox',
    date: 'Feb. 2025',
    stage: 'Gestión de colecciones',
    stack: 'JavaScript · HTML · CSS',
    description:
      'Prototipo de catálogo bibliográfico en cliente que sirvió como antecedente conceptual para sistemas de inventario y biblioteca posteriores.',
    liveUrl: 'https://gotax24.github.io/Bibliotecox/',
    repoUrl: 'https://github.com/gotax24/Bibliotecox',
  },
  {
    name: 'The-panel-0n',
    date: 'Mar. 2025',
    stage: 'Interfaces administrativas',
    stack: 'JavaScript · React · CSS',
    description:
      'Exploración de diseño de paneles de control (dashboards), navegación lateral y organización de vistas operativas.',
    liveUrl: 'https://the-panel-0n.vercel.app',
    repoUrl: 'https://github.com/gotax24/The-panel-0n',
  },
  {
    name: 'courses & Repo-Curso-Github',
    date: 'Mar. – May. 2026',
    stage: 'Fundamentos continuos y Git',
    stack: 'JavaScript · Git · GitHub',
    description:
      'Repositorios donde documento laboratorios prácticos, ejercicios de cursos técnicos y flujos de trabajo en Git.',
    liveUrl: null,
    repoUrl: 'https://github.com/gotax24/courses',
  },
  {
    name: 'php-desde-cero & web-scrapper-sencillo',
    date: 'May. 2026',
    stage: 'Programación Backend en PHP',
    stack: 'PHP · HTTP · Parsing HTML',
    description:
      'Ejercicios base del lenguaje PHP del lado del servidor y construcción de un extractor automatizado de contenido web.',
    liveUrl: null,
    repoUrl: 'https://github.com/gotax24/web-scrapper-sencillo',
  },
  {
    name: 'curso-react (EDCrypto)',
    date: 'Jun. 2026',
    stage: 'Arquitectura en React',
    stack: 'React · Vite · API Cripto',
    description:
      'Listado y monitoreo de criptomonedas desarrollado como base antes de construir la versión completa de CriptoBro.',
    liveUrl: 'https://edcrypto.vercel.app',
    repoUrl: 'https://github.com/gotax24/curso-react',
  },
]

/**
 * TRAYECTORIA LABORAL COMPLETA (LinkedIn: 2021 – Actualidad)
 */
export const experienceTimeline = [
  {
    id: 'cevaz',
    role: 'Analista de TI | Desarrollador Full Stack',
    company: 'Centro Venezolano Americano del Zulia (CEVAZ)',
    employmentType: 'Jornada completa',
    period: 'sept. de 2025 – actualidad',
    location: 'Estado Zulia, Venezuela · Presencial',
    summary:
      'Responsable de la modernización de sistemas internos y la operatividad tecnológica de la institución, asumiendo el desarrollo integral (end-to-end) de proyectos clave y la gestión de infraestructura.',
    highlights: [
      'Modernización de Backend: Refactoricé de manera autónoma el sistema interno (cevaz-rm), transformando un código monolítico de +4.000 líneas en una API modular, escalable y eficiente.',
      'Actualización de Sistemas Legados: Ejecuté por completo la migración del sistema de inventario (PHP obsoleto) a una arquitectura MVC robusta con SQL Server, integrando autenticación segura y trazabilidad de activos mediante códigos QR.',
      'Desarrollo de Soluciones: Diseñando y programando de forma independiente una plataforma automatizada (PHP/MySQL) para la gestión integral de eventos.',
      'Gestión de Infraestructura: Brindo soporte técnico preventivo y correctivo para un parque de +120 estaciones de trabajo (Ubuntu/Windows), mantengo las bases de datos y administro servidores locales y sistemas de videovigilancia (CCTV).',
    ],
    skills: [
      'Sistemas informáticos',
      'Administración de servidores',
      'Desarrollo Web',
      'PHP',
      'Microsoft SQL Server',
      'MySQL',
      'Linux',
      'Programación',
      'Resolución de problemas',
      'Gestión del tiempo',
    ],
  },
  {
    id: 'cdd-radioterapia',
    role: 'Analista integral',
    company: 'CDD Radioterapia',
    employmentType: 'Jornada completa',
    period: 'mar. de 2025 – ago. de 2025 · 6 meses',
    location: 'Maracaibo, Estado Zulia, Venezuela · Presencial',
    summary:
      'Responsable en atención y orientación al paciente, tanto de forma presencial como a través de canales virtuales (chatbot, WhatsApp, llamadas telefónicas). Gestión y programación de citas médicas y colaboración en diversas áreas operativas según las necesidades del centro.',
    highlights: [
      'Ofrecí una experiencia eficiente, empática y profesional al paciente, contribuyendo directamente al flujo organizativo y a los estándares de atención de la institución.',
    ],
    skills: [
      'Gestión eficiente del tiempo',
      'Gestión de atención al cliente',
      'Trabajo en equipo',
    ],
  },
  {
    id: 'movistell',
    role: 'Ejecutivo de ventas',
    company: 'Movistell C.A.',
    employmentType: 'Contrato temporal',
    period: 'nov. de 2024 – ene. de 2025 · 3 meses',
    location: 'Maracaibo, Estado Zulia, Venezuela · Presencial',
    summary:
      'Responsable de la venta de teléfonos móviles, laptops, tablets, consolas, accesorios y dispositivos tecnológicos, asegurando la satisfacción de los clientes y cumpliendo consistentemente las metas de ventas establecidas.',
    highlights: [
      'Participé activamente en la gestión y control de inventarios para garantizar la disponibilidad de los productos tecnológicos en tienda.',
    ],
    skills: ['Ventas', 'Atención al cliente', 'Gestión del tiempo'],
  },
  {
    id: 'essalud',
    role: 'Auxiliar de Farmacia',
    company: 'Farmacia ESSALUD',
    employmentType: 'Jornada completa',
    period: 'ene. de 2024 – abr. de 2024 · 4 meses',
    location: 'Región Metropolitana de Santiago, Chile · Presencial',
    summary:
      'Desempeñé un rol integral que incluyó ventas, cotizaciones, organización de anaqueles y recepción de mercancías con capacidad para trabajar de manera independiente.',
    highlights: [
      'Etapa en la que paralelamente (febrero de 2024) inicié mi formación intensiva y práctica en desarrollo de software web.',
    ],
    skills: [
      'Gestión de caja',
      'Servicio de atención al cliente',
      'Auxiliar de farmacia',
      'Venta farmacéutica',
      'Farmacología',
    ],
  },
  {
    id: 'indsol',
    role: 'Técnico instalador junior',
    company: 'Indsol S.A.',
    employmentType: 'Jornada completa',
    period: 'oct. de 2023 – nov. de 2023 · 2 meses',
    location: 'Región Metropolitana de Santiago, Chile · Presencial',
    summary:
      'Instalación en campo de sistemas de seguridad física y perimetral.',
    highlights: [
      'Manejo de herramientas eléctricas y manuales, instalación de cercado eléctrico y montaje de cámaras de seguridad (CCTV).',
    ],
    skills: ['Herramientas eléctricas', 'Herramientas manuales', 'CCTV'],
  },
  {
    id: 'farmatodo',
    role: 'Asistente de piso de venta',
    company: 'Farmatodo',
    employmentType: 'Jornada completa',
    period: 'sept. de 2021 – oct. de 2023 · 2 años 2 meses',
    location: 'Maracaibo, Estado Zulia, Venezuela',
    summary:
      'Realicé inventarios periódicos de productos, atendí a los clientes con profesionalismo ofreciendo asesoramiento y manejé la caja registradora con exactitud.',
    highlights: [
      'Estuve a cargo de la atención farmacéutica en ausencia de las titulares, resolviendo consultas de clientes y manteniendo el control de planogramas e inventarios.',
    ],
    skills: [
      'Gestión de inventarios',
      'Planogramas',
      'Gestión de caja',
      'Servicio de atención al cliente',
      'Conocimiento del producto',
      'Venta farmacéutica',
    ],
  },
  {
    id: 'epa',
    role: 'Asistente integral',
    company: 'Ferretería EPA',
    employmentType: 'Contrato temporal',
    period: 'feb. de 2021 – ago. de 2021 · 7 meses',
    location: 'Municipio Maracaibo, Estado Zulia, Venezuela',
    summary:
      'Atención cordial y profesional a los clientes, asesorándolos con los productos adecuados a sus requerimientos técnicos y operativos.',
    highlights: [
      'Manejo de caja registradora con precisión y colaboración estrecha con el equipo de ventas y almacén para el buen funcionamiento de la tienda.',
    ],
    skills: [
      'Conciliación de caja',
      'Gestión de inventarios',
      'Servicio de atención al cliente',
      'Conocimiento del cliente',
      'Conocimiento del producto',
    ],
  },
]
