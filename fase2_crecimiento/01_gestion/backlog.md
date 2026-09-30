# BACKLOG — Fase 2: Crecimiento Incunabula
**Última actualización:** 28 Septiembre 2026  
**Sistema de prioridad:** 🔴 Bloqueante · 🟠 Urgente · 🟡 Alta · 🟢 Normal · ⚪ Backlog

---

## 🔴 BLOQUEANTES (frena entregables contractuales)

| # | Tarea | Área | Notas |
|:--|:------|:-----|:------|
| T1 | Instalar YayMail (gratuito) en STAGING | Correos/Hito 1 | Siguiente paso inmediato |
| T2 | Preparar Tokens de Marca v0 y enviar a Laura | Branding/Hito 1 | Desbloquea YayMail, Elementor y Manual |
| T3 | Verificar acumulación cupones: Simple Discount Rules + correo 3 (10%) | Técnico/Cupones | Si acumulan = 25% involuntario |

---

## 🟠 URGENTES (plazo contractual activo — Módulo B vence 4 Oct)

### GA4 — cierre Módulo B
| # | Tarea | Área |
|:--|:------|:-----|
| G1 | Verificar que GA4 registre ingresos reales (comparar vs WooCommerce 17-27 Sep) | Técnico/GA4 |
| G2 | Filtrar bots (Singapur/China) en GA4 | Técnico/GA4 |
| G3 | Configurar embudo de conversión (producto → carrito → checkout → compra) | Técnico/GA4 |
| G4 | Confirmar que `view_item` está disparando correctamente | Técnico/GA4 |

### Clarity — diagnóstico pendiente
| # | Tarea | Área |
|:--|:------|:-----|
| C1 | Ampliar período a 8 Sep–hoy y excluir bots | Analytics |
| C2 | Embudo por navegador separando app Facebook del resto | Analytics |
| C3 | Detalle de errores `textcontent` y `value`: página y script | Analytics |
| C4 | Heatmap móvil + scroll de PDP que recibe la pauta | Analytics |
| C5 | 10 grabaciones de sesiones que llegaron a checkout y no compraron | Analytics |

---

## 🟡 ALTA PRIORIDAD (entregables del contrato — Módulos A, C, D)

### Correos YayMail (Módulo A)
| # | Tarea | Área |
|:--|:------|:-----|
| Y1 | Diseñar 11 plantillas YayMail con branding Incunabula (una vez aprobados Tokens v0) | Correos |
| Y2 | Probar entregabilidad de todos los correos activados | Correos |
| Y3 | Actualizar idioma de correos nativos (están en inglés) | Correos |

### Checkout — errores activos (deuda F1)
| # | Tarea | Área |
|:--|:------|:-----|
| D1 | Corregir typos: "Your order", "Order noes", "noes about your order" | UX/Checkout |
| D2 | Ocultar o contextualizar cupón `comprasmayores` en checkout | UX/Checkout |
| D3 | Agregar casilla de autorización de marketing (opcional, sin marcar) al checkout | Legal/Marketing |
| D4 | Eliminar campo de tarjeta regalo antes del botón de pago o moverlo | UX/Checkout |

### Rediseño Elementor (Módulo C — semanas 5-8)
| # | Tarea | Área |
|:--|:------|:-----|
| R1 | Definir wireframes: Home, Catálogo, PDP, Checkout | Rediseño |
| R2 | Aplicar Tokens de Marca a Elementor Global Settings en STAGING | Rediseño |
| R3 | Rediseñar PDP: tarjeta 2:3, botón comprar, sellos de confianza | Rediseño |
| R4 | Optimizar imágenes: WebP masivo con LiteSpeed/QUIC.cloud (verificar cuota y disco antes) | Performance |
| R5 | Precarga imagen principal en PDP de libro con pauta activa | Performance |
| R6 | Rediseñar Homepage con identidad de marca | Rediseño |
| R7 | Rediseñar catálogo y páginas de categoría | Rediseño |
| R8 | Optimizar versión móvil | Rediseño |

### Manual de Marca (Módulo D — semanas 9-10)
| # | Tarea | Área |
|:--|:------|:-----|
| M1 | Crear archivo de dirección de arte (`02_branding/01_direccion_arte.md`) | Branding |
| M2 | Vectorizar/rediseñar logo: 2 versiones (horizontal + isotipo), 2 rondas de ajustes | Branding/Logo |
| M3 | Crear manual de marca PDF final | Branding |

### SEO Técnico (Módulo E — semanas 9-10)
| # | Tarea | Área |
|:--|:------|:-----|
| S1 | Eliminar páginas basura: Sample Page, Icons, duplicados en inglés | SEO |
| S2 | Limpiar sitemap RankMath (CPTs: jet-woo-builder, elementor-hf, etc.) | SEO |
| S3 | Revisar términos de búsqueda en FiboSearch Analytics | SEO |
| S4 | Implementar schema en PDPs | SEO |

---

## 🟢 PRIORIDAD NORMAL

| # | Tarea | Área |
|:--|:------|:-----|
| N1 | Reseñas de la **tienda** (Google Business Profile) + solicitud automática post-pedido | Confianza |
| N2 | Decisión sobre UAE antes de diseñar con Elementor | Performance |
| N3 | Escalar DMARC a `p=quarantine` | Seguridad |
| N4 | Actualizar WooCommerce 11.0 en Staging primero | Actualizaciones |
| N5 | Verificar ACF: ¿gratuito o Pro con licencia legítima? | Plugins |
| N6 | WP 2FA para cuentas Admin y Shop Manager | Seguridad |

---

## ⚪ BACKLOG / FUTURO

| # | Tarea | Área |
|:--|:------|:-----|
| F1 | Propuesta de Email Marketing como servicio adicional (requiere Ley 1581 + subdominio) | Post-F2 |
| F2 | Propuesta de consultoría mercadológica/publicitaria | Post-F2 |
| F3 | Evaluar cambio de tema Bookory por Astra/GeneratePress | Performance |
| F4 | Integrar Instagram Shopping / Facebook Shop | Marketing |
| F5 | Gift Cards con branding (PW Gift Cards) | Técnico |
| F6 | Google Tag Manager si el tracking escala | Técnico |

---

## ✅ Completados en Fase 2

| Tarea | Fecha |
|:------|:------|
| Update Database en Cart Abandonment Recovery | Sep 8, 2026 |
| Switch to New UI en Cart Abandonment Recovery | Sep 8, 2026 |
| Diagnosticar correos de carrito abandonado | Sep 8, 2026 |
| Correos 1, 2 y 3 de carrito abandonado: activos y confirmados | Sep 8 / verificado Sep 28 |
| Google Search Console verificado | Sep 8, 2026 |
| Acceso de Laura en Search Console | Sep 8, 2026 |
| Microsoft Clarity instalado | Sep 8, 2026 |
| GA4 e-commerce tracking configurado | Sep 17, 2026 |
| Soft 404 Search Console resuelto | Sep 17, 2026 |
| Corrección completa de documentación (ADRs, brief, stack, contextos) | Sep 28, 2026 |
