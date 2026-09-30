# Conceptualización, Simbología y Construcción del Logo — Incunabula

**Fase:** 2 (Crecimiento y Profesionalización)
**Fecha:** 29 Sep 2026
**Estatus:** Guía Maestra para Illustrator
**Objetivo:** Documentar la justificación psicológica, semiótica, tipográfica y matemática del rediseño del logo. Este documento es la fuente de verdad para evitar pérdida de contexto y garantizar una transición de marca exitosa.

---

## 1. El Principio de Continuidad (Por qué no podemos usar solo una "I")

Cuando una marca que ya tiene validación de mercado cambia su logo radicalmente, se rompe un puente cognitivo con su audiencia. 

* **El problema de la abstracción total (La letra "I"):** Cambiar de la figura humana de un vendedor a un bloque geométrico o una letra desorienta al público. El usuario entra, no reconoce la marca, desconfía (especialmente en comercio electrónico de usados) y abandona.
* **La solución (La Síntesis Figurativa):** El rediseño debe ser una **evolución, no una revolución**. Pasamos de una ilustración detallada (con cara, arrugas y textura) a un **símbolo abstracto, plano y geométrico del MISMO vendedor**. Mantenemos el ancla psicológica (el hombre que carga libros), pero la elevamos a los estándares del diseño profesional. El público notará que la marca "maduró", pero seguirá sintiendo que es *su* librería de siempre.

---

## 2. Anatomía Psicológica y Sensible del Símbolo

Un logo no es un adorno; es un atajo emocional hacia el cerebro del consumidor.

### A. La Figura Humana (El Vendedor / Colporteur)
* **Conexión Empática:** Representa el esfuerzo humano. Incunabula no es un algoritmo gigante (como Amazon); es gente real que rescata, limpia y envía libros. La figura humana caminando transmite trabajo, servicio y curaduría artesanal.
* **El Movimiento (La Zancada):** El cuerpo inclinado hacia adelante y las piernas separadas rompen la estática de una biblioteca. Simbolizan el manifiesto de la marca: *Hacer circular el conocimiento*. 

### B. El Fardo (El Peso del Conocimiento)
* Un bloque pesado y geométrico sobre la espalda. Representa el inventario, los 21.000 libros disponibles, la promesa de valor. Al ser más grande que el torso de la figura, magnifica la importancia del libro por encima del individuo.

### C. La Ley de Cierre (Psicología Gestalt y Espacio Negativo)
* La cuerda que sostiene la mochila **no se dibuja**. Es un espacio en blanco (espacio negativo) que atraviesa la masa negra. 
* **Por qué funciona:** El cerebro humano odia las figuras incompletas. Cuando el ojo ve el espacio negativo, el cerebro *dibuja mentalmente* la cuerda para darle sentido a la imagen. Al hacer trabajar al cerebro del usuario por una fracción de segundo, se genera una micro-recompensa dopamínica. Esto crea un logo **memorable y de altísima retentiva**.

---

## 3. Tipografía: El Vehículo Verbal

La tipografía debe comunicar autoridad (es una librería, vendemos cultura) pero estar optimizada matemáticamente para las pantallas modernas (Retina, OLED) donde el contraste y el *hinting* son vitales.

### Opción 1: Gratuita y de Libre Uso (Recomendada)
**Tipografía:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (Google Fonts - OFL)
* **¿Por qué?** Es una tipografía serif *Old Style* (inspirada en la imprenta temprana) pero diseñada específicamente para la era digital como una fuente variable (Variable Font).
* **Ventaja Técnica:** Tiene un eje óptico (`opsz`). Esto significa que puedes usar su versión "Display" (detallada y elegante) para tamaños grandes, y su versión de texto para tamaños minúsculos, manteniendo la legibilidad intacta en pantallas pequeñas de móviles sin que los serifas (las patitas) desaparezcan.
* **El tono:** Tiene cierta "suavidad" e imperfección humana que evoca los tipos móviles de Gutenberg de los incunables reales, sin verse vieja o anticuada.

