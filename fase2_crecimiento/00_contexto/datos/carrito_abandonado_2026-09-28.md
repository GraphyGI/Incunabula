# Estado de Correos de Carrito Abandonado
**Fuente:** Capturas y chat de WhatsApp con Laura (28 Sep 2026)
**Plugin:** WooCommerce Cart Abandonment Recovery (Free)

## Estado Actual
- **Correo 1 (1 hora):** Activo. Recordatorio simple.
- **Correo 2 (24 horas):** Activo. Sentido de urgencia.
- **Correo 3 (3 días):** Activo. Incluye cupón de 10% automático generado por el plugin.

## Contenido del Correo 3 (Confirmado)
```text
Hola {{customer.firstname}},

Hace unos días dejaste algunos libros excelentes en tu carrito.

Para animarte a dar el paso final, hemos creado un cupón exclusivo del 10% de descuento para ti: {{cart.coupon_code}}

Haz clic en el siguiente enlace y el descuento se aplicará automáticamente a tu compra: {{cart.checkout_url}}

¡Apresúrate! Esta es una oferta única que expirará en 24 horas.

Si tuviste algún problema técnico o necesitas ayuda, simplemente responde a este correo.

Un saludo, El equipo de Incunabula.

{{cart.unsubscribe}}
```

## Limitaciones (Versión Gratuita)
- Las métricas de recuperación mostradas en el panel a nivel de correo individual (tasa de apertura, tasa de clics) están borrosas/bloqueadas, son función Pro. 
- Solo se puede ver la recuperación global.

## Riesgo de Acumulación (Pendiente Verificación)
Actualmente Incunabula usa `Simple Discount Rules` para aplicar un 15% automático en compras mayores a $150.000. Si un usuario con un carrito > $150.000 recibe el Correo 3, es posible que el 10% de `{{cart.coupon_code}}` se sume al 15% automático, resultando en un 25% de descuento. Hay que revisar si Smart Coupons / Simple Discount Rules permiten acumulación.
