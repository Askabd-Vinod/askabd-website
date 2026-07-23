// AskABD Technologies - Main JavaScript

// Highlight active nav link based on current page
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// Make service/solution/industry cards clickable -> contact page
document.addEventListener('click', function(e) {
  const card = e.target.closest('.solution-card, .srv-card, .ind-card, .fwd, .proc-step');
  if (card) { window.location.href = 'contact.html'; }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    }
  });
});

// Navbar Background on Scroll
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.style.background = 'rgba(10, 14, 39, 0.98)';
    nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  } else {
    nav.style.background = 'rgba(10, 14, 39, 0.95)';
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// ===== Scroll Reveal Animations (all pages, re-triggers on every scroll) =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.revealDelay || 0;
      entry.target.style.transitionDelay = delay + 'ms';
      entry.target.classList.add('revealed');
    } else {
      // Reset so it animates again next time it enters the viewport
      entry.target.style.transitionDelay = '0ms';
      entry.target.classList.remove('revealed');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

// Elements to reveal across all pages (homepage + sub-pages)
const revealSelectors = [
  '.solution-card', '.industry-card', '.ind-card', '.srv-card',
  '.proc-step', '.fwd', '.stat', '.help-item', '.opt-item',
  '.tech-group', '.clarity-col', '.optimize-col',
  '.content-main', '.content-sidebar', '.sidebar-card',
  '.contact-card', '.contact-social', '.contact-form-wrapper',
  '.legal-content', '.highlight-box', '.section-head-row',
  '.section-head', '.losing-left', '.losing-right', '.ready-inner'
];

document.querySelectorAll(revealSelectors.join(',')).forEach((el) => {
  el.classList.add('reveal-on-scroll');
  // Stagger items within the same grid for a cascade effect
  const siblingIndex = Array.from(el.parentElement.children).indexOf(el);
  el.dataset.revealDelay = (siblingIndex % 6) * 80;
  revealObserver.observe(el);
});

// Inject reveal animation styles
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal-on-scroll {
    opacity: 0;
    transform: translateY(36px);
    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
  }
  .reveal-on-scroll.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .reveal-on-scroll { opacity: 1 !important; transform: none !important; transition: none !important; }
  }
`;
document.head.appendChild(revealStyle);

// Button Click Handlers
document.querySelectorAll('.btn-primary, .btn-outline').forEach(button => {
  button.addEventListener('click', function(e) {
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255,255,255,0.5)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(20);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c👋 Welcome to AskABD Technologies!', 'color: #4A90E2; font-size: 16px; font-weight: bold;');
console.log('%cTransforming Business Challenges Into Digital Solutions', 'color: #8B5CF6; font-size: 12px;');
console.log('%cInterested in joining our team? Email: hello@askabd.com', 'color: #10B981; font-size: 12px;');
