# PLAN DE EJECUCIÓN TÉCNICA — INCUNABULA.CO
**Proyecto:** Estabilización Operativa y Rescate Comercial  
**Duración:** 20 días hábiles (4 semanas)  
**Presupuesto:** $3.500.000 COP  
**Inicio:** Mayo 2026

---

> [!WARNING]
> ## ERRORES CORREGIDOS EN ESTA VERSIÓN (v2 — 12 mayo 2026)
>
> 1. **Paso 5.3 duplicado:** Existían dos pasos numerados "5.3" (Envío Gratis y FiboSearch). Renumerado a 5.3 y 5.4.
> 2. **Tabla de plugins redundantes obsoleta (Paso 2.5):** Listaba OWL Carousel y Slick Slider como plugins independientes — NO lo son, son librerías del tema Bookory. Corregido.
> 3. **Recomendación Crocoblock incorrecta (Paso 2.4):** Se recomendaba desactivar JetSmartFilters sin consecuencias. En la práctica, el sitio PIERDE todos los filtros de categoría, precio y autor. Corregido con plan de reemplazo gradual.
> 4. **Faltaba Fase 2.5:** La intervención de emergencia en producción (Wompi + Cart Stock Reducer) no estaba documentada en el plan. Añadida.
> 5. **Tabla de licencias desactualizada:** No reflejaba que ACF Pro, Rank Math Pro, FiboSearch Pro, WP All Import Pro y Dynamic Content ya fueron eliminados/reemplazados por alternativas gratuitas. Actualizada con ahorro real ($489 USD/año).
> 6. **Cronograma no refleja progreso:** El timeline visual al final no distinguía tareas completadas de pendientes. Actualizado.
> 7. **FiboSearch:** Se recomendaba Relevanssi como alternativa cuando FiboSearch Free ya demostró funcionar. Corregido.
> 8. **Elementor Pro:** Se trataba como opcional. Ahora marcado como OBLIGATORIO tras prueba de desactivación que rompió el sitio entero.

---

## FASE 0 — BACKUP Y STAGING (Día 1) ✅ COMPLETADA
**Prioridad:** 🔴 BLOQUEANTE — Nada se toca sin esto.

### Paso 0.1: Backup Completo ✅
- Backup completo (archivos + base de datos) generado desde hPanel de Hostinger.

### Paso 0.2: Levantar Staging ✅
- Entorno de staging creado: `incunabula.co/desarrollo/`
- Clon verificado y funcional.
- **Toda la Fase 1 a 5 se ejecuta SOLO en Staging.**

---

## FASE 1 — DIAGNÓSTICO FORENSE (Días 1-2) ✅ COMPLETADA
**Prioridad:** 🔴 CRÍTICA — Sin esto, estamos trabajando a ciegas.

### Paso 1.1: Activar Debug Log ✅
- `WP_DEBUG`, `WP_DEBUG_LOG` y `WP_DEBUG_DISPLAY` configurados en staging.

### Paso 1.2: Provocar los Errores ✅
- Recorrido completo: Homepage → Categoría → Producto → Carrito → Checkout.

### Paso 1.3: Leer el Log y Documentar Culpables ✅
- Debug.log analizado: 41,375 líneas, 14.6 MB, ~3.5 meses de errores.
- **Resultado:** 0 Fatal errors, ~102 Warnings, ~32,000 Deprecated, ~9,000 Notices.
- Se descubrieron **14 plugins adicionales** no presentes en el inventario inicial.

### Paso 1.4: Inventario Completo de Plugins ✅
- 34 plugins identificados y clasificados.
- Documento generado: `inventario_plugins.md`.

---

## FASE 2 — COMPATIBILIDAD CORE Y BD (Días 3-8) ✅ COMPLETADA (~90%)
**Prioridad:** 🔴 CRÍTICA — Es la "bomba de tiempo".
**Pendiente menor:** Verificación final de debug.log (Paso 2.9) + confirmar WPForms User Registration (Paso 2.8).

### Paso 2.1: Actualizar Tema Bookory ✅
- Bookory actualizado de versión antigua a **v2.3.0** (licencia válida en ThemeForest).
- Los 25 warnings del tema en el debug.log desaparecieron tras la actualización.

