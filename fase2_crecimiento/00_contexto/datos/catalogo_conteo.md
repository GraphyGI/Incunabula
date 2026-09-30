# Conteo de Catálogo y Productos
**Fecha:** 28 Sep 2026
**Fuente:** Confirmación de usuario / Captura wp-admin

## Cifras Exactas
- **Total de productos creados:** 21.735 (incluyendo productos agotados).
- **Productos en stock (Hay existencias):** 6.457.

## Implicaciones para el Trabajo Técnico
1. **Falso ~7.000:** La cifra de ~7.000 provenía de un redondeo rápido de los 6.457 en stock. La cifra de ~15.000 era una estimación incorrecta.
2. **Impacto en Optimización de Imágenes (ADR-018):** 
   - La optimización masiva con LiteSpeed/QUIC.cloud debe realizarse.
   - Aunque hay 21k productos, el esfuerzo principal de visualización (y por ende de rendimiento LCP) se concentra en los 6.457 activos.
3. **SEO:** Tener ~15k productos agotados indexados puede generar errores (Soft 404) o diluir el presupuesto de rastreo de Google (Crawl Budget). Hay que revisar la configuración de WooCommerce para productos agotados (idealmente enviarlos al final del catálogo o añadir "Productos Relacionados" fuertes para que no sean páginas muertas).
