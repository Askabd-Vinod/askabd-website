/* Homepage modals - injects service & industry modals and wires cards to open them inline */
(function () {
  var DATA = {
    'ecommerce-modal': {
      badge: 'E-Commerce Development',
      title: 'Build a Digital Store That Converts Browsers Into Buyers',
      sub: 'High-performance online platforms that drive revenue and customer loyalty.',
      stats: [['47%', 'Higher Conversion'], ['3.2x', 'Faster Checkout'], ['99.9%', 'Uptime'], ['24/7', 'Support']],
      challenges: [['🛒', 'Cart Abandonment', 'Losing customers at checkout due to complex processes.'], ['📦', 'Inventory Chaos', 'Stock discrepancies causing overselling and delays.'], ['💳', 'Payment Friction', 'Limited payment options blocking transactions.'], ['📱', 'Mobile Experience', 'Clunky mobile shopping driving customers away.'], ['🔍', 'Product Discovery', 'Poor search making products hard to find.'], ['📊', 'Data Blindness', 'No insight into customer behavior and sales.']],
      solutions: [['⚡', 'Optimized Checkout', 'One-click purchases and guest checkout.'], ['🔄', 'Real-Time Inventory', 'Centralized stock synced across channels.'], ['💰', 'Multi-Payment Gateways', 'Stripe, PayPal, Razorpay and local methods.'], ['📲', 'Mobile-First Design', 'Fast, intuitive shopping on any device.'], ['🎯', 'Smart Search', 'AI search and personalized recommendations.'], ['📈', 'Analytics Dashboard', 'Real-time sales and behavior insights.']],
      guarantees: [['PCI DSS Compliant:', 'Bank-level payment security.'], ['Scales for Sale Spikes:', 'No crashes during peak traffic.'], ['SEO Optimized:', 'Built to drive organic traffic.'], ['6 Months Support:', 'Free maintenance after launch.']],
      cta: ['Ready to Build Your Online Store?', 'Get a free consultation and custom roadmap.']
    },
    'mobile-modal': {
      badge: 'Mobile App Development',
      title: 'Turn Your Idea Into a High-Performance Mobile App',
      sub: 'Native and cross-platform apps that users love, built for speed and scale.',
      stats: [['60%', 'Faster Launch'], ['4.8★', 'Avg Rating'], ['200ms', 'Load Time'], ['100%', 'Native Feel']],
      challenges: [['⏱️', 'Slow Performance', 'Laggy interfaces driving users away.'], ['📱', 'Two Platforms', 'Supporting iOS and Android on a budget.'], ['🔌', 'Offline Access', 'Apps unusable without connection.'], ['🔔', 'Low Engagement', 'Poor retention and dormant users.'], ['🔐', 'Data Security', 'Concerns storing data on devices.'], ['🚀', 'Store Approval', 'Delays getting published on app stores.']],
      solutions: [['⚡', 'Optimized Performance', 'Native-level speed and smart caching.'], ['🔄', 'Cross-Platform', 'React Native & Flutter, one codebase.'], ['📴', 'Offline-First', 'Local storage and background sync.'], ['🔔', 'Push Notifications', 'Personalized messaging that retains users.'], ['🔒', 'End-to-End Encryption', 'Secure storage and biometric auth.'], ['✅', 'App Store Optimization', 'ASO and compliance for fast approval.']],
      guarantees: [['Native Performance:', '60 FPS and instant response.'], ['Store Success:', 'We handle submission and fixes.'], ['Device Coverage:', 'Tested on 50+ devices.'], ['Post-Launch Updates:', 'Free bug fixes after launch.']],
      cta: ['Ready to Launch Your Mobile App?', 'Get a free technical consultation and roadmap.']
    },
    'ai-modal': {
      badge: 'AI & Machine Learning',
      title: 'Automate Decisions and Unlock Data-Driven Intelligence',
      sub: 'Leverage AI and ML to automate workflows, predict outcomes, and gain an edge.',
      stats: [['85%', 'Task Automation'], ['93%', 'Accuracy'], ['40%', 'Cost Reduction'], ['10x', 'Faster Insights']],
      challenges: [['🗂️', 'Data Silos', 'Fragmented data preventing unified models.'], ['🎯', 'Low Accuracy', 'Poor predictions from bad training data.'], ['⚙️', 'Deployment', 'Hard to move models to production.'], ['💰', 'High Costs', 'Expensive GPU and cloud compute.'], ['🔍', 'Black Box', 'Lack of explainable AI decisions.'], ['📉', 'Model Drift', 'Accuracy degrading over time.']],
      solutions: [['🔗', 'Data Pipelines', 'Unified ETL connecting all sources.'], ['🎯', 'Custom Models', 'Tailored NLP, vision, and forecasting.'], ['🚀', 'MLOps', 'Automated training and deployment.'], ['⚡', 'Cost-Optimized', 'Model compression to cut cloud spend.'], ['📊', 'Explainable AI', 'Transparent, trustworthy decisions.'], ['🔄', 'Monitoring', 'Drift detection and auto-retraining.']],
      guarantees: [['Production-Ready:', 'Models built for real-world use.'], ['Scalable:', 'Millions of predictions per day.'], ['Privacy Compliant:', 'GDPR and HIPAA safe.'], ['Ongoing Tuning:', 'Monitoring and retraining included.']],
      cta: ['Ready to Harness AI?', 'Get a free AI strategy session.']
    },
    'bi-modal': {
      badge: 'Business Intelligence & Analytics',
      title: 'Transform Raw Data Into Strategic Business Insights',
      sub: 'Powerful dashboards and analytics that drive data-informed decisions.',
      stats: [['5x', 'Faster Reporting'], ['100+', 'Data Sources'], ['Real-Time', 'Updates'], ['95%', 'Accuracy']],
      challenges: [['📂', 'Data Fragmentation', 'Data scattered across systems.'], ['⏰', 'Delayed Insights', 'Reports too late to act on.'], ['🤷', 'No Visibility', 'No clear view of KPIs and trends.'], ['📊', 'Complex Reporting', 'Non-technical teams locked out.'], ['🔍', 'Data Quality', 'Inconsistent, inaccurate data.'], ['💸', 'Costly Tools', 'Expensive BI licenses.']],
      solutions: [['🔗', 'Data Warehouse', 'Unified ETL from all your tools.'], ['⚡', 'Real-Time Dashboards', 'Live KPIs with drill-downs.'], ['👁️', 'Executive Insights', 'Role-based views for every team.'], ['🎨', 'Self-Service', 'Drag-and-drop report builders.'], ['✅', 'Data Quality', 'Automated validation and cleansing.'], ['💰', 'Cost-Effective', 'Lower TCO than enterprise BI.']],
      guarantees: [['Sub-Second Queries:', 'Optimized for instant insight.'], ['Fully Custom:', 'Built around your exact KPIs.'], ['Secure:', 'Role-based access and encryption.'], ['Training Included:', 'Your team fully onboarded.']],
      cta: ['Ready to Make Data-Driven Decisions?', 'Get a free BI assessment.']
    },
    'enterprise-modal': {
      badge: 'Enterprise Solutions',
      title: 'Custom Enterprise Software That Scales With Your Business',
      sub: 'ERP, CRM, and workflow automation tailored to your processes.',
      stats: [['60%', 'More Efficient'], ['1000+', 'Users'], ['99.95%', 'Uptime'], ['50%', 'Cost Savings']],
      challenges: [['🏢', 'Legacy Lock-In', 'Outdated software, high costs.'], ['🔗', 'Integration Gaps', 'Disconnected tools and silos.'], ['📋', 'Manual Workflows', 'Time-consuming, error-prone tasks.'], ['📈', 'Scalability Limits', 'Systems that cannot grow.'], ['👥', 'Low Adoption', 'Complex interfaces staff avoid.'], ['🔐', 'Compliance', 'Hard to meet regulations.']],
      solutions: [['🔄', 'Custom ERP', 'Finance, HR, and operations unified.'], ['🤝', 'CRM Systems', 'Unified customer data and pipelines.'], ['⚙️', 'Workflow Automation', 'Automated approvals and routing.'], ['🔗', 'System Integration', 'Connect SAP, Salesforce, and more.'], ['👥', 'Intuitive UX', 'Role-based, high-adoption design.'], ['🔒', 'Enterprise Security', 'SSO, RBAC, and audit logs.']],
      guarantees: [['High Availability:', '99.95% uptime with failover.'], ['Unlimited Scale:', '100 to 100,000 users.'], ['Compliant:', 'SOX, GDPR, HIPAA ready.'], ['Adoption Support:', 'Training and change management.']],
      cta: ['Ready to Modernize Your Systems?', 'Get a free enterprise consultation.']
    },
    'saas-modal': {
      badge: 'SaaS Platform Development',
      title: 'Build and Launch Your SaaS Product Faster',
      sub: 'Scalable, multi-tenant platforms with subscription billing built in.',
      stats: [['6 Mo', 'To Market'], ['10K+', 'Users'], ['99.99%', 'Uptime'], ['API-First', 'Design']],
      challenges: [['🏗️', 'Multi-Tenancy', 'Isolating data while sharing infra.'], ['💳', 'Billing', 'Plans, trials, and failed payments.'], ['📈', 'Scaling Costs', 'Infra growing faster than revenue.'], ['🔌', 'API Design', 'Building developer-friendly APIs.'], ['📊', 'Usage Metering', 'Tracking usage for tiered pricing.'], ['🎨', 'White-Labeling', 'Partner branding and domains.']],
      solutions: [['🏢', 'Multi-Tenant Architecture', 'Secure isolation, shared infra.'], ['💰', 'Subscription Management', 'Stripe/Paddle with dunning.'], ['⚡', 'Auto-Scaling', 'Elastic infra that controls cost.'], ['🔗', 'Developer APIs', 'REST/GraphQL with webhooks & SDKs.'], ['📈', 'Usage Metering', 'Track metrics for pricing tiers.'], ['🎨', 'White-Label', 'Custom domains and theming.']],
      guarantees: [['Ready in 6 Months:', 'Reusable SaaS components.'], ['SOC 2 Path:', 'Security controls included.'], ['Cost-Optimized:', 'Designed for healthy margins.'], ['GTM Support:', 'Onboarding and analytics setup.']],
      cta: ['Ready to Build Your SaaS?', 'Get a free SaaS strategy session.']
    },
    'api-modal': {
      badge: 'API & Custom Integrations',
      title: 'Connect Your Digital Ecosystem Seamlessly',
      sub: 'Robust APIs and integrations that let your systems share data effortlessly.',
      stats: [['10K+', 'Requests/Sec'], ['50ms', 'Avg Response'], ['99.99%', 'Uptime'], ['100+', 'Integrations']],
      challenges: [['🔌', 'System Silos', 'Apps that cannot talk to each other.'], ['🐌', 'Slow Performance', 'Inefficient APIs causing timeouts.'], ['🔐', 'Vulnerabilities', 'APIs exposed to attacks.'], ['📚', 'Poor Docs', 'Unclear API documentation.'], ['🔄', 'Sync Issues', 'Data inconsistencies across systems.'], ['📈', 'No Rate Limiting', 'APIs overwhelmed by traffic.']],
      solutions: [['🔗', 'REST & GraphQL', 'Modern, standards-based APIs.'], ['⚡', 'High Performance', 'Caching and load balancing.'], ['🔒', 'Secure', 'OAuth 2.0, JWT, and rate limiting.'], ['📖', 'Auto Docs', 'Swagger/OpenAPI explorers.'], ['🔄', 'Real-Time Sync', 'Webhooks and event-driven flows.'], ['⚙️', 'API Gateway', 'Analytics, versioning, throttling.']],
      guarantees: [['99.99% Uptime:', 'Highly available with failover.'], ['Fully Tested:', 'Unit, integration, and load tests.'], ['Seamless Integrations:', 'Salesforce, SAP, QuickBooks.'], ['Developer Support:', '3 months free API support.']],
      cta: ['Ready to Integrate Your Systems?', 'Get a free integration assessment.']
    },
    'qa-modal': {
      badge: 'QA & Defect Resolution',
      title: 'Ship Reliable, Bug-Free Software With Confidence',
      sub: 'Comprehensive testing and rapid defect resolution that protect your users.',
      stats: [['90%', 'Test Coverage'], ['70%', 'Fewer Bugs'], ['<24h', 'Critical Fixes'], ['Auto', 'Regression']],
      challenges: [['🐛', 'Recurring Bugs', 'The same defects returning.'], ['🔥', 'Production Fires', 'Users finding issues, not tests.'], ['🖐️', 'Manual Only', 'Slow, inconsistent testing.'], ['📉', 'Slow Releases', 'Fear of breaking things.'], ['❓', 'Unknown Cause', 'Fixing symptoms, not the cause.'], ['⚡', 'Performance', 'Slowdowns under real load.']],
      solutions: [['🧪', 'Full Testing', 'Manual and automated coverage.'], ['🔁', 'Regression', 'Catch breakages before release.'], ['⚡', 'Performance Testing', 'Load and stress testing.'], ['🔍', 'Root-Cause Analysis', 'Fix the real problem.'], ['🤖', 'Test Automation', 'Frameworks integrated in CI/CD.'], ['📋', 'QA Process', 'Standards for consistent quality.']],
      guarantees: [['High Coverage:', 'Thorough automated testing.'], ['Fast Turnaround:', 'Critical fixes within 24 hours.'], ['CI Integration:', 'Quality gates in your pipeline.'], ['Clear Reporting:', 'Transparent test reports.']],
      cta: ['Ready to Improve Software Quality?', 'Get a free QA assessment.']
    },
    'documentation-modal': {
      badge: 'Documentation & Architecture',
      title: 'Crystal-Clear Documentation That Accelerates Delivery',
      sub: 'Technical docs, architecture blueprints, and knowledge bases that make onboarding effortless.',
      stats: [['70%', 'Faster Onboarding'], ['50%', 'Fewer Tickets'], ['100%', 'Coverage'], ['Always', 'Up-to-Date']],
      challenges: [['🧠', 'Tribal Knowledge', 'Info trapped in people\u2019s heads.'], ['📆', 'Outdated Docs', 'Docs that do not match the code.'], ['🐌', 'Slow Onboarding', 'New hires take weeks to ramp.'], ['🔍', 'No Architecture', 'No clear system design docs.'], ['🤝', 'Poor API Docs', 'Partners struggle to integrate.'], ['🧩', 'Scattered Info', 'Docs spread across tools.']],
      solutions: [['📖', 'Technical Docs', 'Setup, deployment, and troubleshooting.'], ['🏗️', 'Architecture Diagrams', 'C4 models and data flows.'], ['🚀', 'Onboarding Guides', 'Quickstarts and walkthroughs.'], ['🔌', 'API Documentation', 'OpenAPI specs with examples.'], ['🎓', 'Knowledge Base', 'Searchable wikis and FAQs.'], ['🔄', 'Living Docs', 'Auto-generated from code.']],
      guarantees: [['Full Coverage:', 'Every component documented.'], ['Developer-Friendly:', 'Clear writing and diagrams.'], ['Version Controlled:', 'Docs tracked with the code.'], ['Maintenance Plan:', 'Quarterly reviews included.']],
      cta: ['Ready to Document Your Systems?', 'Get a free documentation audit.']
    },
    'ind-healthcare-modal': {
      badge: 'Healthcare',
      title: 'Digital Health Solutions That Improve Patient Outcomes',
      sub: 'HIPAA-compliant platforms that streamline care and boost efficiency.',
      stats: [['40%', 'Less Admin'], ['HIPAA', 'Compliant'], ['24/7', 'Patient Access'], ['99.9%', 'Uptime']],
      challenges: [['📅', 'Manual Scheduling', 'Phone booking overwhelms staff.'], ['🏥', 'Fragmented Records', 'Patient data in silos.'], ['🔒', 'Compliance Risk', 'Protecting data under HIPAA.'], ['🩺', 'Limited Access', 'No remote care options.'], ['📊', 'No Insights', 'No operational visibility.'], ['🔌', 'Device Silos', 'Devices not integrated.']],
      solutions: [['📅', 'Patient Portals', 'Self-service scheduling.'], ['💻', 'Telemedicine', 'Secure video consults.'], ['🏥', 'EHR/EMR Integration', 'Unified records.'], ['📊', 'Dashboards', 'Clinical and ops analytics.'], ['🔒', 'HIPAA Systems', 'Encrypted and audited.'], ['🔌', 'Medical IoT', 'Connected device data.']],
      guarantees: [['HIPAA Compliant:', 'Full regulatory adherence.'], ['Interoperable:', 'HL7/FHIR support.'], ['Secure by Design:', 'Encryption and audit trails.'], ['Ongoing Support:', 'Maintenance included.']],
      cta: ['Ready to Digitize Healthcare?', 'Get a free consultation.']
    },
    'ind-finance-modal': {
      badge: 'Finance & FinTech',
      title: 'Secure Financial Platforms Built for Trust',
      sub: 'Handle transactions, lending, and investments with bank-grade security.',
      stats: [['Bank', 'Grade Security'], ['99.99%', 'Uptime'], ['Real-Time', 'Processing'], ['PCI DSS', 'Compliant']],
      challenges: [['🏦', 'Legacy Banking', 'Outdated core systems.'], ['📝', 'Slow Lending', 'Manual loan processing.'], ['💳', 'Payment Friction', 'Complex, insecure flows.'], ['📋', 'KYC Burden', 'Manual onboarding checks.'], ['🚨', 'Fraud Risk', 'Sophisticated fraud.'], ['📊', 'Investment Gaps', 'No unified portfolio view.']],
      solutions: [['🏦', 'Digital Banking', 'Modern, secure platforms.'], ['📝', 'Loan Origination', 'Automated lending.'], ['💳', 'Payment Processing', 'Secure transactions.'], ['📊', 'Investment Dashboards', 'Real-time tracking.'], ['📋', 'KYC Automation', 'Compliant onboarding.'], ['🚨', 'Fraud Prevention', 'AI detection in real time.']],
      guarantees: [['PCI DSS Compliant:', 'Secure payment handling.'], ['Regulatory Ready:', 'KYC/AML built in.'], ['High Availability:', '99.99% uptime.'], ['Audited Security:', 'Regular pen testing.']],
      cta: ['Ready to Build FinTech?', 'Get a free consultation.']
    },
    'ind-retail-modal': {
      badge: 'Retail & E-Commerce',
      title: 'Omnichannel Retail From Storefront to Supply Chain',
      sub: 'Unified retail solutions connecting online, in-store, and back-office.',
      stats: [['47%', 'More Sales'], ['Omni', 'Channel'], ['Real-Time', 'Inventory'], ['360°', 'Customer View']],
      challenges: [['🏪', 'Disconnected Channels', 'Online and store in silos.'], ['📦', 'Inventory Errors', 'Overselling and stockouts.'], ['💳', 'POS Gaps', 'POS not synced with online.'], ['🎁', 'Weak Loyalty', 'No repeat-customer program.'], ['🚚', 'Fulfillment Delays', 'Slow order processing.'], ['📊', 'No Insight', 'Missing shopping behavior data.']],
      solutions: [['🛍️', 'Stores & Marketplaces', 'Online storefronts and platforms.'], ['📦', 'Inventory Management', 'Real-time stock everywhere.'], ['💳', 'POS Integration', 'Unified online and in-store.'], ['🎁', 'Loyalty & Rewards', 'Programs that drive repeats.'], ['🚚', 'Order Fulfillment', 'Fast, automated processing.'], ['📊', 'Customer Analytics', 'Behavior and segmentation.']],
      guarantees: [['Omnichannel Sync:', 'One view across channels.'], ['Scales for Peaks:', 'Handles sale-day traffic.'], ['Secure Payments:', 'PCI DSS compliant.'], ['Post-Launch Support:', 'Ongoing maintenance.']],
      cta: ['Ready to Transform Retail?', 'Get a free consultation.']
    },
    'ind-logistics-modal': {
      badge: 'Logistics & Transport',
      title: 'End-to-End Supply Chain Digitization',
      sub: 'Full visibility and control from warehouse to last-mile delivery.',
      stats: [['30%', 'Lower Costs'], ['Live', 'Tracking'], ['25%', 'Faster Delivery'], ['100%', 'Visibility']],
      challenges: [['🚚', 'Fleet Blind Spots', 'No real-time vehicle view.'], ['📍', 'Lost Shipments', 'No delivery tracking.'], ['🗺️', 'Bad Routes', 'Wasted fuel and time.'], ['🏭', 'Warehouse Chaos', 'Manual stock handling.'], ['📅', 'Delivery Delays', 'Poor scheduling.'], ['🔗', 'Broken Chain', 'No end-to-end visibility.']],
      solutions: [['🚚', 'Fleet Management', 'Track vehicles in real time.'], ['📍', 'Real-Time Tracking', 'Live shipment visibility.'], ['🗺️', 'Route Optimization', 'AI routing to cut costs.'], ['🏭', 'Warehouse Management', 'Automated inventory.'], ['📅', 'Delivery Scheduling', 'Smart dispatch.'], ['🔗', 'Supply Chain Visibility', 'End-to-end dashboards.']],
      guarantees: [['Real-Time Data:', 'Live GPS and status.'], ['Scalable:', '10 to 10,000 vehicles.'], ['Integrations:', 'Connects to ERP and TMS.'], ['Ongoing Support:', 'Maintenance included.']],
      cta: ['Ready to Digitize Logistics?', 'Get a free consultation.']
    },
    'ind-education-modal': {
      badge: 'Education & EdTech',
      title: 'Learning Platforms That Engage and Empower',
      sub: 'Digital education tools that captivate students and empower educators.',
      stats: [['3x', 'Engagement'], ['Any', 'Device'], ['Live', 'Classrooms'], ['100%', 'Tracking']],
      challenges: [['📚', 'Scattered Content', 'Materials spread across tools.'], ['😴', 'Low Engagement', 'Static, boring content.'], ['📝', 'Manual Grading', 'Teachers buried in work.'], ['🏫', 'Remote Barriers', 'No virtual learning setup.'], ['💰', 'Hard to Monetize', 'No way to sell courses.'], ['📊', 'No Progress Data', 'Cannot track outcomes.']],
      solutions: [['🎓', 'Learning Management', 'Complete LMS platform.'], ['👨‍🎓', 'Student Portals', 'Classes, grades, resources.'], ['📝', 'Online Assessments', 'Auto-graded quizzes.'], ['🏫', 'Virtual Classrooms', 'Live video lessons.'], ['💰', 'Course Marketplaces', 'Sell courses online.'], ['📊', 'Progress Tracking', 'Performance analytics.']],
      guarantees: [['Any Device:', 'Mobile, tablet, desktop.'], ['Scales:', 'Thousands of learners.'], ['Accessible:', 'Inclusive design.'], ['Ongoing Support:', 'Updates included.']],
      cta: ['Ready to Build EdTech?', 'Get a free consultation.']
    },
    'ind-realestate-modal': {
      badge: 'Real Estate',
      title: 'PropTech Solutions That Close More Deals',
      sub: 'Listings, CRM, and property management that modernize how you sell.',
      stats: [['2x', 'More Leads'], ['3D', 'Virtual Tours'], ['Auto', 'Contracts'], ['24/7', 'Listings']],
      challenges: [['🏠', 'Static Listings', 'Outdated portals, poor search.'], ['👀', 'Limited Viewings', 'In-person-only tours.'], ['🤝', 'Lost Leads', 'No lead nurturing.'], ['🏢', 'Rental Headaches', 'Manual tenant management.'], ['📈', 'Weak Lead Gen', 'Few tools to attract clients.'], ['📄', 'Paper Contracts', 'Slow document handling.']],
      solutions: [['🏠', 'Listing Portals', 'Rich, searchable listings.'], ['🎥', 'Virtual Tours & 3D', 'Immersive walkthroughs.'], ['🤝', 'Agent CRM', 'Manage leads and deals.'], ['🏢', 'Rental Management', 'Tenants and payments.'], ['📈', 'Lead Generation', 'Capture and convert buyers.'], ['📄', 'Contract Automation', 'Digital e-signatures.']],
      guarantees: [['Mobile-First:', 'Manage on any device.'], ['SEO Optimized:', 'Listings that get found.'], ['Secure Documents:', 'Encrypted contracts.'], ['Ongoing Support:', 'Maintenance included.']],
      cta: ['Ready to Modernize Real Estate?', 'Get a free consultation.']
    }
  };

  function build(id, d) {
    var stats = d.stats.map(function (s) {
      return '<div class="stat-item"><div class="stat-number">' + s[0] + '</div><div class="stat-label">' + s[1] + '</div></div>';
    }).join('');
    var chal = d.challenges.map(function (c) {
      return '<div class="challenge-card"><div class="challenge-icon">' + c[0] + '</div><h4>' + c[1] + '</h4><p>' + c[2] + '</p></div>';
    }).join('');
    var sol = d.solutions.map(function (s) {
      return '<div class="solution-card"><div class="solution-icon">' + s[0] + '</div><h4>' + s[1] + '</h4><p>' + s[2] + '</p></div>';
    }).join('');
    var gua = d.guarantees.map(function (g) {
      return '<div class="guarantee-item"><span class="guarantee-icon">\u2713</span><strong>' + g[0] + '</strong> ' + g[1] + '</div>';
    }).join('');
    return '<div id="' + id + '" class="service-modal"><div class="modal-content">' +
      '<button class="modal-close">&times;</button>' +
      '<div class="modal-hero"><span class="modal-badge">' + d.badge + '</span><h2>' + d.title + '</h2><p>' + d.sub + '</p></div>' +
      '<div class="modal-stats">' + stats + '</div>' +
      '<div class="modal-section"><h3>Challenges We Solve</h3><div class="challenge-grid">' + chal + '</div></div>' +
      '<div class="modal-section modal-section-alt"><h3>What We Deliver</h3><div class="solution-grid">' + sol + '</div></div>' +
      '<div class="modal-section"><h3>Our Guarantees</h3><div class="guarantee-list">' + gua + '</div></div>' +
      '<div class="modal-cta"><h3>' + d.cta[0] + '</h3><p>' + d.cta[1] + '</p>' +
      '<a href="contact.html"><button class="btn-primary btn-large">Get Free Consultation \u2192</button></a></div>' +
      '</div></div>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Inject all modals into the page
    var wrap = document.createElement('div');
    var html = '';
    Object.keys(DATA).forEach(function (id) { html += build(id, DATA[id]); });
    wrap.innerHTML = html;
    document.body.appendChild(wrap);

    function openModal(id) {
      var m = document.getElementById(id);
      if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
    }
    function closeAll() {
      document.querySelectorAll('.service-modal').forEach(function (m) { m.style.display = 'none'; });
      document.body.style.overflow = 'auto';
      if (window.location.hash) history.replaceState(null, null, ' ');
    }

    // Close handlers
    document.querySelectorAll('.service-modal').forEach(function (modal) {
      var btn = modal.querySelector('.modal-close');
      if (btn) btn.addEventListener('click', closeAll);
      modal.addEventListener('click', function (e) { if (e.target === modal) closeAll(); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });

    // Wire homepage cards to open inline modals
    var svcMap = { ecommerce: 'ecommerce-modal', mobileapps: 'mobile-modal', ai: 'ai-modal', dashboards: 'bi-modal', enterprise: 'enterprise-modal', saas: 'saas-modal', api: 'api-modal', security: 'qa-modal', documentation: 'documentation-modal' };
    var indMap = { healthcare: 'ind-healthcare-modal', finance: 'ind-finance-modal', retail: 'ind-retail-modal', logistics: 'ind-logistics-modal', education: 'ind-education-modal', realestate: 'ind-realestate-modal' };
    var fwdMap = { healthcare: 'ind-healthcare-modal', finance: 'ind-finance-modal', ecommerce: 'ind-retail-modal', education: 'ind-education-modal', logistics: 'ind-logistics-modal', realestate: 'ind-realestate-modal' };
    function baseName(src) { return src.split('/').pop().split('.')[0]; }
    function wire(selector, map) {
      document.querySelectorAll(selector).forEach(function (card) {
        var img = card.querySelector('img');
        if (!img) return;
        var id = map[baseName(img.getAttribute('src'))];
        if (!id) return;
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
          e.preventDefault();
          openModal(id);
        });
      });
    }
    wire('.solution-card', svcMap);
    wire('.ind-card', indMap);
    wire('.fwd', fwdMap);

    // Auto-open from hash (e.g., linked from footer)
    var hash = window.location.hash.substring(1);
    if (hash && hash.endsWith('-modal') && document.getElementById(hash)) {
      setTimeout(function () { openModal(hash); }, 300);
    }
  });
})();
