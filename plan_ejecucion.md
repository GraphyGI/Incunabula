# PLAN DE EJECUCIÓN TÉCNICA — INCUNABULA.CO
**Proyecto:** Estabilización Operativa y Rescate Comercial  
**Duración:** 20 días hábiles (4 semanas)  
**Presupuesto:** $3.500.000 COP  
**Inicio:** Mayo 2026

---

## FASE 0 — BACKUP Y STAGING (Día 1)
**Prioridad:** 🔴 BLOQUEANTE — Nada se toca sin esto.

### Paso 0.1: Backup Completo
- Ir a **hPanel de Hostinger → Archivos → Copias de seguridad**.
- Crear backup completo (archivos + base de datos).
- Descargar una copia local como seguro adicional.

### Paso 0.2: Levantar Staging
- Ir a **hPanel → WordPress → Staging**.
- Crear entorno de staging desde Hostinger (incluido en Cloud Enterprise).
- Verificar que el clon carga correctamente y que WooCommerce funciona.
- **Toda la Fase 1 a 5 se ejecuta SOLO en Staging.**

---

## FASE 1 — DIAGNÓSTICO FORENSE (Días 1-2)
**Prioridad:** 🔴 CRÍTICA — Sin esto, estamos trabajando a ciegas.

### Paso 1.1: Activar Debug Log
- Ir al **Administrador de Archivos de Hostinger** (o FTP).
- Abrir `/wp-config.php` del sitio STAGING.
- Buscar la línea `define( 'WP_DEBUG', false );` y reemplazar por:

```php
// 📚 LEARN: Esto activa el registro de errores sin mostrarlos al usuario
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );    // Escribe errores en /wp-content/debug.log
define( 'WP_DEBUG_DISPLAY', false ); // NO los muestra en pantalla
```

### Paso 1.2: Provocar los Errores
- Navegar por el staging: Homepage → Categoría → Producto → Agregar al carrito → Checkout.
- Entrar al panel wp-admin → WooCommerce → Informes/Analíticas.
- Cada error de PHP quedará registrado automáticamente.

### Paso 1.3: Leer el Log y Documentar Culpables
- Ir al Administrador de Archivos → `/wp-content/debug.log`.
- Buscar líneas que digan `PHP Fatal error`, `PHP Deprecated` o `PHP Warning`.
- Al final de cada línea aparece la ruta del plugin culpable. Ejemplo:
  ```
  PHP Fatal error: .../wp-content/plugins/jet-woo-builder/includes/...
  ```
- **Sospechosos principales (por la auditoría previa):**
  - Elementor 3.17.3 (desactualizado 3+ años)
  - Jet WooBuilder (plugin premium de Crocoblock)
  - Jet Engine (plugin premium de Crocoblock)
  - Jetpack (carga scripts innecesarios)

### Paso 1.4: Inventario Completo de Plugins
- Ir a wp-admin → Plugins → Anotar TODOS los plugins, su versión y si están activos.
- Clasificar cada uno en: **MANTENER / ACTUALIZAR / REEMPLAZAR / ELIMINAR**.

---

## FASE 2 — COMPATIBILIDAD CORE Y BD (Días 3-8)
**Prioridad:** 🔴 CRÍTICA — Es la "bomba de tiempo".

### Paso 2.1: Actualizar WordPress Core
- Ir a wp-admin (STAGING) → Panel → Actualizaciones.
- Actualizar WordPress a la última versión estable.
- Verificar que el sitio no se rompe tras la actualización.

### Paso 2.2: Actualizar WooCommerce
- Actualizar WooCommerce a la última versión.
- Ejecutar el asistente de actualización de base de datos si lo solicita.
- Verificar: Productos cargan, carrito funciona, checkout funciona.

### Paso 2.3: Resolver Elementor
**Ruta A — Si Laura compra la licencia Pro ($59 USD/año):**
- Ingresar la clave de licencia en Elementor → License.
- Actualizar Elementor Pro a la última versión compatible con PHP 8.2.
- Actualizar "Elementor Header & Footer Builder" también.

