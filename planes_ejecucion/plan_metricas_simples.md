# Plan de Medición de Métricas (Enfoque Minimalista)

El objetivo de este plan es obtener los datos reales de velocidad y experiencia de usuario (Core Web Vitals) de la tienda sin instalar plugins pesados ni hacer configuraciones técnicas complejas.

## 1. Las Únicas 3 Métricas que Importan (Core Web Vitals)
Google clasifica tu tienda basándose en estas tres métricas. Si estas están bien, tu sitio es rápido:
1. **LCP (Carga):** Cuánto tarda en aparecer la imagen o texto más grande (Ej. El banner principal). *Meta: Menos de 2.5 segundos.*
2. **CLS (Estabilidad):** Cuánto "saltan" las cosas en la pantalla mientras carga. *Meta: Menos de 0.1.*
3. **INP (Respuesta):** Cuánto tarda el sitio en reaccionar cuando el usuario hace clic o toca un botón. *Meta: Menos de 200 milisegundos.*

---

## 2. Herramientas a Utilizar (Sin código)

### Método A: El Laboratorio (Para Pruebas Inmediatas)
Útil para medir el "antes y después" de hacer un cambio en la página.
- **Herramienta:** [PageSpeed Insights](https://pagespeed.web.dev/) (Página web gratuita de Google).
- **Cómo usarlo:** Pegas la URL de tu Home y la URL de un producto. Te dará una radiografía inmediata de qué está lento.

### Método B: El Campo (Usuarios Reales en el Tiempo)
Útil para saber qué están experimentando tus clientes de verdad en sus celulares.
- **Herramienta:** **Google Search Console** (GSC).
- **Cómo usarlo:** Si ya tienes verificado tu dominio en GSC, simplemente ve a la pestaña "Métricas web principales" (Core Web Vitals) en el menú izquierdo. Google recopilará automáticamente los datos de tus usuarios reales de Chrome durante un periodo de 28 días y te dirá qué URLs están fallando.
- **Ventaja:** Cero impacto en el rendimiento de tu servidor. Toda la medición la hace el navegador de tus clientes.

---

## 3. Flujo de Trabajo Simple

1. **Semana 1:** Lanza el sitio a producción. No hagas configuraciones extremas de caché todavía (solo las que ya hicimos en Fase 1).
2. **Día 1 a Día 28:** Deja que Google Search Console acumule datos reales de tus compradores.
3. **Semana 4:** Revisa el reporte de "Métricas web principales" en Search Console.
4. **Acción:** Solo si Google indica que tus URLs son "Pobres" (Rojas) o "Necesitan mejora" (Amarillas), aplicamos las optimizaciones avanzadas de LiteSpeed (Deferred JS, Critical CSS, etc.) para resolver el problema específico.

## 4. ¿Y Google Analytics (GA4)?
Si necesitas ver de dónde vienen tus clientes o qué botones presionan (comportamiento de usuario), la forma más segura y ligera de conectarlo es usando el plugin oficial de Google llamado **Site Kit by Google**. Lo instalas, inicias sesión con tu cuenta de Google y él se encarga de inyectar el código de GA4 sin necesidad de programar nada.
