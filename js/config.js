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
  // from the endpoint, e.g. https://formspree.io/f/xyzabcd → 'xyzabcd'https://formspree.io/f/mgavqokl
  formspreeId: 'mgavqokl',

  // 2. SHOWREEL VIDEOS
  // Paste a normal YouTube or Vimeo link, or a path to an .mp4
  // file you put in the /videos folder (e.g. 'videos/standup.mp4').
  videos: {
    acting:  '',   // e.g. 'https://www.youtube.com/watch?v=XXXXXXXXXXX'
    standup: '',   // e.g. 'https://vimeo.com/123456789'
    hosting: '',   // e.g. 'videos/hosting.mp4'
  },

  // 3. SOCIAL LINKS
  social: {
  instagram: 'https://www.instagram.com/debbiefrascino?stkn=MTdpNnRzODVqajJ4Ng%3D%3D',
  youtube:   'https://www.youtube.com/@DebbieFrascino',
  imdb:      '',
  spotlight: 'https://app.spotlight.com/5092-9055-9497',
},

  // 4. PRESS KIT
  // Put the PDF in the /assets folder and keep this path,
  // or set to '' to hide the button until it's ready.
  pressKit: 'assets/press-kit.pdf',
};
