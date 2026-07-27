// E-Commerce Development Page - Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  var modalData = {
    'ecom-checkout': {
      badge: 'Optimized Checkout Flow',
      title: 'Reduce Cart Abandonment With Frictionless Checkout',
      desc: 'We design streamlined checkout experiences that guide customers effortlessly from cart to confirmation.',
      stats: [
        {n:'35%',l:'Less Abandonment'},{n:'2.5x',l:'Faster Checkout'},
        {n:'99.9%',l:'Payment Success'},{n:'60%',l:'Repeat Purchases'}
      ],
      challenges: [
        {icon:'🛒',t:'Complex Forms',d:'Too many fields and steps driving customers away before purchase.'},
        {icon:'💳',t:'Limited Payment Options',d:'Customers leave when their preferred payment method is unavailable.'},
        {icon:'🔐',t:'Security Concerns',d:'Customers hesitate to enter card details on unfamiliar checkout pages.'},
        {icon:'📱',t:'Mobile Friction',d:'Checkout forms not optimized for small screens and touch input.'},
        {icon:'💰',t:'Hidden Costs',d:'Unexpected shipping or tax charges revealed only at the final step.'},
        {icon:'⏱️',t:'Slow Processing',d:'Long loading times between checkout steps causing drop-offs.'}
      ],
      solutions: [
        {icon:'⚡',t:'One-Page Checkout',d:'All steps visible on a single page with progress indicators.'},
        {icon:'👤',t:'Guest Checkout',d:'No forced account creation — purchase in seconds as a guest.'},
        {icon:'📝',t:'Smart Auto-Fill',d:'Address autocomplete, saved cards, and pre-populated fields.'},
        {icon:'💳',t:'Multi-Payment Support',d:'Credit cards, wallets, BNPL, UPI, and region-specific methods.'},
        {icon:'🔒',t:'Trust Signals',d:'SSL badges, secure payment icons, and money-back guarantees visible.'},
        {icon:'📊',t:'A/B Testing',d:'Continuously optimize checkout flow based on real conversion data.'}
      ],
      guarantees: [
        'PCI-DSS compliant payment handling for all transactions.',
        'Mobile-optimized checkout tested on 50+ device models.',
        'Cart recovery emails with personalized product reminders.',
        'Conversion tracking dashboard with real-time analytics.'
      ]
    },
    'ecom-payment': {
      badge: 'Secure Payment Integration',
      title: 'Accept Payments Globally With Bank-Level Security',
      desc: 'Multi-gateway payment infrastructure with fraud prevention and instant confirmations.',
      stats: [
        {n:'99.99%',l:'Uptime'},{n:'150+',l:'Payment Methods'},
        {n:'0.01%',l:'Fraud Rate'},{n:'<2s',l:'Processing Time'}
      ],
      challenges: [
        {icon:'🌍',t:'Regional Limitations',d:'Single gateway blocking international customers from purchasing.'},
        {icon:'🔐',t:'Security Breaches',d:'Inadequate encryption exposing customer financial data.'},
        {icon:'❌',t:'Failed Transactions',d:'High decline rates due to poor gateway configuration.'},
        {icon:'💸',t:'High Processing Fees',d:'Overpaying on transaction fees with suboptimal gateway setup.'},
        {icon:'📋',t:'Compliance Gaps',d:'Missing PCI-DSS requirements risking fines and shutdowns.'},
        {icon:'🔄',t:'Refund Complexity',d:'Manual refund processes frustrating both staff and customers.'}
      ],
      solutions: [
        {icon:'💳',t:'Multi-Gateway Routing',d:'Stripe, PayPal, Razorpay with intelligent failover and routing.'},
        {icon:'🔒',t:'PCI-DSS Level 1',d:'End-to-end encryption, tokenization, and secure vault storage.'},
        {icon:'🤖',t:'AI Fraud Detection',d:'Machine learning models that block fraud while approving legitimate orders.'},
        {icon:'📱',t:'Digital Wallets',d:'Apple Pay, Google Pay, Samsung Pay, and UPI integration.'},
        {icon:'🔄',t:'Auto Retry Logic',d:'Smart retry with alternate gateways when primary declines.'},
        {icon:'💰',t:'Fee Optimization',d:'Route transactions to lowest-cost gateway while maintaining speed.'}
      ],
      guarantees: [
        'PCI-DSS Level 1 compliance with quarterly security scans.',
        'Real-time transaction monitoring and alerting.',
        'Automated reconciliation and financial reporting.',
        'Zero-downtime gateway switching and maintenance.'
      ]
    },
    'ecom-mobile': {
      badge: 'Mobile-First Design',
      title: 'Deliver App-Like Shopping Experiences On Every Device',
      desc: 'Progressive Web Apps with offline capabilities and native-level performance.',
      stats: [
        {n:'60%',l:'Mobile Traffic'},{n:'3x',l:'Engagement'},
        {n:'<1.5s',l:'Load Time'},{n:'4.8★',l:'User Rating'}
      ],
      challenges: [
        {icon:'🐌',t:'Slow Mobile Load',d:'Heavy pages taking 5+ seconds on mobile networks.'},
        {icon:'👆',t:'Touch Unfriendly',d:'Tiny buttons and links impossible to tap accurately.'},
        {icon:'📶',t:'Offline Useless',d:'Store completely broken without internet connectivity.'},
        {icon:'📱',t:'Not Responsive',d:'Desktop-only layouts squished onto small screens.'},
        {icon:'🔋',t:'Battery Drain',d:'Unoptimized code consuming excessive device resources.'},
        {icon:'📏',t:'Inconsistent UX',d:'Different experience on different screen sizes and orientations.'}
      ],
      solutions: [
        {icon:'📱',t:'PWA Architecture',d:'Install on home screen, work offline, receive push notifications.'},
        {icon:'⚡',t:'Performance Budget',d:'Strict asset budgets ensuring sub-2-second loads on 3G.'},
        {icon:'👆',t:'Touch Optimized',d:'48px minimum tap targets, swipe gestures, and haptic feedback.'},
        {icon:'📴',t:'Offline Mode',d:'Browse products, add to cart, and sync when back online.'},
        {icon:'🎨',t:'Adaptive Design',d:'Layouts that transform intelligently across all breakpoints.'},
        {icon:'🚀',t:'Lazy Loading',d:'Only load visible content, defer everything else for speed.'}
      ],
      guarantees: [
        'Lighthouse mobile score of 90+ on all pages.',
        'Tested on 50+ real devices across iOS and Android.',
        'Works on 3G connections with graceful degradation.',
        'Push notification support for engagement and retention.'
      ]
    },
    'ecom-inventory': {
      badge: 'Smart Inventory Management',
      title: 'Real-Time Stock Control Across All Channels',
      desc: 'Automated inventory tracking with multi-warehouse support and supplier integration.',
      stats: [
        {n:'99.8%',l:'Stock Accuracy'},{n:'40%',l:'Less Overselling'},
        {n:'Real-Time',l:'Sync Speed'},{n:'3x',l:'Fulfillment Speed'}
      ],
      challenges: [
        {icon:'📦',t:'Overselling',d:'Selling products that are out of stock damages trust and causes refunds.'},
        {icon:'📋',t:'Manual Tracking',d:'Spreadsheet-based inventory creating errors and delays.'},
        {icon:'🏭',t:'Multi-Location Chaos',d:'No unified view across warehouses, stores, and channels.'},
        {icon:'📊',t:'No Demand Forecasting',d:'Guessing reorder points leads to stockouts or excess inventory.'},
        {icon:'🔗',t:'Disconnected Channels',d:'Online and offline inventory not synced in real-time.'},
        {icon:'💸',t:'Dead Stock',d:'Capital tied up in slow-moving products without visibility.'}
      ],
      solutions: [
        {icon:'🔄',t:'Real-Time Sync',d:'Inventory updates instantly across all sales channels and warehouses.'},
        {icon:'🤖',t:'AI Demand Forecasting',d:'Predict demand patterns and auto-suggest optimal reorder quantities.'},
        {icon:'📍',t:'Multi-Warehouse',d:'Centralized view with location-based routing for fastest fulfillment.'},
        {icon:'🔔',t:'Smart Alerts',d:'Automated notifications for low stock, overstock, and anomalies.'},
        {icon:'📊',t:'Inventory Analytics',d:'ABC analysis, turnover rates, and dead stock identification.'},
        {icon:'🔗',t:'Supplier Portal',d:'Automated POs, supplier communication, and delivery tracking.'}
      ],
      guarantees: [
        'Real-time sync with less than 500ms latency across channels.',
        'Barcode and QR code scanning for rapid stock management.',
        'Integration with major shipping and logistics providers.',
        'Historical data analytics for strategic purchasing decisions.'
      ]
    },
    'ecom-ai': {
      badge: 'AI-Powered Personalization',
      title: 'Deliver Unique Shopping Experiences To Every Customer',
      desc: 'Machine learning recommendations, dynamic pricing, and behavior-driven marketing automation.',
      stats: [
        {n:'35%',l:'More Revenue'},{n:'4.2x',l:'Engagement'},
        {n:'28%',l:'Higher AOV'},{n:'3x',l:'Repeat Visits'}
      ],
      challenges: [
        {icon:'👥',t:'Generic Experience',d:'Every customer sees the same products regardless of interests.'},
        {icon:'📧',t:'Spray & Pray Marketing',d:'Blast emails with no segmentation result in low open rates.'},
        {icon:'🔍',t:'Poor Discovery',d:'Customers cannot find relevant products in large catalogs.'},
        {icon:'💰',t:'Static Pricing',d:'Fixed prices missing revenue from demand fluctuations.'},
        {icon:'📊',t:'No Behavior Insights',d:'No understanding of why customers browse but do not buy.'},
        {icon:'🎯',t:'Low Conversion',d:'High traffic but low conversion due to irrelevant recommendations.'}
      ],
      solutions: [
        {icon:'🤖',t:'Product Recommendations',d:'Collaborative filtering showing what similar customers bought.'},
        {icon:'🔍',t:'Personalized Search',d:'Results ranked by individual user preferences and history.'},
        {icon:'💰',t:'Dynamic Pricing',d:'AI-driven price optimization based on demand and competition.'},
        {icon:'📧',t:'Behavioral Emails',d:'Triggered campaigns based on browse, cart, and purchase behavior.'},
        {icon:'🎯',t:'Smart Segments',d:'Auto-segmentation by purchase patterns, lifetime value, and intent.'},
        {icon:'📊',t:'Predictive Analytics',d:'Forecast which customers are likely to churn or convert next.'}
      ],
      guarantees: [
        'GDPR-compliant data collection and processing.',
        'A/B tested recommendation algorithms with measurable uplift.',
        'Real-time model updates as customer behavior changes.',
        'Transparent reporting on AI-driven revenue attribution.'
      ]
    },
    'ecom-performance': {
      badge: 'Performance Optimization',
      title: 'Sub-2-Second Load Times That Maximize Conversions',
      desc: 'CDN integration, image optimization, caching strategies, and code splitting for blazing speed.',
      stats: [
        {n:'<1.5s',l:'Load Time'},{n:'95+',l:'Lighthouse Score'},
        {n:'7%',l:'More Sales/sec'},{n:'50%',l:'Bounce Reduction'}
      ],
      challenges: [
        {icon:'🐌',t:'Slow Pages',d:'Every 1s delay costs 7% in conversions — most stores load in 4-6s.'},
        {icon:'📷',t:'Heavy Images',d:'Unoptimized product images consuming excessive bandwidth.'},
        {icon:'📜',t:'Bloated Code',d:'Unused CSS/JS frameworks slowing initial page render.'},
        {icon:'🌍',t:'Distance Latency',d:'Single server location creating slow experience for distant users.'},
        {icon:'💾',t:'No Caching',d:'Every page request fetching fresh data from the database.'},
        {icon:'📱',t:'Core Web Vitals',d:'Poor LCP, FID, CLS scores hurting SEO rankings.'}
      ],
      solutions: [
        {icon:'🌐',t:'Global CDN',d:'Content delivered from 200+ edge locations worldwide.'},
        {icon:'📷',t:'Image Pipeline',d:'WebP/AVIF auto-conversion, responsive sizing, and lazy loading.'},
        {icon:'⚡',t:'Code Splitting',d:'Load only the JS needed for current page, defer the rest.'},
        {icon:'💾',t:'Multi-Layer Cache',d:'Browser cache, CDN cache, application cache, and database cache.'},
        {icon:'📊',t:'Performance Monitoring',d:'Real-time metrics, alerting on degradation, and auto-scaling.'},
        {icon:'🔧',t:'Database Optimization',d:'Query optimization, indexing, and read replicas for speed.'}
      ],
      guarantees: [
        'Sub-2-second load time on 4G connections globally.',
        'Google Core Web Vitals passing scores on all pages.',
        'Auto-scaling infrastructure for traffic spikes during sales.',
        'Monthly performance reports with optimization recommendations.'
      ]
    },
    'ecom-shopify': {
      badge: 'Shopify Development',
      title: 'Launch Fast With Shopify — Customized For Your Brand',
      desc: 'Custom Shopify stores with unique themes, app integrations, and Shopify Plus enterprise solutions.',
      stats: [
        {n:'2 Weeks',l:'Launch Time'},{n:'99.99%',l:'Uptime'},
        {n:'100+',l:'App Integrations'},{n:'24/7',l:'Support'}
      ],
      challenges: [
        {icon:'🎨',t:'Generic Themes',d:'Cookie-cutter stores that look like every other Shopify site.'},
        {icon:'🔌',t:'App Conflicts',d:'Third-party apps slowing down or breaking store functionality.'},
        {icon:'📈',t:'Growth Limits',d:'Basic Shopify plans lacking features for scaling businesses.'},
        {icon:'🔗',t:'Integration Gaps',d:'Difficulty connecting ERP, CRM, or custom backend systems.'},
        {icon:'💰',t:'High App Costs',d:'Monthly app subscriptions adding up to significant overhead.'},
        {icon:'🔧',t:'Limited Customization',d:'Platform constraints preventing unique features or workflows.'}
      ],
      solutions: [
        {icon:'🎨',t:'Custom Theme Development',d:'Pixel-perfect themes built from scratch matching your brand identity.'},
        {icon:'⚡',t:'Performance Optimization',d:'Minimize app dependencies, optimize Liquid code, and speed up.'},
        {icon:'🏢',t:'Shopify Plus',d:'Enterprise features: automation, custom checkout, and dedicated support.'},
        {icon:'🔌',t:'Custom App Development',d:'Build private apps instead of relying on expensive third-party ones.'},
        {icon:'🔗',t:'System Integration',d:'Connect Shopify with your ERP, CRM, warehouse, and accounting.'},
        {icon:'📦',t:'Migration Services',d:'Seamless migration from WooCommerce, Magento, or other platforms.'}
      ],
      guarantees: [
        'Custom theme with unlimited design revisions until approved.',
        'Speed optimization achieving 90+ PageSpeed score.',
        'Full staff training on Shopify admin and operations.',
        '3 months post-launch support and bug fixes included.'
      ]
    },
    'ecom-woocommerce': {
      badge: 'WooCommerce Development',
      title: 'Full Control E-Commerce With WordPress & WooCommerce',
      desc: 'Content-rich stores with custom plugins, unlimited flexibility, and complete ownership.',
      stats: [
        {n:'40%',l:'Market Share'},{n:'100%',l:'Ownership'},
        {n:'800+',l:'Extensions'},{n:'Open',l:'Source'}
      ],
      challenges: [
        {icon:'🐌',t:'Slow Performance',d:'WooCommerce sites becoming sluggish with product growth.'},
        {icon:'🔐',t:'Security Risks',d:'WordPress vulnerabilities requiring constant patching.'},
        {icon:'🔌',t:'Plugin Conflicts',d:'Extensions breaking each other or after WordPress updates.'},
        {icon:'📈',t:'Scalability Issues',d:'Shared hosting unable to handle traffic spikes.'},
        {icon:'🎨',t:'Theme Limitations',d:'Generic themes requiring heavy customization for unique designs.'},
        {icon:'💾',t:'Database Bloat',d:'Years of data accumulation slowing down the entire store.'}
      ],
      solutions: [
        {icon:'⚡',t:'Performance Stack',d:'Optimized hosting, object caching, CDN, and database tuning.'},
        {icon:'🔒',t:'Hardened Security',d:'Firewall, malware scanning, 2FA, and automatic backups.'},
        {icon:'🔧',t:'Custom Plugins',d:'Purpose-built plugins instead of bloated third-party solutions.'},
        {icon:'☁️',t:'Scalable Hosting',d:'Cloud infrastructure with auto-scaling for traffic surges.'},
        {icon:'🎨',t:'Custom Theme',d:'Bespoke theme development with Gutenberg block editor support.'},
        {icon:'📊',t:'Database Optimization',d:'Regular cleanup, indexing, and query optimization routines.'}
      ],
      guarantees: [
        'Custom theme and plugins with full source code ownership.',
        'Security hardening with ongoing vulnerability monitoring.',
        'Scalable cloud hosting setup for growing businesses.',
        'Comprehensive documentation and admin training.'
      ]
    },
    'ecom-magento': {
      badge: 'Magento Development',
      title: 'Enterprise-Grade E-Commerce For Complex Business Needs',
      desc: 'Large catalogs, multi-store setups, B2B functionality, and advanced workflow automation.',
      stats: [
        {n:'250K+',l:'Products Supported'},{n:'Multi',l:'Store/Currency'},
        {n:'B2B+B2C',l:'Combined'},{n:'Enterprise',l:'Grade'}
      ],
      challenges: [
        {icon:'🏗️',t:'Complex Setup',d:'Magento requires significant expertise for proper implementation.'},
        {icon:'💰',t:'High Costs',d:'Licensing, hosting, and development costs can be substantial.'},
        {icon:'🐌',t:'Performance Issues',d:'Out-of-box Magento can be slow without proper optimization.'},
        {icon:'🔄',t:'Upgrade Complexity',d:'Major version upgrades requiring extensive testing and migration.'},
        {icon:'👥',t:'Talent Scarcity',d:'Qualified Magento developers are expensive and hard to find.'},
        {icon:'🔧',t:'Maintenance Burden',d:'Regular patches, security updates, and infrastructure management.'}
      ],
      solutions: [
        {icon:'🏢',t:'Multi-Store Setup',d:'Manage multiple brands, regions, and stores from one backend.'},
        {icon:'🤝',t:'B2B Commerce',d:'Custom pricing, quotes, bulk orders, and company account management.'},
        {icon:'⚡',t:'Performance Tuning',d:'Varnish cache, Elasticsearch, Redis, and CDN optimization.'},
        {icon:'🔗',t:'ERP Integration',d:'Seamless connection with SAP, Oracle, NetSuite, and custom ERPs.'},
        {icon:'📊',t:'Advanced Reporting',d:'Custom dashboards, sales analytics, and inventory intelligence.'},
        {icon:'☁️',t:'Cloud Infrastructure',d:'AWS/Azure deployment with auto-scaling and high availability.'}
      ],
      guarantees: [
        'Dedicated Magento-certified development team.',
        'Performance optimization achieving sub-3s load times.',
        'Comprehensive testing before every release and upgrade.',
        'Long-term maintenance and support partnership.'
      ]
    },
    'ecom-custom': {
      badge: 'Custom E-Commerce',
      title: 'Built From Scratch — No Platform Limitations',
      desc: 'React, Node.js, and modern tech stack for businesses that need complete control and unlimited features.',
      stats: [
        {n:'100%',l:'Ownership'},{n:'Unlimited',l:'Customization'},
        {n:'Any',l:'Feature Possible'},{n:'Zero',l:'Platform Fees'}
      ],
      challenges: [
        {icon:'🔒',t:'Platform Lock-In',d:'Stuck with a platform vendor controlling your features and pricing.'},
        {icon:'🚫',t:'Feature Limitations',d:'Cannot build unique workflows that platforms do not support.'},
        {icon:'💸',t:'Transaction Fees',d:'Platforms taking a percentage of every sale on top of gateway fees.'},
        {icon:'📈',t:'Scaling Constraints',d:'Platform infrastructure unable to handle your growth trajectory.'},
        {icon:'🎨',t:'Design Restrictions',d:'Template-based systems limiting your brand expression.'},
        {icon:'🔗',t:'Integration Walls',d:'Closed ecosystems preventing custom backend connections.'}
      ],
      solutions: [
        {icon:'⚛️',t:'Modern Frontend',d:'React/Next.js with server-side rendering for speed and SEO.'},
        {icon:'🔧',t:'Custom Backend',d:'Node.js/Python APIs built exactly for your business logic.'},
        {icon:'☁️',t:'Cloud Native',d:'Containerized microservices on AWS/Azure with auto-scaling.'},
        {icon:'🗄️',t:'Flexible Database',d:'PostgreSQL, MongoDB, or hybrid — chosen for your data patterns.'},
        {icon:'🔌',t:'Open APIs',d:'Connect anything — ERP, CRM, warehouse, marketing, analytics.'},
        {icon:'🚀',t:'CI/CD Pipeline',d:'Automated testing, staging, and deployment for rapid iteration.'}
      ],
      guarantees: [
        'Full source code ownership with comprehensive documentation.',
        'Microservices architecture for independent scaling of components.',
        'Zero platform fees or transaction percentage costs.',
        'Technology transfer and team training for in-house maintenance.'
      ]
    }
  };

  // Render modal HTML from data
  function renderModal(key, data) {
    var modal = document.getElementById(key + '-modal');
    if (!modal) return;
    var statsHtml = data.stats.map(function(s) {
      return '<div class="stat-item"><div class="stat-number">' + s.n + '</div><div class="stat-label">' + s.l + '</div></div>';
    }).join('');
    var challengesHtml = data.challenges.map(function(c) {
      return '<div class="challenge-card"><div class="challenge-icon">' + c.icon + '</div><h4>' + c.t + '</h4><p>' + c.d + '</p></div>';
    }).join('');
    var solutionsHtml = data.solutions.map(function(s) {
      return '<div class="solution-card"><div class="solution-icon">' + s.icon + '</div><h4>' + s.t + '</h4><p>' + s.d + '</p></div>';
    }).join('');
    var guaranteesHtml = data.guarantees.map(function(g) {
      return '<div class="guarantee-item"><span class="guarantee-icon">✓</span>' + g + '</div>';
    }).join('');

    modal.innerHTML = '<div class="modal-content">' +
      '<button class="modal-close">&times;</button>' +
      '<div class="modal-hero">' +
        '<span class="modal-badge">' + data.badge + '</span>' +
        '<h2>' + data.title + '</h2>' +
        '<p>' + data.desc + '</p>' +
      '</div>' +
      '<div class="modal-stats">' + statsHtml + '</div>' +
      '<div class="modal-section">' +
        '<h3>Common Challenges</h3>' +
        '<div class="challenge-grid">' + challengesHtml + '</div>' +
      '</div>' +
      '<div class="modal-section modal-section-alt">' +
        '<h3>How We Solve It</h3>' +
        '<div class="solution-grid">' + solutionsHtml + '</div>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h3>Our Guarantees</h3>' +
        '<div class="guarantee-list">' + guaranteesHtml + '</div>' +
      '</div>' +
      '<div class="modal-cta">' +
        '<h3>Ready to Get Started?</h3>' +
        '<p>Schedule a free consultation to discuss your specific requirements.</p>' +
        '<a href="contact.html"><button class="btn-primary btn-large">Get Free Consultation →</button></a>' +
      '</div>' +
    '</div>';
  }

  // Render all modals
  Object.keys(modalData).forEach(function(key) {
    renderModal(key, modalData[key]);
  });

  // Open modal when clicking service card with data-service attribute
  var serviceCards = document.querySelectorAll('.srv-card[data-service]');
  serviceCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var serviceType = this.getAttribute('data-service');
      var modal = document.getElementById(serviceType + '-modal');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal functionality
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

  // ESC key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.service-modal').forEach(function(modal) {
        if (modal.style.display === 'flex') {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
});