**Ruta B — Si NO compra la licencia (alternativa gratuita):**
- Actualizar Elementor a la última versión GRATUITA disponible (soporta PHP 8.2).
- Verificar qué widgets Pro se usan en las páginas principales (Homepage, Header, Footer).
- Si hay widgets Pro rotos (aparecen como cajas grises), reemplazarlos por widgets gratuitos equivalentes.
- Los productos NO usan Elementor (usan Editor Clásico/Gutenberg), así que el catálogo NO se afecta.
- **Riesgo:** El header/footer podría requerir ajustes manuales. Presupuestar 4-6 horas extra.

### Paso 2.4: Resolver Plugins de Crocoblock (Jet WooBuilder / Jet Engine)
- Si el debug.log confirma que causan errores fatales en PHP 8.2:
  - **Opción 1 (Si hay licencia):** Actualizar a la última versión.
  - **Opción 2 (Sin licencia / Recomendada):** Desactivarlos uno a uno en staging y verificar qué funcionalidad se pierde. Si solo manejan templates de producto que ya están en el Editor Clásico, se pueden desactivar sin impacto.
- **Alternativa gratuita a Jet WooBuilder:** No se necesita reemplazo si los productos usan Editor Clásico. WooCommerce tiene sus propias plantillas nativas.

### Paso 2.5: Limpiar Plugins Redundantes
Según el Wappalyzer y RankMath, el sitio tiene plugins redundantes:

| Plugin | Acción | Razón |
|--------|--------|-------|
| Contact Form 7 | ELIMINAR | Ya tienen WPForms (duplicado) |
| Jetpack | DESACTIVAR/ELIMINAR | Carga scripts innecesarios. Reemplazar funciones útiles (ej. stats) con GA4 |
| OWL Carousel | ELIMINAR si no se usa | Tienen Swiper + Slick + OWL (3 carouseles) |
| Slick Slider | ELIMINAR si no se usa | Dejar solo Swiper (el más moderno) |
| MonsterInsights | ELIMINAR | Redundante, vamos a instalar GA4 desde cero |

**Procedimiento para cada eliminación:**
1. Desactivar en staging.
2. Navegar el sitio completo buscando elementos rotos.
3. Si nada se rompe → Eliminar.
4. Si algo se rompe → Documentar qué y buscar alternativa.

### Paso 2.6: Limpieza Profunda de Base de Datos
- Instalar plugin gratuito **WP-Optimize** (por UpdraftPlus).
- Ejecutar limpieza de:
  - Revisiones de posts (conservar solo las últimas 3).
  - Transients expirados (basura temporal).
  - Comentarios spam/papelera.
  - Tablas huérfanas de plugins eliminados.
- **Alternativa sin plugin:** Ejecutar queries SQL directamente vía phpMyAdmin en Hostinger:
  ```sql
  -- Eliminar transients expirados
  DELETE FROM wp_options WHERE option_name LIKE '%_transient_%';
  -- Eliminar revisiones antiguas (dejar últimas 3 por post)
  DELETE FROM wp_posts WHERE post_type = 'revision';
  -- Optimizar tablas
  -- Ir a phpMyAdmin → Seleccionar todas las tablas → Optimizar
  ```
- Tras la limpieza, desinstalar WP-Optimize para no dejar plugins innecesarios.

### Paso 2.7: Verificación Final de PHP 8.2
- Revisar nuevamente el `debug.log` tras todas las actualizaciones.
- Si ya no hay `Fatal error` ni `Deprecated` → PHP 8.2 es compatible.
- Probar: Panel de WooCommerce Analytics (el que estaba roto).

---

## FASE 3 — RESTAURACIÓN DE CORREOS SMTP (Días 9-11)
**Prioridad:** 🔴 CRÍTICA — Clientes no reciben confirmaciones.

