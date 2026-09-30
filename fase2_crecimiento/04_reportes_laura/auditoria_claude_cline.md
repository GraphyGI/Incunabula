# Auditoría Incunabula, Fase 2 (28 Sep 2026)

Leí los dos `_CONTEXT.md`, las reglas de `.agents/rules/`, el contrato de Fase 2 y su Anexo 1, el brief, el stack técnico, las ADRs, el manual de marca, el diagnóstico de branding, el cuestionario completo, el CSV de Clarity, el análisis Clarity/GA4, el backlog, la bitácora y el estado actual (estos tres están en `_archivo`). También leí el chat de WhatsApp: el archivo es un ZIP y lo abrí en memoria, sin extraer nada al disco.

**Resumen:** el orden de prioridades del reporte no sigue el contrato. El Hito 1 (correos YayMail + GA4) es lo que libera la Cuota 2 de $2.300.000, ya va atrasado según el cronograma y no aparece entre los 3 próximos pasos. Además, varias afirmaciones del reporte no coinciden con los archivos.

---

## 1. Errores en el reporte y en la documentación

| # | Lo que dice el reporte o un documento | Lo que muestran los archivos | Por qué importa |
|:--|:--|:--|:--|
| H1 | "Correo 3 bloqueado porque Laura no ha definido el %" | Laura sí respondió el 8 Sep por WhatsApp. Preguntó si el 15% automático más el 10% del correo 3 sumarían 25% con envío gratis. Jordan quedó en averiguarlo. | **El bloqueo es nuestro, no de Laura.** La tarea real es revisar si Simple Discount Rules y Smart Coupons acumulan descuentos. |
| H2 | ADR-006: cupón `comprasmayores` = "$150.000 de descuento" | En el chat es un **15% para compras de más de $150.000** | El ADR está mal escrito. Cualquier trabajo basado en él saldría mal. |
| H3 | "Correos de carrito 1 y 2 ✅ activos" | La bitácora termina el 8 Sep. El backlog dice "Hacer ya". No hay prueba de que se activaran. | Según ADR-010, no se puede marcar como hecho sin evidencia. |
| H4 | "GA4 ✅ Analizado" | El propio análisis dice "pendiente de exportaciones más largas". No se ha comparado GA4 contra los pedidos de WooCommerce. No hay filtro de bots ni embudo. | El Módulo B no está listo para entregar. |
| H5 | "Más de 1000 errores JS bloqueando interacciones" | 1056 son **sesiones** con errores, y el conteo incluye bots. `java object is gone` (16%) es ruido típico del navegador interno de Facebook en Android. `Script error.` (16%) es un error de otro dominio del que no se puede sacar información. | Casi un tercio de esos errores no son del sitio. Hay que diagnosticar antes de corregir. |
| H6 | Conversión de 0,07% (análisis de Clarity) | Se calculó incluyendo 1.749 sesiones de bots. Sin bots: 3 compras / 2.430 sesiones = **0,12%**, y 36 al carrito = **1,5%**. Además la muestra es de solo **3 días**. | Muestra demasiado corta para decidir un rediseño. |
| H7 | La caída del 38% se atribuye al baneo | La caída es gradual desde febrero, no un corte brusco. Comparando may–ago con 2025: pedidos −32% pero ventas netas solo −7%. Y el tráfico actual viene 47% de la app de Facebook, o sea que hay pauta activa en Facebook. | La causa no está probada. Puede haber estacionalidad o una campaña mal configurada. |
| H8 | Paleta y tipografía "✅ definidas" (brief) | El diagnóstico del 22 Sep ya lo corrigió: son propuestas, nunca aprobadas ni aplicadas. El brief no se actualizó. | Incumple la regla de corregir el archivo oficial. |
| H9 | ~7.000 productos activos | `estado_actual` y `stack_tecnico` dicen ~15.000 | Cambia la estrategia de SEO, fotografía y catálogo. |
| H10 | Las reglas mandan leer primero `01_gestion/estado_actual.md` | Ese archivo, el backlog y la bitácora se movieron a `_archivo` hoy a las 12:33 y no se reemplazaron | **El sistema de documentación de referencia está roto.** Cualquier sesión nueva arranca sin contexto fiable. |

