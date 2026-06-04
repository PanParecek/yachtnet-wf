// Shared script — Yachtnet wireframe
// Rozdělený prototyp: každá stránka má vlastní HTML soubor + linkuje tento skript.

  // ── COMPONENT REGISTRY ─────────────────────────────────
  // Jediný zdroj pravdy pro opakující se komponenty napříč prototypem.
  // Použití na stránce:  <div data-component="footer"></div>
  //                      <div data-component="socialProof" data-quote="..." data-author="..."></div>
  //                      <div data-component="teamModal"></div>
  // Při změně podoby uprav jen funkci níže — automaticky propagace všude.
  const Components = {

    footer: function() {
      return '<footer class="footer">' +
        '<div class="footer-newsletter"><div class="footer-nl-title">Získejte vždy čerstvé informace<br>ze světa jachtingu!</div><div class="footer-nl-form"><div class="footer-nl-row"><input class="footer-nl-input" type="email" placeholder="Vaše e-mailová adresa" /><button class="footer-nl-btn">Odebírat</button></div><label class="footer-nl-consent"><input type="checkbox" /> Souhlasím se zásadami ochrany osobních údajů</label></div></div>' +
        '<div class="footer-cols-wrap"><div class="footer-cols">' +
          '<div class="footer-col"><div class="footer-logo-mark"><img src="img/logo-yachtnet.svg" alt="Yachtnet" /></div><ul><li><a href="#">Blog</a></li><li><a href="kontakt.html">Kontakt</a></li><li><a href="#">Ochrana osobních údajů</a></li><li><a href="#">Nastavení cookies</a></li><li><a href="#">Obchodní podmínky</a></li><li><a href="#">Kariéra</a></li><li><a href="mapa-stranek.html">Mapa stránek</a></li></ul></div>' +
          '<div class="footer-col"><div class="footer-col-title">Typ pronájmu</div><ul><li><a href="#">Plachetnice</a></li><li><a href="detail-kategorie.html">Katamarán</a></li><li><a href="#">Motorová loď</a></li><li><a href="#">Gulet</a></li><li><a href="#">Říční loď</a></li></ul></div>' +
          '<div class="footer-col"><div class="footer-col-title">Kapitánské kurzy</div><ul><li><a href="kapitanske-kurzy.html">Přehled kurzů</a></li><li><a href="kurzy-na-mori.html">Kurzy na moře</a></li><li><a href="detail-prukazu.html">Průkaz MDČR C</a></li><li><a href="detail-prukazu.html">Chorvatský průkaz B</a></li><li><a href="detail-prukazu.html">SRC — Radiotelefon</a></li><li><a href="terminy-kurzu.html">Termíny kurzů</a></li><li><a href="srovnani-prukazu.html">Srovnání průkazů</a></li></ul></div>' +
          '<div class="footer-col"><div class="footer-col-title">Přehledy</div><ul><li><a href="destinace.html">Země</a></li><li><a href="#">Města</a></li><li><a href="#">Maríny</a></li><li><a href="charterove-spolecnosti.html">Charterové společnosti</a></li><li><a href="prehled-znacek.html">Výrobci lodí</a></li><li><a href="#">Modely lodí</a></li><li><a href="#">FAQs k pronájmu</a></li></ul></div>' +
          '<div class="footer-col"><div class="yp-badge"><div class="yp-badge-head">Checked <span class="yp-amp">&amp;</span> Trusted</div><div class="yp-badge-name"><div class="yp-badge-name-1">Yacht-Pool</div><div class="yp-badge-name-2">International</div></div><div class="yp-badge-tagline">Financial Security<br>System</div></div></div>' +
          '<div class="footer-col"><div class="footer-col-title">Sledujte nás</div><div class="footer-social"><a class="social-box" href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></a><a class="social-box" href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a><a class="social-box" href="#" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.6-.46-5.32c-.25-.94-1-1.68-1.94-1.93C18.88 4.29 12 4.29 12 4.29s-6.88 0-8.6.46c-.94.25-1.69 1-1.94 1.93C1 8.4 1 12 1 12s0 3.6.46 5.32c.25.94 1 1.68 1.94 1.93 1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46c.94-.25 1.69-1 1.94-1.93C23 15.6 23 12 23 12zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg></a><a class="social-box" href="#" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg></a></div><div class="footer-help" style="margin-top:20px;"><strong>Jak vám můžeme pomoci?</strong>Potřebujete poradit s výběrem?<button class="footer-help-btn">Kontaktovat podporu</button></div></div>' +
        '</div></div>' +
        '<div class="footer-bottom"><span>© 2025 Yachtnet s.r.o. Všechna práva vyhrazena.</span><img src="img/logo-yachtnet.svg" alt="Yachtnet" style="height:14px;opacity:.3;filter:brightness(0) invert(1);" /></div>' +
      '</footer>';
    },

    teamModal: function() {
      return '<div class="team-modal" id="teamModal" hidden aria-hidden="true" role="dialog" aria-label="Profil lektora">' +
        '<div class="team-modal-backdrop" data-tm-close></div>' +
        '<div class="team-modal-card">' +
          '<button class="team-modal-close" type="button" data-tm-close aria-label="Zavřít"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
          '<div class="tm-gallery">' +
            '<div class="tm-gal-frame" id="tmGalFrame"></div>' +
            '<button class="tm-gal-arrow tm-gal-prev" type="button" data-tm-prev aria-label="Předchozí"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg></button>' +
            '<button class="tm-gal-arrow tm-gal-next" type="button" data-tm-next aria-label="Další"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></button>' +
            '<div class="tm-gal-counter"><span id="tmGalIdx">1</span> / <span id="tmGalTotal">5</span></div>' +
          '</div>' +
          '<div class="tm-body">' +
            '<div class="tm-name" id="tmName">Jméno</div>' +
            '<div class="tm-role" id="tmRole">Pozice</div>' +
            '<div class="tm-bio" id="tmBio"></div>' +
            '<div class="tm-contact">' +
              '<a class="tm-contact-item" id="tmEmail" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span id="tmEmailText"></span></a>' +
              '<a class="tm-contact-item" id="tmPhone" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.1-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span id="tmPhoneText"></span></a>' +
              '<div class="tm-contact-item tm-contact-static"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg><span id="tmMilesText"></span> NM</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    },

    socialProof: function(opts) {
      var quote = (opts && opts.quote) || 'Z Splitu na Hvar jako po másle — Yachtnet vyřídil vše do 24 hodin.';
      var author = (opts && opts.author) || '— Tomáš K.';
      var score = (opts && opts.score) || '5,0';
      var label = (opts && opts.label) || 'Průměrné hodnocení ze 192 recenzí na Googlu';
      return '<div class="social-proof"><div class="social-proof-inner">' +
        '<div class="sp-item">' +
          '<span class="sp-google-icon" aria-label="Google"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg></span>' +
          '<span class="sp-score">' + score + '</span>' +
          '<div><div class="sp-stars">★★★★★</div><div class="sp-label">' + label + '</div></div>' +
        '</div>' +
        '<div class="sp-divider"></div>' +
        '<div class="sp-trust" title="Yacht-Pool International · Financial Security System">' +
          '<span class="sp-trust-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></span>' +
          '<span class="sp-trust-text"><span class="sp-trust-title">Checked &amp; Trusted</span><span class="sp-trust-sub">Yacht-Pool · valid 2026</span></span>' +
        '</div>' +
        '<div class="sp-divider"></div>' +
        '<div class="sp-testimonial">' +
          '<span class="sp-quote-icon" aria-hidden="true">"</span>' +
          '<span class="sp-quote-text">' + quote + '</span>' +
          '<span class="sp-quote-author">' + author + '</span>' +
        '</div>' +
      '</div></div>';
    },

    init: function() {
      var nodes = document.querySelectorAll('[data-component]');
      nodes.forEach(function(el) {
        var name = el.getAttribute('data-component');
        var fn = Components[name];
        if (typeof fn !== 'function') return;
        var opts = {};
        Array.prototype.forEach.call(el.attributes, function(attr) {
          if (attr.name.indexOf('data-') === 0 && attr.name !== 'data-component') {
            // data-quote-author -> quoteAuthor
            var key = attr.name.slice(5).replace(/-([a-z])/g, function(_, c) { return c.toUpperCase(); });
            opts[key] = attr.value;
          }
        });
        el.outerHTML = fn(opts);
      });
    }
  };

  // Render synchronně — script tag je na konci <body>, takže DOM je k dispozici.
  // Ostatní init funkce (mega-menu, teamModal listeners, atd.) běží potom a uvidí už vykreslené komponenty.
  Components.init();

  // Visual emphasis pro přihlášeného uživatele — solid fialová výplň místo decentního outlinu.
  // Detekce podle textu, abychom nemuseli per-page přidávat modifier class do HTML.
  document.querySelectorAll('.nav-login-btn').forEach(function(btn) {
    if (btn.textContent.trim() === 'Můj účet') btn.classList.add('nav-login-btn--account');
  });

  // ── SITEMAP REGISTRY ───────────────────────────────────
  // Jediný zdroj pravdy pro všechny stránky wireframe.
  // Když přidáš / odebereš stránku, uprav tento strom a mapa-stranek.html se sama aktualizuje.
  const SITEMAP_TREE = [
    { href: 'index.html', title: 'Úvodní stránka', id: 'page-home', icon: '🏠', root: true, children: [
      { href: 'pronajem-lodi.html', title: 'Výsledky hledání', id: 'page-results', group: true, children: [
        { href: 'detail-lodi.html', title: 'Detail lodi', id: 'page-detail', children: [
          { href: 'rezervace-krok-1.html', title: 'Rezervace — krok 1', id: 'page-booking-1', children: [
            { href: 'rezervace-krok-2.html', title: 'Rezervace — krok 2', id: 'page-booking-2', children: [
              { href: 'rezervace-potvrzeni.html', title: 'Potvrzení rezervace', id: 'page-booking-confirm' }
            ]}
          ]}
        ]}
      ]},
      { href: 'destinace.html', title: 'Přehled destinací', id: 'page-destinations', group: true, children: [
        { href: 'destinace-stat.html', title: 'Země', id: 'page-country' },
        { href: 'oblast.html', title: 'Oblast / region', id: 'page-destination' },
        { href: 'pristav.html', title: 'Marina', id: 'page-marina' }
      ]},
      { href: 'kategorie-lodi.html', title: 'Kategorie lodí', id: 'page-categories', group: true, children: [
        { href: 'detail-kategorie.html', title: 'Detail kategorie', id: 'page-category' }
      ]},
      { href: 'prehled-znacek.html', title: 'Přehled značek', id: 'page-brands', group: true, children: [
        { href: 'detail-znacky.html', title: 'Detail značky', id: 'page-brand', children: [
          { href: 'detail-modelu.html', title: 'Model lodi', id: 'page-model' }
        ]}
      ]},
      { href: 'charterove-spolecnosti.html', title: 'Charterové společnosti', id: 'page-companies', group: true, children: [
        { href: 'charterova-spolecnost.html', title: 'Detail společnosti', id: 'page-company' }
      ]},
      { href: 'kapitanske-kurzy.html', title: 'Kapitánské kurzy', id: 'page-courses', group: true, children: [
        { href: 'kurzy-na-mori.html', title: 'Kurzy na moře (LP)', id: 'page-courses-sea' },
        { href: 'vsechny-kurzy.html', title: 'Přehled všech kurzů', id: 'page-courses-all' },
        { href: 'srovnani-prukazu.html', title: 'Srovnání průkazů', id: 'page-compare' },
        { href: 'detail-kurzu.html', title: 'Detail kurzu', id: 'page-course', children: [
          { href: 'terminy-kurzu.html', title: 'Termíny kurzu', id: 'page-course-dates' }
        ]},
        { href: 'detail-prukazu.html', title: 'Detail průkazu', id: 'page-license' }
      ]},
      { href: 'magazin.html', title: 'Magazín', id: 'page-magazine', group: true, children: [
        { href: 'detail-clanku.html', title: 'Článek', id: 'page-article' }
      ]},
      { href: 'prihlaseni.html', title: 'Přihlášení', id: 'page-login', group: true, children: [
        { href: 'registrace.html', title: 'Registrace', id: 'page-register' },
        { href: 'zapomenute-heslo.html', title: 'Zapomenuté heslo', id: 'page-forgot-password' },
        { href: 'overeni.html', title: 'Ověření e-mailu', id: 'page-verify' }
      ]},
      { href: 'ucet.html', title: 'Můj účet', id: 'page-account', group: true, children: [
        { href: 'seznam-rezervaci.html', title: 'Moje rezervace', id: 'page-reservations', children: [
          { href: 'detail-rezervace.html', title: 'Detail rezervace', id: 'page-reservation-detail', children: [
            { href: 'check-in.html', title: 'Online check-in', id: 'page-checkin' }
          ]}
        ]},
        { href: 'prukazy.html', title: 'Moje průkazy', id: 'page-licenses', children: [
          { href: 'muj-prukaz.html', title: 'Detail mého průkazu', id: 'page-license-mine' },
          { href: 'pridat-prukaz.html', title: 'Přidat průkaz', id: 'page-license-add' }
        ]},
        { href: 'crew.html', title: 'Crew list', id: 'page-crew', children: [
          { href: 'clen-posadky.html', title: 'Detail člena posádky', id: 'page-crew-member' },
          { href: 'pridat-clena.html', title: 'Přidat člena posádky', id: 'page-crew-add' }
        ]},
        { href: 'oblibene.html', title: 'Oblíbené lodě', id: 'page-favorites' }
      ]},
      { href: 'o-nas.html', title: 'O nás', id: 'page-about' },
      { href: 'kontakt.html', title: 'Kontakt', id: 'page-contact' }
    ]}
  ];

  function countSitemapNodes(nodes) {
    var count = 0;
    nodes.forEach(function(n) {
      count += 1;
      if (n.children) count += countSitemapNodes(n.children);
    });
    return count;
  }

  function renderSitemapNode(node) {
    var classes = ['sm-node'];
    if (node.root) classes.push('sm-root');
    if (node.group) classes.push('sm-group');
    var icon = node.icon ? (node.icon + ' ') : '';
    var id = node.id ? '<span class="sm-node-id">' + node.id + '</span>' : '';
    var anchor = '<a class="' + classes.join(' ') + '" href="' + node.href + '">' + icon + node.title + ' ' + id + '</a>';
    var inner = '';
    if (node.children && node.children.length) {
      inner = '<ul>' + node.children.map(function(c) { return '<li>' + renderSitemapNode(c) + '</li>'; }).join('') + '</ul>';
    }
    return anchor + inner;
  }

  function renderSitemap() {
    var mount = document.getElementById('sitemap-tree');
    if (!mount) return;
    var total = countSitemapNodes(SITEMAP_TREE);
    mount.innerHTML = '<ul class="sm-tree">' + SITEMAP_TREE.map(function(n) { return '<li>' + renderSitemapNode(n) + '</li>'; }).join('') + '</ul>';
    document.querySelectorAll('[data-sitemap-count]').forEach(function(el) { el.textContent = total; });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSitemap);
  } else {
    renderSitemap();
  }

  // ── DESTINATIONS REGISTRY ───────────────────────────────
  // Plný seznam zemí, oblastí a marín pro search combobox.
  const DESTINATIONS = [
    // Chorvatsko
    { type: 'country', flag: '🇭🇷', name: 'Chorvatsko', country: 'Chorvatsko' },
    { type: 'region', flag: '🇭🇷', name: 'Dalmácie — Střed', country: 'Chorvatsko' },
    { type: 'region', flag: '🇭🇷', name: 'Dalmácie — Sever', country: 'Chorvatsko' },
    { type: 'region', flag: '🇭🇷', name: 'Dalmácie — Jih', country: 'Chorvatsko' },
    { type: 'region', flag: '🇭🇷', name: 'Kvarner', country: 'Chorvatsko' },
    { type: 'region', flag: '🇭🇷', name: 'Istrie', country: 'Chorvatsko' },
    { type: 'region', flag: '🇭🇷', name: 'Ostrovy (Chorvatsko)', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Split', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Trogir', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Šibenik', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Kaštela', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Marina Lav', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Zadar', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Biograd', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Murter', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Sukošan', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Dubrovník', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Korčula', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Mljet', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Ploče', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Rijeka', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Mali Lošinj', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Krk', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Rab', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Pula', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Rovinj', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Poreč', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Umag', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Hvar', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Brač', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Vis', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Šolta', country: 'Chorvatsko' },
    { type: 'marina', flag: '🇭🇷', name: 'Lastovo', country: 'Chorvatsko' },
    // Itálie
    { type: 'country', flag: '🇮🇹', name: 'Itálie', country: 'Itálie' },
    { type: 'region', flag: '🇮🇹', name: 'Sicílie', country: 'Itálie' },
    { type: 'region', flag: '🇮🇹', name: 'Sardinie', country: 'Itálie' },
    { type: 'region', flag: '🇮🇹', name: 'Toskánsko', country: 'Itálie' },
    { type: 'region', flag: '🇮🇹', name: 'Kampánie', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Palermo', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Catania', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Trapani', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Cagliari', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Olbia', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Porto Cervo', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Alghero', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Livorno', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Elba', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Neapol', country: 'Itálie' },
    { type: 'marina', flag: '🇮🇹', name: 'Amalfi', country: 'Itálie' },
    // Řecko
    { type: 'country', flag: '🇬🇷', name: 'Řecko', country: 'Řecko' },
    { type: 'region', flag: '🇬🇷', name: 'Athény & Sarónský záliv', country: 'Řecko' },
    { type: 'region', flag: '🇬🇷', name: 'Iónské ostrovy', country: 'Řecko' },
    { type: 'region', flag: '🇬🇷', name: 'Dodekanéské ostrovy', country: 'Řecko' },
    { type: 'region', flag: '🇬🇷', name: 'Kykladské ostrovy', country: 'Řecko' },
    { type: 'marina', flag: '🇬🇷', name: 'Athény (Alimos)', country: 'Řecko' },
    { type: 'marina', flag: '🇬🇷', name: 'Lavrio', country: 'Řecko' },
    { type: 'marina', flag: '🇬🇷', name: 'Korfu', country: 'Řecko' },
    { type: 'marina', flag: '🇬🇷', name: 'Lefkáda', country: 'Řecko' },
    { type: 'marina', flag: '🇬🇷', name: 'Kos', country: 'Řecko' },
    { type: 'marina', flag: '🇬🇷', name: 'Rhodos', country: 'Řecko' },
    { type: 'marina', flag: '🇬🇷', name: 'Mykonos', country: 'Řecko' },
    { type: 'marina', flag: '🇬🇷', name: 'Santorini', country: 'Řecko' },
    // Španělsko
    { type: 'country', flag: '🇪🇸', name: 'Španělsko', country: 'Španělsko' },
    { type: 'region', flag: '🇪🇸', name: 'Baleárské ostrovy', country: 'Španělsko' },
    { type: 'region', flag: '🇪🇸', name: 'Costa Brava', country: 'Španělsko' },
    { type: 'marina', flag: '🇪🇸', name: 'Palma de Mallorca', country: 'Španělsko' },
    { type: 'marina', flag: '🇪🇸', name: 'Ibiza', country: 'Španělsko' },
    { type: 'marina', flag: '🇪🇸', name: 'Menorca', country: 'Španělsko' },
    { type: 'marina', flag: '🇪🇸', name: 'Barcelona', country: 'Španělsko' },
    // Francie
    { type: 'country', flag: '🇫🇷', name: 'Francie', country: 'Francie' },
    { type: 'region', flag: '🇫🇷', name: 'Francouzská riviéra', country: 'Francie' },
    { type: 'region', flag: '🇫🇷', name: 'Korsika', country: 'Francie' },
    { type: 'marina', flag: '🇫🇷', name: 'Cannes', country: 'Francie' },
    { type: 'marina', flag: '🇫🇷', name: 'Nice', country: 'Francie' },
    { type: 'marina', flag: '🇫🇷', name: 'Saint-Tropez', country: 'Francie' },
    { type: 'marina', flag: '🇫🇷', name: 'Ajaccio', country: 'Francie' },
    // Turecko
    { type: 'country', flag: '🇹🇷', name: 'Turecko', country: 'Turecko' },
    { type: 'marina', flag: '🇹🇷', name: 'Bodrum', country: 'Turecko' },
    { type: 'marina', flag: '🇹🇷', name: 'Marmaris', country: 'Turecko' },
    { type: 'marina', flag: '🇹🇷', name: 'Göcek', country: 'Turecko' },
    { type: 'marina', flag: '🇹🇷', name: 'Fethiye', country: 'Turecko' },
    // Holandsko
    { type: 'country', flag: '🇳🇱', name: 'Holandsko', country: 'Holandsko' },
    { type: 'marina', flag: '🇳🇱', name: 'Amsterdam (IJmeer)', country: 'Holandsko' },
    { type: 'marina', flag: '🇳🇱', name: 'Fríské ostrovy', country: 'Holandsko' }
  ];

  const DEST_TYPE_LABEL = { country: 'Země', region: 'Oblast', marina: 'Přístav' };
  const DEST_TYPE_ORDER = { country: 0, region: 1, marina: 2 };
  const DEST_SECTION_PLURAL = { country: 'Země', region: 'Oblasti', marina: 'Přístavy' };

  // Kurátorovaný defaultní výpis — co se zobrazí v prázdném dropdownu před prvním písmenem.
  // Pořadí a obsah ručně udržované obchodem; jména musí existovat v DESTINATIONS.
  const POPULAR_DESTINATIONS = [
    { label: 'Top destinace', items: ['Chorvatsko'] },
    { label: 'Nejoblíbenější přístavy v Chorvatsku', items: ['Split', 'Trogir', 'Dubrovník'] },
    { label: 'Oblíbené ve Středomoří', items: ['Korfu', 'Athény (Alimos)', 'Sardinie', 'Palma de Mallorca', 'Bodrum'] }
  ];

  const STAR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.2l1.7-7L2 9.5l7.1-.6L12 2z"/></svg>';

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, function(c) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]); }); }

  function highlightMatch(name, q) {
    if (!q) return escapeHtml(name);
    var idx = name.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return escapeHtml(name);
    return escapeHtml(name.slice(0, idx)) + '<mark>' + escapeHtml(name.slice(idx, idx + q.length)) + '</mark>' + escapeHtml(name.slice(idx + q.length));
  }

  function initDestinationSearch() {
    document.querySelectorAll('[data-destination-search]').forEach(function(box) {
      var field = box.querySelector('.sf-combobox-field');
      var input = box.querySelector('.sf-combobox-input');
      var dropdown = box.querySelector('.sf-combobox-dropdown');
      var hidden = box.querySelector('input[type="hidden"]');
      if (!field || !input || !dropdown) return;
      var origPlaceholder = input.getAttribute('placeholder') || '';
      var activeIdx = -1;
      var results = [];
      var selected = []; // pole názvů destinací

      // Filtr na typy: data-types-only="marina,region" — omezí výchozí dataset jen na vybrané typy
      var typesOnly = (box.dataset.typesOnly || '').split(',').map(function(s){return s.trim();}).filter(Boolean);
      var DATA = typesOnly.length
        ? DESTINATIONS.filter(function(d){ return typesOnly.indexOf(d.type) !== -1; })
        : DESTINATIONS;

      // Předvyplnění z data-initial="Split,Korfu"
      var initial = (box.dataset.initial || '').split(',').map(function(s){return s.trim();}).filter(Boolean);
      initial.forEach(function(name) {
        var d = DATA.find(function(x){return x.name === name;});
        if (d && selected.indexOf(name) === -1) selected.push(name);
      });

      function syncHidden() {
        if (hidden) hidden.value = selected.join(',');
      }

      function findDest(name) {
        return DATA.find(function(d){return d.name === name;})
            || DESTINATIONS.find(function(d){return d.name === name;})
            || { name: name, flag: '📍', type: 'marina', country: '' };
      }

      // API: lze přidat položku zvenčí (např. klik na marina pin v mapě)
      box._addItem = function(name) {
        if (!name || selected.indexOf(name) !== -1) return;
        selected.push(name);
        renderChips();
        if (!dropdown.hasAttribute('hidden')) renderDropdown(input.value);
      };

      function renderChips() {
        // Odstranit staré chipy (vše kromě inputu)
        Array.prototype.slice.call(field.children).forEach(function(child) {
          if (child !== input) field.removeChild(child);
        });
        selected.forEach(function(name) {
          var d = findDest(name);
          if (!d) return;
          var chip = document.createElement('span');
          chip.className = 'sf-chip';
          chip.dataset.value = name;
          chip.innerHTML =
            '<span class="sf-chip-flag">' + d.flag + '</span>' +
            '<span class="sf-chip-name">' + escapeHtml(name) + '</span>' +
            '<button type="button" class="sf-chip-remove" aria-label="Odebrat ' + escapeHtml(name) + '">' +
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
            '</button>';
          field.insertBefore(chip, input);
        });
        // Placeholder skrýt, když je něco vybráno
        input.placeholder = selected.length ? '' : origPlaceholder;
        syncHidden();
      }

      function itemHtml(d, idx, q) {
        var isChecked = selected.indexOf(d.name) !== -1;
        return '<button type="button" class="sf-combobox-item' + (isChecked ? ' is-checked' : '') + '" data-idx="' + idx + '" data-value="' + escapeHtml(d.name) + '">' +
          '<span class="sf-combobox-check" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>' +
          '<span class="sf-combobox-flag">' + d.flag + '</span>' +
          '<span class="sf-combobox-name">' + highlightMatch(d.name, q) + '</span>' +
          '<span class="sf-combobox-tag">' + (DEST_TYPE_LABEL[d.type] || d.type) + '</span>' +
        '</button>';
      }

      function renderPopular() {
        results = [];
        activeIdx = -1;
        var html = '';
        POPULAR_DESTINATIONS.forEach(function(section) {
          var items = section.items
            .map(function(name) { return DATA.find(function(d) { return d.name === name; }); })
            .filter(Boolean);
          if (!items.length) return;
          html += '<div class="sf-combobox-section-title sf-combobox-section-title--popular">' +
            '<span class="sf-combobox-section-icon">' + STAR_SVG + '</span>' +
            escapeHtml(section.label) +
          '</div>';
          items.forEach(function(d) {
            var idx = results.length;
            results.push(d);
            html += itemHtml(d, idx, '');
          });
        });
        html += '<div class="sf-combobox-popular-hint">Začněte psát pro hledání všech destinací</div>';
        dropdown.innerHTML = html;
      }

      function renderDropdown(filter) {
        var q = (filter || '').trim();
        var ql = q.toLowerCase();
        if (!ql) { renderPopular(); return; }
        results = DATA.filter(function(d) { return d.name.toLowerCase().indexOf(ql) !== -1 || d.country.toLowerCase().indexOf(ql) !== -1; });
        // Systematický výpis: Státy → Oblasti → Přístavy, uvnitř typu abecedně (česky).
        results.sort(function(a, b) {
          var ta = DEST_TYPE_ORDER[a.type] != null ? DEST_TYPE_ORDER[a.type] : 99;
          var tb = DEST_TYPE_ORDER[b.type] != null ? DEST_TYPE_ORDER[b.type] : 99;
          if (ta !== tb) return ta - tb;
          return a.name.localeCompare(b.name, 'cs');
        });
        activeIdx = -1;
        if (!results.length) {
          dropdown.innerHTML = '<div class="sf-combobox-empty">Pro „' + escapeHtml(q) + '" nic nenalezeno.</div>';
          return;
        }
        var html = '';
        var lastType = '';
        results.forEach(function(d, i) {
          if (d.type !== lastType) {
            html += '<div class="sf-combobox-section-title">' + (DEST_SECTION_PLURAL[d.type] || d.type) + '</div>';
            lastType = d.type;
          }
          html += itemHtml(d, i, q);
        });
        dropdown.innerHTML = html;
      }

      function toggle(name) {
        var idx = selected.indexOf(name);
        if (idx === -1) selected.push(name); else selected.splice(idx, 1);
        renderChips();
        renderDropdown(input.value);
      }

      function open() {
        renderDropdown(input.value);
        dropdown.removeAttribute('hidden');
        box.setAttribute('aria-expanded', 'true');
        input.setAttribute('aria-expanded', 'true');
      }
      function close() {
        dropdown.setAttribute('hidden', '');
        box.setAttribute('aria-expanded', 'false');
        input.setAttribute('aria-expanded', 'false');
      }
      function highlightActive() {
        var items = dropdown.querySelectorAll('.sf-combobox-item');
        items.forEach(function(it, i) { it.classList.toggle('is-active', i === activeIdx); });
        var active = items[activeIdx];
        if (active) active.scrollIntoView({ block: 'nearest' });
      }

      input.addEventListener('focus', open);
      input.addEventListener('input', function() { open(); });
      input.addEventListener('keydown', function(e) {
        var items = dropdown.querySelectorAll('.sf-combobox-item');
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (dropdown.hasAttribute('hidden')) open();
          activeIdx = Math.min(activeIdx + 1, items.length - 1);
          highlightActive();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          activeIdx = Math.max(activeIdx - 1, 0);
          highlightActive();
        } else if (e.key === 'Enter') {
          if (activeIdx >= 0 && items[activeIdx]) {
            e.preventDefault();
            toggle(items[activeIdx].dataset.value);
          }
        } else if (e.key === 'Backspace' && input.value === '' && selected.length) {
          e.preventDefault();
          selected.pop();
          renderChips();
          renderDropdown(input.value);
        } else if (e.key === 'Escape') {
          close();
          input.blur();
        }
      });

      // Klik na položku dropdownu = toggle (zachová otevřený dropdown)
      dropdown.addEventListener('mousedown', function(e) {
        var item = e.target.closest('.sf-combobox-item');
        if (!item) return;
        e.preventDefault();
        toggle(item.dataset.value);
        input.focus();
      });

      // Klik na ✕ v chipu = odebrání
      field.addEventListener('click', function(e) {
        var btn = e.target.closest('.sf-chip-remove');
        if (!btn) return;
        e.preventDefault(); e.stopPropagation();
        var chip = btn.closest('.sf-chip');
        if (!chip) return;
        var name = chip.dataset.value;
        var idx = selected.indexOf(name);
        if (idx !== -1) { selected.splice(idx, 1); renderChips(); renderDropdown(input.value); }
      });

      // Klik kdekoli na pole otevře dropdown (i když má input už focus)
      field.addEventListener('mousedown', function(e) {
        if (e.target === field) { e.preventDefault(); input.focus(); }
        if (dropdown.hasAttribute('hidden')) open();
      });

      // Zavřít při kliku mimo box (ale chipy zůstanou)
      document.addEventListener('mousedown', function(e) {
        if (!box.contains(e.target) && !dropdown.hasAttribute('hidden')) close();
      });

      renderChips();
    });
  }

  function initPeopleSelect() {
    document.querySelectorAll('[data-people-inline]').forEach(function(box) {
      var input = box.querySelector('.sf-people-input');
      var dec = box.querySelector('[data-step="-1"]');
      var inc = box.querySelector('[data-step="1"]');
      var min = parseInt(box.dataset.min, 10) || 1;
      var max = parseInt(box.dataset.max, 10) || 12;
      if (!input) return;

      function clamp(n) {
        if (isNaN(n)) return min;
        return Math.max(min, Math.min(max, n));
      }
      function setVal(n) {
        var c = clamp(n);
        input.value = c;
        if (dec) dec.disabled = c <= min;
        if (inc) inc.disabled = c >= max;
      }
      if (dec) dec.addEventListener('click', function(e) {
        e.stopPropagation();
        setVal((parseInt(input.value, 10) || min) - 1);
      });
      if (inc) inc.addEventListener('click', function(e) {
        e.stopPropagation();
        setVal((parseInt(input.value, 10) || min) + 1);
      });
      input.addEventListener('input', function() {
        var n = parseInt(input.value, 10);
        if (!isNaN(n)) {
          if (dec) dec.disabled = n <= min;
          if (inc) inc.disabled = n >= max;
        }
      });
      input.addEventListener('blur', function() { setVal(parseInt(input.value, 10)); });
      setVal(parseInt(input.value, 10) || min);
    });
  }

  function initDateRangePicker() {
    var MONTHS = ['Leden','Únor','Březen','Duben','Květen','Červen','Červenec','Srpen','Září','Říjen','Listopad','Prosinec'];
    var DOW = ['Po','Út','St','Čt','Pá','So','Ne'];

    document.querySelectorAll('[data-daterange]').forEach(function(box) {
      var trigger = box.querySelector('.sf-daterange-trigger');
      var label = box.querySelector('.sf-daterange-label');
      var popover = box.querySelector('.sf-daterange-popover');
      var fromHidden = box.querySelector('input[name="from"]');
      var toHidden = box.querySelector('input[name="to"]');
      if (!trigger || !popover || !label) return;

      var today = new Date(); today.setHours(0,0,0,0);
      var viewYear = today.getFullYear();
      var viewMonth = today.getMonth();
      var fromDate = parseInitial(fromHidden && fromHidden.value);
      var toDate = parseInitial(toHidden && toHidden.value);

      function parseInitial(s) {
        if (!s) return null;
        var parts = s.split('-'); if (parts.length !== 3) return null;
        var d = new Date(parseInt(parts[0],10), parseInt(parts[1],10)-1, parseInt(parts[2],10));
        d.setHours(0,0,0,0); return d;
      }
      function isoDate(d) {
        var m = d.getMonth() + 1, day = d.getDate();
        return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
      }
      function fmtDate(d) { return d.getDate() + '. ' + (d.getMonth()+1) + '. ' + d.getFullYear(); }
      function fmtShort(d) { return d.getDate() + '. ' + (d.getMonth()+1) + '.'; }

      function updateLabel() {
        if (fromDate && toDate) {
          label.textContent = fmtShort(fromDate) + ' – ' + fmtDate(toDate);
          label.classList.remove('sf-daterange-label--placeholder');
        } else if (fromDate) {
          label.textContent = fmtDate(fromDate) + ' – …';
          label.classList.remove('sf-daterange-label--placeholder');
        } else {
          label.textContent = 'Kdykoliv';
          label.classList.add('sf-daterange-label--placeholder');
        }
        if (fromHidden) fromHidden.value = fromDate ? isoDate(fromDate) : '';
        if (toHidden) toHidden.value = toDate ? isoDate(toDate) : '';
      }

      function renderMonth(year, month) {
        var html = '';
        html += '<div class="sf-cal-month">';
        html += '<div class="sf-cal-month-title">' + MONTHS[month] + ' ' + year + '</div>';
        html += '<div class="sf-cal-grid">';
        DOW.forEach(function(d) { html += '<div class="sf-cal-dow">' + d + '</div>'; });
        var first = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0).getDate();
        var startDow = (first.getDay() + 6) % 7;
        for (var i = 0; i < startDow; i++) {
          html += '<button class="sf-cal-day is-empty" type="button" disabled></button>';
        }
        for (var d = 1; d <= lastDay; d++) {
          var dt = new Date(year, month, d);
          var isPast = dt < today;
          var cls = ['sf-cal-day'];
          if (dt.getDay() === 6) cls.push('is-saturday');
          if (dt.getTime() === today.getTime()) cls.push('is-today');
          if (fromDate && dt.getTime() === fromDate.getTime()) cls.push('is-start');
          if (toDate && dt.getTime() === toDate.getTime()) cls.push('is-end');
          if (fromDate && toDate && dt > fromDate && dt < toDate) cls.push('is-in-range');
          html += '<button type="button" class="' + cls.join(' ') + '" data-year="' + year + '" data-month="' + month + '" data-day="' + d + '"' + (isPast ? ' disabled' : '') + '>' + d + '</button>';
        }
        html += '</div>';
        html += '</div>';
        return html;
      }

      function render() {
        var nextYear = viewYear, nextMonth = viewMonth + 1;
        if (nextMonth > 11) { nextMonth = 0; nextYear++; }
        var html = '';
        html += '<div class="sf-cal-head">';
        html += '<button type="button" class="sf-cal-nav" data-dir="-1" aria-label="Předchozí měsíce"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>';
        html += '<button type="button" class="sf-cal-nav sf-cal-nav--next" data-dir="1" aria-label="Další měsíce"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>';
        html += '</div>';
        html += '<div class="sf-cal-months">';
        html += renderMonth(viewYear, viewMonth);
        html += renderMonth(nextYear, nextMonth);
        html += '</div>';
        var hint = (fromDate && !toDate) ? 'Vyberte konec rozpětí' : 'Klikněte na začátek a konec';
        html += '<div class="sf-cal-foot">';
        html += '<span class="sf-cal-hint">' + hint + '</span>';
        html += '<button type="button" class="sf-cal-clear">Vymazat</button>';
        html += '</div>';
        popover.innerHTML = html;
      }

      function open() { popover.hidden = false; box.setAttribute('aria-expanded', 'true'); if (fromDate) { viewYear = fromDate.getFullYear(); viewMonth = fromDate.getMonth(); } render(); }
      function close() { popover.hidden = true; box.setAttribute('aria-expanded', 'false'); }

      trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        if (popover.hidden) open(); else close();
      });

      popover.addEventListener('click', function(e) {
        e.stopPropagation();
        var navBtn = e.target.closest('.sf-cal-nav');
        if (navBtn) {
          var dir = parseInt(navBtn.dataset.dir, 10) * 2;
          viewMonth += dir;
          while (viewMonth > 11) { viewMonth -= 12; viewYear++; }
          while (viewMonth < 0) { viewMonth += 12; viewYear--; }
          render(); return;
        }
        var clearBtn = e.target.closest('.sf-cal-clear');
        if (clearBtn) { fromDate = null; toDate = null; updateLabel(); render(); return; }
        var dayBtn = e.target.closest('.sf-cal-day');
        if (dayBtn && !dayBtn.disabled && !dayBtn.classList.contains('is-empty')) {
          var day = parseInt(dayBtn.dataset.day, 10);
          var yr = parseInt(dayBtn.dataset.year, 10);
          var mo = parseInt(dayBtn.dataset.month, 10);
          var dt = new Date(yr, mo, day);
          if (!fromDate || (fromDate && toDate)) { fromDate = dt; toDate = null; }
          else if (dt <= fromDate) { fromDate = dt; toDate = null; }
          else { toDate = dt; }
          updateLabel(); render();
          if (fromDate && toDate) { setTimeout(close, 180); }
        }
      });

      // Hover preview rozsahu po výběru start dne (před kliknutím na end).
      function clearRangePreview() {
        popover.querySelectorAll('.sf-cal-day.is-in-range-preview, .sf-cal-day.is-end-preview').forEach(function(el) {
          el.classList.remove('is-in-range-preview', 'is-end-preview');
        });
      }
      popover.addEventListener('mouseover', function(e) {
        if (!fromDate || toDate) return;
        var dayBtn = e.target.closest('.sf-cal-day');
        if (!dayBtn || dayBtn.disabled || dayBtn.classList.contains('is-empty')) return;
        var hoverDate = new Date(
          parseInt(dayBtn.dataset.year, 10),
          parseInt(dayBtn.dataset.month, 10),
          parseInt(dayBtn.dataset.day, 10)
        );
        if (hoverDate <= fromDate) { clearRangePreview(); return; }
        popover.querySelectorAll('.sf-cal-day').forEach(function(el) {
          el.classList.remove('is-in-range-preview', 'is-end-preview');
          if (el.disabled || el.classList.contains('is-empty')) return;
          var dt = new Date(
            parseInt(el.dataset.year, 10),
            parseInt(el.dataset.month, 10),
            parseInt(el.dataset.day, 10)
          );
          if (dt.getTime() === hoverDate.getTime()) el.classList.add('is-end-preview');
          else if (dt > fromDate && dt < hoverDate) el.classList.add('is-in-range-preview');
        });
      });
      popover.addEventListener('mouseleave', clearRangePreview);

      document.addEventListener('click', function(e) {
        if (!box.contains(e.target) && !popover.hidden) close();
      });

      // Public API — umožní externí kód (např. active filter chip „×") vymazat termín.
      box._clear = function() { fromDate = null; toDate = null; updateLabel(); render(); };

      updateLabel();
    });
  }

  // ── PROMO SLIDER (Thajsko full-width + slide s dvojicí image-only bannerů) ───
  // Slidy mají různé typy:
  //   kind: 'hero' → full-width banner s image + content (Thajsko)
  //   kind: 'pair' → 2 image-only kartičky vedle sebe (50 % + 50 %), text na obrázku
  // Šipky/tečky přepínají mezi slidy, výchozí je první (Thajsko).
  const PROMO_SLIDES = [
    {
      kind: 'hero',
      overlayEyebrow: 'Amazing Thailand',
      overlayTitle: 'Flotilla Sailing 2026<br>v Andamanském moři',
      eyebrow: 'Limitovaná akce · únor–březen 2026',
      title: 'Plujte v Thajsku se slevou',
      text: 'Flotilová plavba souostrovím Phuket–Phi Phi s místním kapitánem. Samostatná loď pro vaši posádku, společné kotvení a večery.',
      cta: { label: 'Více informací', href: 'detail-clanku.html' }
    },
    {
      kind: 'pair',
      tiles: [
        {
          eyebrow: 'Předsezóna 2026',
          title: 'Chorvatsko se slevou 15 %',
          href: 'pronajem-lodi.html'
        },
        {
          eyebrow: 'Kapitánské kurzy 2026',
          title: 'Průkaz za 9 dní přímo na moři',
          href: 'kapitanske-kurzy.html'
        }
      ]
    }
  ];

  function initPromoSlider() {
    document.querySelectorAll('[data-promo-slider]').forEach(function(root) {
      if (!PROMO_SLIDES.length) return;
      var activeIdx = 0;
      var hasMore = PROMO_SLIDES.length > 1;

      function heroHtml(b) {
        return '<article class="promo-banner">' +
          '<div class="promo-banner-visual">' +
            '<div class="promo-banner-overlay">' +
              '<div class="promo-banner-overlay-eyebrow">' + escapeHtml(b.overlayEyebrow) + '</div>' +
              '<div class="promo-banner-overlay-title">' + b.overlayTitle + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="promo-banner-content">' +
            '<div class="promo-banner-eyebrow">' + escapeHtml(b.eyebrow) + '</div>' +
            '<h2 class="promo-banner-title">' + escapeHtml(b.title) + '</h2>' +
            '<p class="promo-banner-text">' + escapeHtml(b.text) + '</p>' +
            '<div class="promo-banner-cta-row">' +
              '<a class="btn-primary-lg" href="' + b.cta.href + '">' + escapeHtml(b.cta.label) + ' →</a>' +
            '</div>' +
          '</div>' +
        '</article>';
      }

      function tileHtml(t) {
        var eyebrow = t.eyebrow ? '<div class="promo-tile-eyebrow">' + escapeHtml(t.eyebrow) + '</div>' : '';
        return '<a class="promo-tile" href="' + t.href + '" aria-label="' + escapeHtml(t.title) + '">' +
          '<div class="promo-tile-overlay">' +
            eyebrow +
            '<div class="promo-tile-title">' + escapeHtml(t.title) + '</div>' +
          '</div>' +
        '</a>';
      }

      function pairHtml(slide) {
        return '<div class="promo-pair">' +
          slide.tiles.map(tileHtml).join('') +
        '</div>';
      }

      function slideHtml(slide) {
        if (slide.kind === 'pair') return pairHtml(slide);
        return heroHtml(slide);
      }

      function render() {
        var arrowSvg = function(dir) {
          var pts = dir === -1 ? '15 18 9 12 15 6' : '9 18 15 12 9 6';
          return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="' + pts + '"/></svg>';
        };
        var dotsHtml = PROMO_SLIDES.map(function(_, i) {
          return '<button type="button" class="promo-slider-dot' + (i === activeIdx ? ' is-active' : '') +
            '" data-promo-dot="' + i + '" aria-label="Banner ' + (i + 1) + ' z ' + PROMO_SLIDES.length + '"></button>';
        }).join('');
        var controlsHtml = hasMore
          ? '<button type="button" class="promo-slider-arrow promo-slider-arrow--prev" data-promo-dir="-1" aria-label="Předchozí banner">' + arrowSvg(-1) + '</button>' +
            '<button type="button" class="promo-slider-arrow promo-slider-arrow--next" data-promo-dir="1" aria-label="Další banner">' + arrowSvg(1) + '</button>' +
            '<div class="promo-slider-dots">' + dotsHtml + '</div>'
          : '';
        root.innerHTML =
          '<div class="promo-slider-stage">' +
            slideHtml(PROMO_SLIDES[activeIdx]) +
            controlsHtml +
          '</div>';
      }

      root.addEventListener('click', function(e) {
        var dotBtn = e.target.closest('[data-promo-dot]');
        if (dotBtn) { activeIdx = parseInt(dotBtn.dataset.promoDot, 10); render(); return; }
        var dirBtn = e.target.closest('[data-promo-dir]');
        if (dirBtn) {
          e.preventDefault();
          var d = parseInt(dirBtn.dataset.promoDir, 10);
          activeIdx = (activeIdx + d + PROMO_SLIDES.length) % PROMO_SLIDES.length;
          render();
        }
      });

      render();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { initDestinationSearch(); initPeopleSelect(); initDateRangePicker(); initPromoSlider(); });
  } else {
    initDestinationSearch();
    initPeopleSelect();
    initDateRangePicker();
    initPromoSlider();
  }

  // ── BOAT DATA ──────────────────────────────────────────
  const BOATS = [
    { name:"Bavaria C42", boatName:"Lady One", cat:"Plachetnice", marina:"ACI Marina Split", company:"Sunsail", year:2021, len:"12.8 m", cabins:3, berths:6, price:"36 000 Kč", rec:true,
      perks:["early-checkin","free-motor"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Záchranný balíček","Kokpitový stůl"] },
    { name:"Jeanneau Sun Odyssey 54", boatName:"Blue Wind", cat:"Plachetnice", marina:"Marina Lav", company:"Navigare Yachting", year:2020, len:"16.5 m", cabins:5, berths:10, price:"80 000 Kč", discount:15, status:"prereserved",
      perks:["deposit-30"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Závěsný motor + dinghy","Klimatizace","Výrobník vody","Solární panely"] },
    { name:"Lagoon 42", boatName:"Ocean Dream", cat:"Katamaran", marina:"Marina Kaštela", company:"Moorings", year:2022, len:"12.9 m", cabins:4, berths:8, price:"95 000 Kč", rec:true, status:"reserved",
      perks:["early-checkin"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","AIS","Závěsný motor + dinghy","BBQ","Šnorchlovací sada","Kokpitový stůl"] },
    { name:"Fountaine Pajot 47", boatName:"Gemini", cat:"Katamaran", marina:"ACI Marina Split", company:"Dream Yacht Charter", year:2023, len:"14.3 m", cabins:5, berths:10, price:"128 000 Kč",
      perks:["free-motor","deposit-30"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Klimatizace","Generátor","Solární panely","Výrobník vody"] },
    { name:"Greenline 45", boatName:"Horizon", cat:"Motorová jachta", marina:"Marina Spinut", company:"MareSail d.o.o.", year:2021, len:"13.7 m", cabins:3, berths:6, price:"115 000 Kč", reserved:true,
      amenities:["Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Příďový propulzor","Klimatizace","Generátor"] },
    { name:"Elan 45", boatName:"Adriatic Wind", cat:"Plachetnice", marina:"Marina Trogir", company:"Ultra Sailing", year:2019, len:"13.9 m", cabins:4, berths:8, price:"52 000 Kč", discount:15,
      perks:["last-minute","free-motor"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Závěsný motor + dinghy","Šnorchlovací sada","Kokpitový stůl"] },
    { name:"Bavaria C45", boatName:"Sea Spirit", cat:"Plachetnice", marina:"ACI Marina Split", company:"Bavaria Yachtbau Charter", year:2022, len:"13.5 m", cabins:4, berths:8, price:"45 000 Kč", status:"prereserved",
      perks:["early-checkin","deposit-30"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","AIS","Závěsný motor + dinghy","Kokpitový stůl"] },
    { name:"Hanse 548", boatName:"Nordic Star", cat:"Plachetnice", marina:"Marina Šibenik", company:"Adriatic Charter", year:2021, len:"16.7 m", cabins:5, berths:10, price:"88 000 Kč", rec:true,
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Klimatizace","Závěsný motor + dinghy"] },
    { name:"Lagoon 50", boatName:"Calypso", cat:"Katamaran", marina:"ACI Marina Dubrovník", company:"Moorings", year:2022, len:"15.0 m", cabins:6, berths:12, price:"175 000 Kč",
      perks:["free-motor"], reserved:true,
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Klimatizace","Generátor","Solární panely"] },
    { name:"Jeanneau 44", boatName:"Mistral", cat:"Plachetnice", marina:"Marina Biograd", company:"Nausys Charter", year:2020, len:"13.4 m", cabins:4, berths:8, price:"48 000 Kč", discount:10,
      perks:["last-minute","early-checkin","deposit-30"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Závěsný motor + dinghy","BBQ"] },
    { name:"Bénéteau Oceanis 51", boatName:"Azzurra", cat:"Plachetnice", marina:"Marina Zadar", company:"Dalmacija Charter", year:2021, len:"15.4 m", cabins:5, berths:10, price:"72 000 Kč", status:"prereserved",
      perks:["early-checkin"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Závěsný motor + dinghy","Šnorchlovací sada"] },
    { name:"Excess 11", boatName:"Dual Dream", cat:"Katamaran", marina:"Marina Trogir", company:"Sunsail", year:2023, len:"11.0 m", cabins:4, berths:8, price:"85 000 Kč", rec:true,
      perks:["deposit-30"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","AIS","BBQ","Šnorchlovací sada","Závěsný motor + dinghy"] },
    { name:"Prestige 520", boatName:"Riviera", cat:"Motorová jachta", marina:"Marina Kaštela", company:"MY Charter", year:2022, len:"15.7 m", cabins:4, berths:8, price:"145 000 Kč",
      amenities:["Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Příďový propulzor","Klimatizace","Generátor"] },
    { name:"Sun Odyssey 410", boatName:"Tramontane", cat:"Plachetnice", marina:"Marina Lav", company:"Navigare Yachting", year:2020, len:"12.4 m", cabins:3, berths:6, price:"38 000 Kč",
      perks:["free-motor"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Závěsný motor + dinghy","Kokpitový stůl"] },
    { name:"Bali 4.8", boatName:"Ghost", cat:"Katamaran", marina:"ACI Marina Dubrovník", company:"Cosmos Yachting", year:2022, len:"14.6 m", cabins:4, berths:10, price:"112 000 Kč",
      perks:["early-checkin","free-motor","deposit-30"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Klimatizace","Generátor","Solární panely","BBQ"] },
    { name:"Bavaria C50", boatName:"Adriatica", cat:"Plachetnice", marina:"Marina Šibenik", company:"OceanSail Croatia", year:2023, len:"15.2 m", cabins:5, berths:10, price:"95 000 Kč", discount:8,
      perks:["last-minute"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Závěsný motor + dinghy","Klimatizace"] },
  ];

  // Marketing perks — visuální přepínače pro lodě (nezávazné taháky).
  const PERKS = {
    'early-checkin': { label: 'Dřívější nalodění', cls: 'card-perk--early', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
    'free-motor':    { label: 'Motor zdarma',  cls: 'card-perk--motor', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' },
    'deposit-30':    { label: 'První platba 30 %', cls: 'card-perk--deposit', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>' },
    'last-minute':   { label: 'Last minute',  cls: 'card-perk--lastminute', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' }
  };
  function renderPerks(list) {
    if (!Array.isArray(list) || !list.length) return '';
    return list.map(function(key) {
      var p = PERKS[key]; if (!p) return '';
      return '<span class="card-perk ' + p.cls + '">' + p.icon + p.label + '</span>';
    }).join('');
  }

  function boatCard(b) {
    const MAX_TAGS = 4;
    const visibleTags = b.amenities.slice(0, MAX_TAGS).map(a => `<span class="amenity-tag">${a}</span>`).join("");
    const extraCount = Math.max(0, b.amenities.length - MAX_TAGS);
    const tags = visibleTags + (extraCount ? `<span class="amenity-tag amenity-tag--more">+${extraCount}</span>` : "");
    const discountBadge = b.discount ? `<span class="badge badge-dis">−${b.discount} %</span>` : "";
    const rec = b.rec ? `<span class="badge badge-rec">★ Doporučujeme</span>` : "";
    const oldPriceVal = b.discount ? `${Math.round(parseInt(b.price.replace(/\D/g,"")) / (1 - b.discount/100)).toLocaleString("cs")} Kč` : "";
    const oldPrice = b.discount ? `<div class="price-old-row"><span class="price-old">${oldPriceVal}</span>${discountBadge}</div>` : "";
    const priceClass = b.discount ? "price-val price-val--sale" : "price-val";
    const favId = ((b.name || '') + '-' + (b.boatName || '')).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const favName = (b.name || '') + (b.boatName ? ' "' + b.boatName + '"' : '');
    const perksHtml = renderPerks(b.perks);
    const wc = b.wc != null ? b.wc : Math.max(1, Math.round((b.cabins || 2) / 2));
    const persons = b.persons || b.berths;
    const lenMatch = (b.len || '').match(/(\d+[.,]?\d*)/);
    const lenFt = lenMatch ? (parseFloat(lenMatch[1].replace(',', '.')) * 3.28084).toFixed(1).replace('.', ',') + ' ft' : '';
    const ratingVal = (b.rating != null ? b.rating : 4.7).toFixed(1).replace('.', ',');
    const ratingCount = b.ratingCount != null ? b.ratingCount : 124;
    const ratingHtml = '<div class="card-rating" title="Hodnocení modelu ' + b.name + '"><span class="card-rating-stars">★★★★★</span><span class="card-rating-val">' + ratingVal + '</span><span class="card-rating-count">(' + ratingCount + ' hodnocení)</span></div>';
    const statusMap = {
      reserved:    { cls: 'card-status--reserved',    label: 'Rezervovaná' },
      prereserved: { cls: 'card-status--prereserved', label: 'Předrezervovaná' },
      free:        { cls: 'card-status--free',        label: 'Volná' }
    };
    const statusKey = b.status || (b.reserved ? 'reserved' : 'free');
    const status = statusMap[statusKey] || statusMap.free;
    const statusHtml = '<span class="card-status ' + status.cls + '"><span class="card-status-dot"></span>' + status.label + '</span>';
    return `
      <div class="boat-card" data-href="detail-lodi.html" role="link" tabindex="0">
        <div class="card-img" data-img-idx="0" data-img-total="5">
          <button type="button" class="card-img-arrow card-img-arrow--prev" aria-label="Předchozí obrázek"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
          <button type="button" class="card-img-arrow card-img-arrow--next" aria-label="Další obrázek"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
          <div class="card-img-dots"><span class="card-img-dot is-active"></span><span class="card-img-dot"></span><span class="card-img-dot"></span><span class="card-img-dot"></span><span class="card-img-dot"></span></div>
        </div>
        <div class="card-body">
          <div>
            <div class="card-badges">${rec}${perksHtml}</div>
            <div class="card-name">${b.name}</div>
            <div class="card-boat-name">"${b.boatName || "Lady One"}"</div>
            ${ratingHtml}
            <div class="card-marina">🇭🇷 <a href="oblast.html" style="color:var(--int);text-decoration:none;">${b.marina}</a></div>
            <div class="card-company"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>Charterovka <a href="charterova-spolecnost.html">${b.company || "Yachtnet partner"}</a></div>
            <div class="card-specs">
              <div class="spec"><span class="spec-l">Rok</span><span class="spec-v">${b.year}</span></div>
              <div class="spec"><span class="spec-l">Kajuty</span><span class="spec-v">${b.cabins}</span></div>
              <div class="spec"><span class="spec-l">Lůžka</span><span class="spec-v">${b.berths}</span></div>
              <div class="spec"><span class="spec-l">Osoby</span><span class="spec-v">${persons}</span></div>
              <div class="spec"><span class="spec-l">WC</span><span class="spec-v">${wc}</span></div>
              <div class="spec"><span class="spec-l">Délka</span><span class="spec-v">${b.len}${lenFt ? ' <span class="spec-sub">(' + lenFt + ')</span>' : ''}</span></div>
            </div>
          </div>
          <div class="card-amenities">${tags}</div>
        </div>
        <div class="card-side">
          <div class="card-side-top">
            ${statusHtml}
          </div>
          <div class="card-side-bottom">
            <div class="card-price">
              ${oldPrice}
              <div class="price-main">
                <span class="price-from">Od</span>
                <span class="${priceClass}">${b.price}</span>
                <span class="price-unit">za 7 nocí</span>
              </div>
              <div class="price-sub">+ 12 611 Kč poplatky</div>
            </div>
            <div class="card-side-actions">
              <button class="card-icon-btn" type="button" aria-label="Přidat do oblíbených" data-fav-id="${favId}" data-fav-name='${favName.replace(/'/g, "&apos;")}'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><span class="card-icon-tooltip" role="tooltip">Přidat do oblíbených</span></button>
              <button class="btn-view" onclick="window.location.href='detail-lodi.html'">Detail →</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ── SEARCH → RESULTS ───────────────────────────────────
  document.getElementById("searchForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "pronajem-lodi.html";
  });

  // ── STRÁNKOVÁNÍ ────────────────────────────────────────
  const PER_PAGE = 16;
  const TOTAL_PAGES = 19; // simuluje 304 lodí celkem
  let currentPage = 1;

  function getSelectedMarinas() {
    var box = document.querySelector('.sf-combobox--filter[data-types-only="marina"]');
    if (!box) return [];
    return Array.prototype.map.call(
      box.querySelectorAll('.sf-combobox-field .sf-chip'),
      function(c) { return c.dataset.value; }
    );
  }

  function renderAllBoats() {
    const grid = document.getElementById("boatsGrid");
    if (!grid) return;
    var marinas = getSelectedMarinas();
    var filtered = marinas.length
      ? BOATS.filter(function(b) { return marinas.indexOf(b.marina) !== -1; })
      : BOATS;
    const countEl = document.getElementById("resultCount");
    if (countEl) countEl.textContent = marinas.length ? filtered.length : 228;
    grid.innerHTML = filtered.length
      ? filtered.map(boatCard).join("")
      : '<div style="padding:40px;text-align:center;color:var(--muted);font-size:14px;">Pro vybraný přístav nejsou žádné lodě.</div>';
    renderPagination(currentPage, TOTAL_PAGES);
  }

  function renderPagination(page, total) {
    const wrap = document.getElementById("pagination");
    if (!wrap) return;

    // Sestaví pole prvků: číslo nebo "…"
    function pages() {
      const p = [];
      const add = (n) => { if (!p.includes(n)) p.push(n); };
      add(1);
      add(total);
      for (let i = page - 2; i <= page + 2; i++) {
        if (i >= 1 && i <= total) add(i);
      }
      return p.sort((a, b) => a - b);
    }

    const nums = pages();
    let html = `<button class="pg-btn pg-arrow" ${page === 1 ? "disabled" : ""} onclick="goToPage(${page - 1})">←</button>`;

    let prev = 0;
    for (const n of nums) {
      if (n - prev > 1) html += `<button class="pg-btn pg-dots">…</button>`;
      html += `<button class="pg-btn${n === page ? " pg-active" : ""}" onclick="goToPage(${n})">${n}</button>`;
      prev = n;
    }

    html += `<button class="pg-btn pg-arrow" ${page === total ? "disabled" : ""} onclick="goToPage(${page + 1})">→</button>`;
    wrap.innerHTML = html;
  }

  function goToPage(n) {
    currentPage = n;
    // V reálné implementaci by se načetla data pro danou stránku.
    // Ve wireframu jen překreslíme stránkování a scrollujeme nahoru.
    renderPagination(currentPage, TOTAL_PAGES);
    document.getElementById("boatsMain")?.scrollIntoView({ behavior: "smooth" });
  }

  document.querySelectorAll("[id='backHome']").forEach(el => {
    el.addEventListener("click", function(e) { e.preventDefault(); window.location.href = "index.html"; });
  });

  // ── TESTIMONIALS + TABS ───────────────────────────────
  if (document.querySelector('.testi-tab')) {
  let currentPanel = document.querySelector('.testi-tab.active')?.dataset.panel || "rental";
  let currentIdx   = 0;

  function getVisible() {
    return [...document.querySelectorAll(`.testimonial[data-panel="${currentPanel}"]`)];
  }

  function buildDots() {
    const wrap = document.getElementById("carouselDots");
    wrap.innerHTML = "";
    getVisible().forEach((_, i) => {
      const d = document.createElement("div");
      d.className = "dot" + (i === 0 ? " active" : "");
      d.addEventListener("click", () => goTo(i));
      wrap.appendChild(d);
    });
  }

  function goTo(n) {
    const items = getVisible();
    const dots  = document.getElementById("carouselDots").children;
    items[currentIdx].classList.remove("active");
    if (dots[currentIdx]) dots[currentIdx].classList.remove("active");
    currentIdx = (n + items.length) % items.length;
    items[currentIdx].classList.add("active");
    if (dots[currentIdx]) dots[currentIdx].classList.add("active");
  }

  function switchPanel(panel) {
    // hide all
    document.querySelectorAll(".testimonial").forEach(t => {
      t.classList.remove("active"); t.style.display = "none";
    });
    currentPanel = panel; currentIdx = 0;
    getVisible().forEach(t => { t.style.display = ""; });
    getVisible()[0].classList.add("active");
    buildDots();
  }

  document.querySelectorAll(".testi-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".testi-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      switchPanel(tab.dataset.panel);
    });
  });

  document.getElementById("carouselPrev")?.addEventListener("click", () => goTo(currentIdx - 1));
  document.getElementById("carouselNext")?.addEventListener("click", () => goTo(currentIdx + 1));
  buildDots();

  }

  // ── CABIN PILLS ────────────────────────────────────────
  document.querySelectorAll(".cabin-pill").forEach(p => {
    p.addEventListener("click", () => {
      document.querySelectorAll(".cabin-pill").forEach(x => x.classList.remove("active"));
      p.classList.add("active");
    });
  });

  // ── FAQ ACCORDION ──────────────────────────────────────
  document.addEventListener("click", function(e) {
    const btn = e.target.closest(".faq-q");
    if (!btn) return;
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-q-icon");
    const open = answer.style.display === "block";
    answer.style.display = open ? "none" : "block";
    if (icon) icon.textContent = open ? "+" : "−";
  });

  // Hero animace při prvním načtení (page-home se nezobrazuje přes showPage)
  (function() {
    const hero = document.querySelector('#page-home .hero');
    if (hero) hero.classList.add('hero-anim');
  })();

  // ── DUAL RANGE SLIDERS ────────────────────────
  function initDualRanges() {
    document.querySelectorAll('.range-dual').forEach(function(el) {
      if (el._rangeInited) return;
      el._rangeInited = true;

      var minEl    = el.querySelector('.range-min');
      var maxEl    = el.querySelector('.range-max');
      var fill     = el.querySelector('.range-fill');
      var scope    = el.closest('.filter-subgroup') || el.closest('.filter-group') || el.parentElement;
      var minLabel = scope.querySelector('.range-val-min');
      var maxLabel = scope.querySelector('.range-val-max');
      var unit     = el.dataset.unit !== undefined ? el.dataset.unit : '';
      var decs     = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      var rMin     = parseFloat(minEl.min);
      var rMax     = parseFloat(minEl.max);

      function fmt(v) {
        v = decs ? parseFloat(v).toFixed(decs) : Math.round(parseFloat(v));
        if (unit === 'K\u010d') return Number(v).toLocaleString('cs') + '\u00a0K\u010d';
        return unit ? v + '\u00a0' + unit : String(v);
      }

      function fmtFt(v) {
        return (parseFloat(v) * 3.28084).toFixed(1).replace('.', ',') + '\u00a0ft';
      }

      function setLabel(node, value) {
        if (!node) return;
        var formatted = fmt(value);
        if (node.tagName === 'INPUT') {
          if (document.activeElement !== node) node.value = formatted;
          // Aktualizuj sourozenecký ft sub
          var parent = node.parentElement;
          if (parent && parent.classList.contains('range-val-with-sub')) {
            var ft = parent.querySelector('.range-val-ft');
            if (ft) ft.textContent = '(' + fmtFt(value) + ')';
          }
        } else if (unit === 'm') {
          node.innerHTML = formatted + ' <span class="range-val-ft">(' + fmtFt(value) + ')</span>';
        } else {
          node.textContent = formatted;
        }
      }

      function update() {
        var lo = parseFloat(minEl.value);
        var hi = parseFloat(maxEl.value);
        var pLo = (lo - rMin) / (rMax - rMin) * 100;
        var pHi = (hi - rMin) / (rMax - rMin) * 100;
        fill.style.left  = pLo + '%';
        fill.style.width = (pHi - pLo) + '%';
        setLabel(minLabel, lo);
        setLabel(maxLabel, hi);
      }

      minEl.addEventListener('input', function() {
        if (parseFloat(this.value) > parseFloat(maxEl.value)) this.value = maxEl.value;
        update();
      });
      maxEl.addEventListener('input', function() {
        if (parseFloat(this.value) < parseFloat(minEl.value)) this.value = minEl.value;
        update();
      });

      // Manuální zápis do textových inputů — sync zpět do range slideru
      function parseInput(text) {
        if (text == null) return NaN;
        var cleaned = String(text).replace(/[^\d,.\-]/g, '').replace(',', '.');
        return parseFloat(cleaned);
      }
      function commitInput(node, sliderEl, isMin) {
        if (!node || node.tagName !== 'INPUT') return;
        var v = parseInput(node.value);
        if (isNaN(v)) { update(); return; }
        v = Math.max(rMin, Math.min(rMax, v));
        if (isMin && v > parseFloat(maxEl.value)) v = parseFloat(maxEl.value);
        if (!isMin && v < parseFloat(minEl.value)) v = parseFloat(minEl.value);
        sliderEl.value = v;
        update();
      }
      [[minLabel, minEl, true], [maxLabel, maxEl, false]].forEach(function(pair) {
        var node = pair[0]; var sliderEl = pair[1]; var isMin = pair[2];
        if (!node || node.tagName !== 'INPUT') return;
        node.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') { e.preventDefault(); node.blur(); }
        });
        node.addEventListener('blur', function() { commitInput(node, sliderEl, isMin); });
      });

      update();
    });
  }

  initDualRanges();

  // ── FILTER — Hodnocení (single-select pillule) ──────────
  document.querySelectorAll('[data-rating-filter] .rating-pill').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var group = btn.closest('[data-rating-filter]');
      group.querySelectorAll('.rating-pill').forEach(function(b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
    });
  });

  // ── FILTER SEARCH (search nad seznamem checkboxů) ────────
  document.querySelectorAll('[data-filter-search-group]').forEach(function(group) {
    var input = group.querySelector('.filter-search-input');
    var clear = group.querySelector('.filter-search-clear');
    var moreBtn = group.querySelector('.filter-more');
    var moreList = group.querySelector('.filter-checks-more');
    var emptyEl = group.querySelector('.filter-search-empty');
    if (!input) return;
    var checks = group.querySelectorAll('.filter-check');
    var moreInitialHidden = moreList ? moreList.hasAttribute('hidden') : false;

    function apply() {
      var q = input.value.trim().toLowerCase();
      var visible = 0;
      checks.forEach(function(c) {
        var label = c.querySelector('span');
        var text = label ? label.textContent.toLowerCase() : '';
        var match = !q || text.indexOf(q) !== -1;
        c.hidden = !match;
        if (match) visible++;
      });
      if (q && moreList) {
        moreList.hidden = false;
        if (moreBtn) moreBtn.hidden = true;
      } else if (moreList) {
        moreList.hidden = moreInitialHidden;
        if (moreBtn) moreBtn.hidden = false;
      }
      if (emptyEl) emptyEl.hidden = visible !== 0;
      if (clear) clear.hidden = !q;
    }

    input.addEventListener('input', apply);
    if (clear) {
      clear.addEventListener('click', function() {
        input.value = '';
        input.focus();
        apply();
      });
    }
  });

  // ── SEARCHABLE MULTISELECT FILTER SELECTS ─────────────────
  function closeAllFilterSelects() {
    document.querySelectorAll('.fs-wrap.is-open').forEach(function(w) {
      w.classList.remove('is-open');
      var t = w.querySelector('.fs-trigger');
      if (t) t.classList.remove('open');
    });
  }

  function updateTriggerText(wrap) {
    var valueEl = wrap.querySelector('.fs-value');
    if (!valueEl) return;
    var options = wrap.querySelectorAll('.fs-option:not(.fs-group)');
    var nonAny = Array.prototype.filter.call(options, function(o) {
      return o.classList.contains('selected') && o.dataset.value !== '';
    });
    if (nonAny.length === 0) {
      var anyOpt = wrap.querySelector('.fs-option[data-value=""]');
      valueEl.textContent = anyOpt ? anyOpt.textContent.trim() : 'Libovolný';
      valueEl.classList.remove('fs-value-multi');
    } else if (nonAny.length === 1) {
      valueEl.textContent = nonAny[0].textContent.trim();
      valueEl.classList.remove('fs-value-multi');
    } else {
      valueEl.textContent = nonAny.length + ' vybrány';
      valueEl.classList.add('fs-value-multi');
    }
  }

  function renderActiveChips() {
    var chipsEl = document.getElementById('activeFilterChips');
    if (!chipsEl) return;
    var chips = [];

    // 1) Checkboxy ve filter-group (Typ lodi, Plachty, V\u00fdbava, Speci\u00e1ln\u00ed\u2026)
    document.querySelectorAll('.filter-group .filter-check input[type="checkbox"]').forEach(function(cb) {
      if (!cb.checked) return;
      var labelEl = cb.closest('.filter-check').querySelector('span');
      if (!labelEl) return;
      var label = labelEl.textContent.trim().replace(/\s*\(\s*\d+\s*\)\s*$/, '');
      chips.push({
        label: label,
        remove: function() {
          cb.checked = false;
          cb.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    });

    // 2) Filter-selecty (.fs-wrap \u2014 Charterov\u00e1 spole\u010dnost, Zna\u010dka/model)
    document.querySelectorAll('.fs-wrap').forEach(function(wrap) {
      wrap.querySelectorAll('.fs-option.selected').forEach(function(opt) {
        if (opt.dataset.value === '' || opt.dataset.value === undefined) return;
        chips.push({
          label: opt.textContent.trim(),
          remove: function() {
            opt.classList.remove('selected');
            var anyOpt = wrap.querySelector('.fs-option[data-value=""]');
            var hasOther = Array.prototype.some.call(
              wrap.querySelectorAll('.fs-option:not(.fs-group)'),
              function(o) { return o.classList.contains('selected') && o.dataset.value !== ''; }
            );
            if (!hasOther && anyOpt) anyOpt.classList.add('selected');
            updateTriggerText(wrap);
          }
        });
      });
    });

    // 3) Combobox p\u0159\u00edstav\u016f (.sf-combobox--filter)
    document.querySelectorAll('.sf-combobox--filter').forEach(function(box) {
      box.querySelectorAll('.sf-combobox-field .sf-chip').forEach(function(chip) {
        chips.push({
          label: chip.dataset.value || chip.querySelector('.sf-chip-name')?.textContent || '',
          remove: function() {
            var rm = chip.querySelector('.sf-chip-remove');
            if (rm) rm.click();
          }
        });
      });
    });

    // 3b) Top form (.results-hero) \u2014 Destinace, Term\u00edn, Typ lodi
    document.querySelectorAll('.results-hero').forEach(function(hero) {
      // Destinace \u2014 chipy ve sf-combobox (bez --filter)
      hero.querySelectorAll('.sf-combobox:not(.sf-combobox--filter) .sf-combobox-field .sf-chip').forEach(function(chip) {
        chips.push({
          label: chip.dataset.value || (chip.querySelector('.sf-chip-name') && chip.querySelector('.sf-chip-name').textContent) || '',
          remove: function() {
            var rm = chip.querySelector('.sf-chip-remove');
            if (rm) rm.click();
          }
        });
      });
      // Term\u00edn \u2014 kdy\u017e nen\u00ed placeholder
      hero.querySelectorAll('.sf-daterange').forEach(function(box) {
        var label = box.querySelector('.sf-daterange-label');
        if (!label || label.classList.contains('sf-daterange-label--placeholder')) return;
        chips.push({
          label: 'Term\u00edn: ' + label.textContent.trim(),
          remove: function() { if (typeof box._clear === 'function') box._clear(); }
        });
      });
      // Typ lodi \u2014 chipy v .sf-sel triggeru (multi-select)
      hero.querySelectorAll('.sf-sel .sf-sel-chip').forEach(function(chip) {
        var nameEl = chip.querySelector('.sf-sel-chip-name');
        chips.push({
          label: (nameEl ? nameEl.textContent : chip.dataset.value || '').trim(),
          remove: function() {
            var rm = chip.querySelector('.sf-sel-chip-remove');
            if (rm) rm.click();
          }
        });
      });
    });

    // 4) Dual range slidery (Cena, D\u00e9lka, Po\u010det osob, Po\u010det kajut, Hodnocen\u00ed\u2026)
    document.querySelectorAll('.range-dual').forEach(function(rng) {
      var minEl = rng.querySelector('.range-min');
      var maxEl = rng.querySelector('.range-max');
      if (!minEl || !maxEl) return;
      var rMin = parseFloat(minEl.min), rMax = parseFloat(maxEl.max);
      var curMin = parseFloat(minEl.value), curMax = parseFloat(maxEl.value);
      if (!(curMin > rMin || curMax < rMax)) return; // v\u00fdchoz\u00ed pozice

      var scope = rng.closest('.filter-subgroup') || rng.closest('.filter-group');
      var titleEl = scope && (scope.querySelector('.filter-subtitle') || scope.querySelector('.filter-group-title'));
      var title = '';
      if (titleEl) {
        Array.prototype.forEach.call(titleEl.childNodes, function(n) {
          if (n.nodeType === 3) title += n.textContent;
        });
        title = title.trim();
      }
      var minLabel = scope && scope.querySelector('.range-val-min');
      var maxLabel = scope && scope.querySelector('.range-val-max');
      var lo = minLabel && minLabel.value ? minLabel.value : String(curMin);
      var hi = maxLabel && maxLabel.value ? maxLabel.value : String(curMax);
      chips.push({
        label: title + ': ' + lo + ' \u2013 ' + hi,
        remove: function() {
          minEl.value = rMin;
          maxEl.value = rMax;
          minEl.dispatchEvent(new Event('input', { bubbles: true }));
          maxEl.dispatchEvent(new Event('input', { bubbles: true }));
          minEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    });

    chipsEl.innerHTML = chips.map(function(c, i) {
      return '<div class="active-chip"><span>' + c.label + '</span><span class="active-chip-remove" data-idx="' + i + '">\u00d7</span></div>';
    }).join('');
    chipsEl.querySelectorAll('.active-chip-remove').forEach(function(btn) {
      var idx = parseInt(btn.dataset.idx);
      var c = chips[idx];
      btn.addEventListener('click', function() {
        c.remove();
        renderActiveChips();
      });
    });
  }

  function initFilterSelects() {
    document.querySelectorAll('.fs-wrap').forEach(function(wrap) {
      if (wrap._fsInited) return;
      wrap._fsInited = true;

      var trigger  = wrap.querySelector('.fs-trigger');
      var valueEl  = wrap.querySelector('.fs-value');
      var dropdown = wrap.querySelector('.fs-dropdown');
      var search   = wrap.querySelector('.fs-search');
      var list     = wrap.querySelector('.fs-list');
      var options  = wrap.querySelectorAll('.fs-option:not(.fs-group)');
      var emptyEl  = wrap.querySelector('.fs-empty');

      // Otevření / zavření
      trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = wrap.classList.contains('is-open');
        closeAllFilterSelects();
        if (!isOpen) {
          wrap.classList.add('is-open');
          trigger.classList.add('open');
          var rect = trigger.getBoundingClientRect();
          dropdown.style.top   = (rect.bottom + 4) + 'px';
          dropdown.style.left  = rect.left + 'px';
          dropdown.style.width = rect.width + 'px';
          search.value = '';
          filterOptions('');
          setTimeout(function() { search.focus(); }, 30);
        }
      });

      // Vyhledávání v seznamu
      search.addEventListener('input', function() {
        filterOptions(this.value.trim().toLowerCase());
      });

      function filterOptions(q) {
        var anyVisible = false;
        options.forEach(function(opt) {
          var text = opt.textContent.toLowerCase();
          var match = !q || text.indexOf(q) !== -1;
          opt.classList.toggle('fs-hidden', !match);
          if (match) anyVisible = true;
        });
        list.querySelectorAll('.fs-group').forEach(function(grp) {
          var next = grp.nextElementSibling;
          var hasVisible = false;
          while (next && !next.classList.contains('fs-group')) {
            if (!next.classList.contains('fs-hidden')) hasVisible = true;
            next = next.nextElementSibling;
          }
          grp.classList.toggle('fs-hidden', !hasVisible);
        });
        if (emptyEl) emptyEl.style.display = anyVisible ? 'none' : 'block';
      }

      // Výběr položky (multiselect)
      options.forEach(function(opt) {
        opt.addEventListener('click', function(e) {
          e.stopPropagation();
          var val = opt.dataset.value;
          var anyOpt = wrap.querySelector('.fs-option[data-value=""]');
          if (val === '' || val === undefined) {
            // "Libovolný" — zruší všechny konkrétní výběry
            options.forEach(function(o) { o.classList.remove('selected'); });
            opt.classList.add('selected');
          } else {
            if (anyOpt) anyOpt.classList.remove('selected');
            opt.classList.toggle('selected');
            var hasSelected = Array.prototype.some.call(options, function(o) {
              return o.classList.contains('selected') && o.dataset.value !== '';
            });
            if (!hasSelected && anyOpt) anyOpt.classList.add('selected');
          }
          updateTriggerText(wrap);
          renderActiveChips();
          // Nezavírat dropdown — uživatel může vybrat více položek
        });
      });

      // Klávesnice: Escape zavře, Enter přepne první viditelnou
      search.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') { closeAllFilterSelects(); return; }
        if (e.key === 'Enter') {
          var first = null;
          options.forEach(function(o) { if (!first && !o.classList.contains('fs-hidden')) first = o; });
          if (first) first.click();
        }
      });
    });
  }

  // Zavřít při kliknutí mimo
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.fs-wrap')) closeAllFilterSelects();
  });

  // Zavřít při scrollování (dropdown je fixed)
  document.addEventListener('scroll', closeAllFilterSelects, true);

  initFilterSelects();
  renderActiveChips();

  // Re-render active chipů, když uživatel cokoli změní v top form (destinace / termín / typ lodi).
  // Delegát na .results-hero pokryje všechny interakce (dropdown položka, šipka v kalendáři, X v chipu).
  document.querySelectorAll('.results-hero').forEach(function(hero) {
    hero.addEventListener('click', function() { setTimeout(renderActiveChips, 0); });
    hero.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === 'Backspace') setTimeout(renderActiveChips, 0);
    });
  });

  // ── SIDEBAR TOGGLE (results page, mobile) ──────────────
  function toggleMobileSidebar() {
    var sidebar = document.getElementById('resultsSidebar');
    var overlay = document.getElementById('sidebarOverlay');
    if (!sidebar) return;
    var isOpen = sidebar.classList.contains('mobile-open');
    sidebar.classList.toggle('mobile-open', !isOpen);
    overlay.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  // ── HAMBURGER MENU — generická implementace pro všechny stránky ──
  var MOBILE_RENTAL_ACCORDION =
    '<div class="nav-mobile-group">' +
      '<button type="button" class="nav-mobile-link nav-mobile-group-toggle" aria-expanded="false">' +
        '<span>Pronájem lodí</span>' +
        '<svg class="nav-mobile-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
      '</button>' +
      '<div class="nav-mobile-group-panel">' +
        '<a class="nav-mobile-sublink nav-mobile-sublink-cta" href="pronajem-lodi.html">' +
          'Najít loď' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
        '</a>' +
        '<div class="nav-mobile-sub-title">Hledat podle</div>' +
        '<a class="nav-mobile-sublink" href="destinace.html">Destinace</a>' +
        '<a class="nav-mobile-sublink" href="kategorie-lodi.html">Kategorie lodí</a>' +
        '<a class="nav-mobile-sublink" href="prehled-znacek.html">Značky lodí</a>' +
        '<a class="nav-mobile-sublink" href="charterove-spolecnosti.html">Charterové společnosti</a>' +
        '<div class="nav-mobile-sub-title">Z magazínu</div>' +
        '<a class="nav-mobile-sublink" href="detail-clanku.html">Jak vybrat správnou loď?</a>' +
      '</div>' +
    '</div>';

  var MOBILE_LINKS_HTML =
    MOBILE_RENTAL_ACCORDION +
    '<a class="nav-mobile-link" href="kapitanske-kurzy.html">Kapitánské kurzy</a>' +
    '<a class="nav-mobile-link" href="o-nas.html">O nás</a>' +
    '<a class="nav-mobile-link" href="magazin.html">Magazín</a>' +
    '<a class="nav-mobile-link" href="kontakt.html">Kontakt</a>';

  var MOBILE_ACTIONS_HTML =
    '<div class="nav-select-wrap">' +
      '<svg class="nav-sel-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' +
      '<select class="nav-select"><option>CS</option><option>EN</option><option>DE</option></select>' +
    '</div>' +
    '<div class="nav-select-wrap">' +
      '<svg class="nav-sel-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.5 9h3a2 2 0 0 1 0 4H11v1.5M11 7.5V9"/></svg>' +
      '<select class="nav-select"><option>Kč</option><option>€</option><option>$</option></select>' +
    '</div>' +
    '<button class="nav-login-btn" onclick="closeMobileNav();">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
      'Přihlásit se' +
    '</button>';

  function closeMobileNav() {
    document.querySelectorAll('.nav-hamburger.open').forEach(function(btn) {
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.nav-mobile-menu.open').forEach(function(menu) {
      menu.classList.remove('open');
    });
    document.querySelectorAll('.nav-mobile-group.open').forEach(function(g) {
      g.classList.remove('open');
      var t = g.querySelector('.nav-mobile-group-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
    document.body.style.overflow = '';
  }

  // Akordeon v mobilním menu — klik na toggle rozbalí/sbalí panel.
  document.addEventListener('click', function(e) {
    var toggle = e.target.closest('.nav-mobile-group-toggle');
    if (!toggle) return;
    e.preventDefault();
    var group = toggle.closest('.nav-mobile-group');
    if (!group) return;
    var isOpen = group.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  function wireHamburger(btn, menu) {
    btn.addEventListener('click', function() {
      var isOpen = menu.classList.contains('open');
      closeMobileNav();
      if (!isOpen) {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        menu.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  function initHamburgers() {
    document.querySelectorAll('.nav-inner').forEach(function(inner) {
      var nav = inner.parentElement;
      var existingBtn = inner.querySelector('.nav-hamburger');

      if (existingBtn) {
        // Stránka již má hamburger (page-home) — najít existující menu a propojit
        var existingMenu = nav.querySelector('.nav-mobile-menu');
        if (existingMenu) wireHamburger(existingBtn, existingMenu);
        return;
      }

      // Vytvořit hamburger tlačítko
      var btn = document.createElement('button');
      btn.className = 'nav-hamburger';
      btn.setAttribute('aria-label', 'Otevřít menu');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span></span><span></span><span></span>';
      inner.appendChild(btn);

      // Vytvořit mobilní menu — vložit jako sibling za nav
      var menu = document.createElement('div');
      menu.className = 'nav-mobile-menu';
      menu.innerHTML =
        '<div class="nav-mobile-links">' + MOBILE_LINKS_HTML + '</div>' +
        '<div class="nav-mobile-actions">' + MOBILE_ACTIONS_HTML + '</div>';
      nav.appendChild(menu);

      wireHamburger(btn, menu);
    });
  }

  initHamburgers();

  // ── MEGA MENU pro "Pronájem lodí" ────────────────────────
  var MEGA_MENU_HTML =
    '<button class="nav-dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">' +
      'Pronájem lodí' +
      '<svg class="nav-dropdown-chevron" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
    '</button>' +
    '<div class="nav-dropdown-panel" role="menu">' +
      '<div class="nav-dropdown-grid">' +
        '<a class="nav-dropdown-cta" href="pronajem-lodi.html">' +
          '<div>' +
            '<div class="nav-dropdown-cta-label">Najít loď</div>' +
            '<div class="nav-dropdown-cta-sub">Prohlédnout všechny dostupné lodě</div>' +
          '</div>' +
          '<span class="nav-dropdown-cta-arrow" aria-hidden="true">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</span>' +
        '</a>' +
        '<div class="nav-dropdown-col">' +
          '<div class="nav-dropdown-col-title">Hledat podle</div>' +
          '<ul class="nav-dropdown-list">' +
            '<li><a href="destinace.html">Destinace</a></li>' +
            '<li><a href="kategorie-lodi.html">Kategorie lodí</a></li>' +
            '<li><a href="prehled-znacek.html">Značky lodí</a></li>' +
            '<li><a href="charterove-spolecnosti.html">Charterové společnosti</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="nav-dropdown-col">' +
          '<div class="nav-dropdown-col-title">Informace</div>' +
          '<ul class="nav-dropdown-list">' +
            '<li><a href="#">Jak funguje pronájem?</a></li>' +
            '<li><a href="#">Pojištění</a></li>' +
            '<li><a href="#">Často se ptáte</a></li>' +
          '</ul>' +
        '</div>' +
        '<a class="nav-dropdown-article" href="detail-clanku.html">' +
          '<div class="nav-dropdown-article-img"></div>' +
          '<div class="nav-dropdown-article-body">' +
            '<div class="nav-dropdown-article-eyebrow">Z magazínu</div>' +
            '<div class="nav-dropdown-article-title">Jak vybrat správnou loď?</div>' +
            '<div class="nav-dropdown-article-cta">Přečíst článek →</div>' +
          '</div>' +
        '</a>' +
      '</div>' +
    '</div>';

  var KURZY_MENU_HTML =
    '<button class="nav-dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">' +
      'Kapitánské kurzy' +
      '<svg class="nav-dropdown-chevron" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
    '</button>' +
    '<div class="nav-dropdown-panel nav-dropdown-panel--kurzy" role="menu">' +
      '<div class="nav-dropdown-grid--kurzy">' +
        '<a class="nav-dropdown-cta" href="kapitanske-kurzy.html">' +
          '<div>' +
            '<div class="nav-dropdown-cta-label">Vše o kapitánských kurzech</div>' +
            '<div class="nav-dropdown-cta-sub">Co vás čeká, jaké průkazy nabízíme a jak probíhá výuka</div>' +
          '</div>' +
          '<span class="nav-dropdown-cta-arrow" aria-hidden="true">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</span>' +
        '</a>' +
        '<div class="nav-dropdown-kurzy-right">' +
          '<div class="nav-dropdown-kurzy-cols">' +
            '<div class="nav-dropdown-col">' +
              '<a class="nav-dropdown-col-title nav-dropdown-col-title--link" href="kurzy-na-mori.html">Moře</a>' +
              '<ul class="nav-dropdown-list">' +
                '<li><a href="detail-prukazu.html">MDČR C</a></li>' +
                '<li><a href="detail-prukazu.html">Chorvatský průkaz B</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="nav-dropdown-col">' +
              '<a class="nav-dropdown-col-title nav-dropdown-col-title--link" href="kurzy-na-mori.html">Řeky</a>' +
              '<ul class="nav-dropdown-list">' +
                '<li><a href="detail-prukazu.html">Velitel malého plavidla</a></li>' +
                '<li><a href="detail-prukazu.html">Velitel rekreačního plavidla</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="nav-dropdown-col">' +
              '<div class="nav-dropdown-col-title">Speciality</div>' +
              '<ul class="nav-dropdown-list">' +
                '<li><a href="detail-prukazu.html">SRC — Radiotelefon</a></li>' +
                '<li><a href="detail-kurzu.html">Zdokonalovací kurzy</a></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="nav-dropdown-kurzy-actions">' +
            '<a href="vsechny-kurzy.html" class="nav-dropdown-footer-link">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="12" width="18" height="4" rx="1"/><rect x="3" y="20" width="18" height="0.5"/></svg>' +
              'Všechny průkazy a kurzy' +
            '</a>' +
            '<a href="terminy-kurzu.html" class="nav-dropdown-footer-link">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' +
              'Termíny kurzů' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  function wireMegaMenu(li) {
    var btn = li.querySelector('.nav-dropdown-toggle');
    if (!btn) return;
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var isOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(function(el) {
        el.classList.remove('open');
        var b = el.querySelector('.nav-dropdown-toggle');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        li.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  function initMegaMenu() {
    document.querySelectorAll('.nav-links').forEach(function(ul) {
      var rentalLi = null;
      var kurzyLi = null;
      Array.prototype.slice.call(ul.querySelectorAll('li')).forEach(function(li) {
        var a = li.querySelector('a');
        if (!a) return;
        var text = a.textContent.trim();
        if (text === 'Destinace') {
          li.remove();
        } else if (text === 'Pronájem lodí') {
          rentalLi = li;
        } else if (text === 'Kapitánské kurzy') {
          kurzyLi = li;
        }
      });
      if (rentalLi) {
        rentalLi.classList.add('nav-dropdown');
        rentalLi.innerHTML = MEGA_MENU_HTML;
        wireMegaMenu(rentalLi);
      }
      if (kurzyLi) {
        kurzyLi.classList.add('nav-dropdown');
        kurzyLi.innerHTML = KURZY_MENU_HTML;
        wireMegaMenu(kurzyLi);
      }
    });
  }

  // Close mega-menu on outside click or Escape.
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(function(el) {
        el.classList.remove('open');
        var b = el.querySelector('.nav-dropdown-toggle');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown.open').forEach(function(el) {
        el.classList.remove('open');
        var b = el.querySelector('.nav-dropdown-toggle');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });

  initMegaMenu();

  // ── Courses slider — ovládání šipkami v mobile režimu ──
  (function() {
    var grid = document.getElementById('coursesGrid');
    if (!grid) return;
    document.querySelectorAll('.courses-arrow').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var dir = parseInt(btn.dataset.dir, 10) || 1;
        var card = grid.querySelector('.course-card');
        if (!card) return;
        var style = window.getComputedStyle(grid);
        var gap = parseInt(style.columnGap || style.gap || '0', 10) || 14;
        grid.scrollBy({ left: (card.offsetWidth + gap) * dir, behavior: 'smooth' });
      });
    });
  })();

  // ── Models carousel — ovládání šipkami ──
  (function() {
    var grid = document.getElementById('modelsGrid');
    if (!grid) return;
    document.querySelectorAll('.models-arrow').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var dir = parseInt(btn.dataset.dir, 10) || 1;
        var card = grid.firstElementChild;
        if (!card) return;
        var style = window.getComputedStyle(grid);
        var gap = parseInt(style.columnGap || style.gap || '0', 10) || 16;
        grid.scrollBy({ left: (card.offsetWidth + gap) * dir, behavior: 'smooth' });
      });
    });
  })();

  // ── CUSTOM SELECT — .sf-field select → .sf-sel ─────────
  var CHEVRON_SVG = '<svg class="sf-sel-chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  var CHK_HTML = '<span class="sf-sel-chk"></span>';

  function initSfSelects() {
    document.querySelectorAll('.sf-field select').forEach(function(native) {
      if (native.closest('.sf-sel')) return;

      var isMulti       = native.hasAttribute('data-multi');
      var grpSelectable = native.hasAttribute('data-optgroup-selectable');
      var placeholder   = native.dataset.placeholder ||
                          (Array.from(native.options).find(function(o){ return o.disabled; }) || {}).text ||
                          'Vyberte…';
      var selected = []; // pole { label, value } pro multi

      // ── Obal ──
      var wrap = document.createElement('div');
      wrap.className = 'sf-sel';
      native.parentNode.insertBefore(wrap, native);
      wrap.appendChild(native);

      // ── Trigger ──
      var trigger = document.createElement('div');
      trigger.className = 'sf-sel-trigger';
      trigger.setAttribute('tabindex', '0');
      trigger.setAttribute('role', 'button');
      trigger.innerHTML = '<span class="sf-sel-val is-placeholder"></span>' + CHEVRON_SVG;
      wrap.insertBefore(trigger, native);
      var valEl = trigger.querySelector('.sf-sel-val');

      // ── Dropdown ──
      var dropdown = document.createElement('div');
      dropdown.className = 'sf-sel-dropdown';

      function makeChk() { return isMulti ? CHK_HTML : ''; }

      Array.from(native.children).forEach(function(child) {
        if (child.tagName === 'OPTGROUP') {
          if (grpSelectable) {
            // Skupina jako klikatelná volba
            var grpEl = document.createElement('div');
            grpEl.className = 'sf-sel-optgroup-btn';
            grpEl.dataset.value = child.label;
            grpEl.dataset.label = child.label;
            grpEl.dataset.isGroup = '1';
            grpEl.innerHTML = makeChk() + child.label;
            dropdown.appendChild(grpEl);
          } else {
            var gl = document.createElement('div');
            gl.className = 'sf-sel-optgroup';
            gl.textContent = child.label;
            dropdown.appendChild(gl);
          }
          Array.from(child.children).forEach(function(o) { addOpt(o, true); });
        } else if (child.tagName === 'OPTION' && !child.disabled) {
          addOpt(child, false);
        }
      });

      function addOpt(o, sub) {
        var el = document.createElement('div');
        el.className = 'sf-sel-option' + (sub ? ' sf-sel-option-sub' : '');
        el.dataset.value = o.value || o.text;
        el.dataset.label = o.text;
        el.innerHTML = makeChk() + o.text;
        dropdown.appendChild(el);
      }

      wrap.appendChild(dropdown);

      // ── Zobrazení ──
      function syncDisplay() {
        valEl.classList.remove('sf-sel-val-multi');
        if (isMulti) {
          if (selected.length === 0) {
            valEl.innerHTML = '';
            valEl.textContent = placeholder; valEl.classList.add('is-placeholder');
          } else {
            valEl.classList.remove('is-placeholder');
            valEl.classList.add('sf-sel-val-multi');
            valEl.innerHTML = selected.map(function(s) {
              return '<span class="sf-sel-chip" data-value="' + escapeHtml(s.value) + '">' +
                '<span class="sf-sel-chip-name">' + escapeHtml(s.label) + '</span>' +
                '<button type="button" class="sf-sel-chip-remove" aria-label="Odebrat ' + escapeHtml(s.label) + '">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
                '</button>' +
              '</span>';
            }).join('');
          }
        } else {
          var sel = native.options[native.selectedIndex];
          if (sel && !sel.disabled) {
            valEl.textContent = sel.text; valEl.classList.remove('is-placeholder');
          } else {
            valEl.textContent = placeholder; valEl.classList.add('is-placeholder');
          }
        }
      }
      // Načti pre-vybrané položky z <option selected> v HTML (pro pre-fill widgetu).
      if (isMulti) {
        Array.from(native.options).forEach(function(o) {
          if (o.disabled) return;
          if (o.hasAttribute('selected') || o.defaultSelected) {
            var val = o.value || o.text;
            if (!selected.find(function(s) { return s.value === val; })) {
              selected.push({ value: val, label: o.text });
            }
            var optEl = dropdown.querySelector('.sf-sel-option[data-value="' + val + '"]') ||
                        dropdown.querySelector('.sf-sel-optgroup-btn[data-value="' + val + '"]');
            if (optEl) optEl.classList.add('is-selected');
          }
        });
      }
      syncDisplay();

      // ── Otevřít / zavřít ──
      function openClose(force) {
        document.querySelectorAll('.sf-sel-dropdown.open').forEach(function(d) {
          if (d !== dropdown) {
            d.classList.remove('open');
            if (d.previousElementSibling) d.previousElementSibling.classList.remove('open');
          }
        });
        var open = force !== undefined ? force : !dropdown.classList.contains('open');
        trigger.classList.toggle('open', open);
        dropdown.classList.toggle('open', open);
      }
      trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        // Klik na ✕ v chipu = odebrání bez otevírání/zavírání dropdownu
        var rmBtn = e.target.closest('.sf-sel-chip-remove');
        if (rmBtn) {
          var chip = rmBtn.closest('.sf-sel-chip');
          if (chip) {
            var val = chip.dataset.value;
            var idx = selected.findIndex(function(s){ return s.value === val; });
            if (idx !== -1) {
              selected.splice(idx, 1);
              dropdown.querySelectorAll('.sf-sel-option, .sf-sel-optgroup-btn').forEach(function(o) {
                if (o.dataset.value === val) o.classList.remove('is-selected');
              });
              syncDisplay();
            }
          }
          return;
        }
        openClose();
      });
      trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openClose(); }
        if (e.key === 'Escape') openClose(false);
      });

      // ── Klik na položku ──
      dropdown.addEventListener('click', function(e) {
        var opt = e.target.closest('.sf-sel-option, .sf-sel-optgroup-btn');
        if (!opt) return;
        e.stopPropagation();
        var val   = opt.dataset.value;
        var label = opt.dataset.label;

        if (isMulti) {
          var idx = selected.findIndex(function(s){ return s.value === val; });
          if (idx === -1) {
            selected.push({ value: val, label: label });
            opt.classList.add('is-selected');
          } else {
            selected.splice(idx, 1);
            opt.classList.remove('is-selected');
          }
          syncDisplay();
          // Multiselect — dropdown zůstane otevřený
        } else {
          dropdown.querySelectorAll('.sf-sel-option, .sf-sel-optgroup-btn').forEach(function(o) {
            o.classList.remove('is-selected');
          });
          opt.classList.add('is-selected');
          Array.from(native.options).forEach(function(o) {
            if (o.text === label) native.value = o.value;
          });
          syncDisplay();
          openClose(false);
        }
      });

      document.addEventListener('click', function(e) {
        if (!wrap.contains(e.target)) openClose(false);
      });
    });
  }

  initSfSelects();

  // Na stránce pronajem-lodi.html vykresli výpis lodí hned po načtení.
  if (document.getElementById('boatsGrid')) renderAllBoats();

  // ── Rate modal (Proběhlé rezervace → Přidat hodnocení) ──
  (function initRateModal() {
    var modal = document.getElementById('rateModal');
    if (!modal) return;
    var boatLabel = modal.querySelector('[data-rm-boat]');
    var commentEl = modal.querySelector('[data-rm-comment]');
    var actionsEl = modal.querySelector('.rate-modal-actions');
    var errorEl = null;
    var currentRow = null;
    var ratings = { boat: 0, charter: 0, yachtnet: 0 };

    function syncStars() {
      modal.querySelectorAll('.rate-stars-input').forEach(function(group) {
        var key = group.dataset.rate;
        var val = ratings[key] || 0;
        group.querySelectorAll('.rate-star').forEach(function(btn) {
          var btnVal = parseInt(btn.dataset.val, 10);
          btn.classList.toggle('is-active', btnVal <= val);
        });
      });
    }

    function clearError() {
      if (errorEl) { errorEl.remove(); errorEl = null; }
    }

    function open(row, boatName) {
      currentRow = row;
      ratings = { boat: 0, charter: 0, yachtnet: 0 };
      syncStars();
      clearError();
      if (boatLabel) boatLabel.textContent = boatName || '';
      if (commentEl) commentEl.value = '';
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function close() {
      modal.hidden = true;
      document.body.style.overflow = '';
      currentRow = null;
      clearError();
    }

    function renderStars(val) {
      var html = '';
      for (var i = 1; i <= 5; i++) {
        if (i <= val) html += '★';
        else html += '<span class="res-rate-stars-empty">☆</span>';
      }
      return html;
    }

    function submit() {
      if (!currentRow) return;
      if (!ratings.boat || !ratings.charter || !ratings.yachtnet) {
        clearError();
        errorEl = document.createElement('div');
        errorEl.className = 'rate-modal-error';
        errorEl.textContent = 'Ohodnoťte prosím všechny tři kategorie.';
        actionsEl.parentNode.insertBefore(errorEl, actionsEl);
        return;
      }
      currentRow.classList.add('res-rate-row--done');
      currentRow.innerHTML = '<div class="res-rate-display">' +
        '<span class="res-rate-item"><span class="res-rate-label">Loď:</span><span class="res-rate-stars">' + renderStars(ratings.boat) + '</span></span>' +
        '<span class="res-rate-item"><span class="res-rate-label">Charterovka:</span><span class="res-rate-stars">' + renderStars(ratings.charter) + '</span></span>' +
        '<span class="res-rate-item"><span class="res-rate-label">Yachtnet:</span><span class="res-rate-stars">' + renderStars(ratings.yachtnet) + '</span></span>' +
      '</div>';
      close();
    }

    // Open: klik na „Přidat hodnocení" — listener přímo na linku, aby inline
    // onclick="event.stopPropagation()" v HTML nepřerušil bublání před tímhle.
    document.querySelectorAll('.res-rate-link').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var row = link.closest('.res-rate-row');
        var card = link.closest('.res-card');
        var titleEl = card && card.querySelector('.res-title');
        open(row, titleEl ? titleEl.textContent : '');
      });
    });

    // Klik dovnitř modalu: hvězdy, zavřít, submit
    modal.addEventListener('click', function(e) {
      if (e.target.closest('[data-rm-close]')) { close(); return; }
      var star = e.target.closest('.rate-star');
      if (star) {
        var group = star.closest('.rate-stars-input');
        ratings[group.dataset.rate] = parseInt(star.dataset.val, 10);
        syncStars();
        clearError();
        return;
      }
      if (e.target.closest('[data-rm-submit]')) { submit(); return; }
    });

    // Hover preview hvězd
    modal.querySelectorAll('.rate-stars-input').forEach(function(group) {
      group.addEventListener('mouseover', function(e) {
        var star = e.target.closest('.rate-star');
        if (!star) return;
        var hoverVal = parseInt(star.dataset.val, 10);
        group.querySelectorAll('.rate-star').forEach(function(btn) {
          btn.classList.toggle('is-hover', parseInt(btn.dataset.val, 10) <= hoverVal);
        });
      });
      group.addEventListener('mouseleave', function() {
        group.querySelectorAll('.rate-star.is-hover').forEach(function(b) { b.classList.remove('is-hover'); });
      });
    });

    // Escape zavře
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !modal.hidden) close();
    });
  })();


  // ── OBLÍBENÉ — výpis + odstranění ────────────
  (function initFavorites() {
    var grid = document.getElementById('favoritesGrid');
    if (!grid) return;
    var favIds = [0, 2, 5, 9, 11, 14];
    var favorites = favIds.map(function(i) { return BOATS[i]; }).filter(Boolean);

    var REMOVE_BTN = '<button class="card-icon-btn card-icon-remove" type="button" data-fav-remove title="Odstranit z oblíbených" aria-label="Odstranit z oblíbených"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';

    function favoriteCardHtml(b, idx) {
      var html = boatCard(b);
      // Nahradí srdíčko (Přidat do oblíbených) za křížek (Odstranit z oblíbených)
      html = html.replace(
        /<button class="card-icon-btn" title="Přidat do oblíbených">[\s\S]*?<\/button>/,
        REMOVE_BTN
      );
      // Označ kartu indexem pro odstranění
      return html.replace(/(<div class="boat-card)/, '<div data-fav-idx="' + idx + '" class="boat-card-wrap" >$1');
    }

    function render() {
      // Zabal každou kartu ve wrapperu kvůli mezerám i kontextu pro odstranění
      grid.innerHTML = favorites.map(function(b, i) {
        return '<div class="favorite-item" data-fav-idx="' + i + '">' + boatCard(b)
          .replace(
            /<button class="card-icon-btn" title="Přidat do oblíbených">[\s\S]*?<\/button>/,
            REMOVE_BTN
          ) + '</div>';
      }).join('');
      var countEl = document.getElementById('favCount');
      if (countEl) countEl.textContent = favorites.length;
      var emptyEl = document.getElementById('favoritesEmpty');
      if (emptyEl) {
        if (favorites.length === 0) {
          emptyEl.removeAttribute('hidden');
          grid.style.display = 'none';
        } else {
          emptyEl.setAttribute('hidden', '');
          grid.style.display = '';
        }
      }
    }

    function removeAt(idx, boatName) {
      var modal = document.getElementById('favConfirmModal');
      var nameEl = document.getElementById('favConfirmName');
      var okBtn = document.getElementById('favConfirmOk');
      var cancelBtn = document.getElementById('favConfirmCancel');
      if (!modal || !okBtn || !cancelBtn) {
        if (confirm('Opravdu chcete odstranit loď ze seznamu oblíbených?')) {
          favorites.splice(idx, 1); render();
        }
        return;
      }
      if (nameEl) nameEl.textContent = boatName || 'tuto loď';
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      function close() {
        modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
        okBtn.removeEventListener('click', onOk);
        cancelBtn.removeEventListener('click', onCancel);
        modal.removeEventListener('click', onBackdrop);
        document.removeEventListener('keydown', onEsc);
      }
      function onOk() { favorites.splice(idx, 1); render(); close(); }
      function onCancel() { close(); }
      function onBackdrop(e) { if (e.target === modal) close(); }
      function onEsc(e) { if (e.key === 'Escape') close(); }
      okBtn.addEventListener('click', onOk);
      cancelBtn.addEventListener('click', onCancel);
      modal.addEventListener('click', onBackdrop);
      document.addEventListener('keydown', onEsc);
    }

    grid.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-fav-remove]');
      if (!btn) return;
      e.stopPropagation();
      e.preventDefault();
      var item = btn.closest('.favorite-item');
      if (!item) return;
      var idx = parseInt(item.dataset.favIdx, 10);
      var b = favorites[idx];
      removeAt(idx, b ? (b.name + (b.boatName ? ' "' + b.boatName + '"' : '')) : '');
    });

    var clearAll = document.getElementById('favClearAll');
    if (clearAll) {
      clearAll.addEventListener('click', function() {
        if (favorites.length === 0) return;
        if (confirm('Opravdu chcete odstranit všechny lodě z oblíbených?')) {
          favorites = [];
          render();
        }
      });
    }
    render();
  })();

  // CTA date pickers (detail-lodi.html — Příjezd/Odjezd)
  (function() {
    var boxes = document.querySelectorAll('.cta-date-box');
    if (!boxes.length) return;
    function format(iso) {
      if (!iso) return null;
      var p = iso.split('-');
      if (p.length !== 3) return null;
      return parseInt(p[2], 10) + '. ' + parseInt(p[1], 10) + '. ' + p[0];
    }
    boxes.forEach(function(box) {
      var input = box.querySelector('.cta-date-input');
      var val = box.querySelector('.cta-date-val');
      if (!input || !val) return;
      function render() {
        var pretty = format(input.value);
        if (pretty) {
          val.textContent = pretty;
          val.classList.remove('cta-date-val-empty');
        } else {
          val.textContent = 'Vybrat datum';
          val.classList.add('cta-date-val-empty');
        }
      }
      render();
      input.addEventListener('change', render);
      input.addEventListener('input', render);
      // Otevřít datepicker při kliku kdekoli v boxu (pokud prohlížeč podporuje).
      // Použijeme mousedown — funguje spolehlivěji než click u prázdného date inputu
      // a label-asociované eventy, které někdy showPicker neaktivují.
      box.addEventListener('mousedown', function(e) {
        if (typeof input.showPicker !== 'function') return;
        e.preventDefault();
        try { input.showPicker(); } catch (err) {}
      });
    });
  })();

  // Counter +/- buttons (filtr Osoby/kajuty)
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.counter button[data-action]');
    if (!btn) return;
    var input = btn.parentElement.querySelector('.counter-val');
    if (!input) return;
    var min = parseInt(input.min, 10);
    if (isNaN(min)) min = 0;
    var current = parseInt(input.value, 10) || 0;
    var next = btn.dataset.action === 'inc' ? current + 1 : current - 1;
    if (next < min) next = min;
    input.value = next;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });
  // Counter input — sanitize na blur (nepovolit záporné, nečíselné)
  document.addEventListener('change', function(e) {
    var input = e.target.closest('.counter-val');
    if (!input) return;
    var min = parseInt(input.min, 10);
    if (isNaN(min)) min = 0;
    var v = parseInt(input.value, 10);
    if (isNaN(v) || v < min) v = min;
    input.value = v;
  });

  // Karta lodi jako odkaz na detail — vyjma vnitřních <a> a <button>.
  document.addEventListener('click', function(e) {
    var card = e.target.closest('.boat-card[data-href]');
    if (!card) return;
    if (e.target.closest('a, button')) return;
    window.location.href = card.dataset.href;
  });

  // Galerie obrázků v kartě lodi — šipky přepínají aktivní tečku.
  document.addEventListener('click', function(e) {
    var arrow = e.target.closest('.card-img-arrow');
    if (!arrow) return;
    e.preventDefault();
    e.stopPropagation();
    var imgBox = arrow.closest('.card-img');
    if (!imgBox) return;
    var dots = imgBox.querySelectorAll('.card-img-dot');
    if (!dots.length) return;
    var total = dots.length;
    var current = parseInt(imgBox.dataset.imgIdx, 10) || 0;
    var dir = arrow.classList.contains('card-img-arrow--next') ? 1 : -1;
    var next = (current + dir + total) % total;
    dots.forEach(function(d, i) { d.classList.toggle('is-active', i === next); });
    imgBox.dataset.imgIdx = next;
    var counter = imgBox.querySelector('.card-img-counter-val');
    if (counter) counter.textContent = (next + 1) + ' / ' + total;
  });
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var card = e.target.closest('.boat-card[data-href][tabindex]');
    if (!card || e.target !== card) return;
    e.preventDefault();
    window.location.href = card.dataset.href;
  });

  // Výbava — toggle "Ukázat více" / "Skrýt"
  document.querySelectorAll('.filter-more').forEach(function(btn) {
    var more = btn.previousElementSibling;
    if (!more || !more.classList.contains('filter-checks-more')) return;
    var labelShow = btn.textContent.trim() || '+ Ukázat více';
    var labelHide = '− Skrýt';
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var isHidden = more.hasAttribute('hidden');
      if (isHidden) {
        more.removeAttribute('hidden');
        btn.textContent = labelHide;
      } else {
        more.setAttribute('hidden', '');
        btn.textContent = labelShow;
      }
    });
  });

  // Prominentní "Hledat lodě" v results-hero — na pronajem-lodi.html jen scrolluje k výpisu
  document.querySelectorAll('.results-hero .btn-search').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = document.getElementById('boatsMain');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // H1 v results-hero — aktualizuje se podle destinace/typu v search formu
  function updateResultsHeading() {
    var h = document.getElementById('resultsHeading');
    if (!h) return;
    var hero = h.closest('.results-hero');
    if (!hero) return;
    var dest = '', cat = '';
    hero.querySelectorAll('.sf-sel').forEach(function(w) {
      var valEl = w.querySelector('.sf-sel-val');
      if (!valEl || valEl.classList.contains('is-placeholder')) return;
      var text = valEl.textContent.trim();
      if (!text || /vybráno$/.test(text)) return;
      var nativeSel = w.querySelector('select');
      if (!nativeSel) return;
      if (nativeSel.name === 'location') dest = text;
      else if (nativeSel.name === 'category') cat = text;
    });
    var base = cat ? 'Pronájem — ' + cat : 'Pronájem lodí';
    h.textContent = dest ? base + ' · ' + dest : base;
  }
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.results-hero .sf-sel')) return;
    setTimeout(updateResultsHeading, 0);
  });
  updateResultsHeading();

  // Seznam / Mapa přepínač
  document.querySelectorAll('.view-switch').forEach(function(group) {
    group.querySelectorAll('.view-switch-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        group.querySelectorAll('.view-switch-btn').forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      });
    });
  });

  // Reset aktivních filtrů vedle štítků — vyčistí všechny typy filtrů
  var chipsResetBtn = document.getElementById('chipsReset');
  if (chipsResetBtn) {
    chipsResetBtn.addEventListener('click', function() {
      // Checkboxy ve filter-group
      document.querySelectorAll('.filter-group .filter-check input[type="checkbox"]').forEach(function(cb) {
        if (cb.checked) { cb.checked = false; cb.dispatchEvent(new Event('change', { bubbles: true })); }
      });
      // fs-wrap selecty
      document.querySelectorAll('.fs-wrap').forEach(function(wrap) {
        wrap.querySelectorAll('.fs-option.selected').forEach(function(opt) {
          if (opt.dataset.value !== '') opt.classList.remove('selected');
        });
        var anyOpt = wrap.querySelector('.fs-option[data-value=""]');
        if (anyOpt) anyOpt.classList.add('selected');
        if (typeof updateTriggerText === 'function') updateTriggerText(wrap);
      });
      // Combobox přístavů — kliknout na ✕ u každého chipu uvnitř
      document.querySelectorAll('.sf-combobox--filter .sf-chip .sf-chip-remove').forEach(function(rm) {
        rm.click();
      });
      // Dual range slidery — vrátit na extrémy
      document.querySelectorAll('.range-dual').forEach(function(rng) {
        var minEl = rng.querySelector('.range-min');
        var maxEl = rng.querySelector('.range-max');
        if (!minEl || !maxEl) return;
        minEl.value = minEl.min;
        maxEl.value = maxEl.max;
        minEl.dispatchEvent(new Event('input', { bubbles: true }));
        maxEl.dispatchEvent(new Event('input', { bubbles: true }));
      });
      // Top form (.results-hero) — Destinace, Termín, Typ lodi
      document.querySelectorAll('.results-hero').forEach(function(hero) {
        // Destinace — odeber všechny chipy v komboboxu (bez --filter)
        hero.querySelectorAll('.sf-combobox:not(.sf-combobox--filter) .sf-chip .sf-chip-remove').forEach(function(rm) {
          rm.click();
        });
        // Termín — public API _clear na daterange
        hero.querySelectorAll('.sf-daterange').forEach(function(box) {
          if (typeof box._clear === 'function') box._clear();
        });
        // Typ lodi — odeber všechny chipy v sf-sel triggeru
        hero.querySelectorAll('.sf-sel .sf-sel-chip .sf-sel-chip-remove').forEach(function(rm) {
          rm.click();
        });
      });
      if (typeof renderActiveChips === 'function') renderActiveChips();
    });
  }

  // Hooky pro automatické překreslení chipů při změně filtru
  document.addEventListener('change', function(e) {
    if (e.target && e.target.matches('.filter-group .filter-check input[type="checkbox"]')) {
      if (typeof renderActiveChips === 'function') renderActiveChips();
    }
    if (e.target && e.target.matches('.range-dual input[type="range"], .range-val-min, .range-val-max')) {
      if (typeof renderActiveChips === 'function') renderActiveChips();
    }
  });
  document.querySelectorAll('.sf-combobox--filter .sf-combobox-field').forEach(function(field) {
    new MutationObserver(function() {
      if (typeof renderActiveChips === 'function') renderActiveChips();
      if (typeof renderAllBoats === 'function') renderAllBoats();
      document.dispatchEvent(new CustomEvent('marinas-filter-changed'));
    }).observe(field, { childList: true });
  });
  // Počáteční vykreslení (Plachetnice + Katamarán jsou předvolené)
  if (typeof renderActiveChips === 'function') renderActiveChips();

  // Na stránce pristav.html vykresli 6 lodí ze splitské oblasti.
  var marinaBoatsGrid = document.getElementById('marinaBoats');
  if (marinaBoatsGrid) {
    var splitArea = ['ACI Marina Split', 'Marina Kaštela', 'Marina Trogir', 'Marina Lav'];
    var subset = BOATS.filter(function(b) { return splitArea.indexOf(b.marina) !== -1; }).slice(0, 6);
    marinaBoatsGrid.innerHTML = subset.map(boatCard).join('');
  }

  // O nás – modal člena týmu
  (function initTeamModal() {
    var modal = document.getElementById('teamModal');
    if (!modal) return;
    var nameEl = document.getElementById('tmName');
    var roleEl = document.getElementById('tmRole');
    var bioEl = document.getElementById('tmBio');
    var emailEl = document.getElementById('tmEmail');
    var emailText = document.getElementById('tmEmailText');
    var phoneEl = document.getElementById('tmPhone');
    var phoneText = document.getElementById('tmPhoneText');
    var milesText = document.getElementById('tmMilesText');
    var galIdx = document.getElementById('tmGalIdx');
    var galTotal = document.getElementById('tmGalTotal');
    var current = 0;
    var total = 1;

    function renderGal() {
      if (galIdx) galIdx.textContent = current + 1;
      if (galTotal) galTotal.textContent = total;
    }
    function open(card) {
      var d = card.dataset;
      if (nameEl) nameEl.textContent = d.tmName || '';
      if (roleEl) roleEl.textContent = d.tmRole || '';
      if (bioEl) bioEl.textContent = d.tmBio || '';
      if (emailText) emailText.textContent = d.tmEmail || '';
      if (emailEl) emailEl.href = d.tmEmail ? 'mailto:' + d.tmEmail : '#';
      if (phoneText) phoneText.textContent = d.tmPhone || '';
      if (phoneEl) phoneEl.href = d.tmPhone ? 'tel:' + d.tmPhone.replace(/\s/g, '') : '#';
      if (milesText) milesText.textContent = d.tmMiles || '';
      total = parseInt(d.tmPhotos, 10) || 1;
      current = 0;
      renderGal();
      modal.removeAttribute('hidden');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      modal.setAttribute('hidden', '');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    function step(dir) {
      current = (current + dir + total) % total;
      renderGal();
    }

    document.querySelectorAll('.team-card[data-tm-name]').forEach(function(card) {
      card.addEventListener('click', function() { open(card); });
    });
    modal.addEventListener('click', function(e) {
      if (e.target.closest('[data-tm-close]')) close();
      else if (e.target.closest('[data-tm-prev]')) step(-1);
      else if (e.target.closest('[data-tm-next]')) step(1);
    });
    document.addEventListener('keydown', function(e) {
      if (modal.hasAttribute('hidden')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });
  })();

  // Detail page – lightbox galerie
  (function initLightbox() {
    var lb = document.getElementById('galleryLightbox');
    if (!lb) return;
    var image = document.getElementById('lbImage');
    var indexEl = document.getElementById('lbIndex');
    var totalEl = document.getElementById('lbTotal');
    var thumbs = document.getElementById('lbThumbs');
    var galItems = document.querySelectorAll('.gallery .gal-item');
    if (!image || !thumbs || !galItems.length) return;
    var TOTAL = 12;
    var current = 0;
    var zoom = 1;

    for (var i = 0; i < TOTAL; i++) {
      var t = document.createElement('button');
      t.type = 'button';
      t.className = 'lb-thumb';
      t.dataset.index = i;
      t.setAttribute('aria-label', 'Foto ' + (i + 1));
      thumbs.appendChild(t);
    }
    if (totalEl) totalEl.textContent = TOTAL;

    function render() {
      if (indexEl) indexEl.textContent = current + 1;
      image.style.setProperty('--zoom', zoom);
      var children = thumbs.children;
      for (var i = 0; i < children.length; i++) {
        children[i].classList.toggle('active', i === current);
      }
      var active = children[current];
      if (active && active.scrollIntoView) {
        active.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
      }
    }
    function open(idx) {
      current = Math.max(0, Math.min(TOTAL - 1, idx || 0));
      zoom = 1;
      lb.removeAttribute('hidden');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      render();
    }
    function close() {
      lb.setAttribute('hidden', '');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    function step(dir) {
      current = (current + dir + TOTAL) % TOTAL;
      zoom = 1;
      render();
    }
    function setZoom(d) {
      zoom = Math.max(0.5, Math.min(3, zoom + d * 0.25));
      render();
    }

    galItems.forEach(function(item, i) {
      item.addEventListener('click', function() { open(i); });
    });

    lb.addEventListener('click', function(e) {
      if (e.target.closest('[data-lb-close]')) { close(); return; }
      if (e.target.closest('[data-lb-prev]')) { step(-1); return; }
      if (e.target.closest('[data-lb-next]')) { step(1); return; }
      var zb = e.target.closest('[data-lb-zoom]');
      if (zb) { setZoom(parseInt(zb.dataset.lbZoom, 10)); return; }
      var th = e.target.closest('.lb-thumb');
      if (th) { current = parseInt(th.dataset.index, 10) || 0; zoom = 1; render(); return; }
      // klik mimo image / toolbar / thumbs zavírá
      if (e.target === lb) close();
    });

    document.addEventListener('keydown', function(e) {
      if (lb.hasAttribute('hidden')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === '+' || e.key === '=') setZoom(1);
      else if (e.key === '-' || e.key === '_') setZoom(-1);
    });
  })();

  // Kapitánské kurzy – Průvodce výběrem (multi-step wizard)
  (function initKkWizard() {
    var box = document.getElementById('kkWizard');
    if (!box) return;
    var nextBtn = document.getElementById('kkWizardNext');
    var resultEl = document.getElementById('kkWizardResult');
    var dots = box.querySelectorAll('.wizard-step-dot');
    var steps = box.querySelectorAll('.wizard-step[data-step]');
    var total = parseInt(box.dataset.totalSteps, 10) || steps.length;
    var current = 1;
    var selections = {};

    function render() {
      steps.forEach(function(s) {
        var n = parseInt(s.dataset.step, 10);
        if (n === current) s.removeAttribute('hidden');
        else s.setAttribute('hidden', '');
      });
      dots.forEach(function(d) {
        var n = parseInt(d.dataset.step, 10);
        d.classList.remove('is-current', 'is-done');
        if (n < current) d.classList.add('is-done');
        else if (n === current) d.classList.add('is-current');
      });
      var hasSelection = !!selections[current];
      nextBtn.disabled = !hasSelection;
      nextBtn.textContent = (current === total) ? 'Doporučit průkaz →' : 'Pokračovat →';
    }

    box.addEventListener('click', function(e) {
      var opt = e.target.closest('.wizard-opt');
      if (!opt) return;
      var step = opt.closest('.wizard-step');
      if (!step) return;
      step.querySelectorAll('.wizard-opt').forEach(function(o) { o.classList.remove('is-active'); });
      opt.classList.add('is-active');
      selections[parseInt(step.dataset.step, 10)] = opt.dataset.value;
      nextBtn.disabled = false;
    });

    nextBtn.addEventListener('click', function() {
      if (!selections[current]) return;
      if (current < total) {
        current += 1;
        render();
      } else {
        // Final – show result
        steps.forEach(function(s) { s.setAttribute('hidden', ''); });
        nextBtn.setAttribute('hidden', '');
        if (resultEl) resultEl.removeAttribute('hidden');
        dots.forEach(function(d) { d.classList.remove('is-current'); d.classList.add('is-done'); });
      }
    });

    render();
  })();

  // Mini-cards slider — ovládání šipkami (delegované)
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.mini-cards-arrow');
    if (!btn) return;
    var grid = document.getElementById(btn.dataset.target);
    if (!grid) return;
    var card = grid.querySelector('.mini-card') || grid.firstElementChild;
    if (!card) return;
    var dir = parseInt(btn.dataset.dir, 10) || 1;
    var style = window.getComputedStyle(grid);
    var gap = parseInt(style.columnGap || style.gap || '0', 10) || 14;
    grid.scrollBy({ left: (card.offsetWidth + gap) * dir, behavior: 'smooth' });
  });

  // Detail průkazu – dynamické CTA „Zvolte termíny" / „Rezervovat vybrané termíny"
  (function initLicenseReserve() {
    var btn = document.getElementById('licenseReserveBtn');
    if (!btn) return;
    var anchor = document.getElementById('sec-terminy');
    var checkboxes = document.querySelectorAll('.dates-table tbody input[type="checkbox"]');
    if (!checkboxes.length) return;

    function anySelected() {
      for (var i = 0; i < checkboxes.length; i++) if (checkboxes[i].checked) return true;
      return false;
    }
    function render() {
      btn.textContent = anySelected() ? 'Rezervovat vybrané termíny' : 'Zvolte termíny';
    }
    checkboxes.forEach(function(cb) {
      cb.addEventListener('change', render);
    });
    btn.addEventListener('click', function() {
      if (anySelected()) {
        window.location.href = 'rezervace-krok-1.html';
      } else if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    render();
  })();

  // ── FAVORITES SYSTEM (sdílené přes localStorage) ──
  var FAV_KEY = 'yachtnet-favs';
  function getFavs() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function setFavs(arr) {
    try { localStorage.setItem(FAV_KEY, JSON.stringify(arr)); } catch (e) {}
    updateFavCounter();
    updateFavButtons();
  }
  function isFav(id) { return getFavs().indexOf(id) >= 0; }
  function toggleFav(id) {
    var favs = getFavs();
    var i = favs.indexOf(id);
    if (i >= 0) { favs.splice(i, 1); setFavs(favs); return false; }
    favs.push(id); setFavs(favs); return true;
  }
  function updateFavCounter() {
    var count = getFavs().length;
    document.querySelectorAll('.nav-icon-btn[title="Oblíbené"]').forEach(function(btn) {
      var badge = btn.querySelector('.nav-icon-badge');
      if (count === 0) {
        if (badge) badge.remove();
        var svg = btn.querySelector('svg');
        if (svg) svg.removeAttribute('fill');
        if (svg && svg.getAttribute('data-orig-fill')) svg.setAttribute('fill', svg.getAttribute('data-orig-fill'));
        btn.classList.remove('is-fav');
      } else {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'nav-icon-badge';
          btn.appendChild(badge);
        }
        badge.textContent = count;
        btn.classList.add('is-fav');
      }
    });
  }
  function updateFavButtons() {
    document.querySelectorAll('[data-fav-id]').forEach(function(btn) {
      var id = btn.dataset.favId;
      var on = isFav(id);
      btn.classList.toggle('is-fav', on);
      btn.setAttribute('title', on ? 'Odebrat z oblíbených' : 'Přidat do oblíbených');
    });
  }
  function showFavToast(name, added) {
    var existing = document.querySelector('.fav-toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'fav-toast';
    var heart = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#dc2626" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    if (added) {
      toast.innerHTML = heart + '<div><div class="fav-toast-title"><strong>' + name + '</strong> přidána do oblíbených</div><a class="fav-toast-link" href="oblibene.html">Zobrazit oblíbené →</a></div>';
    } else {
      toast.innerHTML = heart + '<div><div class="fav-toast-title"><strong>' + name + '</strong> odebrána z oblíbených</div></div>';
    }
    document.body.appendChild(toast);
    requestAnimationFrame(function() { toast.classList.add('is-shown'); });
    setTimeout(function() {
      toast.classList.remove('is-shown');
      setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
    }, 4000);
  }
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-fav-id]');
    if (!btn) return;
    e.stopPropagation();
    e.preventDefault();
    var id = btn.dataset.favId;
    var name = btn.dataset.favName || 'Loď';
    var added = toggleFav(id);
    showFavToast(name, added);
  });
  // Init na načtení stránky
  setTimeout(function() { updateFavCounter(); updateFavButtons(); }, 0);

  // Sdílená sticky page-toc – sticky stav + active link tracking
  (function initPageToc() {
    var toc = document.querySelector('.page-toc');
    if (!toc || typeof IntersectionObserver === 'undefined') return;
    var links = toc.querySelectorAll('.page-toc-link');
    var linkById = {};
    var sections = [];
    links.forEach(function(link) {
      var id = (link.getAttribute('href') || '').slice(1);
      var sec = id ? document.getElementById(id) : null;
      if (sec) { linkById[id] = link; sections.push(sec); }
    });
    if (!sections.length) return;

    // Sentinel pro detekci sticky stavu
    var sentinel = document.createElement('div');
    sentinel.style.height = '1px';
    toc.parentNode.insertBefore(sentinel, toc);
    var stuckObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        toc.classList.toggle('is-stuck', !e.isIntersecting && e.boundingClientRect.top < 0);
      });
    }, { threshold: 0 });
    stuckObs.observe(sentinel);

    // Active link pomocí IntersectionObserver
    var visible = {};
    var activeObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) { visible[entry.target.id] = entry.isIntersecting; });
      var topId = null;
      for (var i = 0; i < sections.length; i++) {
        if (visible[sections[i].id]) { topId = sections[i].id; break; }
      }
      if (topId) {
        links.forEach(function(l) { l.classList.remove('active'); });
        var a = linkById[topId];
        if (a) {
          a.classList.add('active');
          var scroller = toc.querySelector('.page-toc-inner');
          if (scroller) {
            var r = a.getBoundingClientRect();
            var pr = scroller.getBoundingClientRect();
            if (r.left < pr.left || r.right > pr.right) {
              scroller.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
            }
          }
        }
      }
    }, { rootMargin: '-140px 0px -55% 0px', threshold: 0 });
    sections.forEach(function(s) { activeObs.observe(s); });
  })();

  // Detail page – sticky stav TOC (zobraz název lodi až když H1 zmizí)
  (function initDetailTocStuck() {
    var toc = document.querySelector('.detail-toc');
    var h1 = document.querySelector('.detail-h1');
    if (!toc || !h1 || typeof IntersectionObserver === 'undefined') return;
    var stuckObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        toc.classList.toggle('is-stuck', !e.isIntersecting);
      });
    }, { rootMargin: '-56px 0px 0px 0px', threshold: 0 });
    stuckObs.observe(h1);
  })();

  // Detail page – aktivní položka v sticky obsahu (TOC)
  (function initDetailToc() {
    var toc = document.querySelector('.detail-toc');
    if (!toc || typeof IntersectionObserver === 'undefined') return;
    var links = toc.querySelectorAll('.detail-toc-link');
    var linkById = {};
    var sections = [];
    links.forEach(function(link) {
      var id = (link.getAttribute('href') || '').slice(1);
      var sec = id ? document.getElementById(id) : null;
      if (sec) { linkById[id] = link; sections.push(sec); }
    });
    if (!sections.length) return;
    var setActive = function(id) {
      links.forEach(function(l) { l.classList.remove('active'); });
      var link = linkById[id];
      if (link) {
        link.classList.add('active');
        var tocInner = toc.querySelector('.detail-toc-inner');
        if (tocInner) {
          var rect = link.getBoundingClientRect();
          var parentRect = tocInner.getBoundingClientRect();
          if (rect.left < parentRect.left || rect.right > parentRect.right) {
            tocInner.scrollTo({ left: link.offsetLeft - 16, behavior: 'smooth' });
          }
        }
      }
    };
    var visible = {};
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        visible[entry.target.id] = entry.isIntersecting;
      });
      var topId = null;
      for (var i = 0; i < sections.length; i++) {
        if (visible[sections[i].id]) { topId = sections[i].id; break; }
      }
      if (topId) setActive(topId);
    }, { rootMargin: '-120px 0px -55% 0px', threshold: 0 });
    sections.forEach(function(s) { observer.observe(s); });
  })();

  // ── MAPA / SEZNAM TOGGLE + RENDER PINŮ (pronajem-lodi) ─
  // Sort tabs — toggle .is-active
  (function initSortTabs() {
    var tabs = document.querySelectorAll('.sort-tabs .sort-tab');
    if (!tabs.length) return;
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
      });
    });
  })();

  (function initMapView() {
    var canvas = document.getElementById('mapCanvas');
    var pinsHost = document.getElementById('mapPins');
    var mapEl = document.getElementById('boatsMap');
    var toggleBtn = document.getElementById('mapToggleBtn');
    if (!toggleBtn || !mapEl) return;

    var labelEl = toggleBtn.querySelector('.map-toggle-label');

    function setMapOpen(open) {
      mapEl.hidden = !open;
      toggleBtn.setAttribute('aria-pressed', open ? 'true' : 'false');
      if (labelEl) labelEl.textContent = open ? 'Skrýt mapu' : 'Zobrazit mapu';
      if (open && pinsHost && !pinsHost.dataset.rendered) renderPins();
      if (open) mapEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    toggleBtn.addEventListener('click', function() {
      setMapOpen(mapEl.hidden);
    });

    var boatData = window.BOATS || (typeof BOATS !== 'undefined' ? BOATS : null);
    if (!pinsHost || !boatData) return;

    function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h); }

    // Pozice jednotlivých přístavů na "mapě Jadranu"
    function marinaPos(name) {
      var m = (name || '').toLowerCase();
      if (m.indexOf('aci marina split') !== -1)       return { x: 32, y: 62 };
      if (m.indexOf('split') !== -1)                   return { x: 33, y: 60 };
      if (m.indexOf('trogir') !== -1)                  return { x: 38, y: 56 };
      if (m.indexOf('kaštela') !== -1 || m.indexOf('kastela') !== -1) return { x: 36, y: 58 };
      if (m.indexOf('lav') !== -1)                     return { x: 30, y: 64 };
      if (m.indexOf('spinut') !== -1)                  return { x: 34, y: 61 };
      if (m.indexOf('šibenik') !== -1 || m.indexOf('sibenik') !== -1) return { x: 50, y: 48 };
      if (m.indexOf('biograd') !== -1)                 return { x: 58, y: 40 };
      if (m.indexOf('zadar') !== -1)                   return { x: 62, y: 36 };
      if (m.indexOf('dubrovník') !== -1 || m.indexOf('dubrovnik') !== -1) return { x: 18, y: 78 };
      if (m.indexOf('pula') !== -1)                    return { x: 80, y: 22 };
      var h = hash(name);
      return { x: 30 + (h % 40), y: 30 + ((h >> 4) % 50) };
    }

    // Seskupení lodí podle přístavu + realistický (hashovaný) počet lodí pro wireframe
    var MARINAS = {};
    boatData.forEach(function(b) {
      var key = b.marina || 'Neznámý přístav';
      if (!MARINAS[key]) {
        var p = marinaPos(key);
        MARINAS[key] = { name: key, x: p.x, y: p.y, count: 0 };
      }
      MARINAS[key].count++;
    });
    // Nahrazení skutečného počtu plausibilní vyšší hodnotou (30–119)
    Object.keys(MARINAS).forEach(function(key) {
      MARINAS[key].count = 30 + (hash(key) % 90);
    });

    // Filter combobox je teď v top formuláři (Destinace) — sidebarový filtr Přístav byl odstraněn.
    // Marina chipy přidáváme/odebíráme tam; map state se synchronizuje obousměrně.
    function getDestBox() {
      return document.querySelector('.results-hero .sf-combobox[data-destination-search]');
    }
    function addMarinaToFilter(name) {
      var box = getDestBox();
      if (box && typeof box._addItem === 'function') box._addItem(name);
    }
    function removeMarinaFromFilter(name) {
      var box = getDestBox();
      if (!box) return;
      var chip = box.querySelector('.sf-chip[data-value="' + CSS.escape(name) + '"]');
      if (chip) {
        var rm = chip.querySelector('.sf-chip-remove');
        if (rm) rm.click();
      }
    }
    function getSelectedMarinas() {
      var box = getDestBox();
      if (!box) return [];
      return Array.prototype.map.call(box.querySelectorAll('.sf-chip'), function(c) { return c.dataset.value; });
    }
    function toggleMarinaInFilter(name) {
      if (getSelectedMarinas().indexOf(name) !== -1) removeMarinaFromFilter(name);
      else addMarinaToFilter(name);
    }
    function toggleClusterInFilter(marinas) {
      var selected = getSelectedMarinas();
      var allSelected = marinas.every(function(m) { return selected.indexOf(m.name) !== -1; });
      if (allSelected) {
        marinas.forEach(function(m) { removeMarinaFromFilter(m.name); });
      } else {
        marinas.forEach(function(m) {
          if (selected.indexOf(m.name) === -1) addMarinaToFilter(m.name);
        });
      }
    }

    // Zoom úrovně — threshold pro clustering v % canvasu
    var ZOOM_THRESHOLDS = [10, 5, 2.5, 0];
    var zoomIdx = 0;

    function clusterMarinas(marinas) {
      var THRESHOLD = ZOOM_THRESHOLDS[zoomIdx];
      if (THRESHOLD === 0) {
        return marinas.map(function(m) { return { x: m.x, y: m.y, marinas: [m], totalCount: m.count }; });
      }
      var clusters = [];
      marinas.forEach(function(m) {
        var found = null;
        for (var i = 0; i < clusters.length; i++) {
          var c = clusters[i];
          var dx = c.x - m.x, dy = c.y - m.y;
          if (Math.sqrt(dx * dx + dy * dy) < THRESHOLD) { found = c; break; }
        }
        if (found) {
          found.marinas.push(m);
          var sx = 0, sy = 0, tc = 0;
          found.marinas.forEach(function(mm) { sx += mm.x; sy += mm.y; tc += mm.count; });
          found.x = sx / found.marinas.length;
          found.y = sy / found.marinas.length;
          found.totalCount = tc;
        } else {
          clusters.push({ x: m.x, y: m.y, marinas: [m], totalCount: m.count });
        }
      });
      return clusters;
    }

    function renderPins() {
      pinsHost.innerHTML = '';
      var selected = getSelectedMarinas();
      var marinaList = Object.keys(MARINAS).map(function(k) { return MARINAS[k]; });
      var clusters = clusterMarinas(marinaList);
      clusters.forEach(function(c) {
        var el = document.createElement('button');
        el.type = 'button';
        el.style.left = c.x + '%';
        el.style.top = c.y + '%';
        if (c.marinas.length === 1) {
          var m = c.marinas[0];
          var isSelected = selected.indexOf(m.name) !== -1;
          el.className = 'map-pin map-pin--marina' + (isSelected ? ' is-selected' : '');
          el.title = m.name + ' — ' + m.count + ' lodí · klik pro ' + (isSelected ? 'odebrání' : 'přidání') + ' do filtru';
          el.innerHTML = '<span class="map-pin-shape"><span class="map-pin-count">' + m.count + '</span></span>' +
                         '<span class="map-pin-name">' + m.name + '</span>';
          el.addEventListener('click', function() {
            toggleMarinaInFilter(m.name);
          });
        } else {
          var allInCluster = c.marinas.every(function(mm) { return selected.indexOf(mm.name) !== -1; });
          el.className = 'map-pin map-pin--cluster' + (allInCluster ? ' is-selected' : '');
          var detail = c.marinas.map(function(m) { return m.name + ' (' + m.count + ')'; }).join(', ');
          el.title = c.marinas.length + ' přístavů · ' + c.totalCount + ' lodí · ' + detail + ' · klik pro ' + (allInCluster ? 'odebrání všech' : 'přidání všech') + ' do filtru';
          el.textContent = c.totalCount;
          var clusterMarinas = c.marinas;
          el.addEventListener('click', function() {
            toggleClusterInFilter(clusterMarinas);
          });
        }
        pinsHost.appendChild(el);
      });
      pinsHost.dataset.rendered = '1';
    }

    // Sleduj změny v destination combobox (chipy se přidávají/mažou) a překreslí piny.
    var destBox = getDestBox();
    if (destBox) {
      var field = destBox.querySelector('.sf-combobox-field');
      if (field) {
        new MutationObserver(function() {
          if (pinsHost && pinsHost.dataset.rendered) renderPins();
        }).observe(field, { childList: true, subtree: true });
      }
    }

    // Zoom +/- tlačítka
    var zoomIn  = canvas && canvas.querySelector('.map-zoom-in');
    var zoomOut = canvas && canvas.querySelector('.map-zoom-out');
    if (zoomIn)  zoomIn.addEventListener('click',  function() { if (zoomIdx < ZOOM_THRESHOLDS.length - 1) { zoomIdx++; renderPins(); } });
    if (zoomOut) zoomOut.addEventListener('click', function() { if (zoomIdx > 0) { zoomIdx--; renderPins(); } });
  })();

  // ── CREW / INVITE MODALY ──────────────────────────────
  function bindModal(modalId, openSel, closeSel) {
    var modal = document.getElementById(modalId);
    if (!modal) return;
    var openers = document.querySelectorAll(openSel);
    var closers = modal.querySelectorAll(closeSel);
    function open() { modal.hidden = false; modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
    function close() { modal.hidden = true; modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
    openers.forEach(function(b) { b.addEventListener('click', function(e) { e.preventDefault(); open(); }); });
    closers.forEach(function(b) { b.addEventListener('click', function(e) { e.preventDefault(); close(); }); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && !modal.hidden) close(); });
    return modal;
  }

  (function initCrewModal() {
    var modal = bindModal('crewModal', '[data-open-crew-modal]', '[data-close-crew-modal]');
    if (!modal) return;
    var searchInput = modal.querySelector('.crew-modal-search input');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        var q = searchInput.value.trim().toLowerCase();
        modal.querySelectorAll('.crew-modal-item').forEach(function(item) {
          var name = (item.querySelector('.crew-modal-name') || {}).textContent || '';
          item.hidden = q && name.toLowerCase().indexOf(q) === -1;
        });
      });
    }
  })();

  (function initInviteModal() {
    bindModal('inviteModal', '[data-open-invite-modal]', '[data-close-invite-modal]');
  })();

  (function initRatingModal() {
    var modal = bindModal('ratingModal', '[data-open-rating-modal]', '[data-close-rating-modal]');
    if (!modal) return;
    function applyRow(row) {
      var val = parseInt(row.dataset.value, 10) || 0;
      row.querySelectorAll('.rate-star').forEach(function(s) {
        s.classList.toggle('is-active', parseInt(s.dataset.val, 10) <= val);
      });
      var out = row.querySelector('.rate-row-val');
      if (out) out.textContent = val + '/5';
    }
    modal.querySelectorAll('.rate-row').forEach(function(row) {
      applyRow(row);
      row.querySelectorAll('.rate-star').forEach(function(star) {
        star.addEventListener('click', function() {
          row.dataset.value = star.dataset.val;
          applyRow(row);
        });
        star.addEventListener('mouseenter', function() {
          var v = parseInt(star.dataset.val, 10);
          row.classList.add('is-hovering');
          row.querySelectorAll('.rate-star').forEach(function(s) {
            s.classList.toggle('is-preview', parseInt(s.dataset.val, 10) <= v);
          });
        });
      });
      row.addEventListener('mouseleave', function() {
        row.classList.remove('is-hovering');
        row.querySelectorAll('.rate-star').forEach(function(s) { s.classList.remove('is-preview'); });
      });
    });
  })();

  // ── ZÁLOŽKY REZERVACÍ ──────────────────────────────────
  (function initReservationTabs() {
    var tabs = document.querySelectorAll('.res-tab');
    if (!tabs.length) return;
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var key = tab.dataset.tab;
        tabs.forEach(function(t) { t.classList.toggle('is-active', t === tab); });
        document.querySelectorAll('.res-tab-panel').forEach(function(p) {
          p.hidden = p.dataset.panel !== key;
        });
      });
    });
  })();

  // ── ÚČET — fakturační adresa FO/Firma ──────────────────
  (function initBillingType() {
    var billing = document.querySelector('[data-billing]');
    if (!billing) return;
    var companyRow = billing.querySelector('.billing-company-row');
    var radios = billing.querySelectorAll('input[name="billing-type"]');
    function sync() {
      var v = billing.querySelector('input[name="billing-type"]:checked');
      if (!v || !companyRow) return;
      companyRow.hidden = v.value !== 'company';
    }
    radios.forEach(function(r) { r.addEventListener('change', sync); });
    sync();
  })();

  // ── BOOKING SUMMARY — dynamický souhrn cen ──────────────
  (function initBookingSummary() {
    var pojAnchor = document.querySelector('[data-pojisteni-anchor]');
    var extrasAnchor = document.querySelector('[data-extras-anchor]');
    if (!pojAnchor && !extrasAnchor) return;
    var pojEmpty = document.querySelector('[data-pojisteni-empty]');
    var extrasEmpty = document.querySelector('[data-extras-empty]');

    function parsePrice(text) {
      var sign = /[−-]/.test(text) ? -1 : 1;
      var n = (text.replace(/\s/g, ' ').match(/[\d\s]+/) || ['0'])[0].replace(/\s/g, '');
      return sign * (parseInt(n, 10) || 0);
    }
    function formatPrice(n) {
      var abs = Math.abs(n).toLocaleString('cs').replace(/\u00a0/g, ' ');
      return (n < 0 ? '−' : '') + abs + ' Kč';
    }

    var FIXED_RENT_TOTAL = 59011;
    var PAY_AT_MARINA_FIXED = 26611;
    // Povinné poplatky (Transit log 12 611 + Skipper 14 000 + Early check-in 0)
    // — statické položky vykreslené přímo v HTML druhé karty, vstupují do display totalu.
    var POVINNE_POPLATKY_FIXED = 26611;
    var DEPOSIT_RATIO = 0.30;
    var payNowEl  = document.querySelector('[data-pay-now]');
    var payRestEl = document.querySelector('[data-pay-rest]');
    var payRest1El = document.querySelector('[data-pay-rest-1]');
    var payRest2El = document.querySelector('[data-pay-rest-2]');

    var pojItems = [], extraItems = [];

    function renderInto(anchor, list, emptyEl) {
      if (!anchor) return;
      anchor.querySelectorAll('.price-line--dynamic').forEach(function(el) { el.remove(); });
      var any = false;
      list.forEach(function(it) {
        if (!it.checked) return;
        any = true;
        var line = document.createElement('div');
        line.className = 'price-line price-line--dynamic';
        // Kauce je samostatný typ pojištění (chrání vratnou kauci), nikoli běžné krytí —
        // oddělíme ho linkou, aby vizuálně neslýval s ostatními pojištěními.
        if (it.label === 'Pojištění kauce') line.classList.add('price-line--separator');
        line.innerHTML = '<span>' + it.label + '</span><span>' + formatPrice(it.price) + '</span>';
        anchor.appendChild(line);
      });
      if (emptyEl) emptyEl.style.display = any ? 'none' : '';
    }

    var extrasTotalEl = document.querySelector('[data-extras-total]');

    function rebuild() {
      renderInto(pojAnchor, pojItems, pojEmpty);
      renderInto(extrasAnchor, extraItems, extrasEmpty);

      var pojSum = 0;
      pojItems.forEach(function(it) { if (it.checked) pojSum += it.price; });
      var extraSum = 0;
      extraItems.forEach(function(it) { if (it.checked) extraSum += it.price; });

      // Displayed total v sidebaru = statické povinné poplatky + dynamické pojištění + dynamické vybavení
      if (extrasTotalEl) extrasTotalEl.textContent = formatPrice(POVINNE_POPLATKY_FIXED + pojSum + extraSum);

      // Rozklad plateb — online (3 řádky) = jen pronájem 32 400 Kč. Pojištění/vybavení tady nejsou.
      var RENTAL_TOTAL = FIXED_RENT_TOTAL - PAY_AT_MARINA_FIXED;
      var online = RENTAL_TOTAL;
      var nyni = Math.round(online * DEPOSIT_RATIO);
      var doplatek = online - nyni;
      if (payNowEl) payNowEl.textContent = formatPrice(nyni);
      if (payRestEl) payRestEl.textContent = formatPrice(doplatek);
      var rest1 = Math.round(doplatek / 2);
      var rest2 = doplatek - rest1;
      if (payRest1El) payRest1El.textContent = formatPrice(rest1);
      if (payRest2El) payRest2El.textContent = formatPrice(rest2);

      // Na základně = povinné poplatky + dynamické vybavení (pojištění platí pojišťovně, ne na základně)
      var payMarinaEl = document.querySelector('[data-pay-marina]');
      if (payMarinaEl) payMarinaEl.textContent = formatPrice(POVINNE_POPLATKY_FIXED + extraSum);
    }

    function track(list, input, label, priceText) {
      var item = { label: label, price: parsePrice(priceText), checked: input.checked };
      list.push(item);
      input.addEventListener('change', function() {
        item.checked = input.checked;
        rebuild();
      });
    }

    document.querySelectorAll('.extra-item').forEach(function(it) {
      var input = it.querySelector('input[type="checkbox"]');
      var nameEl = it.querySelector('.extra-item-name');
      var priceEl = it.querySelector('.extra-item-price');
      if (!input || !nameEl || !priceEl) return;
      var name = nameEl.textContent.replace(/\s*povinné\s*$/, '').trim();
      if (/^Skipper/i.test(name)) return;
      if (it.classList.contains('is-required')) name += ' (povinné)';
      track(extraItems, input, name, priceEl.textContent);
    });

    document.querySelectorAll('.pkg-ins-row').forEach(function(row) {
      var input = row.querySelector('.pkg-ins-check');
      var nameEl = row.querySelector('.pkg-ins-row-name');
      var priceEl = row.querySelector('.pkg-ins-row-price');
      if (input && nameEl && priceEl) track(pojItems, input, nameEl.textContent.trim(), priceEl.textContent);
    });

    rebuild();
  })();

  // ── RESERVATION PACKAGE PICKER (detail-lodi) ──────────
  (function initPackagePicker() {
    var radios = document.querySelectorAll('input[name="reservation-package"]');
    if (!radios.length) return;
    var priceEl    = document.querySelector('[data-cta-price]');
    var variantEl  = document.querySelector('[data-cta-variant]');
    var priceFrom  = document.querySelector('.cta-price .cta-price-from');
    var ctaBtns    = document.querySelectorAll('[data-reserve-cta]');

    var LABELS = { basic: 'Basic', flex: 'Flex', premium: 'Premium' };
    var DEFAULT_PRICE = priceEl ? priceEl.textContent.trim() : '';

    function setSelected(radio) {
      var card = radio.closest('.pkg-card');
      var price = card && card.querySelector('.pkg-price-val');
      if (priceEl && price) priceEl.textContent = price.textContent.trim();
      if (variantEl) {
        variantEl.textContent = '· ' + (LABELS[radio.value] || radio.value);
        variantEl.hidden = false;
      }
      if (priceFrom) priceFrom.hidden = true;
      ctaBtns.forEach(function(btn) {
        btn.textContent = 'Pokračovat k rezervaci →';
        btn.setAttribute('href', 'rezervace-krok-1.html');
      });
    }

    function setUnselected() {
      if (priceEl) priceEl.textContent = DEFAULT_PRICE;
      if (variantEl) { variantEl.textContent = ''; variantEl.hidden = true; }
      if (priceFrom) priceFrom.hidden = false;
      ctaBtns.forEach(function(btn) {
        btn.textContent = 'Vybrat variantu ↓';
        btn.setAttribute('href', '#sec-balicky');
      });
    }

    radios.forEach(function(r) {
      r.addEventListener('change', function() { if (r.checked) setSelected(r); });
    });
    var checked = Array.prototype.find.call(radios, function(r) { return r.checked; });
    if (checked) setSelected(checked); else setUnselected();
  })();

  // ── TERM SLIDER ARROWS ─────────────────────────────────
  (function initTermSlider() {
    document.querySelectorAll('.term-slider').forEach(function(slider) {
      var list = slider.querySelector('.term-list');
      if (!list) return;
      var step = 220;
      slider.querySelector('.term-nav--prev')?.addEventListener('click', function() {
        list.scrollBy({ left: -step, behavior: 'smooth' });
      });
      slider.querySelector('.term-nav--next')?.addEventListener('click', function() {
        list.scrollBy({ left: step, behavior: 'smooth' });
      });
    });
  })();
