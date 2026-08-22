// AskABD Shared Component Library — Phase 2 additions
// Accordion + Tabs interactivity. Breadcrumb is server-authored HTML
// (real per-page hrefs), not generated here, so screen readers and
// crawlers see it without JS.

document.addEventListener('DOMContentLoaded', function () {
  // ---------- Accordion ----------
  document.querySelectorAll('.accordion-item').forEach(function (item) {
    var trigger = item.querySelector('.accordion-trigger');
    var panel = item.querySelector('.accordion-panel');
    if (!trigger || !panel) return;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + 'px' : '0px';
    });
  });

  // ---------- Tabs ----------
  document.querySelectorAll('.tabs').forEach(function (tabGroup) {
    var buttons = tabGroup.querySelectorAll('.tabs-nav button');
    var panels = tabGroup.querySelectorAll('.tab-panel');
    buttons.forEach(function (btn, i) {
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        var target = tabGroup.querySelector('#' + btn.getAttribute('data-tab'));
        if (target) target.classList.add('active');
      });
    });
  });
});
