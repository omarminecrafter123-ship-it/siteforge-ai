document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('nav__links--open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('nav__links--open');
      });
    });
  }

  // Header scroll effect
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      nav.style.padding = '5px 0';
    } else {
      nav.style.boxShadow = 'none';
      nav.style.padding = '0';
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 80; // height of fixed nav
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Simple Form Submission (Frontend only for now)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Form submitted:', data);
      
      // Show success message
      const originalButtonText = contactForm.querySelector('button').innerHTML;
      contactForm.querySelector('button').innerHTML = 'Sending...';
      contactForm.querySelector('button').disabled = true;

      setTimeout(() => {
        contactForm.innerHTML = `
          <div style="text-align: center; padding: 40px 0;">
            <div style="font-size: 3rem; margin-bottom: 20px;">✅</div>
            <h3 style="color: #fff; margin-bottom: 10px;">Request Received!</h3>
            <p style="color: #94a3b8;">Thanks for reaching out, ${data.name}. We'll get back to you at ${data.email} within 24 hours.</p>
            <button onclick="location.reload()" class="btn btn--outline" style="margin-top: 24px;">Send Another Request</button>
          </div>
        `;
      }, 1500);
    });
  }
});
