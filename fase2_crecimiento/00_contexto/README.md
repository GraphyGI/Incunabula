# INCUNABULA — FASE 2: CRECIMIENTO Y REDISEÑO
**Cliente:** Laura — Incunabula Librería (incunabula.co)  
**Responsable:** Jordan Marles  
**Fase:** 2 — Paquete Completo ($6.900.000 COP)  
**Inicio:** Septiembre 2026  
**Estado:** 🟡 En ejecución

---

## ¿Qué es este proyecto?

Fase 2 del trabajo con Incunabula. La Fase 1 (Rescate Técnico, mayo–junio 2026) estabilizó y blindó la tienda. Esta fase entrega **crecimiento comercial y diseño a medida**.

**Documentación de Fase 1:** ver `../_fase1_rescate_tecnico/`

---

## Paquete Contratado

**Paquete Completo — $6.900.000 COP** (3 cuotas de $2.300.000)

Entregables comprometidos:
- [ ] Diseño 100% a medida con Elementor (sobre Bookory)
- [ ] Manual de marca digital
- [ ] Correos transaccionales con branding (YayMail)
- [ ] Secuencias de recuperación de carritos abandonados
- [ ] Filtros avanzados de catálogo
- [ ] SEO técnico + Search Console activo
- [ ] GA4 con e-commerce tracking completo
- [ ] Soporte 1 mes post-entrega

**Mantenimiento mensual:** $450.000 COP/mes

---

## Navegación del proyecto

```
fase2_crecimiento/
├── 00_contexto/          ← Estás aquí. Documentos de referencia base.
│   ├── README.md         ← Este archivo (índice maestro)
│   ├── brief_negocio.md  ← Datos del negocio, métricas, contexto
│   └── stack_tecnico.md  ← Estado actual de plugins y tecnología
│
├── 01_gestion/           ← Gestión interna (Jordan)
│   ├── estado_actual.md  ← ⭐ LEER PRIMERO al retomar trabajo (estado real + correcciones)
│   ├── backlog.md        ← Todas las tareas priorizadas
│   ├── bitacora.md       ← Log de sesiones de trabajo
│   └── decisiones.md    ← Registro de decisiones y su razonamiento
│
├── 02_tecnico/           ← Ejecución técnica
│   ├── correos/          ← YayMail + Cart Abandonment Recovery
│   ├── ga4_ecommerce/    ← Configurar e-commerce tracking en GA4
│   ├── rediseno/         ← Diseño Elementor a medida + manual de marca
│   ├── seo/              ← Search Console, Rank Math, keywords
│   └── performance/      ← Core Web Vitals, TTFB, optimización
│
├── 03_marketing/         ← Estrategia de crecimiento
│
├── 04_reportes_laura/    ← Reportes y entregas para el cliente
│
├── 05_propuesta_comercial/ ← Cotización / presentación comercial (Next.js)
│
└── 06_assets/            ← Recursos activos de esta fase (imágenes, etc.)
```

---

## Prioridades activas (actualizado Sep 15, 2026)

> ⚠️ Ver `01_gestion/estado_actual.md` para el estado real — este README puede estar desfasado.

1. ✅ ~~URGENTE: Correos de carrito abandonado~~ — DB actualizada, UI migrada (Sep 8)
2. ✅ ~~Ejecutar alertas del plugin Cart Abandonment Recovery~~ — Completado (Sep 8)
3. 🔴 **AHORA:** Activar correos 1 y 2 de carrito abandonado (los 2 primeros no dependen de Laura)
4. 🔴 **AHORA:** Configurar e-commerce tracking en GA4 → `02_tecnico/ga4_ecommerce/`
5. 🟡 Diseñar plantillas YayMail con branding (20 correos transaccionales)
6. 🟡 Resolver: UAE ¿se queda o se elimina antes del rediseño? → `02_tecnico/rediseno/`

---

## Accesos del proyecto

| Recurso | Dato |
|:---|:---|
| Sitio en vivo | https://incunabula.co |
| wp-admin | https://incunabula.co/wp-admin |
| Hosting | Hostinger hPanel |
| GA4 | Tag: `G-T6HQ91YF6P` |
| Google Ads | Tag: `AW-11097621701` |
| SMTP | FluentSMTP + Brevo (300 correos/día) |
| Staging | incunabula.co/desarrollo/ (protegido con contraseña) |
