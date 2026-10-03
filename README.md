# Debbie — Portfolio Website

A static site (plain HTML + CSS + JavaScript, no build step), bilingual EN/ES.

## Folder structure

```
debbie-portfolio/
├── index.html        ← page content
├── css/style.css     ← all styling
├── js/config.js      ← ★ SETTINGS: the only file you need to edit to go live
├── js/main.js        ← behaviour (language, menu, video popup, form…)
├── images/           ← photos (hero, reel thumbnails, social share image)
├── assets/           ← put press-kit.pdf here
├── videos/           ← optional: self-hosted .mp4 clips
└── favicon.svg
```

## What works

| Feature | How it works |
|---|---|
| EN / ES switch | Whole page translates, remembers the choice, auto-picks Spanish for Spanish-language browsers |
| Showreel | Clicking a clip opens a video popup (YouTube, Vimeo or .mp4). Shows "Coming soon" if no link yet. Esc / × / click outside closes it |
| Contact form | Sends via Formspree without leaving the page, has spam protection (honeypot) |
| Social icons | Only shown when a link is set |
| Press kit button | Only shown once `assets/press-kit.pdf` exists |
| Mobile | Burger menu, one-column layout, no custom cursor on touch screens |
| Accessibility | Keyboard-friendly, screen-reader labels, respects "reduce motion" |

## Step 1: Run it locally

Opening `index.html` directly works, but a local server behaves like the real site:

```bash
cd debbie-portfolio
python3 -m http.server 8000
```
Then open http://localhost:8000. (Or use the **Live Server** extension in VS Code.)

## Step 2: Connect the contact form (free, about 5 min)

1. Go to https://formspree.io and sign up with the email where Debbie wants to get messages.
2. Click **New Form** and give it a name.
3. Copy the ID from the endpoint: `https://formspree.io/f/`**`xyzabcd`**
4. In `js/config.js` set `formspreeId: 'xyzabcd'`.
5. Send yourself a test message from the live site. The first one asks you to confirm the email.

Free plan: 50 submissions/month.

## Step 3: Add the showreel videos

Easiest: upload to YouTube (can be **Unlisted**) or Vimeo, then paste the normal link into `js/config.js`:

```js
videos: {
  acting:  'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  standup: 'https://youtu.be/XXXXXXXXXXX',
  hosting: 'https://vimeo.com/123456789',
},
```
Self-hosting an .mp4 also works (`'videos/hosting.mp4'`), but keep files small (under ~20 MB).

## Step 4: Social links + press kit

- Fill in `social:` in `js/config.js` (empty ones stay hidden).
- Drop the PDF in `assets/` as `press-kit.pdf`.

## Step 5: Put it online

**Option A: Netlify Drop (quickest, no account needed to try)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `debbie-portfolio` folder onto the page. It's live in seconds.
3. Create a free account to keep it and rename the address (e.g. `debbie-actress.netlify.app`).

**Option B: GitHub Pages (good for your own portfolio too)**
```bash
cd debbie-portfolio
git init
git add .
git commit -m "Debbie portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/debbie-portfolio.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
The site appears at `https://<your-username>.github.io/debbie-portfolio/` after about a minute.

**Custom domain (optional):** buy e.g. `debbie.com` (Namecheap, Cloudflare, ~£10/yr), then add it under Netlify *Domain settings* or GitHub *Pages → Custom domain*. HTTPS is free on both.

## Step 6: After it's live

- In `index.html`, change `og:image` to the full URL (e.g. `https://debbie.com/images/og-image.jpg`) so link previews on WhatsApp/LinkedIn show her photo.
- Test the form, each video and the EN/ES switch on your phone.

## Editing content

- **Text:** change it in `index.html`. If it has a `data-i18n="key"`, also update both the `en` and `es` versions of that key at the top of `js/main.js` (the JS overwrites the HTML text when the page loads).
- **Credits / press quotes:** plain HTML in `index.html`. Copy a `<div class="credit-card …">` block to add one.
- **Photos:** replace files in `images/` with the same names (JPG, around 800–1000 px wide).
