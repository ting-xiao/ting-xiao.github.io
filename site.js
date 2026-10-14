(function () {
  'use strict';
  const d = window.SITE_DATA || {};
  const profile = d.profile || {};
  const page = document.body.dataset.page || 'home';
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = value => {
    const url = String(value || '').trim();
    return (/^https:\/\/[^\s]+$/i.test(url) || /^mailto:[^\s]+$/i.test(url) || /^assets\/[a-z0-9_./-]+$/i.test(url)) ? url : '';
  };
  const link = (url, label, className = '', isExternal = true) => {
    const address = safeUrl(url);
    if (!address) return '';
    return `<a href="${escapeHTML(address)}"${className ? ` class="${className}"` : ''}${isExternal && /^https?:/.test(address) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHTML(label)}</a>`;
  };
  const icons = {
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>',
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    website: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9M9 21v-8h6v8"/></svg>',
    university: '<span aria-hidden="true" style="display:block;width:18px;height:18px;flex:0 0 18px;background-color:currentColor;-webkit-mask:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA8klEQVR42u2WTQ6CMBBGXw2JJsAtTPQQLjyGB9FED+E51GO48A5uPAVsXI0bmlTkpxRoXTAJISmlj286H1MlIoSImeN7e0CK6+iygOqoOAfimmdvYDGk4sRQFzfMmxvzkj5gnc7MIZNZ2zZUpTpvUaYjNSBt8bMNGpw4KFPFvastUiCPOnx1OdaOjsgApRX7NrPSxXXwCD2Vi2sHXEaGpkXxftnpCtxGhJ411OXPNVhEFWNSYx2xtJNqWKN3kwjWnSbwBJ7A/wOOLOeJ5Zh1izUVb0buywJsy03iCaw8ZfkFLIOfQIJVtQLuHngP3R6DHQQ+5V5IyVwgsCYAAAAASUVORK5CYII=) center/contain no-repeat;mask:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA8klEQVR42u2WTQ6CMBBGXw2JJsAtTPQQLjyGB9FED+E51GO48A5uPAVsXI0bmlTkpxRoXTAJISmlj286H1MlIoSImeN7e0CK6+iygOqoOAfimmdvYDGk4sRQFzfMmxvzkj5gnc7MIZNZ2zZUpTpvUaYjNSBt8bMNGpw4KFPFvastUiCPOnx1OdaOjsgApRX7NrPSxXXwCD2Vi2sHXEaGpkXxftnpCtxGhJ411OXPNVhEFWNSYx2xtJNqWKN3kwjWnSbwBJ7A/wOOLOeJ5Zh1izUVb0buywJsy03iCaw8ZfkFLIOfQIJVtQLuHngP3R6DHQQ+5V5IyVwgsCYAAAAASUVORK5CYII=) center/contain no-repeat"></span>',
    orcid: '<svg class="icon-filled" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0ZM7.369 5.378a.947.947 0 1 1 0 1.894.947.947 0 0 1 0-1.894ZM6.647 8.416h1.444v10.041H6.647V8.416Zm3.357 0h3.903c3.303 0 4.756 2.363 4.756 5.025 0 3.019-1.875 5.016-4.747 5.016h-3.912V8.416Zm1.444 1.303v7.444h2.297c2.912 0 3.428-2.209 3.428-3.722 0-1.966-.938-3.722-3.438-3.722h-2.287Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.9c0-1.1-.4-1.9-.9-2.4 3-.4 6.2-1.5 6.2-6.8a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.3-3.8 1.5a13 13 0 0 0-7 0C5.3 1.2 4.1 1.5 4.1 1.5A5 5 0 0 0 4 5.2a5.4 5.4 0 0 0-1.5 3.7c0 5.3 3.2 6.4 6.2 6.8-.5.5-.9 1.3-.9 2.4V22"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 9 10-6 10 6-10 6-10-6Z"/><path d="M6 12v5c3.7 3.3 8.3 3.3 12 0v-5M22 9v7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  };
  const nav = [
    ['research','Research interests','research.html'],
    ['publications','Publications','publications.html'],
    ['work','Work in progress','work-in-progress.html'],
    ['conferences','Conferences','conferences.html'],
    ['cv','CV','cv.html']
  ];
  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `<div class="header-inner"><a class="brand" href="index.html"${page === 'home' ? ' aria-current="page"' : ''}>Ting Xiao</a><nav class="site-nav" id="site-nav" aria-label="Primary navigation">${nav.map(([id,label,href]) => `<a href="${href}"${id===page?' aria-current="page"':''}>${label}</a>`).join('')}</nav><div class="header-actions"><button class="theme-toggle" type="button" aria-label="Switch to dark mode" title="Switch to dark mode">${icons.moon}</button><button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false" aria-label="Open navigation">${icons.menu}</button></div></div>`;
  }
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = `<div class="wrapper footer-inner"><span>© 2026 Ting Xiao</span><span>Last updated: October 10, 2026</span></div>`;
  const themeControl = document.querySelector('.theme-toggle');
  function setTheme(mode) {
    const applied = mode === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = applied;
    if (themeControl) {
      const text = applied === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      themeControl.innerHTML = applied === 'dark' ? icons.sun : icons.moon;
      themeControl.setAttribute('aria-label', text);
      themeControl.title = text;
    }
  }
  setTheme(document.documentElement.dataset.theme);
  themeControl?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('ting-xiao-theme', next); } catch (_) {}
  });
  const menu = document.querySelector('.menu-toggle');
  menu?.addEventListener('click', () => {
    const navigation = document.getElementById('site-nav');
    const open = navigation.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  document.querySelectorAll('.site-nav a').forEach(a => a.addEventListener('click', () => {
    document.getElementById('site-nav')?.classList.remove('is-open');
    menu?.setAttribute('aria-expanded', 'false');
  }));
  const main = document.getElementById('content');
  if (!main) return;
  const heading = (title, intro = '') => `<div class="page-top"><h1>${escapeHTML(title)}</h1>${intro ? `<p class="page-intro">${escapeHTML(intro)}</p>` : ''}</div>`;
  function profiles() {
    const profileLinks = [
      ['https://www.ku.dk/en', 'University of Copenhagen', icons.university],
      ['mailto:' + profile.email, 'Email', icons.mail],
      [profile.scholar, 'Google Scholar', icons.scholar],
      [profile.orcid, 'ORCID', icons.orcid],
      [profile.github, 'GitHub', icons.github]
    ];
    const items = profileLinks.map(([url, name, svg]) => {
      const href = safeUrl(url);
      if (!href) return '';
      const external = /^https:\/\//i.test(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<li><a class="profile-contact-link" href="${escapeHTML(href)}"${external}>${svg}<span>${escapeHTML(name)}</span></a></li>`;
    }).join('');
    return `<ul class="profile-contact-list" aria-label="Location and professional profiles">
      <li class="profile-location">${icons.pin}<span>${escapeHTML(profile.location)}</span></li>
      ${items}
    </ul>`;
  }
  function home() {
    const news = (d.news || []).map(n => `<li class="news-row"><time datetime="${escapeHTML(n.datetime)}" class="news-date">${escapeHTML(n.date)}</time><p>${n.html}</p></li>`).join('');
    return `<div class="home-grid">
      <div class="home-content">
        <section class="hero-intro" aria-labelledby="welcome-title">
          <h1 id="welcome-title">Ting Xiao</h1>
          <div class="hero-biography">${profile.bioHtml}</div>
        </section>
        <section class="news-section" aria-labelledby="news-heading">
          <div class="section-head"><h2 id="news-heading">News</h2></div>
          <ol class="news-list">${news}</ol>
        </section>
      </div>
      <aside class="home-aside" aria-label="Portrait and contact details">
        <figure class="portrait-wrap"><img src="${escapeHTML(safeUrl(profile.photo))}" alt="${escapeHTML(profile.photoAlt)}" width="630" height="787" loading="eager" fetchpriority="high"></figure>
        ${profiles()}
      </aside>
    </div>`;
  }
  function research() {
    const streams = (d.research || []).map((r,i) => `<article class="stream"><span class="stream-number">${String(i+1).padStart(2,'0')}</span><figure class="stream-image"><img class="illustration-light" src="${escapeHTML(safeUrl(r.image))}" alt="${escapeHTML(r.imageAlt||r.title)}" loading="lazy" width="1200" height="750"><img class="illustration-dark" src="${escapeHTML(safeUrl(r.imageDark))}" alt="" aria-hidden="true" loading="lazy" width="1200" height="750"></figure><h2>${escapeHTML(r.title)}</h2><p>${escapeHTML(r.description)}</p></article>`).join('');
    return `<h1 class="sr-only">Research interests</h1><div class="research-streams">${streams}</div><section class="toolkit" aria-labelledby="toolkit-title"><h2 id="toolkit-title">Research toolkit</h2><ul>${(d.methods || []).map(m=>`<li>${escapeHTML(m)}</li>`).join('')}</ul></section>`;
  }
  function papers() {
    let prev='';
    const rows=(d.publications || []).map(p => {const year = String(p.year);const label=year !== prev?`<h2 class="list-year">${escapeHTML(year)}</h2>`:'';prev=year;return label+`<article class="paper"><h3>${escapeHTML(p.title)}</h3><p class="authors">${escapeHTML(p.authors).replace(/\bT\. Xiao\b/g,'<strong>T. Xiao</strong>')}</p><p class="venue">${escapeHTML(p.venue)}</p><div class="paper-links">${(p.links||[]).map(l=>link(l.url,l.label,'paper-link')).join('')}</div></article>`;}).join('');
    return `<h1 class="sr-only">Publications</h1><div class="paper-list">${rows}</div>`;
  }
  function work() {
    const rows=(d.workInProgress||[]).map((p,i)=>`<article class="paper work-paper"><span class="work-number">${String(i+1).padStart(2,'0')}</span><div><h2>${escapeHTML(p.title)}</h2><p class="authors">${escapeHTML(p.authors).replace(/\bT\. Xiao\b/g,'<strong>T. Xiao</strong>')}</p><p class="venue">${escapeHTML(p.status)}</p></div></article>`).join('');
    return `<h1 class="sr-only">Work in progress</h1><div class="paper-list">${rows}</div>`;
  }
  function conferences() {
    const rows=(d.conferences || []).map(c=>`<article class="conference"><span class="conference-date">${escapeHTML(c.date)}</span><div><h2>${escapeHTML(c.title)}</h2><p>${escapeHTML(c.details)}</p></div></article>`).join('');
    return `<h1 class="sr-only">Conferences</h1><div class="conference-list">${rows}</div>`;
  }
  function cv() {
    const subjects=(d.research||[]).map(r=>`<li>${escapeHTML(r.title)}</li>`).join('');
    const papers=(d.publications||[]).slice(0,3).map(p=>`<li><span>${escapeHTML(p.year)}</span> ${escapeHTML(p.title)}</li>`).join('');
    const cta = safeUrl(profile.cv) ? `<a class="cv-cta" href="${escapeHTML(profile.cv)}" download>Download CV (PDF) ${icons.arrow}</a>` : `<a class="cv-cta" href="mailto:${escapeHTML(profile.email)}?subject=CV%20request">Request full CV ${icons.arrow}</a>`;
    return heading('CV','Academic profile and selected work.')+`<section class="cv-intro"><div><p class="cv-kicker">Current appointment</p><h2>PhD Fellow in Sociology</h2><p>Department of Sociology<br>University of Copenhagen<br>Copenhagen, Denmark</p></div><div class="cv-cta-wrap">${cta}</div></section>
    <section class="cv-section"><h2>Research interests</h2><ul class="cv-clean-list">${subjects}</ul></section>
    <section class="cv-section"><h2>Selected publications</h2><ul class="cv-papers">${papers}</ul><p>${link('publications.html','View all publications →','cv-secondary-link',false)}</p></section>
    <section class="cv-section"><h2>Methods</h2><div class="method-chips">${(d.methods||[]).map(m=>`<span>${escapeHTML(m)}</span>`).join('')}</div></section>
    <section class="cv-section cv-contact"><h2>Contact</h2><p>${(profile.address||[]).map(a=>escapeHTML(a)).join('<br>')}</p><p>${link('mailto:'+profile.email,profile.email,'cv-secondary-link',false)} · ${link(profile.scholar,'Google Scholar','cv-secondary-link')} · ${link(profile.orcid,'ORCID','cv-secondary-link')}</p></section>`;
  }
  main.innerHTML = ({home,research,publications:papers,work,conferences,cv}[page] || home)();
})();
