// Industry Page Enhancements - Adds Digital Transformation, AI Opportunities, and Related sections
// Same pattern as service-enhancements.js but for industry-specific content.

(function() {
  var INDUSTRY_DATA = {
    'healthcare-solutions': {
      rootCause: {
        title: 'Why Healthcare Digital Transformation Stalls',
        items: [
          {icon:'📋',t:'Regulatory Paralysis',d:'Fear of compliance violations preventing any technology adoption.'},
          {icon:'🏥',t:'Legacy EHR Lock-In',d:'Expensive vendor systems that are hard to extend or integrate with.'},
          {icon:'👥',t:'Staff Resistance',d:'Clinical staff overwhelmed by technology that adds work rather than removing it.'},
          {icon:'💰',t:'Budget Constraints',d:'Healthcare margins squeezed, leaving little for technology investment.'},
          {icon:'🔗',t:'Interoperability Gaps',d:'Systems that cannot exchange data due to proprietary formats.'},
          {icon:'🔐',t:'Security Complexity',d:'Patient data requiring extreme care makes every project harder.'}
        ]
      },
      benefits: [
        {metric:'40%',label:'Reduced Wait Times',desc:'Online booking and automated triage streamlining patient flow.'},
        {metric:'60%',label:'Less Paperwork',desc:'Digital forms and automated records reducing administrative burden.'},
        {metric:'24/7',label:'Patient Access',desc:'Telemedicine and portals enabling care anytime, anywhere.'},
        {metric:'100%',label:'Compliance',desc:'HIPAA-compliant architecture with full audit trails.'}
      ],
      related: {
        services: [
          {name:'AI Solutions',href:'ai-solutions.html'},
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'Mobile App Development',href:'mobile-app-development.html'}
        ],
        solutions: [
          {name:'Enterprise Applications',href:'enterprise-solutions.html'},
          {name:'Dashboard Solutions',href:'business-intelligence.html'}
        ],
        industries: [
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Education',href:'education-solutions.html'}
        ]
      }
    },
    'fintech-solutions': {
      rootCause: {
        title: 'Why Financial Digital Transformation Stalls',
        items: [
          {icon:'📋',t:'Regulatory Burden',d:'PCI-DSS, SOX, AML — compliance requirements slowing every initiative.'},
          {icon:'🏦',t:'Core Banking Rigidity',d:'Legacy core systems impossible to replace without massive risk.'},
          {icon:'🔐',t:'Security Paranoia',d:'Excessive caution preventing adoption of modern architectures.'},
          {icon:'👥',t:'Customer Trust',d:'Any downtime or breach destroying years of customer confidence.'},
          {icon:'📊',t:'Data Overload',d:'Massive transaction volumes requiring real-time processing and analytics.'},
          {icon:'🏗️',t:'Technical Debt',d:'Decades of patches making systems fragile and unpredictable.'}
        ]
      },
      benefits: [
        {metric:'99.99%',label:'Uptime',desc:'High-availability architecture for mission-critical financial services.'},
        {metric:'50ms',label:'Transaction Speed',desc:'Low-latency processing for real-time payment and trading operations.'},
        {metric:'100%',label:'Audit Compliance',desc:'Complete transaction trails meeting regulatory requirements.'},
        {metric:'40%',label:'Operational Savings',desc:'Automation reducing manual reconciliation and processing costs.'}
      ],
      related: {
        services: [
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'AI Solutions',href:'ai-solutions.html'},
          {name:'API Integration',href:'api-integration.html'}
        ],
        solutions: [
          {name:'SaaS Platforms',href:'saas-development.html'},
          {name:'Enterprise Applications',href:'enterprise-solutions.html'}
        ],
        industries: [
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Logistics',href:'logistics-solutions.html'}
        ]
      }
    },
    'logistics-solutions': {
      rootCause: {
        title: 'Why Logistics Technology Projects Fail',
        items: [
          {icon:'🗺️',t:'Disconnected Systems',d:'Warehouses, fleet, and orders each running on separate platforms.'},
          {icon:'📋',t:'Manual Coordination',d:'Phone calls and spreadsheets managing complex supply chains.'},
          {icon:'📍',t:'No Real-Time Visibility',d:'Cannot track shipments, inventory, or deliveries in real-time.'},
          {icon:'📈',t:'Demand Unpredictability',d:'No forecasting leading to over-stocking or stockouts.'},
          {icon:'🚚',t:'Last-Mile Costs',d:'Inefficient routing making final delivery the most expensive leg.'},
          {icon:'📄',t:'Paper Processes',d:'Proof of delivery, invoicing, and customs still paper-based.'}
        ]
      },
      benefits: [
        {metric:'30%',label:'Route Optimization',desc:'AI-powered routing reducing fuel costs and delivery times.'},
        {metric:'Real-Time',label:'Shipment Tracking',desc:'End-to-end visibility for operations and customers alike.'},
        {metric:'50%',label:'Less Manual Work',desc:'Automated dispatch, invoicing, and documentation workflows.'},
        {metric:'20%',label:'Lower Costs',desc:'Optimized inventory and fleet management cutting operational spend.'}
      ],
      related: {
        services: [
          {name:'Mobile App Development',href:'mobile-app-development.html'},
          {name:'AI Solutions',href:'ai-solutions.html'},
          {name:'API Integration',href:'api-integration.html'}
        ],
        solutions: [
          {name:'Enterprise Applications',href:'enterprise-solutions.html'},
          {name:'Dashboard Solutions',href:'business-intelligence.html'}
        ],
        industries: [
          {name:'Retail',href:'retail-solutions.html'},
          {name:'Finance',href:'fintech-solutions.html'}
        ]
      }
    },
    'education-solutions': {
      rootCause: {
        title: 'Why EdTech Projects Struggle',
        items: [
          {icon:'💰',t:'Budget Limitations',d:'Educational institutions operating on thin margins with minimal IT budgets.'},
          {icon:'👥',t:'User Diversity',d:'Students, teachers, parents, and admins all needing different interfaces.'},
          {icon:'📱',t:'Access Inequality',d:'Learners with varying devices and internet connectivity levels.'},
          {icon:'📋',t:'Curriculum Rigidity',d:'Systems that cannot adapt to changing educational standards and methods.'},
          {icon:'📊',t:'No Learning Analytics',d:'Cannot measure student engagement, progress, or intervention needs.'},
          {icon:'🔗',t:'System Fragmentation',d:'LMS, SIS, library, and assessment tools not talking to each other.'}
        ]
      },
      benefits: [
        {metric:'3x',label:'Student Engagement',desc:'Interactive content and gamification keeping learners motivated.'},
        {metric:'50%',label:'Admin Time Saved',desc:'Automated enrollment, grading, and reporting processes.'},
        {metric:'24/7',label:'Learning Access',desc:'Anywhere, anytime access to courses and resources.'},
        {metric:'90%',label:'Completion Rates',desc:'Progress tracking and personalized nudges improving outcomes.'}
      ],
      related: {
        services: [
          {name:'Web Development',href:'web-development.html'},
          {name:'Mobile App Development',href:'mobile-app-development.html'},
          {name:'AI Solutions',href:'ai-solutions.html'}
        ],
        solutions: [
          {name:'SaaS Platforms',href:'saas-development.html'},
          {name:'Dashboard Solutions',href:'business-intelligence.html'}
        ],
        industries: [
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Real Estate',href:'realestate-solutions.html'}
        ]
      }
    },
    'realestate-solutions': {
      rootCause: {
        title: 'Why Real Estate Tech Projects Stall',
        items: [
          {icon:'📋',t:'Fragmented Listings',d:'Properties listed across dozens of portals with no central management.'},
          {icon:'📞',t:'Manual Lead Handling',d:'Inquiries tracked in spreadsheets or lost in email inboxes.'},
          {icon:'📄',t:'Paper Contracts',d:'Lease agreements, applications, and inspections still paper-based.'},
          {icon:'🏗️',t:'No Project Visibility',d:'Construction and development progress tracked manually.'},
          {icon:'📊',t:'Poor Market Data',d:'Investment decisions based on gut feeling rather than analytics.'},
          {icon:'🔗',t:'Disconnected Operations',d:'Sales, property management, and finance using separate tools.'}
        ]
      },
      benefits: [
        {metric:'3x',label:'Lead Conversion',desc:'CRM automation and instant follow-up capturing more prospects.'},
        {metric:'70%',label:'Less Paperwork',desc:'Digital contracts, e-signatures, and automated workflows.'},
        {metric:'Real-Time',label:'Portfolio Visibility',desc:'Live dashboards tracking occupancy, revenue, and maintenance.'},
        {metric:'40%',label:'Faster Transactions',desc:'Streamlined processes from listing to closing.'}
      ],
      related: {
        services: [
          {name:'Web Development',href:'web-development.html'},
          {name:'Mobile App Development',href:'mobile-app-development.html'},
          {name:'Business Intelligence',href:'business-intelligence.html'}
        ],
        solutions: [
          {name:'E-Commerce Solutions',href:'ecommerce-development.html'},
          {name:'Enterprise Applications',href:'enterprise-solutions.html'}
        ],
        industries: [
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Logistics',href:'logistics-solutions.html'}
        ]
      }
    },
    'retail-solutions': {
      rootCause: {
        title: 'Why Retail Digital Transformation Fails',
        items: [
          {icon:'🏪',t:'Online-Offline Disconnect',d:'Physical stores and online presence managed as separate businesses.'},
          {icon:'📦',t:'Inventory Blind Spots',d:'No real-time view of stock across channels and locations.'},
          {icon:'👥',t:'Generic Experience',d:'Same experience for every customer regardless of preferences.'},
          {icon:'📊',t:'No Customer Intelligence',d:'Transaction data collected but never analyzed for insights.'},
          {icon:'🔗',t:'POS System Lock-In',d:'Legacy point-of-sale systems preventing modern integrations.'},
          {icon:'📱',t:'Weak Mobile Presence',d:'Customers expecting mobile shopping but getting desktop-only sites.'}
        ]
      },
      benefits: [
        {metric:'35%',label:'Revenue Increase',desc:'Omnichannel strategy capturing sales across all touchpoints.'},
        {metric:'2x',label:'Customer Retention',desc:'Personalized experiences and loyalty programs driving repeat visits.'},
        {metric:'Real-Time',label:'Inventory Accuracy',desc:'Unified stock view preventing overselling and stockouts.'},
        {metric:'50%',label:'Marketing ROI',desc:'Data-driven campaigns targeting the right customers at the right time.'}
      ],
      related: {
        services: [
          {name:'E-Commerce Solutions',href:'ecommerce-development.html'},
          {name:'Mobile App Development',href:'mobile-app-development.html'},
          {name:'AI Solutions',href:'ai-solutions.html'}
        ],
        solutions: [
          {name:'E-Commerce Solutions',href:'ecommerce-development.html'},
          {name:'Dashboard Solutions',href:'business-intelligence.html'}
        ],
        industries: [
          {name:'Logistics',href:'logistics-solutions.html'},
          {name:'Finance',href:'fintech-solutions.html'}
        ]
      }
    }
  };

  var page = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  var data = INDUSTRY_DATA[page];
  if (!data) return;

  function buildRootCause(rc) {
    var items = rc.items.map(function(i) {
      return '<div class="highlight-box" style="background:rgba(245,158,11,0.05);border-color:rgba(245,158,11,0.3);">' +
        '<h4 style="color:#F59E0B;">' + i.icon + ' ' + i.t + '</h4><p>' + i.d + '</p></div>';
    }).join('');
    return '<section class="content-section" style="padding:5rem 0;">' +
      '<div class="content-container">' +
        '<div class="section-head center"><div class="tag-blue">ROOT CAUSE</div>' +
        '<h2 class="sec-title">' + rc.title + '</h2>' +
        '<p style="color:#94A3B8;max-width:700px;margin:0 auto;">Understanding barriers helps us design solutions that actually get adopted</p></div>' +
        '<div class="highlight-boxes" style="margin-top:3rem;">' + items + '</div>' +
      '</div></section>';
  }

  function buildBenefits(benefits) {
    var cards = benefits.map(function(b) {
      return '<div class="highlight-box" style="text-align:center;">' +
        '<h4 style="font-size:2rem;color:#10B981;margin-bottom:0.25rem;">' + b.metric + '</h4>' +
        '<p style="color:#E2E8F0;font-weight:600;margin-bottom:0.5rem;">' + b.label + '</p>' +
        '<p style="font-size:0.85rem;">' + b.desc + '</p></div>';
    }).join('');
    return '<section class="content-section" style="padding:5rem 0;">' +
      '<div class="content-container">' +
        '<div class="section-head center"><div class="tag-blue">BUSINESS IMPACT</div>' +
        '<h2 class="sec-title">Measurable Business Outcomes</h2>' +
        '<p style="color:#94A3B8;max-width:700px;margin:0 auto;">Technology investments that deliver real returns</p></div>' +
        '<div class="highlight-boxes" style="margin-top:3rem;">' + cards + '</div>' +
      '</div></section>';
  }

  function buildRelated(rel) {
    function linkList(items) {
      return items.map(function(i) {
        return '<a href="' + i.href + '" style="display:inline-block;background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.25);color:#60A5FA;padding:0.5rem 1.25rem;border-radius:25px;font-size:0.9rem;font-weight:500;text-decoration:none;transition:all 0.3s;">' + i.name + '</a>';
      }).join('');
    }
    return '<section class="content-section" style="background:linear-gradient(160deg,#0B1338,#0A0E27);padding:5rem 0;">' +
      '<div class="content-container">' +
        '<div class="section-head center"><div class="tag-blue">EXPLORE MORE</div>' +
        '<h2 class="sec-title">Related Services & Solutions</h2></div>' +
        '<div style="margin-top:3rem;">' +
          '<h4 style="color:#E2E8F0;margin-bottom:1rem;">Related Services</h4>' +
          '<div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:2rem;">' + linkList(rel.services) + '</div>' +
          '<h4 style="color:#E2E8F0;margin-bottom:1rem;">Related Solutions</h4>' +
          '<div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:2rem;">' + linkList(rel.solutions) + '</div>' +
          '<h4 style="color:#E2E8F0;margin-bottom:1rem;">Other Industries</h4>' +
          '<div style="display:flex;flex-wrap:wrap;gap:0.75rem;">' + linkList(rel.industries) + '</div>' +
        '</div>' +
      '</div></section>';
  }

  document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.content-section');
    var solutionSection = null;
    var finalCta = null;
    sections.forEach(function(s) {
      var tag = s.querySelector('.tag-blue');
      if (tag) {
        if (tag.textContent.trim() === 'OUR SOLUTION') solutionSection = s;
      }
    });
    document.querySelectorAll('section').forEach(function(s) {
      if (s.style.background && s.style.background.indexOf('linear-gradient(135deg') > -1) finalCta = s;
    });

    if (solutionSection && data.rootCause) {
      var d = document.createElement('div');
      d.innerHTML = buildRootCause(data.rootCause);
      solutionSection.parentNode.insertBefore(d.firstElementChild, solutionSection);
    }
    if (finalCta && data.benefits) {
      var d2 = document.createElement('div');
      d2.innerHTML = buildBenefits(data.benefits);
      finalCta.parentNode.insertBefore(d2.firstElementChild, finalCta);
    }
    if (finalCta && data.related) {
      var d3 = document.createElement('div');
      d3.innerHTML = buildRelated(data.related);
      finalCta.parentNode.insertBefore(d3.firstElementChild, finalCta);
    }
  });
})();
