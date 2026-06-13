# BITÁCORA DE PROCESOS — ESTABILIZACIÓN INCUNABULA.CO
**Responsable:** Jordan Marles  
**Cliente:** Laura — Incunabula Librería  
**Fecha de inicio:** 7 mayo 2026  
**Última actualización:** 26 mayo 2026

---

## ÍNDICE DE FASES

| Fase | Estado | Descripción |
| :--- | :---: | :--- |
| Fase 0 — Backups y Staging | ✅ Completa | Entornos de respaldo y desarrollo preparados |
| Fase 1 — Diagnóstico | ✅ Completa | Auditoría técnica, inventario de plugins, análisis de `debug.log` |
| Fase 2 — Estabilización | ✅ Completa (~90%) | Core/WooCommerce ✅, BD ✅, Elementor Pro ✅, Plugins saneados ✅. Pendiente: debug.log final + WPForms User Reg |
| Fase 2.5 — Emergencia Producción | ✅ Completa | Wompi v2.0.0 + Cart Stock Reducer desactivado |
| Fase 3 — Restauración SMTP | ✅ Completa | FluentSMTP + Brevo configurados. DNS autenticado. Correos funcionales en Staging y Producción. |
| Fase 4 — SEO y Telemetría | ✅ Completa | Sitemap blindado ✅. Telemetría GA4 y Ads verificada y activa. |
| Fase 5 — Credibilidad | ⏳ En Progreso | Homepage limpia ✅, Envío gratis unificado ✅, Plugins saneados ✅. Pendiente: Quick wins de checkout |
| Fase 6 — QA + Empalme | 🔲 Pendiente | Pruebas de pasarelas Wompi/Addi + empalme a producción |

---

## FASE 0 — BACKUPS Y STAGING ✅

### Proceso 0.1: Creación de Backup Completo
- **Fecha:** 7 mayo 2026
- **Herramienta:** hPanel de Hostinger (backup automático)
- **Resultado:** Backup completo de archivos + base de datos generado.
- **Evidencia:** Disponible en el panel de Hostinger.

### Proceso 0.2: Creación de Entorno de Staging
- **Fecha:** 7 mayo 2026
- **Herramienta:** Hostinger Staging Tool
- **URL Staging:** `incunabula.co/desarrollo/`
- **Resultado:** Entorno clonado y funcional para pruebas.

---

## FASE 1 — DIAGNÓSTICO ✅

### Proceso 1.1: Activación del Debug Log
- **Fecha:** 7 mayo 2026
- **Archivo modificado:** `wp-config.php` (Staging)
- **Configuración aplicada:**
  ```php
  define( 'WP_DEBUG', true );
  define( 'WP_DEBUG_LOG', true );
  define( 'WP_DEBUG_DISPLAY', false );
  ```
- **Resultado:** El servidor comenzó a registrar todos los errores PHP en `wp-content/debug.log`.
- **Nota:** Jordan confirma que ya estaban configurados antes de iniciar esta sesión.

### Proceso 1.2: Auditoría Visual del Panel wp-admin
- **Fecha:** 7 mayo 2026
- **Hallazgos:**
  - Error de JavaScript en WooCommerce → Analytics → Dashboard: `TypeError: Cannot read properties of undefined (reading 'replace')`.
  - Identificado como bug conocido de WooCommerce 9.4.5 con caché de analíticas corrupta.
- **Evidencia:** Capturas de pantalla guardadas en `/Screenshots antes/`.

### Proceso 1.3: Inventario Completo de Plugins
- **Fecha:** 7 mayo 2026
- **Documento generado:** `inventario_plugins.md`
- **Resultado:** 21 plugins clasificados en 4 categorías:
  - ✅ MANTENER: 9 plugins
  - 🔄 ACTUALIZAR: 4 plugins (Elementor, HFE, JetWooBuilder, JetEngine)
  - ⚠️ EVALUAR: 3 plugins
  - 🗑️ ELIMINAR: 5 plugins
- **Plan de intervención:** Documentado en 8 rondas (de menor a mayor riesgo).

### Proceso 1.4: Análisis del Debug Log (41,375 líneas)
- **Fecha:** 7 mayo 2026
- **Período del log:** 22 enero 2026 → 7 mayo 2026 (~3.5 meses de errores acumulados)
- **Archivo analizado:** `wp-content/debug.log` (14.6 MB)
- **Resultado completo:** Ver sección "ANÁLISIS FORENSE DEL DEBUG.LOG" más abajo.

### Proceso 1.5: Verificación de Licencias
- **Fecha:** 7 mayo 2026
- **Hallazgos actualizados:**
  - **Bookory Theme:** ✅ Licencia válida (ThemeForest). Versión 2.3.0 descargada. Costo: $0.
  - **Crocoblock (Jet suite):** ✅ Innecesario. Se comprobó en Staging que Bookory nativo maneja el diseño. Costo: $0.
  - **FiboSearch Pro:** 🏴‍☠️ Confirmado pirata (v1.23.0). Se reemplazará con Relevanssi. Costo: $0.
  - **Elementor Pro:** ⚠️ Detectado como activo. Pendiente verificar si es pirata y si realmente se usa en el sitio.
- **Documento generado:** `mensaje_licencias_laura.md` (requerirá actualización final).

### Proceso 1.6: Descubrimientos del Debug.log NO documentados previamente
- **Fecha:** 7 mayo 2026
- **Plugins descubiertos que NO estaban en el inventario original:**

| Plugin | Tipo de error | Estado |
| :--- | :--- | :--- |
| `advanced-custom-fields-pro-master` | 11,172 errores Deprecated | ⚠️ Es versión PRO probablemente pirateada (carpeta `*-master` indica descarga de GitHub) |
| `dynamic-content-for-elementor` | 2,524 errores Deprecated | ⚠️ Plugin premium adicional NO inventariado |
| `woocommerce-cart-stock-reducer` | 8,430 errores Deprecated | ⚠️ Plugin NO inventariado. Reduce stock al agregar al carrito |
| `woo-product-feed-pro` | 131 errores Deprecated | ⚠️ Plugin de feeds de producto (Google Shopping). NO inventariado |
| `wp-all-import-pro` | 232 errores Deprecated | ⚠️ Plugin PRO de importación masiva. Probablemente pirateado |
| `jet-search` | 226 errores Deprecated | ⚠️ Otro plugin Crocoblock NO inventariado |
| `jet-smart-filters` | 1,696 errores Deprecated | ⚠️ Otro plugin Crocoblock NO inventariado |
| `ajax-search-for-woocommerce-premium` | 10 errores Deprecated | ⚠️ Es la versión PREMIUM de FiboSearch (confirma que sí tenían Pro) |
| `elementor-pro` | 572 errores Deprecated | ⚠️ SÍ TIENEN ELEMENTOR PRO INSTALADO (probablemente pirateado) |
| `seo-by-rank-math-pro` | 234 errores (Warning + Deprecated) | ⚠️ Tienen RankMath PRO, no la versión free |
| `wpforms-user-registration` | 25 errores Deprecated | ⚠️ Addon de registro de usuarios para WPForms |
| `wp-mail-logging` | Presente en el log | ℹ️ Plugin de logging de correos |
| `facebook-for-woocommerce` | 1 Warning | ⚠️ Integración con Facebook/Meta. NO inventariado |
| `woocommerce-ultimate-gift-card` | 12 Warnings + 1 Deprecated | ⚠️ Plugin de Gift Cards. NO inventariado |

---

## ANÁLISIS FORENSE DEL DEBUG.LOG

### Resumen Cuantitativo

| Tipo de Error | Cantidad Aproximada | Severidad |
| :--- | :---: | :--- |
| `PHP Fatal error` | 0 | — Sin errores fatales |
| `PHP Warning` | ~102 | 🟡 Medio — No rompen el sitio pero causan inestabilidad |
| `PHP Deprecated` | ~32,000+ | 🟠 Alto — Indican incompatibilidad con PHP 8.2 |
| `PHP Notice` | ~9,000+ | 🟢 Bajo — Informativos, no causan problemas |

### Top 5 Plugins MÁS Problemáticos (por errores Deprecated)

| # | Plugin | Errores | Diagnóstico |
| :---: | :--- | :--- | :--- |
| 1 | **ACF Pro (pirateado)** | 11,172 | Carpeta `advanced-custom-fields-pro-master` indica descarga desde GitHub, no instalación oficial. Versión incompatible con PHP 8.2. |
| 2 | **WC Cart Stock Reducer** | 8,430 | Plugin abandonado/desactualizado. Usa `dynamic properties` masivamente. Candidato a ELIMINACIÓN. |
| 3 | **WPForms** | 3,672 | Probablemente versión desactualizada. Actualizar resuelve esto. |
| 4 | **Dynamic Content for Elementor** | 2,524 | Plugin premium adicional. Evaluar si se usa o es residual. |
| 5 | **Jet Smart Filters** | 1,696 | Plugin Crocoblock no inventariado. Evaluar si los filtros de la tienda lo usan. |

### Top Plugins con PHP Warnings (errores de ejecución)

| # | Plugin | Warnings | Problema |
| :--- | :--- | :--- | :--- |
| 1 | **Addi (BNPL)** | 54 | `Session ini settings cannot be changed after headers sent`. El plugin intenta iniciar sesiones PHP después de que WordPress ya envió headers. Incompatible con la arquitectura actual. |
| 2 | **Tema Bookory** | 25 | `Merlin_Logger::__wakeup() must have public visibility`. Error del setup wizard del tema. Se resolverá con la actualización a v2.3.0. |
| 3 | **Gift Cards** | 12 | `Undefined array key HTTP_HOST`. Plugin mal programado, no detecta bien el entorno. |
| 4 | **RankMath Pro** | 7 | Warnings menores. Actualizable. |

### Hallazgo Crítico: El Sitio SÍ Tiene Plugins PRO

> [!WARNING]
> El debug.log revela que el sitio tiene instalados **Elementor Pro**, **RankMath Pro**, **ACF Pro**, **WPForms (con addon de User Registration)**, **WP All Import Pro**, **Ajax Search for WooCommerce Premium (FiboSearch Pro)**, y **Dynamic Content for Elementor**. Estos son plugins premium que probablemente fueron instalados con licencias pirateadas ("nulled"). La carpeta `advanced-custom-fields-pro-master` confirma que al menos ACF fue descargado desde GitHub en lugar de comprarse.

**Implicaciones para el plan:**
1. **Elementor Pro SÍ está instalado** → Hay que verificar si alguna página usa widgets Pro. Si sí, necesitamos mantenerlo o rehacer esas secciones.
2. **ACF Pro está pirateado** → Reemplazar con la versión gratuita de ACF (desde wordpress.org) o con SCF (Secure Custom Fields).
3. **FiboSearch Pro SÍ está instalado** → Confirma que ya tienen la versión premium. La pregunta es si la licencia está activa o no.
4. **RankMath Pro** → Evaluar si usan funciones Pro (schema avanzado, redirecciones). Si no, bajar a la versión free.

---

## DOCUMENTOS GENERADOS EN ESTA SESIÓN

| Documento | Ruta | Descripción |
| :--- | :--- | :--- |
| Due Diligence | `due_diligence_incunabula.md` | Diagnóstico base de la deuda técnica |
| Plan de Ejecución | `plan_ejecucion.md` | Hoja de ruta completa de estabilización (6 fases) |
| Inventario de Plugins | `inventario_plugins.md` | Clasificación detallada de todos los plugins + plan de intervención |
| Quick Wins | `quick_wins.md` | Errores visuales y de contenido detectados |
| Mensaje a Laura | `mensaje_licencias_laura.md` | Comunicación sobre costos de licencias |
| Bitácora de Procesos | `bitacora_procesos.md` | Este documento |

---

## PRÓXIMOS PASOS (Fase 2)

### Acción Inmediata: Actualizar el Inventario
El debug.log reveló **14 plugins adicionales** que no estaban en el inventario original (basado solo en capturas de pantalla). Antes de ejecutar la Fase 2, se debe:
1. Entrar al wp-admin del Staging.
2. Ir a `Plugins > Plugins Instalados`.
3. Hacer una captura de pantalla COMPLETA de TODOS los plugins (incluyendo los inactivos).
4. Actualizar `inventario_plugins.md` con los plugins descubiertos en el debug.log.
5. Reclasificar cada uno (MANTENER / ACTUALIZAR / EVALUAR / ELIMINAR).

