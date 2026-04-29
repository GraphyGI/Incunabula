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
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));

  // === ACTIVE NAV LINK ===
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)'); // Exclude the CTA button from standard active state

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

  sections.forEach(section => navObserver.observe(section));

  // === WHATSAPP REDIRECT LOGIC ===
  const waButton = document.getElementById('wa-send');
  const waTextarea = document.getElementById('wa-message');
  
  if (waButton && waTextarea) {
    waButton.addEventListener('click', () => {
      const message = waTextarea.value.trim();
      
      // If the user didn't type anything, use a default fallback
      const finalMessage = message ? message : "Hola Jordan. Me interesa hablar sobre la propuesta para Incunabula.";
      
      // Encode the message for the URL
      const encodedMessage = encodeURIComponent(finalMessage);
      
      // WhatsApp API URL (Your number: +57 317 246 4305)
      const waUrl = `https://wa.me/573172464305?text=${encodedMessage}`;
      
      // Open in new tab
      window.open(waUrl, '_blank');
    });
  }

});