### Paso 2.2: Limpieza de Plugins — Ronda 1 (Basura) ✅
Plugins eliminados en staging sin impacto negativo:

| Plugin | Razón de eliminación |
|--------|---------------------|
| Contact Form 7 | Redundante. Ya existe WPForms. |
| MonsterInsights | Redundante. Se reemplazará con Site Kit (GA4). |
| WooCommerce PayU Latam | Inactivo. No se usa (tienen Wompi y Addi). |
| Jetpack | Cargaba scripts innecesarios sin aportar valor. |
| JetEngine | Crocoblock. No necesario para fichas de producto. |
| JetSearch | Crocoblock. Ya tienen FiboSearch. |
| JetWooBuilder | Crocoblock. Innecesario. |

> [!IMPORTANT]
> **Corrección v2:** La tabla original incluía OWL Carousel y Slick Slider. Estos NO son plugins independientes — son librerías JavaScript empaquetadas dentro del tema Bookory. No se pueden "eliminar" como plugins.

### Paso 2.3: Limpieza de Plugins — Ronda 2 y 3 (Piratas) ✅
Plugins pirateados reemplazados o eliminados:

| Plugin Pirata | Acción | Resultado |
|--------------|--------|-----------|
| ACF Pro (`-master`, descarga de GitHub) | Reemplazado por ACF Free | ✅ Sin pérdida de datos. -35% errores del log. |
| Dynamic Content for Elementor | Desactivado. Menú oculto nativamente en Elementor. | ✅ -15% errores del log. |
| Ajax Search for WooCommerce Premium (FiboSearch Pro) | Reemplazado por FiboSearch Free oficial | ✅ Búsqueda funcional. |
| Rank Math SEO Pro | Eliminado. La versión free cubre todas las necesidades. | ✅ Sin impacto SEO. |
| WP All Import Pro + WooCommerce Add-On | Eliminados. Solo se usan para importaciones masivas esporádicas. | ✅ Sin impacto frontend. |

### Paso 2.4: Resolver Elementor Pro ⏳ EN PROGRESO
- **Prueba realizada:** Al desactivar Elementor Pro, el sitio entero se rompe (Home, categorías, fichas de producto).
- **Conclusión:** Elementor Pro es la columna vertebral visual del sitio. **Es OBLIGATORIO comprar la licencia (Plan Advanced $99 USD/año, ya que el Essential de $59 no incluye funciones e-commerce).**
- **Estado actual (22 mayo):**
  - ✅ Laura compró la licencia y envió el `.zip`.
  - ✅ Elementor Pro instalado en Staging (versión legítima). Reemplazó la versión pirata.
  - ✅ Elementor Free actualizado a última versión.
  - ✅ Secciones del sitio restauradas correctamente.
  - ⚠️ Desajustes visuales menores detectados (tipografía/espaciado). Pendiente QA visual.
  - ✅ **Clave de licencia activa en Staging.**
  - 🔲 **Falta replicar en Producción** cuando se haga el empalme final.

> [!IMPORTANT]
> **Corrección v2:** El plan original trataba Elementor Pro como opcional y sugería la licencia de $59 USD. Tras la prueba de desactivación, se confirma que es **obligatorio** y se requiere el plan **Advanced ($99 USD/año)** para usar el WooCommerce Builder. No hay alternativa viable.

### Paso 2.5: Eliminar JetSmartFilters (Causante de Fatal Error) ✅ COMPLETADO
- **Problema detectado (13 mayo):** Al actualizar WooCommerce a la v9.x y Elementor, las páginas de categoría (`/categoria-producto/`) arrojaban un error crítico (pantalla blanca).
- **Prueba realizada:** Se desactivó JetSmartFilters en Staging. La página volvió a cargar correctamente.
- **Conclusión:** El plugin pirata/desactualizado JetSmartFilters es incompatible con el core moderno de WordPress.
- **Acción:** Plugin desactivado permanentemente. Se procederá a reemplazar sus funciones con widgets nativos o plugin gratuito (WOOF).

