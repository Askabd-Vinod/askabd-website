// Product Journey Page Renderer
document.addEventListener('DOMContentLoaded', function() {
  var statsEl = document.getElementById('journey-stats');
  var timelineEl = document.getElementById('journey-timeline');
  var modalsEl = document.getElementById('milestone-modals');
  if (!statsEl || !timelineEl || !modalsEl || typeof ASKABD_MILESTONES === 'undefined') return;

  // Calculate stats
  var total = ASKABD_MILESTONES.length;
  var completed = ASKABD_MILESTONES.filter(function(m) { return m.status === 'Completed'; }).length;
  var inProgress = ASKABD_MILESTONES.filter(function(m) { return m.status === 'In Progress'; }).length;
  var planned = ASKABD_MILESTONES.filter(function(m) { return m.status === 'Planned'; }).length;
  var pct = Math.round((completed / total) * 100);

  statsEl.innerHTML =
    '<div class="journey-stat-card">' +
      '<div class="journey-stat-num" style="color:#10B981;">' + completed + '</div>' +
      '<div class="journey-stat-label">Completed</div>' +
    '</div>' +
    '<div class="journey-stat-card">' +
      '<div class="journey-stat-num" style="color:#3B82F6;">' + inProgress + '</div>' +
      '<div class="journey-stat-label">In Progress</div>' +
    '</div>' +
    '<div class="journey-stat-card">' +
      '<div class="journey-stat-num" style="color:#F59E0B;">' + planned + '</div>' +
      '<div class="journey-stat-label">Planned</div>' +
    '</div>' +
    '<div class="journey-stat-card">' +
      '<div class="journey-stat-num" style="color:#8B5CF6;">' + pct + '%</div>' +
      '<div class="journey-stat-label">Overall Progress</div>' +
    '</div>';

  // Render timeline
  timelineEl.innerHTML = ASKABD_MILESTONES.map(function(m, i) {
    var statusClass = m.status === 'Completed' ? 'status-done' :
                      m.status === 'In Progress' ? 'status-progress' : 'status-planned';
    var side = i % 2 === 0 ? 'left' : 'right';
    return '<div class="timeline-item timeline-' + side + '" data-milestone="' + m.number + '">' +
      '<div class="timeline-dot" style="background:' + m.color + ';"></div>' +
      '<div class="timeline-card">' +
        '<div class="timeline-card-header">' +
          '<span class="milestone-num">M' + m.number + '</span>' +
          '<span class="product-status ' + statusClass + '">' + m.status + '</span>' +
        '</div>' +
        '<h3>' + m.title + '</h3>' +
        '<p>' + m.objective + '</p>' +
        '<div class="timeline-card-footer">View Details →</div>' +
      '</div>' +
    '</div>';
  }).join('');

  // Render milestone modals
  modalsEl.innerHTML = ASKABD_MILESTONES.map(function(m) {
    return '<div id="milestone-' + m.number + '-modal" class="service-modal"></div>';
  }).join('');

  ASKABD_MILESTONES.forEach(function(m) {
    var modal = document.getElementById('milestone-' + m.number + '-modal');
    if (!modal) return;
    var deliveredHtml = m.delivered.map(function(d) {
      return '<div class="guarantee-item"><span class="guarantee-icon">✓</span>' + d + '</div>';
    }).join('');
    var techHtml = m.technical.map(function(t) {
      return '<div class="guarantee-item"><span class="guarantee-icon">⚡</span>' + t + '</div>';
    }).join('');
    var statusClass = m.status === 'Completed' ? 'status-done' :
                      m.status === 'In Progress' ? 'status-progress' : 'status-planned';

    modal.innerHTML = '<div class="modal-content">' +
      '<button class="modal-close">&times;</button>' +
      '<div class="modal-hero">' +
        '<span class="modal-badge">Milestone ' + m.number + '</span>' +
        '<h2>' + m.title + '</h2>' +
        '<p>' + m.objective + '</p>' +
      '</div>' +
      '<div class="modal-stats">' +
        '<div class="stat-item"><div class="stat-number">M' + m.number + '</div><div class="stat-label">Milestone</div></div>' +
        '<div class="stat-item"><div class="stat-number product-status ' + statusClass + '">' + m.status + '</div><div class="stat-label">Status</div></div>' +
        '<div class="stat-item"><div class="stat-number">' + m.delivered.length + '</div><div class="stat-label">Deliverables</div></div>' +
        '<div class="stat-item"><div class="stat-number">' + m.technical.length + '</div><div class="stat-label">Tech Achievements</div></div>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h3>What Was Delivered</h3>' +
        '<div class="guarantee-list">' + deliveredHtml + '</div>' +
      '</div>' +
      '<div class="modal-section modal-section-alt">' +
        '<h3>Technical Achievements</h3>' +
        '<div class="guarantee-list">' + techHtml + '</div>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h3>Business Value</h3>' +
        '<p style="color:#94A3B8;font-size:1.05rem;line-height:1.7;">' + m.businessValue + '</p>' +
      '</div>' +
      '<div class="modal-cta">' +
        '<h3>Want This Level of Engineering Discipline?</h3>' +
        '<p>We apply the same methodology to client projects.</p>' +
        '<a href="contact.html"><button class="btn-primary btn-large">Discuss Your Project →</button></a>' +
      '</div>' +
    '</div>';
  });

  // Click handlers for timeline items
  document.querySelectorAll('.timeline-item[data-milestone]').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var num = this.getAttribute('data-milestone');
      var modal = document.getElementById('milestone-' + num + '-modal');
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
