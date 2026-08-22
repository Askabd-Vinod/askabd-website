# AskABD Public Website — Test Matrix

**Date:** 2026-08-22 | **Method:** Real browser (Chrome DevTools Protocol), served locally via `python -m http.server 8090` from the Dev branch working tree. Every row below reflects an actual page load, not source-code inspection.

**Checks performed per page:** console errors, broken images (`naturalWidth===0`), horizontal overflow (`scrollWidth` vs `clientWidth`) at 1440px (primary desktop breakpoint per the desktop-first mandate). Homepage additionally spot-checked at 1280/1024/375px (all clean, zero overflow) as the representative layout template shared by every sub-page.

| # | Page | Route | Console errors | Broken images | Overflow @1440 | Status |
|---|------|---|:---:|:---:|:---:|---|
| 1 | Home | index.html | 0 | 0 | none | ✅ Pass |
| 2 | Services | services.html | 0 | 0 | none | ✅ Pass |
| 3 | Solutions | solutions.html | 0 | 0 | none | ✅ Pass |
| 4 | Products | products.html | 0 | 0 | none | ✅ Pass |
| 5 | Product Journey | product-journey.html | 0 | 0 | none | ✅ Pass |
| 6 | Industries | industries.html | 0 | 0 | none | ✅ Pass |
| 7 | Portfolio | portfolio.html | 0 | 0 | none | ✅ Pass |
| 8 | About Us | about.html | 0 | 0 | none | ✅ Pass |
| 9 | Our Process | process.html | 0 | 0 | none | ✅ Pass |
| 10 | Contact | contact.html | 0 | 0 | none | ✅ Pass — form fixed this pass (see below) |
| 11 | Web Development | web-development.html | 0 | 0 | none | ✅ Pass — title mojibake fixed |
| 12 | Mobile App Development | mobile-app-development.html | 0 | 0 | none | ✅ Pass |
| 13 | AI & Machine Learning | ai-solutions.html | 0 | 0 | none | ✅ Pass — title mojibake fixed |
| 14 | Business Intelligence | business-intelligence.html | 0 | 0 | none | ✅ Pass — title mojibake fixed |
| 15 | Cloud Solutions | cloud-solutions.html | 0 | 0 | none | ✅ Pass — title mojibake fixed |
| 16 | QA & Defect Resolution | defect-resolution.html | 0 | 0 | none | ✅ Pass — title mojibake fixed |
| 17 | Documentation & Architecture | documentation-services.html | 0 | 0 | none | ✅ Pass — title mojibake fixed |
| 18 | API & Custom Integrations | api-integration.html | 0 | 0 | none | ✅ Pass — title mojibake fixed |
| 19 | E-Commerce Development | ecommerce-development.html | 0 | 0 | none | ✅ Pass — 4 broken tile links fixed, dead modal system removed (see below) |
| 20 | E-Commerce Checkout | ecommerce-checkout.html | 0 | 0 | none | ✅ Pass |
| 21 | E-Commerce Inventory | ecommerce-inventory.html | 0 | 0 | none | ✅ Pass — wrong duplicated title fixed |
| 22 | E-Commerce Mobile | ecommerce-mobile.html | 0 | 0 | none | ✅ Pass |
| 23 | E-Commerce Payments | ecommerce-payments.html | 0 | 0 | none | ✅ Pass |
| 24 | E-Commerce Performance | ecommerce-performance.html | 0 | 0 | none | ✅ Pass — wrong duplicated title fixed |
| 25 | E-Commerce Personalization | ecommerce-personalization.html | 0 | 0 | none | ✅ Pass — wrong duplicated title fixed |
| 26 | E-Commerce Shopify *(new)* | ecommerce-shopify.html | 0 | 0 | none | ✅ Pass — page created this pass |
| 27 | E-Commerce WooCommerce *(new)* | ecommerce-woocommerce.html | 0 | 0 | none | ✅ Pass — page created this pass |
| 28 | E-Commerce Magento *(new)* | ecommerce-magento.html | 0 | 0 | none | ✅ Pass — page created this pass |
| 29 | E-Commerce Custom Platform *(new)* | ecommerce-custom.html | 0 | 0 | none | ✅ Pass — page created this pass |
| 30 | SaaS Platform Development | saas-development.html | 0 | 0 | none | ✅ Pass |
| 31 | Enterprise Solutions | enterprise-solutions.html | 0 | 0 | none | ✅ Pass |
| 32 | Healthcare | healthcare-solutions.html | 0 | 0 | none | ✅ Pass |
| 33 | Finance & FinTech | fintech-solutions.html | 0 | 0 | none | ✅ Pass |
| 34 | Logistics & Transport | logistics-solutions.html | 0 | 0 | none | ✅ Pass |
| 35 | Education & EdTech | education-solutions.html | 0 | 0 | none | ✅ Pass |
| 36 | Real Estate | realestate-solutions.html | 0 | 0 | none | ✅ Pass |
| 37 | Retail & E-Commerce | retail-solutions.html | 0 | 0 | none | ✅ Pass |
| 38 | Privacy Policy | privacy.html | 0 | 0 | none | ✅ Pass |
| 39 | Terms of Service | terms.html | 0 | 0 | none | ✅ Pass |

