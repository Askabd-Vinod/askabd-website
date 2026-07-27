// Products Page Renderer
document.addEventListener('DOMContentLoaded', function() {
  var grid = document.getElementById('products-grid');
  var modalsContainer = document.getElementById('product-modals');
  if (!grid || !modalsContainer || typeof ASKABD_PRODUCTS === 'undefined') return;

  // Render product cards
  grid.innerHTML = ASKABD_PRODUCTS.map(function(p) {
    var statusClass = p.status === 'Completed' ? 'status-done' :
                      p.status === 'In Progress' ? 'status-progress' : 'status-planned';
    return '<div class="product-card" data-product="' + p.id + '" style="--accent:' + p.accent + '">' +
      '<div class="product-card-header">' +
        '<span class="product-icon">' + p.icon + '</span>' +
        '<span class="product-status ' + statusClass + '">' + p.status + '</span>' +
      '</div>' +
      '<h3>' + p.name + '</h3>' +
      '<p>' + p.overview + '</p>' +
      '<div class="product-tech">' + p.techStack.slice(0, 4).map(function(t) {
        return '<span class="tech-tag">' + t + '</span>';
      }).join('') + '</div>' +
      '<div class="product-card-footer">View Details →</div>' +
    '</div>';
  }).join('');

  // Render modals
  modalsContainer.innerHTML = ASKABD_PRODUCTS.map(function(p) {
    return '<div id="product-' + p.id + '-modal" class="service-modal"></div>';
  }).join('');

  // Populate modal content
  ASKABD_PRODUCTS.forEach(function(p) {
    var modal = document.getElementById('product-' + p.id + '-modal');
    if (!modal) return;
    var capsHtml = p.capabilities.map(function(c) {
      return '<li>' + c + '</li>';
    }).join('');
    var techHtml = p.techStack.map(function(t) {
      return '<span class="tech-tag">' + t + '</span>';
    }).join('');
    var archHtml = p.architecture.map(function(a) {
      return '<li>' + a + '</li>';
    }).join('');
    var roadmapHtml = p.roadmap.map(function(r) {
      var rc = r.status === 'Completed' ? 'status-done' :
               r.status === 'In Progress' ? 'status-progress' : 'status-planned';
      return '<div class="roadmap-item"><span class="roadmap-phase">' + r.phase + '</span>' +
        '<span class="roadmap-title">' + r.title + '</span>' +
        '<span class="product-status ' + rc + '">' + r.status + '</span></div>';
    }).join('');
    var relSrv = p.relatedServices.map(function(s) {
      return '<span class="tech-tag">' + s + '</span>';
    }).join('');
    var relInd = p.relatedIndustries.map(function(i) {
      return '<span class="tech-tag">' + i + '</span>';
    }).join('');

    modal.innerHTML = '<div class="modal-content">' +
      '<button class="modal-close">&times;</button>' +
      '<div class="modal-hero" style="background: linear-gradient(135deg, ' + p.accent + '33 0%, ' + p.accent + '11 100%);">' +
        '<span class="modal-badge">' + p.icon + ' ' + p.name + '</span>' +
        '<h2>' + p.overview + '</h2>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h3>Business Problem</h3>' +
        '<p style="color:#94A3B8;font-size:1.05rem;line-height:1.7;">' + p.problem + '</p>' +
        '<h3 style="margin-top:2rem;">Target Users</h3>' +
        '<p style="color:#94A3B8;">' + p.targetUsers + '</p>' +
      '</div>' +
      '<div class="modal-section modal-section-alt">' +
        '<h3>Key Capabilities</h3>' +
        '<ul class="modal-list">' + capsHtml + '</ul>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h3>Technology Stack</h3>' +
        '<div class="tech-tags-wrap">' + techHtml + '</div>' +
        '<h3 style="margin-top:2rem;">Architecture Highlights</h3>' +
        '<ul class="modal-list">' + archHtml + '</ul>' +
      '</div>' +
      '<div class="modal-section modal-section-alt">' +
        '<h3>Product Roadmap</h3>' +
        '<div class="roadmap-list">' + roadmapHtml + '</div>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h3>Related Services</h3>' +
        '<div class="tech-tags-wrap">' + relSrv + '</div>' +
        '<h3 style="margin-top:1.5rem;">Related Industries</h3>' +
        '<div class="tech-tags-wrap">' + relInd + '</div>' +
      '</div>' +
      '<div class="modal-cta">' +
        '<h3>Need Similar Platform Capabilities?</h3>' +
        '<p>We can build this for your organization. Let\'s discuss.</p>' +
        '<a href="contact.html"><button class="btn-primary btn-large">Get Free Consultation →</button></a>' +
      '</div>' +
    '</div>';
  });

  // Click handlers for product cards
  document.querySelectorAll('.product-card[data-product]').forEach(function(card) {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var id = this.getAttribute('data-product');
      var modal = document.getElementById('product-' + id + '-modal');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modals
  document.querySelectorAll('.service-modal').forEach(function(modal) {
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
    }
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

  // ESC to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.service-modal').forEach(function(m) {
        if (m.style.display === 'flex') {
          m.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
});