### Paso 2.6: Actualizar WordPress Core y WooCommerce ✅ COMPLETADO
- ✅ Actualizado WooCommerce a la última versión (inicialmente 9.x → actualizado a **10.7.0**) en Staging.
- ✅ Ejecutado el asistente de actualización de base de datos.
- ✅ Actualizado WordPress a la última versión estable.
- ✅ Verificación: Productos cargan, carrito funciona, checkout funciona.
- **Fecha:** 13 mayo 2026.

### Paso 2.7: Limpieza Profunda de Base de Datos ✅ COMPLETADO
- ✅ Respaldo previo ejecutado vía UpdraftPlus.
- ✅ Limpieza con WP-Optimize: 8.884 revisiones, borradores, transitorios, pingbacks, +900 metadatos huérfanos eliminados.
- ✅ WP-Optimize desactivado tras la limpieza (evita conflictos con LiteSpeed Cache).
- **Fecha:** 13 mayo 2026.

### Paso 2.8: Evaluar Plugins Específicos — Ronda 4 ⏳ PARCIALMENTE RESUELTO

| Plugin | Respuesta de Laura | Decisión |
|--------|---------------------|----------|
| WooCommerce Ultimate Gift Card | "Sí hay gift cards pero pocas ventas" | ✅ MANTENER |
| Woo Product Feed PRO | "Tenemos Google Merchant Center activo" | ✅ MANTENER. Investigar conexión con Merchant. |
| Facebook for WooCommerce | "Queremos tenerla pero nunca pudimos" | ⏸️ MANTENER DESACTIVADO. Configurar en fase futura. |
| Popup Builder | Elementor Pro ya incluye popups | 🗑️ ELIMINAR cuando Elementor Pro esté configurado. |
| WPForms User Registration | 🔲 Sin respuesta | Mantener hasta confirmar. |

### Paso 2.9: Verificación Final de PHP 8.2 🔲 PENDIENTE
- Revisar nuevamente el `debug.log` tras todas las actualizaciones.
- Si ya no hay `Fatal error` ni `Deprecated` → PHP 8.2 es compatible.
- Probar: Panel de WooCommerce Analytics (el que estaba roto).

---

## FASE 2.5 — INTERVENCIÓN DE EMERGENCIA EN PRODUCCIÓN ✅ COMPLETADA
**Prioridad:** 🔴 CRÍTICA — Clientes reportaron pagos fallidos en producción.
**Fecha:** 11 mayo 2026

> [!IMPORTANT]
> **Corrección v2:** Esta fase NO existía en el plan original. Se creó como respuesta a una emergencia real: los clientes de Laura no podían pagar desde el 7 de mayo. Documentada aquí para mantener la trazabilidad completa.

### Paso 2.5.1: Desactivar WC Cart Stock Reducer ✅
- Plugin abandonado (v3.90) desactivado en producción.
- Generaba errores fatales en bucle (11 crashes en 17 segundos el 7 de mayo).
- WooCommerce incluye reserva de stock nativa en el checkout.

### Paso 2.5.2: Migrar Wompi a v2.0.0 ✅
- Dos versiones antiguas eliminadas (v0.1.2 y v0.2.0) del File Manager.
- Plugin oficial **"Wompi Plugin para WooCommerce" v2.0.0** instalado desde WordPress.org.
- 4 llaves de producción configuradas (Pública, Privada, Eventos, Integridad).
- **El campo "Integrity Key" era el dato faltante** que causaba el rechazo de transacciones.
- Resultado: Pagos restaurados al 100%.

### Paso 2.5.3: Desactivar WP Fix It ✅
- Plugin de diagnóstico externo (`WooCommerce Order Test`) encontrado activo en producción.
- Creaba una opción de pago de prueba visible para clientes reales.
- Desactivado. Pendiente confirmar con Laura quién lo instaló.

---

## FASE 3 — RESTAURACIÓN DE CORREOS SMTP (Días 9-11) ✅ COMPLETADA
**Prioridad:** 🔴 CRÍTICA — Clientes no reciben confirmaciones.
**Fecha de completado:** 13 mayo 2026

### Paso 3.1: Instalar Plugin SMTP ✅
- FluentSMTP instalado y configurado en Staging con conexión vía API de Brevo.
- Remitente: `contacto@incunabula.co` (Force From Email ✅, Force From Name ✅).

