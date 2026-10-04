# Debbie Frascino — Actress & Comedian

Portfolio website for Debbie Frascino, an Argentine actress and stand-up comedian based in London.
Bilingual (English / Spanish), mobile-friendly, and built without any frameworks.

**Live site:** 

---

## Tech stack

- **HTML, CSS, vanilla JavaScript**: no framework and no build step
- **Formspree**: sends contact form messages to Debbie's email
- **YouTube / Vimeo / Instagram embeds**: showreel videos play in a popup
- **GitHub Pages**: hosting

## Features

| Feature | How it works |
|---|---|
| EN / ES language switch | Translates the whole page, remembers the choice, and picks Spanish automatically for Spanish-language browsers |
| Showreel popup | Plays YouTube, Vimeo, Instagram or .mp4 links. Instagram reels open in a tall (portrait) popup. Shows "Coming soon" if no link is set |
| Contact form | Sends through Formspree without reloading the page. Has a hidden honeypot field against spam bots |
| Selected Works | 8 highlight credit cards, plus **Training** and **See all credits** dropdowns (HTML `<details>`, no JavaScript) |
| Media kit | Download button that only shows once `assets/press-kit.pdf` exists |
| Social links | YouTube and Spotlight icons. Any link left empty in the config is hidden |
| Mobile | Burger menu, one-column layout, and the custom cursor is turned off on touch screens |
| Accessibility | Keyboard-friendly, screen-reader labels, and respects the "reduce motion" setting |

## Project structure

```
debbie-portfolio/
├── index.html          ← all page content
├── css/style.css       ← all styling
├── js/config.js        ← ★ settings: form ID, video links, social links, media kit
├── js/main.js          ← behaviour + EN/ES translations
├── images/             ← hero photo, showreel thumbnails, social share image
├── assets/             ← press-kit.pdf (media kit)
├── videos/             ← optional self-hosted .mp4 clips
├── favicon.svg
├── package.json        ← only used for `npm run start` (local server)
└── .gitignore          ← keeps node_modules out of git
```

---

## Run it locally

```bash
npm run start
```
Then open http://localhost:3000.

Use the local server rather than double-clicking `index.html`. Some features (the media kit button, YouTube embeds) only work when the page comes from a server.

---

## Settings: `js/config.js`

This is the only file you need to touch for links and integrations.

| Setting | What to put |
|---|---|
| `formspreeId` | The ID from your Formspree endpoint, e.g. `https://formspree.io/f/xpwzabcd` → `'xpwzabcd'` |
| `videos.acting` / `standup` / `hosting` | A normal YouTube, Vimeo or Instagram link (or `'videos/clip.mp4'`) |
| `social.youtube` / `spotlight` / `instagram` / `imdb` | Full profile URLs. Leave one as `''` to hide its icon |
| `pressKit` | Path to the media kit PDF (default `'assets/press-kit.pdf'`) |

To add a **new social icon**, add the link to `social:` in the config **and** a matching
`<a class="social-link" data-social="name" ...>` in `index.html`. The names must match.

**Videos:** for YouTube, check that **Allow embedding** is turned on in YouTube Studio (Details → Show more).
Unlisted videos work fine. Instagram posts must be public.

---

## Editing content

### Text and translations (the "two places" rule)
Any element with `data-i18n="key"` has its text in **two** places:
1. `index.html`: the default text (what Google reads)
2. `js/main.js`: the `en:` **and** `es:` blocks at the top

The JavaScript overwrites the HTML when the page loads, so if you only change the HTML, the old text comes back.
Always update all three: the HTML, `en` and `es`.

### Credits
- **Highlight cards:** in `index.html`, copy a `<div class="credit-card reveal">…</div>` block and edit it.
  Type labels: `type-tv`, `type-film`, `type-stage`, `type-comedy`, `type-ad`.
- **Full list / Training:** each row is one line with three columns (year, title + role, company):
  ```html
  <li><span>2024</span><span><b>Title</b>Role</span><span>Company</span></li>
  ```
  Keep the third `<span></span>` even when it's empty, so the columns stay aligned.

### Photos
- Use **lowercase file names without spaces**: the live server is case-sensitive (`Hero.JPG` ≠ `hero.jpg`).
- Resize to about 800–1000 px wide and compress (e.g. [squoosh.app](https://squoosh.app)), aiming for under ~200 KB each.
- Showreel thumbnails: replace `images/reel-acting.jpg`, `reel-standup.jpg`, `reel-hosting.jpg` using the same names, and no code changes are needed.
- If a photo crops badly, adjust `object-position` (e.g. `center`, `center top`, `center 30%`).

### Media kit
Export it as **PDF Standard** (under 5 MB) and save it as `assets/press-kit.pdf`.

---

## Deployment: GitHub Pages

**First time:**
1. Create a **public** repo on GitHub (without a README, since this one already exists).
2. Push the code:
   ```bash
   git remote add origin https://github.com/YOURNAME/REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**.
4. After 1–2 minutes the site is live at `https://YOURNAME.github.io/REPO-NAME/`.
5. Update the `og:image` meta tag in `index.html` to the **full** URL of `images/og-image.jpg`, so link previews on WhatsApp and LinkedIn show the photo.

**Every update after that:**
```bash
git add .
git commit -m "describe the change"
git push
```
The live site updates automatically within about a minute. If you still see the old version, press **Ctrl+F5**.

**Other free hosts that work:** Cloudflare Pages (unlimited bandwidth, good with a custom domain) and Netlify.
Avoid Vercel's free plan for this site, because it doesn't allow commercial use.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm run start` → "Could not read package.json" | You're in the wrong folder. `cd` into the folder that has `index.html` |
| Form says "isn't connected yet" | `formspreeId` is empty or unsaved in `config.js`. Save the file and press Ctrl+F5 |
| Form sends but no email arrives | Debbie must confirm the Formspree verification email. Check spam too |
| Changes don't show | Hard refresh with **Ctrl+F5** (the browser cached the old file) |
| Image works locally but not online | The file name's capital letters don't match the code |
| Video popup says "Video unavailable" | Embedding is turned off on YouTube, or the video is age-restricted |
| Media kit button missing | The PDF isn't at `assets/press-kit.pdf`, or you opened the file directly instead of using a server |
| Page blank or not translating | A syntax error in `main.js` (missing comma or quote). Check F12 → Console |

---

## Content checklist before launch

- [ ] Replace the placeholder press quotes with real reviews
- [ ] Confirm the Trasnoche 26 year (Spotlight says 2021, Mandy says 2023)
- [ ] Confirm the "Social followers" number
- [ ] Add the showreel video links
- [ ] Send a test message from the live site

---

Built by **Iryna Greshchuk**, 2026.