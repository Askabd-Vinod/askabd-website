# AskABD Public Website — Complete Inventory

**Repository:** askabd-website
**Branch:** Dev (production is `main`, currently behind Dev by 46 files / +3370/-74 lines)
**Date:** 2026-08-22
**Architecture:** Static HTML/CSS/JS, deployed on Cloudflare Pages. No build step, no framework.
**This document supersedes/extends** `docs/website-audit.md` (2026-07-28), which is now out of date — it predates 7 pages added since (6 new e-commerce sub-pages + this file).

---

## 1. Page Inventory (39 real pages + 1 verification file = 40 HTML files)

**Updated 2026-08-22 (later same pass):** 4 pages were added after this document was first written — `ecommerce-shopify.html`, `ecommerce-woocommerce.html`, `ecommerce-magento.html`, `ecommerce-custom.html` — built to fix 4 real, live 404s (solution tiles on ecommerce-development.html linked to them before they existed). See `public-website-ux-audit.md` §1.6 for the full finding. All sitemap/footer/nav gaps noted below for the 6 pre-existing e-commerce sub-pages have been fixed (sitemap now includes all 10).

| # | Page | Type | In global nav | In sitemap.xml | In footer |
|---|------|------|:---:|:---:|:---:|
| 1 | index.html | Home | ✅ | ✅ | — |
| 2 | services.html | Services listing | ✅ | ✅ | — |
| 3 | solutions.html | Solutions listing | ✅ | ✅ | — |
| 4 | products.html | Products (internal platforms) | ✅ | ❌ (deliberate — pending approval) | — |
| 5 | product-journey.html | Engineering milestones | ❌ (linked from products.html) | ❌ (deliberate) | — |
| 6 | industries.html | Industries listing | ✅ | ✅ | — |
| 7 | portfolio.html | Portfolio | ✅ | ✅ | — |
| 8 | about.html | Company info | ✅ | ✅ | ✅ Company |
| 9 | contact.html | Contact form | ✅ (as "Contact", see §3 fix) | ✅ | ✅ Company |
| 10 | process.html | Our Process | ❌ (footer only) | ✅ | ✅ Company |
| 11 | web-development.html | Service | ❌ (via services.html) | ✅ | ✅ Services |
| 12 | mobile-app-development.html | Service | ❌ | ✅ | ✅ Services |
| 13 | ai-solutions.html | Service | ❌ | ✅ | ✅ Services |
| 14 | business-intelligence.html | Service | ❌ | ✅ | ✅ Services (as "Business Analysis" + "Dashboard Solutions" — 2 footer links, 1 page) |
| 15 | cloud-solutions.html | Service | ❌ | ✅ | ❌ (not in footer at all) |
| 16 | defect-resolution.html | Service | ❌ | ✅ | ✅ Services |
| 17 | documentation-services.html | Service | ❌ | ✅ | ✅ Services |
| 18 | api-integration.html | Service | ❌ | ✅ | ✅ Services (as "System Integration") + ✅ Solutions (as "Data Migration" AND "API Integrations" — 3 footer links, 1 page) |
| 19 | ecommerce-development.html | Solution | ❌ | ✅ | ✅ Solutions |
| 20 | ecommerce-checkout.html | Solution sub-page | ❌ (linked from ecommerce-development + siblings) | ✅ (fixed) | ❌ |
| 21 | ecommerce-inventory.html | Solution sub-page | ❌ | ✅ (fixed) | ❌ |
| 22 | ecommerce-mobile.html | Solution sub-page | ❌ | ✅ (fixed) | ❌ |
| 23 | ecommerce-payments.html | Solution sub-page | ❌ | ✅ (fixed) | ❌ |
| 24 | ecommerce-performance.html | Solution sub-page | ❌ | ✅ (fixed) | ❌ |
| 25 | ecommerce-personalization.html | Solution sub-page | ❌ | ✅ (fixed) | ❌ |
| 25a | ecommerce-shopify.html *(new)* | Solution sub-page | ❌ (linked from ecommerce-development) | ✅ | ❌ |
| 25b | ecommerce-woocommerce.html *(new)* | Solution sub-page | ❌ | ✅ | ❌ |
| 25c | ecommerce-magento.html *(new)* | Solution sub-page | ❌ | ✅ | ❌ |
| 25d | ecommerce-custom.html *(new)* | Solution sub-page | ❌ | ✅ | ❌ |
| 26 | saas-development.html | Solution | ❌ | ✅ | ✅ Solutions |
| 27 | enterprise-solutions.html | Solution | ❌ | ✅ | ✅ Solutions |
| 28 | healthcare-solutions.html | Industry | ❌ | ✅ | ✅ Industries |
| 29 | fintech-solutions.html | Industry | ❌ | ✅ | ✅ Industries (as "Finance & E-Commerce") |
| 30 | logistics-solutions.html | Industry | ❌ | ✅ | ✅ Industries |
| 31 | education-solutions.html | Industry | ❌ | ✅ | ✅ Industries |
| 32 | realestate-solutions.html | Industry | ❌ | ✅ | ✅ Industries |
| 33 | retail-solutions.html | Industry | ❌ | ✅ | ❌ (not in footer at all) |
| 34 | privacy.html | Legal | ❌ (footer only) | ✅ | ✅ legal bar |
| 35 | terms.html | Legal | ❌ (footer only) | ✅ | ✅ legal bar |
| 36 | google88c60c79e6926ace.html | Search-console verification | ❌ (deliberate, not meant to be linked) | ❌ (deliberate) | ❌ |

