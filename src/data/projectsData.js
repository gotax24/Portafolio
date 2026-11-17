/**
 * PROYECTOS PRINCIPALES (Públicos y Privados)
 * Los textos de `challenge` (El desafío) y `solution` (Cómo lo hice) son genéricos
 * y están listos para que los edites con tus propias palabras cuando gustes.
 */
export const featuredProjects = [
  {
    id: 'cevaz-rm',
    name: 'cevaz-rm — Sistema de Gestión de Recursos',
    context: 'Centro Venezolano Americano del Zulia (CEVAZ)',
    period: '2025 – Actualidad',
    visibility: 'Privado · Institucional',
    isPrivate: true,
    statusCategory: 'production',
    statusLabel: 'En producción interna',
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
    isPrivate: true,
    statusCategory: 'production',
    statusLabel: 'En producción interna',
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
    isPrivate: true,
    statusCategory: 'production',
    statusLabel: 'En producción interna',
    stack: 'PHP · MySQL · Arquitectura MVC · Reportes Operativos',
    summary:
      'Herramienta automatizada para el registro de participantes, control de cupos por sede y seguimiento de eventos institucionales.',
    challenge:
      'El proceso de registro y consolidación de asistencia para talleres y actividades requería centralizarse en una plataforma propia que redujera el trabajo manual entre departamentos.',
    solution:
      'Diseñé y programé de forma independiente una aplicación web en PHP y MySQL con formularios dinámicos de inscripción, panel administrativo por roles y generación de reportes.',
    liveUrl: 'https://eventos.cevaz.org/',
    repoUrl: null,
  },
  {
    id: 'marago',
    name: 'Marago',
    context: 'Proyecto Comercial',
    period: '2025 – 2026',
    visibility: 'Repositorio privado',
    isPrivate: true,
    statusCategory: 'production',
    statusLabel: 'En producción',
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
    isPrivate: false,
    statusCategory: 'production',
    statusLabel: 'En producción',
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
    isPrivate: false,
    statusCategory: 'development',
    statusLabel: 'En desarrollo',
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
    isPrivate: true,
    statusCategory: 'development',
    statusLabel: 'En desarrollo',
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
    isPrivate: true,
    statusCategory: 'development',
    statusLabel: 'En desarrollo',
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

export const projectFilterTabs = [
  { id: 'all', label: 'Todos' },
  { id: 'production', label: 'En producción' },
  { id: 'development', label: 'En desarrollo' },
  { id: 'public', label: 'Públicos' },
  { id: 'private', label: 'Privados' },
]