### Paso 3.1: Instalar Plugin SMTP
**Opción recomendada (100% gratuita):** **FluentSMTP**
- Instalar desde wp-admin → Plugins → Añadir nuevo → Buscar "FluentSMTP".
- Es gratuito, sin upsells, sin límites, y soporta múltiples proveedores.
- **Alternativa:** WP Mail SMTP (versión gratuita). Funciona pero tiene upsells agresivos.

### Paso 3.2: Crear Cuenta en Brevo (antes Sendinblue)
- Ir a https://www.brevo.com → Crear cuenta gratuita.
- Plan gratuito: **300 correos/día** (suficiente para la operación actual).
- En Brevo → Settings → SMTP & API → Copiar las credenciales SMTP:
  - Server: `smtp-relay.brevo.com`
  - Port: `587`
  - Login: (tu email de Brevo)
  - Password: (la API key generada)

### Paso 3.3: Configurar FluentSMTP
- En wp-admin → Settings → FluentSMTP.
- Seleccionar "Other SMTP" o "Brevo/Sendinblue".
- Ingresar las credenciales del paso anterior.
- "From Email": `noreply@incunabula.co` o `ventas@incunabula.co`.
- "From Name": `Incunabula Librería`.

### Paso 3.4: Configurar Registros DNS (SPF/DKIM)
- Ir a **hPanel de Hostinger → Dominios → DNS Zone**.
- Agregar los registros TXT que Brevo proporciona para autenticación:
  - **SPF:** `v=spf1 include:sendinblue.com ~all`
  - **DKIM:** Brevo genera una clave específica para tu dominio.
- Esperar 24-48 horas para propagación DNS.

### Paso 3.5: Pruebas de Envío
- Ir a FluentSMTP → Email Test → Enviar correo de prueba.
- Verificar que llega a Gmail, Hotmail y Yahoo sin caer en Spam.
- Hacer un pedido de prueba completo en staging → Verificar que WooCommerce envía:
  - Correo de "Pedido Recibido" al cliente.
  - Correo de "Nuevo Pedido" al administrador.

---

## FASE 4 — BLINDAJE SEO Y TELEMETRÍA (Días 12-15)
**Prioridad:** 🟡 ALTA — Detener la penalización de Google.

### Paso 4.1: Limpiar Sitemap de RankMath (URGENTE)
Ir a wp-admin → Rank Math → Sitemap Settings. Desactivar estos post types del sitemap:

| Post Type | Estado Actual | Cambiar a |
|-----------|--------------|-----------|
| jet-woo-builder | ✅ ON | ❌ OFF |
| e-landing-page | ✅ ON | ❌ OFF |
| mskpss_smartbar | ✅ ON | ❌ OFF |
| mskpss_popup | ✅ ON | ❌ OFF |
| mskpss_slidein | ✅ ON | ❌ OFF |
| elementor-hf | ✅ ON | ❌ OFF |
| bookory-breadcrumb | ✅ ON | ❌ OFF |
| jet-engine | ✅ ON | ❌ OFF |
| popupbuilder | ✅ ON | ❌ OFF |

### Paso 4.2: Activar Noindex en Subpáginas de Archivo
- Ir a Rank Math → Titles & Meta → Misc Pages.
- Cambiar `noindex_archive_subpages` de **OFF → ON**.
- Esto bloquea las 620+ páginas de paginación de la tienda.

### Paso 4.3: Corregir Datos Estructurados
- Ir a Rank Math → Titles & Meta → WooCommerce.
- Cambiar `remove_shop_snippet_data` de **ON → OFF** (están eliminando los datos de producto de Google).
- Cambiar `remove_product_cat_snippet_data` de **ON → OFF**.

