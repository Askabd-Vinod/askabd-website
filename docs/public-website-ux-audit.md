# AskABD Public Website — UX/Technical Audit

**Date:** 2026-08-22 | **Branch:** Dev | **Status:** In progress — real fixes applied and verified locally, none deployed

This audit records every concrete issue found, whether it was fixed, and — where a fix requires a business/content decision rather than a technical correction — what the recommendation is, per the standing rule: never silently guess on something a real business owner should confirm.

---

## §1. Fixed this pass (objective bugs, safe to fix without business sign-off)

### 1. Contact form always claimed success, even on failure — **highest severity finding on the site**
`contact.html`'s submit handler showed the identical "Request Sent Successfully!" message in both the `.then()` and `.catch()` branches of the fetch to FormSubmit — i.e. unconditionally. A real prospect whose message failed to send (network error, ad-blocker, FormSubmit outage, CORS issue) was told it succeeded, with zero indication anything went wrong and no way to retry or reach out another way.
**Fix:** now checks `response.ok`, throws on non-2xx, shows a distinct error state on failure (with a `mailto:hello@askabd.com` fallback and a real reason: "this looks like a network or service issue on our end, not something wrong with what you entered"), and disables/relabels the submit button while the request is in flight so double-submits aren't possible.
**Verified:** page loads with zero console errors; form fields and structure intact. **Not verified via a real submission** — that would send a real email through FormSubmit, which needs your explicit go-ahead (see "Needs your input" below).

### 2. Sitewide nav item labeled "Resources" — actually linked to Contact
All 35 real pages had a header nav item reading "Resources" whose `href` was `contact.html` — the exact same destination as the separate, correctly-labeled "Get Free Consultation" CTA button and the footer's "Contact Us" link. A visitor clicking "Resources" expecting articles/guides/documentation would land on the contact form with no explanation.
**Fix:** relabeled to "Contact" across all 35 pages (mechanical, exact-string replacement, verified zero remaining "Resources" mislabels). The link itself and its destination were not removed or changed — only the label now matches reality.

### 3. Four e-commerce sub-pages shared one wrong, duplicated `<title>`
`ecommerce-inventory.html`, `ecommerce-performance.html`, and `ecommerce-personalization.html` all carried the literal title "Secure Payment Integration – E-Commerce – AskABD Technologies" (the correct title for a different, sibling page, `ecommerce-payments.html`) — a clear copy-paste error. Google would have seen 4 pages with an identical `<title>`, and all 3 browser tabs/search results would have shown the wrong topic. Each page's `<meta name="description">` was already correct and unique — only `<title>` and `og:title` were wrong, confirming this was a copy-paste slip rather than a deeper content problem.
**Fix:** derived accurate, unique titles from each page's real H1/description (Real-Time Inventory Management / E-Commerce Performance Optimization / AI-Powered Personalization), matching the sibling pages' established title pattern.

### 4. Mojibake (double-encoded UTF-8) en-dash in 15 page titles
15 pages (every service/solution/industry detail page except the newest e-commerce sub-pages) had `â€“` — the classic signature of a UTF-8 en-dash re-encoded as if it were Latin-1 — literally baked into their `<title>` and `og:title` tags. This would render as broken characters in every browser tab and every Google search result for these pages: e.g. "Web Development â€“ AskABD Technologies" instead of "Web Development – AskABD Technologies".
**Fix:** bulk-corrected the byte sequence to a real en-dash (–) across all 15 files. Confirmed no other body content was affected (checked; corruption was contained to the two `<title>`/`og:title` occurrences per file).

### 5. Sitemap.xml missing 6 (then 10) live, real, fully-linked pages
The 6 e-commerce sub-pages (ecommerce-checkout, -inventory, -mobile, -payments, -performance, -personalization) — and later the 4 new platform pages built in finding §6 below — were real, live, cross-linked pages absent from sitemap.xml, meaning Google was never told they existed.
**Fix:** all 10 added to sitemap.xml, using the extension-less convention (matching the file's own 100%-consistent existing pattern — this is separate from the canonical-tag ambiguity in §2.A, since it only extends sitemap.xml's own established convention to itself). XML re-validated as well-formed after the edit.

### 6. 4 of 10 e-commerce solution tiles led to real 404s — plus a fully dead 409-line modal system
`ecommerce-development.html`'s 10 solution cards (`.srv-card`) are real `<a href>` links — evidence of a prior, real migration away from a JS-modal interaction pattern (confirmed via git log: "tile links to full page instead of contact") toward dedicated pages, which is a genuinely better pattern for this much content. But 4 of the 10 tiles pointed to pages that were never created — `ecommerce-shopify.html`, `ecommerce-woocommerce.html`, `ecommerce-magento.html`, `ecommerce-custom.html` — meaning a real visitor clicking any of those 4 tiles on the live site hit a genuine 404. Caught only by actually clicking through the interactive component in a real browser, exactly what the mandatory Playwright-style pass exists to catch.
**Fix:** built all 4 missing pages from scratch, matching the established sibling-page template exactly (hero, stat strip, Common Challenges, Our Solution, Guarantees, CTA, Related Solutions, shared footer) with real, accurate, non-fabricated content about each platform (Shopify, WooCommerce, Magento development, and fully-custom platform builds). Also removed the now-100%-orphaned `js/ecommerce-modals.js` (409 lines — its `.srv-card[data-service]` trigger selector matched zero elements since the cards no longer carry `data-service`) and 10 empty placeholder `<div class="service-modal">` elements left over from the old interaction pattern. All 10 tiles verified live to resolve to real, console-clean, overflow-clean pages.

