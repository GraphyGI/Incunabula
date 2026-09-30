# BACKLOG — Fase 2: Crecimiento Incunabula
**Última actualización:** Septiembre 15, 2026  
**Sistema de prioridad:** 🔴 Bloqueante · 🟠 Urgente · 🟡 Alta · 🟢 Normal · ⚪ Backlog

---

## 🔴 BLOQUEANTES / URGENTES (pérdida activa de ingresos)

| # | Tarea | Área | Notas |
|:--|:------|:-----|:------|
| 1 | Ejecutar "Update Database" en Cart Abandonment Recovery | Técnico/Correos | ✅ Completado (Sep 8) |
| 2 | Ejecutar "Switch to New UI" en Cart Abandonment Recovery | Técnico/Correos | ✅ Completado (Sep 8) |
| 3 | Diagnosticar por qué no salen los correos de carrito abandonado | Técnico/Correos | ✅ Resuelto: plantillas estaban inactivas (Sep 8) |
| 4 | Activar correos 1 y 2 de carrito abandonado (sin cupón) | Técnico/Correos | 🔴 Hacer ya — no dependen de Laura |
| 4b | Configurar 3er correo de carrito con cupón descuento | Técnico/Correos | ⏳ En pausa — esperando decisión de Laura sobre % de descuento |
| 5 | Automatizar cupón $150k y visibilidad en checkout | Técnico/Cupones | ⏳ En pausa esperando decisión de Laura |

---

## 🟠 ALTA PRIORIDAD (Paquete Completo — entregables core)

### Correos y Automatización
| # | Tarea | Área |
|:--|:------|:-----|
| 5b | Revisar textos y lenguaje de los correos nativos actuales (mientras se define branding) | Técnico/Correos |
| 6 | Diseñar plantillas YayMail con branding Incunabula (20 plantillas) | Técnico/Correos |
| 7 | Activar y personalizar: Nuevo pedido, Pedido completado, Pedido cancelado | Técnico/Correos |
| 8 | Activar y personalizar: Correo de nueva cuenta, Recuperación de contraseña | Técnico/Correos |
| 9 | Probar entregabilidad de todos los correos activados | Técnico/Correos |

### GA4 E-commerce Tracking
| # | Tarea | Área |
|:--|:------|:-----|
| 10 | Configurar eventos de compra en GA4 (purchase, add_to_cart, begin_checkout) | Técnico/GA4 | ✅ Completado (Sep 17) |
| 11 | Verificar que GA4 registre ingresos reales (actualmente: $0) | Técnico/GA4 | ⏳ En espera (procesamiento 24-48h) |
| 12 | Configurar funnel de conversión en GA4 | Técnico/GA4 |
| 13 | Filtrar tráfico bot (Singapur/China) en GA4 | Técnico/GA4 |

### Rediseño Elementor
| # | Tarea | Área |
|:--|:------|:-----|
| 14 | Definir wireframes de páginas clave: Home, Catálogo, PDP, Checkout | Técnico/Rediseño |
| 15 | Aplicar Sistema de Diseño Incunabula (colores, tipografía) a toda la tienda | Técnico/Rediseño |
| 16 | Rediseñar página de producto individual (PDP) — botón comprar, reseñas, sellos | Técnico/Rediseño |
| 17 | Rediseñar Homepage con identidad de marca | Técnico/Rediseño |
| 18 | Rediseñar página de catálogo y páginas de categoría | Técnico/Rediseño |
| 19 | Optimizar versión móvil de todas las páginas | Técnico/Rediseño |
| 20 | Crear Manual de Marca digital | Técnico/Rediseño |

### SEO y Rendimiento (Core Web Vitals)
| # | Tarea | Área | Notas |
|:--|:------|:-----|:------|
| 20b | Resolver alerta Search Console: "Soft 404" reportado por Laura | Técnico/SEO | ✅ Resuelto (Sep 17) |
| 20c | Optimizar LCP (>4s en móvil) en páginas de producto (PDP) | Técnico/Rendimiento| 🔴 LCP Pobre reportado en Search Console |
| 21 | Conectar Google Search Console y verificar dominio | Técnico/SEO | ✅ Completado (Sep 8) |
| 22 | Dar acceso a Laura en Search Console | Técnico/SEO | ✅ Completado (Sep 8) |
| 23 | Revisar términos de búsqueda en FiboSearch Analytics | Técnico/SEO | |
| 24 | Implementar datos estructurados (Schema) en PDPs | Técnico/SEO | |
| 25 | Optimizar meta descriptions y títulos de categorías clave | Técnico/SEO | |