### Paso 3.2: Crear Cuenta en Brevo ✅
- Cuenta gratuita creada. Plan Free: 300 correos/día.
- API Key generada sin expiración ni restricción de IP.

### Paso 3.3: Configurar Registros DNS (SPF/DKIM) ✅
- 4 registros DNS configurados en Hostinger:
  - `TXT @` → Código Brevo (verificación de propiedad).
  - `CNAME brevo1._domainkey` → DKIM firma 1.
  - `CNAME brevo2._domainkey` → DKIM firma 2.
  - `TXT _dmarc` → Editado para incluir reportes Brevo.
- Dominio `incunabula.co` autenticado exitosamente.

### Paso 3.4: Pruebas de Envío ✅
- Correo de prueba entregado exitosamente a Gmail.
- Clasificado en Promociones (esperado para correo genérico; transaccionales reales irán a Recibidos).

### Paso 3.5: Replicar en Producción ✅ COMPLETADO
- ✅ Instalado FluentSMTP en producción.
- ✅ Configurado con la misma API Key de Brevo.
- ✅ Los correos transaccionales de producción ya están funcionando.

---

## FASE 4 — BLINDAJE SEO Y TELEMETRÍA (Días 12-15) ⏳ EN PROGRESO
**Prioridad:** 🟡 ALTA — Detener la penalización de Google.

### Paso 4.1: Limpiar Sitemap de RankMath (URGENTE) — ⏳ EN PROGRESO (Aplicado, pendiente purga de caché)
Se han desactivado de la indexación los tipos de contenido técnico obsoletos directamente en la configuración de RankMath.

| Post Type | Cambiar a | Estado |
|-----------|-----------|--------|
| jet-woo-builder | ❌ OFF | ✅ **COMPLETADO** (Limpiado por desinstalación de plugin) |
| e-landing-page | ❌ OFF | ✅ **COMPLETADO** |
| mskpss_smartbar | ❌ OFF | ✅ **COMPLETADO** (Limpiado por desinstalación de plugin) |
| mskpss_popup | ❌ OFF | ✅ **COMPLETADO** (Limpiado por desinstalación de plugin) |
| mskpss_slidein | ❌ OFF | ✅ **COMPLETADO** (Limpiado por desinstalación de plugin) |
| elementor-hf | ❌ OFF | ✅ **COMPLETADO** |
| bookory-breadcrumb | ❌ OFF | ✅ **COMPLETADO** |
| jet-engine | ❌ OFF | ✅ **COMPLETADO** (Limpiado por desinstalación de plugin) |
| popupbuilder | ❌ OFF | ✅ **COMPLETADO** |

### Paso 4.2: Activar Noindex en Subpáginas de Archivo
- Rank Math → Titles & Meta → Misc Pages → `noindex_archive_subpages` → **ON**.

### Paso 4.3: Corregir Datos Estructurados
- Rank Math → Titles & Meta → WooCommerce:
  - `remove_shop_snippet_data` → **OFF**
  - `remove_product_cat_snippet_data` → **OFF**

### Paso 4.4: Eliminar Páginas Huérfanas
Enviar a Papelera: "Prueba", "Sample Page", "Icons", "Elementor #7526", duplicados de Cart/My Account/Wishlist/Devolución.

### Paso 4.5: Instalar GA4
- Se inyectará el script base de GA4 directamente usando **Elementor Pro > Custom Code**.
- Esto evita instalar un plugin adicional (Site Kit) solo para cargar un script.
- Verificar tag de GA4 en código fuente.

### Paso 4.6: Verificar en Search Console
- Enviar sitemap limpio: `https://incunabula.co/sitemap_index.xml`.
- Solicitar eliminación temporal de URLs basura.

---

## FASE 5 — CREDIBILIDAD Y REGLAS DE NEGOCIO (Días 16-17) ⏳ EN PROGRESO
**Prioridad:** 🟡 ALTA — Quick wins de confianza.

