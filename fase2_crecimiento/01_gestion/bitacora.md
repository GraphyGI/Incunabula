# BITÁCORA — Fase 2: Crecimiento Incunabula
**Responsable:** Jordan Marles  
**Formato:** una entrada por sesión de trabajo.

---

## Sesión 001 — 7 Septiembre 2026

**Duración:** —  
**Entorno:** Gestión / Organización documental

### Qué se hizo
- Reestructuración completa de la documentación del proyecto.
- Archivados todos los documentos de Fase 1 en `_fase1_rescate_tecnico/`.
- Creada la estructura de carpetas de Fase 2.
- Creados documentos base: README, backlog, bitácora, decisiones.
- Identificado problema urgente: correos de carrito abandonado no están saliendo.

### Pendiente para próxima sesión
- Acceder al wp-admin y ejecutar las 2 alertas de Cart Abandonment Recovery.
- Verificar si existen plantillas en el plugin.
- Crear plantillas de correo de carrito abandonado.

### Notas
- Laura contrató Paquete Completo ($6.9M, 3 cuotas de $2.3M).
- Modelo Claude no disponible temporalmente (503) — cambiado a Gemini Flash.

---

## Sesión 002 — 8 Septiembre 2026

**Duración:** En curso  
**Entorno:** Producción (`incunabula.co` / wp-admin)

### Qué se hizo
- Confirmada migración a la New UI y actualización de base de datos en *WooCommerce Cart Abandonment Recovery*.
- Diagnóstico de plantillas: se descubrió que las 3 plantillas por defecto estaban desactivadas.
- Envío y recepción exitosa de correo de prueba confirmando que la infraestructura de envío opera.
- Detección de fricción en checkout con el cupón `comprasmayores` ($150.000) visible a todos los usuarios.
- Redacción y envío de propuesta técnica y comercial a Laura sobre: porcentaje del 3º correo, automatización del cupón $150k.
- Google Search Console verificado y acceso otorgado a Laura.
- Microsoft Clarity instalado via Code Snippets.

### Pendiente para próxima sesión
- Esperar feedback de Laura sobre cupones.
- Avanzar con GA4 o YayMail.

---

## Sesión 003 — 17 Septiembre 2026

**Entorno:** Producción (GA4 / Search Console)

### Qué se hizo
- GA4 e-commerce tracking configurado: eventos `purchase`, `add_to_cart`, `begin_checkout` activos.
- Decisión ADR-007: usar plugin oficial WooCommerce Google Analytics Integration.
- Soft 404 en Search Console resuelto (ADR-003 como consecuencia documentada).
- Análisis inicial de Clarity (heatmaps, errores JS).

---

## Sesión 004 — 28 Septiembre 2026

**Entorno:** Documentación / Auditoría  
**Herramienta:** Antigravity IDE

### Qué se hizo
**Auditoría completa por Claude.** Se leyeron todos los documentos del proyecto y se detectaron 10 hallazgos (H1-H10) con errores en el reporte y la documentación. Se procesaron las correcciones en esta sesión.

**Correcciones ejecutadas:**
- ADR-006 corregido: cupón es 15% para compras > $150.000 (no "$150.000 de descuento")
- ADR-012 a ADR-018 creados (cronograma, prioridad por contrato, reseñas de tienda, dirección de arte, logo, campañas email, imágenes)
- `brief_negocio.md`: corregidos datos de productos (21.735 total / 6.457 en stock), paleta/tipografía marcadas como "propuesta no aprobada", YayMail corregido a "no instalado"
- `stack_tecnico.md`: corregidas todas las referencias a ~15k productos
- `reporte_estado_incunabula.md`: corregidos 6 errores (productos, correo 3, YayMail, errores JS, reseñas)
- `_CONTEXT.md` (raíz y fase2): actualizados con estado post-auditoría
- `estado_actual.md`, `backlog.md`, `bitacora.md`: restaurados desde `_archivo/` con estado actualizado
- `reglas_trabajo.md`: añadida regla de data analizada
- Creada carpeta `00_contexto/datos/` con 4 archivos de data verificada
- Creado `00_contexto/_indice_contexto.md` con índice de imágenes de referencia
- Creado `04_reportes_laura/mensaje_imagenes.md`

**Datos confirmados en esta sesión:**
- Total productos: 21.735 (incluye agotados)
- Productos en stock: 6.457 (origen del "~7.000")
- YayMail: NO instalado. Versión gratuita es suficiente.
- Correos 1, 2 y 3 de carrito: ACTIVOS. Correo 3 manda cupón 10% automático.
- Bloqueo correo 3 es nuestro (acumulación de cupones sin verificar), no de Laura.
- Campañas de email marketing: fuera del contrato. Proponer como servicio adicional con otrosí.
- Logo: 2 versiones (horizontal + isotipo), 2 rondas de modificaciones.

### Próximos pasos (Sesión 005)
1. Instalar YayMail en STAGING
2. Preparar Tokens de Marca v0 para Laura
3. Verificar acumulación cupones (Simple Discount Rules + correo 3)
4. Cerrar GA4 (Módulo B, vence 4 Oct)

---

<!-- Nueva entrada debajo de esta línea -->
