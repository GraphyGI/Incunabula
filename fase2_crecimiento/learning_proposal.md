# Propuesta de Aprendizaje: Sistema de Documentación Viva + Gestión de Saturación de Sesión

## Clasificación
**Tipo:** Regla Global  
**Ámbito:** Todos los proyectos  
**Prioridad:** Alta — previene errores de omisión estratégica y saturación de contexto

---

## Problema que resuelve

Los modelos agenticos acumulan contexto comprimido a lo largo de sesiones largas.
Esto produce:
- Errores de omisión (ignorar datos disponibles por estar categorizados como "completado")
- Razonamiento sobre resúmenes en lugar de documentos reales
- Incapacidad de detectar cuándo la sesión está saturada

La solución no es depender de la memoria del modelo, sino de **un sistema de archivos vivo**.

---

## Regla propuesta (añadir a `user_global`)

```diff
+## Sistema de Documentación Viva (obligatorio en todos los proyectos)
+
+### Principio central
+**Nunca dependas de la memoria del modelo. Depende del sistema de archivos.**
+Todo lo relevante debe estar documentado. Si no está escrito, no existe.
+
+### Estructura de archivos obligatoria por proyecto
+Cada proyecto debe tener en su raíz o en `.agents/`:
+
+1. `_CONTEXT.md` — Punto de entrada obligatorio. El modelo SIEMPRE lo lee primero.
+   - YAML frontmatter con: fase actual, última actualización, checkpoint count, próximo paso.
+   - Índice de todos los documentos del proyecto con una línea de descripción cada uno.
+   - Qué leer si la tarea es técnica, de branding, de contenido, etc.
+   - Advertencias activas (decisiones pendientes, riesgos, datos disponibles sin explotar).
+
+2. Documentos de fase/área — nombrados con prefijo numérico para indicar orden de lectura.
+   - Siempre: índice al inicio → síntesis → detalles.
+   - Nunca información plana sin jerarquía.
+
+3. Convención de comentarios para modelos dentro de archivos .md:
+   - `<!-- 🤖 MODEL: [instrucción específica para el modelo] -->` — invisible al usuario.
+   - `> ⚠️ PENDIENTE:` — decisión bloqueada visible para todos.
+   - `> 📊 DATO DISPONIBLE:` — recurso listo para consumir (analytics, heatmaps, etc.).
+
+### Regla de documentación por metas cortas
+- Trabajar en sprints cortos con un objetivo concreto.
+- Al completar cada meta: actualizar `_CONTEXT.md` y el documento relevante ANTES de continuar.
+- Nunca avanzar a la siguiente meta si la documentación de la anterior está incompleta.
+
+### Regla crítica: memoria del contexto → archivos (sin excepciones)
+Todo lo que se discute, decide o descubre dentro de la sesión de chat es **contexto volátil**.
+Antes de cerrar cualquier bloque de trabajo, el modelo debe verificar:
+- ¿Hay decisiones tomadas en esta conversación que no están en ningún archivo?
+- ¿Hay datos compartidos por el usuario (cifras, preferencias, respuestas) sin registrar?
+- ¿Hay insights estratégicos alcanzados en el chat que no están documentados?
+
+Si la respuesta es sí a cualquiera: escribirlos antes de continuar.
+**El chat no es memoria. Los archivos sí lo son.**
+
+### Distinción crítica: tarea completada ≠ recurso agotado
+Cuando una tarea queda como ✅ completada, evalúa siempre:
+¿Esta tarea produce datos, activos o recursos que deben ser consumidos en el futuro?
+Si sí → documenta ese recurso en `_CONTEXT.md` bajo `## 📊 DATOS DISPONIBLES`.
+Ejemplo: "Microsoft Clarity instalado ✅" → "Clarity lleva X semanas capturando heatmaps → disponible para análisis de UX/branding".
+
+### Detección y reporte de saturación de sesión
+El modelo debe evaluar proactivamente la salud de la sesión. Reportar al usuario cuando
+se cumplan 2 o más de estas condiciones:
+- Checkpoints de compresión: > 4 (alerta) / > 6 (crítico — recomendar sesión nueva)
+- Documentos principales desactualizados: > 2 semanas sin actualizar
+- Errores de omisión detectados en la sesión actual
+- Contexto operando sobre resúmenes en lugar de archivos reales
+
+Al detectar saturación:
+1. Notificar al usuario con diagnóstico claro.
+2. Verificar que TODO lo discutido en sesión esté escrito en archivos antes de cerrar.
+3. Actualizar todos los documentos principales.
+4. Recomendar abrir sesión nueva con `_CONTEXT.md` actualizado como único punto de partida.
+
+### Frecuencia del chequeo de salud
+- **Proyecto activo (ejecución semanal):** schedule cada 3 días.
+- **Proyecto en pausa o mantenimiento:** cada 10 días.
+El schedule debe ajustarse al ritmo del proyecto, no ser una frecuencia fija.
+
+### Al iniciar cualquier sesión nueva
+1. Buscar `_CONTEXT.md` en la raíz del proyecto o en `.agents/`.
+2. Si no existe: crearlo antes de cualquier otra acción.
+3. Si existe: leerlo íntegramente. Luego y solo luego leer los documentos que indique.
+4. No asumir el estado del proyecto — leer siempre, nunca recordar.
```

---

## Archivos a modificar tras aprobación

1. `C:\Users\Jordan Marles\.gemini\config\rules\` → añadir la regla a `user_global` (o crear archivo separado `documentation_system.md`)
2. Proyecto Incunabula → crear `_CONTEXT.md` como primer documento de implementación

---

## Nota sobre la regla de signos de interrogación
La regla ortográfica (`¿?` y `¡!` en español) aprobada anteriormente también debe aplicarse ahora.
