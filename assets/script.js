// Shared script — Yachtnet wireframe
// Rozdělený prototyp: každá stránka má vlastní HTML soubor + linkuje tento skript.

  // ── COMPONENT REGISTRY ─────────────────────────────────
  // Jediný zdroj pravdy pro opakující se komponenty napříč prototypem.
  // Použití na stránce:  <div data-component="footer"></div>
  //                      <div data-component="socialProof" data-quote="..." data-author="..."></div>
  //                      <div data-component="teamModal"></div>
  // Při změně podoby uprav jen funkci níže — automaticky propagace všude.
  const Components = {

    // Číselný krokovač funnelu (sdílený: rezervace lodi, objednávka kurzu, dárkový poukaz…).
    // Použití: <div data-component="stepper" data-current="1"
    //            data-steps='[{"label":"Osobní údaje","href":"rezervace-krok-1-v2.html"},…]'></div>
    stepper: function(opts) {
      var steps = [];
      try { steps = JSON.parse((opts && opts.steps) || '[]'); } catch (e) { steps = []; }
      var current = parseInt((opts && opts.current) || '1', 10) || 1;
      var CHECK = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
      var inner = steps.map(function(step, i) {
        var n = i + 1;
        var state = n < current ? ' done' : (n === current ? ' active' : '');
        var num = n < current ? CHECK : String(n);
        var tagOpen = step.href ? '<a class="bk-step' + state + '" href="' + step.href + '">' : '<div class="bk-step' + state + '">';
        var tagClose = step.href ? '</a>' : '</div>';
        return tagOpen + '<div class="bk-step-num">' + num + '</div><div class="bk-step-label">' + step.label + '</div>' + tagClose;
      }).join('');
      return '<div class="bk-stepper-wrap"><div class="bk-stepper">' + inner + '</div></div>';
    },

    // Navigace uživatelského účtu (sdílená napříč všemi stránkami Mého účtu).
    // Použití: <div data-component="accountNav" data-active="rezervace"></div>
    // Na detailových podstránkách (mimo hlavní záložku) přidej data-active-href, aby
    // aktivní položka odkazovala zpět na nadřazenou stránku sekce (jinak href="#").
    accountNav: function(opts) {
      var active = (opts && opts.active) || '';
      var activeHref = (opts && opts.activeHref) || '#';
      var ITEMS = [
        { key: 'rezervace', href: 'seznam-rezervaci.html', label: 'Moje rezervace', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
        { key: 'pojisteni', href: 'moje-pojisteni.html', label: 'Pojištění', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>' },
        { key: 'posadka', href: 'crew.html', label: 'Členové posádky', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
        { key: 'prukazy', href: 'prukazy.html', label: 'Průkazy', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
        { key: 'kurzy', href: 'moje-kurzy.html', label: 'Moje kurzy', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>' },
        { key: 'udaje', href: 'ucet.html', label: 'Osobní údaje', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' }
      ];
      var itemsHtml = ITEMS.map(function(it) {
        var isActive = it.key === active;
        var href = isActive ? activeHref : it.href;
        return '<a class="account-nav-item' + (isActive ? ' active' : '') + '" href="' + href + '">' + it.icon + it.label + '</a>';
      }).join('');
      return '<aside class="account-sidebar">' +
        '<div class="account-nav-user">' +
          '<div class="account-nav-avatar"></div>' +
          '<div class="account-nav-name">Jaroslav Zimmermann</div>' +
          '<div class="account-nav-email">jara.da.zimmermann@ckpolnimarsaleklegal.cz</div>' +
        '</div>' +
        itemsHtml +
        '<a class="account-nav-item" href="#" style="margin-top:auto;color:var(--muted);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Odhlásit se</a>' +
      '</aside>';
    },

    footer: function() {
      return '<footer class="footer">' +
        '<div class="footer-newsletter"><div class="footer-nl-title">Získejte vždy čerstvé informace<br>ze světa jachtingu!</div><div class="footer-nl-contacts"><a class="footer-nl-contact" href="tel:+420233354050"><span class="footer-nl-contact-label">Rezervace a kurzy</span><span class="footer-nl-contact-val">+420 233 354 050</span></a><a class="footer-nl-contact" href="tel:+420211222940"><span class="footer-nl-contact-label">Non-stop servis</span><span class="footer-nl-contact-val">+420 211 222 940</span></a><a class="footer-nl-contact" href="mailto:info@yachtnet.cz"><span class="footer-nl-contact-val">info@yachtnet.cz</span></a></div><div class="footer-nl-form"><div class="footer-nl-row"><input class="footer-nl-input" type="email" placeholder="Vaše e-mailová adresa" /><button class="footer-nl-btn">Odebírat</button></div><label class="footer-nl-consent"><input type="checkbox" /> Souhlasím se zásadami ochrany osobních údajů</label></div></div>' +
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
      // Hero varianta — social proof jako boxíky přímo v hero obrázku (na mobilu pod sebou)
      if (opts && opts.variant === 'hero') {
        return '<div class="social-proof social-proof--hero">' +
          '<div class="sp-box sp-box--trust"><span class="sp-box-mark sp-box-mark--yp">YP</span><span class="sp-box-lines"><span class="sp-box-title">Checked &amp; Trusted</span><span class="sp-box-sub">Yacht-Pool · valid 2026</span></span></div>' +
          '<div class="sp-box sp-box--iso"><span class="sp-box-mark sp-box-mark--iso">ISO</span><span class="sp-box-lines"><span class="sp-box-title">ISO 9001:2015</span><span class="sp-box-sub">od roku 2004</span></span></div>' +
          '<div class="sp-box sp-box--google"><span class="sp-box-gicon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg></span><span class="sp-box-lines"><span class="sp-box-sub">' + label + '</span><span class="sp-box-stars">★★★★★</span></span><span class="sp-box-score">' + score + '</span></div>' +
          '<div class="sp-box sp-box--quote"><span class="sp-box-qmark" aria-hidden="true">"</span><span class="sp-box-lines"><span class="sp-box-qtext">' + quote + '</span><span class="sp-box-qauthor">' + author + '</span></span></div>' +
        '</div>';
      }
      return '<div class="social-proof"><div class="social-proof-inner">' +
        '<div class="sp-item">' +
          '<span class="sp-google-icon" aria-label="Google"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg></span>' +
          '<span class="sp-score">' + score + '</span>' +
          '<div><div class="sp-stars">★</div><div class="sp-label">' + label + '</div></div>' +
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

    loginModal: function() {
      return '<div class="crew-modal" id="loginModal" hidden aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="loginModalTitle">' +
        '<div class="crew-modal-backdrop" data-login-close></div>' +
        '<div class="crew-modal-dialog" role="document">' +
          '<div class="crew-modal-head">' +
            '<div class="crew-modal-title" id="loginModalTitle">Přihlášení</div>' +
            '<button class="crew-modal-close" type="button" data-login-close aria-label="Zavřít"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
          '</div>' +
          '<div class="crew-modal-body">' +
            '<div class="login-tabs" role="tablist">' +
              '<button class="login-tab is-active" type="button" data-login-tab="login" role="tab">Přihlášení</button>' +
              '<button class="login-tab" type="button" data-login-tab="register" role="tab">Registrace</button>' +
            '</div>' +
            '<form data-login-panel="login">' +
              '<div class="auth-field"><label>E-mail</label><input class="auth-input" type="email" placeholder="vas@email.cz" /></div>' +
              '<div class="auth-field"><label>Heslo</label><input class="auth-input" type="password" placeholder="••••••••" /></div>' +
              '<button type="submit" class="auth-btn">Přihlásit se</button>' +
              '<div class="auth-divider">nebo pokračujte přes</div>' +
              '<div class="auth-social">' +
                '<button type="button" class="auth-social-btn" data-login-social><div class="auth-social-icon"></div>Pokračovat přes Google</button>' +
                '<button type="button" class="auth-social-btn" data-login-social><div class="auth-social-icon"></div>Pokračovat přes Apple</button>' +
                '<button type="button" class="auth-social-btn" data-login-social><div class="auth-social-icon"></div>Pokračovat přes Facebook</button>' +
              '</div>' +
              '<div class="auth-links" style="justify-content:center;"><div class="auth-link"><a href="zapomenute-heslo.html">Zapomenuté heslo</a></div></div>' +
            '</form>' +
            '<form data-login-panel="register" hidden onsubmit="event.preventDefault();window.location.href=\'overeni.html\';">' +
              '<div class="auth-register-cols">' +
                '<div class="auth-register-main">' +
              '<div class="auth-sub" style="margin-bottom:16px;">Vytvořte si účet zdarma a začněte plánovat svou plavbu.</div>' +
              '<div class="auth-field"><label>E-mail</label><input class="auth-input" type="email" placeholder="vas@email.cz" /></div>' +
              '<button type="submit" class="auth-btn">Vytvořit účet</button>' +
              '<div class="auth-divider">nebo pokračujte přes</div>' +
              '<div class="auth-social">' +
                '<button type="button" class="auth-social-btn" onclick="window.location.href=\'overeni.html\'"><div class="auth-social-icon"></div>Pokračovat přes Google</button>' +
                '<button type="button" class="auth-social-btn" onclick="window.location.href=\'overeni.html\'"><div class="auth-social-icon"></div>Pokračovat přes Apple</button>' +
                '<button type="button" class="auth-social-btn" onclick="window.location.href=\'overeni.html\'"><div class="auth-social-icon"></div>Pokračovat přes Facebook</button>' +
              '</div>' +
                '</div>' +
                '<aside class="auth-register-aside">' +
              '<div class="auth-benefits">' +
                '<div class="auth-benefits-title">Proč si vytvořit účet?</div>' +
                '<ul class="auth-benefits-list">' +
                  '<li class="auth-benefit-item"><span class="auth-benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span><div><div class="auth-benefit-title">Nemusíte znovu vyplňovat údaje</div><div class="auth-benefit-desc">Při dalších rezervacích už jen kliknete „Pokračovat" — kontakty, doklady i kapitánské průkazy máme uložené.</div></div></li>' +
                  '<li class="auth-benefit-item"><span class="auth-benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><div><div class="auth-benefit-title">Hlídáme platnost průkazů</div><div class="auth-benefit-desc">Upozorníme vás v dostatečném předstihu, než vyprší kapitánský průkaz nebo radiotelefon (SRC).</div></div></li>' +
                  '<li class="auth-benefit-item"><span class="auth-benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></span><div><div class="auth-benefit-title">Všechno na jednom místě</div><div class="auth-benefit-desc">Aktuální rezervace, historii plaveb, dokumenty, crew list, boarding pass a hodnocení lodí — vždy přehledně v účtu.</div></div></li>' +
                  '<li class="auth-benefit-item"><span class="auth-benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span><div><div class="auth-benefit-title">Věrnostní slevy a přednostní termíny</div><div class="auth-benefit-desc">Po druhé rezervaci získáváte 5 % slevu napořád a možnost rezervovat nové termíny dříve než ostatní.</div></div></li>' +
                '</ul>' +
              '</div>' +
                '</aside>' +
              '</div>' +
              '<div class="auth-links" style="justify-content:center;"><div class="auth-link">Už máte účet? <a href="#" data-login-tab="login">Přihlásit se</a></div></div>' +
            '</form>' +
          '</div>' +
        '</div>' +
      '</div>';
    },

    contactSpecialist: function(opts) {
      var title = (opts && opts.title) || 'Máte otázky k této lodi? Ozvěte se Monice.';
      var name = (opts && opts.name) || 'Monika Fomínová';
      var role = (opts && opts.role) || 'Specialista na chartery';
      var phone = (opts && opts.phone) || '+420 775 123 456';
      var email = (opts && opts.email) || 'monika@yachtnet.cz';
      return '<div class="contact-box">' +
        '<div class="contact-box-title">' + title + '</div>' +
        '<div class="contact-compact">' +
          '<div class="contact-avatar-lg"></div>' +
          '<div class="contact-details">' +
            '<div class="contact-name">' + name + '</div>' +
            '<div class="contact-role">' + role + '</div>' +
            '<div class="contact-hours"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Odpovídá denně 9–17</div>' +
            '<div class="contact-info-row">' +
              '<a href="#" class="contact-info-link"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.1-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' + phone + '</a>' +
              '<a href="#" class="contact-info-link"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' + email + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="contact-quick">' +
            '<a href="#" class="contact-quick-btn" title="WhatsApp" aria-label="WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.485-8.411"/></svg></a>' +
            '<a href="#" class="contact-quick-btn" title="Messenger" aria-label="Messenger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.001 11.639C.001 4.95 5.241 0 12.001 0s12 4.95 12 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 0 0-.64.05l-2.39 1.05a.96.96 0 0 1-1.35-.85l-.07-2.14a.96.96 0 0 0-.32-.68A11.39 11.389 0 0 1 .002 11.639zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.81 1.811 0 0 0-2.61.48z"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="contact-hotline">' +
          '<div class="hotline-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.1-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span class="hotline-pulse"></span></div>' +
          '<div class="hotline-body">' +
            '<div class="hotline-tagline">Hotline 24/7 v případě nouze</div>' +
            '<a class="hotline-number" href="tel:+420777888999">+420 777 888 999</a>' +
            '<div class="hotline-note">Linka je monitorována</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    },

    rateModal: function() {
      function stars() {
        return '<button type="button" class="rate-star" data-val="1" aria-label="1 hvězdička">★</button>' +
          '<button type="button" class="rate-star" data-val="2" aria-label="2 hvězdičky">★</button>' +
          '<button type="button" class="rate-star" data-val="3" aria-label="3 hvězdičky">★</button>' +
          '<button type="button" class="rate-star" data-val="4" aria-label="4 hvězdičky">★</button>' +
          '<button type="button" class="rate-star" data-val="5" aria-label="5 hvězdiček">★</button>';
      }
      function crit(name, q, key) {
        return '<div class="rate-criterion"><div class="rate-criterion-text"><div class="rate-criterion-name">' + name + '</div><div class="rate-criterion-q">' + q + '</div></div><div class="rate-stars-input" data-rate="' + key + '">' + stars() + '</div></div>';
      }
      function actions(back, primary, primaryAttr) {
        return '<div class="rate-modal-actions">' +
          (back ? '<button type="button" class="btn-secondary" data-rm-back>← Zpět</button>' : '<button type="button" class="btn-secondary" data-rm-close>Zrušit</button>') +
          '<button type="button" class="btn-primary-lg" ' + primaryAttr + '>' + primary + '</button>' +
        '</div>';
      }
      return '<div class="rate-modal" id="rateModal" hidden role="dialog" aria-label="Hodnocení plavby" aria-modal="true">' +
        '<div class="rate-modal-backdrop" data-rm-close></div>' +
        '<div class="rate-modal-card">' +
          '<button class="rate-modal-close" type="button" data-rm-close aria-label="Zavřít"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
          '<div class="rate-modal-head"><div class="rate-modal-heading">Hodnocení plavby</div><div class="rate-modal-stepnum" data-rm-stepnum>Krok 1 z 5</div></div>' +
          '<div class="rate-modal-progress" aria-hidden="true"><div class="rate-modal-progress-fill" data-rm-progress></div></div>' +
          '<div class="rate-modal-step" data-rm-step="1">' +
            '<div class="rate-modal-title">Celkový dojem z plavby</div>' +
            '<div class="rate-modal-sub" data-rm-boat>Hanse 458 — „Polaris"</div>' +
            '<p class="rate-modal-question">Jak jste byli celkově spokojeni s vaší plavbou?</p>' +
            '<div class="rate-stars-input rate-stars-input--lg" data-rate="overall">' + stars() + '</div>' +
            '<p class="rate-modal-hint">Udělte hodnocení pomocí hvězdiček: 1 hvězdička znamená velmi špatné, 5 hvězdiček naopak skvělé. Kliknutím na levou polovinu hvězdy udělíte půlhvězdičku.</p>' +
            actions(false, 'Pokračovat →', 'data-rm-next') +
          '</div>' +
          '<div class="rate-modal-step" data-rm-step="2" hidden>' +
            '<div class="rate-modal-title">Hodnocení lodě</div>' +
            '<div class="rate-modal-sub">Ohodnoťte stav a parametry samotné lodě</div>' +
            '<div class="rate-modal-criteria">' +
              crit('Stav lodě a zařízení', 'Byla loď a všechna zařízení v dobrém stavu a plně funkční? (plachty, motor, přístroje)', 'condition') +
              crit('Čistota', 'Byla loď při převzetí perfektně čistá a uklizená?', 'cleanliness') +
            '</div>' +
            actions(true, 'Pokračovat →', 'data-rm-next') +
          '</div>' +
          '<div class="rate-modal-step" data-rm-step="3" hidden>' +
            '<div class="rate-modal-title">Charterová společnost a marina</div>' +
            '<div class="rate-modal-criteria">' +
              crit('Převzetí a vrácení lodě', 'Proběhlo předání a vrácení lodi hladce a bez zbytečných průtahů? Bylo vám vše řádně vysvětleno při převzetí?', 'handover') +
              crit('Komunikace charterové společnosti', 'Jak hodnotíte profesionalitu a vstřícnost charterové společnosti? Pokud nastaly problémy, pomohla promptně a ochotně s jejich řešením?', 'charter') +
              crit('Marina a její služby', 'Zhodnoťte samotnou marinu: dostupnost sprch, čistota, parkování nebo check-in.', 'marina') +
            '</div>' +
            actions(true, 'Pokračovat →', 'data-rm-next') +
          '</div>' +
          '<div class="rate-modal-step" data-rm-step="4" hidden>' +
            '<div class="rate-modal-title">Slovní hodnocení</div>' +
            '<p class="rate-modal-question">Napište nám upřímnou recenzi a pomozte dalším kapitánům při výběru té správné lodi!</p>' +
            '<label for="rm-positive" style="display:flex;align-items:center;font-size:13px;font-weight:700;margin-bottom:6px;"><span class="rate-pc-ico rate-pc-ico--pos" aria-hidden="true">+</span>Co se vám líbilo?</label>' +
            '<textarea class="rate-modal-comment" id="rm-positive" data-rm-comment-positive rows="3" placeholder="Nejlepší momenty, co byste doporučili…"></textarea>' +
            '<label for="rm-negative" style="display:flex;align-items:center;font-size:13px;font-weight:700;margin:16px 0 6px;"><span class="rate-pc-ico rate-pc-ico--neg" aria-hidden="true">−</span>Co by se dalo zlepšit?</label>' +
            '<textarea class="rate-modal-comment" id="rm-negative" data-rm-comment-negative rows="3" placeholder="Co nebylo v pořádku, co by šlo udělat lépe…"></textarea>' +
            '<div class="rate-upload">' +
              '<label class="rate-upload-zone" data-rm-dropzone>' +
                '<input type="file" accept="image/*" multiple class="rate-upload-input" data-rm-photo-input />' +
                '<span class="rate-upload-ico"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></span>' +
                '<span class="rate-upload-text"><strong>Přetáhněte fotky sem</strong> nebo klikněte pro výběr</span>' +
                '<span class="rate-upload-hint">Na telefonu otevře fotoaparát nebo galerii</span>' +
              '</label>' +
              '<div class="rate-upload-list" data-rm-photo-list></div>' +
            '</div>' +
            actions(true, 'Pokračovat →', 'data-rm-next') +
          '</div>' +
          '<div class="rate-modal-step" data-rm-step="5" hidden>' +
            '<div class="rate-modal-title">Shrnutí</div>' +
            '<div class="rate-modal-criteria">' +
              crit('Poměr cena / výkon', 'Odpovídal váš zážitek a stav lodi zaplacené částce?', 'value') +
            '</div>' +
            '<div class="rate-recommend">' +
              '<div class="rate-recommend-q">Doporučili byste tuto loď přátelům?</div>' +
              '<div class="rate-recommend-opts">' +
                '<button type="button" class="rate-rec-btn" data-rm-recommend="yes"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>Ano</button>' +
                '<button type="button" class="rate-rec-btn" data-rm-recommend="no"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>Ne</button>' +
              '</div>' +
            '</div>' +
            actions(true, 'Odeslat hodnocení', 'data-rm-submit') +
          '</div>' +
          '<div class="rate-modal-step" data-rm-step="6" hidden>' +
            '<div class="rate-modal-title">Děkujeme za hodnocení</div>' +
            '<p class="rate-modal-question">Vaše recenze pomůže ostatním jachtařům vybrat správnou loď.</p>' +
            '<div data-rm-summary></div>' +
            '<div class="rate-modal-actions rate-modal-actions--center"><button type="button" class="btn-primary-lg" data-rm-close>Zavřít</button></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    },

    // ── SDÍLENÉ BLOKY OBJEDNÁVKOVÉHO FUNNELU (jachta i kurz) ──
    // Jediný zdroj pravdy pro prvky společné oběma verzím funnelu. Změna zde se
    // propíše do rezervace lodi i objednávky kurzu zároveň. NAV a stepper zůstávají
    // inline v každé stránce (per-page stav/varianta — viz konvence v CLAUDE.md).

    // Krok 1 — Kontaktní údaje (formulář)
    bookingContact: function() {
      return '<div class="bk-card">' +
        '<div class="bk-card-head">' +
          '<div class="bk-card-title">Kontaktní údaje</div>' +
          '<a class="btn-secondary btn-secondary--sm" href="#" data-login-open><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Přihlásit se</a>' +
        '</div>' +
        '<div class="bk-card-body">' +
          '<p style="font-size:13px;color:var(--muted);margin:0 0 16px;line-height:1.5;">Nemáte účet? <a href="#" data-login-open="register" style="color:var(--int);font-weight:600;">Registrujte se</a> a získejte řadu výhod — věrnostní slevy, rychlejší odbavení a přehled všech objednávek v jednom účtu.</p>' +
          '<div class="bk-form-grid">' +
            '<div class="bk-field"><label class="bk-label" for="f-name">Jméno <sup>*</sup></label><input class="bk-input" id="f-name" type="text" placeholder="Např. Jan" /></div>' +
            '<div class="bk-field"><label class="bk-label" for="f-surname">Příjmení <sup>*</sup></label><input class="bk-input" id="f-surname" type="text" placeholder="Např. Novák" /></div>' +
            '<div class="bk-field bk-field--email"><label class="bk-label" for="f-email">E-mail <sup>*</sup></label><input class="bk-input" id="f-email" type="email" placeholder="jan.novak@email.cz" /></div>' +
            '<div class="bk-field bk-field--phone"><label class="bk-label" for="f-phone">Telefon <sup>*</sup></label><div class="phone-row"><select class="phone-prefix"><option>🇨🇿 +420</option><option>🇸🇰 +421</option><option>🇩🇪 +49</option><option>🇦🇹 +43</option><option>🇵🇱 +48</option><option>🇬🇧 +44</option><option>🇺🇸 +1</option></select><input class="bk-input" id="f-phone" type="tel" placeholder="775 123 456" style="flex:1;" /></div></div>' +
          '</div>' +
          '<p style="font-size:12px;color:var(--muted);margin-top:14px;line-height:1.6;">Potvrzení a veškerá komunikace bude zaslána na zadaný e-mail. Telefonní číslo slouží pro urgentní kontakt.</p>' +
        '</div>' +
      '</div>';
    },

    // Krok 1 — Poznámka
    bookingNote: function() {
      return '<div class="bk-card">' +
        '<div class="bk-card-head"><div class="bk-card-title">Poznámka</div></div>' +
        '<div class="bk-card-body"><div class="bk-field"><textarea class="bk-input bk-textarea" id="f-note" rows="2" placeholder="Speciální požadavky, dotazy…" aria-label="Poznámka"></textarea></div></div>' +
      '</div>';
    },

    // Krok 2 — Rekapitulace kontaktních údajů (read-only)
    bookingRecap: function(opts) {
      var editHref = (opts && opts.editHref) || 'rezervace-krok-1-v2.html';
      return '<div class="bk-card">' +
        '<div class="bk-card-head">' +
          '<div class="bk-card-title">Vaše kontaktní údaje</div>' +
          '<button class="bk-card-edit" onclick="window.location.href=\'' + editHref + '\'">Upravit</button>' +
        '</div>' +
        '<div class="bk-card-body"><div class="recap-grid">' +
          '<div class="recap-field"><div class="recap-field-label">Jméno</div><div class="recap-field-val">Jaroslav</div></div>' +
          '<div class="recap-field"><div class="recap-field-label">Příjmení</div><div class="recap-field-val">Zimmermann</div></div>' +
          '<div class="recap-field"><div class="recap-field-label">E-mail</div><div class="recap-field-val">jara.da.zimmermann@ckpolnimarsaleklegal.cz</div></div>' +
          '<div class="recap-field"><div class="recap-field-label">Telefon</div><div class="recap-field-val">+420 775 123 456</div></div>' +
        '</div></div>' +
      '</div>';
    },

    // Krok 2 — Způsob platby (data-amount = částka k úhradě v bankovním převodu)
    bookingPayment: function(opts) {
      var amount = (opts && opts.amount) || '9 720 Kč';
      var qr = '<svg class="payment-qr-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="120" height="120" role="img" aria-label="QR kód pro platbu převodem" shape-rendering="crispEdges"><rect width="25" height="25" fill="#fff"/><path fill="#1e1e1c" d="M0 0h7v7H0zM18 0h7v7h-7zM0 18h7v7H0z"/><path fill="#fff" d="M1 1h5v5H1zM19 1h5v5h-5zM1 19h5v5H1z"/><path fill="#1e1e1c" d="M2 2h3v3H2zM20 2h3v3h-3zM2 20h3v3H2z"/><path fill="#1e1e1c" d="M8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM6 8h1v1h-1zM6 10h1v1h-1zM6 12h1v1h-1zM6 14h1v1h-1zM6 16h1v1h-1zM8 0h1v1h-1zM10 0h1v1h-1zM13 0h1v1h-1zM15 0h1v1h-1zM9 1h1v1h-1zM12 1h1v1h-1zM16 1h1v1h-1zM8 2h1v1h-1zM11 2h1v1h-1zM14 2h1v1h-1zM10 3h1v1h-1zM13 3h1v1h-1zM15 3h1v1h-1zM9 4h1v1h-1zM12 4h1v1h-1zM16 4h1v1h-1zM8 5h1v1h-1zM11 5h1v1h-1zM14 5h1v1h-1zM8 7h1v1h-1zM11 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM3 8h1v1h-1zM9 8h1v1h-1zM12 8h1v1h-1zM15 8h1v1h-1zM19 8h1v1h-1zM22 8h1v1h-1zM0 9h1v1h-1zM4 9h1v1h-1zM7 9h1v1h-1zM10 9h1v1h-1zM13 9h1v1h-1zM16 9h1v1h-1zM18 9h1v1h-1zM21 9h1v1h-1zM24 9h1v1h-1zM2 10h1v1h-1zM5 10h1v1h-1zM8 10h1v1h-1zM11 10h1v1h-1zM14 10h1v1h-1zM20 10h1v1h-1zM23 10h1v1h-1zM1 11h1v1h-1zM3 11h1v1h-1zM9 11h1v1h-1zM12 11h1v1h-1zM17 11h1v1h-1zM19 11h1v1h-1zM22 11h1v1h-1zM24 11h1v1h-1zM0 12h1v1h-1zM4 12h1v1h-1zM7 12h1v1h-1zM10 12h1v1h-1zM13 12h1v1h-1zM15 12h1v1h-1zM18 12h1v1h-1zM21 12h1v1h-1zM2 13h1v1h-1zM5 13h1v1h-1zM8 13h1v1h-1zM11 13h1v1h-1zM16 13h1v1h-1zM20 13h1v1h-1zM23 13h1v1h-1zM1 14h1v1h-1zM3 14h1v1h-1zM9 14h1v1h-1zM12 14h1v1h-1zM14 14h1v1h-1zM17 14h1v1h-1zM19 14h1v1h-1zM22 14h1v1h-1zM24 14h1v1h-1zM0 15h1v1h-1zM4 15h1v1h-1zM7 15h1v1h-1zM10 15h1v1h-1zM13 15h1v1h-1zM18 15h1v1h-1zM21 15h1v1h-1zM2 16h1v1h-1zM5 16h1v1h-1zM8 16h1v1h-1zM11 16h1v1h-1zM15 16h1v1h-1zM20 16h1v1h-1zM23 16h1v1h-1zM9 17h1v1h-1zM12 17h1v1h-1zM14 17h1v1h-1zM17 17h1v1h-1zM19 17h1v1h-1zM22 17h1v1h-1zM24 17h1v1h-1zM8 18h1v1h-1zM11 18h1v1h-1zM14 18h1v1h-1zM17 18h1v1h-1zM20 18h1v1h-1zM23 18h1v1h-1zM9 19h1v1h-1zM12 19h1v1h-1zM15 19h1v1h-1zM19 19h1v1h-1zM22 19h1v1h-1zM24 19h1v1h-1zM8 20h1v1h-1zM10 20h1v1h-1zM13 20h1v1h-1zM16 20h1v1h-1zM18 20h1v1h-1zM21 20h1v1h-1zM9 21h1v1h-1zM12 21h1v1h-1zM14 21h1v1h-1zM17 21h1v1h-1zM20 21h1v1h-1zM23 21h1v1h-1zM8 22h1v1h-1zM11 22h1v1h-1zM15 22h1v1h-1zM19 22h1v1h-1zM22 22h1v1h-1zM24 22h1v1h-1zM10 23h1v1h-1zM13 23h1v1h-1zM16 23h1v1h-1zM18 23h1v1h-1zM21 23h1v1h-1zM9 24h1v1h-1zM12 24h1v1h-1zM14 24h1v1h-1zM17 24h1v1h-1zM20 24h1v1h-1zM23 24h1v1h-1z"/></svg>';
      return '<div class="bk-card">' +
        '<div class="bk-card-head"><div class="bk-card-title">Způsob platby</div></div>' +
        '<div class="bk-card-body">' +
          '<label class="payment-option payment-option--bank">' +
            '<div class="payment-option-top">' +
              '<input type="radio" name="payment" checked />' +
              '<span class="payment-option-title">Bankovní převod</span>' +
            '</div>' +
            '<div class="payment-option-desc">Platba převodem — objednávku potvrdíme po připsání na náš účet, obvykle do 2–3 pracovních dnů.</div>' +
            '<div class="payment-option-bank-body">' +
              '<div class="bank-details">' +
                '<div class="bank-detail-row"><span class="bank-detail-l">Číslo účtu</span><span class="bank-detail-v">2701893461 / 2010</span></div>' +
                '<div class="bank-detail-row"><span class="bank-detail-l">Variabilní symbol</span><span class="bank-detail-v">78421305</span></div>' +
                '<div class="bank-detail-row"><span class="bank-detail-l">Částka k úhradě</span><span class="bank-detail-v">' + amount + '</span></div>' +
              '</div>' +
              '<div class="payment-qr">' + qr +
                '<span class="payment-qr-cap"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/></svg> Naskenujte v bankovní aplikaci</span>' +
              '</div>' +
            '</div>' +
          '</label>' +
          '<label class="payment-option">' +
            '<div class="payment-option-top">' +
              '<input type="radio" name="payment" />' +
              '<span class="payment-option-title">Platební karta</span>' +
            '</div>' +
            '<div class="payment-logos"><span class="payment-logo visa">VISA</span><span class="payment-logo mc">MC</span><span class="payment-logo">Maestro</span><span class="payment-logo secure"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>SSL</span><span class="payment-logo" style="font-size:9px;letter-spacing:.01em;">PayU</span></div>' +
            '<div class="payment-option-desc">Budete přesměrováni na platební bránu PayU — Visa, Mastercard, Maestro</div>' +
          '</label>' +
          '<label class="payment-option">' +
            '<div class="payment-option-top">' +
              '<input type="radio" name="payment" />' +
              '<span class="payment-option-title">Google Pay / Apple Pay</span>' +
            '</div>' +
            '<div class="payment-logos"><span class="payment-logo" style="font-weight:700;">G Pay</span><span class="payment-logo" style="font-weight:700;">Pay</span></div>' +
            '<div class="payment-option-desc">Rychlá platba přes váš mobilní účet</div>' +
          '</label>' +
        '</div>' +
      '</div>';
    },

    // Krok 1 — Blok výhod / USP (data-variant: yacht | course)
    bookingGuarantees: function(opts) {
      var variant = (opts && opts.variant) || 'yacht';
      function item(icon, title, desc) {
        return '<div class="cta-guarantee-item"><span class="cta-guarantee-icon">' + icon + '</span><div><div class="cta-guarantee-title">' + title + '</div><div class="cta-guarantee-desc">' + desc + '</div></div></div>';
      }
      var ICO = {
        check: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
        phone: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        trophy: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
        shield: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
        globe: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
        users: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
      };
      var inner = variant === 'course'
        ? item(ICO.shield, 'Akreditovaný výcvik', 'Certifikovaní instruktoři a oficiální zkoušky') +
          item(ICO.globe, 'Mezinárodně platný průkaz', 'VMP, MDČR i ICC uznávané v zahraničí') +
          item(ICO.users, 'Malé skupiny', 'Maximálně 6 účastníků, individuální přístup')
        : item(ICO.check, 'Žádné skryté poplatky', 'Cena je finální — bez překvapení při placení') +
          item(ICO.phone, 'Pomáháme řešit problémy', 'Podpora 24/7 po celou dobu plavby') +
          item(ICO.trophy, '30 let zkušeností', 'Prověřené charterovky, tisíce spokojených klientů');
      return '<div class="cta-guarantees">' + inner + '</div>';
    },

    // Krok 2 — Uplatnění dárkového voucheru (checkbox → odhalí input + tlačítko)
    bookingVoucher: function() {
      return '<div class="bk-card">' +
        '<div class="bk-card-body">' +
          '<label class="voucher-toggle"><input type="checkbox" data-voucher-check /><span>Mám dárkový voucher a chci ho uplatnit</span></label>' +
          '<div class="voucher-form" data-voucher-form hidden>' +
            '<input class="bk-input voucher-input" type="text" placeholder="Zadejte kód voucheru" aria-label="Kód voucheru" />' +
            '<button class="acc-btn voucher-apply" type="button">Uplatnit</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    },

    // ── SDÍLENÉ BLOKY POTVRZOVACÍ STRÁNKY (rezervace lodi i objednávka kurzu) ──

    // Výzva k registraci (data-success-href = kam po založení účtu)
    confirmRegister: function(opts) {
      var href = (opts && opts.successHref) || 'seznam-rezervaci.html';
      return '<div class="confirm-register">' +
        '<div class="confirm-register-title">Založte si účet a usnadněte si život</div>' +
        '<div class="confirm-register-sub">Mějte rezervace, doklady i kapitánské průkazy přehledně na jednom místě — příště vyplníte už jen heslo.</div>' +
        '<form class="confirm-register-form" onsubmit="event.preventDefault();window.location.href=\'' + href + '\';">' +
          '<div class="auth-field"><label>Heslo</label><input class="auth-input" type="password" placeholder="Zvolte si heslo" /></div>' +
          '<button type="submit" class="auth-btn">Založit účet</button>' +
          '<div class="auth-divider">nebo pokračujte přes</div>' +
          '<div class="auth-social">' +
            '<button type="button" class="auth-social-btn" onclick="window.location.href=\'' + href + '\'"><div class="auth-social-icon"></div>Pokračovat přes Google</button>' +
            '<button type="button" class="auth-social-btn" onclick="window.location.href=\'' + href + '\'"><div class="auth-social-icon"></div>Pokračovat přes Facebook</button>' +
            '<button type="button" class="auth-social-btn" onclick="window.location.href=\'' + href + '\'"><div class="auth-social-icon"></div>Pokračovat přes Apple</button>' +
          '</div>' +
        '</form>' +
      '</div>';
    },

    // Karta „Sledujte nás" (sociální sítě) — identická pro obě verze
    confirmSocial: function() {
      return '<div class="confirm-card">' +
        '<div class="confirm-card-head"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>Sledujte nás</div>' +
        '<div class="confirm-card-body">' +
          '<p style="font-size:13px;color:var(--muted);margin-bottom:16px;line-height:1.6;">Sdílejte svůj zážitek a sledujte nás na sociálních sítích — tipy, fotky od zákazníků a novinky každý týden.</p>' +
          '<div class="social-grid">' +
            '<button class="social-follow-btn"><div class="social-icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div>Facebook</button>' +
            '<button class="social-follow-btn"><div class="social-icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></div>Instagram</button>' +
            '<button class="social-follow-btn"><div class="social-icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></div>YouTube</button>' +
            '<button class="social-follow-btn"><div class="social-icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>LinkedIn</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    },

    // Karta „tipy z Magazínu" — identická pro obě verze
    confirmMagazine: function() {
      function teaser(title, meta) {
        return '<div class="mag-teaser-item" onclick="window.location.href=\'detail-clanku.html\'"><div class="mag-teaser-thumb"></div><div><div class="mag-teaser-title">' + title + '</div><div style="font-size:11px;color:var(--muted);margin-top:3px;">' + meta + '</div></div></div>';
      }
      return '<div class="confirm-card" style="grid-column:1/-1;">' +
        '<div class="confirm-card-head"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Tipy z Magazínu</div>' +
        '<div class="confirm-card-body">' +
          '<div class="mag-teaser-list">' +
            teaser('7denní itinerář po Chorvatsku: ze Splitu do Dubrovníku přes ostrovy', '10 min čtení · Tipy na trasy') +
            teaser('10 věcí, které musí každý charterista zkontrolovat před vyplutím', '8 min čtení · Bezpečnost') +
            teaser('Jak číst námořní předpověď počasí pro plavbu na moři', '6 min čtení · Kapitánské zkušenosti') +
          '</div>' +
          '<div style="text-align:center;margin-top:20px;"><button onclick="window.location.href=\'magazin.html\'" style="padding:10px 28px;background:var(--int);color:#fff;border:none;border-radius:var(--radius);font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;">Otevřít Yachtnet Magazín →</button></div>' +
        '</div>' +
      '</div>';
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

  // Stav přihlášení v hlavičce řeší initAuth() na konci skriptu (po vykreslení
  // mobilního menu v initHamburgers), aby zachytil i dynamicky vložená tlačítka.

  // ── SITEMAP REGISTRY ───────────────────────────────────
  // Jediný zdroj pravdy pro všechny stránky wireframe.
  // Když přidáš / odebereš stránku, uprav tento strom a mapa-stranek.html se sama aktualizuje.
  const SITEMAP_TREE = [
    { href: 'index.html', title: 'Úvodní stránka', id: 'page-home', icon: '🏠', root: true, children: [
      { href: 'pronajem-lodi.html', title: 'Výsledky hledání', id: 'page-results', group: true, children: [
        { href: 'detail-lodi.html', title: 'Detail lodi', id: 'page-detail', children: [
          { href: 'rezervace-krok-1-v2.html', title: 'Rezervace — krok 1', id: 'page-booking-1', children: [
            { href: 'rezervace-krok-2-v2.html', title: 'Rezervace — krok 2', id: 'page-booking-2', children: [
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
        { href: 'detail-zkousky.html', title: 'Detail zkoušky', id: 'page-exam' },
        { href: 'detail-prukazu.html', title: 'Detail průkazu', id: 'page-license', children: [
          { href: 'objednavka-kurzu-krok-1.html', title: 'Objednávka kurzu — krok 1', id: 'page-course-order-1', children: [
            { href: 'objednavka-kurzu-krok-2.html', title: 'Objednávka kurzu — krok 2', id: 'page-course-order-2', children: [
              { href: 'objednavka-kurzu-potvrzeni.html', title: 'Objednávka kurzu — potvrzení', id: 'page-course-order-confirm' }
            ]}
          ]}
        ]}
      ]},
      { href: 'magazin.html', title: 'Magazín', id: 'page-magazine', group: true, children: [
        { href: 'detail-clanku.html', title: 'Článek', id: 'page-article', children: [
          { href: 'medailonek-autora.html', title: 'Medailonek autora', id: 'page-author' }
        ]}
      ]},
      { href: 'prihlaseni.html', title: 'Přihlášení', id: 'page-login', group: true, children: [
        { href: 'registrace.html', title: 'Registrace', id: 'page-register' },
        { href: 'zapomenute-heslo.html', title: 'Zapomenuté heslo', id: 'page-forgot-password' },
        { href: 'overeni.html', title: 'Ověření e-mailu', id: 'page-verify' }
      ]},
      { href: 'ucet.html', title: 'Můj účet', id: 'page-account', group: true, children: [
        { href: 'seznam-rezervaci.html', title: 'Moje rezervace', id: 'page-reservations', children: [
          { href: 'detail-rezervace.html', title: 'Detail rezervace', id: 'page-reservation-detail', children: [
            { href: 'check-in.html', title: 'Online check-in', id: 'page-checkin' },
            { href: 'objednavka-sluzeb.html', title: 'Objednávka doplňkových služeb', id: 'page-services-order' }
          ]}
        ]},
        { href: 'moje-kurzy.html', title: 'Moje kurzy', id: 'page-my-courses', children: [
          { href: 'muj-kurz.html', title: 'Detail mého kurzu', id: 'page-my-course-detail', children: [
            { href: 'upravit-udaje-kurzu.html', title: 'Upravit údaje ke kurzu', id: 'page-edit-course-data' }
          ]}
        ]},
        { href: 'prukazy.html', title: 'Moje průkazy', id: 'page-licenses', children: [
          { href: 'muj-prukaz.html', title: 'Detail mého průkazu', id: 'page-license-mine' },
          { href: 'pridat-prukaz.html', title: 'Přidat průkaz', id: 'page-license-add' }
        ]},
        { href: 'moje-pojisteni.html', title: 'Moje pojištění', id: 'page-insurance' },
        { href: 'crew.html', title: 'Crew list', id: 'page-crew', children: [
          { href: 'clen-posadky.html', title: 'Detail člena posádky', id: 'page-crew-member' },
          { href: 'pridat-clena.html', title: 'Přidat člena posádky', id: 'page-crew-add' }
        ]},
        { href: 'oblibene.html', title: 'Oblíbené lodě', id: 'page-favorites' },
        { href: 'pridat-adresu.html', title: 'Přidat fakturační adresu', id: 'page-address-add' }
      ]},
      { href: 'o-nas.html', title: 'O nás', id: 'page-about' },
      { href: 'kontakt.html', title: 'Kontakt', id: 'page-contact' },
      { title: 'Archiv', id: 'archiv', icon: '📁', folder: true, children: [
        { href: 'rezervace-krok-1-v1.html', title: 'Rezervace — krok 1 (v1, původní)', id: 'page-booking-1-v1', children: [
          { href: 'rezervace-krok-2-v1.html', title: 'Rezervace — krok 2 (v1, původní)', id: 'page-booking-2-v1' }
        ]}
      ]}
    ]}
  ];

  function countSitemapNodes(nodes) {
    var count = 0;
    nodes.forEach(function(n) {
      if (n.href) count += 1; // složky (uzly bez href) se nepočítají jako stránky
      if (n.children) count += countSitemapNodes(n.children);
    });
    return count;
  }

  function renderSitemapNode(node) {
    var classes = ['sm-node'];
    if (node.root) classes.push('sm-root');
    if (node.group) classes.push('sm-group');
    if (node.folder) classes.push('sm-folder');
    var icon = node.icon ? (node.icon + ' ') : '';
    var id = node.id ? '<span class="sm-node-id">' + node.id + '</span>' : '';
    // Uzel bez href (např. složka „Archiv") se vykreslí jako neklikací popisek.
    var anchor = node.href
      ? '<a class="' + classes.join(' ') + '" href="' + node.href + '">' + icon + node.title + ' ' + id + '</a>'
      : '<span class="' + classes.join(' ') + '">' + icon + node.title + ' ' + id + '</span>';
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

  // ── PLOVOUCÍ WIREFRAME SITEMAP (dostupná na každé stránce) ──
  // Hamburger button vpravo nahoře otevře boční panel se stromem všech stránek.
  // Reuse SITEMAP_TREE + renderSitemapNode. Markup se injektuje do <body>.
  function initSitemapWidget() {
    if (!document.body || document.querySelector('.yn-sm-fab')) return;
    var total = countSitemapNodes(SITEMAP_TREE);
    var tree = '<ul class="sm-tree">' + SITEMAP_TREE.map(function(n) { return '<li>' + renderSitemapNode(n) + '</li>'; }).join('') + '</ul>';
    var html =
      '<button class="yn-sm-fab" type="button" aria-label="Mapa stránek (wireframe)" aria-expanded="false">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
      '</button>' +
      '<div class="yn-sm-overlay" data-yn-sm-close hidden></div>' +
      '<aside class="yn-sm-panel" aria-hidden="true" aria-label="Mapa stránek (wireframe)">' +
        '<div class="yn-sm-head">' +
          '<div class="yn-sm-head-text"><span class="yn-sm-eyebrow">Wireframe</span><span class="yn-sm-title">Mapa stránek</span></div>' +
          '<span class="yn-sm-count">' + total + ' stránek</span>' +
          '<button class="yn-sm-close" type="button" data-yn-sm-close aria-label="Zavřít"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
        '</div>' +
        '<div class="yn-sm-tree">' + tree + '</div>' +
        '<a class="yn-sm-foot" href="mapa-stranek.html">Otevřít celou mapu stránek →</a>' +
      '</aside>';
    document.body.insertAdjacentHTML('beforeend', html);

    var fab = document.querySelector('.yn-sm-fab');
    var panel = document.querySelector('.yn-sm-panel');
    var overlay = document.querySelector('.yn-sm-overlay');

    // Zvýraznění aktuální stránky
    var current = (location.pathname.split('/').pop() || 'index.html');
    panel.querySelectorAll('.sm-node').forEach(function(a) {
      var href = (a.getAttribute('href') || '').split('/').pop();
      if (href && href === current) a.classList.add('sm-node--current');
    });

    function openPanel() {
      overlay.hidden = false;
      requestAnimationFrame(function() { overlay.classList.add('show'); panel.classList.add('open'); });
      panel.setAttribute('aria-hidden', 'false');
      fab.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      var cur = panel.querySelector('.sm-node--current');
      if (cur) cur.scrollIntoView({ block: 'center' });
    }
    function closePanel() {
      panel.classList.remove('open');
      overlay.classList.remove('show');
      panel.setAttribute('aria-hidden', 'true');
      fab.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setTimeout(function() { if (!panel.classList.contains('open')) overlay.hidden = true; }, 260);
    }
    fab.addEventListener('click', openPanel);
    panel.querySelectorAll('[data-yn-sm-close]').forEach(function(el) { el.addEventListener('click', closePanel); });
    overlay.addEventListener('click', closePanel);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && panel.classList.contains('open')) closePanel(); });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSitemapWidget);
  } else {
    initSitemapWidget();
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

      function isCalMobile() { return window.matchMedia('(max-width: 680px)').matches; }

      function render() {
        var mobile = isCalMobile();
        var nextYear = viewYear, nextMonth = viewMonth + 1;
        if (nextMonth > 11) { nextMonth = 0; nextYear++; }
        var html = '';
        // Decentní obchodní poznámka nahoře — sobotní turnusy jsou pro klienta výhodnější.
        html += '<div class="sf-cal-note">V termínu sobota–sobota je největší výběr za nejlepší ceny.</div>';
        html += '<div class="sf-cal-head">';
        html += '<button type="button" class="sf-cal-nav" data-dir="-1" aria-label="Předchozí měsíc' + (mobile ? '' : 'e') + '"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>';
        html += '<button type="button" class="sf-cal-nav sf-cal-nav--next" data-dir="1" aria-label="Další měsíc' + (mobile ? '' : 'e') + '"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>';
        html += '</div>';
        html += '<div class="sf-cal-months">';
        html += renderMonth(viewYear, viewMonth);
        if (!mobile) html += renderMonth(nextYear, nextMonth);
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
          var dir = parseInt(navBtn.dataset.dir, 10) * (isCalMobile() ? 1 : 2);
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
          ? '<div class="promo-slider-controls">' +
              '<button type="button" class="promo-slider-arrow promo-slider-arrow--prev" data-promo-dir="-1" aria-label="Předchozí banner">' + arrowSvg(-1) + '</button>' +
              '<div class="promo-slider-dots">' + dotsHtml + '</div>' +
              '<button type="button" class="promo-slider-arrow promo-slider-arrow--next" data-promo-dir="1" aria-label="Další banner">' + arrowSvg(1) + '</button>' +
            '</div>'
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

  // Město u mariny — z některých názvů marin (Lav, Spinut…) není poznat, kde přesně kotví.
  const MARINA_CITY = {
    'ACI Marina Split': 'Split',
    'Marina Lav': 'Split',
    'Marina Spinut': 'Split',
    'Marina Kaštela': 'Kaštela',
    'Marina Trogir': 'Trogir',
    'Marina Šibenik': 'Šibenik',
    'ACI Marina Dubrovník': 'Dubrovník',
    'Marina Biograd': 'Biograd na Moru',
    'Marina Zadar': 'Zadar'
  };

  function boatCard(b) {
    // Vybavení: vykreslíme všechny štítky + skrytý „+N" chip. Po renderu je fitAmenityRow()
    // ořízne na jednu řádku a doplní správný počet skrytých do „+N" (nikdy nezalomí na 2 řádky).
    const tags = b.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join("") +
      `<span class="amenity-tag amenity-tag--more" hidden>+0</span>`;
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
    // Hodnocení se zobrazuje na stupnici do 10 (data jsou 0–5 → ×2).
    const ratingVal = ((b.rating != null ? b.rating : 4.7) * 2).toFixed(1).replace('.', ',');
    const ratingCount = b.ratingCount != null ? b.ratingCount : 124;
    const ratingHtml = '<div class="card-rating" title="Hodnocení modelu ' + b.name + '"><span class="card-rating-stars">★</span><span class="card-rating-val">' + ratingVal + ' / 10</span><span class="card-rating-count">(' + ratingCount + ' hodnocení)</span></div>';
    const statusMap = {
      reserved:    { cls: 'card-status--reserved',    label: 'Rezervovaná' },
      prereserved: { cls: 'card-status--prereserved', label: 'Předrezervovaná' },
      free:        { cls: 'card-status--free',        label: 'Volná' }
    };
    const statusKey = b.status || (b.reserved ? 'reserved' : 'free');
    const status = statusMap[statusKey] || statusMap.free;
    // Desktop: plná verze (tečka + label) vpravo nahoře v .card-side-top — původní umístění.
    const statusFullHtml = '<span class="card-status ' + status.cls + '"><span class="card-status-dot"></span>' + status.label + '</span>';
    // Mobil (přes CSS): jen tečka za názvem modelu, bez labelu — vysvětlení v title. Na desktopu skrytá.
    const statusDotHtml = '<span class="card-status card-status--dot ' + status.cls + '" title="' + status.label + '"><span class="card-status-dot"></span></span>';
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
            <div class="card-name">${b.name} ${statusDotHtml}</div>
            <div class="card-boat-name">"${b.boatName || "Lady One"}"</div>
            ${ratingHtml}
            <div class="card-marina">🇭🇷 <a href="oblast.html" style="color:var(--int);text-decoration:none;">${b.marina}${MARINA_CITY[b.marina] ? ' (' + MARINA_CITY[b.marina] + ')' : ''}</a></div>
            <div class="card-company"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>Charterovka <a href="charterova-spolecnost.html">${b.company || "Yachtnet partner"}</a></div>
            <div class="card-specs">
              <div class="spec"><span class="spec-l">Rok</span><span class="spec-v">${b.year}</span></div>
              <div class="spec"><span class="spec-l">Kajuty</span><span class="spec-v">${b.cabins}</span></div>
              <div class="spec"><span class="spec-l">Lůžka</span><span class="spec-v">${b.berths}</span></div>
              <div class="spec"><span class="spec-l">Osoby</span><span class="spec-v">${persons}</span></div>
              <div class="spec"><span class="spec-l">WC</span><span class="spec-v">${wc}</span></div>
              <div class="spec"><span class="spec-l">Délka</span><span class="spec-v">${b.len}${lenFt ? ' <span class="spec-sub">(' + lenFt + ')</span>' : ''}</span></div>
            </div>
            <div class="card-meta"><strong>${b.year}</strong> · <strong>${b.cabins}</strong> kajut · <strong>${b.berths}</strong> lůžek · <strong>${persons}</strong> osob · <strong>${wc}</strong> WC · <strong>${b.len}</strong>${lenFt ? ' <span class="card-meta-ft">(' + lenFt + ')</span>' : ''}</div>
          </div>
          <div class="card-amenities">${tags}</div>
        </div>
        <div class="card-side">
          <div class="card-side-top">
            ${statusFullHtml}
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

  // Ořízne řádek s vybavením na JEDNU řádku a doplní „+N" skrytých položek (nikdy nezalomí).
  function fitAmenityRow(el) {
    var more = el.querySelector('.amenity-tag--more');
    var tags = Array.prototype.slice.call(el.querySelectorAll('.amenity-tag:not(.amenity-tag--more)'));
    if (!tags.length || !more) return;
    var total = tags.length;
    tags.forEach(function(t) { t.hidden = false; });
    more.hidden = true;
    var firstTop = tags[0].offsetTop;
    var fit = 0;
    for (var i = 0; i < total; i++) { if (tags[i].offsetTop <= firstTop) fit++; else break; }
    if (fit >= total) return; // vše se vejde na jednu řádku, „+N" netřeba
    more.hidden = false;
    var visible = fit;
    for (var j = visible; j < total; j++) tags[j].hidden = true;
    more.textContent = '+' + (total - visible);
    // pokud „+N" přeteče na druhou řádku, uber štítky po jednom
    while (visible > 1 && more.offsetTop > firstTop) {
      visible--;
      tags[visible].hidden = true;
      more.textContent = '+' + (total - visible);
    }
  }
  function fitAllAmenityRows() {
    document.querySelectorAll('#boatsGrid .card-amenities').forEach(fitAmenityRow);
  }

  function renderAllBoats() {
    const grid = document.getElementById("boatsGrid");
    if (!grid) return;
    var marinas = getSelectedMarinas();
    var filtered = marinas.length
      ? BOATS.filter(function(b) { return marinas.indexOf(b.marina) !== -1; })
      : BOATS;
    var resultCount = marinas.length ? filtered.length : 228;
    document.querySelectorAll('[data-result-count]').forEach(function(el) { el.textContent = resultCount; });
    grid.innerHTML = filtered.length
      ? filtered.map(boatCard).join("")
      : '<div style="padding:40px;text-align:center;color:var(--muted);font-size:14px;">Pro vybraný přístav nejsou žádné lodě.</div>';
    renderPagination(currentPage, TOTAL_PAGES);
    fitAllAmenityRows();
  }

  // Přepočet ořezu vybavení při změně šířky viewportu (debounce).
  var _fitTimer = null;
  window.addEventListener('resize', function() {
    clearTimeout(_fitTimer);
    _fitTimer = setTimeout(fitAllAmenityRows, 150);
  });

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

  // ── "Číst více" (O lodi) — rozbalí/sbalí skrytý delší text ──
  document.addEventListener("click", function(e) {
    const btn = e.target.closest("[data-desc-toggle]");
    if (!btn) return;
    const more = btn.parentElement.querySelector(".desc-more-text");
    if (!more) return;
    const willShow = more.hidden;
    more.hidden = !willShow;
    btn.textContent = willShow ? "Zobrazit méně ↑" : "Číst více →";
  });
  document.addEventListener("keydown", function(e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const btn = e.target.closest("[data-desc-toggle]");
    if (!btn) return;
    e.preventDefault();
    btn.click();
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

  // ── SDÍLENÁ DATA NAVIGACE — jediný zdroj pravdy pro desktop mega-menu i mobilní akordeon ──
  // Přidání/změna odkazu tady se automaticky propíše do OBOU menu (desktop dropdown i mobilní akordeon).
  var NAV_RENTAL_DATA = {
    cta: { label: 'Najít loď', sub: 'Prohlédnout všechny dostupné lodě', href: 'pronajem-lodi.html' },
    columns: [
      { title: 'Hledat podle', items: [
        { label: 'Destinace', href: 'destinace.html' },
        { label: 'Kategorie lodí', href: 'kategorie-lodi.html' },
        { label: 'Značky lodí', href: 'prehled-znacek.html' },
        { label: 'Charterové společnosti', href: 'charterove-spolecnosti.html' }
      ]},
      { title: 'Informace', items: [
        { label: 'Jak funguje pronájem?', href: '#' },
        { label: 'Pojištění', href: '#' },
        { label: 'Často se ptáte', href: '#' }
      ]}
    ],
    article: { eyebrow: 'Z magazínu', title: 'Jak vybrat správnou loď?', href: 'detail-clanku.html' }
  };

  var NAV_KURZY_DATA = {
    cta: { label: 'Vše o kapitánských kurzech', sub: 'Co vás čeká, jaké průkazy nabízíme a jak probíhá výuka', href: 'kapitanske-kurzy.html' },
    groups: [
      { title: 'Průkazy na moře', titleHref: 'vsechny-kurzy.html', items: [
        { label: 'Průkaz MDČR C', href: 'detail-prukazu.html' },
        { label: 'Chorvatský průkaz B', href: 'detail-prukazu.html' }
      ]},
      { title: 'Průkazy na řeky a jezera', titleHref: 'vsechny-kurzy.html', items: [
        { label: 'VMP — Vůdce malého plavidla', href: 'detail-prukazu.html' },
        { label: 'VRP — Vůdce rekreačního plavidla', href: 'detail-prukazu.html' }
      ]},
      { title: 'Kurzy', items: [
        { label: 'Praxe na moři', href: 'detail-kurzu.html' },
        { label: 'Teorie pro říční plavbu', href: 'detail-kurzu.html' },
        { label: 'Teorie pro námořní plavbu', href: 'detail-kurzu.html' }
      ]},
      { title: 'Speciality', items: [
        { label: 'Offshore zdokonalovací plavba', href: 'detail-kurzu.html' },
        { label: 'Přístavní manévry', href: 'detail-kurzu.html' }
      ]}
    ],
    footerLinks: [
      { label: 'Všechny průkazy a kurzy', href: 'vsechny-kurzy.html', icon: 'list' },
      { label: 'Termíny kurzů', href: 'terminy-kurzu.html', icon: 'calendar' },
      { label: 'Porovnání průkazů', href: 'srovnani-prukazu.html', icon: 'compare' }
    ]
  };

  // Ploché odkazy v mobilním menu, které na desktopu nemají vlastní mega-menu.
  var NAV_FLAT_LINKS = [
    { label: 'O nás', href: 'o-nas.html' },
    { label: 'Magazín', href: 'magazin.html' },
    { label: 'Kontakt', href: 'kontakt.html' }
  ];

  var NAV_FOOTER_ICONS = {
    list: '<rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="12" width="18" height="4" rx="1"/><rect x="3" y="20" width="18" height="0.5"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    compare: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/>'
  };

  // ── HAMBURGER MENU — generická implementace pro všechny stránky ──
  function renderMobileRentalAccordion() {
    var html = '<div class="nav-mobile-group">' +
      '<button type="button" class="nav-mobile-link nav-mobile-group-toggle" aria-expanded="false">' +
        '<span>Pronájem lodí</span>' +
        '<svg class="nav-mobile-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
      '</button>' +
      '<div class="nav-mobile-group-panel">' +
        '<a class="nav-mobile-sublink nav-mobile-sublink-cta" href="' + NAV_RENTAL_DATA.cta.href + '">' +
          NAV_RENTAL_DATA.cta.label +
          '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
        '</a>';
    NAV_RENTAL_DATA.columns.forEach(function(col) {
      html += '<div class="nav-mobile-sub-title">' + col.title + '</div>';
      col.items.forEach(function(item) {
        html += '<a class="nav-mobile-sublink" href="' + item.href + '">' + item.label + '</a>';
      });
    });
    html += '<div class="nav-mobile-sub-title">' + NAV_RENTAL_DATA.article.eyebrow + '</div>' +
        '<a class="nav-mobile-sublink" href="' + NAV_RENTAL_DATA.article.href + '">' + NAV_RENTAL_DATA.article.title + '</a>' +
      '</div>' +
    '</div>';
    return html;
  }

  function renderMobileKurzyAccordion() {
    var html = '<div class="nav-mobile-group">' +
      '<button type="button" class="nav-mobile-link nav-mobile-group-toggle" aria-expanded="false">' +
        '<span>Kapitánské kurzy</span>' +
        '<svg class="nav-mobile-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
      '</button>' +
      '<div class="nav-mobile-group-panel">' +
        '<a class="nav-mobile-sublink nav-mobile-sublink-cta" href="' + NAV_KURZY_DATA.cta.href + '">' +
          NAV_KURZY_DATA.cta.label +
          '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
        '</a>';
    NAV_KURZY_DATA.groups.forEach(function(group) {
      html += group.titleHref
        ? '<a class="nav-mobile-sub-title nav-mobile-sub-title--link" href="' + group.titleHref + '">' + group.title + '</a>'
        : '<div class="nav-mobile-sub-title">' + group.title + '</div>';
      group.items.forEach(function(item) {
        html += '<a class="nav-mobile-sublink" href="' + item.href + '">' + item.label + '</a>';
      });
    });
    html += '<div class="nav-mobile-sub-title">Rychlé odkazy</div>';
    NAV_KURZY_DATA.footerLinks.forEach(function(fl) {
      html += '<a class="nav-mobile-sublink" href="' + fl.href + '">' + fl.label + '</a>';
    });
    html += '</div></div>';
    return html;
  }

  function renderMobileLinksHTML() {
    var html = renderMobileRentalAccordion() + renderMobileKurzyAccordion();
    NAV_FLAT_LINKS.forEach(function(link) {
      html += '<a class="nav-mobile-link" href="' + link.href + '">' + link.label + '</a>';
    });
    return html;
  }

  var MOBILE_ACTIONS_HTML =
    '<div class="nav-select-wrap">' +
      '<svg class="nav-sel-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' +
      '<select class="nav-select"><option>CS</option><option>EN</option><option>DE</option></select>' +
    '</div>' +
    '<div class="nav-select-wrap">' +
      '<svg class="nav-sel-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.5 9h3a2 2 0 0 1 0 4H11v1.5M11 7.5V9"/></svg>' +
      '<select class="nav-select"><option>Kč</option><option>€</option><option>$</option></select>' +
    '</div>';

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

  // Mobilní akce v hlavičce: srdíčko (oblíbené) + panáček (účet), nalevo od hamburgeru.
  function buildMobileHeaderActions() {
    var wrap = document.createElement('div');
    wrap.className = 'nav-mobile-hdr';
    var fav = document.createElement('button');
    fav.className = 'nav-icon-btn nav-mobile-hdr-fav';
    fav.type = 'button';
    fav.setAttribute('title', 'Oblíbené');
    fav.setAttribute('aria-label', 'Oblíbené');
    fav.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    fav.onclick = function() { window.location.href = 'oblibene.html'; };
    var user = document.createElement('button');
    user.className = 'nav-login-btn nav-login-btn--m';
    user.type = 'button';
    user.setAttribute('aria-label', 'Účet');
    user.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
    wrap.appendChild(fav);
    wrap.appendChild(user);
    return wrap;
  }

  function initHamburgers() {
    // .bk-nav-inner (booking funnel + potvrzení) sdílí stejný .nav-actions vzor, ale
    // mobilní hamburger/ikonky se dřív injektovaly jen do .nav-inner — na mobilu/tabletu
    // tak zmizely veškeré ovladače (telefon, jazyk, měna, účet) beze zbytku.
    document.querySelectorAll('.nav-inner, .bk-nav-inner').forEach(function(inner) {
      var nav = inner.parentElement;
      var existingBtn = inner.querySelector('.nav-hamburger');

      if (!inner.querySelector('.nav-mobile-hdr')) {
        var mob = buildMobileHeaderActions();
        if (existingBtn) inner.insertBefore(mob, existingBtn);
        else inner.appendChild(mob);
      }

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
        '<div class="nav-mobile-links">' + renderMobileLinksHTML() + '</div>' +
        '<div class="nav-mobile-actions">' + MOBILE_ACTIONS_HTML + '</div>';
      nav.appendChild(menu);

      wireHamburger(btn, menu);
    });
  }

  initHamburgers();

  // ── MEGA MENU pro "Pronájem lodí" ────────────────────────
  function renderMegaMenuHTML() {
    var html = '<button class="nav-dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">' +
      'Pronájem lodí' +
      '<svg class="nav-dropdown-chevron" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
    '</button>' +
    '<div class="nav-dropdown-panel" role="menu">' +
      '<div class="nav-dropdown-grid">' +
        '<a class="nav-dropdown-cta" href="' + NAV_RENTAL_DATA.cta.href + '">' +
          '<div>' +
            '<div class="nav-dropdown-cta-label">' + NAV_RENTAL_DATA.cta.label + '</div>' +
            '<div class="nav-dropdown-cta-sub">' + NAV_RENTAL_DATA.cta.sub + '</div>' +
          '</div>' +
          '<span class="nav-dropdown-cta-arrow" aria-hidden="true">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</span>' +
        '</a>';
    NAV_RENTAL_DATA.columns.forEach(function(col) {
      html += '<div class="nav-dropdown-col">' +
        '<div class="nav-dropdown-col-title">' + col.title + '</div>' +
        '<ul class="nav-dropdown-list">' +
          col.items.map(function(item) { return '<li><a href="' + item.href + '">' + item.label + '</a></li>'; }).join('') +
        '</ul>' +
      '</div>';
    });
    html += '<a class="nav-dropdown-article" href="' + NAV_RENTAL_DATA.article.href + '">' +
          '<div class="nav-dropdown-article-img"></div>' +
          '<div class="nav-dropdown-article-body">' +
            '<div class="nav-dropdown-article-eyebrow">' + NAV_RENTAL_DATA.article.eyebrow + '</div>' +
            '<div class="nav-dropdown-article-title">' + NAV_RENTAL_DATA.article.title + '</div>' +
            '<div class="nav-dropdown-article-cta">Přečíst článek →</div>' +
          '</div>' +
        '</a>' +
      '</div>' +
    '</div>';
    return html;
  }

  function renderKurzyMenuHTML() {
    var html = '<button class="nav-dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">' +
      'Kapitánské kurzy' +
      '<svg class="nav-dropdown-chevron" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
    '</button>' +
    '<div class="nav-dropdown-panel nav-dropdown-panel--kurzy" role="menu">' +
      '<div class="nav-dropdown-grid--kurzy">' +
        '<a class="nav-dropdown-cta" href="' + NAV_KURZY_DATA.cta.href + '">' +
          '<div>' +
            '<div class="nav-dropdown-cta-label">' + NAV_KURZY_DATA.cta.label + '</div>' +
            '<div class="nav-dropdown-cta-sub">' + NAV_KURZY_DATA.cta.sub + '</div>' +
          '</div>' +
          '<span class="nav-dropdown-cta-arrow" aria-hidden="true">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</span>' +
        '</a>' +
        '<div class="nav-dropdown-kurzy-right">' +
          '<div class="nav-dropdown-kurzy-cols">';
    // Rozdělit skupiny do dvou sloupců po dvou, stejně jako v původním layoutu.
    for (var colIdx = 0; colIdx < NAV_KURZY_DATA.groups.length; colIdx += 2) {
      html += '<div class="nav-dropdown-col">';
      [NAV_KURZY_DATA.groups[colIdx], NAV_KURZY_DATA.groups[colIdx + 1]].forEach(function(group) {
        if (!group) return;
        html += '<div class="nav-dropdown-group">' +
          (group.titleHref
            ? '<a class="nav-dropdown-col-title--link" href="' + group.titleHref + '">' + group.title + '</a>'
            : '<div class="nav-dropdown-col-title">' + group.title + '</div>') +
          '<ul class="nav-dropdown-list">' +
            group.items.map(function(item) { return '<li><a href="' + item.href + '">' + item.label + '</a></li>'; }).join('') +
          '</ul>' +
        '</div>';
      });
      html += '</div>';
    }
    html += '</div>' +
          '<div class="nav-dropdown-kurzy-actions">' +
            NAV_KURZY_DATA.footerLinks.map(function(fl) {
              return '<a href="' + fl.href + '" class="nav-dropdown-footer-link">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + NAV_FOOTER_ICONS[fl.icon] + '</svg>' +
                fl.label +
              '</a>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
    return html;
  }

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
        rentalLi.innerHTML = renderMegaMenuHTML();
        wireMegaMenu(rentalLi);
      }
      if (kurzyLi) {
        kurzyLi.classList.add('nav-dropdown');
        kurzyLi.innerHTML = renderKurzyMenuHTML();
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
  if (document.getElementById('boatsGrid')) {
    renderAllBoats();
    // Výchozí karta na mobilu je „fotka nahoře" (viz styles.css .boats-list--photo-top).
    // Starší kompaktní variantu (fotka vlevo) zobrazíš přidáním ?variant=compact do URL.
    if (!/[?&]variant=compact(&|$)/.test(location.search)) {
      document.getElementById('boatsGrid').classList.add('boats-list--photo-top');
      fitAllAmenityRows(); // změna varianty → přepočítej ořez vybavení
    }
  }

  // ── Rate modal (Proběhlé rezervace → Přidat hodnocení) ──
  // Vícekrokový wizard (5 kroků hodnocení + poděkování):
  //   1. Celkový dojem (overall)
  //   2. Hodnocení lodě — Stav lodě a zařízení, Čistota
  //   3. Charterová společnost a marina — Převzetí a vrácení, Charterová společnost, Marina
  //   4. Slovní hodnocení (pozitiva / negativa)
  //   5. Shrnutí — Poměr cena / výkon + doporučení
  //   6. Poděkování (success screen)
  (function initRateModal() {
    var hasTrigger = document.querySelector('.res-rate-link, [data-open-rating-modal]');
    var modal = document.getElementById('rateModal');
    if (!modal && hasTrigger && typeof Components.rateModal === 'function') {
      document.body.insertAdjacentHTML('beforeend', Components.rateModal());
      modal = document.getElementById('rateModal');
    }
    if (!modal) return;
    var boatLabel = modal.querySelector('[data-rm-boat]');
    var positiveEl = modal.querySelector('[data-rm-comment-positive]');
    var negativeEl = modal.querySelector('[data-rm-comment-negative]');
    var marinaCommentEl = modal.querySelector('[data-rm-marina-comment]');
    var photoInputEl = modal.querySelector('[data-rm-photo-input]');
    var photoListEl = modal.querySelector('[data-rm-photo-list]');
    var dropzoneEl = modal.querySelector('[data-rm-dropzone]');
    var steps = modal.querySelectorAll('[data-rm-step]');
    var errorEl = null;
    var currentRow = null;
    var currentStep = 1;
    var ratings = { overall: 0, condition: 0, cleanliness: 0, handover: 0, value: 0, charter: 0, marina: 0, recommend: '' };

    // Vykreslí jednu skupinu hvězd pro danou hodnotu (podporuje půlhvězdy, krok 0,5).
    function paintStars(group, value) {
      var v = value || 0;
      group.querySelectorAll('.rate-star').forEach(function(btn) {
        var bv = parseInt(btn.dataset.val, 10);
        btn.classList.toggle('is-active', v >= bv);
        btn.classList.toggle('is-half', v >= bv - 0.5 && v < bv);
      });
    }

    // Hodnota hvězdy podle pozice kurzoru: levá polovina = půlhvězda (bv − 0,5), pravá = celá.
    function starValueFromEvent(star, e) {
      var bv = parseInt(star.dataset.val, 10);
      var rect = star.getBoundingClientRect();
      return (e.clientX - rect.left) < rect.width / 2 ? bv - 0.5 : bv;
    }

    function syncStars() {
      modal.querySelectorAll('.rate-stars-input').forEach(function(group) {
        paintStars(group, ratings[group.dataset.rate] || 0);
      });
    }

    function clearError() {
      if (errorEl) { errorEl.remove(); errorEl = null; }
    }

    function showStep(n) {
      currentStep = n;
      clearError();
      steps.forEach(function(s) {
        s.hidden = parseInt(s.dataset.rmStep, 10) !== n;
      });
      var progress = modal.querySelector('[data-rm-progress]');
      if (progress) progress.style.width = (Math.min(n, 5) / 5 * 100) + '%';
      var stepnum = modal.querySelector('[data-rm-stepnum]');
      if (stepnum) stepnum.textContent = n <= 5 ? ('Krok ' + n + ' z 5') : '';
      var card = modal.querySelector('.rate-modal-card');
      if (card) card.scrollTop = 0;
    }

    function open(row, boatName) {
      currentRow = row;
      ratings = { overall: 0, condition: 0, cleanliness: 0, handover: 0, value: 0, charter: 0, marina: 0, recommend: '' };
      syncStars();
      modal.querySelectorAll('[data-rm-recommend]').forEach(function(b) { b.classList.remove('is-active'); });
      if (boatLabel) boatLabel.textContent = boatName || '';
      if (positiveEl) positiveEl.value = '';
      if (negativeEl) negativeEl.value = '';
      if (photoListEl) photoListEl.innerHTML = '';
      if (photoInputEl) photoInputEl.value = '';
      if (dropzoneEl) dropzoneEl.classList.remove('is-dragover');
      showStep(1);
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function close() {
      modal.hidden = true;
      document.body.style.overflow = '';
      currentRow = null;
      clearError();
    }


    function showError(msg) {
      clearError();
      errorEl = document.createElement('div');
      errorEl.className = 'rate-modal-error';
      errorEl.textContent = msg;
      var currentActions = modal.querySelector('[data-rm-step="' + currentStep + '"] .rate-modal-actions');
      if (currentActions) currentActions.parentNode.insertBefore(errorEl, currentActions);
    }

    function goNext() {
      if (currentStep === 1) {
        if (!ratings.overall) {
          showError('Ohodnoťte prosím celkový dojem.');
          return;
        }
        showStep(2);
      } else if (currentStep === 2) {
        if (!ratings.condition || !ratings.cleanliness) {
          showError('Ohodnoťte prosím stav lodě i čistotu.');
          return;
        }
        showStep(3);
      } else if (currentStep === 3) {
        if (!ratings.handover || !ratings.charter || !ratings.marina) {
          showError('Ohodnoťte prosím všechny tři oblasti.');
          return;
        }
        showStep(4);
      } else if (currentStep === 4) {
        showStep(5);
      }
    }

    function goBack() {
      if (currentStep === 2) showStep(1);
      else if (currentStep === 3) showStep(2);
      else if (currentStep === 4) showStep(3);
      else if (currentStep === 5) showStep(4);
    }

    function renderSummary() {
      var box = modal.querySelector('[data-rm-summary]');
      if (!box) return;
      function esc(s) { return String(s).replace(/[&<>]/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
      var items = [
        ['Celkový dojem', ratings.overall],
        ['Stav lodě a zařízení', ratings.condition],
        ['Čistota', ratings.cleanliness],
        ['Převzetí a vrácení', ratings.handover],
        ['Charterová společnost', ratings.charter],
        ['Marina a její služby', ratings.marina],
        ['Poměr cena / výkon', ratings.value]
      ];
      var sum = 0, n = 0;
      items.forEach(function(it) { if (it[1]) { sum += it[1]; n++; } });
      // Hvězdy (1–5) přepočítáváme na stupnici do 10 — váha hvězdy = 2 body.
      var avg = n ? (sum / n) * 2 : 0;
      var word = avg >= 9 ? 'Výborné' : avg >= 7.5 ? 'Velmi dobré' : avg >= 6 ? 'Dobré' : avg >= 4 ? 'Průměrné' : 'Slabé';
      var html = '<div class="rate-sum-score"><span class="rate-sum-score-num">' + avg.toFixed(1).replace('.', ',') + '</span><span class="rate-sum-score-scale">/ 10</span><span class="rate-sum-stars">★</span><span class="rate-sum-score-word">' + word + '</span></div>';
      html += '<div class="rate-sum-grid">';
      items.forEach(function(it) {
        var v = (it[1] || 0) * 2;
        html += '<div><div class="rate-sum-item-head"><span>' + it[0] + '</span><strong>' + v + '</strong></div><div class="rate-sum-bar"><div class="rate-sum-bar-fill" style="width:' + (v * 10) + '%"></div></div></div>';
      });
      html += '</div>';
      var recYes = ratings.recommend === 'yes', recNo = ratings.recommend === 'no';
      if (recYes || recNo) {
        html += '<div class="rate-sum-recommend"><span>Doporučili byste tuto loď přátelům?</span><strong class="' + (recYes ? 'rate-sum-rec--yes' : 'rate-sum-rec--no') + '">' + (recYes ? 'Ano' : 'Ne') + '</strong></div>';
      }
      var pos = positiveEl && positiveEl.value.trim() ? esc(positiveEl.value.trim()) : 'Bez komentáře.';
      var neg = negativeEl && negativeEl.value.trim() ? esc(negativeEl.value.trim()) : 'Bez komentáře.';
      html += '<div class="rate-sum-notes">' +
        '<div class="rate-sum-note"><div class="rate-sum-note-head"><span class="rate-pc-ico rate-pc-ico--pos" aria-hidden="true">+</span>Pozitiva</div><p>' + pos + '</p></div>' +
        '<div class="rate-sum-note"><div class="rate-sum-note-head"><span class="rate-pc-ico rate-pc-ico--neg" aria-hidden="true">−</span>Negativa</div><p>' + neg + '</p></div>' +
      '</div>';
      box.innerHTML = html;
    }

    function submit() {
      // Volá se z posledního kroku (Shrnutí)
      if (currentStep !== 5) return;
      if (!ratings.value) {
        showError('Ohodnoťte prosím poměr cena / výkon.');
        return;
      }
      if (!ratings.recommend) {
        showError('Odpovězte prosím, zda byste loď doporučili.');
        return;
      }
      // Persist do DOMu (jen pokud otevřeno z řádku rezervace) — hvězdičky + číselný průměr
      if (currentRow) {
        var pvals = [ratings.overall, ratings.condition, ratings.cleanliness, ratings.handover, ratings.charter, ratings.marina, ratings.value];
        var psum = 0, pcnt = 0;
        pvals.forEach(function(x) { if (x) { psum += x; pcnt++; } });
        var pavg = pcnt ? (psum / pcnt) : 0;
        var pavg10 = pavg * 2;
        currentRow.classList.add('res-rate-row--done');
        currentRow.innerHTML = '<div class="res-rate-display">' +
          '<span class="res-rate-item"><span class="res-rate-label">Vaše hodnocení:</span><span class="res-rate-stars">★</span><span class="res-rate-avg">' + pavg10.toFixed(1).replace('.', ',') + ' / 10</span></span>' +
        '</div>';
      }
      renderSummary();
      showStep(6);
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

    // Open i z detailu rezervace (tlačítko „Vyplnit hodnocení")
    document.querySelectorAll('[data-open-rating-modal]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var h1 = document.querySelector('.account-main h1, h1');
        open(null, h1 ? h1.textContent.trim() : '');
      });
    });

    // Klik dovnitř modalu: hvězdy, navigace, zavřít, submit
    modal.addEventListener('click', function(e) {
      if (e.target.closest('[data-rm-close]')) { close(); return; }
      if (e.target.closest('[data-rm-next]')) { goNext(); return; }
      if (e.target.closest('[data-rm-back]')) { goBack(); return; }
      if (e.target.closest('[data-rm-submit]')) { submit(); return; }
      var rec = e.target.closest('[data-rm-recommend]');
      if (rec) {
        ratings.recommend = rec.getAttribute('data-rm-recommend');
        modal.querySelectorAll('[data-rm-recommend]').forEach(function(b) { b.classList.toggle('is-active', b === rec); });
        clearError();
        return;
      }
      var star = e.target.closest('.rate-star');
      if (star) {
        var group = star.closest('.rate-stars-input');
        ratings[group.dataset.rate] = starValueFromEvent(star, e);
        syncStars();
        clearError();
        return;
      }
    });

    // Nahrávání fotek — náhledy jmen + drag & drop (wireframe-level, žádný real upload)
    function addPhotos(files) {
      if (!photoListEl || !files) return;
      Array.prototype.forEach.call(files, function(file) {
        if (file.type && file.type.indexOf('image/') !== 0) return;
        var item = document.createElement('div');
        item.className = 'rate-upload-item';
        item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' +
          '<span class="rate-upload-item-name">' + (file.name || 'fotka') + '</span>' +
          '<button type="button" class="rate-upload-item-remove" aria-label="Odebrat">×</button>';
        item.querySelector('.rate-upload-item-remove').addEventListener('click', function(e) { e.preventDefault(); item.remove(); });
        photoListEl.appendChild(item);
      });
    }
    if (photoInputEl) {
      photoInputEl.addEventListener('change', function() { addPhotos(photoInputEl.files); photoInputEl.value = ''; });
    }
    if (dropzoneEl) {
      ['dragenter', 'dragover'].forEach(function(ev) {
        dropzoneEl.addEventListener(ev, function(e) { e.preventDefault(); dropzoneEl.classList.add('is-dragover'); });
      });
      ['dragleave', 'dragend'].forEach(function(ev) {
        dropzoneEl.addEventListener(ev, function(e) { e.preventDefault(); dropzoneEl.classList.remove('is-dragover'); });
      });
      dropzoneEl.addEventListener('drop', function(e) {
        e.preventDefault();
        dropzoneEl.classList.remove('is-dragover');
        if (e.dataTransfer && e.dataTransfer.files) addPhotos(e.dataTransfer.files);
      });
    }

    // Hover preview hvězd — průběžně podle pozice kurzoru (umožní náhled půlhvězdy),
    // po opuštění se vrátí ke skutečně zvolené hodnotě.
    modal.querySelectorAll('.rate-stars-input').forEach(function(group) {
      group.addEventListener('mousemove', function(e) {
        var star = e.target.closest('.rate-star');
        if (!star) return;
        paintStars(group, starValueFromEvent(star, e));
      });
      group.addEventListener('mouseleave', function() {
        paintStars(group, ratings[group.dataset.rate] || 0);
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
      card.addEventListener('click', function() { window.location.href = 'medailonek-autora.html'; });
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
    var backBtn = document.getElementById('kkWizardBack');
    var restartBtn = document.getElementById('kkWizardRestart');
    var resultEl = document.getElementById('kkWizardResult');
    var progressEl = document.getElementById('kkWizardProgress');
    var barEl = document.getElementById('kkWizardBar');
    var steps = box.querySelectorAll('.wizard-step[data-step]');
    var total = parseInt(box.dataset.totalSteps, 10) || steps.length;
    var current = 1;
    var selections = {};

    function setProgress(pct) {
      pct = Math.max(0, Math.min(100, Math.round(pct)));
      if (barEl) barEl.style.width = pct + '%';
      if (progressEl) progressEl.setAttribute('aria-valuenow', pct);
    }

    function render() {
      steps.forEach(function(s) {
        var n = parseInt(s.dataset.step, 10);
        if (n === current) s.removeAttribute('hidden');
        else s.setAttribute('hidden', '');
      });
      // Průběh jako loading bar — cesty mohou být různě dlouhé, proto ne 1-2-3.
      // Poslední díl zůstává pro výsledek (proto total + 1).
      setProgress(current / (total + 1) * 100);
      var hasSelection = !!selections[current];
      nextBtn.disabled = !hasSelection;
      nextBtn.textContent = (current === total) ? 'Doporučit průkaz →' : 'Pokračovat →';
      if (backBtn) backBtn.hidden = (current === 1);
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

    function showResult() {
      steps.forEach(function(s) { s.setAttribute('hidden', ''); });
      nextBtn.setAttribute('hidden', '');
      if (resultEl) resultEl.removeAttribute('hidden');
      setProgress(100);
      if (backBtn) backBtn.hidden = false;       // umožnit návrat k poslední otázce
      if (restartBtn) restartBtn.hidden = false; // Začít znovu jen ve výsledku
    }

    nextBtn.addEventListener('click', function() {
      if (!selections[current]) return;
      if (current < total) {
        current += 1;
        render();
      } else {
        showResult();
      }
    });

    // Zpět — o krok nazpět, případně z výsledku zpět na poslední otázku
    if (backBtn) backBtn.addEventListener('click', function() {
      if (resultEl && !resultEl.hasAttribute('hidden')) {
        resultEl.setAttribute('hidden', '');
        if (restartBtn) restartBtn.hidden = true;
        nextBtn.removeAttribute('hidden');
        render();
        return;
      }
      if (current > 1) {
        current -= 1;
        render();
      }
    });

    // Začít znovu — reset celého průvodce
    if (restartBtn) restartBtn.addEventListener('click', function() {
      current = 1;
      selections = {};
      box.querySelectorAll('.wizard-opt.is-active').forEach(function(o) { o.classList.remove('is-active'); });
      if (resultEl) resultEl.setAttribute('hidden', '');
      restartBtn.hidden = true;
      nextBtn.removeAttribute('hidden');
      render();
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
    // Labely a cíl jsou konfigurovatelné přes data atributy (detail průkazu vs. detail kurzu).
    var labelEmpty = btn.getAttribute('data-label-empty') || 'Zvolte termíny';
    var labelReady = btn.getAttribute('data-label-ready') || 'Rezervovat vybrané termíny';
    var reserveHref = btn.getAttribute('data-reserve-href') || 'objednavka-kurzu-krok-1.html';

    function anySelected() {
      for (var i = 0; i < checkboxes.length; i++) if (checkboxes[i].checked) return true;
      return false;
    }
    function render() {
      var sel = anySelected();
      btn.textContent = sel ? labelReady : labelEmpty;
      btn.classList.toggle('is-ready', sel);
    }
    checkboxes.forEach(function(cb) {
      cb.addEventListener('change', render);
    });
    btn.addEventListener('click', function() {
      if (anySelected()) {
        window.location.href = reserveHref;
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

  // Řazení — dropdown (mobilní ovládací řada), stejný styl jako fs-select
  (function initSortSelect() {
    var sel = document.getElementById('sortSelect');
    if (!sel) return;
    var trigger = sel.querySelector('.sort-select-trigger');
    var opts = sel.querySelectorAll('.sort-opt');
    function close() { sel.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); }
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      var open = sel.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    opts.forEach(function(opt) {
      opt.addEventListener('click', function() {
        opts.forEach(function(o) { o.classList.remove('is-selected'); o.setAttribute('aria-selected', 'false'); });
        opt.classList.add('is-selected'); opt.setAttribute('aria-selected', 'true');
        // Sync se skrytými sort-taby, ať stav řazení sedí i s desktop variantou
        var tab = document.querySelector('.sort-tabs .sort-tab[data-sort="' + opt.getAttribute('data-sort') + '"]');
        if (tab) tab.click();
        close();
      });
    });
    document.addEventListener('click', function(e) { if (!e.target.closest('#sortSelect')) close(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') close(); });
  })();

  (function initMapView() {
    var canvas = document.getElementById('mapCanvas');
    var pinsHost = document.getElementById('mapPins');
    var mapEl = document.getElementById('boatsMap');
    var toggleBtn = document.getElementById('mapToggleBtn');
    var revealBtn = document.getElementById('mapRevealBtn'); // CTA „Zobrazit dostupné lodě" — jen na výpisu s mapou
    if (!toggleBtn || !mapEl) return;

    var labelEl = toggleBtn.querySelector('.map-toggle-label');
    var ctrlBtn = document.getElementById('mapCtrlBtn'); // mapové tlačítko v mobilní řadě

    function setMapOpen(open) {
      mapEl.hidden = !open;
      toggleBtn.setAttribute('aria-pressed', open ? 'true' : 'false');
      if (labelEl) labelEl.textContent = open ? 'Skrýt mapu' : 'Zobrazit mapu';
      if (ctrlBtn) { ctrlBtn.classList.toggle('is-active', open); ctrlBtn.setAttribute('aria-pressed', open ? 'true' : 'false'); }
      if (open && pinsHost && !pinsHost.dataset.rendered) renderPins();
      if (open) mapEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    toggleBtn.addEventListener('click', function() {
      setMapOpen(mapEl.hidden);
    });
    if (ctrlBtn) ctrlBtn.addEventListener('click', function() {
      setMapOpen(mapEl.hidden);
    });

    if (!pinsHost) return;

    // Chorvatské pobřeží jako hierarchie oblastí (makro-oblast → oblast → přístav).
    // Diagonála z levého horního rohu (SZ – Istrie) do pravého dolního (JV – Dubrovník),
    // aby obrys imitoval tvar Chorvatska. Názvy = reálné destinace z DESTINATIONS,
    // takže klik na pin přidá do filtru odpovídající oblast / přístav.
    // Konkrétní mariny (listy) — zařazené do vodního revíru a města; pozice NW→SE v % plátna nad reálnou mapou Chorvatska.
    var MARINAS = [
      { name:'Marina Poreč',           city:'Poreč',       revir:'Západní Istrie',        x: 9,  y: 12, count: 22 },
      { name:'ACI Marina Rovinj',      city:'Rovinj',      revir:'Západní Istrie',        x: 12, y: 15, count: 31 },
      { name:'ACI Marina Pula',        city:'Pula',        revir:'Jižní Istrie',          x: 15, y: 19, count: 44 },
      { name:'ACI Marina Rijeka',      city:'Rijeka',      revir:'Kvarnerský záliv',      x: 21, y: 24, count: 38 },
      { name:'Marina Punat',           city:'Krk',         revir:'Kvarnerský záliv',      x: 25, y: 27, count: 52 },
      { name:'Marina Mali Lošinj',     city:'Mali Lošinj', revir:'Ostrovy Cres a Lošinj', x: 22, y: 31, count: 29 },
      { name:'Marina Senj',            city:'Senj',        revir:'Podvelebitský kanál',   x: 30, y: 34, count: 18 },
      { name:'Marina Dalmacija',       city:'Zadar',       revir:'Zadarský kanál',        x: 36, y: 40, count: 71 },
      { name:'ACI Marina Zadar',       city:'Zadar',       revir:'Zadarský kanál',        x: 39, y: 43, count: 63 },
      { name:'Marina Kornati Biograd', city:'Biograd',     revir:'Souostroví Kornati',    x: 43, y: 46, count: 48 },
      { name:'Marina Hramina Murter',  city:'Murter',      revir:'Souostroví Kornati',    x: 46, y: 49, count: 40 },
      { name:'Marina Mandalina',       city:'Šibenik',     revir:'Šibenické ostrovy',     x: 50, y: 51, count: 55 },
      { name:'Marina Frapa Rogoznica', city:'Rogoznica',   revir:'Šibenické ostrovy',     x: 54, y: 54, count: 47 },
      { name:'SCT Marina Trogir',      city:'Trogir',      revir:'Bračský kanál',         x: 60, y: 59, count: 66 },
      { name:'ACI Marina Split',       city:'Split',       revir:'Bračský kanál',         x: 66, y: 64, count: 92 },
      { name:'Městský přístav Split',  city:'Split',       revir:'Bračský kanál',         x: 68, y: 67, count: 40 },
      { name:'ACI Marina Palmižana',   city:'Hvar',        revir:'Ostrov Hvar a Vis',     x: 62, y: 70, count: 37 },
      { name:'ACI Marina Korčula',     city:'Korčula',     revir:'Elafitské ostrovy',     x: 78, y: 78, count: 34 },
      { name:'Kotviště Šipan',         city:'Dubrovník',   revir:'Elafitské ostrovy',     x: 82, y: 82, count: 12 },
      { name:'ACI Marina Dubrovník',   city:'Dubrovník',   revir:'Elafitské ostrovy',     x: 87, y: 87, count: 58 }
    ];

    // Ilustrativní vyšší stupně (jiné měřítko mapy): globální oblasti (nad mapou světa) a státy (nad Evropou/Středomořím).
    var AREAS = [
      { name:'Středomoří',    x: 53, y: 30, count: 2480 },
      { name:'Karibik',       x: 27, y: 45, count: 1360 },
      { name:'Indický oceán', x: 68, y: 55, count: 420 },
      { name:'Polynésie',     x: 10, y: 62, count: 310 },
      { name:'Mikronésie',    x: 90, y: 50, count: 190 }
    ];
    var COUNTRIES = [
      { name:'Španělsko',  x: 17, y: 55, count: 640 },
      { name:'Itálie',     x: 45, y: 55, count: 1120 },
      { name:'Chorvatsko', x: 55, y: 44, count: 897 },
      { name:'Řecko',      x: 66, y: 66, count: 730 },
      { name:'Turecko',    x: 82, y: 62, count: 410 }
    ];

    // Seskupení podle klíče → centroid pozice + součet lodí (pořadí dle prvního výskytu).
    function aggregate(items, keyFn) {
      var groups = {}, order = [];
      items.forEach(function(m) {
        var k = keyFn(m);
        if (!groups[k]) { groups[k] = { name: k, sx: 0, sy: 0, n: 0, count: 0 }; order.push(k); }
        var g = groups[k];
        g.sx += m.x; g.sy += m.y; g.n++; g.count += m.count;
      });
      return order.map(function(k) {
        var g = groups[k];
        return { name: g.name, x: g.sx / g.n, y: g.sy / g.n, count: g.count };
      });
    }

    // 5 stupňů: globální sailing areas → státy → regiony → města → mariny.
    // Ke každému stupni patří i výřez reálné mapy (bbox), takže se přibližuje i podklad.
    var LEVELS = [
      AREAS,                                               // 1 – globální sailing areas (svět)
      COUNTRIES,                                           // 2 – státy (Evropa / Středomoří)
      aggregate(MARINAS, function(m) { return m.revir; }), // 3 – regiony (vodní revíry Chorvatska)
      aggregate(MARINAS, function(m) { return m.city; }),  // 4 – města
      MARINAS.map(function(m) { return { name: m.name, x: m.x, y: m.y, count: m.count }; }) // 5 – mariny
    ];
    var MAP_BBOX = [
      '-168,-55,192,74',       // svět
      '-13,29,42,60',          // Evropa / Středomoří
      '12.2,42.1,20.6,45.8',   // Chorvatsko
      '12.2,42.1,20.6,45.8',
      '12.2,42.1,20.6,45.8'
    ];
    var zoomIdx = 2; // start na regionech (chorvatské pobřeží)

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
    // Vždy „kapka" (teardrop) s počtem uvnitř a štítkem pod ní — nikdy kolečko-cluster.
    // Pin je vlastně cluster dané oblasti; při zoomu se rozpadne na piny nižší úrovně.
    function renderPins() {
      pinsHost.innerHTML = '';
      var selected = getSelectedMarinas();
      LEVELS[zoomIdx].forEach(function(p) {
        var isSel = selected.indexOf(p.name) !== -1;
        var el = document.createElement('button');
        el.type = 'button';
        el.className = 'map-pin map-pin--marina' + (isSel ? ' is-selected' : '');
        el.style.left = p.x + '%';
        el.style.top = p.y + '%';
        el.title = p.name + ' — ' + p.count + ' lodí · klik pro ' + (isSel ? 'odebrání' : 'přidání') + ' do filtru';
        el.innerHTML = '<span class="map-pin-shape"><span class="map-pin-count">' + p.count + '</span></span>' +
                       '<span class="map-pin-name">' + p.name + '</span>';
        el.addEventListener('click', function() { toggleMarinaInFilter(p.name); if (revealBtn) revealBtn.hidden = false; });
        pinsHost.appendChild(el);
      });
      pinsHost.dataset.rendered = '1';
      syncLevelControl();
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

    // Zoom +/- : posun o jeden stupeň (globální oblasti → státy → regiony → města → mariny) + odpovídající výřez mapy.
    var mapFrame = canvas && canvas.querySelector('.map-frame');
    var currentBbox = MAP_BBOX[zoomIdx];
    function applyMapView() {
      if (!mapFrame) return;
      var bbox = MAP_BBOX[zoomIdx];
      if (bbox === currentBbox) return; // stejný výřez → iframe zbytečně nereloadovat
      currentBbox = bbox;
      mapFrame.src = 'https://www.openstreetmap.org/export/embed.html?bbox=' + encodeURIComponent(bbox) + '&layer=mapnik';
    }
    // Návodný stupňový ovladač místo ikon +/− — kopíruje 5 úrovní oblastí (shora nejširší po nejužší).
    var LEVEL_LABELS = ['Světové oblasti', 'Státy', 'Regiony', 'Města', 'Přístavy'];
    if (canvas) {
      canvas.querySelectorAll('.map-zoom-btn').forEach(function(b) { b.remove(); }); // pryč původní +/−
      var levelCtrl = document.createElement('div');
      levelCtrl.className = 'map-levels';
      levelCtrl.setAttribute('role', 'group');
      levelCtrl.setAttribute('aria-label', 'Úroveň přiblížení mapy');
      LEVEL_LABELS.forEach(function(label, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'map-level';
        b.textContent = label;
        b.setAttribute('data-level', i);
        b.addEventListener('click', function() {
          if (i === zoomIdx) return;
          zoomIdx = i;
          applyMapView();
          renderPins();
        });
        levelCtrl.appendChild(b);
      });
      canvas.appendChild(levelCtrl);
    }
    function syncLevelControl() {
      if (!canvas) return;
      canvas.querySelectorAll('.map-level').forEach(function(b) {
        b.classList.toggle('is-active', parseInt(b.getAttribute('data-level'), 10) === zoomIdx);
      });
    }
    syncLevelControl();
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

  // ── CREW LIST (detail-rezervace) — mazání osob ─────────
  (function initCrewList() {
    var table = document.querySelector('.crew-table');
    if (!table) return;
    var tbody = table.querySelector('tbody');
    if (!tbody) return;
    var freeRow = tbody.querySelector('.crew-free-row');

    // res-step "X / Y osob" souhrn (horní lišta plateb/kroků)
    var stepSub = null;
    document.querySelectorAll('.res-step').forEach(function(step) {
      var name = step.querySelector('.res-step-name');
      if (name && name.textContent.trim() === 'Crew list') {
        stepSub = step.querySelector('.res-step-sub');
      }
    });

    function personRows() {
      return Array.prototype.filter.call(tbody.querySelectorAll('tr'), function(tr) {
        return !tr.classList.contains('crew-free-row');
      });
    }

    function pluralMista(n) {
      if (n === 1) return 'volné místo';
      if (n >= 2 && n <= 4) return 'volná místa';
      return 'volných míst';
    }

    // Kapacita = aktuální osoby + volná místa (spočítáno jednou při startu)
    var freeStart = freeRow ? parseInt((freeRow.textContent.match(/\d+/) || [0])[0], 10) : 0;
    var TOTAL = personRows().length + freeStart;

    function refresh() {
      var count = personRows().length;
      var free = TOTAL - count;
      if (freeRow) {
        var cell = freeRow.querySelector('td');
        if (free > 0) {
          freeRow.hidden = false;
          if (cell) cell.textContent = '+ ' + free + ' ' + pluralMista(free);
        } else {
          freeRow.hidden = true;
        }
      }
      if (stepSub) stepSub.textContent = count + ' / ' + TOTAL + ' osob';
    }

    tbody.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-crew-remove]');
      if (!btn) return;
      var tr = btn.closest('tr');
      if (!tr) return;
      var name = ((tr.querySelector('td') || {}).textContent || '').trim();
      if (!window.confirm('Odebrat ' + (name || 'tuto osobu') + ' z crew listu?')) return;
      tr.remove();
      refresh();
    });

    refresh();
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
    // Otevři tab podle URL hashe (např. detail-rezervace.html#crew)
    var hash = (window.location.hash || '').slice(1);
    if (hash) {
      var hashTab = Array.prototype.find.call(tabs, function(t) { return t.dataset.tab === hash; });
      if (hashTab) hashTab.click();
    }
  })();

  // ── DÁRKOVÝ VOUCHER (krok 2) — checkbox odhalí input + tlačítko ──
  (function initVoucher() {
    document.querySelectorAll('[data-voucher-check]').forEach(function(cb) {
      cb.addEventListener('change', function() {
        var card = cb.closest('.bk-card');
        var form = card && card.querySelector('[data-voucher-form]');
        if (form) form.hidden = !cb.checked;
      });
    });
  })();

  // ── AKORDEON TERMÍNŮ (detail kurzu, detail zkoušky, detail průkazu) — „Zobrazit další(ch) X termínů" ──
  function pluralTerminy(n) {
    var mod10 = n % 10, mod100 = n % 100;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'další ' + n + ' termíny';
    return 'dalších ' + n + ' termínů';
  }
  (function initDatesAccordion() {
    document.querySelectorAll('[data-dates-toggle]').forEach(function(btn) {
      var wrap = btn.closest('.dates-card, .dates-group');
      var table = wrap && wrap.querySelector('.dates-table');
      if (!table) return;
      var extra = table.querySelectorAll('.dates-row--extra').length;
      if (!extra) { btn.hidden = true; return; }
      var labelMore = 'Zobrazit ' + pluralTerminy(extra);
      btn.textContent = labelMore;
      btn.addEventListener('click', function() {
        var open = table.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.textContent = open ? 'Zobrazit méně' : labelMore;
      });
    });
  })();

  // ── PŘEPÍNAČ VARIANT KROKŮ (detail průkazu) — C / B ──
  (function initKrokySwitch() {
    var btns = document.querySelectorAll('[data-kroky]');
    if (!btns.length) return;
    var h1 = document.getElementById('licenseH1');
    // Prerekvizita je nově prvním krokem uvnitř kroků varianty (přepíná se s nimi automaticky).
    btns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var v = btn.getAttribute('data-kroky');
        btns.forEach(function(b) { b.classList.toggle('is-active', b === btn); });
        document.querySelectorAll('[data-kroky-variant]').forEach(function(s) {
          s.hidden = s.getAttribute('data-kroky-variant') !== v;
        });
        if (h1 && btn.hasAttribute('data-h1')) h1.textContent = btn.getAttribute('data-h1');
      });
    });
  })();

  // ── DOPLŇKOVÉ SLUŽBY (detail rezervace) — show-hide + výběr a objednání ──
  (function initServiceExtras() {
    var list = document.querySelector('[data-svc-list]');
    if (!list) return;
    function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
    function plural(n) { return n === 1 ? 'služba' : (n >= 2 && n <= 4 ? 'služby' : 'služeb'); }

    // Zobrazit / skrýt další služby
    var moreBtn = document.querySelector('[data-svc-more]');
    var moreLabel = moreBtn && moreBtn.querySelector('[data-svc-more-label]');
    var extras = list.querySelectorAll('.svc-extra');
    if (moreBtn && moreLabel && extras.length) {
      moreLabel.textContent = '+ ' + extras.length + ' dalších služeb a vybavení';
      moreBtn.addEventListener('click', function () {
        var open = moreBtn.classList.toggle('is-open');
        extras.forEach(function (el) { el.hidden = !open; });
        moreLabel.textContent = open ? '− Zobrazit méně' : ('+ ' + extras.length + ' dalších služeb a vybavení');
      });
    } else if (moreBtn) {
      moreBtn.hidden = true;
    }

    // Výběr služeb → akční lišta
    var checks = list.querySelectorAll('[data-svc-check]');
    var action = document.querySelector('[data-svc-action]');
    var summary = document.querySelector('[data-svc-summary]');
    function update() {
      var count = 0, sum = 0;
      checks.forEach(function (cb) { if (cb.checked) { count++; sum += parseInt(cb.getAttribute('data-price'), 10) || 0; } });
      if (action) action.hidden = count === 0;
      if (summary) summary.textContent = 'Vybráno ' + count + ' ' + plural(count) + ' · ' + fmt(sum) + ' Kč';
    }
    checks.forEach(function (cb) { cb.addEventListener('change', update); });
    update();
  })();

  // ── DOPLŇKOVÉ SLUŽBY — počítadlo kusů + odebrání z košíku ──
  (function initServiceCart() {
    function parseNum(s) { return parseInt(String(s).replace(/[^\d]/g, ''), 10) || 0; }
    function fmtNum(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

    function recalcSidebar() {
      var totalEl = document.querySelector('[data-sum-total]');
      if (!totalEl) return;
      var total = 0;
      document.querySelectorAll('[data-sum-line]').forEach(function (el) { total += parseNum(el.getAttribute('data-amount')); });
      totalEl.textContent = fmtNum(total) + ' Kč';
    }

    // Počítadla kusů (mínus / input / plus)
    document.querySelectorAll('[data-qty]').forEach(function (st) {
      var input = st.querySelector('[data-qty-input]');
      var unit = parseNum(st.getAttribute('data-unit'));
      var syncKey = st.getAttribute('data-qty-sync');
      var row = st.closest('.extra-item');
      var rowPrice = row && row.querySelector('.extra-item-price');
      var cb = row && row.querySelector('[data-svc-check]');
      function apply(q) {
        q = Math.max(1, q);
        input.value = q;
        var line = unit * q;
        if (rowPrice && unit) rowPrice.textContent = fmtNum(line) + ' Kč';
        if (syncKey) {
          var sb = document.querySelector('[data-sum-line="' + syncKey + '"]');
          if (sb) { sb.setAttribute('data-amount', line); sb.textContent = fmtNum(line) + ' Kč'; }
          var badge = document.querySelector('[data-sum-qty="' + syncKey + '"]');
          if (badge) badge.textContent = q > 1 ? '× ' + q : '';
          recalcSidebar();
        }
        // detail rezervace: cena se promítne i do výběrové lišty
        if (cb) { cb.setAttribute('data-price', line); cb.dispatchEvent(new Event('change', { bubbles: true })); }
      }
      st.querySelector('[data-qty-dec]').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); apply((parseInt(input.value, 10) || 1) - 1); });
      st.querySelector('[data-qty-inc]').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); apply((parseInt(input.value, 10) || 1) + 1); });
    });

    // Odebrání položky z košíku (objednávka služeb)
    document.querySelectorAll('[data-cart-remove]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var row = btn.closest('[data-cart-row]');
        if (!row) return;
        var key = row.getAttribute('data-cart-row');
        row.remove();
        var line = document.querySelector('[data-sum-line="' + key + '"]');
        if (line) { var pl = line.closest('.price-line'); if (pl) pl.remove(); }
        recalcSidebar();
      });
    });
  })();

  // ── OBJEDNÁVKA SLUŽEB krok 2 — platba vs. jen odsouhlasení ──
  (function initSvcConfirm() {
    var radios = document.querySelectorAll('input[name="svc-confirm"]');
    if (!radios.length) return;
    var payWrap = document.querySelector('[data-svc-pay-wrap]');
    var btn = document.querySelector('[data-svc-confirm-btn]');
    function update() {
      var sel = document.querySelector('input[name="svc-confirm"]:checked');
      var isPay = sel && sel.value === 'pay';
      if (payWrap) payWrap.hidden = !isPay;
      if (btn) btn.textContent = isPay ? (btn.getAttribute('data-pay-label') || 'Zaplatit') : (btn.getAttribute('data-confirm-label') || 'Závazně objednat');
    }
    radios.forEach(function (r) { r.addEventListener('change', update); });
    update();
  })();

  // ── TERMÍNOVÁ LISTINA — filtr typu (Vše / Moře / Řeka / Speciality) ──
  (function initTermFilter() {
    var sw = document.querySelector('[data-term-filter]');
    if (!sw) return;
    var rows = document.querySelectorAll('[data-term-row]');
    sw.querySelectorAll('[data-cat]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var cat = btn.getAttribute('data-cat');
        sw.querySelectorAll('[data-cat]').forEach(function(b) { b.classList.toggle('is-active', b === btn); });
        rows.forEach(function(r) {
          r.style.display = (cat === 'all' || r.getAttribute('data-row-cat') === cat) ? '' : 'none';
        });
      });
    });
  })();

  // ── TERMÍNOVÁ LISTINA — výběr termínů + plovoucí sticky lišta ──
  (function initTermSelect() {
    var bar = document.querySelector('[data-term-bar]');
    if (!bar) return;
    var countEl = bar.querySelector('[data-term-count]');
    var rowChecks = document.querySelectorAll('[data-term-row] input[type="checkbox"]');
    var selectAll = document.querySelector('.dates-table thead input[type="checkbox"]');
    function plural(n) { return n === 1 ? 'vybraný termín' : (n >= 2 && n <= 4 ? 'vybrané termíny' : 'vybraných termínů'); }
    function update() {
      var n = 0;
      rowChecks.forEach(function(cb) { if (cb.checked) n++; });
      bar.hidden = n === 0;
      countEl.textContent = n + ' ' + plural(n);
    }
    rowChecks.forEach(function(cb) { cb.addEventListener('change', update); });
    if (selectAll) selectAll.addEventListener('change', function() {
      rowChecks.forEach(function(cb) {
        var row = cb.closest('[data-term-row]');
        if (row && row.style.display !== 'none') cb.checked = selectAll.checked;
      });
      update();
    });
    update();
  })();

  // ── ÚČET — fakturační adresa FO/Firma ──────────────────
  (function initBillingType() {
    var billing = document.querySelector('[data-billing]');
    if (!billing) return;
    var companyRow = billing.querySelector('.billing-company-row');
    var personRow = billing.querySelector('.billing-person-row');
    var radios = billing.querySelectorAll('input[name="billing-type"]');
    function sync() {
      var v = billing.querySelector('input[name="billing-type"]:checked');
      if (!v) return;
      if (companyRow) companyRow.hidden = v.value !== 'company';
      if (personRow) personRow.hidden = v.value !== 'person';
    }
    radios.forEach(function(r) { r.addEventListener('change', sync); });
    sync();
  })();

  // ── ÚČET — fakturační adresy (mazání) ──────────────────
  (function initBillingAddresses() {
    var list = document.querySelector('[data-billing-list]');
    if (!list) return;
    list.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-addr-remove]');
      if (!btn) return;
      var card = btn.closest('.billing-addr');
      if (!card) return;
      var name = ((card.querySelector('.billing-addr-name') || {}).textContent || '').trim();
      if (!window.confirm('Smazat fakturační adresu' + (name ? ' „' + name + '"' : '') + '?')) return;
      card.remove();
    });
  })();

  // ── FAKTURAČNÍ ADRESA — uložení z formuláře a návrat ────
  (function initAddressForm() {
    var form = document.querySelector('[data-address-form]');
    if (!form) return;
    function val(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var typeEl = form.querySelector('input[name="billing-type"]:checked');
      var data = {
        type: typeEl ? typeEl.value : 'person',
        firstName: val('addr-fname'),
        lastName: val('addr-lname'),
        company: val('addr-company'),
        ico: val('addr-ico'),
        street: val('addr-street'),
        city: val('addr-city'),
        zip: val('addr-zip'),
        country: val('addr-country')
      };
      try { sessionStorage.setItem('yn_billing', JSON.stringify(data)); } catch (err) {}
      var ret = new URLSearchParams(window.location.search).get('return');
      window.location.href = ret || 'ucet.html';
    });
  })();

  // ── FAKTURAČNÍ ADRESA — výzva / box (detail rezervace) ──
  (function initBillingBox() {
    var section = document.querySelector('[data-billing-section]');
    if (!section) return;
    var prompt = section.querySelector('[data-billing-prompt]');
    var box = section.querySelector('[data-billing-box]');
    var ACCOUNT_NAME = 'Jaroslav Zimmermann';
    var TRASH = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>';

    function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function read() { try { return JSON.parse(sessionStorage.getItem('yn_billing') || 'null'); } catch (e) { return null; } }

    function render() {
      var d = read();
      if (!d) {
        if (prompt) prompt.hidden = false;
        if (box) { box.hidden = true; box.innerHTML = ''; }
        return;
      }
      var isCompany = d.type === 'company';
      var personName = [d.firstName, d.lastName].filter(Boolean).join(' ') || ACCOUNT_NAME;
      var lines = '<div class="billing-addr-name">' + esc(isCompany ? (d.company || 'Firma') : personName) + '</div>';
      if (isCompany && d.ico) lines += '<div class="billing-addr-ico">IČ ' + esc(d.ico) + '</div>';
      if (d.street) lines += '<div>' + esc(d.street) + '</div>';
      var cityLine = [d.zip, d.city].filter(Boolean).join(' ');
      if (cityLine) lines += '<div>' + esc(cityLine) + '</div>';
      if (d.country) lines += '<div>' + esc(d.country) + '</div>';
      box.innerHTML =
        '<div class="billing-addr">' +
          '<div class="billing-addr-body">' +
            '<span class="billing-addr-badge">' + (isCompany ? 'Firma' : 'Fyzická osoba') + '</span>' +
            '<div class="billing-addr-lines">' + lines + '</div>' +
          '</div>' +
          '<button class="billing-addr-remove" type="button" data-billing-clear aria-label="Smazat adresu" title="Smazat adresu">' + TRASH + '</button>' +
        '</div>';
      box.hidden = false;
      if (prompt) prompt.hidden = true;
    }

    section.addEventListener('click', function(e) {
      if (!e.target.closest('[data-billing-clear]')) return;
      if (!window.confirm('Smazat fakturační adresu?')) return;
      try { sessionStorage.removeItem('yn_billing'); } catch (err) {}
      render();
    });

    render();
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

  // ── POJIŠTĚNÍ V SIDEBARU (zjednodušený krok 2) ──────────
  // Samostatný box „Pojištění" + řádek v Přehledu plateb. Pojištění se platí
  // přímo pojišťovně (do 10 dnů od podpisu smlouvy), proto nevstupuje do
  // pronájmu, poplatků ani online záloh.
  (function initSimpleInsurance() {
    var card = document.querySelector('[data-simple-poj-card]');
    if (!card) return;
    var anchor = card.querySelector('[data-simple-poj-anchor]');
    var totalEl = card.querySelector('[data-simple-poj-total]');
    var payrow = document.querySelector('[data-simple-poj-payrow]');
    var payval = document.querySelector('[data-simple-poj-payval]');

    function parsePrice(text) {
      var n = (text.match(/[\d\s ]+/) || ['0'])[0].replace(/[\s ]/g, '');
      return parseInt(n, 10) || 0;
    }
    function formatPrice(n) {
      return n.toLocaleString('cs').replace(/ /g, ' ') + ' Kč';
    }

    var items = Array.prototype.slice.call(document.querySelectorAll('.pkg-ins-row')).map(function(row) {
      var input = row.querySelector('.pkg-ins-check');
      var nameEl = row.querySelector('.pkg-ins-row-name');
      var priceEl = row.querySelector('.pkg-ins-row-price');
      return { input: input, name: nameEl ? nameEl.textContent.trim() : '', price: priceEl ? parsePrice(priceEl.textContent) : 0 };
    }).filter(function(it) { return it.input; });

    function rebuild() {
      if (anchor) anchor.querySelectorAll('.price-line--dynamic').forEach(function(el) { el.remove(); });
      var sum = 0, any = false;
      items.forEach(function(it) {
        if (!it.input.checked) return;
        any = true; sum += it.price;
        if (anchor) {
          var line = document.createElement('div');
          line.className = 'price-line price-line--dynamic';
          line.innerHTML = '<span>' + it.name + '</span><span>' + formatPrice(it.price) + '</span>';
          anchor.appendChild(line);
        }
      });
      if (totalEl) totalEl.textContent = formatPrice(sum);
      card.hidden = !any;
      if (payrow) payrow.hidden = !any;
      if (payval) payval.textContent = formatPrice(sum);
    }

    items.forEach(function(it) { it.input.addEventListener('change', rebuild); });
    rebuild();
  })();

  // ── RESERVATION PACKAGE PICKER (detail-lodi) ──────────
  (function initPackagePicker() {
    var radios = document.querySelectorAll('input[name="reservation-package"]');
    if (!radios.length) return;
    var priceEls   = document.querySelectorAll('[data-cta-price]');
    var variantEl  = document.querySelector('[data-cta-variant]');
    var priceFroms = document.querySelectorAll('.cta-price-from, .price-sticky-from');
    var ctaBtns    = document.querySelectorAll('[data-reserve-cta]');

    var LABELS = { basic: 'Basic', flex: 'Flex', premium: 'Premium' };
    var DEFAULT_PRICE = priceEls[0] ? priceEls[0].textContent.trim() : '';

    function setSelected(radio) {
      var card = radio.closest('.pkg-card');
      var price = card && card.querySelector('.pkg-price-val');
      if (price) priceEls.forEach(function(el) { el.textContent = price.textContent.trim(); });
      if (variantEl) {
        variantEl.textContent = '· ' + (LABELS[radio.value] || radio.value);
        variantEl.hidden = false;
      }
      priceFroms.forEach(function(el) { el.hidden = true; });
      ctaBtns.forEach(function(btn) {
        btn.textContent = 'Pokračovat k rezervaci →';
        btn.setAttribute('href', 'rezervace-krok-1-v2.html');
        btn.classList.add('btn-reserve--continue');
      });
    }

    function setUnselected() {
      priceEls.forEach(function(el) { el.textContent = DEFAULT_PRICE; });
      if (variantEl) { variantEl.textContent = ''; variantEl.hidden = true; }
      priceFroms.forEach(function(el) { el.hidden = false; });
      ctaBtns.forEach(function(btn) {
        btn.textContent = 'Vybrat variantu ↓';
        btn.setAttribute('href', '#sec-balicky');
        btn.classList.remove('btn-reserve--continue');
      });
    }

    radios.forEach(function(r) {
      r.addEventListener('change', function() {
        if (!r.checked) return;
        setSelected(r);
        // Po zvolení varianty sjet na výběr pojištění (zelený stav tlačítka zůstává).
        var ins = document.getElementById('sec-pojisteni');
        if (ins) ins.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    var checked = Array.prototype.find.call(radios, function(r) { return r.checked; });
    if (checked) setSelected(checked); else setUnselected();
  })();

  // ── STICKY CENOVÝ PROUŽEK — zobrazí se po odscrollování cenového bloku nad viewport ──
  (function initPriceSticky() {
    var bar = document.querySelector('[data-price-sticky]');
    var panel = document.querySelector('.cta-panel');
    if (!bar || !panel || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function(entries) {
      var e = entries[0];
      var show = !e.isIntersecting && e.boundingClientRect.top < 0;
      bar.hidden = !show;
    }, { threshold: 0 });
    io.observe(panel);
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

  // ── PŘIHLÁŠENÍ — modal nad rozhraním + stav v hlavičce ──
  // Běží na konci: modal se injektuje na každou stránku, tlačítko "Přihlásit se"
  // ho otevře (bez navigace). Po přihlášení uživatel zůstane na stránce a tlačítko
  // se přepne na plnou ikonku + křestní jméno. Stránky účtu (natvrdo "Můj účet")
  // se berou jako přihlášené. Stav drží sessionStorage (reset = nová záložka).
  (function initAuth() {
    var ACCOUNT = { firstName: 'Jaroslav' };
    var KEY = 'yn_loggedin';
    var OUTLINE = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
    var SOLID = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"/></svg>';

    function isLoggedIn() { try { return sessionStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
    function setLoggedIn(v) { try { if (v) sessionStorage.setItem(KEY, '1'); else sessionStorage.removeItem(KEY); } catch (e) {} }
    function truncName(n) { return n.length > 9 ? n.slice(0, 9) + '…' : n; }

    if (!document.getElementById('loginModal') && typeof Components.loginModal === 'function') {
      document.body.insertAdjacentHTML('beforeend', Components.loginModal());
    }
    var modal = document.getElementById('loginModal');

    function switchTab(name) {
      if (!modal) return;
      modal.querySelectorAll('.login-tab[data-login-tab]').forEach(function(t) {
        t.classList.toggle('is-active', t.getAttribute('data-login-tab') === name);
      });
      modal.querySelectorAll('[data-login-panel]').forEach(function(p) {
        p.hidden = p.getAttribute('data-login-panel') !== name;
      });
      modal.classList.toggle('is-register-wide', name === 'register');
      var title = modal.querySelector('#loginModalTitle');
      if (title) title.textContent = name === 'register' ? 'Registrace' : 'Přihlášení';
    }
    function openModal(tab) {
      tab = tab || 'login';
      if (typeof closeMobileNav === 'function') closeMobileNav();
      if (!modal) return;
      switchTab(tab);
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      var first = modal.querySelector('[data-login-panel="' + tab + '"] .auth-input');
      if (first) first.focus();
    }
    function closeModal() {
      if (!modal) return;
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    function doLogin() { setLoggedIn(true); closeModal(); renderNav(); }

    function renderNav() {
      var loggedIn = isLoggedIn();
      document.querySelectorAll('.nav-login-btn').forEach(function(btn) {
        if (loggedIn) {
          btn.innerHTML = SOLID + truncName(ACCOUNT.firstName);
          btn.classList.add('nav-login-btn--account');
          btn.onclick = function() { window.location.href = 'seznam-rezervaci.html'; };
        } else {
          btn.innerHTML = OUTLINE + 'Přihlásit se';
          btn.classList.remove('nav-login-btn--account');
          btn.onclick = function(e) { e.preventDefault(); openModal(); };
        }
      });
    }

    // Stránky účtu mají natvrdo "Můj účet" → ber jako přihlášeného a zapamatuj.
    var onAccountPage = Array.prototype.some.call(document.querySelectorAll('.nav-login-btn'), function(b) {
      return b.textContent.trim() === 'Můj účet';
    });
    if (onAccountPage) setLoggedIn(true);

    renderNav();

    // Odhlásit se — vyčistit stav a vrátit na úvod (odhlášený)
    document.querySelectorAll('.account-nav-item').forEach(function(item) {
      if (item.textContent.trim() === 'Odhlásit se') {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          setLoggedIn(false);
          window.location.href = 'index.html';
        });
      }
    });

    // Otevření modalu i z jiných míst než hlavičky (např. „Přihlásit se" v kontaktních údajích)
    document.querySelectorAll('[data-login-open]').forEach(function(el) {
      el.addEventListener('click', function(e) { e.preventDefault(); openModal(el.getAttribute('data-login-open') || 'login'); });
    });

    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target.closest('[data-login-close]')) { closeModal(); return; }
        var tab = e.target.closest('[data-login-tab]');
        if (tab) { e.preventDefault(); switchTab(tab.getAttribute('data-login-tab')); return; }
        if (e.target.closest('[data-login-social]')) { e.preventDefault(); doLogin(); return; }
      });
      modal.addEventListener('submit', function(e) {
        if (e.target.closest('[data-login-panel="login"]')) { e.preventDefault(); doLogin(); }
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
      });
    }
  })();

  // ── NAVIGACE MÉHO ÚČTU na mobilu/tabletu — dropdown pod ikonkou panáčka ──
  // Na stránkách účtu (kde existuje .account-sidebar) přepíná ikonka panáčka v hlavičce
  // na ≤1024px místo navigace na "Moje rezervace" tento dropdown se seznamem sekcí.
  // Na desktopu (>1024px) zůstává původní chování (navigace) beze změny.
  (function initAccountNavDropdown() {
    var sidebar = document.querySelector('.account-sidebar');
    if (!sidebar) return;
    function isCompact() { return window.innerWidth <= 1024; }
    function closeDropdown() { sidebar.classList.remove('account-sidebar--open'); }
    function toggleDropdown() { sidebar.classList.toggle('account-sidebar--open'); }

    document.querySelectorAll('.nav-login-btn').forEach(function(btn) {
      // Přepsat (ne přidat capture listener) — .onclick nastavený dřív v initAuth() je na
      // stejném elementu (cíli), takže capture-fáze tam nemá přednost před ním a firil by se
      // až po něm (prohlížeč by stihl navigovat pryč dřív, než capture listener stačil zabránit).
      var prevOnclick = btn.onclick;
      btn.onclick = function(e) {
        if (!isCompact()) { // desktop: ponechat původní chování (navigace)
          if (typeof prevOnclick === 'function') prevOnclick.call(btn, e);
          return;
        }
        e.preventDefault();
        toggleDropdown();
      };
    });

    document.addEventListener('click', function(e) {
      if (!sidebar.classList.contains('account-sidebar--open')) return;
      if (e.target.closest('.account-sidebar') || e.target.closest('.nav-login-btn')) return;
      closeDropdown();
    });
    window.addEventListener('resize', function() { if (!isCompact()) closeDropdown(); });
  })();
