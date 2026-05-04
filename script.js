/**
 * Lógica de interacción para la propuesta comercial.
 * Desarrollado con Vanilla JS para rendimiento inmediato.
 */

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initAccordions();
    initModals();
});

// ==========================================
// 1. Lógica de Pestañas (Paquetes)
// ==========================================
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (!tabBtns.length) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Eliminar estado activo de todas las pestañas y contenidos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Activar el botón clicado y su contenido correspondiente
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ==========================================
// 2. Lógica de Acordeones (Detalles Profundos)
// ==========================================
function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        const trigger = acc.querySelector('.accordion-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', () => {
            const isActive = acc.classList.contains('active');
            
            // Opcional: Cerrar los demás acordeones para mantener la vista limpia
            // accordions.forEach(a => a.classList.remove('active'));
            
            // Alternar estado del acordeón actual
            if (!isActive) {
                acc.classList.add('active');
            } else {
                acc.classList.remove('active');
            }
        });
    });
}

// ==========================================
// 3. Lógica de Ventanas Modales (Pain Points)
// ==========================================
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    }
}

function closeModals() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(m => {
        m.classList.remove('active');
    });
    document.body.style.overflow = ''; // Restaurar scroll
}

function initModals() {
    // Cerrar al hacer clic en el botón X, ya se hace mediante el onclick="" en el HTML
    // Cerrar al hacer clic fuera de la modal (en el overlay oscuro)
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModals();
        }
    });

    // Cerrar al presionar la tecla Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModals();
        }
    });
}
