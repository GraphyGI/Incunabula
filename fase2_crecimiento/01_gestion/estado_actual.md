# ESTADO ACTUAL — Incunabula Fase 2
**Propósito:** Documento vivo que captura el estado real del proyecto al cierre de cada sesión. Es la primera fuente que debe leer el agente al iniciar un nuevo chat cuando el usuario diga "continuemos" o similar.

**Última actualización:** 28 Septiembre 2026  
**Actualizado por:** Jordan Marles (sesión de auditoría y corrección documental)

---

## ¿Dónde estamos exactamente?

**Sesión más reciente:** Sesión 004 — 28 Septiembre 2026 (Auditoría y corrección documental)  
**Próximo paso inmediato:**
1. **Instalar YayMail (versión gratuita) en STAGING** — cubre los 11 templates de WooCommerce estándar. No se requiere Pro para el flujo actual.
2. **Preparar los Tokens de Marca v0** — propuesta cerrada de paleta, tipografía, botón y tarjeta de producto para que Laura diga sí o qué cambiar. Desbloquea YayMail (Hito 1 → Cuota 2), Elementor (Hito 2) y Manual (Módulo D).
3. **Mientras Laura responde los Tokens v0:** cerrar GA4 (4 h de trabajo nuestro, no depende de ella), verificar acumulación de cupones, y diagnóstico en Clarity.

---

## Datos críticos del negocio (verificados Sep 28)

| Dato | Valor verificado | Fuente |
|:--|:--|:--|
| **Productos totales** | 21.735 | Captura wp-admin Sep 28 |
| **Productos en stock activo** | 6.457 | Captura wp-admin Sep 28 — origen del dato "~7.000" |
| **Clientes registrados** | 4.847 | WooCommerce |
| **Pedidos históricos** | 11.905 | WooCommerce |
| **Inicio oficial del contrato** | 14 Sep 2026 | ADR-012 |
| **Módulo A (correos)** | Semanas 1–2 (cerró 27 Sep) | Contrato |
| **Módulo B (GA4)** | Semanas 2–3 (vence 4 Oct) | Contrato |

---

## Estado real del backlog (referencia rápida)

| # | Tarea | Estado real |
|:--|:------|:------------|
| 1 | Update Database en Cart Abandonment Recovery | ✅ Completado (Sep 8) |
| 2 | Switch to New UI en Cart Abandonment Recovery | ✅ Completado (Sep 8) |
| 3 | Diagnosticar correos de carrito abandonado | ✅ Resuelto (Sep 8) |
| 4 | Correo 1 y 2 de carrito abandonado | ✅ Activos (confirmado por captura Sep 28) |
| 4b | Correo 3 de carrito abandonado (cupón 10%) | ✅ Activo (captura Sep 28). Manda 10% con code auto. Pendiente: verificar acumulación con Simple Discount Rules |
| 5 | Cupón `comprasmayores` en checkout | ⏳ Pendiente decisión — sigue visible para todos |
| 10 | GA4 e-commerce tracking | ✅ Eventos configurados (Sep 17). Pendiente: verificar ingresos reales, filtro bots, embudo, confirmar `view_item` |
| 20b | Soft 404 Search Console | ✅ Resuelto (Sep 17) |
| 21 | Google Search Console | ✅ Completado (Sep 8) |
| 22 | Acceso de Laura en Search Console | ✅ Completado (Sep 8) |
| 26 | Microsoft Clarity | ✅ Instalado (Sep 8) — Analizado Sep 28 |
| — | YayMail instalado | ❌ No instalado — próximo paso en STAGING |

---

## Decisiones pendientes de Laura

| Decisión | Bloqueado desde | Consecuencia si no llega |
|:---------|:----------------|:------------------------|
| Aprobación de Tokens de Marca v0 (paleta, tipografía, botón, tarjeta) | 28 Sep 2026 | No se pueden diseñar YayMail, Elementor ni el Manual |
| Cupón `comprasmayores` en checkout — ocultar o automatizar | 8 Sep 2026 | Sigue visible (fricción activa en checkout) |
| Confirmación bonificación logo (2 versiones, 2 rondas) | Pendiente | Sin esto no se abre ADR-016 como compromiso formal |

---

## Hallazgos técnicos clave (post-auditoría Sep 28)

### Checkout — errores activos
- Textos en inglés: "Your order", "Order noes", "noes about your order"
- Cupón `comprasmayores` visible sin contexto de condición ($150k mínimo)
- Campo de tarjeta regalo antes del botón de pago (fricción)
- **Sin casilla de autorización para marketing** → agregar ya (campo opcional, sin marcar) para construir base autorizada desde hoy

### Imágenes — plan sin edición manual
- LiteSpeed Cache ya instalado. Tiene optimización WebP en lote via QUIC.cloud
- Verificar cuota gratuita de QUIC.cloud y espacio en disco antes de ejecutar
- 6.457 productos en stock son el universo a optimizar (no los 21.735 totales)
- Marco CSS uniforme (2:3) va en el rediseño de Elementor, no en optimización de imágenes

### Correo 3 de carrito abandonado — estado real
- **Activo.** Manda cupón de 10% automático
- Texto actual incluye `{{cart.coupon_code}}` y `{{cart.checkout_url}}`
- **Pendiente crítico:** verificar si Simple Discount Rules y Smart Coupons acumulan el 15% automático + el 10% del correo 3 (= 25% involuntario). Revisar configuración de ambos plugins en wp-admin → descuentos

### YayMail
- **No está instalado.** Versión gratuita es suficiente para el flujo de Incunabula (11 templates WooCommerce estándar sin plugins de terceros que requieran Pro).

### GA4 — trabajo pendiente (no depende de Laura)
- Verificar ingresos reales registrados (esperar 24-48h post-configuración Sep 17)
- Aplicar filtro de bots (Singapur/China) en GA4
- Configurar embudo de conversión (producto → carrito → checkout → compra)
- Confirmar que `view_item` está disparando correctamente
- Comparar GA4 vs WooCommerce para período 17-27 Sep

### Errores JS en Clarity — reclasificados
- 1.056 son **sesiones** con errores, no errores individuales. Incluye bots.
- `java object is gone` (16%): ruido del navegador interno de Facebook en Android
- `Script error.` (16%): error de otro dominio — no accionable
- Accionables reales: `textcontent` y `value` — diagnosticar en qué páginas y scripts ocurren

---

## Propuesta de servicios adicionales (post-Fase 2)
- **Email marketing y retención:** flujos automáticos (reseñas, "llegaron esta semana", reactivación, carta del librero). Requiere: autorización Ley 1581 del checkout, limpieza de base, subdominio. Proponer como servicio separado con otrosí.
- **Consultoría mercadológica/publicitaria:** gestión de pauta, estrategia de contenidos, campañas estacionales.
