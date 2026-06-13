# VEREDICTO SOBRE AUDITORÍA EXTERNA — INCUNABULA.CO
**Fecha:** 27 mayo 2026  
**Contexto:** Se recibió una auditoría externa de 21 hallazgos. Este documento clasifica cada uno con honestidad brutal.

---

## RESUMEN EJECUTIVO

La auditoría es **técnicamente correcta en un ~85%**. Sin embargo, mezcla problemas reales con tareas que ya fueron resueltas y con optimizaciones que están fuera del alcance contractual ($3.5M COP / estabilización).

**Clasificación final de los 21 hallazgos:**
- ✅ **Ya resueltos (7):** #1, #3, #9, #10, #16, parcialmente #7, parcialmente #14
- 🔴 **Hacer ANTES del empalme (3):** #14 (formal), #17, #19 (GA4)
- 🟡 **Hacer DURANTE el empalme (3):** #2 (Redis), #12 (XML-RPC), #13 (2FA)
- 📋 **Backlog post-lanzamiento (8):** #4, #5, #6, #8, #11, #15, #18, #20

---

## VEREDICTO POR HALLAZGO

### ✅ YA RESUELTOS

| # | Hallazgo | Estado Real |
|---|----------|-------------|
| 1 | LiteSpeed Cache en defaults | **RESUELTO en Proceso 2.9.9.** URIs excluidas (`/carrito/`, `/checkout/`, `/mi-cuenta/`), cookies excluidas (`wp_woocommerce_session_*`, `woocommerce_cart_hash`, `woocommerce_items_in_cart`). |
| 3 | Staging con llaves Wompi de producción | **RESUELTO en Proceso 6.0.2.** Se configuró de forma segura e independiente el entorno de staging. |
| 9 | WP_DEBUG en producción no verificado | **RESUELTO en Proceso 6.0.2.** Confirmado `WP_DEBUG = false` en `wp-config.php` de producción y logs residuales eliminados. |
| 10 | Staging accesible públicamente | **RESUELTO en Proceso 6.0.2.** Directorio `/desarrollo/` protegido con contraseña en hPanel. |
| 16 | Free Shipping Bar inconsistencia | **RESUELTO en Proceso 5.3.1.** Plugin VillaTheme desactivado. Umbral unificado a $100k COP. |
| 7 | Core Web Vitals nunca medidos | **PARCIALMENTE RESUELTO.** Se ejecutó PageSpeed en producción y staging (resultados pendientes de Jordan). Se creó `plan_metricas_simples.md`. |
| 14 | debug.log nunca revisado | **PARCIALMENTE RESUELTO.** Jordan envió el debug.log actual. Resultado: 0 Fatal Errors. Solo Notices y Deprecated (inofensivos). Falta recorrido completo formal en staging. |

---

### 🔴 HACER ANTES DEL EMPALME (Crítico)

#### #14 — Verificación formal de debug.log post-limpieza
- **Veredicto: CORRECTO que falta la verificación formal.**
- **Acción:** En staging: activar WP_DEBUG, recorrer Home → Categoría → Producto → Carrito → Checkout, revisar el log nuevo. Comparar con baseline de 41.375 líneas.
- **Tiempo:** 30 minutos.

#### #17 — Empalme sin protocolo específico
- **Veredicto: CORRECTO Y CRÍTICO.** El checklist actual es genérico. Necesita ser paso a paso.
- **Acción:** Crear checklist exhaustivo de empalme (ver sección dedicada abajo).
- **Tiempo:** 60 minutos de documentación.

#### #19 — GA4 ausente
- **Veredicto: CORRECTO.** Cada día sin GA4 es datos perdidos para siempre.
- **Acción:** Inyectar script de GA4 vía Elementor Custom Code ANTES del empalme.
- **Tiempo:** 30 minutos (incluye verificación en HTML fuente).

---

### 🟡 HACER DURANTE EL EMPALME (Aprovechando la ventana)

#### #2 — Redis desconectado
- **Veredicto: CORRECTO pero NO es "Crítico".** Es una optimización de rendimiento. El sitio funciona sin Redis. Se vuelve crítico solo con tráfico alto (campañas, Black Friday).
- **Acción durante empalme:** En LiteSpeed Cache → Object Cache, activar Redis y confirmar "Connected". Verificar que `wp-content/object-cache.php` existe.
- **Tiempo:** 10 minutos.

#### #12 — XML-RPC y superficie de ataque
- **Veredicto: CORRECTO pero severidad exagerada.** Hostinger ya tiene firewall que mitiga ataques a xmlrpc.php. Es buena práctica bloquearlo, pero no es una emergencia.
- **Acción durante empalme:** Agregar regla `.htaccess` para bloquear `xmlrpc.php`. Agregar headers de seguridad básicos.
- **Tiempo:** 15 minutos.

