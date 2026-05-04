# Estrategia de Estabilización y Rescate E-commerce

**Cliente:** Incunabula.co
**Objetivo:** Proteger el flujo de caja actual resolviendo fallas críticas de infraestructura y credibilidad, preparando la tienda para escalar.

---

## 1. Contexto y Diagnóstico del Dolor
Incunabula posee un activo digital invaluable: un catálogo consolidado de ~15.000 libros. Sin embargo, tras un **análisis técnico forense**, se determinó que la plataforma actual sufre de una severa inestabilidad que está asfixiando directamente las ventas.

**Principales Puntos de Riesgo Identificados:**
1. **Fallo de Integridad en Comunicación:** El servidor tiene un embudo crítico en el protocolo de transporte de mensajería (MTA). Las confirmaciones de compra no salen.
2. **Desincronización del Núcleo (Bomba de Tiempo):** Dependencias heredadas presentan conflicto directo con la versión moderna de PHP del servidor, generando errores fatales silenciosos.
3. **Fricción de Confianza (UX):** Presencia de "artefactos de desarrollo" heredados en producción que destruyen la credibilidad.
4. **Penalización Orgánica y Ceguera de Datos:** El sitio sufre de "spillover de indexación" y carece de telemetría de tráfico base.
5. **Cuello de Botella en el Buscador:** El motor de indexación interno está asfixiado, enlenteciendo las búsquedas de los usuarios.

---

## 2. Plan de Inversión Único

### Programa de Estabilización Operativa y Rescate Comercial
**Inversión:** $3.500.000 COP
**Tiempo estimado:** 3 a 4 Semanas

Un paquete intensivo diseñado estrictamente para "apagar los incendios", blindar la tienda y recuperar ventas perdidas por errores técnicos.

**Incluye:**
*   **Restauración de Protocolos de Comunicación:** Corrección de la capa de envío para reactivar los correos transaccionales a los clientes de forma segura.
*   **Compatibilidad y Saneamiento Core:** Actualización de constructores (ej. Elementor) y dependencias para garantizar funcionamiento nativo en PHP 8.2+. Limpieza profunda de tablas huérfanas.
*   **Auditoría y Purga de Credibilidad:** Eliminación de enlaces fantasma y textos de plantilla heredada.
*   **Blindaje SEO y Telemetría Base:** Desinfección de rutas indexables e implementación de rastreo de tráfico base (GA4).
*   **Optimización del Motor de Indexación:** Ajustes en la capa de procesamiento del buscador para asimilar 15,000 SKUs.
*   **Control de Calidad (QA) de Transacciones:** Simulaciones de estrés en pasarelas (Wompi, Addi) dentro del entorno Staging.

---

## 3. Políticas y Condiciones Comerciales
*   **Entorno Seguro (Staging):** Todo el trabajo se realiza en un "clon" del sitio. La tienda seguirá vendiendo con total normalidad.
*   **Garantía de Estabilización (Hypercare):** 30 días de cobertura de soporte exclusivo para atender regresiones sobre los componentes intervenidos.
*   **Licencias y Software de Terceros:** Este presupuesto no incluye el pago o renovación de licencias de plugins de terceros.
*   **Condiciones de Pago:** 50% anticipado para inicio de labores y 50% contra entrega.