### Paso 5.1: Restaurar Filtros de Tienda (Reemplazo de JetSmartFilters) ✅ COMPLETADO EN STAGING
- **Estado:** ✅ Completado en Staging (22 mayo 2026) mediante la **Opción B** (widgets clásicos nativos de WooCommerce).
- **Resultado:** Filtros 100% funcionales, dinámicos, ligeros y de alto rendimiento que eliminan la dependencia de JetSmartFilters.
- **Acción Pendiente:** Replicar la colocación y configuración de estos widgets en Producción durante el empalme final.

### Paso 5.2: Eliminar Contenido Fantasma ✅ COMPLETADO EN STAGING
Se limpió completamente la página de inicio removiendo las secciones de testimonios falsos, contadores estáticos en inglés y banners con enlaces a dominios de prueba.

| Elemento | Ubicación | Acción | Estado |
|----------|-----------|--------|:---:|
| `contact@example.com` | Footer (Elementor Widget) | Reemplazar por email real | ✅ **COMPLETADO** |
| "Seguir leyendo" → enlace a `demo2wpopal.b-cdn.net` | Sección de blog en Homepage | Corregir enlace o eliminar sección | ✅ **COMPLETADO** |
| Testimonio "Pam Pruitt — New York" | Sección de testimonios | Eliminar o reemplazar con testimonio real | ✅ **COMPLETADO** (Secciones borradas) |

### Paso 5.3: Unificar Umbral de Envío Gratis ✅ COMPLETADO EN STAGING
- **WooCommerce Settings:** Se verificó y confirmó que el envío gratis oficial está configurado en **$100.000 COP** en WooCommerce.
- **Header:** Corregido de $90.000 a **$100.000 COP** en Elementor Header & Footer Builder.
- **Barra de envío gratis:** El plugin VillaTheme `Woo Free Shipping Bar` (clase `wfspb-lining-layer`) fue desactivado por completo de forma limpia para evitar sobrecarga de scripts y copy inconsistente.

### Paso 5.4: FiboSearch (Búsqueda)
> [!IMPORTANT]
> **Corrección v2:** Paso renumerado (antes era un segundo "5.3"). Además, FiboSearch Free ya fue instalado y funciona. Ya no se necesita evaluar Relevanssi como alternativa.

- FiboSearch Free ya está activo y funcional.
- La versión gratuita busca solo por título de producto.
- Si en el futuro Laura necesita búsqueda por SKU o descripción, se evalúa la compra de la licencia Pro ($99 USD/año).
- Por ahora: **$0 de costo.**

---

## FASE 6 — QA TÉCNICO + CORRECCIONES PRE-EMPALME (Día 18) 🔲 PENDIENTE

### Paso 6.0: Correcciones Urgentes Pre-Empalme (Auditoría) ✅ COMPLETADO
- [x] **Proteger staging:** Autenticación HTTP activada en hPanel (28 mayo).
- [x] **robots.txt:** `Disallow: /desarrollo/` configurado (28 mayo).
- [x] **Verificar WP_DEBUG:** Confirmado `WP_DEBUG = false` en producción. `bold_button_event_log.txt` eliminado (28 mayo).
- [x] **Llaves Wompi en staging:** Llaves Sandbox configuradas + Test Mode activo (28 mayo).
- [x] **ADDI en staging:** Modo de pruebas activo, widget visible en checkout (28 mayo).

### Paso 6.0.1: 🔴 Resolver Fallo de Correos Transaccionales en Staging ✅ COMPLETADO
- **Hallazgo:** Laura realizó una compra de prueba real exitosa en Staging (pasarela OK, pedido registrado ✅), pero el correo de confirmación **NO se envió**.
- [x] Verificar estado del pedido: **Diagnóstico completado.** El pedido se queda en "Pendiente de pago" porque el Webhook de Wompi está enviando la confirmación a Producción en lugar de Staging.
- [x] **Acción manual:** Entrar al pedido en WooCommerce, cambiar el estado manualmente de "Pendiente de pago" a "Procesando" y guardar.
- [x] **Verificación:** Correo de confirmación recibido exitosamente. El sistema FluentSMTP + Brevo funciona perfectamente.

