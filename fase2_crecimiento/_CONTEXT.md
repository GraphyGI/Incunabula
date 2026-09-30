---
fase: Fase 2 - Crecimiento
ultima_actualizacion: 2026-09-28
---

# Contexto — Fase 2: Crecimiento

**Objetivo Central:** Aumentar ingresos resolviendo bloqueos de conversión (UI/UX) y estableciendo una estrategia de retención y recompra (Email Marketing / Branding).

## Documentos Específicos de la Fase

### 1. Gestión (`01_gestion/`)
- [Decisiones (ADRs)](file:///h:/Mi%20unidad/Clientes/incunabula/Proyecto/fase2_crecimiento/01_gestion/decisiones.md): Registro histórico de por qué se tomaron decisiones tecnológicas y de negocio.

### 2. Branding (`02_branding/`)
- [Manual de Marca Maestro](file:///h:/Mi%20unidad/Clientes/incunabula/Proyecto/fase2_crecimiento/02_branding/manual_marca_maestro.md): Evolución de la identidad de la marca. Aquí se encuentra todo el desarrollo visual.

### 3. Técnicos (`02_tecnico/`)
- Pendiente de documentación detallada de implementaciones técnicas específicas (LCP/TTFB, etc.).

## 🚧 Estado de Implementaciones Técnicas
- **Correos de Carrito Abandonado (Seq 1, 2 y 3):** ✅ Activos. El Correo 3 manda cupón 10% automático.
- **Rendimiento LCP/TTFB:** En backlog, afecta fuertemente móvil (LCP actual: 4.6s según Clarity).
- **Errores JS en Clarity:** 1.056 sesiones con errores. ~30% son bots o navegador in-app (no accionables). Falta diagnosticar errores `textcontent` y `value`.

## 📊 Fuentes de Datos Activas
- Respuestas del cuestionario de marca en `00_contexto/Incunabula — Cuestionario estratégico de marca.csv`.
- Microsoft Clarity (Analizado) y GA4 (Analizado).

## Próximos Pasos en Fase 2
**[NOTA]** La auditoría externa de Claude ya fue procesada y los documentos están corregidos.
1. **PASO 1:** Instalar YayMail (versión gratuita) en STAGING.
2. **PASO 2:** Preparar y enviar los "Tokens de Marca v0" a Laura para su aprobación.
3. **PASO 3:** Verificar la acumulación de cupones (Simple Discount Rules 15% + Correo 3 de carrito 10%).
