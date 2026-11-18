/**
 * PROYECTOS PRINCIPALES (Públicos y Privados)
 * Los textos de `challenge` (El desafío) y `solution` (Cómo lo hice) son genéricos
 * y están listos para que los edites con tus propias palabras cuando gustes.
 */
export const featuredProjects = [
  {
    id: "cevaz-rm",
    name: "cevaz-rm — Sistema de Gestión de Recursos",
    context: "Centro Venezolano Americano del Zulia (CEVAZ)",
    period: "2025 – 2026",
    visibility: "Privado · Institucional",
    isPrivate: true,
    statusCategory: "production",
    statusLabel: "En producción interna",
    stack: "Node.js · Express · API Modular · Base de Datos Relacional · TypeScript · Neon (Serverless)",
    summary:
      "Sistema interno institucional para la gestión operativa y académica del centro.",
    challenge:
      "El backend legado concentraba más de 4.000 líneas en un único archivo monolítico sin estándares de arquitectura, presentando alto acoplamiento, consultas SQL ineficientes y latencia notable por los cold starts de la base de datos serverless (Neon).",
    solution:
      "Lideré la refactorización del código en TypeScript apoyándome en flujos asistidos por IA (OpenCode) hacia una arquitectura modular por capas (rutas, controladores y servicios). Además, optimicé las consultas SQL y la gestión de conexiones para mitigar los cold starts de Neon, logrando una API más ágil, estable y mantenible.",
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: "icevaz",
    name: "ICEVAZ — Sistema de Inventario Institucional",
    context: "Centro Venezolano Americano del Zulia (CEVAZ)",
    period: "2025 – Actualidad",
    visibility: "Privado · Institucional",
    isPrivate: true,
    statusCategory: "production",
    statusLabel: "En producción interna",
    stack: "PHP · Arquitectura MVC · Microsoft SQL Server · Códigos QR",
    summary:
      "Plataforma integral para el control de activos físicos con etiquetado QR, gestión multi-sede y auditoría de movimientos.",
    challenge:
      "La institución carecía de un sistema de inventario y requería gestionar activos con códigos QR, existencias, jerarquías físicas (sede, área, departamento y espacio), transferencias entre sedes, autenticación y logs de auditoría. Una primera versión hecha por pasantes resultó inviable para salir a producción por su código espagueti, mezclando PHP, SQL, HTML, CSS y JS en los mismos archivos sin separación de responsabilidades.",
    solution:
      "Reconstruí el sistema desde cero durante 6 meses migrando módulo por módulo hacia una arquitectura MVC limpia. Apoyándome en desarrollo asistido por IA y formación formal en PHP, logré desacoplar la lógica de negocio, las consultas a base de datos y las vistas, entregando una plataforma estable, mantenible y en producción.",
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: "eventos-cevaz",
    name: "Plataforma de Gestión de Eventos CEVAZ",
    context: "Centro Venezolano Americano del Zulia (CEVAZ)",
    period: "2025 – Actualidad",
    visibility: "Código privado · Portal público",
    isPrivate: true,
    statusCategory: "production",
    statusLabel: "En producción",
    stack: "PHP · MySQL · Arquitectura MVC · Reportes Operativos",
    summary:
      "Plataforma automatizada para la gestión integral de eventos institucionales, registro de participantes, control de cupos por sede y analítica por departamento.",
    challenge:
      "La institución gestionaba sus eventos de forma manual mediante formularios de Google dispersos y hojas de Excel. Se requería centralizar el proceso en un sistema robusto con programación automática de fechas (publicación, apertura y cierre de inscripciones), recordatorios por correo electrónico, flujo de aprobación/rechazo por taller, validaciones para evitar conflictos de horario o espacio físico, y protección mediante rate limiting y CAPTCHA.",
    solution:
      "Diseñé y llevé a producción en 2 meses una plataforma web bajo arquitectura MVC limpia, dirigiendo el modelado de base de datos, la seguridad y las reglas de negocio con apoyo de desarrollo asistido por IA para acelerar la implementación. El sistema integra control de acceso por roles desde base de datos, validación de disponibilidad por sede/espacio/hora, talleres privados y multi-sesión, reportes estadísticos por departamento y gestión de usuarios, iterando ágilmente sobre más de 30 requerimientos del cliente.",
    liveUrl: "https://eventos.cevaz.org/",
    repoUrl: null,
  },
  {
    id: "marago",
    name: "Marago",
    context: "Proyecto Comercial",
    period: "2025 – 2026",
    visibility: "Repositorio privado",
    isPrivate: true,
    statusCategory: "production",
    statusLabel: "En producción",
    stack: "React 19 · Vite · Zustand · WhatsApp Integration",
    summary:
      "Menú digital interactivo con carrito bimoneda gestionado con Zustand, tasa oficial en tiempo real, control de apertura y automatización de pedidos hacia WhatsApp.",
    challenge:
      "Al pedir en un restaurante noté la lentitud del servicio y la fricción causada por menús estáticos en PDF hechos a mano, donde figuraban productos agotados y tanto el comercio como el cliente debían calcular manualmente los montos según la tasa oficial del día. A nivel técnico, el carrito requería actualizaciones frecuentes de estado sin degradar el rendimiento de toda la interfaz.",
    solution:
      "Desarrollé una aplicación frontend que consulta automáticamente la tasa oficial mediante una API externa (DolarApi Venezuela), controla el estado de apertura del local —manteniendo visible el menú y los precios aun cuando está cerrado— y gestiona el carrito de compras con Zustand, sustituyendo React Context para evitar re-renderizados globales al agregar o quitar productos. Integra un formulario dinámico con validaciones condicionales según modalidad (pickup o delivery) que estructura el pedido listo para enviar por WhatsApp. Implementé los datos en Excel para facilitar su operación por personal no técnico; si bien la carga y vinculación de imágenes representó el mayor reto y constituye el punto más frágil del enfoque sin servidor —manejable con una guía clara de uso—, este aprendizaje define la hoja de ruta hacia una versión 3.0 con backend propio, base de datos dedicada y almacenamiento en AWS S3 o Supabase Storage.",
    liveUrl: "https://marago.vercel.app",
    repoUrl: null,
  },
  {
    id: "criptobro",
    name: "CriptoBro",
    context: "Proyecto Personal",
    period: "2025 – 2026",
    visibility: "Repositorio público",
    isPrivate: false,
    statusCategory: "production",
    statusLabel: "En producción",
    stack: "React 19 · Supabase · React Query · Chart.js · CoinGecko API",
    summary:
      "Aplicación de seguimiento del mercado de criptomonedas en tiempo real con gráficos históricos, autenticación OAuth y lista de favoritos sincronizada en la nube.",
    challenge:
      "Partiendo de la base de un proyecto inicial de React, el reto consistió en escalarlo hacia una aplicación completa capaz de consultar datos financieros altamente volátiles desde la API de CoinGecko sin saturar peticiones ni degradar la fluidez de navegación, incorporando además inicio de sesión y persistencia de datos por usuario.",
    solution:
      "Implementé autenticación con proveedores OAuth (Google y GitHub) y persistencia en base de datos mediante Supabase para sincronizar los favoritos de cada cuenta. Optimicé el consumo de CoinGecko con React Query para el manejo de caché en el cliente, gestioné el estado global con Zustand y desarrollé gráficos históricos interactivos con Chart.js.",
    liveUrl: "https://criptobro.vercel.app",
    repoUrl: "https://github.com/gotax24/criptobro",
  },
  {
    id: "yalush",
    name: "Yalush",
    context: "Proyecto Full Stack",
    period: "2025 – Actualidad",
    visibility: "Repositorio público",
    isPrivate: false,
    statusCategory: "development",
    statusLabel: "En pausa (Migrando backend a Node.js)",
    stack: "React 19 · Zustand · Stripe · Node.js & PostgreSQL (En migración)",
    summary:
      "Monorepo Full Stack de comercio electrónico con catálogo, carrito, sistema de reseñas, favoritos, autenticación propia y panel de administración.",
    challenge:
      "Diseñar una plataforma de e-commerce completa y realista con pasarela de pagos (Stripe) para tarjetas, Pago Móvil, Zelle y PayPal además de gestión de comentarios, lista de favoritos y panel administrativo, superando las limitaciones de seguridad y persistencia de un entorno simulado.",
    solution:
      "Inicié el desarrollo del frontend en React apoyándome en json-server para prototipar la interfaz y los flujos de compra. Al abordar la integración real de Stripe y la lógica transaccional, identifiqué la necesidad de construir un backend robusto en lugar de depender de mocks. Decidí pausar estratégicamente el proyecto mientras adquiría experiencia desarrollando sistemas institucionales completos en producción; actualmente preparo la migración de esa lógica hacia Node.js para retomar y desplegar la arquitectura definitiva.",
    liveUrl: null,
    repoUrl: "https://github.com/gotax24/Yalush",
  },
  {
    id: "wallex",
    name: "Wallex",
    context: "Proyecto Full Stack",
    period: "2026 – Actualidad",
    visibility: "Repositorio privado",
    isPrivate: true,
    statusCategory: "development",
    statusLabel: "En desarrollo",
    stack: "React · Express · PostgreSQL · Docker · pnpm Workspaces",
    summary:
      "Aplicación de finanzas personales multimoneda (VES / USD / USDT) diseñada para el contexto venezolano, con control de cuentas, gastos, tasas de cambio y metas de ahorro.",
    challenge:
      "Tras experimentar limitaciones en el plan gratuito de aplicaciones financieras existentes como Rial, decidí diseñar una alternativa propia adaptada a las necesidades reales de gestión multimoneda en Venezuela, con proyección a evolucionar hacia un producto comercializable.",
    solution:
      "Estructuré un monorepo Full Stack en JavaScript (mi lenguaje principal) con el objetivo de consolidar criterio arquitectónico tanto en backend como en frontend. En lugar de delegar la implementación a la IA, adopté una metodología de ingeniería deliberada: escribo manualmente toda la arquitectura y lógica de negocio mientras utilizo la IA exclusivamente como revisor técnico y mentor conceptual (sin generación de código), priorizando el dominio profundo del stack sobre la velocidad de lanzamiento.",
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: "biblioteca-cevaz",
    name: "Biblioteca CEVAZ",
    context: "Centro Venezolano Americano del Zulia (CEVAZ)",
    period: "2025 – Actualidad",
    visibility: "Repositorio privado",
    isPrivate: true,
    statusCategory: "development",
    statusLabel: "En desarrollo",
    stack: "PHP · Microsoft SQL Server · Docker · Arquitectura MVC · Códigos QR",
    summary:
      "Aplicación web cliente-servidor para la administración integral del catálogo bibliográfico, disponibilidad y control de préstamos internos.",
    challenge:
      "La institución carecía de una plataforma centralizada para gestionar el inventario de la biblioteca, verificar la disponibilidad de ejemplares en tiempo real y llevar la trazabilidad de préstamos y devoluciones.",
    solution:
      "Actualmente desarrollo el sistema escribiendo el código PHP manualmente y utilizando la IA exclusivamente como tutor técnico para consolidar criterio profundo en el lenguaje. Dado que ejecuto el desarrollo con alta autonomía bajo la supervisión de la gerencia de TI con revisiones centradas en las entregas finales mientras afinamos ciclos de feedback más continuos, priorizo la estandarización desde la base. Por ello, tras afianzar los fundamentos en PHP puro, el siguiente paso es adoptar Laravel para contar con convenciones estrictas (similar a un entorno estructurado en Express) que faciliten tanto la auditoría de código como su mantenibilidad a largo plazo.",
    liveUrl: null,
    repoUrl: null,
  },
];

export const projectFilterTabs = [
  { id: "all", label: "Todos" },
  { id: "production", label: "En producción" },
  { id: "development", label: "En desarrollo" },
  { id: "public", label: "Públicos" },
  { id: "private", label: "Privados" },
];