---

## 2. Estado frente al contrato

Según la cláusula Séptima, el plazo arranca el día hábil siguiente a firma + Cuota 1 + accesos. La Cuota 1 se pagó el 13–14 Sep, así que el inicio fue alrededor del 15 Sep. Hoy estamos en la **semana 3**.

| Módulo | Cronograma | Estado real | Riesgo |
|:--|:--|:--|:--|
| **A. Correos (Hito 1)** | Semanas 1–2 | 1 de 20 plantillas YayMail con marca. **YayMail ni siquiera aparece en el inventario de plugins** (sin verificar). Correo 3 bloqueado por nosotros. Sin pruebas de entregabilidad. | 🔴 Atrasado, y frena la Cuota 2 |
| **B. GA4 (Hito 1)** | Semanas 2–3 | Eventos configurados. Faltan: verificar ingresos reales, filtro de bots, embudo, confirmar `view_item`. | 🟠 Unas 4 h de trabajo nuestro, no depende de Laura |
| C. Rediseño | Semanas 5–8 | Sin wireframes. Decisión sobre UAE pendiente. | Depende de la dirección de arte |
| D. Manual de marca (PDF) | Semanas 9–10 | Lista de chequeo con la Fase 2 medio llena. Faltan tono, paleta, tipografía y logo. | 🟡 |
| E. SEO técnico | Semanas 9–10 | Sin iniciar | 🟢 |

