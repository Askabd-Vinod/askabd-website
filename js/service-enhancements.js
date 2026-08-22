// Service Page Enhancements - Adds Root Cause and Related sections
// This file is loaded on all service pages and dynamically inserts missing consulting sections.
// Note: a "Business Benefits" section with fabricated ROI metrics (e.g. "40% Faster
// Time to Market", "93% Prediction Accuracy") previously existed here and was removed —
// AskABD has no verified data to support page-specific performance claims like these.

(function() {
  var SERVICE_DATA = {
    'web-development': {
      rootCause: {
        title: 'Why Web Projects Fail',
        items: [
          {icon:'🏗️',t:'No Architecture Planning',d:'Jumping into code without designing for scale, performance, or maintainability.'},
          {icon:'🎨',t:'Design-Code Disconnect',d:'Beautiful mockups that cannot be implemented efficiently or accessibly.'},
          {icon:'📋',t:'Missing Requirements',d:'Unclear scope leading to endless revisions and scope creep.'},
          {icon:'🔧',t:'Wrong Technology Choice',d:'Choosing trendy tools over proven solutions matched to business needs.'},
          {icon:'🚫',t:'No Performance Budget',d:'Bloating pages with unnecessary scripts, animations, and images.'},
          {icon:'📱',t:'Desktop-First Thinking',d:'Building for large screens then struggling to retrofit mobile support.'}
        ]
      },
      related: {
        services: [
          {name:'Mobile App Development',href:'mobile-app-development.html'},
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'API Integration',href:'api-integration.html'}
        ],
        solutions: [
          {name:'E-Commerce Solutions',href:'ecommerce-development.html'},
          {name:'SaaS Platforms',href:'saas-development.html'}
        ],
        industries: [
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Education',href:'education-solutions.html'}
        ]
      }
    },
    'mobile-app-development': {
      rootCause: {
        title: 'Why Mobile App Projects Fail',
        items: [
          {icon:'📋',t:'No Discovery Phase',d:'Skipping user research and jumping straight into development.'},
          {icon:'🔀',t:'Build Everything Twice',d:'Maintaining separate iOS and Android codebases doubles cost and bugs.'},
          {icon:'📐',t:'No UX Strategy',d:'Designing interfaces that look good but frustrate real users.'},
          {icon:'🔌',t:'Backend Afterthought',d:'Building the app before designing robust APIs and data sync.'},
          {icon:'🧪',t:'Insufficient Testing',d:'Shipping without testing on real devices in real conditions.'},
          {icon:'📈',t:'No Growth Strategy',d:'Building the app without planning for user acquisition and retention.'}
        ]
      },
      related: {
        services: [
          {name:'Web Development',href:'web-development.html'},
          {name:'AI Solutions',href:'ai-solutions.html'},
          {name:'Cloud Solutions',href:'cloud-solutions.html'}
        ],
        solutions: [
          {name:'E-Commerce Solutions',href:'ecommerce-development.html'},
          {name:'Enterprise Applications',href:'enterprise-solutions.html'}
        ],
        industries: [
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Logistics',href:'logistics-solutions.html'},
          {name:'Retail',href:'retail-solutions.html'}
        ]
      }
    },
    'ai-solutions': {
      rootCause: {
        title: 'Why AI Initiatives Fail',
        items: [
          {icon:'📊',t:'Poor Data Quality',d:'Garbage in, garbage out — models trained on messy, biased, or incomplete data.'},
          {icon:'🎯',t:'No Clear Business Case',d:'Building AI for the sake of AI without measurable business outcomes.'},
          {icon:'🔬',t:'Prototype Trap',d:'Models that work in notebooks but never reach production systems.'},
          {icon:'👥',t:'Skills Gap',d:'Teams lacking MLOps expertise to deploy and maintain models reliably.'},
          {icon:'💰',t:'Underestimating Cost',d:'GPU costs and data engineering effort far exceeding initial budgets.'},
          {icon:'📏',t:'Wrong Problem Framing',d:'Applying complex ML where simple rules or analytics would suffice.'}
        ]
      },
      related: {
        services: [
          {name:'Business Intelligence',href:'business-intelligence.html'},
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'API Integration',href:'api-integration.html'}
        ],
        solutions: [
          {name:'Dashboard Solutions',href:'business-intelligence.html'},
          {name:'Enterprise Applications',href:'enterprise-solutions.html'}
        ],
        industries: [
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Logistics',href:'logistics-solutions.html'}
        ]
      }
    },
    'business-intelligence': {
      rootCause: {
        title: 'Why BI Initiatives Fail',
        items: [
          {icon:'📂',t:'Data Silos',d:'Critical data locked in disconnected systems with no integration layer.'},
          {icon:'🔧',t:'Over-Engineering',d:'Complex data warehouses that take months to build and are hard to change.'},
          {icon:'👤',t:'IT Bottleneck',d:'Business users dependent on technical teams for every report or change.'},
          {icon:'📊',t:'Vanity Metrics',d:'Dashboards showing impressive numbers that do not drive decisions.'},
          {icon:'💸',t:'Expensive Licensing',d:'Enterprise BI tools with high costs and poor fit for actual needs.'},
          {icon:'🔄',t:'Stale Data',d:'Reports based on batch updates from yesterday rather than real-time feeds.'}
        ]
      },
      related: {
        services: [
          {name:'AI Solutions',href:'ai-solutions.html'},
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'Web Development',href:'web-development.html'}
        ],
        solutions: [
          {name:'Dashboard Solutions',href:'business-intelligence.html'},
          {name:'SaaS Platforms',href:'saas-development.html'}
        ],
        industries: [
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Logistics',href:'logistics-solutions.html'}
        ]
      }
    },
    'cloud-solutions': {
      rootCause: {
        title: 'Why Cloud Migrations Fail',
        items: [
          {icon:'🏗️',t:'Lift-and-Shift Only',d:'Moving on-prem problems to the cloud without re-architecting for cloud-native patterns.'},
          {icon:'📋',t:'No Governance',d:'Teams spinning up resources without cost controls, tagging, or security policies.'},
          {icon:'🔒',t:'Security Gaps',d:'Default configurations left unchanged, exposing data and systems publicly.'},
          {icon:'👥',t:'Skill Shortage',d:'Teams trained on on-prem infrastructure struggling with cloud paradigms.'},
          {icon:'💸',t:'Cost Surprise',d:'Bills growing unchecked because nobody monitors usage or right-sizes.'},
          {icon:'🔗',t:'Vendor Lock-In',d:'Over-reliance on proprietary services making future flexibility impossible.'}
        ]
      },
      related: {
        services: [
          {name:'Web Development',href:'web-development.html'},
          {name:'API Integration',href:'api-integration.html'},
          {name:'AI Solutions',href:'ai-solutions.html'}
        ],
        solutions: [
          {name:'SaaS Platforms',href:'saas-development.html'},
          {name:'Enterprise Applications',href:'enterprise-solutions.html'}
        ],
        industries: [
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Education',href:'education-solutions.html'}
        ]
      }
    },
    'defect-resolution': {
      rootCause: {
        title: 'Why Bugs Keep Coming Back',
        items: [
          {icon:'🔍',t:'No Root Cause Analysis',d:'Fixing symptoms without understanding why the defect occurred in the first place.'},
          {icon:'🧪',t:'Insufficient Test Coverage',d:'Gaps in automated tests allowing regressions to slip through undetected.'},
          {icon:'📋',t:'Poor Triage Process',d:'No systematic way to prioritize, reproduce, and assign defects efficiently.'},
          {icon:'🔄',t:'Technical Debt',d:'Accumulated shortcuts making code fragile and changes unpredictable.'},
          {icon:'👥',t:'Knowledge Silos',d:'Only one person understands the code, creating bottlenecks and bus-factor risk.'},
          {icon:'📊',t:'No Metrics',d:'No visibility into defect trends, recurrence patterns, or resolution times.'}
        ]
      },
      related: {
        services: [
          {name:'Web Development',href:'web-development.html'},
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'Documentation Services',href:'documentation-services.html'}
        ],
        solutions: [
          {name:'Enterprise Applications',href:'enterprise-solutions.html'},
          {name:'SaaS Platforms',href:'saas-development.html'}
        ],
        industries: [
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Logistics',href:'logistics-solutions.html'}
        ]
      }
    },
    'documentation-services': {
      rootCause: {
        title: 'Why Documentation Efforts Fail',
        items: [
          {icon:'📅',t:'Always Last Priority',d:'Documentation deferred until after launch and then never written.'},
          {icon:'📝',t:'Wrong Authors',d:'Developers writing docs for other developers, not for the actual audience.'},
          {icon:'🔄',t:'Instantly Outdated',d:'Static documents disconnected from the codebase they describe.'},
          {icon:'📂',t:'No Structure',d:'Random wikis and scattered files with no consistent format or navigation.'},
          {icon:'🎯',t:'No Purpose',d:'Documentation created to check a box rather than solve a user problem.'},
          {icon:'👥',t:'No Ownership',d:'Nobody responsible for keeping documentation accurate and current.'}
        ]
      },
      related: {
        services: [
          {name:'API Integration',href:'api-integration.html'},
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'Defect Resolution',href:'defect-resolution.html'}
        ],
        solutions: [
          {name:'Enterprise Applications',href:'enterprise-solutions.html'},
          {name:'SaaS Platforms',href:'saas-development.html'}
        ],
        industries: [
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Education',href:'education-solutions.html'}
        ]
      }
    },
    'api-integration': {
      rootCause: {
        title: 'Why Integration Projects Fail',
        items: [
          {icon:'📋',t:'No Integration Strategy',d:'Point-to-point connections creating a fragile web of dependencies.'},
          {icon:'🔄',t:'Tight Coupling',d:'Systems locked together so tightly that changing one breaks others.'},
          {icon:'📊',t:'No Data Governance',d:'Inconsistent formats and missing validation causing silent data corruption.'},
          {icon:'🔐',t:'Security Shortcuts',d:'API keys shared in emails, no rate limiting, no audit trails.'},
          {icon:'📝',t:'Undocumented APIs',d:'Tribal knowledge required to understand how integrations work.'},
          {icon:'🔧',t:'Manual Processes',d:'Human intervention required for data sync, retry, and error handling.'}
        ]
      },
      related: {
        services: [
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'Web Development',href:'web-development.html'},
          {name:'Documentation Services',href:'documentation-services.html'}
        ],
        solutions: [
          {name:'Enterprise Applications',href:'enterprise-solutions.html'},
          {name:'E-Commerce Solutions',href:'ecommerce-development.html'}
        ],
        industries: [
          {name:'Logistics',href:'logistics-solutions.html'},
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Healthcare',href:'healthcare-solutions.html'}
        ]
      }
    },
    'saas-development': {
      rootCause: {
        title: 'Why SaaS Products Struggle',
        items: [
          {icon:'🏗️',t:'Monolithic Architecture',d:'Single codebase that cannot scale individual components independently.'},
          {icon:'💰',t:'No Unit Economics',d:'Building features without understanding cost-per-tenant or margin impact.'},
          {icon:'🔒',t:'Security Afterthought',d:'Adding tenant isolation and compliance after the product is built.'},
          {icon:'📋',t:'Feature Overload',d:'Building everything at once instead of validating with an MVP first.'},
          {icon:'🔧',t:'Manual Operations',d:'No automation for provisioning, billing, or customer lifecycle management.'},
          {icon:'📈',t:'Cannot Scale',d:'Architecture that works for 10 customers but breaks at 1,000.'}
        ]
      },
      related: {
        services: [
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'API Integration',href:'api-integration.html'},
          {name:'AI Solutions',href:'ai-solutions.html'}
        ],
        solutions: [
          {name:'Enterprise Applications',href:'enterprise-solutions.html'},
          {name:'Dashboard Solutions',href:'business-intelligence.html'}
        ],
        industries: [
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Education',href:'education-solutions.html'},
          {name:'Healthcare',href:'healthcare-solutions.html'}
        ]
      }
    },
    'enterprise-solutions': {
      rootCause: {
        title: 'Why Enterprise Software Projects Fail',
        items: [
          {icon:'📋',t:'Unclear Requirements',d:'Stakeholders with conflicting needs and no single source of truth.'},
          {icon:'🏢',t:'Legacy Lock-In',d:'Existing systems too risky to replace and too expensive to maintain.'},
          {icon:'👥',t:'Change Resistance',d:'End users rejecting new systems because they were not involved in design.'},
          {icon:'🔗',t:'Integration Complexity',d:'Dozens of existing systems that must work together seamlessly.'},
          {icon:'📅',t:'Multi-Year Timelines',d:'Big-bang projects that deliver value too late and cost overrun.'},
          {icon:'🔐',t:'Compliance Burden',d:'Regulatory requirements discovered mid-project causing costly rework.'}
        ]
      },
      related: {
        services: [
          {name:'Cloud Solutions',href:'cloud-solutions.html'},
          {name:'API Integration',href:'api-integration.html'},
          {name:'Business Intelligence',href:'business-intelligence.html'}
        ],
        solutions: [
          {name:'SaaS Platforms',href:'saas-development.html'},
          {name:'Dashboard Solutions',href:'business-intelligence.html'}
        ],
        industries: [
          {name:'Healthcare',href:'healthcare-solutions.html'},
          {name:'Finance',href:'fintech-solutions.html'},
          {name:'Logistics',href:'logistics-solutions.html'}
        ]
      }
    }
  };

  // Detect current page
  var page = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  var data = SERVICE_DATA[page];
  if (!data) return;

  // Build Root Cause section HTML
  function buildRootCause(rc) {
    var items = rc.items.map(function(i) {
      return '<div class="highlight-box" style="background:rgba(245,158,11,0.05);border-color:rgba(245,158,11,0.3);">' +
        '<h4 style="color:#F59E0B;">' + i.icon + ' ' + i.t + '</h4><p>' + i.d + '</p></div>';
    }).join('');
    return '<section class="content-section" style="padding:5rem 0;">' +
      '<div class="content-container">' +
        '<div class="section-head center"><div class="tag-blue">ROOT CAUSE</div>' +
        '<h2 class="sec-title">' + rc.title + '</h2>' +
        '<p style="color:#94A3B8;max-width:700px;margin:0 auto;">Understanding why problems persist helps us solve them permanently</p></div>' +
        '<div class="highlight-boxes" style="margin-top:3rem;">' + items + '</div>' +
      '</div></section>';
  }

  // Build Related section HTML
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
          '<h4 style="color:#E2E8F0;margin-bottom:1rem;">Industries We Serve</h4>' +
          '<div style="display:flex;flex-wrap:wrap;gap:0.75rem;">' + linkList(rel.industries) + '</div>' +
        '</div>' +
      '</div></section>';
  }

  // Insert sections into the page at the right positions
  document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.content-section');
    if (sections.length < 2) return;

    // Find the OUR SOLUTION section (insert Root Cause before it)
    var solutionSection = null;
    sections.forEach(function(s) {
      var tag = s.querySelector('.tag-blue');
      if (tag && tag.textContent.trim() === 'OUR SOLUTION') solutionSection = s;
    });

    // Insert Root Cause before OUR SOLUTION
    if (solutionSection && data.rootCause) {
      var rcDiv = document.createElement('div');
      rcDiv.innerHTML = buildRootCause(data.rootCause);
      solutionSection.parentNode.insertBefore(rcDiv.firstElementChild, solutionSection);
    }

    // Find the CTA section (the gradient section with the consultation button)
    var allSections = document.querySelectorAll('section');
    var finalCta = null;
    allSections.forEach(function(s) {
      if (s.style.background && s.style.background.indexOf('linear-gradient(135deg') > -1) {
        finalCta = s;
      }
    });

    // Insert Related section before the final CTA
    if (finalCta && data.related) {
      var rDiv = document.createElement('div');
      rDiv.innerHTML = buildRelated(data.related);
      finalCta.parentNode.insertBefore(rDiv.firstElementChild, finalCta);
    }
  });
})();
