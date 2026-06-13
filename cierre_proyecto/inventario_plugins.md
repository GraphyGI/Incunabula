# INVENTARIO DE PLUGINS — INCUNABULA.CO (PRODUCCIÓN)
**Fecha:** 13 junio 2026 (Actualizado: 21:00 COL)  
**Estado:** Auditoría forense de cierre completada. Todos los plugins actualizados, vulnerabilidades críticas erradicadas. Carpetas huérfanas eliminadas.

---

## 🟢 PLUGINS ACTIVOS (Core del sitio - 34 plugins)
Estos plugins son esenciales para el funcionamiento, diseño y seguridad de la tienda. Deben mantenerse siempre activos y actualizados.

1. **Addi - Cuotas que se adaptan a ti** (Pasarela BNPL)
2. **Advanced Custom Fields** (ACF Free - Reemplazó al pirata. Campos de libros)
3. **Advanced Woo Labels** (Etiquetas dinámicas)
4. **Akismet Anti-spam** (Protección contra spam en comentarios)
5. **Back In Stock Notifier** (Lista de espera de productos)
6. **BEAR – Bulk Editor** (Edición masiva de inventario)
7. **Category Discount** (Descuentos por categoría)
8. **Checkout Field Editor** (Campos extra en checkout para facturación)
9. **Code Snippets** (Funciones PHP personalizadas)
10. **Departamentos y ciudades de Colombia** (Campos de envío locales)
11. **Elementor** (Constructor base)
12. **Elementor Header & Footer Builder** (Constructor de cabecera/pie)
13. **Elementor Pro** (Constructor avanzado - Licencia legítima)
14. **FiboSearch Premium** (Buscador AJAX Pro — Licencia legítima comprada por Laura)
15. **FluentSMTP** (Motor de envío de correos)
16. **Loginizer** (Seguridad contra fuerza bruta)
17. **Joinchat** (Botón flotante de WhatsApp)
18. **LiteSpeed Cache** (Optimización y caché del servidor)
19. **Loco Translate** (Traducción de textos del tema/plugins)
20. **Make Column Clickable** (Mejora visual de Elementor)
21. **Product Feed PRO** (Feed XML para Google Merchant)
22. **Productos relacionados** (Sugerencias de catálogo)
23. **Rank Math SEO** (Free - Suite SEO. Reemplazó a la versión Pro pirata)
24. **Smart Coupons** (Cupones inteligentes)
25. **Variation Swatches** (Muestras visuales en productos variables)
26. **Wompi Portal de Pagos** (Pasarela oficial v3.2.0)
27. **WooCommerce** (Motor de la tienda)
28. **WooCommerce Cart Abandonment Recovery** (Recuperación de carritos)
29. **WooCommerce Conversion Tracking** (Tracking de eventos para Meta/GA4)
30. **PW WooCommerce Gift Cards** (Tarjetas de regalo seguras — Reemplazó al pirata)
31. **WPC Smart Quick View** (Vista rápida emergente)
32. **WPC Smart Wishlist** (Lista de deseos)
33. **WPFront Notification Bar** (Barra superior de envíos)
34. **YayMail** (Personalizador visual de correos de WooCommerce — Solo 1/20 plantillas activa)

---

## 🟡 PLUGINS INACTIVOS (Herramientas de uso ocasional)
Estos plugins están **DESACTIVADOS** por rendimiento, pero se mantienen instalados para auditorías de inventario de Laura.
> **⚠️ REGLA DE SEGURIDAD CRÍTICA:** Aunque estén apagados, **DEBEN ACTUALIZARSE** siempre que WordPress lo solicite para evitar vulnerabilidades de "Direct File Access".

1. **Duplicate Products Report** (Se enciende solo para auditar duplicados)
2. **WooCommerce Products without featured images** (Se enciende solo para buscar libros sin foto)

---

## 🔴 PLUGINS ELIMINADOS DEFINITIVAMENTE EN PRODUCCIÓN
Estos plugins fueron **borrados físicamente** por ser piratas, redundantes, obsoletos o herramientas de desarrollo peligrosas:

