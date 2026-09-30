# REGISTRO DE DECISIONES — Fase 2: Crecimiento Incunabula
Cada decisión técnica o comercial significativa se registra aquí con su razonamiento.
**Formato:** ADR (Architecture/Action Decision Record)

---

## ADR-001 — Archivar Fase 1, no fusionar con Fase 2
**Fecha:** 7 Sep 2026  
**Decisión:** Todo lo de la Fase 1 (Rescate Técnico) va a `_fase1_rescate_tecnico/`, no se mezcla con la documentación activa.  
**Razón:** Mantener el contexto de trabajo actual limpio. La Fase 1 es archivo histórico, no documentación viva.  
**Consecuencia:** Para consultar decisiones técnicas del rescate, se busca en `_fase1_rescate_tecnico/cierre_proyecto/bitacora_procesos.md`.

---

## ADR-002 — No reinstalar Site Kit by Google para GA4
**Fecha:** Junio 2026 (heredado de F1)  
**Decisión:** El tag de GA4 se mantiene inyectado vía Elementor Pro > Custom Code, no via plugin Site Kit.  
**Razón:** Site Kit agrega carga a la base de datos y lentifica el panel de administración. La inyección directa es más ligera.  
**Consecuencia:** Para agregar eventos de e-commerce, se hace via código personalizado o Google Tag Manager.

---

## ADR-003 — Cart Abandonment emails: configurar antes de YayMail
**Fecha:** 7 Sep 2026  
**Decisión:** Priorizar la configuración del plugin WC Cart Abandonment Recovery (correos de carrito abandonado) sobre las plantillas de YayMail.  
**Razón:** Los carritos abandonados generan pérdida directa de ingresos medible ($8.5M COP recuperados históricamente). YayMail es branding, no conversión directa.  
**Consecuencia:** Primera semana de trabajo se enfoca en correos de recuperación de carritos.

---

## ADR-004 — Filtros de catálogo: Opción B (widgets clásicos WooCommerce)
**Fecha:** Mayo–Junio 2026 (heredado de F1, documentado Sep 2026)  
**Decisión:** Los filtros del catálogo usan widgets nativos/clásicos de WordPress-WooCommerce en la barra lateral (Categorías de producto, Filtrar por precio, Filtrar por atributo), NO el widget nativo moderno `Taxonomy Filter` de Elementor Pro.  
**Razón:** El `Taxonomy Filter` de Elementor Pro solo es compatible con el widget `Loop Grid` (Cuadrícula de bucle). Cambiar al Loop Grid hubiera requerido rediseñar desde cero la tarjeta de cada libro. Los widgets clásicos son compatibles con el widget existente `Archive Products` sin necesidad de rediseño.  
**Consecuencia:** Si en el futuro se hace un rediseño del catálogo usando Loop Grid, los widgets de filtro deberán ser reemplazados por `Taxonomy Filter` nativo de Elementor Pro.

---

## ADR-005 — Despliegue a producción: réplica manual, nunca overwrite de BD
**Fecha:** Mayo 2026 (heredado de F1, documentado Sep 2026)  
**Decisión:** Cualquier cambio de Staging a Producción se hace mediante réplica manual controlada (exportar plantillas JSON de Elementor, replicar configuraciones en wp-admin en vivo). Nunca se sobrescribe la base de datos de Staging sobre Producción.  
**Razón:** La tienda opera en producción con ventas reales en tiempo real. Sobrescribir la BD de Staging borraría pedidos, clientes y datos de compra acumulados desde la última clonación.  
**Consecuencia:** Cada cambio de Staging a Producción requiere un checklist manual de pasos específicos. Se hace en horario de bajo tráfico (11 PM – 3 AM Colombia).

---

## ADR-006 — Cupón `comprasmayores`: 15% para compras > $150.000
**Fecha:** 8 Sep 2026 | **Corregido:** 28 Sep 2026  
**Decisión:** El cupón `comprasmayores` aplica un **15% de descuento en compras mayores a $150.000 COP**. Aparece visible para TODOS los usuarios en el checkout sin explicar la condición mínima, lo que genera confusión. Se propuso a Laura: (1) automatizarlo con Smart Coupons y ocultarlo del checkout, (2) usarlo solo como correo 3 de carrito abandonado.  
**Estado:** ⏳ Pendiente decisión de Laura sobre visibilidad.  
**⚠️ Error corregido:** El documento previo decía "$150.000 de descuento". El dato correcto (confirmado por chat de WhatsApp del 8 Sep) es 15% de descuento con mínimo de $150.000.  
**Pendiente activo:** Verificar si Simple Discount Rules (15% automático) y el cupón del correo 3 (10%) se acumulan. Si acumulan = 25% involuntario sobre compras > $150k.

---

<!-- Nuevas decisiones debajo de esta línea -->

