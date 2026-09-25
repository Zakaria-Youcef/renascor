# Renascor Website (v2 — Consalt Template Layout)

A multi-page static business website for Renascor, restyled to match the layout and
UI/UX flow of the "Consalt" Next.js consulting template (index10 demo), while keeping
Renascor's navy-and-gold brand identity.

## What changed vs. v1

- Home page now uses a split hero with a circular "core" visual and floating icon
  badges (matching the template's decorative hero pattern), instead of a plain banner.
- About section uses a split layout with an "experience badge" overlay (10+ Years),
  a checklist grid, and a call-to-action row with a phone icon block.
- Services use circular dashed-border icon badges inside white cards on a dark section
  background (matching the template's service block styling).
- Added a stats band with staggered "raised" boxes (alternating vertical offset),
  a benefits 2x2 grid with numbered blocks, an insights/blog-style section
  (1 featured + 3 list items), and a two-column CTA banner — all present in the
  original Consalt template structure.
- Contact page now includes clickable "subject" pill tabs above the form
  (Consulting / Business Development / International Trade / etc.), matching the
  template's contact tab pattern, plus a dark info band with 4 contact detail blocks.
- Every dark section, badge, and accent still uses the Renascor palette:
  #0B1D2D, #122C44, #D4AF37, #E6C785, #F2F2F2 — no template colors were kept.

## Structure

renascor-website/
  index.html          Home — hero, about preview, services, stats, benefits, insights, CTA
  about.html           About — story, approach steps, values
  services.html         All services, process steps, benefits, CTA
  contact.html          Contact — subject tabs, form, info band
  assets/
    css/style.css       All styling
    js/script.js        Mobile nav toggle, subject tab switching, contact form handler

## Logo

Header and hero visuals use a placeholder gold circle with "R". Export your real
phoenix logo as a transparent PNG to assets/images/logo.png and swap it into:
  - .brand-logo (header)
  - .hero-visual-core (home hero)
  - .about-visual-frame .brand-logo (about section)
  - .contact-visual .brand-logo (contact page)

## Deploying to Hostinger

Upload the folder contents into public_html via File Manager, FTP, or SSH — no
build step needed, works on any Hostinger shared/business plan as-is.

## Adding a Login Later

Same plan as before: add login.php + MySQL via hPanel, protect pages with
session checks. No hosting plan change required.