*   **Piratas / Riesgo Crítico / Vulnerables:** `Advanced Custom Fields PRO`, `FiboSearch Premium`, `Rank Math SEO PRO`, `Smart Manager`, `WP All Import Pro`, `WP Mail SMTP Pro`, `YITH Customize My Account`, `WooCommerce Social Login`, `WooCommerce Ultimate Gift Card`, `WPForms`, `WPForms User Registration`, `wpdiscuz`.
*   **Redundantes / Bloatware:** `Advanced Coupons Free`, `CartBounty`, `Contact Form 7`, `Dynamic.ooo`, `Facebook para WooCommerce`, `Filter Everything`, `Free Shipping Bar`, `Google para WooCommerce`, `GTM4WP`, `Jetpack`, `JetSearch`, `JetSmartFilters`, `JetWooBuilder`, `Popup Builder`, `SVG Support`, `FiboSearch Free` (redundante con Pro).
*   **Inútiles o Dev Tools:** `All-in-One WP Migration`, `Bold Pagos`, `Fix Duplicates`, `JetEngine`, `Mailchimp (MC4WP)`, `Show Current Template`, `String Locator`, `WP 2FA`, `WPCode Lite`, `WPC Buy Now Button`, `WooCommerce Cart Stock Reducer`, `WooCommerce Order Test`, `WP Mail Logging`.
*   **Peligrosos:** `Shipping Envia Colvanes Woo` (Borrados de hPanel porque causaba Timeout 504).

---

## 🔧 EMERGENCIA DE SERVIDOR (30 mayo 2026 ~13:45 COL)
Durante la purga masiva de plugins, la CPU del servidor de Hostinger llegó al 100% y la RAM a 12 GB (límite). Se ejecutaron las siguientes acciones de emergencia:
1. **Matar procesos:** Se usó "Detener procesos en ejecución" de Hostinger varias veces.
2. **Apagar LiteSpeed Cache a la fuerza:** Se renombró la carpeta `litespeed-cache` → `litespeed-cache-apagado` en `wp-content/plugins/` para cortar el bucle de reconstrucción de caché que mantenía la CPU al 100%.
3. **Borrar object-cache.php:** Se renombró `wp-content/object-cache.php` → `object-cache.php.apagado` para eliminar el error de inicialización.

---

## ⏳ PENDIENTES (En orden de prioridad) — Estado al 13 Junio 2026
1. ~~🟡 **Borrar físicamente carpetas** de WPForms + User Registration del servidor.~~ ✅ **COMPLETADO** — Confirmado el 13 junio. Carpetas ya no existen en el servidor.
2. ~~🔴 **Eliminar carpeta huérfana `wpdiscuz`** del servidor (detectada en auditoría del 13 junio).~~ ✅ **COMPLETADO** — Eliminada físicamente el 13 junio.
3. 🟡 **Instalar WP 2FA** para cuentas de Administrador y Shop Manager.
4. 🟡 **Escalar DMARC** de `p=none` a `p=quarantine` (después de 4 semanas con Brevo).
5. 🟡 **Headers HTTP de seguridad** (CSP, HSTS, X-Content-Type-Options) en `.htaccess`.
6. 🟢 **Ejecutar PageSpeed post-limpieza** para cuantificar mejora de rendimiento.

### ✅ TAREAS COMPLETADAS EN PRODUCCIÓN (Auditoría 13 Junio)
- **Restauración de LiteSpeed Cache:** ✅ Realizado.
- **Conexión de Licencia de Elementor Pro & FiboSearch Pro:** ✅ Realizado.
- **Filtros nativos en sidebar:** ✅ Configurados y funcionales.
- **Traducción de typos en Checkout:** ✅ Realizado.
- **Object Cache sincronizado con Hostinger:** ✅ Operativo.
- **Robots.txt:** ✅ RankMath gestiona dinámicamente. Sin archivo físico bloqueante.
- **GA4 verificado:** ✅ Tag `G-T6HQ91YF6P` confirmado activo con Tag Assistant.
- **Debug.log:** ✅ Archivo inexistente en producción (estado óptimo: 0 errores).
- **Base de datos limpiada:** ✅ 14.000+ registros huérfanos eliminados con WP-Optimize.
- **Jetpack eliminado:** ✅ Redundante (funciones cubiertas por GA4, Loginizer, LiteSpeed).
- **Sitemap RankMath:** ✅ Exclusiones de CPTs técnicos aplicadas.
- **Pestaña 'Direcciones' oculta en Mi Cuenta:** ✅ Code Snippet activo con prioridad 999.
- **Plugins actualizados:** ✅ Todos los plugins legítimos en última versión.
- **Vulnerabilidades críticas erradicadas:** ✅ CVE-2025-47569, CVE-2024-6637, y 7 plugins pirateados eliminados.