## ADR-007 — GA4 E-commerce Tracking (Plugin oficial vs GTM)
**Fecha:** 17 Sep 2026  
**Decisión:** Utilizar el plugin oficial `WooCommerce Google Analytics Integration` (Opción A) en lugar de GTM4WP (Opción B) para trackear eventos de comercio electrónico. Se debe eliminar el tag manual de Elementor Custom Code (previa inspección minuciosa de no borrar otros scripts allí).  
**Razón:** Mantener el sitio lo más ligero posible y respetar el espíritu del ADR-002 (evitar bloat). El plugin oficial no requiere configuración de dataLayers y cubre todo el ciclo (`view_item`, `add_to_cart`, `begin_checkout`, `purchase`). GTM4WP queda documentado como plan B o para cuando se escale a pauta publicitaria multiplataforma (Meta/TikTok).  
**Consecuencia:** El tag `G-T6HQ91YF6P` migrará del custom code de Elementor al nuevo plugin.

---

## ADR-008 — Estrategia "Batching" para entornos de Staging
**Fecha:** 17 Sep 2026  
**Decisión:** No se crearán entornos de Staging para aplicar cambios pequeños e inconexos (piecemeal). Todo el trabajo técnico, de rediseño y actualizaciones se planifica teóricamente primero. Una vez listo un bloque completo de trabajo, se clona Staging, se ejecuta el "batch", se prueba integralmente y se replica a Producción rápidamente.  
**Razón:** Como Producción está vivo y no se puede sobrescribir BD desde Staging (ADR-005), cualquier cambio en Staging debe replicarse manualmente a Producción. Aplicar cambios uno a uno multiplica el trabajo manual de despliegue y el riesgo de desincronización entre bases de datos.  
**Consecuencia:** El trabajo actual (Correos de Carrito, GA4 Tracking, Actualizaciones de Plugins) se planificará al 100% en documentos antes de crear la próxima instancia de Staging.

---

## ADR-009 — Directriz Estricta: Especificación Obligatoria de Entorno
**Fecha:** 17 Sep 2026  
**Decisión:** A partir de este momento, es una regla de estricto cumplimiento para el agente especificar en MAYÚSCULAS y NEGRITA el entorno en el que se debe ejecutar cualquier acción técnica solicitada al usuario. **Jamás se entregará una instrucción sin declarar explícitamente si va para PRODUCCIÓN o para STAGING (Desarrollo).**  
**Razón:** Mitigar al 100% el error humano de aplicar cambios comerciales críticos en el entorno de pruebas (donde se invalidan herramientas como SMTP por filtros anti-spoofing) o, peor aún, aplicar pruebas destructivas en el sitio en vivo.  
**Consecuencia:** Toda instrucción paso a paso comenzará con la frase: "EJECUTAR EN: [ENTORNO]". Si es en STAGING, se incluirá además un recordatorio de por qué se hace allí.

---

## ADR-010 — Directriz Estricta: Verificación Explícita antes de Avanzar
**Fecha:** 17 Sep 2026  
**Decisión:** El agente tiene estrictamente prohibido marcar una tarea como completada en `task.md` o avanzar a la siguiente fase del plan sin haber preguntado y recibido confirmación explícita (o evidencia visual) del usuario de que **todos y cada uno** de los pasos de la tarea actual fueron ejecutados.  
**Razón:** Asumir que el usuario completó pasos no supervisados genera saltos al vacío y posibles configuraciones incompletas (ej: asumir que el Correo 2 se configuró solo por haber probado el Correo 1).  
**Consecuencia:** El agente debe auditar cada paso. Si un bloque tiene 3 subtareas, el agente debe validar las 3 explícitamente antes de cerrar el bloque.

---

## ADR-011 — Directriz Estricta: Delegación de Tareas Ineficientes
**Fecha:** 17 Sep 2026  
**Decisión:** Si el agente no puede realizar una acción de manera directa, eficiente y económica en tokens (ej: acceder a un sitio web externo, extraer contenido visual, leer un panel de administración), debe **delegar inmediatamente la tarea al usuario** en lugar de reintentar múltiples veces o gastar recursos computacionales en bucles fallidos.  
**Razón:** Un solo pantallazo del usuario resuelve en 5 segundos lo que el agente no puede resolver en 6 intentos fallidos. El gasto de tokens es un recurso finito y debe tratarse con responsabilidad.  
**Consecuencia:** Antes de intentar acceder a recursos externos, el agente debe evaluar: "¿Es más rápido y barato pedirle esto al usuario?". Si la respuesta es sí, se delega sin intentar primero.

---

## ADR-012 — Inicio oficial del contrato y cronograma con fechas
**Fecha:** 28 Sep 2026  
**Decisión:** El inicio oficial del contrato de Fase 2 es el **14 de Septiembre de 2026** (primer día hábil después del pago de la Cuota 1 el 13-14 Sep).

| Módulo | Período | Vencimiento |
|:--|:--|:--|
| A. Correos YayMail (Hito 1) | Semanas 1–2 | 27 Sep 2026 |
| B. GA4 completado (Hito 1) | Semanas 2–3 | 4 Oct 2026 |
| C. Rediseño Elementor (Hito 2) | Semanas 5–8 | 8 Nov 2026 |
| D. Manual de marca PDF | Semanas 9–10 | 22 Nov 2026 |
| E. SEO técnico | Semanas 9–10 | 22 Nov 2026 |