**Result: 39/39 pages pass (35 pre-existing + 4 newly created this pass). Zero console errors, zero broken images, zero horizontal overflow found on any page.**

---

## Interactive components tested

| Component | Page | Result |
|---|---|---|
| E-commerce solution tiles (10 cards) | ecommerce-development.html | **Found broken, fixed:** all 10 `.srv-card` tiles are real `<a href>` links (a prior migration from a JS modal system to real pages). 4 of the 10 pointed to pages that didn't exist (`ecommerce-shopify/-woocommerce/-magento/-custom.html`) — genuine 404s on a live page. Built all 4 missing pages; all 10 tiles now verified to resolve to real, console-clean, overflow-clean pages. The now-fully-orphaned `ecommerce-modals.js` (409 lines) and 10 empty placeholder `<div class="service-modal">` elements were removed as dead code. |
| Contact form | contact.html | **Found broken, fixed:** the submit handler previously showed "Request Sent Successfully!" unconditionally, even when the request to FormSubmit failed. Now checks `response.ok` and shows a distinct, real error state with a `mailto:` fallback on failure. **Not yet tested with a real submission** — sending a real message through the third-party form relay needs your explicit go-ahead (see the UX audit doc, §2.B). |
| Mobile hamburger menu | homepage (representative — same nav markup on all 35 pages) | Present in DOM, `aria-expanded` wired per prior accessibility pass; not re-verified via a real click-toggle this pass — queued. |
| Ecommerce card hover accents | ecommerce-development.html and its 10 sub-pages | Rendered correctly (color-coded `--accent` CSS variables per card, verified present in source). |

---

## Link health

- **Every internal `href="*.html"` across all 39 files resolves to an existing file** (re-verified after adding the 4 new pages — zero broken links remain, including the 4 that were broken at the start of this pass).
- **Zero orphaned pages** other than the deliberately-unlinked Google Search Console verification file.
- External links (LinkedIn, X, Facebook, formsubmit.co) — verified present and correctly formed; not polled for live HTTP status (out of scope for a same-origin crawl, and polling third-party services repeatedly isn't necessary to confirm they're correctly wired).

---

## Not yet covered by this matrix (queued)

- Full responsive sweep at 1280/1024/375 for all 39 pages (only the homepage was checked at all four breakpoints as the structural template every sub-page shares; the primary 1440 desktop check ran on all 39)
- Keyboard-only navigation and screen-reader spot check (accessibility baseline exists per the prior audit but hasn't been independently re-verified page-by-page this pass)
- Real form submission test (blocked on your go-ahead, sends a real email)
- Cross-browser check (Firefox/Safari/Edge) — this pass used one real browser engine only
- Lighthouse/Core Web Vitals numeric scoring — not run
