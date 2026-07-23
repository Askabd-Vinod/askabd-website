// Enhanced E-Commerce Modal with Consistent Site Animations
// ADD THIS TO THE END OF services.html (replace existing modal script)

<script>
(function() {
  const modal = document.getElementById('ecommerce-modal');
  const ecommerceCard = document.querySelector('[data-service="ecommerce"]');
  
  if (!modal || !ecommerceCard) return;
  
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');

  // Open modal with animation
  ecommerceCard.addEventListener('click', function(e) {
    e.stopPropagation();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Trigger scroll-reveal animations inside modal
    setTimeout(() => {
      initModalAnimations();
    }, 100);
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset animations for next open
    resetModalAnimations();
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Overlay click
  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }

  // Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Initialize modal animations using same system as main site
  function initModalAnimations() {
    const modalContainer = modal.querySelector('.modal-container');
    if (!modalContainer) return;

    // Use the SAME IntersectionObserver settings as main.js
    const modalRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.revealDelay || 0;
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    // Select elements to animate with SAME classes
    const modalElements = modalContainer.querySelectorAll(
      '.stat-simple, .problem-item, .solution-item, .included-item, .trust-badge'
    );

    // Add reveal-on-scroll class and stagger delays
    modalElements.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      // Stagger with same timing as main site (80ms per item)
      el.dataset.revealDelay = (index % 6) * 80;
      modalRevealObserver.observe(el);
    });

    // Animate sections with longer delays
    const sections = modalContainer.querySelectorAll('.simple-section, .value-banner, .cta-box');
    sections.forEach((section, index) => {
      section.classList.add('reveal-on-scroll');
      section.dataset.revealDelay = index * 120;
      modalRevealObserver.observe(section);
    });
  }

  // Reset animations
  function resetModalAnimations() {
    const allAnimated = modal.querySelectorAll('.reveal-on-scroll.revealed');
    allAnimated.forEach(el => {
      el.classList.remove('revealed');
      el.style.transitionDelay = '0ms';
    });
  }
})();
</script>