#### #13 — WP 2FA eliminado sin reemplazo
- **Veredicto: CORRECTO.** Pero hay contexto: WP 2FA fue eliminado porque generaba conflictos. La prioridad era estabilizar, no agregar capas de autenticación.
- **Acción durante empalme:** Reinstalar WP 2FA o equivalente. Configurar para roles Administrator y Shop Manager.
- **Tiempo:** 15 minutos.

---

### 📋 BACKLOG POST-LANZAMIENTO (Documentar, no ejecutar ahora)

#### #4 — HPOS desactivado
- **Veredicto: CORRECTO pero NO urgente.** HPOS mejora rendimiento de consultas de pedidos. Con el volumen actual de Incunabula (librería local en Cali), la degradación no será perceptible hasta los 500-1000 pedidos en wp_postmeta. Activarlo ahora añade riesgo de romper plugins de pasarela (Wompi, ADDI) sin beneficio inmediato.
- **Fecha sugerida:** Mes 2-3 post-lanzamiento, en staging primero.

#### #5 — wp_options autoload no verificado
- **Veredicto: CORRECTO pero es optimización fina.** Útil pero no bloqueante.
- **Fecha sugerida:** Mes 1 post-lanzamiento.

#### #6 — Action Scheduler nunca auditado
- **Veredicto: CORRECTO.** Revisar la cola de Action Scheduler es buena práctica.
- **Fecha sugerida:** Semana 1 post-lanzamiento.

#### #8 — Elementor como sistema de inyección de tracking
- **Veredicto: PARCIALMENTE CORRECTO.** La fragilidad es real, pero la alternativa (GTM) añade otra capa de complejidad. GTM4WP ya está marcado para desactivación. La decisión actual (Elementor Custom Code) es pragmática y funciona.
- **Fecha sugerida:** Evaluar GTM cuando Laura tenga presupuesto para gestión profesional de tags.

#### #11 — DMARC p=none
- **Veredicto: CORRECTO.** La decisión de dejar `p=none` fue deliberada y cautelosa. Escalar a `p=quarantine` tras 2-4 semanas de operación estable con Brevo.
- **Fecha sugerida:** Semana 3-4 post-lanzamiento.

#### #15 — Code Snippets sin inventariar
- **Veredicto: CORRECTO.** Los snippets activos deben documentarse.
- **Fecha sugerida:** Durante el empalme, hacer captura de pantalla del listado de snippets.

#### #18 — Brevo 300 emails/día
- **Veredicto: CORRECTO pero no urgente.** Una librería local en Cali difícilmente supera 300 correos transaccionales/día en operación normal. Se vuelve relevante en campañas.
- **Fecha sugerida:** Monitorear durante mes 1. Escalar a Brevo Starter ($9 USD/mes) si se acerca al límite.

#### #20 — GTM4WP con contenedor en OFF
- **Veredicto: CORRECTO.** Desactivar en el empalme (ya estaba marcado para desactivación en nuestra tabla maestra).
- **Acción durante empalme:** Confirmar desactivación y borrar carpeta.

---

## HALLAZGOS DE LA SECCIÓN 4 (Vacíos) — CLASIFICACIÓN RÁPIDA