### Opción 2: Comercial / Premium (Licenciada)
**Tipografía:** [GT Sectra](https://www.grillitype.com/typeface/gt-sectra) (Grilli Type)
* **¿Por qué?** Es una obra maestra del diseño suizo contemporáneo. Combina la caligrafía histórica (la pluma de punta ancha) con la nitidez de un bisturí (cortes rectos y brutales).
* **Ventaja:** Comunica exactamente la dualidad de Incunabula: El peso de la historia (libros usados/antiguos) procesado a través de una lente hiper-moderna (tecnología, e-commerce rápido). Es extremadamente exclusiva y elevaría el valor percibido de la marca al nivel de editoriales globales de lujo.

---

## 4. Guía de Construcción y Ejecución en Illustrator

Para asegurar que el logo sea **impermeable** (que soporte cualquier reducción, impresión defectuosa o pixelación sin perder su identidad), debes construirlo bajo estas reglas matemáticas:

### 4.1. Setup del Lienzo y la Grilla (Sistema de 8pt)
Toda interfaz moderna (Apple, Google Material) se diseña en múltiplos de 8. El logo debe encajar perfectamente ahí.
1. Abre Illustrator: Crea un lienzo de `800px x 800px`.
2. Modo de Color: `RGB` (Perfil: sRGB IEC61966-2.1 para fidelidad web).
3. Efectos de rasterizado: `300 ppi` (Para exportaciones nítidas).
4. Configura la cuadrícula (`Edición > Preferencias > Guías y cuadrícula`):
   * Cuadrícula cada: `80px`
   * Subdivisiones: `10`
   * Esto te dará un módulo base (`1X`) de **8px por 8px**.
5. Activa `Ajustar a cuadrícula` (Snap to Grid).

### 4.2. Construcción Vectorial del Símbolo
* **Regla del Pixel Perfecto:** Los puntos de ancla (anchor points) principales deben caer exactamente en las intersecciones de la cuadrícula de 8px. Esto asegura que en pantallas de baja resolución, los bordes rectos no se difuminen (anti-aliasing borroso).
* **Ausencia total de trazos (Strokes):** El símbolo debe construirse ÚNICAMENTE con Formas Compuestas (Rellenos / Fills). Usa el *Buscatrazos (Pathfinder)* para perforar la línea blanca (la cuerda) a través de la masa negra del vendedor. **Nunca uses un trazo blanco por encima de la figura**, recorta el espacio. Así funcionará igual si lo aplicas en foil dorado o estampado térmico.

### 4.3. Tamaños Críticos y Optimizaciones
Deberás exportar el archivo maestro (SVG) y probar visualmente estos tamaños en un monitor:
1. **El Favicon (16px / 32px):** 
   * A 16px, la línea del espacio negativo (la cuerda) tenderá a rellenarse por los píxeles adyacentes. 
   * *Prueba:* Reduce el logo a 16px. Si la cuerda desaparece, necesitas hacer el corte ligeramente más ancho en la construcción maestra.
2. **El Header Móvil (Altura 32px):**
   * Es el tamaño más visto. Aquí el símbolo y la tipografía (wordmark) compiten por espacio.
   * La relación Símbolo:Tipografía ideal para horizontal debe ser 1:1.618 (Proporción Áurea) respecto al ancho.
3. **Pantallas Retina (Densidad 2x / 3x):**
   * El formato SVG nativo soluciona esto, pero asegúrate de que al exportar desde Illustrator (`Archivo > Exportar > Exportar para pantallas`), marques "Minificar" y "Decimales: 2" en las opciones SVG. Evita archivos pesados que ralenticen el e-commerce.

---

## Próximos Pasos (Flujo de Trabajo)
1. **Abre Illustrator** con la grilla de 8pt.
2. Dibuja el vendedor usando rectángulos y un círculo (basado en el boceto geométrico que revisamos).
3. Escribe "INCUNABULA" con Fraunces (o la fuente elegida) al lado derecho.
4. Ajusta el espaciado (Tracking / Kerning). La palabra es larga, así que el tracking debe ser ajustado ópticamente (normalmente un +20 a +50 en logos de este estilo para darle respiración premium).
5. Exporta a SVG y envíalo para revisión final de legibilidad en entorno web.