**Razón:** Tener fechas reales permite medir atraso real vs. percibido, y priorizar correctamente.

---

## ADR-013 — Prioridad según hitos de pago del contrato
**Fecha:** 28 Sep 2026  
**Decisión:** El orden de trabajo sigue los hitos del contrato que liberan cuotas de pago, no la urgencia percibida ni el impacto técnico aislado.  
**Razón:** Lo que frena el avance del proyecto es que el Hito 1 (correos YayMail + GA4 verificado) no está completo, y sin él no se libera la Cuota 2 ($2.300.000).  
**Consecuencia:** Cualquier tarea que no esté en el módulo contractual vigente pasa a backlog hasta que el módulo actual esté cerrado.

---

## ADR-014 — Reseñas de la tienda, no de cada producto
**Fecha:** 28 Sep 2026  
**Decisión:** El sistema de reseñas de Incunabula debe implementarse a nivel de **tienda** (Google Business Profile), no de producto individual.  
**Razón:** Incunabula vende libros usados de ejemplar único. Cada libro se vende una sola vez, así que las reseñas por producto quedarían vacías o con una sola entrada. Cero estrellas en un PDP es una señal negativa. Las reseñas de tienda acumulan confianza general y son más fáciles de solicitar automáticamente post-pedido.  
**Consecuencia:** El flujo de solicitud de reseña va en el correo post-compra (7 días después del pedido completado), redirigiendo al perfil de Google Business Profile.

---

## ADR-015 — Dirección de arte: "editorial accesible" (pendiente de aprobación)
**Fecha:** 28 Sep 2026  
**Decisión:** La dirección de arte propuesta es **"editorial accesible"**: tipografía y espaciado de Taschen, claridad de precio y estado del libro de Recyclivre, sin llegar a parecer una editorial premium que confunda sobre los precios.  
**Razón:** El riesgo de imitar demasiado a Taschen es que la tienda parezca cara, chocando con el diferenciador declarado de precio bajo. La diferencia es el *sistema* de diseño (coherencia, espacio, tipografía), no el lujo visual.  
**Estado:** Propuesta. Requiere aprobación de Laura via Tokens v0.  
**Consecuencia:** Sin aprobación de Laura, no se aplica esta dirección a ningún entregable.

---

## ADR-016 — Rediseño de logo como bonificación dentro del contrato
**Fecha:** 28 Sep 2026  
**Decisión:** El rediseño del logo se incluye como bonificación sin costo adicional dentro del contrato de Fase 2.  
**Alcance exacto:** Concepto basado en la ilustración actual del vendedor ambulante renacentista.  
**Entregables:** 2 versiones (horizontal con texto + isotipo solo) · 2 rondas de ajustes.  
**Razón:** El logo es necesario para YayMail, Elementor y el Manual de Marca. La tote bag de Incunabula es el 2º producto más vendido — la marca tiene valor comercial como objeto.  
**No incluye:** Ilustración desde cero, nueva identidad visual completa ni vectorización profesional de terceros.  
**Pendiente:** Confirmación formal de Laura por escrito (protege a ambas partes).

---

## ADR-017 — Campañas de email y retención: fuera de Fase 2
**Fecha:** 28 Sep 2026  
**Decisión:** Las campañas de email marketing y estrategia de retención están **fuera del alcance del contrato de Fase 2** (Anexo 1 excluye "campañas de marketing").  
**Acción:** Proponer como servicio adicional permanente (email marketing + consultoría mercadológica/publicitaria) con propuesta comercial y otrosí.  
**Requisitos previos para cualquier campaña:**
- Autorización Ley 1581 de 2012 (el checkout actualmente NO tiene casilla de consentimiento)
- Limpieza de base de 4.847 clientes antes del primer envío
- Envío desde subdominio (ej: `news.incunabula.co`) para proteger reputación del dominio principal  
**Lo que SÍ va en Fase 2:** Casilla de autorización en el checkout (campo opcional, sin marcar), para construir base autorizada desde hoy.

---

## ADR-018 — Imágenes: optimización masiva sin edición manual
**Fecha:** 28 Sep 2026  
**Decisión:** Los 6.457 productos en stock se optimizan con LiteSpeed Cache + QUIC.cloud (conversión WebP en lote). No se edita foto por foto ni se usan herramientas de IA para quitar fondos en lote.  
**Razón:** Con 21.735 productos totales y 6.457 en stock, la edición manual o por IA es cara e irregular. LiteSpeed ya está instalado y tiene esta función. El marco visual uniforme (tarjeta 2:3 con fondo pergamino) se logra con CSS en Elementor, no con edición de imagen.  
**Precondiciones:** Verificar cuota gratuita de QUIC.cloud y espacio en disco. Hacer respaldo. Ejecutar primero en STAGING.  
**Excepción:** Para libros destacados o de alta pauta activa, se puede considerar remoción de fondo con IA caso a caso.