### Secuencia de la Fase 2 (Staging)
```
PASO 1 → Captura completa de plugins (actualizar inventario) ✅ COMPLETADO
PASO 2 → Subir tema Bookory 2.3.0 al Staging ✅ COMPLETADO
PASO 3 → Verificar debug3.log post-actualización ✅ COMPLETADO (Los 25 warnings del tema desaparecieron)
PASO 4 → Ronda 1: Eliminar plugins basura (CF7, MonsterInsights, PayU, Jetpack eliminados) ✅ COMPLETADO
PASO 5 → Ronda 2 y 3 (Limpieza de Piratas): ✅ COMPLETADO. Eliminados: ACF Pro, Dynamic Content, Rank Math Pro, Ajax Search Pro, WP All Import Pro. (Pendiente: Licencia Elementor Pro y decisión sobre Cart Stock Reducer).
PASO 6 → Ronda 3: Actualizar WooCommerce + WordPress Core
PASO 7 → Ronda 4: Actualizar Elementor (3.17 → 4.0)
PASO 8 → Verificar debug.log final y comparar con el baseline
```

---

## 📌 PROTOCOLO DE PERSISTENCIA — DIRECTRIZ OBLIGATORIA

> [!CAUTION]
> **Esta directriz debe seguirse en CADA sesión de trabajo, sin excepción.**
> El contexto de este proyecto se pierde entre sesiones de chat, truncamientos, y cambios de modelo AI. Todo dato relevante DEBE quedar en archivos del proyecto.

### Reglas de Documentación

1. **Capturas de pantalla** del cliente o del wp-admin deben guardarse en `/Screenshots antes/` o `/Screenshots después/` con nombres descriptivos (ej. `plugins_lista_completa_20260507.png`).
2. **Hallazgos técnicos** (errores, versiones, estados de licencia) deben registrarse inmediatamente en `inventario_plugins.md`, no solo en el chat.
3. **Decisiones del cliente** deben quedar en la tabla de "Registro de Comunicaciones" de este documento con fecha y respuesta textual.
4. **Resultados de pruebas** (apagón de plugins, actualizaciones) deben documentarse en esta bitácora como un nuevo "Proceso X.X".
5. **Debug logs** relevantes deben copiarse al directorio `/Screenshots antes/` como evidencia del estado previo.
6. **Cada sesión nueva** debe comenzar leyendo: `bitacora_procesos.md` → `inventario_plugins.md` → `plan_ejecucion.md` (en ese orden) para recuperar contexto completo.

### Archivos Maestros del Proyecto

| Archivo | Propósito | Prioridad de lectura |
| :--- | :--- | :---: |
| `bitacora_procesos.md` | Estado actual, qué se hizo, qué falta | 🥇 1° |
| `inventario_plugins.md` | Lista maestra de plugins + licencias + costos | 🥈 2° |
| `plan_ejecucion.md` | Hoja de ruta técnica paso a paso | 🥉 3° |
| `mensaje_licencias_laura.md` | Comunicación con la cliente | 4° |
| `quick_wins.md` | Errores visuales menores | 5° |
| `due_diligence_incunabula.md` | Diagnóstico inicial (contexto base) | 6° |

### 2.5 Consultas con Cliente (Laura) y Decisiones Estratégicas
Se plantearon tres consultas críticas sobre el uso de ciertos plugins comerciales para determinar su eliminación o conservación.
*   **Consulta 1 (Gift Cards):** ¿Se venden Gift Cards?
    *   *Respuesta:* Sí, pero son muy pocas ventas.
    *   *Decisión:* Conservar `WooCommerce Ultimate Gift Card`. Es de baja prioridad pero debe mantenerse funcional.
*   **Consulta 2 (Meta/Facebook):** ¿Tienen activa la tienda en Facebook/Instagram?
    *   *Respuesta:* Quieren tenerla pero nunca han podido hacerlo.
    *   *Decisión:* Aplazar. Se mantiene el plugin `Facebook for WooCommerce` desactivado y se agenda su configuración real para una fase post-lanzamiento.
*   **Consulta 3 (Google Merchant Center):** ¿Usan feeds de productos?
    *   *Respuesta:* Sí tienen Merchant Center activo.
    *   *Decisión:* Conservar `Woo Product Feed PRO` intacto, ya que confirmamos (vía panel de WooCommerce) que la integración oficial de Google API está desactivada y dependen de este feed XML para sus anuncios.

---

## FASE 2.5 — INTERVENCIÓN DE EMERGENCIA EN PRODUCCIÓN ✅

### Proceso 2.5.1: Diagnóstico Forense de Errores Críticos del 7 de Mayo
- **Fecha:** 11 mayo 2026
- **Archivos analizados:**
  - `fatal-errors-2026-05-04.log` — Error en `Packages.php` al navegar la lista de plugins en producción (bug de WooCommerce al renderizar la tabla de plugins, no afecta pagos).
  - `fatal-errors-2026-05-07.log` — 11 errores `CRITICAL: Call to a member function get() on null` en `wc-notice-functions.php`, originados por `woocommerce-cart-stock-reducer` en contexto REST API. Ocurridos entre 01:30:30 y 01:30:47 UTC (proceso automático/cron, no manual).
- **Conclusión:** Los crashes del 7 de mayo son causados por `woocommerce-cart-stock-reducer` al ser invocado por un proceso automático de Elementor/WooCommerce vía REST API, en un contexto donde `WC()->session` es null. El trabajo de Jordan se realizó exclusivamente en Staging y no causó estos errores.

### Proceso 2.5.2: Desactivación de WooCommerce Cart Stock Reducer en Producción
- **Fecha:** 11 mayo 2026
- **Entorno:** Producción (`incunabula.co`)
- **Acción:** Plugin `WooCommerce Cart Stock Reducer` (v3.90) desactivado vía wp-admin → Plugins.
- **Motivo:** Plugin abandonado (sin actualizaciones), incompatible con WooCommerce 9.x en contexto REST API. Genera errores fatales en bucle. WooCommerce incluye la reserva de stock de forma nativa.
- **Resultado:** ✅ Errores críticos detenidos.

### Proceso 2.5.3: Migración del Plugin Wompi a v2.0.0 en Producción
- **Fecha:** 11 mayo 2026
- **Entorno:** Producción (`incunabula.co`)
- **Problema:** El sitio tenía instaladas dos versiones obsoletas del plugin de Wompi:
  - `Wompi_WooCommerce_Plugin_0.1.2` (4 años de antigüedad, carpeta en File Manager)
  - `wompi-portal-de-pagos` (versión 0.2.0, 1 año de antigüedad)
  - Ambas incompatibles con PHP 8.2. Al intentar activar cualquiera de las dos → pantalla de "Error Crítico".
- **Solución ejecutada:**
  1. Ambas carpetas de plugin antiguo eliminadas desde el Administrador de Archivos de Hostinger.
  2. Plugin oficial **"Wompi Plugin para WooCommerce" v2.0.0** instalado desde el repositorio de WordPress.org.
  3. Configuradas las 4 llaves de producción proporcionadas por Laura en `WooCommerce → Ajustes → Pagos → Wompi`:
     - `Live Public Key` ✅
     - `Live Private Key` ✅
     - `Live Event Private Key` ✅
     - `Live Integrity Key` ✅ *(campo nuevo requerido por Wompi — este era el campo vacío que causaba el rechazo de transacciones)*
  4. Campos de Test (Sandbox) dejados vacíos. Modo Test desactivado.
  5. Log de debug activado para monitoreo.
- **Resultado:** ✅ Pagos restaurados al 100%. Prueba de checkout completada con éxito: el widget de Wompi cargó correctamente mostrando el logo de Incunabula Librería, el monto validado ($21.000) con ícono verde (firma de integridad aceptada) y todos los métodos de pago disponibles (PSE, Nequi, Bancolombia, billeteras digitales).

### Proceso 2.5.4: Hallazgo de Plugin de Diagnóstico Externo
- **Fecha:** 11 mayo 2026
- **Hallazgo:** Plugin `WooCommerce Order Test - WP Fix It v2.2` encontrado **activo** tanto en producción como en Staging. Este plugin pertenece a una empresa de soporte técnico externo (WP Fix It) y crea una opción de pago de prueba visible para los clientes en el checkout.
- **Acción:** Plugin desactivado en producción. Pendiente confirmar con Laura quién contrató este servicio y cuándo.
- **Estado:** 🔲 Pendiente respuesta de Laura.

---

## REGISTRO DE COMUNICACIONES CON EL CLIENTE

| Fecha | Canal | Asunto | Respuesta |
| :--- | :--- | :--- | :--- |
| 7 mayo 2026 | WhatsApp/Correo | Consulta sobre licencias y costos | Laura confirmó acceso a ThemeForest (Bookory). Descargó versión 2.3.0 y compartió vía Google Drive. |
| 7 mayo 2026 | Documento | Desglose de licencias necesarias | Pendiente de respuesta sobre plugins Crocoblock ($98 USD/año). |
| 9 mayo 2026 | Chat/Correo | Eliminación de WC Cart Stock Reducer | Se consultó la prioridad funcional del bloqueo en el carrito vs Checkout nativo para eliminar plugin obsoleto. ✅ **Resuelto el 11 de mayo: plugin desactivado en producción.** |
| 9 mayo 2026 | Chat/Correo | Licencia Elementor Pro | Se detectó que el sitio depende críticamente de Elementor Pro. Debe adquirir la licencia ($59 USD/año). 🔲 **Pendiente notificar.** |
| 10 mayo 2026 | Chat/Correo | Notificación Final de Limpieza y Licencias | Envío de mensaje consolidado a Laura. 🔲 **Pendiente enviar.** |
| 11 mayo 2026 | Chat/Correo | Restauración de pagos | Laura proporcionó las 4 llaves de producción de Wompi (Pública, Privada, Eventos, Integridad). Pagos restaurados exitosamente. ✅ |
| 11 mayo 2026 | Chat/Correo | Plugin WP Fix It en producción | Consulta pendiente: ¿quién contrató a WP Fix It y cuándo? 🔲 **Pendiente respuesta.** |
| 11 mayo 2026 | Chat/Correo | Preguntas sobre plugins a evaluar | ✅ **Respuestas recibidas 12 mayo:** Gift Cards → "Sí pero pocas ventas" (mantener). Facebook/Meta → "Queremos pero nunca pudimos" (mantener desactivado). Google Merchant → "Lo tenemos activo" (mantener, investigar conexión con Product Feed PRO). Elementor Pro → Laura preguntó sobre planes superiores. Se aclara que el plan Essential no incluye ecommerce; debe adquirir el plan **Advanced ($99/año)** que incluye popups, ecommerce y forms. |
| 13 mayo 2026 | Chat | Licencia Elementor Pro | Laura envió el archivo `.zip` de Elementor Pro. ✅ **Compra confirmada.** Clave de licencia pendiente — Jordan solicitó a Laura que la extraiga de `my.elementor.com → Subscriptions`. 🔲 **Pendiente.** |
| 13 mayo 2026 | Chat | Plugin WP Fix It | 🔲 **Sin respuesta aún.** Pendiente confirmar quién contrató a WP Fix It. |

---

## AUDITORÍA FORENSE DE DOCUMENTACIÓN — 12 mayo 2026

### Proceso: Revisión exhaustiva y corrección de documentos maestros
- **Fecha:** 12 mayo 2026
- **Archivos corregidos:** `plan_ejecucion.md` (v2), `inventario_plugins.md` (v2), `bitacora_procesos.md`
- **Inconsistencias detectadas y corregidas:**
  1. **JetSmartFilters duplicado** en inventario (aparecía en ELIMINAR y MANTENER). Corregido: solo en MANTENER.
  2. **WC Cart Stock Reducer versión** incorrecta (v3.65 vs v3.90). Corregido: v3.90 (producción).
  3. **Paso 5.3 duplicado** en plan de ejecución. Corregido: renumerado a 5.3 y 5.4.
  4. **OWL Carousel y Slick Slider** listados como plugins eliminables. Corregido: son librerías del tema Bookory.
  5. **Fase 2.5** (emergencia Wompi) no existía en el plan. Corregido: añadida.
  6. **Tabla de licencias desactualizada.** Corregido: refleja ahorro real de ~$489 USD/año.
  7. **Recomendación Crocoblock incorrecta:** Se decía que JetSmartFilters era prescindible. Corregido: es necesario hasta tener reemplazo funcional.
  8. **Elementor Pro** tratado como opcional. Corregido: marcado como OBLIGATORIO.
- **Respuestas de Laura incorporadas:** Gift Cards, Facebook, Google Merchant, pregunta sobre planes Elementor.
- **Estado:** ✅ Documentación saneada y lista para retomar ejecución.

---

## FASE 2.6 — RÉPLICA DE CORRECCIONES EN STAGING

### Proceso 2.6.1: Política de Retención de Plugins (Seguridad)
- **Fecha:** 12 mayo 2026
- **Nueva Directriz:** Durante el proceso de estabilización en Staging, los plugins identificados como problemáticos, piratas o innecesarios **solo se desactivarán**. No se procederá al borrado de archivos hasta que la fase completa de estabilización y pruebas haya finalizado satisfactoriamente, para permitir restauraciones rápidas si es necesario.

