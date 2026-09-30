// ✅ BEST PRACTICE: Datos centralizados — nunca hardcode datos en componentes UI

export const revenueData = [
  { mes: "Ene", ingresos: 7278850, pedidos: 80 },
  { mes: "Feb", ingresos: 7430500, pedidos: 69 },
  { mes: "Mar", ingresos: 5649250, pedidos: 67 },
  { mes: "Abr", ingresos: 5366500, pedidos: 60 },
  { mes: "May", ingresos: 6348960, pedidos: 63 },
  { mes: "Jun", ingresos: 5663950, pedidos: 59 },
  { mes: "Jul", ingresos: 4549223, pedidos: 50 },
];

export const kpiData = {
  tasaConversion: 0.6,
  tiempoEnSitio: "1 min 00 s",
  porcentajeRebote: 63.42,
  ticketPromedio: 85125,
  totalClientes: 4847,
  ltv: 93225,
  pedidosHistoricos: 11905,
  gastoPautaMensual: 2700000,
  costoPorPedido: 42000,
};

export const cartAbandonmentData = {
  recuperados: 81,
  perdidos: 112,
  recuperables: 45,
  ingresosRecuperados: 8580753,
  ingresosRecuperables: 2846900,
  tasaRecuperacion: 34.03,
};

export const ga4Data = {
  usuariosActivos: 50000,
  usuariosNuevos: 49000,
  sesionesConInteraccion: 36.58,
  retenciónSemana1: 1.2,
  canales: [
    { canal: "Directo", sesiones: 19000 },
    { canal: "Orgánico", sesiones: 15000 },
    { canal: "Paid Social", sesiones: 11000 },
    { canal: "Soc. Orgánico", sesiones: 4900 },
    { canal: "Paid Search", sesiones: 4200 },
  ],
  dispositivos: [
    { tipo: "Desktop", porcentaje: 55 },
    { tipo: "Móvil", porcentaje: 44.4 },
    { tipo: "Tablet", porcentaje: 0.6 },
  ],
  engagementPorNavegador: [
    { navegador: "Instagram/WhatsApp", tiempoSeg: 167, color: "#2D5016" },
    { navegador: "Chrome", tiempoSeg: 54, color: "#4A7C28" },
    { navegador: "Safari (iPhone)", tiempoSeg: 43, color: "#B45309" },
  ],
};

export const categoriasSales = [
  { categoria: "Usados", articulos: 390, ventas: 9220026, pedidos: 150, porcentaje: 81 },
  { categoria: "Literatura", articulos: 222, ventas: 5067503, pedidos: 92, porcentaje: 46 },
  { categoria: "Nuevos", articulos: 75, ventas: 5960983, pedidos: 53, porcentaje: 16 },
  { categoria: "Nov. y cuentos", articulos: 67, ventas: 3468638, pedidos: 34, porcentaje: 14 },
  { categoria: "Book Nooks", articulos: 12, ventas: 2130000, pedidos: 18, porcentaje: 2.5 },
];

export const socialData = {
  instagram: { seguidores: 83400, frecuencia: "Diario", sesionesWeb: 4900 },
  facebook: { seguidores: 4600, frecuencia: "Diario" },
  gastoPautaMensual: 2700000,
};

export const brandingGaps = [
  { gap: "Sin paleta de colores oficial", impacto: "alto" },
  { gap: "Sin tipografía de marca", impacto: "alto" },
  { gap: "Sin guía de estilos", impacto: "alto" },
  { gap: "Sin sello de calidad de libros usados", impacto: "alto" },
  { gap: "Sin propuesta de valor visible en la web", impacto: "alto" },
  { gap: "Correos transaccionales sin branding", impacto: "medio" },
  { gap: "PDP sin respuestas a las 3 preguntas clave", impacto: "alto" },
];

export const roadmapFases = [
  {
    numero: "01",
    titulo: "Activar el Tracking Real",
    descripcion: "GA4 e-commerce, Microsoft Clarity y Search Console. Sin datos reales, no hay decisiones inteligentes.",
    impacto: "Base para todo lo demás",
    tiempo: "1 semana",
    inversion: "Incluido",
    items: ["Eventos de compra en GA4", "Heatmaps con Clarity", "Keywords reales con Search Console"],
  },
  {
    numero: "02",
    titulo: "Reactivar los Carritos Abandonados",
    descripcion: "Las plantillas de recuperación están detenidas. Configurarlas genera ~$2M/mes de forma automática.",
    impacto: "$2.000.000 COP/mes recuperables",
    tiempo: "1–2 días",
    inversion: "Incluido",
    items: ["3 correos de recuperación con branding", "Secuencia optimizada (30 min, 24h, 72h)", "Test de entregabilidad"],
  },
  {
    numero: "03",
    titulo: "Email Marketing a 4.847 Clientes",
    descripcion: "Nunca se ha enviado un correo masivo. La base ya existe y Brevo tiene 300 correos/día gratis.",
    impacto: "Costo $0 — ROI inmediato",
    tiempo: "1 semana",
    inversion: "$0 (dentro del plan Brevo)",
    items: ["Campaña de reactivación", "Newsletter mensual de novedades", "Segmentación por categoría de interés"],
  },
  {
    numero: "04",
    titulo: "Rediseño del PDP (Página de Producto)",
    descripcion: "Las 3 preguntas más frecuentes no tienen respuesta visible. Resolver esto aumenta la conversión directamente.",
    impacto: "CVR esperado: 0.6% → 1.2%+",
    tiempo: "2–3 semanas",
    inversion: "A definir",
    items: ["Sello de estado del libro (Usado/Como nuevo/Nuevo)", "Política de envío visible y clara", "Garantía de compra + reviews"],
  },
  {
    numero: "05",
    titulo: "Sistema de Branding e Identidad",
    descripcion: "Paleta, tipografía, tono de voz, guía de estilos. Base necesaria para que todo lo visual sea coherente.",
    impacto: "Diferenciación y confianza",
    tiempo: "2–3 semanas",
    inversion: "A definir",
    items: ["Design System completo", "Plantillas de correo con marca", "Guía de publicación para Instagram"],
  },
  {
    numero: "06",
    titulo: "SEO y Contenido Orgánico",
    descripcion: "15.000 páginas de producto sin optimización = oportunidad masiva de tráfico gratuito.",
    impacto: "Reducir dependencia de pauta",
    tiempo: "Mes 2–3",
    inversion: "A definir",
    items: ["Optimización de PDPs con RankMath", "Estrategia de categorías", "Blog de reseñas y recomendaciones"],
  },
];

export const preguntasClientes = [
  { pregunta: "¿En qué estado está el libro?", frecuencia: "Muy alta", categoria: "Confianza en producto" },
  { pregunta: "¿Cuánto tarda el envío?", frecuencia: "Muy alta", categoria: "Confianza en logística" },
  { pregunta: "¿Qué tan seguro es comprar aquí?", frecuencia: "Alta", categoria: "Confianza en la marca" },
];
