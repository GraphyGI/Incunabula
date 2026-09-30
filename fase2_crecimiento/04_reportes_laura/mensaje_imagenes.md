# Mensaje para Laura: Optimización de Imágenes

Hola Laura,

Revisando a fondo el tema de las imágenes de los libros (son 6.457 activos actualmente), tenemos el siguiente plan de acción:

**1. No haremos edición foto a foto (ni a mano ni con IA para borrar fondos).**
Dado el volumen de libros usados, intentar unificar fondos usando IA generaría errores (cortes raros en las tapas) y editar a mano tomaría meses. 

**2. Solución desde el diseño (Elementor)**
Lo que haremos es unificar visualmente todo desde el marco. En el rediseño, las tarjetas de producto tendrán todas exactamente la misma proporción (2:3, formato libro clásico), y si la foto original tiene un fondo grisáceo o irregular, el marco que la envuelve le dará el aire "editorial" ordenado que buscamos. (Como hace *Recyclivre* o los catálogos antiguos).

**3. Solución técnica (LiteSpeed / QUIC.cloud)**
Para que la web cargue rápido, en lugar de pasarte las fotos para que las comprimas, utilizaremos una función que ya tienes instalada (LiteSpeed Cache con QUIC.cloud) que se encargará de comprimir y pasar a formato WebP las miles de imágenes automáticamente.

¿Estás de acuerdo con este enfoque? Así ahorramos muchísimas horas operativas y logramos el estilo ordenado que queremos.
