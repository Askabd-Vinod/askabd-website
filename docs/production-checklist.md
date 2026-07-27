# Production Checklist

**Repository:** askabd-website  
**Branch:** dev  
**Status:** Development Testing Phase  
**Deployment Status:** Not Deployed  
**Merge Status:** Not Merged  

**Purpose:** Items to verify before merging dev → main and deploying.  
**Current Status:** NOT READY — Awaiting owner approval

---

## Pre-Merge Verification

### Business Decisions Required
- [ ] Confirm "Products" navigation link should go live
- [ ] Confirm products.html should be accessible (or noindex it)
- [ ] Confirm product-journey.html should be accessible (or noindex it)
- [ ] Decide on footer "Blog" link destination
- [ ] Decide on footer "Careers" link destination
- [ ] Decide on footer ⚡ social icon destination
- [ ] Provide approved products/milestones content for data file

### Technical Verification
- [ ] All pages load without JS errors (browser console check)
- [ ] Mobile responsive tested on actual devices
- [ ] Accessibility: keyboard-only navigation test
- [ ] Accessibility: screen reader spot check (VoiceOver/NVDA)
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge
- [ ] All internal links resolve (no 404s)
- [ ] Contact form still submits correctly
- [ ] Modal open/close works on all enhanced pages
- [ ] Service enhancement sections render in correct position
- [ ] Industry enhancement sections render in correct position
- [ ] Scroll animations work smoothly
- [ ] Page load performance acceptable (<3s on 3G)
- [ ] No console errors or warnings

### SEO Verification
- [ ] sitemap.xml is valid XML
- [ ] robots.txt allows crawling
- [ ] All pages have unique title and description
- [ ] Open Graph images accessible
- [ ] Canonical URLs correct

### Content Verification
- [ ] No placeholder text visible on any live page
- [ ] Products page has approved content (or is hidden)
- [ ] All phone numbers and emails correct
- [ ] Social links working

---

## Deployment Steps

1. Final review of all changes in develop branch
2. Merge develop → main (or create PR)
3. Cloudflare Pages will auto-deploy from main
4. Verify live site loads correctly
5. Check Google Search Console for any new errors
6. Submit updated sitemap to Google

---

## Rollback Plan

If issues are found post-deploy:
1. Revert the merge commit on main
2. Cloudflare Pages will auto-redeploy the previous version
3. Investigate in develop branch
4. Fix and re-deploy

---

## Post-Deploy Monitoring

- [ ] Check Cloudflare analytics for error spikes
- [ ] Monitor Google Search Console for crawl errors
- [ ] Test contact form submission
- [ ] Verify no broken images on live site