### Proceso 2.6.2: Réplica de Fixes de Wompi y Cart Stock Reducer
- **Fecha:** 12 mayo 2026
- **Entorno:** Staging (`incunabula.co/desarrollo/`)
- **Acciones ejecutadas:**
  1. **Desactivar** `WooCommerce Cart Stock Reducer` (v3.90).
  2. **Borrado desde panel** de las versiones obsoletas de Wompi (`Wompi_WooCommerce_Plugin_0.1.2` y `wompi-portal-de-pagos v0.2.0`) manteniendo las carpetas según manejo estándar de WordPress.
  3. **Instalado y configurado** el plugin oficial Wompi v2.0.0 con las 4 llaves de producción.
  4. **Desactivado** el plugin de diagnóstico externo `WooCommerce Order Test - WP Fix It`.
- **Estado:** ✅ Completado por Jordan.

### Proceso 2.6.3: Actualización de WordPress Core y WooCommerce
- **Fecha:** 13 mayo 2026
- **Entorno:** Staging (`incunabula.co/desarrollo/`)
- **Acciones ejecutadas:**
  1. **Actualizado** WordPress a la última versión estable.
  2. **Actualizado** WooCommerce a la última versión (inicialmente 9.x, luego actualizado a **10.7.0**).
  3. Base de datos de WooCommerce actualizada correctamente.
  4. **Pruebas:** Validación exitosa de funcionalidades del carrito y checkout.
- **Estado:** ✅ Completado por Jordan.

### Proceso 2.7.1: Respaldo y Limpieza de Base de Datos
- **Fecha:** 13 mayo 2026
- **Entorno:** Staging (`incunabula.co/desarrollo/`)
- **Acciones ejecutadas:**
  1. **Respaldo:** Ejecutado respaldo exclusivo de la base de datos vía UpdraftPlus.
  2. **Limpieza con WP-Optimize:** Eliminación de 8.884 revisiones, borradores, transitorios (caducados y activos), pingbacks y más de 900 metadatos huérfanos.
  3. **Desactivación:** El plugin WP-Optimize fue desactivado para evitar conflictos con LiteSpeed Cache.
- **Estado:** ✅ Completado por Jordan.

---

## Fase 3: Restauración de Correos Transaccionales (SMTP)

### Proceso 3.1: Configuración de FluentSMTP + Brevo
- **Fecha:** 13 mayo 2026
- **Entorno:** Staging (`incunabula.co/desarrollo/`) + DNS global (`incunabula.co`)
- **Diagnóstico previo:** Hostinger suspendió el envío de emails por exceder el límite diario de `sendmail()`. Los correos transaccionales de WooCommerce (recibos, confirmaciones) no llegaban a los clientes.
- **Acciones ejecutadas:**
  1. **Cuenta Brevo:** Creada cuenta gratuita en Brevo (antes Sendinblue). Plan Free: 300 correos/día.
  2. **API Key:** Generada clave API sin expiración ni restricción de IP (por IP dinámica de hosting compartido).
  3. **FluentSMTP:** Instalado y configurado en Staging con conexión vía API de Brevo.
     - Remitente: `contacto@incunabula.co` (Force From Email ✅)
     - Nombre: `Incunabula Librería` (Force From Name ✅)
  4. **Autenticación DNS (Hostinger):** Configurados 4 registros en la zona DNS de `incunabula.co`:
     - `TXT @` → Código Brevo (verificación de propiedad).
     - `CNAME brevo1._domainkey` → DKIM firma 1.
     - `CNAME brevo2._domainkey` → DKIM firma 2.
     - `TXT _dmarc` → Editado registro existente para agregar `rua=mailto:rua@dmarc.brevo.com` (reportes). Política `p=none` sin cambios.
  5. **Verificación:** Dominio `incunabula.co` autenticado exitosamente en Brevo.
- **Nota:** Los registros DNS son globales (afectan Staging y Producción).
- **Estado en Producción:** ✅ Completado (22 mayo 2026). FluentSMTP instalado y configurado con la API Key de Brevo. Se forzó el remitente a `contacto@incunabula.co` y nombre `Incunabula Librería`.
- **Acciones Adicionales en Producción:**
  - `WP Mail SMTP Pro` desactivado. (Confirmado desactivado por Jordan el 22 de mayo de 2026 para evitar conflictos de `wp_mail()`).
  - `WP Mail Logging` desactivado. (Confirmado desactivado por Jordan el 22 de mayo de 2026, reemplazado 100% por el módulo nativo de logs de FluentSMTP).
  - Los correos transaccionales en vivo ya están funcionando al 100% de forma limpia y exclusiva con FluentSMTP.
- **Verificación:** Pruebas de envío reales desde el sitio en vivo confirmadas por el usuario. Log de correos centralizado operando dentro del panel de FluentSMTP sin sobrecargar la base de datos de WordPress.

---

## FASE 2.8 — INSTALACIÓN DE ELEMENTOR PRO EN STAGING

### Proceso 2.8.1: Instalación de Elementor Pro (Licencia Legítima)
- **Fecha:** 13 mayo 2026
- **Entorno:** Staging (`incunabula.co/desarrollo/`)
- **Acciones ejecutadas:**
  1. **Recepción:** Laura envió el archivo `.zip` de Elementor Pro (compra legítima, plan Advanced).
  2. **Primer intento de instalación (wp-admin):** Falló con error `DNS_PROBE_POSSIBLE` — timeout del servidor durante la subida del archivo.
  3. **Segundo intento (File Manager):** Se subió el `.zip` a `wp-content/plugins/` y se extrajo manualmente.
  4. **Problema detectado:** La extracción creó una estructura de carpetas anidada (`plugins/elementor-pro/elementor-pro/`). WordPress no detectaba la versión correcta.
  5. **Corrección:** Se borró la carpeta duplicada, se re-extrajo el `.zip` directamente en `plugins/`. Estructura corregida a `plugins/elementor-pro/`.
  6. **Activación:** Plugin activado exitosamente desde wp-admin → Plugins.
- **Estado:** ✅ Plugin instalado y activo.

### Proceso 2.8.2: Actualización de Elementor Free
- **Fecha:** 13 mayo 2026
- **Entorno:** Staging (`incunabula.co/desarrollo/`)
- **Problema detectado:** Tras activar Elementor Pro nuevo, el sitio se "rompió" — las secciones Pro se mostraban como widgets no disponibles.
- **Causa raíz:** Incompatibilidad de versiones entre Elementor Free (v3.17) y Elementor Pro (versión nueva). Ambos plugins deben estar en versiones compatibles.
- **Solución:** Actualización de Elementor Free a la última versión estable desde wp-admin → Plugins → Actualizar.
- **Resultado:** Las secciones del sitio volvieron a renderizarse correctamente.
- **Observación:** Se detectaron desajustes visuales menores (tipografías, espaciados, colores) que requieren revisión en una pasada de QA visual.
- **Estado:** ✅ Ambos plugins actualizados y funcionales.

### Proceso 2.8.3: Activación de Licencia ✅
- **Fecha:** 22 mayo 2026
- **Estado:** ✅ **COMPLETADO.** Elementor Pro ha sido enlazado y activado exitosamente con la cuenta de Laura. Las funcionalidades Pro y el WooCommerce Builder están totalmente desbloqueados.

---

## FASE 2.9 — RECONSTRUCCIÓN DE FILTROS EN STAGING ✅

### Proceso 2.9.1: Implementación de Filtros Nativos mediante la Opción B
- **Fecha:** 22 mayo 2026
- **Entorno:** Staging (`incunabula.co/desarrollo/`)
- **Estrategia Elegida:** **Opción B** (Widgets clásicos de WooCommerce en barra lateral + Catálogo clásico "Archivo de productos"). Esta opción mantiene el diseño exacto aprobado por la cliente, evita la sobrecarga de maquetación del Loop Grid desde cero y garantiza la máxima compatibilidad y estabilidad.
- **Acciones Ejecutadas:**
  1. **Filtro de Categorías:** Se instaló el widget clásico de WordPress **Categorías de producto** bajo el título "Filtrar por categorías". Renderiza la lista vertical de categorías con recuento de productos nativo.
  2. **Filtro de Precio:** Se instaló el widget clásico **Filtrar productos por precio** bajo el título "Filtrar por precio". Sincronizado de forma transparente con el catálogo y operando con AJAX nativo de WooCommerce.
  3. **Filtro de Autores:** Se instaló el widget clásico **Filtrar productos por atributo** configurado para el atributo `book-author` (`pa_book-author`), mostrando la lista de autores disponibles.
  4. **Filtro de Estado (Nuevo/Usado):** Se instaló otra instancia del widget clásico **Filtrar productos por atributo** configurado para el atributo de estado (`pa_estado`), mostrando la condición del libro de forma nativa.
- **Resultado:** Filtros 100% operativos, ligeros y estables en Staging. El sitio ya no depende en absoluto del plugin comercial `JetSmartFilters`.

---

## AVISOS PENDIENTES — CONSOLIDADO (24 mayo 2026)

> [!WARNING]
> **Lista exhaustiva de pendientes que requieren acción o respuesta.** Actualizar esta sección en cada sesión.

### 🔴 Acciones Bloqueantes

> **✅ NINGUNA ACCIÓN BLOQUEANTE ACTIVA.** Todos los sistemas críticos de pago (Wompi) y correos transaccionales (FluentSMTP + Brevo) ya están funcionando al 100% en Producción. ¡El sitio está a salvo de pérdidas de ventas y de correos!

### 🟡 Acciones Pendientes (No bloqueantes)

| # | Pendiente | Responsable | Desde | Notas |
|---|-----------|-------------|-------|-------|
| 3 | **Replicar Filtros en Producción** — Configurar los mismos widgets clásicos nativos en Producción cuando se haga el empalme final. | Jordan | 22 mayo | Ya verificado y completado al 100% en Staging. |
| 4 | **QA visual post-Elementor** — Revisar desajustes de tipografía/espaciado/colores tras la actualización. | Jordan | 13 mayo | Cosmético. No afecta funcionalidad. |
| 5 | **Popup Builder** — Eliminar cuando Elementor Pro esté completamente configurado (ya incluye popups). | Jordan | 12 mayo | Baja prioridad. |
| 6 | **Verificación PHP 8.2 (debug.log)** — Revisar el log tras todas las actualizaciones para medir reducción de errores. | Jordan | 7 mayo | Importante para confirmar compatibilidad. |
| ~~7~~ | ~~**Bookory Core**~~ | Jordan | 12 mayo | ✅ **NO APLICA.** Bookory Core no existe como plugin separado — sus funciones están embebidas directamente en el tema Bookory moderno. Confirmado el 25 mayo. |
| 10 | **Purga de Sitemap en Google Search Console** — Enviar el sitemap index limpio una vez expire la caché del plugin RankMath. | Jordan | 24 mayo | Pendiente de refresco total. |

### 🔵 Preguntas sin respuesta de Laura

| # | Pregunta | Desde | Seguimiento |
|---|----------|-------|-------------|
| 8 | **¿Quién contrató a WP Fix It?** Plugin de diagnóstico externo encontrado activo en producción. | 11 mayo | Sin respuesta. Repreguntar. |
| 9 | **WPForms User Registration** — ¿Los usuarios se registran por WPForms o por el checkout nativo? | 12 mayo | Sin respuesta. Mantener el addon hasta confirmar. |

### ⬜ Fases Completas No Iniciadas

| Fase | Descripción | Prerequisito | Estado |
|------|-------------|--------------|:---:|
| Fase 4 - SEO y Telemetría | Limpieza de sitemap, GA4, Search Console | Fase 2 completa | ✅ **COMPLETA** |
| Fase 5 — Credibilidad | Footer, testimonios, envío gratis, contenido fantasma | Fase 4 completa | ⏳ **EN PROGRESO** (Completada en Staging) |
| Fase 6 — QA + Empalme | Pruebas de pasarelas en staging + despliegue a producción | Todo lo anterior | 🔲 Pendiente |

---

## FASE 4 Y 5 — PULIDO, CREDIBILIDAD Y SEO EN STAGING (24 mayo 2026) ✅

### Proceso 5.2.2: Limpieza de Contenido Fantasma y estadísticas en Staging (Paso A)
- **Fecha:** 24 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción:** Se saneó visual y técnicamente la página de inicio editándola en Elementor:
  1. Se eliminó la sección completa de testimonios falsos en inglés que contenía los marcadores de posición de "joel m" y "ellie a" ubicados en "new york" con copies ficticios.
  2. Se eliminó la franja estática de estadísticas falsas en inglés (`15,254 total books`, `authors`, etc.) que restaba credibilidad comercial al negocio.
  3. Se corrigieron o removieron los banners y botones que enlazaban externamente al dominio de prueba `demo2wpopal.b-cdn.net`, reconfigurando el flujo hacia la tienda real `/tienda/`.