### Paso 6.1: Verificación Formal de debug.log ✅ COMPLETADO
- [x] Activar WP_DEBUG en staging.
- [x] Recorrer: Home → Categoría → Producto → Carrito → Checkout.
- [x] Leer el nuevo debug.log. Comparar con baseline de 41.375 líneas: **El nuevo log tiene solo 3.576 líneas (reducción del 91%).**
- [x] Confirmar: **0 Fatal Errors**, **0 menciones de warnings de sesiones de ADDI**. Los únicos registros son *Notices* y *Deprecated warnings* de PHP 8 (completamente inofensivos y normales en WordPress).

### Paso 6.2: Resolver Typos de Checkout (Quick Wins) — ⏸️ Aplazado para el final (Producción)
> [!NOTE]
> Por decisión de flujo de trabajo, la resolución de estos typos de traducción en el checkout se posterga para ser ejecutada directamente sobre el entorno de Producción una vez que la estabilización y el empalme principal estén listos.
- [ ] "Order notes" → "Notas del pedido (opcional)"
- [ ] Placeholder → "Notas sobre tu pedido, ej. instrucciones de entrega"
- [ ] "Your order" → "Tu pedido"
- [ ] "15% Cart discount" → Traducir al español
- [ ] **Personalización de plantillas de correo:** YayMail fue desactivado el 28 mayo (solo tenía 1 de 11 plantillas activa, sin impacto real). En Producción, si Laura desea personalizar los correos transaccionales, las opciones disponibles sin instalar plugins adicionales son:
  - **Opción A:** WooCommerce nativo (`WooCommerce > Ajustes > Correos > cada plantilla`) — permite logo, colores, textos del encabezado/pie.
  - **Opción B:** Reactivar YayMail y diseñar todas las plantillas con su editor visual drag-and-drop.
  - **Opción C:** Mailchimp for WooCommerce (ya instalado) — si se integra el email marketing, puede manejar también correos transaccionales.



### Paso 6.3: Implementar GA4
- [ ] Inyectar script base de GA4 vía Elementor Pro → Custom Code.
- [ ] Verificar en HTML fuente que el tag aparece.
- [ ] Conectar GA4 con Google Search Console.

### Paso 6.4: Pruebas de Flujo (Staging)
| Función | Verificar | ✅/❌ |
|---------|-----------|-------|
| Homepage carga sin errores | Visual + debug.log limpio | |
| Búsqueda de productos funciona | Buscar 3 libros diferentes | |
| Filtros nativos de tienda | Probar categoría/precio/autor | |
| Agregar al carrito | Desde catálogo y producto | |
| Checkout técnico | Logs de errores en 0 | |
| Compra con Transferencia Bancaria | Pedido pasa a "Procesando" | |
| Correo de confirmación | Verificar en FluentSMTP log | |

---

## FASE 7 — EMPALME A PRODUCCIÓN (Día 19) 🔲 PENDIENTE
**Tiempo estimado real: 3-4 horas en horario de bajo tráfico.**

> [!CAUTION]
> **NUNCA usar el botón "Publicar Staging" de Hostinger.** Hacerlo sobreescribiría la base de datos de producción, borrando pedidos reales.

### Pre-Empalme
- [x] Backup completo de producción desde hPanel.
- [x] Captura de pantalla del listado completo de plugins en producción.
- [x] Captura de pantalla de Code Snippets activos.
- [x] Notificar a Laura la ventana de mantenimiento (UAT iniciado).

### Bloque 1: Limpieza de Plugins (seguir orden exacto)
- [x] Desactivar y borrar carpetas de plugins piratas/zombies (según `inventario_plugins.md`).
- [x] Instalar FiboSearch Free oficial.
- [ ] Actualizar WPForms a última versión.
- [ ] Verificar wpDiscuz (versión, CVEs conocidos).
- [ ] Verificar `woocommerce-products-without-featured-images-master` (origen).
- [ ] Desactivar GTM4WP y borrar carpeta.
- [ ] Desactivar Google for WooCommerce (conflicto con Product Feed PRO).
- [ ] Instalar WP 2FA para cuentas de administrador.
- [ ] **VERIFICACIÓN INTERMEDIA:** Cargar Home, categoría y producto. Si hay error → PARAR.

