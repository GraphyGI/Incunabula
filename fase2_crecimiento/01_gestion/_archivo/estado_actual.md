# ESTADO ACTUAL — Incunabula Fase 2
**Propósito:** Documento vivo que captura el estado real del proyecto al cierre de cada sesión. Es la primera fuente que debe leer el agente al iniciar un nuevo chat cuando el usuario diga "continuemos" o similar.

**Última actualización:** 15 Septiembre 2026  
**Actualizado por:** Jordan Marles (sesión de organización documental)

---

## ¿Dónde estamos exactamente?

**Sesión más reciente:** Sesión 003 — 17 Septiembre 2026 (Cierre)  
**Próximo paso inmediato (MAÑANA):** 
1. Activar los correos de carrito abandonado 1 y 2 (texto plano, no dependen de diseño).
2. **Definir el Sistema de Diseño / Manual de Marca Digital** (colores HEX, tipografías) antes de instalar YayMail o tocar Elementor, para evitar retrabajos.

---

## Estado real del backlog (referencia rápida — backlog.md actualizado Sep 17)

| # | Tarea | Estado real |
|:--|:------|:------------|
| 1 | Update Database en Cart Abandonment Recovery | ✅ Completado (Sep 8) |
| 2 | Switch to New UI en Cart Abandonment Recovery | ✅ Completado (Sep 8) |
| 3 | Diagnosticar por qué no salen los correos | ✅ Resuelto: plantillas estaban inactivas |
| 4 | Plantillas de correo de carrito abandonado | ⚠️ **PARCIAL** — Correos 1 y 2 (sin cupón) se pueden activar YA. Solo el Correo 3 (con cupón 10%) espera respuesta de Laura sobre el porcentaje |
| 21 | Google Search Console verificado | ✅ Completado (Sep 8) |
| 22 | Acceso de Laura en Search Console | ✅ Completado (Sep 8) |
| 26 | Microsoft Clarity instalado | ✅ Completado (Sep 8) vía Code Snippets |

---

## Decisiones pendientes de Laura

| Decisión | Bloqueado desde | Consecuencia si no llega |
|:---------|:----------------|:-------------------------|
| Porcentaje de descuento para 3er correo de carrito abandonado (propuesta: 10%) | 8 Sep 2026 | El 3er correo sigue inactivo, pero los 2 primeros pueden activarse sin esperar |
| Visibilidad del cupón `comprasmayores` ($150k) en checkout | 8 Sep 2026 | Sigue visible para todos los usuarios (fricción activa) |

---

## Hallazgos técnicos sin documentar en los archivos base

Estos datos surgieron después de crear los documentos de contexto. Ya están en `stack_tecnico.md` y `backlog.md`, pero se repiten aquí para carga rápida:

### ACF — Deuda de verificación activa
En Fase 1 se eliminó la versión pirata de ACF Pro. Ahora aparece `Advanced Custom Fields 6.8.4`. **Nadie ha confirmado si es la versión gratuita oficial o si Laura/socio reinstalaron una Pro con licencia legítima.** Verificar antes de diseñar con campos personalizados.

### UAE — Riesgo arquitectural para el rediseño
El equipo de Laura instaló autónomamente `Ultimate Addons para Elementor (UAE)`. Agrava el bloat de performance del sitio (TTFB ya era 2.7s en móvil con Elementor Pro + Bookory). **Antes de diseñar con Elementor, hay que decidir si UAE se queda o se elimina.** Si se diseña con sus widgets y luego se elimina, el diseño se rompe.

### WP All Import Pro — Impacto en cambios de atributos
El catálogo de ~15k libros se gestiona mediante importaciones CSV/XML con WP All Import Pro (suite de 4 plugins). Cualquier cambio en la estructura de atributos del producto (ej: añadir campo "estado del libro") debe contemplar cómo impacta en esos archivos de importación. No hacer cambios de estructura de productos sin consultar este punto.

