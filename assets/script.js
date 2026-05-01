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
          '<div class="footer-col"><div class="yp-badge"><div class="yp-badge-head">Checked <span class="yp-amp">&amp;</span> Trusted</div><div class="yp-badge-name"><div class="yp-badge-name-1">Yacht-Pool</div><div class="yp-badge-name-2">International</div></div><div class="yp-badge-tagline">Financial Security<br>System</div><div class="yp-badge-valid">valid 2026 only</div></div></div>' +
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
          { href: 'detail-rezervace.html', title: 'Detail rezervace', id: 'page-reservation-detail' }
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

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, function(c) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]); }); }

  function highlightMatch(name, q) {
    if (!q) return escapeHtml(name);
    var idx = name.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return escapeHtml(name);
    return escapeHtml(name.slice(0, idx)) + '<mark>' + escapeHtml(name.slice(idx, idx + q.length)) + '</mark>' + escapeHtml(name.slice(idx + q.length));
  }

  function initDestinationSearch() {
    document.querySelectorAll('[data-destination-search]').forEach(function(box) {
      var input = box.querySelector('.sf-combobox-input');
      var dropdown = box.querySelector('.sf-combobox-dropdown');
      if (!input || !dropdown) return;
      var activeIdx = -1;
      var results = [];

      function render(filter) {
        var q = (filter || '').trim();
        var ql = q.toLowerCase();
        results = ql
          ? DESTINATIONS.filter(function(d) { return d.name.toLowerCase().indexOf(ql) !== -1 || d.country.toLowerCase().indexOf(ql) !== -1; })
          : DESTINATIONS.slice();
        activeIdx = -1;
        if (!results.length) {
          dropdown.innerHTML = '<div class="sf-combobox-empty">Pro „' + escapeHtml(q) + '" nic nenalezeno.</div>';
          return;
        }
        // Skupiny: country, region, marina (zachovává pořadí registru)
        var html = '';
        var lastType = '';
        results.forEach(function(d, i) {
          if (d.type !== lastType) {
            html += '<div class="sf-combobox-section-title">' + (DEST_TYPE_LABEL[d.type] || d.type) + (d.type === 'marina' ? 'y' : (d.type === 'region' ? 'i' : '')) + '</div>';
            lastType = d.type;
          }
          html += '<button type="button" class="sf-combobox-item" data-idx="' + i + '" data-value="' + escapeHtml(d.name) + '">' +
            '<span class="sf-combobox-flag">' + d.flag + '</span>' +
            '<span class="sf-combobox-name">' + highlightMatch(d.name, q) + '</span>' +
            '<span class="sf-combobox-tag">' + (DEST_TYPE_LABEL[d.type] || d.type) + '</span>' +
          '</button>';
        });
        dropdown.innerHTML = html;
      }

      function open() {
        render(input.value);
        dropdown.removeAttribute('hidden');
        box.setAttribute('aria-expanded', 'true');
        input.setAttribute('aria-expanded', 'true');
      }

      function close() {
        dropdown.setAttribute('hidden', '');
        box.setAttribute('aria-expanded', 'false');
        input.setAttribute('aria-expanded', 'false');
      }

      function selectActive() {
        var items = dropdown.querySelectorAll('.sf-combobox-item');
        items.forEach(function(it, i) { it.classList.toggle('is-active', i === activeIdx); });
        var active = items[activeIdx];
        if (active) active.scrollIntoView({ block: 'nearest' });
      }

      input.addEventListener('focus', open);
      input.addEventListener('input', function() { open(); });
      input.addEventListener('blur', function() { setTimeout(close, 150); });
      input.addEventListener('keydown', function(e) {
        var items = dropdown.querySelectorAll('.sf-combobox-item');
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (dropdown.hasAttribute('hidden')) open();
          activeIdx = Math.min(activeIdx + 1, items.length - 1);
          selectActive();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          activeIdx = Math.max(activeIdx - 1, 0);
          selectActive();
        } else if (e.key === 'Enter') {
          if (activeIdx >= 0 && items[activeIdx]) {
            e.preventDefault();
            input.value = items[activeIdx].dataset.value;
            close();
          }
        } else if (e.key === 'Escape') {
          close();
          input.blur();
        }
      });

      dropdown.addEventListener('mousedown', function(e) {
        var item = e.target.closest('.sf-combobox-item');
        if (!item) return;
        e.preventDefault();
        input.value = item.dataset.value;
        close();
      });
    });
  }

  function initPeopleStepper() {
    document.querySelectorAll('[data-people-stepper]').forEach(function(box) {
      var dec = box.querySelector('[data-step="-1"]');
      var inc = box.querySelector('[data-step="1"]');
      var val = box.querySelector('.sf-people-val');
      var hidden = box.querySelector('input[type="hidden"]');
      var min = parseInt(box.dataset.min, 10) || 1;
      var max = parseInt(box.dataset.max, 10) || 12;
      var current = parseInt(box.dataset.value || hidden && hidden.value, 10) || 2;

      function fmt(n) { return n + ' ' + (n === 1 ? 'osoba' : (n >= 2 && n <= 4 ? 'osoby' : 'osob')) + (n >= max ? '+' : ''); }

      function update() {
        if (val) val.textContent = fmt(current);
        if (hidden) hidden.value = current;
        if (dec) dec.disabled = current <= min;
        if (inc) inc.disabled = current >= max;
      }

      if (dec) dec.addEventListener('click', function() { if (current > min) { current--; update(); } });
      if (inc) inc.addEventListener('click', function() { if (current < max) { current++; update(); } });
      update();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { initDestinationSearch(); initPeopleStepper(); });
  } else {
    initDestinationSearch();
    initPeopleStepper();
  }

  // ── BOAT DATA ──────────────────────────────────────────
  const BOATS = [
    { name:"Bavaria C42", boatName:"Lady One", cat:"Plachetnice", marina:"ACI Marina Split", company:"Sunsail", year:2021, len:"12.8 m", cabins:3, berths:6, price:"36 000 Kč", rec:true,
      perks:["early-checkin","free-motor"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Závěsný motor + dinghy","Záchranné vesty","Záchranný balíček","Kokpitový stůl"] },
    { name:"Jeanneau Sun Odyssey 54", boatName:"Blue Wind", cat:"Plachetnice", marina:"Marina Lav", company:"Navigare Yachting", year:2020, len:"16.5 m", cabins:5, berths:10, price:"80 000 Kč", discount:15,
      perks:["deposit-30"],
      amenities:["Bimini","Autopilot","GPS / Chartplotter","VHF radiostanice","Radar","AIS","Závěsný motor + dinghy","Klimatizace","Výrobník vody","Solární panely"] },
    { name:"Lagoon 42", boatName:"Ocean Dream", cat:"Katamaran", marina:"Marina Kaštela", company:"Moorings", year:2022, len:"12.9 m", cabins:4, berths:8, price:"95 000 Kč", rec:true,
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
    { name:"Bavaria C45", boatName:"Sea Spirit", cat:"Plachetnice", marina:"ACI Marina Split", company:"Bavaria Yachtbau Charter", year:2022, len:"13.5 m", cabins:4, berths:8, price:"45 000 Kč",
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
    { name:"Bénéteau Oceanis 51", boatName:"Azzurra", cat:"Plachetnice", marina:"Marina Zadar", company:"Dalmacija Charter", year:2021, len:"15.4 m", cabins:5, berths:10, price:"72 000 Kč",
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
    'early-checkin': { label: 'Early check-in', cls: 'card-perk--early', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
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
    const tags = b.amenities.slice(0,5).map(a => `<span class="amenity-tag">${a}</span>`).join("");
    const discountBadge = b.discount ? `<span class="badge badge-dis">−${b.discount} %</span>` : "";
    const rec = b.rec ? `<span class="badge badge-rec">★ Doporučujeme</span>` : "";
    const oldPrice = b.discount ? `<div class="price-old">${Math.round(parseInt(b.price.replace(/\D/g,"")) / (1 - b.discount/100)).toLocaleString("cs")} Kč</div>` : "";
    const priceClass = b.discount ? "price-val price-val--sale" : "price-val";
    const favId = ((b.name || '') + '-' + (b.boatName || '')).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const favName = (b.name || '') + (b.boatName ? ' "' + b.boatName + '"' : '');
    const perksHtml = renderPerks(b.perks);
    const wc = b.wc != null ? b.wc : Math.max(1, Math.round((b.cabins || 2) / 2));
    const persons = b.persons || b.berths;
    const ratingVal = (b.rating != null ? b.rating : 4.7).toFixed(1).replace('.', ',');
    const ratingCount = b.ratingCount != null ? b.ratingCount : 124;
    const ratingHtml = '<div class="card-rating" title="Hodnocení modelu ' + b.name + '"><span class="card-rating-stars">★★★★★</span><span class="card-rating-val">' + ratingVal + '</span><span class="card-rating-count">(' + ratingCount + ' hodnocení)</span></div>';
    const statusHtml = b.reserved
      ? '<span class="card-status card-status--reserved"><span class="card-status-dot"></span>Rezervovaná</span>'
      : '<span class="card-status card-status--free"><span class="card-status-dot"></span>Volná</span>';
    return `
      <div class="boat-card" data-href="detail-lodi.html" role="link" tabindex="0">
        <div class="card-img" data-img-idx="0" data-img-total="5">
          <span class="card-cat-pill">${b.cat}</span>
          <button type="button" class="card-img-arrow card-img-arrow--prev" aria-label="Předchozí obrázek"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
          <button type="button" class="card-img-arrow card-img-arrow--next" aria-label="Další obrázek"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
          <span class="card-img-counter"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span class="card-img-counter-val">1 / 5</span></span>
          <div class="card-img-dots"><span class="card-img-dot is-active"></span><span class="card-img-dot"></span><span class="card-img-dot"></span><span class="card-img-dot"></span><span class="card-img-dot"></span></div>
        </div>
        <div class="card-body">
          <div>
            <div class="card-badges">${rec}${discountBadge}${perksHtml}</div>
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
              <div class="spec"><span class="spec-l">Délka</span><span class="spec-v">${b.len}</span></div>
              <div class="spec"><span class="spec-l">WC</span><span class="spec-v">${wc}</span></div>
            </div>
          </div>
          <div class="card-amenities">${tags}</div>
        </div>
        <div class="card-side">
          <div class="card-side-top">
            ${statusHtml}
<button class="card-icon-btn" type="button" title="Přidat do oblíbených" data-fav-id="${favId}" data-fav-name='${favName.replace(/'/g, "&apos;")}'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
          </div>
          <div class="card-side-bottom">
            <div class="card-price">
              <span class="price-from">Od</span>
              ${oldPrice}
              <span class="${priceClass}">${b.price}</span>
              <span class="price-unit">/ týden</span>
              <span class="price-fees">+ 12 611 Kč poplatky</span>
            </div>
            <button class="btn-view" onclick="window.location.href='detail-lodi.html'">Zobrazit detail →</button>
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

  function renderAllBoats() {
    const grid = document.getElementById("boatsGrid");
    if (!grid) return;
    const countEl = document.getElementById("resultCount");
    if (countEl) countEl.textContent = BOATS.length;
    grid.innerHTML = BOATS.map(boatCard).join("");
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
      var group    = el.closest('.filter-group');
      var minLabel = group.querySelector('.range-val-min');
      var maxLabel = group.querySelector('.range-val-max');
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
    document.querySelectorAll('.fs-wrap').forEach(function(wrap) {
      wrap.querySelectorAll('.fs-option.selected').forEach(function(opt) {
        if (opt.dataset.value === '' || opt.dataset.value === undefined) return;
        chips.push({ label: opt.textContent.trim(), wrap: wrap, opt: opt });
      });
    });
    chipsEl.innerHTML = chips.map(function(c, i) {
      return '<div class="active-chip"><span>' + c.label + '</span><span class="active-chip-remove" data-idx="' + i + '">\u00d7</span></div>';
    }).join('');
    chipsEl.querySelectorAll('.active-chip-remove').forEach(function(btn) {
      var idx = parseInt(btn.dataset.idx);
      var c = chips[idx];
      btn.addEventListener('click', function() {
        c.opt.classList.remove('selected');
        var anyOpt = c.wrap.querySelector('.fs-option[data-value=""]');
        var hasOther = Array.prototype.some.call(
          c.wrap.querySelectorAll('.fs-option:not(.fs-group)'),
          function(o) { return o.classList.contains('selected') && o.dataset.value !== ''; }
        );
        if (!hasOther && anyOpt) anyOpt.classList.add('selected');
        updateTriggerText(c.wrap);
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
            valEl.textContent = placeholder; valEl.classList.add('is-placeholder');
          } else if (selected.length === 1) {
            valEl.textContent = selected[0].label; valEl.classList.remove('is-placeholder');
          } else {
            valEl.textContent = selected.length + '\u00a0vybráno';
            valEl.classList.remove('is-placeholder');
            valEl.classList.add('sf-sel-val-multi');
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
      trigger.addEventListener('click', function(e) { e.stopPropagation(); openClose(); });
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

  // Reset aktivních filtrů vedle štítků
  var chipsResetBtn = document.getElementById('chipsReset');
  if (chipsResetBtn) {
    chipsResetBtn.addEventListener('click', function() {
      document.querySelectorAll('.fs-wrap').forEach(function(wrap) {
        wrap.querySelectorAll('.fs-option.selected').forEach(function(opt) {
          if (opt.dataset.value !== '') opt.classList.remove('selected');
        });
        var anyOpt = wrap.querySelector('.fs-option[data-value=""]');
        if (anyOpt) anyOpt.classList.add('selected');
        if (typeof updateTriggerText === 'function') updateTriggerText(wrap);
      });
      if (typeof renderActiveChips === 'function') renderActiveChips();
    });
  }

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
