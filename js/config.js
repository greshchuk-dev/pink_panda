/* ============================================================
   SITE SETTINGS — the only file you need to edit to go live.
   Leave a value as '' (empty) and the site handles it gracefully:
   - empty video  → the popup says "Coming soon"
   - empty social → that icon is hidden
   - empty press kit → the button is hidden
   ============================================================ */
window.SITE_CONFIG = {

  // 1. CONTACT FORM
  // Sign up free at https://formspree.io → New form → copy the ID
  // from the endpoint, e.g. https://formspree.io/f/xyzabcd → 'xyzabcd'
  formspreeId: 'mvkzbdya',

  // 2. SHOWREEL VIDEOS
  // Paste a normal YouTube, Vimeo or Instagram link, or a path to an .mp4
  // file you put in the /videos folder (e.g. 'videos/standup.mp4').
  // Remove tracking codes like ?si=... or ?stkn=... from the end.
  videos: {
    acting:  'https://www.youtube.com/watch?v=w8xY_LNZcmk',
    standup: 'https://www.instagram.com/reel/DbEOtWOuevx/',
    hosting: 'https://www.instagram.com/reel/DOQvevkDLgF/',
    // extra cards (2nd row) — the name must match data-video="..." in index.html
    acting2: 'https://www.youtube.com/watch?v=QFOnb4TYYaY',
    acting3: 'https://www.youtube.com/watch?v=YpY8IY32szE',
    acting4: 'https://www.youtube.com/watch?v=D9i4hpKYQFY',
  },

  // 3. SOCIAL LINKS
  // Leave as '' to hide the icon.
  social: {
    instagram: 'https://www.instagram.com/debbiefrascino/',
    youtube:   'https://www.youtube.com/@DebbieFrascino',
    imdb:      '',
    spotlight: 'https://app.spotlight.com/5092-9055-9497',
  },

  // 4. PRESS KIT
  // Put the PDF in the /assets folder and keep this path,
  // or set to '' to hide the button until it's ready.
  pressKit: 'assets/press-kit.pdf',
};