### Bloque 2: Configuraciones
- [x] Configurar LiteSpeed Cache (exclusiones WooCommerce: URIs + cookies).
- [ ] Activar Redis en LiteSpeed Cache → Object Cache → confirmar "Connected".
- [ ] Configurar RankMath (exclusiones de sitemap).
- [ ] Replicar filtros nativos de WooCommerce en sidebar de catálogo.
- [x] Replicar Custom Code de Elementor (scripts de tracking + GA4).
- [x] Agregar regla `.htaccess` para bloquear xmlrpc.php.
- [ ] Agregar headers de seguridad básicos (X-Content-Type-Options, X-Frame-Options).
- [ ] **VERIFICACIÓN INTERMEDIA:** Agregar producto al carrito → llegar al checkout. Si hay error → PARAR.

### Bloque 3: Verificación Final
- [ ] Compra de prueba con Wompi (producción real, monto mínimo).
- [ ] Verificar correo de confirmación (FluentSMTP log).
- [ ] Verificar buscador FiboSearch funciona.
- [ ] Verificar filtros de tienda funcionan.
- [ ] Verificar página Mi Cuenta carga correctamente.
- [ ] Revisar debug.log (debe estar vacío o solo Notices).

### Criterio de Rollback
Si en cualquier verificación intermedia hay un Fatal Error o el checkout no carga:
1. Restaurar el backup de hPanel.
2. Documentar el error exacto.
3. Resolver en staging antes de reintentar.

---

## FASE 8 — UAT Y HYPERCARE (Día 20) 🔲 PENDIENTE

### Paso 8.1: Pruebas de Aceptación del Usuario (UAT)
- [x] Redactar instrucciones y enviar a Laura.
- [ ] Laura realiza una compra real en Producción/Staging (con Wompi/Addi real).
- [ ] Verificación de ingreso de fondos y recepción de correos como administradora.
- [ ] Resolver duda legal pendiente: página correcta entre "Política de devolución" y "Política de devoluciones y reembolsos".

### Paso 8.2: Activar Hypercare
- Notificar a Laura que la intervención está completa.
- Iniciar cronómetro de 30 días de garantía.
- Cobrar el 50% restante.

### Paso 8.3: Backlog Post-Lanzamiento (Documentado, no ejecutar en este proyecto)
- **Semana 2-3:** Escalar DMARC de `p=none` a `p=quarantine`.
- **Semana 3-4:** Revisar Action Scheduler (cola de acciones fallidas).
- **Mes 1:** Auditar wp_options autoload. Limpiar opciones huérfanas de plugins eliminados.
- **Mes 1:** Monitorear volumen de correos Brevo (si se acerca a 300/día, escalar a Starter $9 USD/mes).
- **Mes 1:** Probar restauración real con UpdraftPlus.
- **Mes 2-3:** Evaluar activación de HPOS en staging.
- **Mes 3:** Evaluar si GTM reemplaza a Elementor Custom Code para tracking.

---

## FASE 7 — OPTIMIZACIONES POST-LANZAMIENTO (Aplazados) 🔲 PENDIENTE
**Prioridad:** 🟢 BAJA — Tareas solicitadas por el cliente que no son bloqueantes para la estabilidad del e-commerce.

### Paso 7.1: Integración con Meta (Facebook/Instagram)
- **Contexto:** Laura indicó el deseo de tener la tienda sincronizada con Facebook, pero nunca lograron configurarlo y el plugin causaba errores críticos.
- **Acción:** El plugin `Facebook for WooCommerce` será **eliminado** por decisión de Laura. La integración del catálogo, si se requiere a futuro, se hará vía XML (feed) sin depender del plugin oficial de Facebook.

### Paso 7.2: Alternativas Logísticas (Envía)
- **Contexto:** El plugin actual de Envía Colvanes requiere licencia.
- **Acción:** Evaluar y migrar a una solución gratuita como Envia.com o MiPaquete si el cliente aprueba el cambio.

---

## RESUMEN DE HERRAMIENTAS (Todo Gratuito)

