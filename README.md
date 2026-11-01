# adi.vibe — Mood in Motion 🌊

Website for the [@adi.vibe](https://www.instagram.com/adi.vibe/) Instagram page.

- **Home** (`index.html`): intro, with one entry point for brands and one for followers
- **For Brands** (`brands.html`): media kit with stats, audience, content pillars, packages, past collabs and an inquiry form
- **Community** (`community.html`): quick links, featured posts, favourites and an FAQ for followers

## Editing content

All text, numbers and links live in **`config.js`**. Edit that file only.
Any list left empty hides its section. Leave `email` empty to send brands
to Instagram DMs; set it to show the inquiry form instead.
Setting `draft: true` shows a "Sample content" banner while you're editing.

## Running locally

It's a plain static site with no build step. Open `index.html` in a browser.

## Hosting

GitHub Pages: repo **Settings → Pages → Deploy from branch → `main` / root**.