### GA4 — Sin e-commerce tracking (ciego total)
El tag de GA4 (`G-T6HQ91YF6P`) está inyectado vía Elementor Pro Custom Code (ADR-002), pero el revenue en GA4 registra $0. No hay eventos `purchase`, `add_to_cart` ni `begin_checkout`. Todas las métricas de conversión actuales son ciegas. **Es prioridad configurar esto antes del rediseño**, porque sin tracking no se puede medir si el rediseño mejora ventas.

### Tráfico bot en GA4
Los 50k usuarios activos reportados están inflados. Singapur (11k sesiones) y China (3.1k) son tráfico bot que no interactúa con la tienda. Tráfico real estimado: ~36k. Los filtros de IP en GA4 deben aplicarse antes de tomar decisiones de marketing basadas en esos datos.

### Correos transaccionales YayMail
Solo 1 de las ~20 plantillas de YayMail tiene branding activo. Los correos sin branding (nuevo pedido, pedido completado, recuperación de contraseña) son la primera impresión post-compra. Es un entregable comprometido en el Paquete Completo y está completamente sin iniciar.

### DMARC — Listo para escalar
El DMARC está configurado en `p=none` desde Fase 1 intencionalmente (para monitoreo sin bloqueo). Ahora hay suficiente historial de envíos legítimos en Brevo (más de 4-6 semanas). Se puede escalar a `p=quarantine`.

---

## Deuda técnica de Fase 1 aún abierta

Estos ítems cerraron Fase 1 sin resolver y no están en el backlog de Fase 2 actualmente:

| Ítem | Impacto |
|:-----|:--------|
| Typos en checkout: "Order noes", "Your order" en inglés | Credibilidad |
| Cupón "15% Cart discount" visible en el aviso del checkout sin contexto | Confusión del usuario |
| Páginas basura: "Sample Page", "Icons", duplicados en inglés | URLs basura en sitemap |
| Sitemap de RankMath sin limpiar (CPTs basura: jet-woo-builder, elementor-hf, etc.) | Google indexa URLs vacías |

> **Acción recomendada:** Agregar estos 4 ítems al backlog de Fase 2 con prioridad 🟡 Media.

---

## Orden de ejecución recomendado (próximas 2 semanas)

### Semana 1
1. Activar correos 1 y 2 de carrito abandonado (no bloquear por el 3ro)
2. Configurar GA4 e-commerce tracking (sin esto, todo es ciego)
3. Verificar ACF: ¿gratuito o Pro con licencia?

### Semana 2
4. Diseñar plantillas YayMail con branding (20 correos transaccionales)
5. Decidir sobre UAE antes de tocar Elementor
6. Escalar DMARC a `p=quarantine`
7. Actualizar WooCommerce 11.0 en Staging y probar

---

## Cosas pendientes de definir o verificar

| # | Qué falta | Dónde se resuelve |
|:--|:---------|:------------------|
| 1 | Respuesta de Laura sobre cupón del 3er correo (10%?) | WhatsApp/Email con Laura |
| 2 | Respuesta de Laura sobre cupón `comprasmayores` en checkout | WhatsApp/Email con Laura |
| 3 | Confirmar versión y licencia de ACF 6.8.4 | wp-admin → Plugins |
| 4 | Confirmar si YayMail está instalado y activo o fue eliminado | wp-admin → Plugins |
| 5 | Confirmar si WPForms fue eliminado o reemplazado | wp-admin → Plugins |
| 6 | Definir si UAE se queda o se elimina antes del rediseño | Decisión Jordan + Laura |
| 7 | PageSpeed score actualizado post-LiteSpeed | pagespeed.web.dev |
| 8 | Términos de búsqueda reales del catálogo | Panel FiboSearch Analytics |
| 9 | Deuda técnica F1 (typos, páginas basura, sitemap) — agregar al backlog | Backlog |
