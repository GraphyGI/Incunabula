import re

with open('h:\\Mi unidad\\Clientes\\incunabula\\Proyecto\\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update pagination from / 08 to / 09
content = re.sub(r'/ 08</span>', r'/ 09</span>', content)

# 2. Prepare new slide HTML
new_slide = '''
    <!-- SLIDE PERFORMANCE -->
    <section class="slide" id="slide-5">
        <div class="slide-inner">
            <h3>Rendimiento y Velocidad</h3>
            <h2>El impacto en los tiempos de carga</h2>
            <div class="divider"></div>
            <p style="text-align:center; color:var(--color-text-muted); margin-top:-0.5rem; margin-bottom: 2rem;">Comparativa de rendimiento antes y después de la optimización.</p>
            
            <div class="ba-grid">
                <div class="ba-col before">
                    <h4>❌ Rendimiento Anterior</h4>
                    <div class="ba-item">🔴 Tiempo de carga: [Dato Antes]</div>
                    <div class="ba-item">🔴 TTFB: [Dato Antes]</div>
                    <div class="ba-item">🔴 Calificación PageSpeed: [Dato Antes]</div>
                    <div class="ba-item">🔴 [Otra métrica]: [Dato Antes]</div>
                </div>
                <div class="ba-arrow">→</div>
                <div class="ba-col after">
                    <h4>✅ Rendimiento Actual</h4>
                    <div class="ba-item">🟢 Tiempo de carga: [Dato Después]</div>
                    <div class="ba-item">🟢 TTFB: [Dato Después]</div>
                    <div class="ba-item">🟢 Calificación PageSpeed: [Dato Después]</div>
                    <div class="ba-item">🟢 [Otra métrica]: [Dato Después]</div>
                </div>
            </div>
            
            <div style="margin-top: 3rem; background: var(--color-bg-alt); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--color-border);">
                <p style="margin:0; font-size: 0.95rem; color: var(--color-text); text-align:center;">
                    <strong>Nota Técnica:</strong> [Aquí agregaremos la explicación sobre el límite técnico actual del tema Bookory vs la mejora lograda tras eliminar los cuellos de botella].
                </p>
            </div>
        </div>
        <span class="slide-number">06 / 09</span>
    </section>
'''

# 3. Find the end of slide 4 (which was id="slide-4" but it's the 5th slide)
# We need to insert our new slide before slide-5
parts = content.split('id="slide-5"')

if len(parts) == 2:
    # re-number subsequent slides
    rest = parts[1]
    rest = rest.replace('id="slide-5"', 'id="slide-6"') # Wait, this won't work well
    # Let's use regex to bump the ids.
