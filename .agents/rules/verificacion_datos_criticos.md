# Regla: Verificación Obligatoria de Datos Críticos

> Esta regla aplica a TODAS las sesiones de trabajo con el proyecto Incunabula.

## Clasificación de Dato Crítico

Un dato es **CRÍTICO** si:
- Es una URL, dominio o subdominio del sitio web.
- Es una credencial, cuenta de correo, API key o acceso a una herramienta.
- Es el nombre exacto de un plugin, tema, tabla de base de datos o archivo de configuración.
- Es una instrucción de infraestructura (DNS, hosting, servidor, CRON, redirección).
- Es un número de versión usado para tomar decisiones de actualización o compatibilidad.
- Es un dato financiero (precio, comisión, porcentaje de contrato).
- Es cualquier instrucción que, si es incorrecta, **bloquea el trabajo, daña el proceso o requiere tiempo extra para revertirse**.

---

## Principio fundamental: Contexto de ventana primero

**Antes de abrir cualquier archivo, debo preguntarme:**

> *"¿Este dato ya fue mencionado explícitamente en esta conversación (por el usuario o por mí al leer un archivo)?"*

- **SÍ → Usar ese dato. No releer el archivo.** Releer algo ya leído es desperdicio de tiempo.
- **NO → Proceder con el protocolo de verificación.**

**Nunca asumir ni completar de memoria.** Si el dato no está en la ventana de contexto Y no está en los archivos → preguntar al usuario.

---

## Protocolo de Verificación (solo si el dato NO está en el contexto actual)

### Jerarquía de fuentes de verdad (en orden de prioridad):

1. `fase2_crecimiento/01_gestion/estado_actual.md` → **Estado real del proyecto, correcciones y próximos pasos** (⭐ leer primero al retomar)
2. `fase2_crecimiento/00_contexto/brief_negocio.md` → Datos del negocio, cliente, dominio.
3. `fase2_crecimiento/00_contexto/stack_tecnico.md` → Plugins, versiones, configuración técnica.
4. `fase2_crecimiento/00_contexto/README.md` → Resumen general del proyecto.
5. `fase2_crecimiento/01_gestion/bitacora.md` → Log cronológico de sesiones.
6. `fase2_crecimiento/01_gestion/backlog.md` → Lista completa de tareas con estado.
7. `fase2_crecimiento/01_gestion/decisiones.md` → Decisiones estratégicas aprobadas.

### Pasos del protocolo:

```
[ ] 1. ¿El dato crítico que necesito ya está en la ventana de contexto de esta sesión?
        → SÍ: Usarlo directamente. FIN.
        → NO: Continuar.

[ ] 2. ¿En qué archivo de la jerarquía debería estar este dato específico?
        → Abrir SOLO ese archivo. No hacer barrido completo de todos los documentos.

[ ] 3. ¿El dato está en ese archivo?
        → SÍ: Usarlo. FIN.
        → NO: Revisar el siguiente archivo de la jerarquía que corresponda.

[ ] 4. ¿El dato no está en ningún archivo relevante?
        → Decirle al usuario:
           "⚠️ No encuentro este dato en los archivos del proyecto. ¿Me lo confirmas antes de continuar?"
```

---

## Cuándo leer documentos de contexto al inicio de sesión

**NO leer automáticamente todos los archivos de contexto al comenzar una sesión.**

Leer un archivo de contexto solo si:
- El usuario pide trabajar en una tarea nueva y yo necesito un dato crítico que no está en la conversación.
- El usuario menciona explícitamente un archivo o área del proyecto que no ha sido cubierta en esta sesión.
- Han pasado múltiples sesiones y el usuario indica que el estado del proyecto puede haber cambiado.

**Sí leer inmediatamente** `estado_actual.md` al inicio si el usuario dice frases como:
- "continuemos", "seguimos donde quedamos", "retomamos", "¿dónde nos quedamos?"
- "empieza el trabajo de hoy"

**Sí leer `bitacora.md`** si se necesita el log cronológico detallado de una sesión específica.

**No leer todo por default.** Leer solo lo que el dato pendiente exige.

---

## Ejemplos de aplicación

| Situación | Acción incorrecta ❌ | Acción correcta ✅ |
|:---|:---|:---|
| La URL ya fue mencionada en esta sesión | Releer `brief_negocio.md` para "confirmarla" | Usar la URL que ya está en el contexto |
| Me preguntan la URL y no se ha mencionado antes | Asumir `incunabula.co` de memoria | Leer `brief_negocio.md` → verificar y responder |
| Me preguntan qué plugins están activos y ya los listamos antes | Releer `stack_tecnico.md` | Responder con la lista que ya está en contexto |
| Me piden configurar un DNS en una sesión nueva | Dar pasos con dominio de memoria | Verificar el dominio real en `brief_negocio.md` primero |
| El usuario pega un resumen de contexto en el chat | Ignorarlo y leer los archivos igual | Usar el resumen como fuente válida de contexto |

---

## Consecuencias conocidas de no seguir este protocolo

- **Caso real (08-sep-2026):** Se instruyó al usuario configurar Search Console con el dominio `incunabulalibros.com` (alucinado). El dominio real es `incunabula.co`. Resultado: 2 intentos fallidos de verificación, tiempo perdido, fricción innecesaria.
- **Caso real (15-sep-2026):** Al inicio de sesión no se leyeron los archivos de Fase 2 (`stack_tecnico.md`, `bitacora.md`), por lo que el agente desconocía el estado real de producción/staging, la arquitectura técnica y el punto exacto de trabajo. El usuario tuvo que pegar el contexto manualmente.

---

## Nota sobre modelos de IA

Este error es especialmente probable cuando:
- Se usa un modelo optimizado para rapidez sobre precisión.
- El dato forma parte del nombre comercial del cliente (el modelo completa heurísticamente).
- No se leen archivos del proyecto antes de responder en sesiones nuevas.
- Se releen archivos innecesariamente en sesiones donde el contexto ya está cargado.

**La velocidad NO justifica dar datos incorrectos. La eficiencia NO justifica releer lo que ya se sabe.**
