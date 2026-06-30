# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

Interaktivní HTML wireframe pro **Yachtnet** — bareboat charterová platforma. Statický prototyp bez build systému, bez frameworků, bez Tailwindu. Slouží jako klikatelný náhled pro klienta a předlohu pro implementaci.

## Architektura

Multi-page prototyp — **každá „stránka" je samostatný `.html` soubor v rootu repa**. Stránky se mezi sebou prolinkovávají běžným `<a href="nazev-stranky.html">`. Žádný router, žádné `showPage()`.

```
/                          root — všechny stránky (např. index.html, detail-lodi.html, …)
├── assets/
│   ├── styles.css         jediný globální stylesheet (sdílený všemi stránkami)
│   └── script.js          jediný globální JS (sdílený všemi stránkami)
├── img/                   loga, favicon, ilustrace
├── src/                   CSV specifikace stránek z Google Sheets + zadání v PDF
└── zalohy/                ZIP zálohy + experimentální backupy
```

Každá HTML stránka linkuje **stejný** stylesheet a script:

```html
<link rel="stylesheet" href="assets/styles.css" />
…
<script src="assets/script.js"></script>
```

### Přidání nové stránky

1. Vytvořit `nazev-stranky.html` v rootu — zkopírovat hlavičku, NAV a footer z existující stránky (např. `index.html`).
2. Přidat záznam do `SITEMAP_TREE` v `assets/script.js` (správně do hierarchie pod nadřazenou stránku).
3. Prolinkovat z relevantních stránek (NAV, footer, související odkazy).
4. Pokud stránka má vlastní CSV spec, najdeš ji v `src/Yachtnet - <Název>.csv`.

## Sdílené komponenty (`Components` registry v `script.js`)

Aby se opakující sekce (footer, modal lektora, social-proof pruh) nemusely duplikovat napříč 45 stránkami, jsou definované jako šablonové funkce v `Components = { … }` na začátku `script.js` a vkládají se přes `data-component`:

```html
<div data-component="footer"></div>
<div data-component="socialProof" data-score="5,0" data-quote="…" data-author="— Martin K."></div>
<div data-component="teamModal"></div>
```

`Components.init()` běží synchronně na konci `<body>` a každý `[data-component]` element nahradí výsledným HTML. `data-*` atributy se přemapují na `opts` (kebab → camelCase).

**Pravidlo:** každou opakující se sekci řeš přes `Components` — nikdy nekopíruj HTML do více souborů. Změna podoby na jednom místě = propagace všude.

## Sdílené datové registry v `script.js`

- `SITEMAP_TREE` — strom všech stránek pro `mapa-stranek.html` (i hierarchie ve wireframe-sitemap baru). Přidat každou novou stránku.
- `DESTINATIONS` — země, oblasti, marína pro destination search combobox.
- `BOATS` — testovací dataset lodí pro výpis a karty.
- `PERKS` — labely/ikonky vybavenosti lodí.

## Design systém

### Barvy (CSS proměnné v `:root` — neměnit, nenahrazovat Tailwindem)

```
--bg:       #f4f4f2   /* stránkové pozadí */
--surface:  #ffffff   /* karty, nav, patička povrchy */
--border:   #c8c8c4   /* všechny ohraničení */
--muted:    #9a9a96   /* sekundární text */
--text:     #2a2a28   /* primární text */
--dark:     #1e1e1c   /* patička pozadí */
--int:      #6903FF   /* vše interaktivní */
--int-dark: #5200cc   /* hover stav interaktivních prvků */
--int-soft: #f0ecff   /* jemné zvýraznění, badge pozadí */
--img-bg:   #555555   /* placeholder obrázků */
--radius:   6px
--max:      1366px    /* max-width všech sekcí */
```

### Placeholder obrázky
- Vždy: `background: var(--cross-bg), var(--img-bg)` — proškrtnutý šedý obdélník
- Poměr stran: `aspect-ratio: 3/2` (nebo explicitní výška pro hero/banner)
- Nikdy reálné fotky, ikony lodí ani jiné SVG ilustrace v placeholderech