---

## 🟡 PRIORIDAD MEDIA (mejoras técnicas y seguridad pendientes de F1)

| # | Tarea | Área | Origen |
|:--|:------|:-----|:-------|
| 26 | Instalar Microsoft Clarity (heatmaps gratuito) | Técnico/Analytics | ✅ Completado (Sep 8) |
| 27 | Instalar WP 2FA para cuentas de Admin y Shop Manager | Técnico/Seguridad | Pendiente F1 |
| 28 | Escalar DMARC de `p=none` a `p=quarantine` | Técnico/Seguridad | Pendiente F1 |
| 29 | Agregar headers HTTP (CSP, HSTS, X-Content-Type-Options) en `.htaccess` | Técnico/Seguridad | Pendiente F1 |
| 30 | Rotar API Key de Brevo | Técnico/Seguridad | Pendiente F1 |
| 31 | Verificar ACF: ¿es versión gratuita o Pro con licencia legítima? | Técnico/Plugins | Alerta F2 |
| 32 | Evaluar impacto de UAE (Ultimate Addons for Elementor) en performance | Técnico/Performance | Alerta F2 |
| 33 | Actualizar WooCommerce 11.0 en Staging primero, luego producción | Técnico/Actualizaciones | ⚠️ Versión mayor |

---

## 🟢 PRIORIDAD NORMAL (crecimiento)

| # | Tarea | Área |
|:--|:------|:-----|
| 34 | Ejecutar primer PageSpeed post-optimizaciones para medir TTFB | Performance |
| 35 | Crear primer reporte mensual para Laura | Reportes |
| 36 | Definir estrategia de email marketing (primera campaña a 4.847 clientes) | Marketing |
| 37 | Establecer calendario editorial de contenido para redes sociales | Marketing |
| 38 | Revisar y optimizar Google Ads con datos de GA4 | Marketing |
| 39 | Configurar Gift Cards con branding Incunabula (PW Gift Cards) | Técnico |

---

## ⚪ BACKLOG / FUTURO

| # | Tarea | Área |
|:--|:------|:-----|
| 40 | Evaluar cambio de tema Bookory por Astra/GeneratePress (TTFB: 2.7s → 0.5s) | Performance |
| 41 | Integrar Instagram Shopping / Facebook Shop | Marketing |
| 42 | Configurar Google Tag Manager si el tracking crece en complejidad | Técnico |
| 43 | Probar restauración de backup de Hostinger | Técnico/Seguridad |

---

## ⚪ DEUDA TÉCNICA FASE 1 (sin resolver, no estaba en backlog)

| # | Tarea | Área | Impacto |
|:--|:------|:-----|:--------|
| D1 | Corregir typos en checkout: "Order noes", "Your order" (en inglés) | Técnico/UX | Credibilidad |
| D2 | Cupón "15% Cart discount" visible en aviso superior del checkout sin contexto | Técnico/Cupones | Confusión del usuario |
| D3 | Eliminar páginas basura: "Sample Page", "Icons", duplicados en inglés | Técnico/SEO | URLs basura en sitemap |
| D4 | Limpiar sitemap de RankMath (CPTs: jet-woo-builder, elementor-hf, etc.) | Técnico/SEO | Google indexa URLs vacías |

---

## Completados en esta fase

| # | Tarea | Fecha |
|:--|:------|:------|
| 1 | Ejecutar Update Database en Cart Abandonment Recovery | Sep 8, 2026 |
| 2 | Switch to New UI en Cart Abandonment Recovery | Sep 8, 2026 |
| 3 | Diagnosticar correos de carrito abandonado | Sep 8, 2026 |
| 21 | Conectar Google Search Console y verificar dominio | Sep 8, 2026 |
| 22 | Dar acceso a Laura en Search Console | Sep 8, 2026 |
| 26 | Instalar Microsoft Clarity | Sep 8, 2026 |