### Paso 4.4: Eliminar Páginas Huérfanas
Ir a wp-admin → Páginas → Buscar y enviar a Papelera:
- "Prueba"
- "Sample Page"
- "Icons"
- "Elementor #7526"
- Página duplicada de "Cart" (dejar solo "Carrito")
- Página duplicada de "My Account" (dejar solo "Mi cuenta")
- Página duplicada de Wishlist
- Página duplicada de Política de devolución

### Paso 4.5: Instalar GA4 (Telemetría Base de Tráfico)
**Opción recomendada (gratuita):** **Site Kit by Google** (plugin oficial de Google).
1. Instalar desde wp-admin → Plugins → Añadir nuevo → "Site Kit by Google".
2. Conectar con una cuenta de Google (puede ser la de `incunabulalibreria@gmail.com`).
3. Site Kit creará automáticamente la propiedad de GA4 y conectará Search Console.
4. Verificar que el tag de GA4 aparece en el código fuente del sitio.
- **Alternativa sin plugin:** Insertar el tag de GA4 manualmente vía Rank Math → General Settings → Code → Header code.

### Paso 4.6: Verificar en Search Console
- Site Kit conecta Search Console automáticamente.
- Ir a Search Console → Sitemaps → Enviar el nuevo sitemap limpio: `https://incunabula.co/sitemap_index.xml`.
- Ir a Search Console → Eliminaciones → Solicitar eliminación temporal de las URLs basura más críticas.

---

## FASE 5 — CREDIBILIDAD Y REGLAS DE NEGOCIO (Días 16-17)
**Prioridad:** 🟡 ALTA — Quick wins de confianza.

### Paso 5.1: Eliminar Contenido Fantasma
Estos cambios se hacen directamente editando las páginas/widgets en wp-admin:

| Elemento | Ubicación | Acción |
|----------|-----------|--------|
| `contact@example.com` | Footer (Elementor Widget) | Reemplazar por email real |
| "Seguir leyendo" → enlace a `demo2wpopal.b-cdn.net` | Sección de blog en Homepage | Corregir enlace o eliminar sección |
| Testimonio "Pam Pruitt — New York" | Sección de testimonios | Eliminar o reemplazar con testimonio real |

### Paso 5.2: Unificar Umbral de Envío Gratis
- **Header:** Dice $90.000 → Verificar en WooCommerce → Settings → Shipping.
- **Barra inferior:** Dice $100.000 → Buscar el widget o shortcode que lo genera.
- Unificar ambos al valor correcto que Laura confirme.
- Verificar que la regla de WooCommerce (Free Shipping) coincida.

### Paso 5.3: Optimizar FiboSearch
**Ruta A — Si Laura compra la licencia Pro ($99 USD/año):**
- Activar la licencia en FiboSearch → Settings.
- Ir a FiboSearch → Indexer → Rebuild Index (reindexar los 15,000 productos).
- Configurar: Buscar por Título + SKU + Descripción corta.
- Activar Autocompletado con imágenes de producto.

**Ruta B — Si NO compra la licencia (versión gratuita):**
- La versión gratuita de FiboSearch busca solo por título de producto.
- Para 15,000 SKUs esto es limitado pero funcional.
- **Alternativa gratuita:** **Relevanssi** (versión free). Busca en títulos, contenido y campos personalizados. Requiere construir un índice (toma tiempo con 15k productos).
- **Migración segura de FiboSearch Pro → Free:** Desactivar Pro, activar Free. Los shortcodes son los mismos. Solo se pierden las opciones avanzadas (búsqueda por SKU, filtros).

---

## FASE 6 — QA DE PASARELAS Y EMPALME (Días 18-20)
**Prioridad:** 🔴 CRÍTICA — Último filtro antes de producción.

### Paso 6.1: Pruebas de Pasarelas en Staging
**Wompi:**
- Ir a WooCommerce → Settings → Payments → Wompi.
- Activar modo Sandbox/Test (usa las credenciales de prueba de Wompi).
- Realizar una compra completa de principio a fin.
- Verificar: Pedido cambia a "Procesando", correo de confirmación llega.