### Interaktivní prvky
- Barva: `var(--int)` (#6903FF) — tlačítka, linky, aktivní stavy, accenty
- Hover: `var(--int-dark)` (#5200cc)
- Jemné pozadí: `var(--int-soft)` (#f0ecff) pro badge, soft stavy

### Logo
- V hlavičce (bílé pozadí): `filter: brightness(0)` — černá verze
- V patičce (tmavé pozadí): `filter: brightness(0) invert(1)` — bílá verze
- Soubor: `img/logo-yachtnet.svg`

## Jazyk

Veškerý obsah, labely, komentáře v kódu a navigace — **česky**. Žádné anglické texty v UI.

## Navigace mezi stránkami

```html
<!-- Správně: -->
<a href="detail-lodi.html">Detail lodi</a>

<!-- Špatně (žádné JS routery, žádné showPage): -->
<a onclick="showPage('page-detail')">…</a>
```

NAV (horní menu) a mega-menu jsou v každé stránce duplikované jako HTML — nejsou v `Components` (záměrně, kvůli `aria-current` a per-stránkové variabilitě). Pokud měníš strukturu NAV, projít všechny stránky.

## Komponenty — pravidla

- **Max-width**: vždy `max-width: var(--max); margin: 0 auto;`
- **Sekce**: střídají se `.band` (bílé) a `.band-alt` (šedé `var(--bg)`)
- **Nadpisy sekcí**: `.sec-label` (uppercase popisek) + `.sec-title` (h2)
- **Footer**: vkládat výhradně přes `<div data-component="footer"></div>` — nikdy nekopírovat HTML
- **FAQ accordion**: `.faq-q` + `.faq-a` — ovládáno globálním click delegátem v `script.js`
- **Karty lodí** (výpis): horizontální layout, funkce `boatCard(b)` ve `script.js` — neměnit strukturu
- **Mini karty** (detail): `.mini-card` grid, 3 per řada

## Stránkování (výpis lodí)

- Zobrazovat **16 lodí na stránku**
- Komponenta stránkování ukazuje vždy **7 prvků**: první stránku, `…`, dvě stránky před aktivní, aktivní stránku, dvě stránky za aktivní, `…`, poslední stránku
- Vzor: `1 … 4  [5]  6 … 19`
- Aktivní stránka: `background: var(--int); color: #fff`
- Tlačítka `←` a `→` na krajích (ale neslouží jako náhrada čísel)
- `…` není klikatelné, pouze vizuální oddělovač

## Písmo

- **Font: Rubik** (Google Fonts) — `<link>` v `<head>` každé stránky, `font-family: "Rubik","Inter","Helvetica Neue",Arial,sans-serif`
- Váhy: 400 / 500 / 600 / 700 / 800

## Popisky a labely

- **Malé šedé popisky** (`.sec-label`, `.spec-l`, `.article-meta`, field labels atd.) — barva `var(--text)`, nikoli `var(--muted)`
- Font-size: min. 11 px pro jednořádkové labely, min. 12 px pro metadata

## Typografická pravidla

- Jednotlivé odstavce <P> jsou od sebe odděleny mezerou. Nepoužívat měkké entery.
- Na konci řádku se nesmí vyskytovat jednoslabičné předložky a spojky.
- Perex má vždy alespoň dva řádky.
- Délka řádku - maximální délka řádku je cca 90 znaků včetně mezer.

## Ikonky

- **Pouze jednobarevné** — vždy inline SVG s `stroke="currentColor"` nebo `fill="currentColor"`; žádné barevné emoji v UI
- **Minimální velikost 16×16 px** — `width="16" height="16"` (nebo větší dle kontextu, např. 18 px v těle článku)
- Barva ikonky = barva přilehlého textu (dědí `color` přes `currentColor`)
- Výjimky povoleny pouze pro datové informace (vlaječky států apod.)

## Navigace — styl

- Fonty odkazů v `.nav-links`: **14 px, uppercase, font-weight 600, barva `var(--text)`, letter-spacing `.04em`**
- Hover stav: `var(--int)`
- Mega-menu pro „Pronájem lodí" a „Kapitánské kurzy" — `.nav-dropdown-panel` rozbalitelný panel
- Mobilní hamburger menu `#navHamburger` + `#navMobileMenu`
- Tlačítko přihlášení: `<button class="nav-login-btn">` + SVG user ikonka + text „Přihlásit se"

## Měny a přepínače

- Výchozí měna: **Kč** (kurz 25 Kč/€, zaokrouhleno na celé tisíce)
- Přepínač jazyků: `<select class="nav-mini-select">` s globe ikonkou (CS / EN / DE)
- Přepínač měn: `<select class="nav-mini-select">` s coin ikonkou (Kč / € / $)

## SEO / Crawler ochrana

Wireframe **NESMÍ** být indexován vyhledávači ani AI crawlery. Každá stránka má v `<head>` plný blok `noindex, nofollow` meta tagů pro robots, googlebot, bingbot, GPTBot, ClaudeBot, CCBot, PerplexityBot, Applebot-Extended, atd. Při kopírování hlavičky do nové stránky tento blok zachovat.

## Specifikace stránek

Pro každou stránku existuje CSV export z Google Sheets ve složce `src/` (např. `src/Yachtnet - Detail lodi.csv`). Obsahuje seznam sekcí, polí, copy textů a poznámek od klienta. Při tvorbě/úpravě stránky tuto specifikaci konzultovat. Celkový proces a kontext kapitánských průkazů je v `src/YachtNet, proces pronájmu a kapitánské průkazy.pdf`.

## Styling — zákazy

- **Žádný Tailwind** — repo neobsahuje Tailwind CDN ani build
- **Žádné inline styly pro barvy** — používat CSS proměnné
- **Žádné reálné obrázky** — pouze placeholder pattern
- **Žádné barevné emoji ikonky** — nahradit monochromním SVG s `currentColor`
- **Žádné duplikované sdílené sekce** — footer a další opakující se komponenty přes `Components` registry
- Neměnit hodnoty CSS proměnných v `:root` bez explicitního požadavku