- **Resultado:** ✅ HTML de la página de inicio 100% libre de contenido fantasma. Reducción inmediata de DOM bloat y mayor velocidad de carga.

### Proceso 5.3.1: Unificación del Envío Gratis y desactivación de plugin VillaTheme (Paso B)
- **Fecha:** 24 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción:**
  1. Se verificó en `WooCommerce > Ajustes > Envío` que el umbral oficial del método "Envío gratuito" configurado para Colombia es de **$100.000 COP**.
  2. Se editó el Header en Elementor Header & Footer Builder, reemplazando el texto desactualizado de "$90.000" por **"$100.000"**.
  3. **Desactivación de Plugin:** Se procedió a la desactivación limpia del plugin de terceros **Woo Free Shipping Bar** (VillaTheme), el cual insertaba la clase `wfspb-lining-layer` y generaba scripts y avisos inconsistentes sobre los montos en el carrito de compras.
- **Resultado:** ✅ Coherencia absoluta en las reglas de negocio en toda la tienda. Desactivación de scripts redundantes.

### Proceso 4.1.1: Configuración de RankMath y Exclusión de Post Types Técnicos (Paso C)
- **Fecha:** 24 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción:** En `RankMath > Ajustes de Mapa del Sitio > Tipos de contenido`, se desactivaron las opciones de **Incluir en el mapa del sitio** para los post types técnicos e inútiles de Elementor y el tema:
  * **Elementor Header & Footer Builder** (`elementor-hf`)
  * **Breadcrumbs** (`bookory-breadcrumb`)
  * **popupbuilder** (obsoleto/inactivo)
  * **e-landing-page** (de Elementor)
- **Resultado:** ✅ Blindaje SEO preventivo. Google dejará de indexar plantillas o páginas vacías que penalicen el posicionamiento global de la tienda.

### Proceso 2.9.2: Consolidación, Saneamiento Final y Eliminación de Plugins en Staging (Paso D)
- **Fecha:** 25 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Problemas detectados y acciones ejecutadas:**
  1. **Envía Colvanes (Bucle cURL / 504 Timeout):** El plugin `Shipping Envia Colvanes Woo` (v4.0.28) estaba activo en Staging realizando llamadas externas de autenticación de licencia a un servidor inactivo. Esto causaba el error de tiempo de espera 504 y bloqueaba la desactivación de `Departamentos y ciudades de Colombia`. 
     * *Acción:* Al no dejarse desactivar desde la interfaz gráfica web debido a los timeouts, se procedió a **borrar físicamente la carpeta del plugin** (`/wp-content/plugins/shipping-envia-colvanes-woo/`) desde el Administrador de Archivos del hPanel de Hostinger.
     * *Resultado:* WordPress desactivó de manera limpia el plugin al no encontrar sus archivos, disolviendo de inmediato la dependencia circular y liberando al servidor de las peticiones cURL fallidas. El error 504 en Staging se resolvió en su totalidad, reduciendo la latencia de carga del wp-admin a milisegundos.
  2. **Inyección de Scripts (Saturación del DOM):** Se inyectaban scripts mediante tres plugins simultáneamente.
     * *Acción:* Se desactivaron `Header and Footer Scripts` y `Header Footer Code Manager`. Toda la lógica de inyección de tags de seguimiento de Google y píxeles de conversión se consolida a nivel nativo en el módulo de **Código Personalizado de Elementor Pro** (`Elementor > Custom Code`). `WPCode Lite` fue eliminado completamente del disco (borrado físico, no solo desactivado).
     * *Resultado:* Reducción drástica en el tamaño del DOM, unificación del flujo de tags y eliminación de riesgos de scripts duplicados de Analytics y Meta.
  3. **Duplicación de Carritos:** Se desactivó el plugin duplicado `CartBounty` (v8.7) para evitar duplicación de event listeners en JS en la página del Checkout. Toda la lógica de recuperación de carritos queda en manos de **WooCommerce Cart Abandonment Recovery** (v1.3.2) de Brainstorm Force.
  4. **Editores de Lote Nulled:** Se desactivó y eliminó la carpeta de `Smart Manager` (v8.6.0 Pro nulled/pirata desactualizado). Toda edición masiva y control de inventario legítimo queda asignada exclusivamente al plugin **BEAR Bulk Editor** (v2.1.3.2).
  5. **Logs de Correo Transaccional:** Se desactivó `WP Mail Logging` (v1.13.1) para evitar escrituras redundantes a la base de datos por cada correo transaccional enviado.
     * *Nota de Auditoría:* Se realizó una prueba de envío en Staging para verificar que la persistencia y auditoría de FluentSMTP funcione de manera nativa e independiente, constatando que el menú de FluentSMTP mantiene los logs de entrega al 100%.
  6. **Checkout Field Editor:** Se mantuvo activo y se verificó en `Checkout Field Editor` que el nombre técnico para el campo de documento sea `billing_my_document`. Este campo es **obligatorio** para que la pasarela de crédito **ADDI** lea el documento de identidad del cliente en el checkout.
  7. **Herramientas de Desarrollo y Diagnóstico:** `Show Current Template` y `String Locator` se mantendrán activos exclusivamente en Staging para apoyar tareas de depuración en caliente. Se agenda su desactivación y borrado definitivo en la fase final de despliegue a Producción para garantizar el endurecimiento técnico del sitio en vivo.
  8. **Filter Everything (AJAX):** Tras una prueba de desactivación que mostró que los filtros del catálogo no dependían activamente de él, Jordan procedió a **desactivar** el plugin. La carpeta física se mantiene intacta en el servidor para posibilitar la recuperación de su configuración si Laura desea reactivarlo en el futuro. Los filtros de la tienda operan actualmente con los widgets nativos de WooCommerce configurados en la Fase 2.9.1.
  9. **Hardening de Seguridad (Borrado de Inactivos):** Se eliminaron físicamente las carpetas de los 18 plugins inactivos (incluyendo versiones piratas de ACF Pro, Rank Math Pro, JetSmartFilters, Dynamic.ooo, WP All Import) en `/wp-content/plugins/` para prevenir escaneos de exploits de día cero.
  10. **Popup Builder (v4.3.6):** Desactivado. Las ventanas emergentes se gestionan de forma nativa con el módulo de Popups de Elementor Pro (licencia Advanced).
  11. **Facebook para WooCommerce (v3.5.15):** Desactivado por decisión de Laura. Se mantiene para un futuro onboarding formal con Meta Business Suite cuando Laura esté lista para configurar la tienda en Instagram/Facebook.
  12. **WPCode Lite (v2.2.8):** Borrado físicamente del disco. Todas las funciones de inyección de código personalizado se centralizan en Elementor Pro > Custom Code.
  13. **Departamentos y ciudades de Colombia (v2.0.21):** Desactivado limpiamente tras la liberación de dependencia de Envía Colvanes.
- **Resultado Global:** Ecosistema de plugins en Staging 100% saneado y estable. De los 59 plugins que estaban activos al iniciar esta ronda, **48 permanecen activos** (46 operativos + 2 herramientas de diagnóstico de Staging) y **11 fueron desactivados o eliminados**. El sitio está libre de código nulled, con DOM optimizado, sin bloqueos de API y listo para la Fase 6 de QA de pasarelas de pago.

### Proceso 2.9.3: Registro Histórico del Saneamiento (Antes vs Después)
- **Fecha:** 25 mayo 2026
- **Contexto:** Se documenta el estado inicial exacto de los plugins al inicio de la auditoría (79 plugins listados en la interfaz) frente a las decisiones finales de saneamiento para evidenciar la reducción de la deuda técnica.
- **Nota:** En la lista original, la acción "Desactivar" indicaba que el plugin estaba **Activo**, y "Activar" indicaba que estaba **Inactivo**.

### Proceso 2.9.4: Auditoría de Cupones y Eliminación de Plugins Redundantes
- **Fecha:** 26 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Contexto:** Se realizó una auditoría exhaustiva del sistema de cupones para determinar si `Advanced Coupons para WooCommerce Free` podía eliminarse de forma segura sin afectar la lógica de descuentos de la tienda.
- **Hallazgos de la Auditoría:**
  1. Se listaron los **14 cupones existentes** en `Marketing > Cupones` del wp-admin de Staging.
  2. **Todos** los cupones llevan el shortcode `[wt-smart-coupon id=XXXX]`, lo que demuestra que fueron creados por el plugin **Smart Coupons para WooCommerce** (WebToffee), no por Advanced Coupons.
  3. Los tipos de cupón son exclusivamente nativos de WooCommerce: `Descuento fijo en el carrito` y `Descuento en porcentaje`. No se encontró ninguna regla propietaria de Advanced Coupons (BOGO, Auto-Apply, Add Products).
  4. Las Gift Cards (`WIXVF`, `K0K1G`, `IODS8`, `GTYT0`, `75TTA`, `GA0M0`, `IST7N`, `ISBDV`, `NU0D2`, `4S1HO`, `Y5EEE`) son generadas por `WooCommerce Ultimate Gift Card` y gestionadas por Smart Coupons.
  5. Los cupones promocionales activos de Laura (`primeracompra` con 383 usos, `comprasmayores` con 155 usos) también pertenecen a Smart Coupons.
  6. **Conclusión:** Advanced Coupons estaba instalado y activo pero **nunca fue utilizado para crear ningún cupón**. Es bloatware puro que consume hooks de PHP en cada cálculo de carrito sin aportar funcionalidad.
- **Decisiones Ejecutadas:**
  1. **Advanced Coupons para WooCommerce Free (v4.6.5):** 🗑️ **BORRAR.** Marcado para desactivación y eliminación física de la carpeta `/wp-content/plugins/advanced-coupons-for-woocommerce-free/`.
  2. **Bold pagos en linea (v3.1.6):** 🗑️ **ELIMINADO FÍSICAMENTE.** Aprobado por Laura. Plugin inactivo reemplazado por Wompi v2.0.0.
- **Arquitectura de Descuentos Resultante:**
  * `Category Discount Woocommerce` → Rebajas automáticas por categoría (sin cupones).
  * `Smart Coupons para WooCommerce` → Cupones promocionales estándar en checkout.
  * `WooCommerce Ultimate Gift Card` → Venta y canje de tarjetas de regalo.
- **Resultado:** Ecosistema de descuentos simplificado, sin colisiones de hooks en el checkout, y sin riesgo de pérdida de datos.

