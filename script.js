document.addEventListener('DOMContentLoaded', () => {

  // === SCROLL PROGRESS BAR & NAV ===
  const progressBar = document.getElementById('progressBar');
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (progressBar) progressBar.style.width = scrollPercent + '%';

    if (nav) {
      if (scrollTop > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  });

  // === REVEAL ON SCROLL ===
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => revealObserver.observe(el));

  // === WHATSAPP REDIRECT LOGIC ===
  const waButton = document.getElementById('wa-send');
  const waTextarea = document.getElementById('wa-message');
  
  if (waButton && waTextarea) {
    waButton.addEventListener('click', () => {
      const message = waTextarea.value.trim();
      const finalMessage = message ? message : "Hola Jordan. Revisamos la propuesta para Incunabula y nos gustaría agendar una reunión para el inicio.";
      const encodedMessage = encodeURIComponent(finalMessage);
      const waUrl = `https://wa.me/573172464305?text=${encodedMessage}`;
      window.open(waUrl, '_blank');
    });
  }

  // === "MORE INFO" BUTTON SCROLL & PREFILL ===
  const btnMoreInfo = document.getElementById('btn-more-info');
  if (btnMoreInfo && waTextarea) {
    btnMoreInfo.addEventListener('click', () => {
      waTextarea.value = "Hola Jordan, me gustaría recibir más información sobre los servicios adicionales (Branding, SEO, etc.) que mencionas en la propuesta.";
      document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
      waTextarea.focus();
    });
  }

});