| # | Vacío | Veredicto | Acción |
|---|-------|-----------|--------|
| V1 | OPcache | Hostinger Cloud lo activa por defecto. No requiere acción. | Ninguna |
| V2 | Heartbeat API | Válido pero menor. No afecta al usuario final, solo al admin. | Backlog |
| V3 | woocommerce-products-without-featured-images-master | **Válido.** Verificar origen durante empalme. Si es sospechoso, borrar. | Empalme |
| V4 | WooCommerce Social Login v2.4.2 | **Válido.** Verificar CVEs y actualizar si hay nueva versión. | Empalme |
| V5 | UpdraftPlus sin prueba de restauración | **Válido.** Un backup sin prueba de restauración es ilusión de seguridad. | Post-lanzamiento |
| V6 | ADDI warnings de sesiones | **Válido.** Se confirmarán en la verificación formal de debug.log (#14). | Pre-empalme |
| V7 | Typos de checkout | **Válido y ya documentado** en `quick_wins.md`. 5 items pendientes. | Pre-empalme |
| V8 | WPForms v1.7.2.2 desactualizado | **Válido.** Actualizar en el empalme. | Empalme |
| V9 | wpDiscuz sin auditoría | **Válido.** Verificar versión y CVEs. | Empalme |
| V10 | Product Feed PRO + Google for WooCommerce | **Válido y ya documentado.** Google for WooCommerce marcado para desactivación. | Empalme |

---

## CHECKLIST DE EMPALME (Respuesta al Hallazgo #17)

> Este checklist se integrará al `plan_ejecucion.md` como el nuevo contenido de la Fase 7.

### Pre-Empalme (Antes de tocar producción)
- [ ] Backup completo de producción desde hPanel
- [ ] Captura de pantalla del listado completo de plugins en producción
- [ ] Captura de pantalla de Code Snippets activos
- [ ] Confirmar `WP_DEBUG = false` en producción
- [ ] Borrar `debug.log` de producción si existe
- [ ] Proteger `/desarrollo/` con contraseña (hPanel)
- [ ] Agregar `Disallow: /desarrollo/` al robots.txt
- [ ] Inyectar GA4 vía Elementor Custom Code en producción
- [ ] Documentar hora de inicio y notificar a Laura

### Empalme — Bloque 1: Limpieza de Plugins (Orden específico)
- [ ] Desactivar y borrar carpetas de plugins piratas/zombies (lista en `inventario_plugins.md`)
- [ ] Instalar FiboSearch Free (ya confirmado funcional)
- [ ] Actualizar WPForms a última versión
- [ ] Verificar wpDiscuz (CVEs, versión)
- [ ] Verificar `woocommerce-products-without-featured-images-master` (origen)
- [ ] Desactivar GTM4WP y borrar carpeta
- [ ] Desactivar Google for WooCommerce (conflicto con Product Feed PRO)
- [ ] Instalar WP 2FA y configurar para admins
- [ ] **Verificación intermedia:** Cargar Home, una categoría y un producto. Si hay error → parar.

### Empalme — Bloque 2: Configuraciones
- [ ] Configurar LiteSpeed Cache (exclusiones WooCommerce)
- [ ] Activar Redis en LiteSpeed Cache → Object Cache → confirmar "Connected"
- [ ] Configurar RankMath (exclusiones de sitemap, noindex en post types técnicos)
- [ ] Replicar filtros nativos de WooCommerce en sidebar de catálogo
- [ ] Replicar Custom Code de Elementor (scripts de tracking)
- [ ] Agregar regla `.htaccess` para bloquear xmlrpc.php
- [ ] Agregar headers de seguridad básicos
- [ ] **Verificación intermedia:** Agregar producto al carrito, llegar al checkout. Si hay error → parar.

### Empalme — Bloque 3: Verificación Final
- [ ] Compra de prueba con Wompi (producción real, monto mínimo)
- [ ] Verificar correo de confirmación (FluentSMTP log)
- [ ] Verificar buscador FiboSearch funciona
- [ ] Verificar filtros de tienda funcionan
- [ ] Verificar página Mi Cuenta carga correctamente
- [ ] Revisar debug.log de producción (debe estar vacío o solo con Notices)

### Post-Empalme
- [ ] Notificar a Laura que el empalme está completo
- [ ] Iniciar período de Hypercare (30 días)
- [ ] Cobrar 50% restante

---

## PRIORIDADES CONSOLIDADAS (Orden de ejecución)

| # | Tarea | Tiempo | Cuándo |
|---|-------|--------|--------|
| P1 | Proteger staging (contraseña + robots.txt) | 15 min | **HOY** |
| P2 | Verificar WP_DEBUG en producción | 10 min | **HOY** |
| P3 | Resolver typos del checkout | 30 min | **HOY** |
| P4 | Verificación formal de debug.log en staging | 30 min | **HOY** |
| P5 | Inyectar GA4 en producción | 30 min | **ANTES del empalme** |
| P6 | Crear/finalizar checklist de empalme | 30 min | **ANTES del empalme** |
| P7 | Ejecutar empalme (Fase 7 completa) | 3-4 horas | **Día del empalme** |
| P8 | UAT de Laura (Fase 8) | 1-2 horas | **Post-empalme** |

**Tiempo total restante estimado: 6-8 horas de trabajo.**

---

## LO QUE SOBRA DE LA AUDITORÍA

1. **OPcache (V1):** Hostinger lo maneja. No es nuestro problema.
2. **Heartbeat API (V2):** Afecta solo al admin. Impacto negligible para el usuario final.
3. **HPOS (#4):** Correcto pero prematuro. Activarlo ahora es riesgo innecesario por beneficio futuro.
4. **Elementor como inyector frágil (#8):** GTM no es mejor — es más complejo. La solución actual funciona.

## LO QUE FALTA Y DEBIMOS HACER

1. **Proteger el staging (#3, #10):** Debimos hacerlo desde el día 1. Error real.
2. **Verificar WP_DEBUG en producción (#9):** Oversight genuino.
3. **GA4 (#19):** Debió ir en la Fase 4. Se priorizó la estabilidad del checkout.
4. **Checklist de empalme (#17):** Correcto. "1-2 horas" fue optimista. Son 3-4 horas mínimo.
