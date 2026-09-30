# Incunabula — Reporte de Estado del Proyecto y Prompt de Auditoría
**Para:** Claude (revisión externa y auditoría)  
**Fecha:** 28 Sep 2026  
**Elaborado por:** Jordan Marles (consultor independiente)

---

## 🎯 Instrucciones (Prompt) para Claude

Actúa como un Auditor de Proyectos E-commerce y Director de Arte Estratégico. Tu objetivo principal es garantizar que el proyecto se ejecute de manera impecable, "yendo a la fija" sin desperdiciar recursos.

Al leer este reporte y comenzar tu trabajo, debes adherirte estrictamente a estas reglas:
1. **Contexto Primero:** Lee siempre los documentos de contexto del proyecto (`_CONTEXT.md` en la raíz y subcarpetas) antes de proponer cualquier acción.
2. **Auditoría Exhaustiva:** Evalúa el estado actual, identifica qué falta y asegúrate de que estemos cumpliendo con los objetivos delineados en el contrato/propuesta inicial.
3. **Optimización del Siguiente Paso:** Determina las urgencias reales y define un (1) paso a seguir claro, procesable y optimizado para el momento actual del proyecto.
4. **Conceptualización Documentada:** Eres responsable de gestionar la documentación que determina las reglas para la creación/evolución de la marca. Todo el proceso de branding debe estar fundamentado y registrado en archivos.
5. **Cero Suposiciones:** NO ignores nada. Si necesitas información clave para el negocio, el mercado o la marca que no es de fácil acceso en el contexto proporcionado, **pregúntalo**. Yo (el usuario) te suministraré los datos o capturas necesarias para evitar que gastes tokens infructuosamente.

---

## Contexto del negocio

Librería online colombiana de libros usados y clásicos. WooCommerce sobre Hostinger Cloud Enterprise. Operan Laura (administración/redes) y Carlos (operaciones). **21.735 productos totales (6.457 en stock activo)**. 83.4k seguidores en Instagram. Inversión publicitaria: $2.7M COP/mes.

**Problema central:** Caída del 38% en ingresos entre enero y julio 2026 (80 pedidos/$7.2M → 50 pedidos/$4.5M). Ticket promedio: $85.125 COP. Atribuyen la caída a un bloqueo/baneo de Instagram para pautar. Nunca han tenido tracking real de conversiones ni han enviado un solo correo masivo a su base de 4.847 clientes por falta de tiempo operativo.

---

## Fases del proyecto

### Fase 1 — Rescate técnico ✅ COMPLETA
Estabilización del stack técnico: PHP 8.2, plugins actualizados/reemplazados, Wompi corregido, Brevo/FluentSMTP para correos transaccionales, Elementor Pro licenciado, GA4 instalado, Search Console conectada, Microsoft Clarity activo.

### Fase 2 — Crecimiento 🔄 EN CURSO
Dos tracks paralelos:

**Track A — Técnico**
| Tarea | Estado |
|:------|:-------|
| Correos carrito abandonado 1 y 2 | ✅ Activos y funcionando |
| GA4 e-commerce tracking (purchase, add_to_cart) | ✅ Configurado Sep 17 — Analizado |
| Microsoft Clarity heatmaps | ✅ Activo desde Sep 8 — Analizado |
| Correo 3 carrito (cupón descuento) | ✅ Activo — manda 10% automático. **Pendiente:** verificar acumulación con Simple Discount Rules (15%) |
| Soft 404 Search Console | ✅ Resuelto |
| LCP >4s en móvil (PDPs) | 🔴 Sin iniciar |

**Track B — Branding**
| Tarea | Estado |
|:------|:-------|
| Cuestionario estratégico de marca | ✅ Contestado por Laura y Carlos |
| Análisis de competencia visual | ⬜ Sin iniciar |
| Análisis de referentes (Taschen, Villegas Editores, Recyclivre) | ⬜ Sin iniciar |
| Auditoría formal del logo actual | ⬜ Sin iniciar |
| Lectura de Clarity + GA4 para decisiones UX | ✅ Completado — Hallazgos extraídos |
| Manual de marca maestro | 🔄 En proceso de integración de cuestionario |

---

## Datos disponibles para análisis inmediato (Listos para explotar)

1. **Respuestas al Cuestionario de Marca:** Ya procesadas. Visión: Minimalista pero cercana, clientes son bibliófilos. Quieren algo estilo Taschen / Villegas Editores. Buscan escalar a punto físico a futuro.
2. **Microsoft Clarity (Analizado):** LCP altísimo (4.6s). Tráfico concentrado en pautas específicas de libros de sexualidad (vía Facebook/Instagram). Tasa altísima de errores JS que bloquean conversiones.
3. **GA4 (Analizado):** Eventos de e-commerce (`add_to_cart`, `checkout`, `purchase`) fluyendo.
4. **Search Console & FiboSearch Analytics:** Términos de búsqueda orgánicos y de catálogo interno.

---

## Lo que sabemos del posicionamiento (Según Cuestionario)

- **Diferenciador:** Catálogo grande, curado, crecimiento continuo, precios competitivos.
- **Tono deseado:** "Minimalista pero cercano. Que dé confianza".
- **Referentes visuales reales:** taschen.com/es/ y villegaseditores.com. Recyclivre es un referente funcional, no visual.
- **Logo actual:** Vendedor ambulante de la Edad Media. Les gusta el concepto pero les parece plano y necesita rediseño profesional. Hubo un experimento fallido de cambiarlo a una "I" que confundió a los clientes.
- **Barrera de conversión:** Clientes dudan por primera vez por ser tienda pequeña, preguntan mucho por reseñas.

---

## Deuda técnica abierta y bloqueos

- **Tiempo Operativo:** Laura y Carlos trabajan 12 horas al día en operaciones (empacar, limpiar, catalogar). No tienen tiempo para redactar correos manuales ni hacer marketing de contenidos profundo. Todo lo que se diseñe debe ser automatizable o con muy baja fricción de mantenimiento.
- Typos en checkout: "Order noes", "Your order" en inglés
- Cupón visible en checkout sin contexto
- Páginas basura indexadas por Google
- UAE (Ultimate Addons Elementor) instalado sin decisión
- YayMail: No instalado (versión gratuita es suficiente, pendiente instalar en Staging)

---

## Próximo paso recomendado (orden de impacto)

1. **Completar Auditoría de Branding** — analizar Taschen y Villegas para destilar el estilo visual "clásico y minimalista".
2. **Corrección de Rendimiento y Errores JS** — Clarity muestra 1.056 *sesiones* con errores (no errores individuales). ~30% son ruido de bots o del navegador interno de Facebook (`java object is gone`, `Script error`). Los errores accionables son `textcontent` y `value` — diagnosticar antes de intervenir.
3. **Reseñas de la tienda** (no de cada producto) — Solucionar la barrera de confianza. Sistema: Google Business Profile + solicitud automática post-pedido. Ver ADR-014.

---

## Preguntas abiertas para Claude

- ¿Hay algún error lógico en el orden de prioridades propuesto considerando la falta severa de tiempo de los fundadores?
- Dada la caída del 38% por un baneo en Instagram, ¿qué estrategia de retención recomiendas para dejar de depender 100% de la pauta? (Sabiendo que tienen 5.000 emails sin usar pero no tienen tiempo para escribir newsletters).
- ¿Cómo conciliamos un diseño tipo Taschen/Villegas (muy limpio/premium) con el catálogo de usados (que naturalmente tiene portadas dispares y fotos no de estudio)?
- ¿Qué datos exactos priorizarías en el análisis de Clarity para desbloquear el rediseño?