---

## §2. Needs your explicit input before I proceed

### A. Canonical URL convention is genuinely inconsistent, and I can't safely guess
Of the 14 pages that have a `<link rel="canonical">` at all, 10 use the `.html` suffix (e.g. `.../about.html`) and 4 omit it (e.g. `.../services`) — matching `sitemap.xml`, which is 100% consistent in omitting `.html` across all 27 of its entries. No `_redirects` file exists in the repo to confirm which URL shape Cloudflare Pages actually serves as canonical (that's a dashboard-level "clean URLs" toggle I can't see from the repo). Picking the wrong convention and bulk-applying it to the ~22 pages currently missing a canonical tag at all could actively hurt SEO rather than help it, so I have not touched this yet.
**My recommendation:** match `sitemap.xml`'s clean-URL convention (no `.html`) everywhere, since it's the one 100%-consistent existing signal — but only after confirming Cloudflare Pages' clean-URL setting is actually on. Let me know if you want me to proceed on that assumption, or if you can confirm the Cloudflare setting directly.

### B. Contact form's real submission path is untested
I fixed the success/failure logic but have not actually submitted the form — that would send a real email through FormSubmit to hello@askabd.com, which I treat as sending a message on your behalf and won't do without your go-ahead. Say the word and I'll submit a clearly-marked test entry and confirm both the success path and (by temporarily pointing at a bad URL) the new failure path actually work end-to-end.

### C. Marketing statistics on the e-commerce sub-pages read as demonstrated results, not illustrative figures
`ecommerce-performance.html`, `-personalization.html`, and their siblings each open with a stat strip — e.g. "35% More Revenue / 4.2x Engagement / 28% Higher AOV / 3x Repeat Visits" on the Personalization page — presented as a factual data callout, not softened as an industry benchmark or clearly framed as illustrative. Per the standing "never invent statistics/success rates" rule, I want your confirmation before touching these: were these numbers deliberately chosen as approved industry-benchmark figures, or should they be reframed as capability statements instead (e.g. "Personalized recommendations typically increase revenue and repeat visits" without a specific unverified percentage)? I have not changed any of this copy — flagging only.

### D. Long-standing pending decisions carried over from the prior audit (still unresolved)
- Footer "Blog" → routes to index.html (no blog page exists)
- Footer "Careers" → routes to contact.html (no careers page exists)
- Footer "⚡" social icon → `href="#"`, no destination
- Whether `products.html` / `product-journey.html` should be indexed (added to sitemap) or kept excluded pending content approval

---

## §3. Found, not yet fixed (queued, no business decision needed)

- ~22 pages missing `<link rel="canonical">` entirely (blocked on §2.A above)
- Structured data (JSON-LD) present via `seo-performance.js` injection on sub-pages, but only `Organization` — no page-specific schema (Service, FAQPage, BreadcrumbList is present per the progress doc, but no per-service `Service` schema)
- No dedicated page exists for "Cyber Security & DevSecOps", despite it being an option in the contact form's "Service Interested In" dropdown — a visitor selecting it has nowhere to learn more first. Recommend either a dedicated page or removing/relabeling the option; flagging rather than deciding unilaterally since it's new-content scope, not a bug fix.
- Content-injection-via-JS architecture (see inventory doc §4) — recommend migrating injected sections into static HTML during the redesign, for SEO/testability/consistency reasons.

**Fixed since the initial pass (see full detail in §1.5 and §1.6 above):** sitemap now includes all 10 e-commerce pages; the 4 broken solution-tile links on ecommerce-development.html were real 404s on a live page, now fixed by building the 4 missing pages and removing the dead modal system that preceded the current link-based pattern.

---

## §4. Confirmed clean (re-verified, not just carried over from the prior audit)

- **Zero broken internal links** across all 36 files (fresh check, not assumed)
- **Zero orphaned pages** other than the deliberately-unlinked Google verification file
- **Zero native `alert()`/`confirm()`/`prompt()` calls** anywhere in the JS (grep-verified — this codebase never had the anti-pattern seen elsewhere in the platform's own Operations Centre)
- Accessibility baseline (skip-link, focus-visible, ARIA on nav/footer/hamburger, lazy-loaded images, reduced-motion, forced-colors, print stylesheet, 44px touch targets) is already present sitewide per the prior audit — not yet independently re-verified page-by-page in this pass, queued for the Playwright sweep.

---

## §5. Priority-ordered remaining work (per the master brief's scope)

1. ~~Add the missing e-commerce pages to sitemap.xml~~ — done (10 pages added)
2. ~~Playwright pass across every real page~~ — done, see `public-website-test-matrix.md` (39/39 pages pass: 0 console errors, 0 broken images, 0 horizontal overflow at 1440px, sitewide)
3. Resolve §2.A (canonical convention) — still needs your input
4. Resolve §2.B (real contact-form submission test) and §2.C (marketing-statistic framing) — still needs your input
5. The much larger "premium visual redesign" scope (shared design system pass, animation system, business-first copy pass, SDLC story, problem→solution navigation) — this is a substantial, multi-page visual/content undertaking. I'll scope and sequence it explicitly now that the technical-correctness pass is complete and verified, rather than starting a simultaneous 35+-page visual overhaul blind.