**Posibles cosas fuera del contrato (necesito que me confirmes):**
- **Rediseño del logo:** el contrato cubre "lineamientos de uso de la marca", no rehacer la ilustración. Vectorizarla sí es razonable; rediseñarla profesionalmente sería trabajo nuevo.
- **Campañas de email a la base de clientes:** el Anexo 1 excluye expresamente las "campañas de marketing".
- **Sistema de reseñas:** entra dentro del rediseño de la página de producto (backlog #16).

---

## 3. Respuestas a las 4 preguntas

### P1. ¿Hay errores lógicos en el orden de prioridades?
Sí, cuatro:
1. **Pone primero lo barato en vez de lo que frena el avance.** "Analizar Taschen y Villegas" sin plazo ni entregable es investigación abierta. Lo que frena el proyecto es que **no hay colores, tipografía ni logo aprobados**. Eso impide hacer los correos YayMail (Hito 1), los estilos globales de Elementor (Hito 2) y el manual (Módulo D).
2. **El Hito 1 no aparece.** Es lo que genera el pago y ya va atrasado.
3. **Corregir el LCP ahora choca con ADR-008 y con el rediseño.** Optimizar Bookory y luego rediseñar es hacer el trabajo dos veces. La excepción es la página de producto que recibe la pauta (1.244 sesiones en 3 días, 30% del tráfico): conviene arreglar sus imágenes ya.
4. **Reseñas por producto en una tienda de ejemplares únicos.** Cada libro usado se vende una sola vez, así que las reseñas por producto quedarían casi siempre vacías, y cero estrellas es una mala señal. **Las reseñas tienen que ser de la tienda**, no de cada libro: Google Business Profile, recién creado, más una solicitud automática después de que el pedido se completa.

### P2. ¿Cómo retener clientes sin que los fundadores tengan que escribir?
Laura dijo explícitamente que **no quieren textos redactados por IA ni listas genéricas**, y que como mucho harían algo cada 3 meses si tienen una plantilla. Su propia razón de por qué vuelven los clientes es: "siempre hay libros nuevos". **El contenido del correo es el catálogo mismo.** Propuesta de flujos que se configuran una vez:

| Flujo | Disparador | Trabajo para Laura/Carlos |
|:--|:--|:--|
| Solicitud de reseña de la tienda | Pedido completado + 7 días | Ninguno (además ataca la barrera de confianza) |
| "Llegaron esta semana" | Automático semanal con los productos nuevos | Ninguno: se arma solo con lo último que catalogaron |
| Reactivación | 90 y 180 días sin comprar | Ninguno |
| Carta del librero | Trimestral, con plantilla fija | ~1 h cada 3 meses, escrita por ellos |

**Antes de enviar cualquier campaña hay tres condiciones:**
- **Autorización de datos (Ley 1581 de 2012):** hay que saber si el checkout pedía consentimiento para marketing. Sin eso, escribirles a los 4.847 clientes es un riesgo legal.
- **Reputación del dominio:** es una base que nunca ha recibido correos. Hay que limpiarla antes, y probablemente enviar desde un subdominio aparte para no perjudicar los correos de pedidos.
- **Contrato:** esto está fuera del alcance actual. Hace falta un otrosí o dejarlo como recomendación.

### P3. ¿Cómo se concilia un estilo Taschen/Villegas con portadas dispares?
El aspecto premium de Taschen viene del **sistema de diseño**, no de las fotos. La regla sería **marco uniforme, contenido variable**:
- La tarjeta de producto tiene proporción 2:3 fija, fondo pergamino y la foto centrada con margen. Así el marco uniforma aunque las portadas sean distintas.
- Protocolo de foto que no cuesta tiempo extra, porque ya fotografían cada libro: un solo lugar fijo, mismo fondo, misma luz y el celular en un soporte. Se monta una vez.
- Lo "editorial" (portada del sitio, encabezados de categoría, correos) lleva el estilo Taschen. La cuadrícula del catálogo sigue siendo práctica.
- **Riesgo de posicionamiento:** su diferencia declarada es el **precio bajo**. Si se ve demasiado Taschen, puede parecer cara. Propongo una dirección **"editorial accesible"**: la tipografía y el espacio de Taschen, con la claridad de precio y estado del libro de Recyclivre.

### P4. ¿Qué datos de Clarity priorizar?
Ampliar el período a **8 Sep – hoy** y **excluir bots**. Luego, en este orden:
1. **Embudo por navegador:** producto → carrito → checkout → compra, separando la app de Facebook del resto. La hipótesis es que el paso a Wompi falla dentro del navegador interno de Facebook, que es el 47% del tráfico.
2. **Detalle de los errores `textcontent` y `value`:** en qué página y en qué script ocurren, y comparar la tasa de "agregar al carrito" entre sesiones con y sin error.
3. **Mapa de calor móvil y profundidad de scroll** de la página de producto que recibe la pauta: si el usuario llega al botón de compra y dónde caen los clics que no hacen nada (6,8% de sesiones).
4. **10 grabaciones** de sesiones que llegaron al checkout y no compraron.
5. **Comparar GA4 con WooCommerce** (compras del 17 al 27 Sep) para validar el Módulo B.

---

## 4. El siguiente paso (uno solo)

**Propuesta cerrada de "Tokens de Marca v0" para que Laura diga sí o no.** Es una sola página visual con:
- logo actual (sin rediseñar)
- 3 colores y 2 neutros
- tipografía para web y una alternativa segura para correos
- botón y tarjeta de producto de muestra
- como justificación, 4–6 capturas de Taschen y Villegas analizadas

**Por qué este paso:** es lo que desbloquea tres entregables contractuales a la vez: YayMail (Hito 1 → Cuota 2), los estilos globales de Elementor (Hito 2) y el manual (Módulo D). Lo más lento del proyecto es la respuesta de Laura, así que lo que depende de ella tiene que salir primero.

Mientras ella responde, trabajo en lo que no la necesita: cierre de GA4, revisión de cómo se acumulan los cupones y diagnóstico en Clarity. La respuesta sobre el cupón (H1) puede ir en el mismo mensaje a Laura.

---

## 5. Cambios de documentación (cuando pases a Act mode)
1. Restaurar `01_gestion/estado_actual.md`, `backlog.md` y `bitacora.md` como archivos vigentes, o ajustar las reglas para que apunten a `_CONTEXT.md`. Arregla H10.
2. Corregir ADR-006 (H1 y H2) y el brief (H8 y H9).
3. Registrar tres nuevas decisiones: ADR-012 (priorizar por lo que exige el contrato), ADR-013 (reseñas de tienda, no de producto) y ADR-014 (dirección de arte "editorial accesible", pendiente de aprobación).
4. Crear `02_branding/01_direccion_arte.md` con los principios y los Tokens v0, y enlazarlo desde el manual.
5. Corregir `reporte_estado_incunabula.md` y ambos `_CONTEXT.md`.

---

## 6. Lo que necesito de ti
⚠️ **No encuentro estos datos en los archivos. ¿Me los confirmas?**

1. **Captura de Cart Abandonment Recovery → Follow-up Emails** con el estado de los correos 1–3 y los envíos. Arregla H3.
2. **Captura de wp-admin → Plugins filtrando "YayMail":** ¿está instalado y activo?
3. **¿El rediseño del logo está vendido dentro del contrato**, o solo vectorizarlo?
4. **Fecha aproximada del baneo** y **captura de Meta Ads Manager** (últimos 3 meses): qué campañas están activas, con qué objetivo (tráfico o ventas) y si apuntan al libro "Reportaje al sexo".
5. **Pedidos e ingresos mensuales de 2025** (WooCommerce → Analytics) para separar estacionalidad y baneo.
6. **¿El checkout tiene casilla de autorización para marketing?** Captura del checkout.
7. **Número real de productos activos:** ¿7.000 o 15.000?
8. **Material para los Tokens v0:** archivo del logo actual, captura del perfil de Instagram y 3 fotos de producto típicas. Y 4–6 capturas de Taschen y Villegas (portada del sitio, ficha de producto y catálogo), según ADR-011.

Cuando tengas las respuestas, cambia a Act mode (**"toggle to Act mode"**) y hago los cambios de la sección 5 y la propuesta de Tokens v0.

---

Primero corrijo el conteo de semanas. Luego busco el archivo del logo, que me pediste pasar a contexto, y reviso qué hay en `06_assets` (solo lectura).

---

Ya subiste a `00_contexto` 8 imágenes: Logo, Instagram, 3 fotos de producto, Taschen, Villegas y Recyclivre. Las reviso para que el plan quede basado en lo que muestran.

---

Vuelvo a abrir las imágenes para que el plan se base en lo que muestran y no en lo que recuerdo de ellas.

---

Reviso las fotos de producto y el logo. También busco en el stack qué plugin de optimización de imágenes existe y qué contiene hoy el correo 3 de carrito, que está activo según tu captura.

---

Tengo todos los pantallazos. Antes de cerrar el plan reviso dos datos en texto: qué plugin de imágenes aparece en el stack y qué contiene hoy el correo 3.

---

# Respuesta: correcciones, decisiones nuevas, imágenes y siguiente paso

No cambié ningún archivo porque estamos en Plan mode. Todo lo de abajo queda listo para ejecutar cuando cambies a Act mode.

## 1. Semanas del contrato: tienes razón

Me equivoqué al poner el inicio "alrededor del 15 Sep" y decir que íbamos en la semana 3 como si ya hubiera avanzado. El 14 Sep y hoy (28 Sep) son lunes. Eso quiere decir que llevamos **2 semanas completas** y que hoy empieza la semana 3.

| Semana | Fechas | Módulo según cronograma |
|:--|:--|:--|
| 1–2 | 14 – 27 Sep | A. Correos |
| 2–3 | 21 Sep – 4 Oct | B. GA4 |
| 5–8 | 12 Oct – 8 Nov | C. Rediseño |
| 9–10 | 9 – 22 Nov | D. Manual + E. SEO |

- **Módulo A:** su plazo se cerró ayer. Va 1 día pasado, no "muy atrasado" como di a entender.
- **Módulo B:** todavía está dentro de su plazo.
- **Festivos:** si el contrato cuenta días hábiles, los festivos del 12 Oct, 2 Nov y 16 Nov mueven las fechas.

Lo dejo registrado como decisión: **inicio oficial el 14 Sep 2026**.

---

## 2. Lo que dicen tus pantallazos

### Imagen 1: correos de carrito abandonado
- **Los 3 correos están activos**, incluido el correo 3 (3 días). El reporte decía "bloqueado", y eso está mal.
- Las cifras de envíos y tasas están **borrosas porque son funciones PRO**. Son de relleno y no sirven como dato.
- **Pendiente:** no sé qué cupón o qué porcentaje manda hoy el correo 3. La pregunta de Laura sobre si los descuentos se suman sigue sin responder.

### Imagen 2: WooCommerce 2025 frente a 2024

| Indicador | 2025 | Comparado con 2024 |
|:--|:--|:--|
| Ventas netas | $65.875.650 | +19% ($55.273.145) |
| Pedidos | 936 | +15% (812) |
| Productos vendidos | 2.281 | +7% |
| Pedidos con descuento | 186 | −17% |

**Lo que se calcula a partir de ahí:**
- En 2025 el promedio fue de unos **78 pedidos y $5,49M al mes**, con un ticket neto de **$70.380**.
- Julio 2026 (50 pedidos) queda un **36% por debajo del promedio de 2025**.
- Pero el ticket de 2026 ($85.125) es **21% más alto**. La caída está en el número de pedidos, no en cuánto gasta cada cliente.
- **Usados** es el 85% de los artículos y el 76% de las ventas netas. Es el corazón del negocio.
- **La tote bag de Incunabula es el 2º producto más vendido.** La gente compra la marca como objeto, y eso justifica el rediseño del logo.
- **Lo que no se puede sacar:** si hay estacionalidad. El gráfico va por día y no permite comparar meses.

### Imagen 3: la página de pago
- Textos en inglés o mal escritos: "Your order", "Order noes" y "noes about your order… special noes".
- La tarjeta del cupón dice "15% Cart discount · comprasmayores" y **aparece con un subtotal de $30.000**, cuando el descuento aplica desde $150.000. No explica la condición y además compite con la barra de "¿Tienes un cupón?". Eso invita al cliente a salir a buscar códigos.
- "Población" tiene doble asterisco.
- El campo de tarjeta regalo está justo antes del botón de pago, lo que añade fricción.
- **No hay casilla de autorización para marketing.** Solo aparecen los términos y el texto de privacidad. Por eso cualquier campaña futura necesita revisar la política de privacidad, y conviene **agregar desde ya una casilla opcional y sin marcar**. Así la base con autorización empieza a crecer hoy.

### Otros datos
- **YayMail no está instalado.** El contrato lo menciona para el Módulo A, así que el "1 de 20 plantillas con marca" del reporte era falso.
- **Total de productos: 21.735.** Reemplaza las cifras de 7.000 y 15.000 en todos los documentos.
- **Fecha del baneo:** se registra como "desconocida". Se puede averiguar en Meta Business Suite → Calidad de la cuenta, donde suele aparecer el historial de restricciones con fecha.

---

## 3. Imágenes: quién hace qué

**Primero, una aclaración para no prometer de más:** las fotos no son todo el problema de velocidad. El LCP en móvil es de 4,6 s, pero ya teníamos registrado que **el servidor tarda 2,7 s solo en responder** (TTFB, por el tema Bookory). Las imágenes son una parte, no la única.

| Tarea | Quién | Cómo, sin editar foto por foto |
|:--|:--|:--|
| Hacer más livianas las 21.735 fotos | **Tú** | Optimización masiva desde el servidor: **LiteSpeed Cache ya está instalado** y tiene optimización y conversión a WebP en lote. Primero en staging y con respaldo, como pide el contrato. Hay que revisar la cuota gratuita de QUIC.cloud (el servicio que hace la conversión) y el espacio en disco. |
| Que la foto principal cargue primero | **Tú** | Precargar esa imagen y no aplicarle carga diferida, sobre todo en la página del libro que recibe la pauta. |
| Que el catálogo se vea parejo | **Tú** | El "marco uniforme" del nuevo diseño: tarjeta de proporción 2:3 fija, la foto ajustada dentro sin recortarla y fondo uniforme. Se aplica a todo el catálogo de una vez con CSS en Elementor. |
| Fotos nuevas de aquí en adelante | **Laura y Carlos** | Armar un "rincón de fotos" fijo, **una sola vez**: mismo lugar, mismo fondo, misma luz y soporte para el celular. No cuesta tiempo extra porque ya fotografían cada libro. |

**Qué no recomiendo:** herramientas para quitar el fondo con IA en lote. Con 21.735 productos es caro y el resultado es irregular. Si se usan, que sea solo para los libros destacados.

### Borrador del mensaje para Laura
> Hola Laura 👋 Te cuento algo que encontramos en los datos del sitio.
>
> En celular, la página de cada libro tarda cerca de 4,6 segundos en mostrarse (Google recomienda menos de 2,5). Casi toda la gente que llega por los anuncios entra desde el celular, y cada segundo de espera hace que algunos se vayan antes de ver el libro. Una parte se debe a las fotos y otra al servidor.
>
> **La buena noticia: no tienes que editar ninguna foto.**
> 1. **Eso lo hago yo:** voy a comprimir automáticamente todas las fotos del catálogo a un formato más liviano, sin que se vea la diferencia. Primero lo pruebo en la copia de prueba del sitio.
> 2. **Para que se vean parejas:** en el nuevo diseño cada foto va dentro de un marco igual para todas, así se ven ordenadas aunque las portadas sean muy distintas.
> 3. **Lo único que les pido, y solo para las fotos nuevas:** armar un "rincón de fotos" fijo, siempre el mismo lugar, fondo y luz, con el celular en un soporte. Se monta una vez y no les quita tiempo.
>
> Para ayudarles con eso, ¿me cuentas quién toma las fotos y me mandas una foto del lugar donde las toman hoy?

---

## 4. Qué significa "el siguiente paso" (Tokens de Marca v0)

**Qué es:** los "tokens" son las decisiones básicas de la marca, escritas con valores exactos para reutilizarlas en todas partes: colores con su código, tipografías y tamaños, y cómo se ven un botón y una tarjeta de libro. Funcionan como las piezas de LEGO con las que se arma cada correo, página y el manual.

**Qué recibe Laura:** una sola página visual con **una propuesta cerrada**. Trae la paleta, las tipografías y un correo y una tarjeta de libro de muestra, justificados con capturas de Taschen y Villegas. Ella solo tiene que decir **sí o qué cambiar**. Es una decisión de 10 minutos, no un taller.

**Por qué va primero:**
- Sin colores y tipografía aprobados no se puede diseñar YayMail, y YayMail es lo que cierra el **Hito 1 y libera la Cuota 2**.
- También bloquea los estilos globales de Elementor (Módulo C) y el manual (Módulo D).
- Lo más lento del proyecto es la respuesta de Laura, así que lo que depende de ella tiene que salir antes.
- El análisis de Taschen y Villegas no se pierde: se usa, con tiempo limitado, como justificación de la propuesta.

**Cómo encaja el logo nuevo:** los tokens v0 usan el logo actual de forma provisional. El rediseño va después con la misma paleta. Cambiar el logo en YayMail es reemplazar una sola imagen, así que no hay trabajo doble.

**Orden:**
1. Instalar YayMail en staging.
2. Preparar los tokens v0 (1–2 días).
3. Enviarlos a Laura.
4. Mientras ella responde, hacer lo que no depende de ella: cierre de GA4, cupones y diagnóstico en Clarity.

---

## 5. Cambios de documentación (cuando pases a Act mode)

1. **`01_gestion/decisiones.md`:** corregir ADR-006 (es 15% para compras de más de $150.000) y agregar:
   - **ADR-012:** inicio oficial el 14 Sep 2026 y cronograma con fechas.
   - **ADR-013:** priorizar según los hitos de pago del contrato.
   - **ADR-014:** reseñas de la tienda, no de cada producto.
   - **ADR-015:** dirección de arte "editorial accesible" (propuesta).
   - **ADR-016: rediseño del logo como bonificación sin costo dentro de este contrato.** Alcance: concepto e ilustración simples basados en el nombre y el símbolo actuales (el vendedor ambulante). No es una identidad nueva. Propongo como entregables: versión horizontal, solo símbolo, monocromo y favicon, con 2 rondas de ajustes.
   - **ADR-017: campañas de email y retención fuera de la Fase 2, con propuesta aparte más adelante.** Requisito previo: autorización según la Ley 1581.
   - **ADR-018:** imágenes con optimización masiva y marco CSS, sin edición manual.
2. **`03_legal/`:** una nota de alcance sobre la bonificación del logo. Recomiendo que Laura también la confirme por escrito; protege a ambos.
3. **`00_contexto/datos/`** (carpeta nueva, para guardar toda la data analizada con fuente, fecha y cálculos):
   - `woocommerce_2025_vs_2024.md`
   - `checkout_2026-09-28.md`
   - `carrito_abandonado_2026-09-28.md`
   - `catalogo_conteo.md`
4. **`00_contexto/_indice_contexto.md`:** índice del logo y de las 8 imágenes (logo, Instagram, 3 fotos de producto, Taschen, Villegas, Recyclivre), con la descripción de cada una.
5. **`stack_tecnico.md`** (YayMail no instalado), **brief** (21.735 productos, paleta "propuesta") y **`carrito_abandonado.md`** (los 3 correos activos).
6. **`02_branding/01_direccion_arte.md`** (tokens v0) y **`02_brief_logo.md`**.
7. **`04_reportes_laura/mensaje_imagenes.md`** con el mensaje de arriba.
8. **`reglas_trabajo.md`:** nueva regla, "toda data analizada se guarda en `00_contexto/datos/`".
9. Reemplazar los archivos de `01_gestion` que se movieron a `_archivo` y corregir el reporte de estado y ambos `_CONTEXT.md`.

---

## 6. Lo que necesito de ti

1. **Guardar los 3 pantallazos como archivos en `00_contexto/capturas/`.** Las imágenes que pegas en el chat no existen como archivos para mí. Igual voy a transcribir sus datos.
2. **Confirmar que "las excluimos" se refiere a las campañas de email y retención.** Si no me dices otra cosa, lo registro así.
3. **¿Te sirven los límites del logo** (4 versiones y 2 rondas de ajustes)?
4. **Licencia de YayMail:** la versión gratuita podría no cubrir los correos de otros plugins, como las tarjetas regalo. ¿Quién pagaría la versión Pro si hace falta?
5. **Captura del editor del correo 3** para ver qué cupón manda.
6. **WooCommerce Analytics en vista "Por mes"** para 2025 y ene–sep 2026 (sirve el CSV descargado). Es lo que permite separar estacionalidad y baneo.
7. **¿Los 21.735 productos incluyen los agotados?** ¿Cuántos hay en stock?

Cuando lo tengas, cambia a Act mode (**"toggle to Act mode"**) y hago todo lo de la sección 5.

---
