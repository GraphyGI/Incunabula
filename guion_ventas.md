# Guion de Ventas y Manejo de Objeciones - Incunabula.co

**Objetivo:** Presentar la propuesta de Estabilización ($3.5M) con estricto apego técnico para superar cualquier auditoría externa y proyectar máxima autoridad.

---

## 1. Apertura (El Encuadre de Autoridad)

*"Hola Laura. Terminamos la auditoría forense del sitio y encontramos la raíz exacta de por qué los correos no llegan y por qué el panel se rompe al intentar ver estadísticas. Tienen un volumen de ventas muy sólido ($4.7M), pero la plataforma está operando sobre una desincronización crítica de dependencias frente a las exigencias del servidor, lo que asfixia las ventas en la sombra. He preparado un plan de rescate enfocado 100% en estabilizar la infraestructura para proteger su facturación, sin meterles costos de rediseño por ahora. Te envío el enlace a la propuesta confidencial."*

---

## 2. Manejo de Objeciones y Preguntas Estratégicas

### ❓ La Pregunta Trampa (El Auditor): "¿Cuáles son los plugins con conflicto? ¿Van a bajar la versión de PHP del servidor para arreglarlo?"
**Respuesta:** *"Excelente pregunta, Laura. No, bajo ninguna circunstancia vamos a hacer un downgrade de PHP; bajar a PHP 8.0 o 7.4 es una práctica inaceptable que introduciría graves vulnerabilidades de seguridad. El conflicto radica en que su constructor actual (Elementor 3.17.3) está severamente desactualizado y colisiona junto con otros componentes Legacy (como módulos de Jetpack) al correr en PHP 8.2. Nuestra solución no es bajar la exigencia del servidor, sino actualizar y refactorizar su código y plugins conflictivos para que corran nativamente de forma moderna y segura."*

### ❓ Pregunta 2: "¿Qué garantía tenemos de que no se vuelva a dañar la página a la semana de entregada?"
**Respuesta:** *"Entiendo tu preocupación. Por eso, nuestro programa incluye un **SLA de Garantía de Estabilización (Hypercare) de 30 días**. Durante el primer mes posterior al lanzamiento, mi equipo provee soporte técnico exclusivo y gratuito para resolver cualquier regresión o falla que se presente específicamente en los puntos que intervenimos (correos, pasarelas, compatibilidad core). La única excepción es si una actualización automática de terceros rompe algo nuevo ajeno a nuestra intervención, pero su inversión en los arreglos está totalmente garantizada."*

### ❓ Pregunta 3: "Dices que tenemos 'Ceguera de Datos', ¿este plan incluye medir qué compran los clientes o el ROI?"
**Respuesta:** *"Quiero ser muy transparente con el alcance, Laura. Este paquete de emergencia incluye la **Instalación de Telemetría Base de Tráfico**, lo que significa que configuraremos Google Analytics 4 para que dejen de estar ciegos respecto a de dónde vienen las visitas y qué páginas miran. Sin embargo, configurar el rastreo financiero completo (E-commerce Tracking avanzado para medir Add to Cart y ROI por producto) requiere un proyecto de mapeo de datos vía Google Tag Manager que excede el tiempo de este rescate. Primero tapamos los huecos del barco, y luego (en una siguiente etapa) instalamos los radares avanzados."*

### ❓ Pregunta 4: "El hosting nos dijo que el problema de los correos es de WordPress."
**Respuesta:** *"El hosting tiene razón a medias. Su sitio usa la función nativa genérica de PHP para correos, la cual Hostinger bloquea rutinariamente por protocolos de seguridad anti-spam. Nuestro rescate aísla la capa de envío e implementa autenticación directa (SMTP dedicado/MTA), garantizando la entrega segura y evitando las listas negras de Gmail y Hotmail."*