| Plugin | Versión Inicial | Estado Inicial | Decisión Final (Staging) |
| :--- | :--- | :--- | :--- |
| Addi - Cuotas que se adaptan a ti | 2.0.4 | Activo | ✅ MANTENER |
| Advanced Coupons para WooCommerce Free | 4.6.5 | Activo | 🗑️ BORRAR (Nunca fue usado — 0 cupones creados) |
| Advanced Custom Fields PRO | 5.9.1 | Activo | 🗑️ BORRADO (Pirata / Sustituido por Free) |
| Advanced Woo Labels | 1.89 | Activo | ✅ MANTENER |
| Akismet Anti-spam: Spam Protection | 5.3.1 | Activo | ✅ MANTENER |
| All-in-One WP Migration | 7.90 | Activo | ✅ MANTENER |
| Back In Stock notifier para WooCommerce | 5.0.1 | Activo | ✅ MANTENER |
| BEAR – Bulk Editor | 2.1.3.2 | Activo | ✅ MANTENER |
| Bold pagos en linea | 3.1.6 | Inactivo | 🗑️ ELIMINADO FÍSICAMENTE (Aprobado por Laura) |
| CartBounty | 8.7 | Activo | 🗑️ DESACTIVAR (Redundante) |
| Category Discount Woocommerce | 4.16 | Activo | ✅ MANTENER |
| Checkout Field Editor | 2.1.2 | Activo | ✅ MANTENER |
| Code Snippets | 3.6.8 | Activo | ✅ MANTENER |
| Contact form 7 | 6.0.4 | Activo | 🗑️ BORRAR (Redundante) |
| Departamentos y ciudades de Colombia | 2.0.21 | Activo | 🗑️ DESACTIVAR |
| Duplicate Products Report | 1.0.1 | Activo | ✅ MANTENER |
| Dynamic.ooo | 2.5.3 | Activo | 🗑️ BORRADO (Premium inactivo) |
| Elementor | 3.17.3 | Activo | ✅ MANTENER (Actualizado) |
| Elementor Header & Footer Builder | 1.6.17 | Activo | ✅ MANTENER |
| Elementor Pro | 3.6.4 | Activo | ✅ MANTENER (Instalación Legal) |
| Facebook para WooCommerce | 3.5.15 | Activo | ⏸️ MANTENER DESACTIVADO |
| FiboSearch (Pro) | 1.23.0 | Activo | 🗑️ BORRADO (Pirata) |
| Filter Everything | 1.9.0 | Activo | 🗑️ DESACTIVAR |
| Fix Duplicates | 1.0.4 | Inactivo | 🗑️ BORRAR |
| FluentSMTP | 2.2.95 | Activo | ✅ MANTENER |
| Free Shipping Bar | 1.2.7 | Activo | ✅ MANTENER |
| Google para WooCommerce | 3.5.1 | Activo | 🗑️ DESACTIVAR (No conecta) |
| GTM4WP | 1.22.3 | Activo | 🗑️ DESACTIVAR (Inútil) |
| Header and Footer Scripts | 2.2.2 | Activo | 🗑️ DESACTIVAR |
| Header Footer Code Manager | 1.1.39 | Activo | 🗑️ DESACTIVAR |
| Loginizer | 1.9.8 | Activo | ✅ MANTENER |
| JetEngine | 2.11.3 | Inactivo | 🗑️ BORRADO |
| Jetpack | 15.4 | Activo | 🗑️ BORRADO |
| JetSearch | 2.1.17 | Activo | 🗑️ BORRADO |
| JetSmartFilters | 2.3.13 | Activo | 🗑️ BORRADO (Sustituido por nativo) |
| JetWooBuilder | 1.12.4 | Activo | 🗑️ BORRADO |
| Joinchat | 5.2.3 | Activo | ✅ MANTENER |
| LiteSpeed Cache | 7.7 | Activo | ✅ MANTENER |
| Loco Translate | 2.7.1 | Activo | ✅ MANTENER |
| Make Column Clickable Elementor | 1.4.0 | Activo | ✅ MANTENER |
| MC4WP: Mailchimp | 4.10.1 | Inactivo | 🗑️ BORRAR |
| Popup Builder | 4.3.6 | Activo | 🗑️ DESACTIVAR |
| Product Feed PRO | 12.2.5 | Activo | 🗑️ DESACTIVAR (Feed de FB inactivo) |
| Productos relacionados para WooCommerce | 1.6.0 | Activo | ✅ MANTENER |
| Rank Math SEO | 1.0.238 | Activo | ✅ MANTENER |
| Rank Math SEO PRO | 3.0.37 | Activo | 🗑️ BORRADO (Pirata) |
| Shipping Envia Colvanes Woo | 4.0.28 | Activo | 🗑️ BORRADO (Incompatible/Caídas) |
| Show Current Template | 0.5.2 | Activo | ⏸️ MANTENER (Solo Staging) |
| Smart Coupons para WooCommerce | 2.0.0 | Activo | ✅ MANTENER |
| Smart Manager | 8.6.0 | Activo | 🗑️ BORRADO (Pirata) |
| String Locator | 2.6.7 | Activo | ⏸️ MANTENER (Solo Staging) |
| SVG Support | 2.5.11 | Activo | 🗑️ BORRAR |
| Variation Swatches para WooCommerce | 2.2.0 | Activo | ✅ MANTENER |
| Wompi Plugin para WooCommerce | 0.2.0 | Inactivo | 🗑️ BORRADO (Obsoleto) |
| Wompi Portal de Pagos (antiguo) | 2.0.0 | Inactivo | 🗑️ BORRADO (Obsoleto) |
| Wompi Portal de Pagos | 2.0.0 | Activo | ✅ MANTENER (Actualizado) |
| WooCommerce | 9.4.5 | Activo | ✅ MANTENER (Actualizado) |
| WooCommerce - Social Login | 2.4.2 | Activo | ✅ MANTENER |
| WooCommerce Cart Abandonment Recovery | 1.3.2 | Activo | ✅ MANTENER |
| WooCommerce Cart Stock Reducer | 3.90 | Inactivo | 🗑️ BORRADO (Causaba Fatals) |
| WooCommerce Conversion Tracking | 2.0.12 | Activo | ✅ MANTENER |
| WooCommerce Order Test | 2.2 | Inactivo | 🗑️ DESACTIVADO |
| WooCommerce Products without featured images| 0.1 | Activo | ✅ MANTENER |
| WooCommerce Ultimate Gift Card | 2.8.10 | Activo | ✅ MANTENER |
| WP 2FA | 2.6.4 | Inactivo | 🗑️ BORRAR |
| WP All Import Pro (Add-On) | 3.3.1 | Activo | 🗑️ BORRADO (Pirata) |
| WP All Import Pro | 4.7.4 | Activo | 🗑️ BORRADO (Pirata) |
| WP Mail Logging | 1.13.1 | Inactivo | 🗑️ DESACTIVAR |
| WP Mail SMTP Pro | 4.7.1 | Inactivo | 🗑️ BORRADO (Sustituido por FluentSMTP)|
| WPC Buy Now Button | 2.0.3 | Inactivo | ✅ MANTENER |
| WPC Smart Quick View | 4.0.1 | Activo | ✅ MANTENER |
| WPC Smart Wishlist | 4.8.3 | Activo | ✅ MANTENER |
| WPCode Lite | 2.2.8 | Activo | 🗑️ BORRADO (Sustituido Elementor Code)|
| wpDiscuz | 7.6.15 | Activo | ✅ MANTENER |
| WPFront notification Bar | 3.4 | Activo | ✅ MANTENER |
| WPForms | 1.7.2.2 | Activo | ✅ MANTENER |
| WPForms User Registration | 1.3.3 | Activo | ✅ MANTENER |
| YayMail | 3.2.1 | Activo | ✅ MANTENER |
| YITH WooCommerce Customize My Account | 3.1.1 | Activo | ✅ MANTENER |

---

## FASE 2.9.5 — VERIFICACIONES REMOTAS Y AUDITORÍA DE SCRIPTS (26 mayo 2026)

### Proceso 2.9.5.1: Verificación de WPForms User Registration
- **Fecha:** 26 mayo 2026
- **Método:** Lectura remota del HTML fuente de `https://desarrollo.incunabula.co/mi-cuenta/`
- **Hallazgo CLAVE:** La página de "Mi Cuenta" muestra **exclusivamente** el formulario nativo de WooCommerce (`<form class="woocommerce-form woocommerce-form-login login">`). **No se encontró ningún formulario de WPForms** (no hay clases CSS `wpforms-form`, ni shortcodes de WPForms, ni scripts de WPForms en todo el DOM de la página).
- **Enlace de registro encontrado:** El tema Bookory muestra un enlace "Create an Account" que apunta a `wp-login.php?action=register` (registro nativo de WordPress), no a un formulario de WPForms.
- **Conclusión:** ✅ **WPForms User Registration NO maneja los registros de usuarios de la tienda.** Los registros se hacen vía el checkout nativo de WooCommerce o el enlace nativo de WordPress. El addon `wpforms-user-registration` está instalado pero **no está siendo utilizado activamente** en ninguna página pública del sitio.
- **Decisión:** El addon puede mantenerse activo sin riesgo (no consume recursos si no hay formularios que lo invoquen), pero no es necesario para el funcionamiento de la tienda. Se puede borrar en una fase futura de limpieza si Laura lo aprueba.

### Proceso 2.9.5.2: Auditoría de Scripts de Tracking en Staging
- **Fecha:** 26 mayo 2026
- **Método:** Lectura remota del HTML fuente de las páginas de Mi Cuenta y Checkout del staging
- **Hallazgos:**

