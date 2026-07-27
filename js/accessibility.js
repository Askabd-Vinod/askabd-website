// Accessibility Enhancements
// Injects skip-to-main link, ARIA attributes, and focus management
(function() {
  // Add skip-to-main link
  var skip = document.createElement('a');
  skip.href = '#main-content';
  skip.className = 'skip-to-main';
  skip.textContent = 'Skip to main content';
  document.body.insertBefore(skip, document.body.firstChild);

  // Mark main content area
  var pageHeader = document.querySelector('.page-header');
  var heroSection = document.querySelector('.hero-section');
  var firstContent = document.querySelector('section:nth-of-type(1)');
  var mainTarget = pageHeader || heroSection || firstContent;
  if (mainTarget) {
    mainTarget.id = mainTarget.id || 'main-content';
  }

  // Add landmark roles
  var nav = document.querySelector('nav');
  if (nav) {
    nav.setAttribute('aria-label', 'Main navigation');
    nav.setAttribute('role', 'navigation');
  }

  var footer = document.querySelector('footer');
  if (footer) footer.setAttribute('role', 'contentinfo');

  // Add aria-label to hamburger button
  var hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.setAttribute('aria-label', 'Toggle mobile menu');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  // Update hamburger aria-expanded on toggle
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Add loading="lazy" to images below the fold
  document.querySelectorAll('img').forEach(function(img, i) {
    if (i > 0 && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });

  // Add ARIA dialog attributes to modals
  document.querySelectorAll('.service-modal').forEach(function(modal) {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');
  });

  // Update modal aria-hidden when opened/closed
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      if (m.type === 'attributes' && m.attributeName === 'style') {
        var target = m.target;
        if (target.classList && target.classList.contains('service-modal')) {
          var isVisible = target.style.display === 'flex';
          target.setAttribute('aria-hidden', String(!isVisible));
        }
      }
    });
  });
  document.querySelectorAll('.service-modal').forEach(function(modal) {
    observer.observe(modal, { attributes: true, attributeFilter: ['style'] });
  });

  // Inject accessibility CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/accessibility.css?v=1';
  document.head.appendChild(link);

  // Inject responsive fixes CSS
  var respLink = document.createElement('link');
  respLink.rel = 'stylesheet';
  respLink.href = 'css/responsive-fixes.css?v=1';
  document.head.appendChild(respLink);
})();
