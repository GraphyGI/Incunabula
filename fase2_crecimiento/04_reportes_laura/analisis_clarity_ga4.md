# Análisis Preliminar de Datos (Clarity + GA4 + GSC)
**Fecha:** 28 Sep 2026

## 1. Microsoft Clarity (Sep 25 - Sep 27)
- **Tráfico General:** 4179 sesiones en 3 días. **Alerta:** 1749 sesiones son de bots (¡casi el 40% del tráfico!).
- **Rendimiento UI:** LCP altísimo de 4.64s. Esto penaliza severamente el SEO y la UX en móviles.
- **Errores de Interacción (JS):** 1056 sesiones experimentaron errores de JavaScript.
  - El 33% de los errores son `cannot set properties of null (setting 'textcontent')` y 25% `setting 'value'`. Esto suele bloquear botones de "Añadir al carrito" o variaciones.
- **Patrón de Tráfico:** Altísima concentración en el libro "reportaje-al-sexo-una-respuesta-cientifica" (1244 sesiones). Indica pautas corriendo específicamente hacia este tipo de catálogo (FacebookApp 47% del tráfico).
- **Conversión Baja:** A pesar del alto tráfico, solo 3 compras registradas (0.07%) y 36 add_to_cart (0.86%). Esto sugiere curiosidad por la pauta pero barrera de confianza/UX para convertir.

## 2. GA4 e-commerce
- Ya configurado e integrado. Eventos como `add_to_cart`, `begin_checkout` y `purchase` están fluyendo. (Pendiente de exportaciones más largas para cruzar recurrencia).

## 3. Google Search Console
- Caída de impresiones hacia el 11 de Sep (7352) recuperándose un poco después. Gran cantidad de URLs "Sin indexar", indicando problemas de contenido duplicado, Soft 404s o filtros.

## Acciones Inmediatas Derivadas
1. **Corregir JS:** Investigar qué script está lanzando "cannot set properties of null" (posiblemente Elementor o el add-to-cart de WooCommerce).
2. **Rendimiento Móvil:** Priorizar limpieza del Bookory Theme o de los Ultimate Addons para bajar LCP.
3. **Optimizar Landing Page Top:** La PDP de "Reportaje al sexo..." tiene que estar impecable ya que se lleva casi el 30% del tráfico total.