**Addi:**
- Ir a WooCommerce → Settings → Payments → Addi.
- Activar modo Sandbox/Test.
- Realizar una compra simulada.
- Verificar que los webhooks (callbacks) funcionan correctamente.

### Paso 6.2: Checklist de Regresión Completa

| Función | Verificar | ✅/❌ |
|---------|-----------|-------|
| Homepage carga sin errores | Visual + debug.log limpio | |
| Búsqueda de productos funciona | Buscar 3 libros diferentes | |
| Agregar al carrito | Desde PDP y desde catálogo | |
| Checkout completo con Wompi | Pago de prueba end-to-end | |
| Checkout completo con Addi | Pago de prueba end-to-end | |
| Correo de confirmación al cliente | Verificar bandeja de entrada | |
| Correo de nuevo pedido al admin | Verificar bandeja admin | |
| Panel de Analytics WooCommerce | Ya no muestra error | |
| Sitemap limpio | Verificar sitemap_index.xml | |
| Footer sin "contact@example.com" | Visual | |
| Envío gratis unificado | Verificar monto en header y barra | |
| debug.log sin Fatal Errors | Leer archivo | |

### Paso 6.3: Empalme a Producción
- Ir a hPanel → WordPress → Staging → "Publicar Staging".
- Hostinger permite hacer el merge del staging al sitio en vivo.
- **Hacer esto en horario de bajo tráfico** (madrugada, 2-4 AM Colombia).
- Inmediatamente después del empalme:
  1. Verificar que la homepage carga.
  2. Hacer una compra real de prueba ($10.000 o el mínimo posible).
  3. Verificar que el correo de confirmación llega.
  4. Verificar que el pedido aparece en WooCommerce → Orders.

### Paso 6.4: Activar Hypercare (Día 20)
- Notificar a Laura que la intervención está completa.
- Compartir el link al formulario de Notion para reportes de incidentes.
- Iniciar el cronómetro de 30 días de garantía.
- Cobrar el 50% restante.

---

## RESUMEN DE HERRAMIENTAS (Todo Gratuito)

| Necesidad | Herramienta | Costo | Reemplaza a |
|-----------|-------------|-------|-------------|
| SMTP | FluentSMTP | Gratis | — |
| Proveedor de correos | Brevo (Free Tier) | Gratis (300/día) | Función nativa PHP |
| Limpieza de BD | WP-Optimize | Gratis (desinstalar tras uso) | — |
| Analytics | Site Kit by Google (GA4) | Gratis | MonsterInsights |
| SEO | RankMath (ya instalado) | Gratis | — |
| Búsqueda (si no hay Pro) | FiboSearch Free o Relevanssi | Gratis | FiboSearch Pro |

## LICENCIAS QUE LAURA DEBERÍA COMPRAR (Recomendado pero no obligatorio)

| Licencia | Costo Anual | Impacto si NO se compra |
|----------|-------------|------------------------|
| Elementor Pro | ~$59 USD | Widgets Pro pueden quedar rotos en header/footer. Solución: rehacer con widgets free (4-6h extra) |
| FiboSearch Pro | ~$99 USD | Búsqueda limitada a solo títulos. 15k productos = experiencia pobre. **Esta es la más importante.** |

---

## ORDEN DE EJECUCIÓN VISUAL

```
Día 1      → FASE 0: Backup + Staging
Días 1-2   → FASE 1: Debug Log + Diagnóstico
Días 3-8   → FASE 2: Actualizaciones + Limpieza BD + PHP 8.2 ✅
Días 9-11  → FASE 3: SMTP + Brevo + DNS
Días 12-15 → FASE 4: RankMath Sitemap + GA4 + Páginas huérfanas
Días 16-17 → FASE 5: Footer + Testimonios + Envío gratis + FiboSearch
Días 18-20 → FASE 6: QA Wompi/Addi + Empalme + Hypercare ON
```
