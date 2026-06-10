# Hodnocení — varianta v1 (záloha)

Datum zálohy: 2026-06-04

## Co je v této zálohě
Snapshot funkční varianty hodnocení plavby — modal otevíraný z „Přidat hodnocení →" v záložce *Proběhlé* na seznamu rezervací, plus zobrazení hvězd v detailu rezervace.

## Soubory
- `seznam-rezervaci.html` — celá stránka v okamžiku zálohy. Klíčové části:
  - V tabu *Proběhlé* (`data-panel="probehle"`) každá karta s `.res-rate-row` (buď `.res-rate-link` „Přidat hodnocení →" pro nevyplněné, nebo `.res-rate-row--done` se třemi hvězdami pro vyplněné).
  - Modal `#rateModal` na konci `<body>` (před `<script>` tagem).
- `detail-rezervace.html` — sekce „Hodnocení plavby" v tabu *Rezervace* (vykresluje stars přes `.res-rate-display`, bez tlačítka *Upravit*).
- `_styles.snippet.css` — CSS pro `.res-rate-*` a `.rate-modal-*` (řádky 3808–3897 v `assets/styles.css` v době zálohy).
- `_script.snippet.js` — IIFE `initRateModal` (řádky 2126–2243 v `assets/script.js`).

## Chování v1
1. **Otevření**: klik na `.res-rate-link` (s atributem `data-rm-…`) přímý listener volá `open(row, boatName)`, ukládá `currentRow` a název lodi do header sub-titlu modalu.
2. **3 kategorie**: Loď / Charterovka / Yachtnet — každá `.rate-stars-input` s 5 buttons. Click nastavuje aktivní hvězdu + všechny nalevo (`is-active`). Hover preview přidává `is-hover`, mouseleave čistí.
3. **Validace**: `submit()` vyžaduje všechny 3 kategorie ohodnocené, jinak vykresluje `.rate-modal-error`.
4. **Persist**: po submit `currentRow.innerHTML` přepsán na `.res-rate-display` se třemi hvězdami (žádný „Upravit" link).
5. **Zavření**: backdrop, ×, *Zrušit*, Escape.

## Klíčové třídy
- `.rate-modal`, `.rate-modal-card`, `.rate-modal-backdrop`, `.rate-modal-title`, `.rate-modal-sub`, `.rate-modal-list`, `.rate-modal-row`, `.rate-modal-label`, `.rate-modal-comment`, `.rate-modal-actions`, `.rate-modal-close`, `.rate-modal-error`
- `.rate-stars-input`, `.rate-star`, `.rate-star.is-active`, `.rate-star.is-hover`
- `.res-rate-row`, `.res-rate-row--done`, `.res-rate-link`, `.res-rate-display`, `.res-rate-item`, `.res-rate-label`, `.res-rate-stars`, `.res-rate-stars-empty`

## Známá omezení
- Hodnocení po submit už nelze upravit (link „Upravit" záměrně odstraněn na žádost uživatele).
- Data nejsou persistována (refresh stránky stav resetuje — wireframe).

## Pokud chceš obnovit
1. Zkopíruj `seznam-rezervaci.html` a `detail-rezervace.html` zpět do rootu projektu.
2. CSS blok ze `_styles.snippet.css` vlož do `assets/styles.css` mezi „Hodnocení plavby v Proběhlých rezervacích" a další blok.
3. JS IIFE ze `_script.snippet.js` vlož do `assets/script.js` před `// ── Booking sticky CTA …`.