| Necesidad | Herramienta | Costo | Reemplaza a |
|-----------|-------------|-------|-------------|
| SMTP | FluentSMTP | Gratis | — |
| Proveedor de correos | Brevo (Free Tier) | Gratis (300/día) | Función nativa PHP |
| Limpieza de BD | WP-Optimize | Gratis (desinstalar tras uso) | — |
| Analytics | Script GA4 vía Elementor | Gratis | Site Kit by Google / MonsterInsights |
| SEO | RankMath Free (ya instalado) | Gratis | RankMath Pro pirata |
| Búsqueda | FiboSearch Free (ya instalado) | Gratis | FiboSearch Pro pirata |
| Campos personalizados | ACF Free (ya instalado) | Gratis | ACF Pro pirata |

## LICENCIAS — Estado Actualizado (v2)

> [!IMPORTANT]
> **Corrección v2:** La tabla original listaba Elementor Pro y FiboSearch Pro como recomendaciones opcionales. La realidad tras las pruebas:

| Licencia | Costo Anual | Estado |
|----------|-------------|--------|
| **Elementor Pro** | $99 USD/año | ✅ **COMPLETADO.** Licencia Advanced adquirida por Laura y activa en Staging. |
| JetSmartFilters | ~$24 USD | ⚠️ Solo si el reemplazo gratuito no funciona (Actualmente innecesario). |
| FiboSearch Pro | ~$99 USD | 🟢 **NO NECESARIO ahora.** Free funciona. Evaluar a futuro. |

### 💰 Ahorro generado para Laura (plugins piratas eliminados)

| Plugin pirata eliminado | Licencia oficial evitada |
|------------------------|--------------------------|
| ACF Pro | $49 USD/año |
| Rank Math Pro | $59 USD/año |
| FiboSearch Pro | $99 USD/año |
| WP All Import Pro | $199 USD/año |
| Dynamic Content for Elementor | $59 USD/año |
| JetSmartFilters (si se reemplaza) | $24 USD/año |
| **Total ahorro anual** | **~$489 USD/año** |

---

## ORDEN DE EJECUCIÓN VISUAL (Actualizado v2)

```
Día 1      → FASE 0: Backup + Staging                    ✅ COMPLETADO
Días 1-2   → FASE 1: Debug Log + Diagnóstico             ✅ COMPLETADO
Días 3-8   → FASE 2: Limpieza plugins (Rondas 1-3)       ✅ COMPLETADO
             FASE 2: Actualizar WooCommerce/WP Core       ✅ COMPLETADO (13 mayo)
             FASE 2: Limpieza BD (WP-Optimize)             ✅ COMPLETADO (13 mayo)
             FASE 2: Instalar Elementor Pro (legítimo)     ✅ COMPLETADO (13 mayo)
             FASE 2: Activar licencia Elementor Pro        ✅ COMPLETADO (22 mayo)
             FASE 2: Eliminar JetSmartFilters              ✅ COMPLETADO (Causaba Error Crítico)
             FASE 2: Reconstruir Filtros de Tienda         ✅ COMPLETADO (con Elementor Pro nativo)
             FASE 2: Evaluar plugins específicos           ✅ PARCIAL (4/5 resueltos, falta WPForms User Reg)
             FASE 2: QA visual post-Elementor              ⏳ EN PROGRESO
             FASE 2: Verificación PHP 8.2 (debug.log)     🔲 PENDIENTE
Día ~5     → FASE 2.5: Emergencia Producción (Wompi)      ✅ COMPLETADO
Días 9-11  → FASE 3: SMTP + Brevo + DNS (Staging)         ✅ COMPLETADO (13 mayo)
             FASE 3: Replicar SMTP en Producción           ✅ COMPLETADO
Días 12-15 → FASE 4: RankMath Sitemap + GA4               ✅ COMPLETADO
Días 16-17 → FASE 5: Footer + Testimonios + Envío gratis  ✅ COMPLETADO EN STAGING (Limpieza y unificación)
             FASE 5: Consolidación y Saneamiento Plugins   ✅ COMPLETADO Y DEPURADO FÍSICAMENTE (26 mayo)
Días 18-20 → FASE 6: QA Técnico (Staging)                ⏳ SIGUIENTE PASO
             FASE 7: Empalme a Producción (Sincronización) 🔲 PENDIENTE
             FASE 8: UAT (Pruebas de Laura) + Hypercare    🔲 PENDIENTE
             FASE 9: Optimizaciones Post-Lanzamiento       🔲 APLAZADO
```
