// SEO & Performance Enhancements
// Adds performance hints and security attributes
(function() {
  var path = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

  // 1. Add explicit width/height to logo images to prevent CLS
  document.querySelectorAll('.logo img').forEach(function(img) {
    if (!img.hasAttribute('width')) img.setAttribute('width', '66');
    if (!img.hasAttribute('height')) img.setAttribute('height', '66');
  });
  document.querySelectorAll('.footer-brand img').forEach(function(img) {
    if (!img.hasAttribute('width')) img.setAttribute('width', '46');
    if (!img.hasAttribute('height')) img.setAttribute('height', '46');
  });

  // 2. Add rel="noopener" to external links for security
  document.querySelectorAll('a[target="_blank"]').forEach(function(link) {
    if (!link.hasAttribute('rel') || link.getAttribute('rel').indexOf('noopener') === -1) {
      var rel = link.getAttribute('rel') || '';
      link.setAttribute('rel', (rel + ' noopener noreferrer').trim());
    }
  });

  // 3. Preconnect to formsubmit if contact page
  if (path === 'contact') {
    var preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://formsubmit.co';
    document.head.appendChild(preconnect);
  }

  // 4. Add meta theme-color for mobile browsers
  if (!document.querySelector('meta[name="theme-color"]')) {
    var theme = document.createElement('meta');
    theme.name = 'theme-color';
    theme.content = '#0A0E27';
    document.head.appendChild(theme);
  }
})();
