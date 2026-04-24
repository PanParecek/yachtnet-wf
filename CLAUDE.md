# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

Interaktivní HTML wireframe pro **Yachtnet** — bareboat charterová platforma. Wireframe je jediný soubor `index.html` bez build systému, bez závislostí, bez Tailwindu.

## Architektura souboru

- Jeden soubor `index.html` — embedded CSS + JS + HTML
- Více „stránek" přepínaných přes JS `showPage(id)` — nikdy přímé `display:none/block`
- Aktuální stránky: `page-home`, `page-results`, `page-detail`, `page-destination`
- Každá nová stránka: přidat ID do pole `PAGES` v JS + CSS `#page-X { display: none; }`

## Design systém

### Barvy (CSS proměnné — neměnit, nenahrazovat Tailwindem)
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

```js
// Správně:
showPage('page-detail')

// Špatně:
document.getElementById('page-detail').style.display = 'block'
```

Každý odkaz vedoucí na jinou „stránku" wireframu: `onclick="showPage('...');return false;"`

## Komponenty — pravidla

- **Max-width**: vždy `max-width: var(--max); margin: 0 auto;`
- **Sekce**: střídají se `.band` (bílé) a `.band-alt` (šedé `var(--bg)`)
- **Nadpisy sekcí**: `.sec-label` (uppercase popisek) + `.sec-title` (h2)
- **Patička**: duplikovat do každé stránky — není sdílená přes JS
- **FAQ accordion**: `.faq-q` + `.faq-a` — ovládáno globálním click delegátem v JS
- **Karty lodí** (výpis): horizontální layout, funkce `boatCard(b)` v JS — neměnit strukturu
- **Mini karty** (detail): `.mini-card` grid, 3 per řada

## Stránkování (výpis lodí)

- Zobrazovat **16 lodí na stránku**
- Komponenta stránkování ukazuje vždy **7 prvků**: první stránku, `…`, dvě stránky před aktivní, aktivní stránku, dvě stránky za aktivní, `…`, poslední stránku
- Vzor: `1 … 4  [5]  6 … 19`
- Aktivní stránka: `background: var(--int); color: #fff`
- Tlačítka `←` a `→` na krajích (ale neslouží jako náhrada čísel)
- `…` není klikatelné, pouze vizuální oddělovač

## Písmo

- **Font: Rubik** (Google Fonts) — `<link>` v `<head>`, `font-family: "Rubik","Inter","Helvetica Neue",Arial,sans-serif`
- Váhy: 400 / 500 / 600 / 700 / 800

## Popisky a labely

- **Malé šedé popisky** (`.sec-label`, `.spec-l`, `.article-meta`, field labels atd.) — barva `var(--text)`, nikoli `var(--muted)`
- Font-size: min. 11 px pro jednořádkové labely, min. 12 px pro metadata

## Ikonky

- **Pouze jednobarevné** — vždy inline SVG s `stroke="currentColor"` nebo `fill="currentColor"`; žádné barevné emoji v UI
- **Minimální velikost 16×16 px** — `width="16" height="16"` (nebo větší dle kontextu, např. 18 px v těle článku)
- Barva ikonky = barva přilehlého textu (dědí `color` přes `currentColor`)
- Výjimky povoleny pouze pro datové informace (vlaječky států apod.)

## Navigace — styl

- Fonty odkazů v `.nav-links`: **15 px, uppercase, font-weight 600, barva `var(--text)`**
- Hover stav: `var(--int)`, aktivní stránka může mít `color: var(--int)` přímo inline
- Přepínače jazyků a měn: `<div class="nav-select-wrap">` + inline SVG ikonka + `<select class="nav-select">`
- Tlačítko přihlášení: `<button class="nav-login-btn">` + SVG user ikonka + text „Přihlásit se"

## Měny a přepínače

- Výchozí měna: **Kč** (kurz 25 Kč/€, zaokrouhleno na celé tisíce)
- Přepínač jazyků: dropdown `<select>` s globe ikonkou (CS / EN / DE)
- Přepínač měn: dropdown `<select>` s coin ikonkou (Kč / € / $)

## Styling — zákazy

- **Žádný Tailwind** — soubor neobsahuje Tailwind CDN ani build
- **Žádné inline styly pro barvy** — používat CSS proměnné
- **Žádné reálné obrázky** — pouze placeholder pattern
- **Žádné barevné emoji ikonky** — nahradit monochromním SVG s `currentColor`
- Neměnit hodnoty CSS proměnných v `:root` bez explicitního požadavku
