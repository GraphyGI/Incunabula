# QUICK WINS — INCUNABULA.CO
Este documento contiene ajustes menores, correcciones de copy y mejoras visuales rápidas que no afectan la funcionalidad core pero sí la credibilidad del sitio.

## 🛒 CHECKOUT (Finalizar Compra)
| Problema | Ubicación | Corrección Sugerida | Estado |
| :--- | :--- | :--- | :---: |
| **Typo "Order notes"** | Formulario de notas (Checkout) | Cambiar a "Notas del pedido (opcional)". | ⏸️ Aplazado (Prod) |
| **Typo Placeholder** | Cuadro de texto de notas | Cambiar "notes about your order" a "Notas sobre tu pedido, ej. instrucciones de entrega". | ⏸️ Aplazado (Prod) |
| **Idioma Mezclado** | Título lateral "Your order" | Traducir a "Tu pedido". | ⏸️ Aplazado (Prod) |
| **Typo "nota"** | WooCommerce > Ajustes > Correos | Cambiar "nota para el cliente" a "Nota para el cliente". | ⏸️ Aplazado (Prod) |
| **Cupón Descuento** | Aviso superior "15% Cart discount" | Traducir o unificar estilo con el resto de la marca. | ⏸️ Aplazado (Prod) |

## 📐 DISEÑO Y CONTENIDO (UI/UX)
| Problema | Ubicación | Corrección Sugerida | Estado |
| :--- | :--- | :--- | :---: |
| **Umbral de Envío Gratis** | Header ($90k) vs Barra ($100k) | Unificar al valor real confirmado por el cliente. | ✅ **RESUELTO ($100k)** |
| **Email Ficticio** | Footer (Pie de página) | Reemplazar `contact@example.com` por el correo oficial. | ✅ **RESUELTO** |
| **Enlaces de Demo** | Sección Blog (Homepage) | Eliminar enlaces que apuntan a `demo2wpopal.b-cdn.net`. | ✅ **RESUELTO (Secciones eliminadas)** |
| **Testimonios Fake** | Sección Testimonios | Eliminar testimonios de relleno (ej. "Pam Pruitt") o reemplazarlos por reales. | ✅ **RESUELTO (Secciones eliminadas)** |
| **Ancho Productos Relacionados** | PDP (Desktop) | Añadir `box-sizing: border-box; max-width: 25%;` en CSS para forzar las 4 columnas. | ✅ Aplicado (Por verificar) |
| **Z-index Vista Rápida** | PDP (Quick View) | Elevar z-index de `.woosq-product` a `99999999 !important` para sobreponer el Select2. | ✅ Aplicado (Por verificar) |

## 🧹 ORDEN TÉCNICO Y PLUGINS
| Problema | Ubicación | Corrección Sugerida | Estado |
| :--- | :--- | :--- | :---: |
| **Páginas Duplicadas** | wp-admin > Páginas | Eliminar versiones en inglés o duplicados de "Cart", "My Account" y "Wishlist". | ✅ **RESUELTO** |
| **Páginas de Relleno** | wp-admin > Páginas | Borrar "Sample Page", "Icons", "Elementor #7526". | ✅ **RESUELTO** |
| **Políticas de Devolución** | wp-admin > Páginas | Eliminar el duplicado vacío entre "Política de devolución" y "Política de devoluciones y reembolsos". | ✅ **RESUELTO** |
| **Sitemap Sucio** | RankMath | Desactivar indexación de post types técnicos (ej. `elementor-hf`). | ✅ **RESUELTO** |
| **Caídas 504 (Envía)** | wp-admin > Plugins | Borrado físico de carpeta Envía Colvanes desde hPanel. | ✅ **RESUELTO (25 mayo)** |
| **Inyectores Duplicados** | wp-admin > Plugins | Header/Footer Scripts y HFCM desactivados. Scripts consolidados en Elementor Pro Custom Code. WPCode Lite borrado. | ✅ **RESUELTO (25 mayo)** |
| **Carritos Duplicados** | wp-admin > Plugins | CartBounty desactivado. WC Cart Abandonment Recovery es el único activo. | ✅ **RESUELTO (25 mayo)** |
| **Plugins Inactivos Piratas** | wp-admin > Plugins | 18 carpetas de plugins inactivos (ACF Pro, Rank Math Pro, JetSmartFilters, etc.) eliminadas físicamente. | ✅ **RESUELTO (25 mayo)** |

---
// ✅ BEST PRACTICE: Atacar estos puntos al final de la jornada técnica como "pulido" mejora mucho la percepción de calidad del cliente.
