# CARE Concrete & Corrosion Rehabilitation website

Static lead-generation website for CARE, a Sydney concrete repair and corrosion rehabilitation subcontractor.

## Pages

- `index.html` - main lead-generation homepage
- `about.html` - human, story-led About page
- `services.html` - services landing page
- `service-scanning-coring-cutting.html` - scanning, coring, cutting and preparation service page
- `service-concrete-corrosion-rehabilitation.html` - concrete and corrosion rehabilitation service page
- `service-hardened-concrete-sampling.html` - hardened concrete sampling service page
- `projects.html` - case-study index
- `case-study-equinix-core-drilling.html` - live data centre core drilling case study
- `case-study-14-collins-st-ives-crack-injection.html` - 14 Collins Road St Ives crack injection case study
- `blog.html` - SEO/AIO-focused technical article hub
- `robots.txt`, `sitemap.xml`, `llms.txt` - crawler and AI discovery files

## Asset folders

- `assets/original-site/` - exact public images and logos from the live CARE website
- `assets/care-photos/` - original CARE field photos and team imagery from the local CARE folder
- `assets/logos/` - CARE logo variants
- `assets/clients/` - client and industry association logos used by the local pages

## Local preview

Open `index.html` directly in a browser, or run:

```sh
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/index.html`.

## GitHub Pages

This repository deploys from `main` using GitHub Actions. In GitHub, set Pages source to **GitHub Actions** under repository Settings, then each push to `main` publishes the static site.