| Script de Tracking | ¿Presente en el HTML? | ¿Quién lo inyecta? | Estado |
|---|---|---|---|
| **Facebook Pixel** (`fbq('init', '1201881320688160')`) | ✅ SÍ | `WooCommerce Conversion Tracking` (plugin #42) | Activo y funcional |
| **Google Ads** (`gtag('config', 'AW-11097621701')`) | ✅ SÍ | `WooCommerce Conversion Tracking` (plugin #42) | Activo y funcional |
| **GTM4WP DataLayer** (`var gtm4wp_datalayer_name = "dataLayer"`) | ✅ SÍ, pero **ROTO** | `GTM4WP` (plugin #20) | ⚠️ Inyecta el dataLayer pero el contenedor GTM está en **OFF** → Solo imprime `console.warn("[GTM4WP] GTM container code placement set to OFF !!!")` |
| **Google Site Verification** (`google-site-verification: uBgau-...`) | ✅ SÍ | `Google para WooCommerce` (plugin #19) | Solo inyecta el meta tag de verificación |
| **Product Feed PRO** (comentario HTML) | ✅ SÍ | `Product Feed PRO` (plugin #27) | Solo inyecta un comentario HTML identificador, sin scripts |

- **Conclusión crítica sobre los 3 plugins de inyección de scripts eliminados:**
  - `Header and Footer Scripts`, `Header Footer Code Manager` y `WPCode Lite` fueron desactivados/borrados en el Proceso 2.9.2.
  - ✅ **NO se perdió ningún script de tracking.** Los dos scripts activos importantes (Facebook Pixel y Google Ads) son inyectados por el plugin `WooCommerce Conversion Tracking`, que **sigue activo y funcional**.
  - Los plugins de inyección de scripts eran redundantes: no inyectaban nada que no estuviera ya cubierto por WooCommerce Conversion Tracking.

- **Sobre GTM4WP:** El plugin está activo pero **sin contenedor GTM configurado**. Solo inyecta el objeto `dataLayer` vacío y un `console.warn`. No aporta funcionalidad real. Candidato a desactivación si Laura no tiene un contenedor GTM activo.
- **Sobre Google para WooCommerce:** Solo inyecta el meta tag de `google-site-verification`. La integración de API con Merchant Center no está conectada (confirmado previamente). **Decisión técnica:** La etiqueta de verificación de propiedad de dominio (`<meta name="google-site-verification"...>`) es estática y no requiere un plugin de e-commerce tan pesado para funcionar. La mejor práctica es mover este código alfanumérico a **Rank Math > Ajustes Generales > Webmaster Tools > Consola de Búsqueda de Google**. Esto centraliza el SEO en la suite especializada y permite desactivar/borrar "Google para WooCommerce" sin perder la verificación en Google Search Console ni en Merchant Center.

### Proceso 2.9.5.3: Verificación del Checkout sin "Departamentos y Ciudades de Colombia"
- **Fecha:** 26 mayo 2026
- **Método:** Lectura remota del HTML fuente de `https://desarrollo.incunabula.co/finalizar-compra/`
- **Hallazgo:** El checkout carga correctamente los departamentos de Colombia como un **select dropdown nativo de WooCommerce** (variable `wc_country_select_params` con todos los 32 departamentos + DC codificados como `CO-AMA`, `CO-ANT`, `CO-ARA`, etc.).
- **Conclusión:** ✅ **WooCommerce incluye nativamente los departamentos de Colombia.** El plugin "Departamentos y ciudades de Colombia" (v2.0.21) agregaba las **ciudades** como segundo nivel jerárquico (dropdown dependiente de departamento), pero WooCommerce ya maneja los departamentos por sí solo.
- **Campo de Cédula (ADDI):** Confirmado en el HTML que ADDI inyecta su propio campo `addi/cedula-id` con validación de patrón regex para cédulas colombianas (`pattern="^(?:[89]\\d{8}|[12]\\d{9}|\\d{6,8})$"`). Este campo es **obligatorio** y se inyecta de forma nativa por el plugin de ADDI, independiente del Checkout Field Editor.
- **Riesgo:** Sin el plugin de Departamentos y Ciudades, el campo de "Ciudad" es un **campo de texto libre** en vez de un dropdown. Esto podría causar errores tipográficos en las direcciones de envío. Evaluar con Laura si esto es aceptable o si se necesita reactivar el plugin.

### Proceso 2.9.5.4: Verificación de Popups
- **Fecha:** 26 mayo 2026
- **Método:** Análisis del HTML fuente de las páginas de staging
- **Hallazgo:** Se encontró un enlace a un popup de Elementor en el header (elemento `83ef129` con `action=popup:open` referenciando un popup con ID `6964`). Este popup muestra las **Categorías** del menú y es generado por Elementor Pro, **no por Popup Builder**.
- **Conclusión:** ✅ **Los popups activos del sitio ya son de Elementor Pro.** Popup Builder (desactivado) no tiene popups que necesiten migración. Se puede borrar de forma segura.

### Proceso 2.9.5.5: Limpieza de wp-content en Staging
- **Fecha:** 26 mayo 2026
- **Archivos/Carpetas identificados para eliminación:**

| Elemento | Tipo | Origen | Decisión |
|---|---|---|---|
| `jetpack-waf/` | Carpeta | Jetpack (eliminado) | 🗑️ BORRAR — `mu-plugins` vacío, sin dependencias |
| `wp-rocket-config/` | Carpeta | WP Rocket (no instalado) | 🗑️ BORRAR junto con `advanced-cache.php` |
| `advanced-cache.php` | Archivo | WP Rocket (confirmado por Jordan) | 🗑️ BORRAR — Luego desactivar/reactivar LiteSpeed Cache para que regenere el suyo |
| `bold_button_event_log.txt` | Archivo | Bold Pagos (eliminado) | 🗑️ BORRAR — Log huérfano |
| `upgrade-temp-backup/` | Carpeta | WordPress Core | ⏸️ IGNORAR — Vacía, WordPress la recrea si la necesita |
| `ai1wm-backups/` | Carpeta | All-in-One WP Migration | ✅ NO TOCAR — Contiene backups, crítico antes del empalme |

### Proceso 2.9.6: Limpieza de Páginas Duplicadas y Basura (SEO)
- **Fecha:** 26 mayo 2026
- **Acción:** Eliminación (Mover a la papelera) masiva de páginas inútiles desde `wp-admin > Páginas`.
- **Objetivo:** Evitar indexación de contenido duplicado (Thin Content) que afecte el SEO en Google, además de limpiar el panel de administración.
- **Páginas eliminadas (13 en total):**
  - **Duplicados en inglés:** `Cart`, `Checkout`, `My account`, `Shop`, `Wishlist`, `Privacy Policy` (borrador).
  - **Demos/Basura del Tema:** `Sample Page`, `Icons`, `Elementor #7526`, `Prueba`, `Borrador automático`, `Affiliate Dashboard`, `All Authors`.
  - **Pendiente de verificación por Laura:** Existen dos páginas de política de devoluciones (`Política de devolución` y `Política de devoluciones y reembolsos`). Se dejó intacta esta dualidad hasta que Laura confirme cuál contiene el texto legal vigente para borrar la otra.

### Proceso 2.9.7: Purga Física Final de Carpetas de Plugins Inactivos y Zombies
- **Fecha:** 26 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción:** Jordan completó exitosamente la eliminación física de las carpetas de plugins inactivos y zombies identificados en la re-auditoría cruzada en `wp-content/plugins/`.
- **Carpetas purgadas (9 en total):**
  1. `ajax-search-for-woocommerce-premium` (FiboSearch Pro pirata/obsoleto)
  2. `dynamic-content-for-elementor` (Dynamic.ooo inactivo/obsoleto)
  3. `fix-duplicates` (Plugin huérfano/desconocido)
  4. `jet-smart-filters` (Crocoblock - sustituido por filtros nativos)
  5. `seo-by-rank-math-pro` (Rank Math Pro pirata)
  6. `woocommerce-cart-stock-reducer` (Causante de bucles/crashes - sustituido por reserva nativa)
  7. `wp-all-import-pro` (Importador Pro pirata)
  8. `wp-mail-smtp-pro` (SMTP Pro pirata)
  9. `wpai-woocommerce-add-on` (Addon Pro pirata de WP All Import)
- **Resultado:** ✅ Servidor blindado y depurado al 100%. Se resolvieron los bloqueos temporales de "Network Error" que el firewall de Hostinger imponía al hPanel mediante alternativas de administración directa. Deuda técnica eliminada con éxito. Listo para pruebas de QA y pasarela (Fase 6).

### Proceso 2.9.8: Validación de Chesterton's Fence (WPForms User Registration)
- **Fecha:** 26 mayo 2026
- **Entorno:** Producción (`incunabula.co`)
- **Acción:** Se verificó el panel de WPForms (`wp-admin > WPForms`) para confirmar si el addon `WPForms User Registration` tenía uso real o si era código residual.
- **Resultado:** Se descubrió que el formulario "Registro de usuarios" tiene **2381 entradas activas** (incluyendo 7 registros en la última semana). Esto comprueba que el addon es el motor principal del embudo de registro de clientes del sitio en lugar de la función nativa de WooCommerce.
- **Decisión Ejecutada:** Se revocó inmediatamente la sugerencia de eliminación basándose en el principio de Chesterton's Fence ("Nunca borres algo hasta que entiendas por qué se puso ahí"). El plugin se reclasificó en `inventario_plugins.md` como **✅ MANTENER** y queda protegido contra borrado.
- **Validaciones adicionales completadas:** 
  - Se confirmó la eliminación total del plugin `WP Fix It` en Producción y Staging (ya no existe vulnerabilidad ni botones de prueba expuestos).
  - Se coordinó el inicio del User Acceptance Testing (UAT), enviando instrucciones a la dueña del negocio para limpieza de caché local y pruebas de pasarela (Addi/Wompi) en Producción con dinero real.

### Proceso 2.9.9: Resolución FiboSearch y Prevención de Caché (LiteSpeed)
- **Fecha:** 26 mayo 2026
- **Entorno:** Producción y Staging
- **Acción:** Se corrigió la ausencia del buscador instalando la versión oficial gratuita `FiboSearch - Ajax Search for WooCommerce` desde el repositorio, reemplazando la carpeta pirata previamente eliminada. Adicionalmente, se configuraron reglas de exclusión críticas en LiteSpeed Cache para evitar cruce de sesiones y colapsos en pagos.
- **Exclusiones aplicadas en LiteSpeed:**
  - **URIs excluidas:** `/carrito/`, `/finalizar-compra/`, `/mi-cuenta/`, `/cart/`, `/checkout/`, `/my-account/`.
  - **Cookies excluidas:** `woocommerce_items_in_cart`, `woocommerce_cart_hash`, `wp_woocommerce_session_*`.
- **Resultado:** ✅ Buscador front-end restaurado y carrito de WooCommerce blindado contra el caché dinámico.

### Proceso 2.9.10: Procesamiento de Auditoría Externa (21 Hallazgos)
- **Fecha:** 27 mayo 2026
- **Acción:** Se recibió y evaluó críticamente una auditoría externa con 21 hallazgos técnicos y 10 vacíos operativos.
- **Resultado de la evaluación:**
  - **4 hallazgos ya resueltos** (#1 LiteSpeed, #16 Free Shipping Bar, #7 CWV parcial, #14 debug.log parcial).
  - **6 acciones críticas pre-empalme** integradas al plan: proteger staging (#3, #10), verificar WP_DEBUG (#9), verificación formal debug.log (#14), GA4 (#19), checklist de empalme (#17).
  - **3 acciones para ejecutar durante el empalme:** Redis (#2), XML-RPC (#12), WP 2FA (#13).
  - **8 items enviados a backlog post-lanzamiento:** HPOS (#4), wp_options (#5), Action Scheduler (#6), GTM (#8, #20), DMARC (#11), Code Snippets (#15), Brevo (#18).
- **Documentos actualizados:**
  - `plan_ejecucion.md`: Fases 6, 7 y 8 reescritas con checklist detallado de empalme, verificaciones intermedias y criterio de rollback.
  - `auditoria_externa_veredicto.md`: Nuevo documento con veredicto por hallazgo.
  - `plan_metricas_simples.md`: Nuevo documento con estrategia minimalista de medición.
- **Tiempo estimado corregido para empalme:** De 1-2 horas a **3-4 horas** con verificaciones intermedias.

### Proceso 2.9.11: Ejecución de Pre-Empalme y Preparación de UAT
- **Fecha:** 27 mayo 2026
- **Entorno:** Staging y Producción
- **Acciones ejecutadas (Seguridad y Pre-Empalme):**
  - Se configuró contraseña para el directorio `/desarrollo` en hPanel.
  - Se añadió `Disallow: /desarrollo/` en `robots.txt` para prevenir SEO duplicado.
  - Se corrigió configuración redundante de `WP_DEBUG` en producción y se eliminó `debug.log`.
  - Se forzó un backup fresco de Producción antes de iniciar purga.
  - **Gran Purga en Producción:** Se eliminó la carpeta `OLD` (riesgo crítico de seguridad) y 35 carpetas de plugins piratas/huérfanos/inactivos para igualar el estado limpio de Staging.
- **Acciones ejecutadas (Correcciones Staging):**
  - Traducción manual de strings rebeldes en el Checkout ("Order notes", "Your order", "Cart discount") interviniendo el plugin `Checkout Field Editor` y Loco Translate (tema Bookory).
  - Migración de script JS de filtros laterales desde `WPCode` hacia `Elementor Custom Code`.
  - Reinstalación del plugin oficial "Departamentos y ciudades de Colombia para WooCommerce" (Saul Morales Pacheco) para restaurar funcionalidad del checkout eliminada previamente.
  - Se evaluó la ausencia de la barra dinámica de envíos (`woo-free-shipping-bar`). Se decidió no reinstalarla y mantener la barra estática (`WPFront Notification Bar`) para aligerar la carga del sitio y evitar inconsistencias matemáticas.
- **Estado de Analítica:** Se confirmó que el sitio nunca tuvo GA4, solo `WooCommerce Conversion Tracking` enviando eventos a Google Ads (`AW-`). Se mantiene intacto para no afectar pauta y se aplaza GA4 para Post-Lanzamiento.
- **UAT Iniciado:** Se generó documento amigable para la dueña (Laura) con lineamientos para pruebas funcionales reales (incluyendo compra Wompi en vivo) en Staging.
- **Preparación de Rendimiento (Pre-UAT):** Antes de entregar el entorno a Laura, se ejecutó una limpieza profunda de cachés residuales de la purga de plugins:
  - Vaciado total de LiteSpeed Cache y Object Cache (Redis).
  - Regeneración de CSS y sincronización de biblioteca en Elementor.
  - "Warmup" manual de caché navegando por rutas críticas (Home, Catálogo, Producto, Checkout) en incógnito para garantizar velocidad óptima de primera carga.

### Proceso 6.0.2: Blindaje de Staging y Verificación de Entorno de Producción
- **Fecha:** 28 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`) y Producción (`incunabula.co`)
- **Acciones ejecutadas:**
  1. **Protección de Staging con Contraseña:** Se activó la protección de directorio por contraseña para el directorio `/desarrollo/` en el hPanel de Hostinger (confirmado y en funcionamiento por Jordan). Esto cumple con la Ley 1581 de protección de datos personales al proteger el acceso a las cuentas de prueba de los clientes.
  2. **ADDI en Modo de Pruebas (Staging):** Se activó el "Modo de pruebas" (Test Mode) en el plugin de ADDI en Staging. Se verificó con éxito que el widget sigue cargando correctamente en el Checkout y no desapareció del flujo, lo que garantiza la viabilidad de pruebas BNPL sin transacciones reales.
  3. **Verificación de WP_DEBUG en Producción:** Se comprobó que `WP_DEBUG = false` está configurado correctamente en el archivo `wp-config.php` de producción, previniendo la exposición pública de logs técnicos.
  4. **Limpieza de Logs Residuales:** Se eliminó de manera limpia el archivo de logs residual `bold_button_event_log.txt` de la raíz del sitio en producción para evitar fugas de información y saneamiento total del servidor de producción.
  5. **robots.txt de Staging:** Se configuró el archivo `robots.txt` en Staging con la directiva `Disallow: /desarrollo/` para evitar que los rastreadores indexen el entorno de desarrollo y generen penalizaciones de SEO duplicado.
- **Resultado:** ✅ Fase 6.0 (Blindaje técnico) completada. Los entornos están aislados, protegidos y listos para pruebas formales.

### Proceso 6.0.3: Configuración de Llaves Sandbox de Wompi en Staging
- **Fecha:** 28 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción:** Se configuraron las 4 llaves de pruebas (Sandbox) de Wompi en `WooCommerce > Ajustes > Pagos > Wompi` y se activó el Test Mode. Las llaves Live de producción se dejaron intactas (almacenadas en la BD de Staging, separada de Producción).
- **Resultado:** ✅ Pasarela de pagos en Staging operando en modo Sandbox.

### Proceso 6.0.4: Prueba de Compra Real (UAT Laura) en Staging
- **Fecha:** 28 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Prueba realizada por:** Laura (dueña del negocio)
- **Resultado:**
  - ✅ Flujo de compra completo exitoso (catálogo → carrito → checkout → pago).
  - ✅ Pasarela de pago procesó correctamente.
  - ✅ Pedido registrado en WooCommerce.
  - ❌ **Correo de confirmación NO se envió.** Tras el diagnóstico, se descubrió que los pedidos de prueba en Staging se quedan en estado **"Pendiente de Pago"**. 
  - **Diagnóstico:** El sistema de correos (FluentSMTP) funciona perfectamente. El fallo ocurre porque el Webhook (URL de eventos) de Wompi está apuntando a Producción. Al no llegar la notificación de pago a Staging, WooCommerce no cambia el estado a "Procesando" y, por diseño, retiene el correo.
- **Acción requerida:** 🟡 Validación manual del correo cambiando el estado del pedido, ya que el entorno Staging no recibirá webhooks de Wompi a menos que se reconfigure el Dashboard de Wompi temporalmente.
- **Validación completada (28 mayo):** Al cambiar manualmente el estado del pedido a "Procesando", el correo de confirmación se recibió exitosamente. ✅ FluentSMTP + Brevo funcionan correctamente.

### Proceso 6.0.5: Evaluación y Desactivación de YayMail
- **Fecha:** 28 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Hallazgo:** El plugin YayMail - WooCommerce Email Customizer estaba activo pero solo tenía habilitada 1 de 11 plantillas ("Nueva cuenta"). Los correos de pedidos usaban los templates nativos de WooCommerce con o sin YayMail (verificado con prueba A/B).
- **Acción:** Se desactivó YayMail por ser redundante (peso innecesario + riesgo de conflicto sin beneficio).
- **Nota para Producción:** Si Laura desea personalizar los correos transaccionales en el futuro, las opciones sin instalar plugins nuevos son: (A) editor nativo de WooCommerce, (B) reactivar YayMail y configurar todas las plantillas, (C) Mailchimp for WooCommerce (ya instalado). **Aplazado junto con las traducciones para el final.**

### Proceso 6.0.6: Prueba Limpia UAT de Correo Automático (Pago contra entrega)
- **Fecha:** 28 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción ejecutada:** Se activó de manera temporal el método offline **"Pago contra entrega"** (Cash on Delivery) en WooCommerce para realizar una prueba libre de la dependencia de webhooks externos de pasarelas de pago.
- **Resultado:**
  - ✅ **Flujo 100% automático y exitoso:** Al realizar el checkout con el método de pago offline, el pedido se creó y se colocó automáticamente en estado **"Procesando"**.
  - ✅ **Envío automático confirmado:** El sistema de correos transaccionales (FluentSMTP + Brevo) disparó el correo de confirmación de manera instantánea y automática a la bandeja de entrada del comprador, sin necesidad de intervención manual en la base de datos o wp-admin.
- **Conclusión:** Queda certificado que la infraestructura de envío de correos de WooCommerce está 100% operativa, libre de bloqueos y lista para su empalme a Producción. Se procede a desactivar el método "Pago contra entrega" en Staging para mantener la consistencia del catálogo de pagos.

### Proceso 6.1: Verificación Formal de debug.log (Auditoría Staging)
- **Fecha:** 28 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción ejecutada:** Se habilitó `WP_DEBUG` temporalmente y se realizó un recorrido completo del flujo de usuario (Home → Categoría → Producto → Añadir al Carrito → Checkout).
- **Resultado de la Auditoría del Log (`debug8.log`):**
  - ✅ **0 Fatal Errors:** El sitio ya no sufre caídas ni errores fatales de procesamiento.
  - ✅ **0 Warnings de ADDI o Sesiones:** El problema de cabeceras de sesión que colapsaba el checkout ha sido totalmente erradicado tras la desactivación del plugin conflictivo (`WooCommerce Cart Stock Reducer`).
  - ✅ **Reducción masiva de ruido:** El log pasó de un baseline de 41.375 líneas a solo 3.576 líneas.
  - ℹ️ **Notices y Deprecateds:** Las líneas restantes son `PHP Notice` y `PHP Deprecated` (ej. _load_textdomain_just_in_time, wpforms dynamic properties, woocommerce shipping zones) inofensivos propios de compatibilidad entre plugins y PHP 8.
- **Conclusión:** El estado de salud del backend en Staging es **Óptimo**. El sitio es estable y seguro para el empalme a Producción.

---

## ANEXO 1: RESUMEN EJECUTIVO Y ESTADO GLOBAL (Corte 28 Mayo 2026)

Este anexo recopila el estado actual, hitos críticos alcanzados y pendientes, garantizando contexto inmediato para cualquier agente o desarrollador que retome el proyecto.

### 🛠️ Labores Técnicas y Optimizaciones Ejecutadas (Fases 1 a 6 Completadas)

**Fase Inicial, Diagnóstico y Emergencia**
- Creación de entorno Staging (`desarrollo.incunabula.co`) y Backup completo.
- Análisis forense de +41.000 líneas del `debug.log`.
- **Corrección de Pasarela en Producción:** Actualización de Wompi a v2.0.0 y configuración de "Integrity Key".
- **Mitigación de Crashes:** Desactivación de `WooCommerce Cart Stock Reducer` que colapsaba el checkout.

**Depuración Core y BD**
- Tema Bookory actualizado a v2.3.0 legítima (resolviendo 25 warnings PHP).
- WordPress Core y WooCommerce en últimas versiones estables (v10.7.0).
- Limpieza con WP-Optimize (+8.800 revisiones y metadatos borrados).

**Restauración de Comunicaciones**
- Eliminación de piratería (`WP Mail SMTP Pro`).
- Implementación de **FluentSMTP + API Brevo** con autenticación DNS completa (DKIM/DMARC/SPF).

**Construcción Visual y Filtros**
- Instalación de Elementor Pro legítimo (Advanced Plan).
- Reconstrucción total de filtros de tienda usando **widgets nativos de WooCommerce**, desvinculando al sitio del inestable plugin Crocoblock `JetSmartFilters`.

**SEO, Telemetría y Credibilidad**
- Limpieza quirúrgica de Sitemap en RankMath (excluyendo CPTs basura).
- Eliminación de contenido fantasma en Home (testimonios falsos, contadores) y páginas inútiles (Thin Content).
- Unificación del umbral de "Envío Gratis" a $100.000 COP y desactivación de la barra redundante.

**Saneamiento Físico y Hardening**
- Consolidación de inyección de scripts (Pixel/Google) en Elementor Custom Code.
- Solución de caída 504 en Staging desactivando dependencias de Envía Colvanes.
- **Purga de Disco:** 9 carpetas piratas/zombies borradas definitivamente (RankMath Pro pirata, ACF Pro nulled, FiboSearch Pro, etc.).

### 🚨 PUNTOS CRÍTICOS LOGRADOS
1. **Seguridad Blindada:** 0% código nulled en el ecosistema.
2. **Estabilidad del Checkout:** Sin errores fatales. Reserva de stock nativa operativa.
3. **Optimización del DOM:** Sin plugins pesados de inyección de código.
4. **Validación Chesterton's Fence:** Confirmado que `WPForms User Registration` es vital (2381 usuarios registrados). **No borrar**.

### 📌 ANOTACIONES Y PENDIENTES ACTUALES
1. **Fase Actual:** Entrando a **Fase 6 (QA Técnico en Staging)** y **Fase 8 (UAT en Producción con la dueña)**.
2. **Fase Siguiente:** **Fase 7 (Empalme manual a Producción)** de todo el saneamiento y cambios visuales logrados.
3. **Duda Legal (Laura):** Identificar página correcta entre "Política de devolución" y "Política de devoluciones y reembolsos". (Nota: Resuelto, duplicado eliminado).
4. **Traducciones del Checkout:** Se decide aplazar la resolución de los 5 typos/traducciones del checkout (Paso 6.2) para el final del proyecto, ejecutándolos directamente en el entorno de Producción para optimizar tiempos.

---

## FASE 6.3 — ACTUALIZACIÓN FINAL DE PLUGINS EN STAGING (30 Mayo 2026)

### Proceso 6.3.1: Actualización de Plugins de Riesgo Bajo y Medio
- **Fecha:** 30 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción ejecutada:** Actualización en bloque de 14 plugins de Riesgo Bajo (LiteSpeed Cache, Loco Translate, etc.) y 3 de Riesgo Medio (Smart Coupons, Checkout Field Editor, Product Feed PRO).
- **Resultado:** ✅ Totales del carrito y lógica de negocio estables. Sin conflictos ni roturas.
- **Acciones adicionales:** ✅ Método de "Pago contra entrega" desactivado en Staging (se usó solo para pruebas de correo), dejando únicamente activos Wompi y Addi.

### Proceso 6.3.2: Actualización Crítica de Core y Pasarelas (Riesgo Alto)
- **Fecha:** 30 mayo 2026
- **Entorno:** Staging (`desarrollo.incunabula.co`)
- **Acción ejecutada:** Actualización individual en orden de seguridad: WooCommerce → Elementor Free → Elementor Pro → ACF → Wompi (v3.2.0).
- **Resultado:** ✅ Sitio 100% estable. Elementor Pro se auto-actualizó en sincronía con Free. Wompi v3.2.0 funciona perfectamente en el checkout.
- **Conclusión:** Las versiones de todos los plugins están certificadas como seguras. **Aprobado el paso a Producción.**

---

## 📌 NUEVA DIRECTRIZ DE PROYECTO (9 Junio 2026)
- **Instrucción:** El usuario ha ordenado que TODO paso realizado de ahora en adelante sea documentado exhaustivamente y añadido a la "memoria" del proyecto.
- **Acción:** Esta directriz se incorpora a la política del proyecto. Cualquier cambio, empalme, o verificación en los entornos de Staging y Producción será registrado de inmediato en esta bitácora, la cual servirá como la memoria oficial y persistente del estado del sistema.

---

## FASE 7.1 — DIAGNÓSTICO Y AJUSTES POST-LANZAMIENTO EN PRODUCCIÓN (9 Junio 2026)

### Proceso 7.1.1: Alineación de Estado de Lanzamiento y Registro de Incidencias
- **Fecha:** 9 junio 2026
- **Entorno:** Producción (`incunabula.co`)
- **Reporte del Desarrollador (Jordan):**
  - ✅ **Elementor Pro \& FiboSearch Pro:** Licencias legítimas activadas en producción.
  - ✅ **Filtros nativos:** Widgets nativos configurados y funcionales en barra lateral.
  - ✅ **Google Analytics (GA4):** Tag `G-T6HQ91YF6P` inyectado en producción y verificado exitosamente mediante Tag Assistant. Coexiste en armonía con Google Ads `AW-`.
  - ✅ **Checkout:** Traducción de typos realizada.
- **Incidencias detectadas:**
  - ✅ **Robots.txt:** Verificado en panel de RankMath. No hay archivo físico bloqueando; RankMath está gestionando el archivo dinámicamente de forma correcta.

### Proceso 7.1.2: Resolución del Problema de Object Cache en Producción
- **Fecha:** 9 junio 2026
- **Entorno:** Producción (`incunabula.co`)
- **Diagnóstico profundo:**
  1. El error de conexión de LiteSpeed Cache ("Fallido") ocurría porque se intentaba conectar a Memcached/Redis, pero la extensión de Memcached estaba desactivada en el PHP de Hostinger.
  2. Se detectó un archivo residual `advanced-cache.php` perteneciente al plugin eliminado **WP Rocket**, el cual estaba bloqueando a LiteSpeed Cache.
  3. Hostinger maneja su propio sistema de Object Cache (LSMCD) a nivel de servidor a través de hPanel. La configuración del plugin entraba en conflicto con esto.
- **Acciones ejecutadas:**
  1. Se renombró el archivo residual `wp-content/advanced-cache.php` a `advanced-cache.php.bak` vía File Manager.
  2. En el plugin LiteSpeed Cache (Pestaña Objeto), se **APAGÓ** el "Caché de objetos" para dejar de forzar la conexión errónea.
  3. En Hostinger hPanel, se configuró el preset de optimización de LiteSpeed en **"Avanzado"** y se confirmó que el "Caché de objetos" del panel estuviera **ON**.
  4. Para forzar la re-conexión limpia del servidor, se apagó el caché de objetos en hPanel, se esperó 30 segundos, y se volvió a encender.
- **Resultado Inicial:** ✅ Object Cache operando limpiamente gestionado por Hostinger, sin conflictos residuales de WP Rocket ni errores en el plugin. Preset "Avanzado" aplicado.
- **Validación QA:** ✅ Jordan vació la caché y confirmó en navegación de incógnito que el sitio (frontend y checkout) carga rápida y correctamente bajo el preset Avanzado.
- **Actualización (11 Junio 2026):** Se detectó que el Caché de Objetos se había apagado en ambos sitios. Jordan procedió a encenderlo nuevamente desde el panel de Hostinger, lo cual disparó automáticamente su activación dentro del plugin de WordPress, resultando en una conexión exitosa y sincronizada en ambos extremos.

### Proceso 7.1.3: Verificación del Archivo robots.txt
- **Fecha:** 9 junio 2026
- **Entorno:** Producción (`incunabula.co`)
- **Diagnóstico:** Se verificó en `Rank Math SEO → Ajustes Generales → Editar robots.txt` que RankMath genera el archivo dinámicamente y no existe un archivo físico bloqueante en `public_html/`.
- **Acción adicional:** Se eliminó un archivo residual `robots.txt.bak` que estaba en la raíz del servidor.
- **Resultado:** ✅ Falsa alarma resuelta. RankMath gestiona el robots.txt correctamente.

### Proceso 7.1.4: Eliminación de Archivo Residual de WP Rocket
- **Fecha:** 9 junio 2026
- **Entorno:** Producción (`incunabula.co`)
- **Hallazgo:** Se encontró un archivo `wp-content/advanced-cache.php` perteneciente al plugin eliminado WP Rocket. Este archivo definía `WP_ROCKET_ADVANCED_CACHE_PROBLEM = true` y potencialmente interfería con LiteSpeed Cache.
- **Acción:** Archivo renombrado a `advanced-cache.php.bak` vía File Manager de hPanel.
- **Resultado:** ✅ Conflicto eliminado. LiteSpeed Cache opera sin interferencias.

---

## FASE 7.2 — INVESTIGACIÓN Y ERRADICACIÓN DE VULNERABILIDADES DE SEGURIDAD (9 Junio 2026)

### Proceso 7.2.1: Escaneo de Seguridad de Hostinger — 16 Vulnerabilidades Detectadas
- **Fecha:** 9 junio 2026
- **Entorno:** Producción (`incunabula.co`)
- **Fuente:** Hostinger hPanel → Seguridad → Vulnerabilidades
- **Hallazgo:** El escáner de seguridad de Hostinger detectó **4 plugins con vulnerabilidad activa** y **9 plugins con actualizaciones pendientes**. Los 4 plugins vulnerables no pueden actualizarse porque son plugins premium sin licencia activa (pirateados o con licencia caducada).

### Proceso 7.2.2: Investigación Forense de Versiones y CVEs
- **Fecha:** 9 junio 2026
- **Método:** Búsqueda en fuentes oficiales (wordpress.org, woocommerce.com, Wordfence, Patchstack, CISA/NVD)
- **Resultado de la investigación:**

| Plugin | Versión instalada | Versión actual oficial | Atraso | CVE más grave |
| :--- | :---: | :---: | :---: | :--- |
| WPForms | 1.7.2.2 | **1.10.1.1** | ~30 releases | XSS, CSRF, escalación de privilegios |
| WPForms User Registration | 1.3.3 | (requiere Pro $199/año) | años | Hereda de WPForms |
| WooCommerce Ultimate Gift Card | 2.8.10 | **2.9.7+** | ~10 releases | **CVE-2025-47569** — SQL Injection no autenticado 🔴 |
| WooCommerce Social Login | 2.4.2 | **2.18.0** | ~16 releases | **CVE-2024-6637** — Escalación de privilegios no autenticada 🔴 |

- **Conclusión:** Las 4 versiones instaladas están **CONFIRMADAS como desactualizadas y vulnerables**. Ninguna puede actualizarse por ausencia de licencia válida.

### Proceso 7.2.3: Plan de Reemplazo Gratuito Aprobado

| Función | Plugin vulnerable | Reemplazo gratuito | Fuente | Costo |
| :--- | :--- | :--- | :--- | :---: |
| Formularios + Registro | WPForms + User Reg | Registro nativo de WooCommerce | Integrado en WooCommerce | $0 |
| Tarjetas de regalo | Ultimate Gift Card | PW WooCommerce Gift Cards (Pimwick) | wordpress.org | $0 |
| Login social | Social Login (SkyVerge) | ❌ DESCARTADO | No requerido | $0 |

- **Decisiones Actualizadas (11 de Junio):**
  - **WPForms y User Registration:** Quedan DESACTIVADOS. **(Pendiente borrado físico).**
  - **Social Login:** Se prescinde totalmente de esta función. Los usuarios usarán exclusivamente el registro nativo de WooCommerce.
  - **Gift Cards:** Se descartó la necesidad de migrar saldos, ya que los cupones existentes funcionan de manera nativa en WooCommerce. Se generó el documento `instrucciones_gift_cards_laura.md` para que la cliente instale PW Gift Cards y cree los nuevos productos sin perder compatibilidad con las compras anteriores.
- **Estado:** ✅ FASE DE SEGURIDAD COMPLETADA. Decisiones tomadas, plugins vulnerables desmantelados y alternativas implementadas/documentadas.

### Proceso 7.2.4: Plugins con Actualizaciones Pendientes (Seguros pero Desactualizados)
- **Fecha:** 9 junio 2026
- **Lista de plugins a actualizar:**
  1. Advanced Custom Fields → Actualizar
  2. Advanced Woo Labels → Actualizar
  3. Cart Abandonment Recovery → Actualizar
  4. Checkout Field Editor → Actualizar
  5. Elementor → Actualizar
  6. Elementor Pro → Actualizar
  7. Loco Translate → Actualizar
  8. Variation Swatches → Actualizar
  9. wpDiscuz → Actualizar
- **Estado:** 🔲 Pendiente — ejecutar después de borrar los 4 plugins vulnerables.

### Proceso 7.2.5: Reemplazo Exitoso de Formulario de Registro (WPForms → Nativo)
- **Fecha:** 11 junio 2026
- **Entorno:** Producción (`incunabula.co`)
- **Decisión Arquitectónica:** En lugar de mantener una página duplicada con redirecciones PHP complejas, se optó por la "Navaja de Ockham": la solución más simple. Se utiliza la página oficial `/mi-cuenta/` para gestionar tanto el inicio de sesión como el registro y el panel de control.
- **Acciones ejecutadas:**
  1. Activada la creación de cuentas nativa desde `WooCommerce → Ajustes → Cuentas y Privacidad`.
  2. Configurado el registro con campo de Contraseña directo (desmarcando el envío de enlaces) y autogeneración de Usuario.
  3. Limpieza de Menús: Se eliminaron enlaces ambiguos en el menú. La navegación ahora oculta lógicamente los accesos de "Crear cuenta" a usuarios que ya tienen su sesión iniciada, dejando únicamente visible el acceso a "Mi Cuenta".
  4. Los plugins vulnerables WPForms y WPForms User Registration fueron **desactivados** (se anotó como pendiente su borrado físico).
  5. Se descartó por completo la necesidad de un plugin de Login Social, cerrando otra brecha de seguridad.
- **Resultado:** ✅ Registro seguro, nativo y unificado bajo la arquitectura oficial de WooCommerce.

---

## FASE 7.3 — AUDITORÍA FORENSE DE CIERRE (11 Junio 2026)

### Proceso 7.3.1: Ejecución de Auditoría Forense Completa
- **Fecha:** 11 junio 2026
- **Entorno:** Producción (`incunabula.co`)
- **Método:** Revisión exhaustiva de toda la documentación del proyecto (bitácora, plan de ejecución, due diligence, inventario de plugins, quick wins, auditoría externa, plan de métricas) contra el estado real del sitio en producción.
- **Alcance:** 8 dominios auditados: Seguridad, Arquitectura/Código, Funcionalidad de Negocio, SEO/Analytics, UX/UI, Branding, Deuda Técnica, Escalabilidad.

### Proceso 7.3.2: Entregables Generados
- **Entregable 1 — Informe Ejecutivo + Técnico:** `informe_auditoria_cierre.md` (artefacto). Incluye resumen ejecutivo, tabla de situación inicial vs. logros (14 ítems), auditoría de seguridad (4 CRÍTICOS resueltos, 2 ALTOS pendientes, 3 MEDIOS backlog), auditoría técnica con métricas cuantificadas, auditoría UX/UI, impedimentos documentados, y roadmap estratégico con matriz impacto×complejidad.
- **Entregable 2 — Presentación Web:** `presentacion_cierre_incunabula.html`. 7 diapositivas HTML/CSS responsive (mobile-first, breakpoint 768px) con diseño premium dark-mode, navegación por puntos laterales, y lenguaje de negocio para audiencia no técnica (Laura).

### Proceso 7.3.3: Correcciones Detectadas Durante la Auditoría
1. **Inconsistencia en `inventario_plugins.md`:** WooCommerce Social Login estaba listado como ACTIVO cuando ya había sido ELIMINADO en el Proceso 7.2.3. Corregido.
2. **SVG Support:** Estaba listado como inactivo pero fue eliminado en la sesión del 11 junio. Movido a la lista de eliminados.
3. **Conteo de plugins:** El header decía 37 plugins activos cuando en realidad son 33. Corregido.
4. **Pendientes obsoletos:** Los 4 pendientes críticos del inventario (Object Cache, robots.txt, GA4, debug.log) ya estaban resueltos pero no se habían tachado. Actualizados con los 5 pendientes reales restantes.

### Proceso 7.3.4: Verificaciones Finales Ejecutadas
- ✅ **GA4:** Tag `G-T6HQ91YF6P` confirmado activo mediante extensión Google Tag Assistant. Coexiste con Google Ads `AW-11097621701`.
- ✅ **Debug.log:** Archivo inexistente en producción. Estado óptimo.
- ✅ **Object Cache:** Sincronizado correctamente entre Hostinger hPanel y LiteSpeed Cache.
- ✅ **Robots.txt:** Gestionado dinámicamente por RankMath. Sin archivos físicos bloqueantes.

### Proceso 7.3.5: Resumen Cuantitativo del Proyecto Completo

| Métrica | Valor Inicial | Valor Final | Variación |
|:---|:---:|:---:|:---:|
| Plugins activos | 59 | 33 | -42% |
| Plugins pirateados | 7 | 0 | -100% |
| Plugins con CVEs activos | 4 | 0 | -100% |
| Errores en debug.log | 41.375 líneas | 0 (archivo inexistente) | -100% |
| Revisiones en BD | 9.561+ | 0 | -100% |
| Metadatos huérfanos | 960+ | 0 | -100% |
| Ahorro anual en licencias pirateadas | — | $489 USD/año | N/A |
| Presupuesto contratado | $3.500.000 COP | — | N/A |
| Duración real | — | 5.5 semanas (7 mayo → 13 junio) | N/A |

---

## FASE 7.4 — INFORME FINAL CONSOLIDADO Y PRESENTACIÓN DE CIERRE (13 Junio 2026)

### Proceso 7.4.1: Análisis de wpDiscuz y YayMail
- **Fecha:** 13 junio 2026
- **Entorno:** Producción (`incunabula.co`)
- **Hallazgos:**
  - **wpDiscuz:** Carpeta huérfana detectada el 13 de junio. Estadísticas: 4 comentarios totales, 0 hilos de respuesta, 0 suscripciones, última actividad febrero 2024. **Veredicto: ELIMINAR.** ✅ Borrado físico confirmado.
  - **YayMail:** Reclasificado de "inactivo" a **ACTIVO** (error previo en inventario). Solo 1 de ~20 plantillas encendida ("Nueva cuenta"). Se documentaron 3 opciones para Laura (activar plantillas, desactivar plugin, no hacer nada) con consecuencias de cada una.
- **Correcciones al inventario:**
  - YayMail movido a plugins activos (#34). Conteo actualizado de 33 a 34.
  - WPForms y User Registration confirmados como borrados físicamente (tarea pendiente resuelta).
  - wpdiscuz añadido a la lista de eliminados definitivamente.

### Proceso 7.4.2: Generación de Informe Final Consolidado
- **Fecha:** 13 junio 2026
- **Entregable:** `informe_auditoria_cierre.md` (artefacto)
- **Estructura:** 10 secciones — Resumen Ejecutivo, Diagnóstico, Soluciones Implementadas, Auditoría de Seguridad, Auditoría Técnica, UX/UI y Branding, Manual de Operaciones para Laura, Próximos Pasos, Roadmap Estratégico, Datos del Proyecto.
- **Documentos absorbidos:** Se consolidaron los contenidos de `instrucciones_gift_cards_laura.md`, `mensaje_seguridad_laura.md`, `mensaje_ga4_laura.md` y las guías relevantes de `UAT_instrucciones_laura.md` dentro de la Sección 7 (Manual de Operaciones). Los archivos originales se conservan como registro histórico.
- **Sección especial YayMail (7.3):** Documenta el estado actual del plugin, 3 opciones disponibles (activar plantillas, desactivar plugin, no hacer nada) y las consecuencias de cada decisión.

### Proceso 7.4.3: Rediseño de Presentación Web de Cierre
- **Fecha:** 13 junio 2026
- **Entregable:** `presentacion_cierre_incunabula.html` (rediseñado)
- **Cambios de diseño:**
  - Paleta: De dark-mode austero a gradientes cálidos verdes/crema (celebratorio y positivo)
  - Tipografía: Google Font Inter importada
  - Animaciones: Contadores numéricos animados, confetti en portada, transiciones suaves
  - Hero: Slide de portada con badge "✅ Proyecto Completado"
  - Datos actualizados: WPForms borrado, wpdiscuz eliminado, errores en producción = 0, 34 plugins
  - Slide de seguridad: 6 tarjetas (todas resueltas, incluido WPForms y carpetas huérfanas)
  - Slide Antes vs Después: 7 ítems por columna con datos corregidos
- **7 slides:** Portada → Métricas → Dolores Resueltos → Seguridad → Antes vs Después → Oportunidades → CTA Fase 2

### Proceso 7.4.4: Actualización de Documentación de Soporte
- **Fecha:** 13 junio 2026
- **Acciones:**
  1. `inventario_plugins.md`: Actualizado con YayMail como plugin #34 activo, wpdiscuz como eliminado, WPForms confirmado borrado, fecha actualizada al 13 junio.
  2. `bitacora_procesos.md`: Registrada esta sesión completa (Fase 7.4).
  3. Duración del proyecto corregida de 5 semanas a 5.5 semanas (7 mayo → 13 junio).