**Link-health check (2026-08-22, full re-verification after this pass's fixes):** every `href="*.html"` across all 40 files resolves to an existing file. Zero broken internal links. Zero orphaned pages other than the (deliberately-unlinked) Google verification file. (Earlier in this same pass, before the 4 new pages were built, 4 links were genuinely broken — see `public-website-ux-audit.md` §1.6.)

---

## 2. Navigation Structure

### Header (identical on all 35 real pages)
```
Home | Services | Solutions | Products | Industries | Portfolio | About Us | Contact
```
Plus: "Get Free Consultation →" CTA button (→ contact.html), mobile hamburger toggle.

**Fixed 2026-08-22:** this nav item previously read "Resources" while linking to contact.html on all 35 pages — a real, sitewide mislabeled nav item indistinguishable from the site's real Contact page, duplicating it three ways (mislabeled nav item + CTA button + footer link) while delivering zero actual resources content. Relabeled to "Contact" to match its real destination — see `public-website-ux-audit.md` §1.

### Footer (identical structure on all pages)
1. **Brand + social** — logo, tagline, LinkedIn / X / Facebook (real links) + a 4th "⚡" icon with `href="#"` (placeholder, no destination — flagged, pending business decision)
2. **Services** (8 links)
3. **Solutions** (6 links — 2 of which point to the same api-integration.html page under different labels: "Data Migration" and "API Integrations")
4. **Industries** (5 links — retail-solutions.html and cloud-solutions.html exist as real pages but are absent from the footer entirely)
5. **Company** (About Us, Our Process, Careers → contact.html, Blog → index.html, Contact Us)
6. **Contact** (address, phone, email, site URL)

### Known pending business decisions (carried over from prior audit, still unresolved)
- Footer "Blog" → currently routes to index.html (no blog exists)
- Footer "Careers" → currently routes to contact.html (no careers page exists)
- Footer "⚡" social icon → `href="#"`, no real destination
- `products.html` / `product-journey.html` → live in nav but excluded from sitemap.xml pending content approval (placeholder/internal-platform content)

---

## 3. Forms Inventory

**Exactly one form exists on the entire site:** the contact form on `contact.html`. It is the site's sole lead-generation mechanism.

| Field | Type | Required | Label | Helper text |
|---|---|:---:|---|---|
| Full Name | text | ✅ | ✅ | placeholder only |
| Email Address | email | ✅ | ✅ | placeholder only |
| Company Name | text | — | ✅ | placeholder only |
| Phone Number (+ country code select) | tel | — | ✅ | placeholder + input-masking (digits only) |
| Service Interested In | select | ✅ | ✅ | — |
| Project Budget (USD) | select | — | ✅ | — |
| Project Details | textarea | ✅ | ✅ | placeholder only |

Submission target: `https://formsubmit.co/ajax/hello@askabd.com` (third-party form-relay service, no backend of AskABD's own).

**Fixed 2026-08-22 (highest-severity bug found on the whole site):** the submit handler previously showed "Request Sent Successfully!" in both the success AND the failure branch of the fetch — i.e. unconditionally, regardless of whether the message actually reached FormSubmit. A real prospect whose submission failed (network issue, ad-blocker, FormSubmit outage) was told it succeeded, with no error and no recovery path. Now checks `response.ok`, shows a real error state with a `mailto:` fallback on failure, and disables/relabels the submit button while in flight. See `public-website-ux-audit.md` §1.

---

## 4. CSS/JS Asset Inventory

| File | Lines | Purpose |
|---|---:|---|
| css/style.css | 122 | Base/reset |
| css/home.css | 621 | Homepage-specific |
| css/pages.css | 458 | Shared sub-page layout |
| css/services.css | 396 | Service/solution/industry detail pages |
| css/products.css | 281 | Products + Product Journey pages |
| css/accessibility.css | 120 | Focus states, touch targets, print, reduced-motion, forced-colors |
| css/responsive-fixes.css | 122 | Targeted breakpoint patches |
| js/main.js | 169 | Nav, hamburger, scroll-reveal, click handlers |
| js/accessibility.js | 86 | Skip-link, ARIA injection, modal dialog attributes |
| js/seo-performance.js | 39 | JSON-LD injection (Organization + BreadcrumbList), CLS fixes, `rel=noopener` |
| js/service-enhancements.js | 463 | Injects Root Cause / Business Benefits / Related-links sections into 10 service/solution pages |
| js/industry-enhancements.js | 297 | Same pattern for 6 industry pages |
| js/ecommerce-modals.js | 409 | 10 detail modals on ecommerce-development.html |
| js/products-data.js | 91 | Data model for Products page |
| js/products-render.js | 139 | Product card rendering |
| js/journey-render.js | 144 | Timeline rendering for Product Journey page |

**Architectural note for the redesign:** a meaningful share of "content" (Root Cause / Business Benefits / Related Services sections on 16 pages, all e-commerce modals, all accessibility ARIA attributes, all JSON-LD) is injected client-side via these JS files rather than present in the raw HTML. This is a real design-system risk worth resolving during the redesign: content that only exists after JS execution is more fragile for SEO crawlers that don't fully render JS, harder to keep visually consistent, and harder to unit-test than the same content authored directly in HTML. Recommend inlining these into the HTML templates as part of the redesign rather than perpetuating the injection pattern.

---

## 5. External Integrations

| Integration | Where | Notes |
|---|---|---|
| formsubmit.co | contact.html | Third-party form relay, no CAPTCHA (`_captcha=false`) |
| Google Fonts (Inter) | all pages | render-blocking, `font-display:swap` present |
| LinkedIn / X / Facebook | footer + contact page | real, verified working links |
| Google Search Console | google88c60c79e6926ace.html | verification file only |

---

## 6. Deployment

- Cloudflare Pages, `.cloudflare-pages` config present (no build command — static passthrough)
- No `_redirects` or `_headers` file exists in the repo
- Whether Cloudflare's dashboard has "clean URLs" (strip `.html`) enabled cannot be determined from the repo alone — **this is a real open question with SEO consequences**, see `public-website-ux-audit.md` §1 (canonical URL inconsistency).
