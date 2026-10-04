/* ============================================================
   Debbie — portfolio site scripts
   Sections:
     1. Translations (EN / ES)
     2. Language switcher
     3. Custom cursor
     4. Navigation (scroll state + mobile menu)
     5. Scroll reveal
     6. Showreel video popup
     7. Contact form (Formspree)
     8. Social links + press kit
   Settings (form ID, video links…) live in js/config.js
   ============================================================ */
(function () {
  'use strict';

  const CONFIG = window.SITE_CONFIG || {};
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- 1. TRANSLATIONS ----------
     Each key matches a data-i18n="key" (text/HTML) or
     data-i18n-ph="key" (input placeholder) attribute in index.html. */
  const T = {
    en: {
      'page-title':  'Debbie — Actress & Comedian',
      'nav-about':   'About',
      'nav-watch':   'Watch me work',
      'nav-credits': 'Spotlight',
      'nav-press':   'Press',
      'nav-book':    'Book Me',

      'hero-tag':    '✦ Based in London · Available worldwide',
      'hero-sub':    'Actress · Comedian · Storyteller.<br>From Buenos Aires to London — making audiences laugh, cry, and question everything since 2017.',
      'btn-watch':   '▶ Watch My Reel',
      'btn-contact': 'Get in Touch',
      'badge-film':  '🎬 Film',

      't-actress': 'ACTRESS', 't-comedian': 'COMEDIAN', 't-storyteller': 'STORYTELLER',
      't-performer': 'PERFORMER', 't-improviser': 'IMPROVISER', 't-writer': 'WRITER',

      'sec-about':  'About',
      'about-h2':   'THE WOMAN.<br>THE MYTH.<br>THE <span style="color:var(--yellow)">LAUGHS.</span>',
      'about-p1':   'Debbie is an Argentine actress and stand-up comedian based in London. She has been performing since the age of ten — from Buenos Aires theatre to London stages and international comedy nights.',
      'about-p2':   'Bilingual in English and Spanish, energetic and fearless, she brings heart and authentic storytelling to every role.',
      'sk-improv':  'Improv', 'sk-physical': 'Physical Comedy', 'sk-voice': 'Voiceover',
      'stat-years':   'Years performing',
      'stat-credits': 'Credits',
      'stat-awards':  'Awards &amp; noms',
      'stat-social':  'Social followers',

      'sec-reel':    'Showreel',
      'reel-h2':     'WATCH ME <span style="color:var(--pink)">WORK</span>',
      'reel-sub':    'Click any clip to watch — reel, shorts, and stage sets.',
      'reel1-title': 'Acting',  'reel1-type': 'Film · TV · Drama',
      'reel2-title': 'Stand-Up','reel2-type': 'Live Comedy',
      'reel3-title': 'Hosting', 'reel3-type': 'Events · Presenting',
      'video-soon':     'Coming soon',
      'video-soon-sub': 'This clip is being edited — check back shortly.',
      'video-close':    'Close video',

      'sec-credits': 'Spotlight',
      'credits-h2':  'SELECTED <span style="color:var(--teal)">WORKS</span>',
      'type-film':   'Film', 'type-stage': 'Stage',

      'sec-press':   'Press &amp; Reviews',
      'press-h2':    'THEY SAID IT, <span style="color:var(--orange)">NOT ME</span>',

      'sec-contact': 'Contact',
      'contact-h2':  'LET\'S MAKE<br>SOMETHING <span style="color:var(--pink)">GREAT</span>',
      'contact-p':   'Based in London, available for film, TV, stage, stand-up, voiceover, and brand partnerships. Originally from Argentina — bilingual in English &amp; Spanish.',
      'f-name':      'Your name',
      'f-email':     'Your email',
      'f-message':   'Your message',
      'btn-send':    '📧 Send Message',
      'btn-presskit':'📄 Download Press Kit',
      'form-sending':'Sending…',
      'form-ok':     '✓ Thanks! Your message was sent.',
      'form-err':    'Something went wrong. Please try again, or email directly.',
      'form-notset': 'The form isn\'t connected yet — add the Formspree ID in js/config.js.',

      // Credits (new)
      'credits-all': 'See all credits',
      'type-ad': 'Commercial', 'type-model': 'Modelling',
      'role-actress': 'Actress', 'role-corresp': 'Correspondent',
      'role-radio': 'Radio Presenter', 'role-mainmodel': 'Main Model',
      'cat-stage': 'Theatre', 'cat-film': 'Film', 'cat-tv': 'Television',
      'cat-comedy': 'Comedy &amp; Improv', 'cat-ads': 'Commercials &amp; Modelling',
      'cat-voice': 'Radio &amp; Presenting', 'cat-video': 'Music Video',
      'cat-training': 'Training', 'type-short': 'Short Film',
      'role-journalist': 'Journalist', 'role-daughter': 'Daughter', 'role-comedian': 'Comedian',

      // Skills + stats (new)
      'sk-present': 'Presenting', 'sk-musical': 'Musical Theatre', 'sk-jazz': 'Jazz Dance',
      'sk-mezzo': 'Mezzo-Soprano', 'sk-lang': 'Spanish &amp; English', 'sk-accent': 'Latin American Accent',
      'stat-lang': 'Languages',
      
      'footer-cr':  '© {year} Debbie. All rights reserved.',
      'footer-loc': 'London-based · Originally from Argentina',
      'menu-open':  'Open menu',
      'menu-close': 'Close menu',
    },
    es: {
      'page-title':  'Debbie — Actriz y Comediante',
      'nav-about':   'Sobre mí',
      'nav-watch':   'Mírala trabajar',
      'nav-credits': 'Spotlight',
      'nav-press':   'Prensa',
      'nav-book':    'Contrátame',

      'hero-tag':    '✦ Con base en Londres · Disponible en todo el mundo',
      'hero-sub':    'Actriz · Comediante · Narradora.<br>De Buenos Aires a Londres — haciendo reír, llorar y reflexionar al público desde 2017.',
      'btn-watch':   '▶ Ver mi Reel',
      'btn-contact': 'Contactar',
      'badge-film':  '🎬 Cine',

      't-actress': 'ACTRIZ', 't-comedian': 'COMEDIANTE', 't-storyteller': 'NARRADORA',
      't-performer': 'ARTISTA', 't-improviser': 'IMPROVISADORA', 't-writer': 'GUIONISTA',

      'sec-about':  'Sobre mí',
      'about-h2':   'LA MUJER.<br>EL MITO.<br>LAS <span style="color:var(--yellow)">RISAS.</span>',
      'about-p1':   'Debbie es actriz y comediante de stand-up argentina, radicada en Londres. Actúa desde los diez años — del teatro de Buenos Aires a los escenarios de Londres y noches de comedia internacionales.',
      'about-p2':   'Bilingüe en inglés y español, enérgica y sin miedo, aporta corazón y una narrativa auténtica a cada papel.',
      'sk-improv':  'Improvisación', 'sk-physical': 'Comedia física', 'sk-voice': 'Locución',
      'stat-years':   'Años en escena',
      'stat-credits': 'Créditos',
      'stat-awards':  'Premios y nom.',
      'stat-social':  'Seguidores',
      'stat-lang':    'Idiomas',

      'sec-reel':    'Reel',
      'reel-h2':     'MÍRALA <span style="color:var(--pink)">TRABAJAR</span>',
      'reel-sub':    'Haz clic en cualquier clip para ver — reel, cortos y presentaciones en vivo.',
      'reel1-title': 'Actuación',  'reel1-type': 'Cine · TV · Drama',
      'reel2-title': 'Stand-Up',   'reel2-type': 'Comedia en vivo',
      'reel3-title': 'Conducción', 'reel3-type': 'Eventos · Presentación',
      'video-soon':     'Muy pronto',
      'video-soon-sub': 'Este clip se está editando — vuelve pronto.',
      'video-close':    'Cerrar video',

      'sec-credits': 'Spotlight',
      'credits-h2':  'OBRAS <span style="color:var(--teal)">SELECCIONADAS</span>',
      'type-film':   'Cine', 'type-stage': 'Teatro',

      'sec-press':   'Prensa y Reseñas',
      'press-h2':    'LO DIJERON ELLOS, <span style="color:var(--orange)">NO YO</span>',

      'sec-contact': 'Contacto',
      'contact-h2':  'HAGAMOS<br>ALGO <span style="color:var(--pink)">GENIAL</span>',
      'contact-p':   'Con base en Londres, disponible para cine, TV, teatro, stand-up, locución y colaboraciones. De origen argentino — bilingüe en inglés y español.',
      'f-name':      'Tu nombre',
      'f-email':     'Tu correo',
      'f-message':   'Tu mensaje',
      'btn-send':    '📧 Enviar mensaje',
      'btn-presskit':'📄 Descargar Dossier',
      'form-sending':'Enviando…',
      'form-ok':     '✓ ¡Gracias! Tu mensaje fue enviado.',
      'form-err':    'Algo salió mal. Inténtalo de nuevo o escribe directamente.',
      'form-notset': 'El formulario aún no está conectado — añade el ID de Formspree en js/config.js.',
      'cat-training': 'Formación', 'type-short': 'Cortometraje',
      'role-journalist': 'Periodista', 'role-daughter': 'Hija', 'role-comedian': 'Comediante',

      // Créditos (nuevo)
      'credits-all': 'Ver todos los créditos',
      'type-ad': 'Publicidad', 'type-model': 'Modelaje',
      'role-actress': 'Actriz', 'role-corresp': 'Corresponsal',
      'role-radio': 'Conductora de radio', 'role-mainmodel': 'Modelo principal',
      'cat-stage': 'Teatro', 'cat-film': 'Cine', 'cat-tv': 'Televisión',
      'cat-comedy': 'Comedia e Impro', 'cat-ads': 'Publicidad y Modelaje',
      'cat-voice': 'Radio y Conducción', 'cat-video': 'Videoclip',
      
      // Habilidades + datos (nuevo)
      'sk-present': 'Conducción', 'sk-musical': 'Teatro musical', 'sk-jazz': 'Danza jazz',
      'sk-mezzo': 'Mezzosoprano', 'sk-lang': 'Español e inglés', 'sk-accent': 'Acento latinoamericano',
      'stat-lang': 'Idiomas',

      'footer-cr':  '© {year} Debbie. Todos los derechos reservados.',
      'footer-loc': 'Con base en Londres · Originaria de Argentina',
      'menu-open':  'Abrir menú',
      'menu-close': 'Cerrar menú',
    },
  };

  let lang = 'en';
  const t = (key) => (T[lang][key] || T.en[key] || key).replace('{year}', new Date().getFullYear());

  /* ---------- 2. LANGUAGE SWITCHER ---------- */
  function setLang(newLang) {
    lang = T[newLang] ? newLang : 'en';

    $$('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });

    $$('.lang-btn').forEach(btn => {
      const on = btn.dataset.lang === lang;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on);
    });

    document.documentElement.lang = lang;
    document.title = t('page-title');
    $('#modal-close').setAttribute('aria-label', t('video-close'));
    updateMenuLabel();

    // Remember the choice for next visit (can fail in private mode — that's fine)
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

  /* ---------- 3. CUSTOM CURSOR (mouse users only) ---------- */
  const cursor = $('#cursor');
  const hasMouse = window.matchMedia('(pointer: fine)').matches;

  if (hasMouse && cursor) {
    document.documentElement.classList.add('has-custom-cursor');

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      cursor.classList.remove('hidden');
    });
    document.addEventListener('mouseleave', () => cursor.classList.add('hidden'));

    // Grow the dot over anything clickable
    document.addEventListener('mouseover', e => {
      cursor.classList.toggle('hover', !!e.target.closest('a, button, .reel-card'));
    });
  }

  /* ---------- 4. NAVIGATION ---------- */
  const navbar = $('#navbar');
  const menuBtn = $('#menu-toggle');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  function updateMenuLabel() {
    const open = navbar.classList.contains('menu-open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', t(open ? 'menu-close' : 'menu-open'));
  }
  function toggleMenu(force) {
    navbar.classList.toggle('menu-open', force);
    updateMenuLabel();
  }

  menuBtn.addEventListener('click', () => toggleMenu());
  // Close the mobile menu after tapping a link
  $$('.nav-links a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  /* ---------- 5. SCROLL REVEAL ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('js-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target); // animate once only
        }
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(el => io.observe(el));
  }

  /* ---------- 6. SHOWREEL VIDEO POPUP ---------- */
  const modal = $('#video-modal');
  const modalMedia = $('#modal-media');
  const modalTitle = $('#modal-title');
  let lastFocused = null;

  // Turn a normal YouTube / Vimeo link into an embeddable one
  function toEmbed(url) {
    let m;
    if ((m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/))) {
      return { type: 'iframe', src: `https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0` };
    }
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      return { type: 'iframe', src: `https://player.vimeo.com/video/${m[1]}?autoplay=1` };
    }
    if (/\.(mp4|webm|mov)(\?.*)?$/i.test(url)) {
      return { type: 'video', src: url };
    }
    if ((m = url.match(/instagram\.com\/(?:p|reel|reels|tv)\/([\w-]+)/))) {
      return { type: 'iframe', src: `https://www.instagram.com/p/${m[1]}/embed/`, portrait: true };
    }
    return { type: 'iframe', src: url };
  }

  function openVideo(card) {
    const key = card.dataset.video;
    const url = (CONFIG.videos && CONFIG.videos[key]) || '';
    lastFocused = card;
    modalTitle.textContent = $('.reel-title', card).textContent;
    modalMedia.innerHTML = '';

    if (!url) {
      modalMedia.innerHTML = `<div class="modal-empty"><strong>${t('video-soon')}</strong>${t('video-soon-sub')}</div>`;
      modal.classList.remove('portrait');
    } else {
      const embed = toEmbed(url);
        modal.classList.toggle('portrait', !!embed.portrait);
      let el;
      if (embed.type === 'video') {
        el = document.createElement('video');
        el.controls = true;
        el.autoplay = true;
        el.playsInline = true;
      } else {
        el = document.createElement('iframe');
        el.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
        el.allowFullscreen = true;
        el.title = modalTitle.textContent;
      }
      el.src = embed.src;
      modalMedia.appendChild(el);
    }

    modal.classList.add('open');
    document.body.classList.add('no-scroll');
    $('#modal-close').focus();
  }

  function closeVideo() {
    if (!modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modalMedia.innerHTML = ''; // removing the player stops the sound
    document.body.classList.remove('no-scroll');
    if (lastFocused) lastFocused.focus();
  }

  $$('.reel-card').forEach(card => card.addEventListener('click', () => openVideo(card)));
  $('#modal-close').addEventListener('click', closeVideo);
  modal.addEventListener('click', e => { if (e.target === modal) closeVideo(); }); // click outside the video
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeVideo(); toggleMenu(false); }
  });

  /* ---------- 7. CONTACT FORM ---------- */
  const form = $('#contact-form');
  const status = $('#form-status');
  const sendBtn = $('#btn-send');
  const formId = (CONFIG.formspreeId || '').trim();
  if (formId) form.action = `https://formspree.io/f/${formId}`;

  function showStatus(key, type) {
    status.textContent = t(key);
    status.className = 'form-status' + (type ? ' ' + type : '');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // stay on the page instead of going to Formspree

    if (!formId) return showStatus('form-notset', 'error');

    showStatus('form-sending');
    sendBtn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        showStatus('form-ok', 'ok');
        form.reset();
      } else {
        showStatus('form-err', 'error');
      }
    } catch (err) {
      showStatus('form-err', 'error');
    } finally {
      sendBtn.disabled = false;
    }
  });

  /* ---------- 8. SOCIAL LINKS + PRESS KIT ---------- */
  const social = CONFIG.social || {};
  $$('[data-social]').forEach(link => {
    const url = social[link.dataset.social];
    if (url) link.href = url;
    else link.remove(); // no link set → hide the icon
  });

  // Show the press kit button only if the PDF actually exists
  const presskitBtn = $('#btn-presskit');
  if (CONFIG.pressKit && location.protocol !== 'file:') {
    fetch(CONFIG.pressKit, { method: 'HEAD' })
      .then(res => { if (res.ok) { presskitBtn.href = CONFIG.pressKit; presskitBtn.hidden = false; } })
      .catch(() => {});
  }

  /* ---------- START ---------- */
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const browserSpanish = (navigator.language || '').toLowerCase().startsWith('es');
  setLang(saved || (browserSpanish ? 'es' : 'en'));
})();
