# CLAUDE.md — Strömkast.se

Projektkontext för Claude. Uppdatera den här filen när ny infrastruktur tillkommer eller beslut ändras.
Senast avstämd mot `claude-context.md`: juni 2026.

---

## Vad är Strömkast?

Svensk affiliate-sajt om fiske. Målgrupp: svenska fiskare, alla nivåer.
Affärsmodell: affiliate-provisioner via Adtraction. Ingen e-handel, inget lager.
Tonalitet: direkt, faktabaserad, ärlig. Inga säljiga formuleringar. Inga em-streck (—) i text.
Affiliate-transparens är viktigt och ska synas i komponenter och sidmallar.

---

## Tech-stack

- **Framework:** Astro 6, TypeScript strict, ESM
- **Styling:** Tailwind CSS v4 med custom design tokens i `src/styles/tokens.css`
- **Content:** Astro Content Collections med Zod-validering i `src/content.config.ts`
- **Interaktiva öar:** React. FiskeKarta (startsidans karta), KalenderWidget (nappkalender), LinVäljare (linguide), DestinationMap, SpoQuiz (spöväljare)
- **Hosting:** Vercel. `output: 'static'` med Astro Vercel-adapter.
- **Analytics:** GA4 (mät-ID G-BP2R8TQWQP) och Google Search Console
- **Fonts:** Bitter 700 (display/rubriker), Inter variable (brödtext), självhostad under `/fonts/`

---

## Drift och deploy

- **Hosting:** Vercel. `output: 'static'` med Astro Vercel-adapter.
- **SMHI-data hämtas vid byggtid** i `index.astro`, `forhallanden/index.astro`
  och `destinationer/[slug].astro` via `src/lib/smhi.ts`. Datan uppdateras
  alltså bara när sajten byggs om, inte vid sidladdning.
- **Produktpriser hämtas vid byggtid** ur Adtractions produktfeeds via
  `src/lib/feed.ts`, anropad från `AffiliateCard.astro` och
  `utrustning/test/[slug].astro`. Samma sak gäller här: priset uppdateras bara
  vid ombyggnad, vilket den dagliga cron-körningen sköter.
  - Miljövariabler: `ADTRACTION_FEED_URL_FISKEONLINE` och
    `ADTRACTION_FEED_URL_OUTL1`. Lokalt i `.env`, i Vercel under Settings ->
    Environment Variables (Production och Preview), i GitHub som Actions-secrets.
    Aldrig i klartext i repot.
  - Saknas en variabel, svarar Adtraction med fel, eller finns produkten inte i
    feeden faller sidan tillbaka på `price` i frontmatter. Bygget går alltid
    igenom. `[feed]`-rader i byggloggen visar hur många produkter som lästes.
- **Daglig automatisk ombyggnad** håller väderdatan färsk:
  - Schemalagt GitHub Actions-workflow: `.github/workflows/daily-rebuild.yml`,
    schema `0 5 * * *` (UTC = 06–07 svensk tid). `workflow_dispatch` finns
    för manuell körning.
  - Workflowet POST:ar mot en Vercel deploy hook, vilket startar ett nytt bygge.
  - Ett andra jobb, `validera-feed`, kör `validate-feed.mjs --strict` och skriver
    rapporten till jobbsammanfattningen. Jobben är oberoende: valideringen får
    aldrig hindra den dagliga ombyggnaden.
  - Deploy hook skapas i Vercel: Settings -> Git -> Deploy Hooks, branch `main`.
  - Hook-URL:en lagras som GitHub-secret `VERCEL_DEPLOY_HOOK`
    (repo -> Settings -> Secrets and variables -> Actions). Aldrig i klartext i repot.
  - **Replikera för ny marknad:** skapa ny deploy hook i det nya Vercel-projektet,
    lägg URL:en som secret `VERCEL_DEPLOY_HOOK` i det nya repot, kopiera
    workflow-filen. Justera cron-tiden efter den nya marknadens tidszon.

---

## Design tokens (src/styles/tokens.css)

```
--color-deep:   #0E1B22   /* nästan svart, primär text */
--color-pine:   #1F3A2E   /* primär brand, mörkgrön */
--color-stone:  #6B7470   /* sekundär text */
--color-mist:   #E8E4DC   /* bakgrundsnyanser */
--color-paper:  #F7F4EE   /* sidans bakgrund */
--color-rust:   #B45D3C   /* accent, CTAs, "Bästa val"-badge */
--color-copper: #D08A5C   /* sekundär accent, hover */
--color-sky:    #6E8FA0   /* länkar, info */
```

---

## Projektstruktur (src/)

```
src/
├── assets/images/          Lokala bilder (destinations, species, techniques, hero, logo)
├── components/
│   ├── AffiliateCard.astro     Produktkort med pris, betyg, affiliate-länk, tracking
│   ├── ConsentBanner.astro     Cookie-samtycke
│   ├── DestinationMap.tsx      React-ö för destinationskarta
│   ├── FiskeKarta.tsx          React-ö, startsidans karta med artchips (läser säsong ur calendar.ts)
│   ├── Footer.astro
│   ├── Header.astro
│   ├── KalenderWidget.tsx      React-ö, nappkalendern
│   ├── NewsletterForm.astro
│   ├── SEO.astro               Hanterar title, description, OG, schema, canonical
│   ├── linvaljare/
│   │   ├── LinValjare.tsx       React-ö, interaktiv linväljare i linguiden
│   │   └── LinValjareIsland.astro
│   └── quiz/SpoQuiz.tsx        React-ö, interaktiv spöväljare (dynamisk matchning)
├── content/
│   ├── articles/               MDX (basta-fiskespon-2026, nappkalender-guide, valja-fiskelina)
│   ├── authors/                JSON (rikard-giby)
│   ├── destinations/           MDX, 41 filer
│   ├── gear-categories/        JSON, 6 filer (se tabell nedan)
│   ├── gear-reviews/           MDX, 50 filer (se listor nedan)
│   ├── species/                MDX, 32 filer
│   └── techniques/             MDX, 9 filer
├── data/
│   ├── calendar.ts             Säsongsmodell per art, driver nappkalender och FiskeKarta
│   └── smhi-stations.json
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── forecast.ts
│   ├── smhi.ts                 Hämtar SMHI-prognos vid byggtid
│   ├── sort.ts
│   └── track.ts
├── pages/
│   ├── index.astro
│   ├── arter/[slug].astro + index.astro
│   ├── destinationer/[slug].astro + index.astro
│   ├── forhallanden/index.astro
│   ├── guider/[slug].astro + index.astro
│   ├── nappkalender/index.astro + [art].astro + [art]/[manad].astro
│   ├── nyhetsbrev/index.astro
│   ├── om/index.astro
│   ├── sok/index.astro
│   ├── spovaljaren.astro
│   ├── teknik/[slug].astro + index.astro
│   ├── utrustning/index.astro + [kategori].astro + test/[slug].astro
│   ├── cookiepolicy.astro
│   ├── honeypot-trap.astro
│   ├── 404.astro
│   └── rss.xml.ts
└── styles/
    ├── global.css
    └── tokens.css
```

---

## Content collections (src/content.config.ts)

Sju collections: `destinations`, `species`, `techniques`, `gear-categories`, `gear-reviews`, `articles`, `authors`.

Gemensamma hero-fält på destinations, species och gear-categories:
`heroSource: z.enum(['illustration','photo'])` (default `illustration`), `heroCredit` och
`heroCreditUrl` (krävs när `heroSource === 'photo'`). AI-genererade hero behöver inga fält.

### gear-reviews (MDX)
```ts
title, slug, description, heroImage,
brand: string,
category: string,          // matchar slug i gear-categories, gemena bokstäver
price: number,             // SEK, RESERVVÄRDE. Ordinarie cirkapris, aldrig reapris.
                           // Visas bara när feeden saknar produkten. Se feed.ts.
rating: number (0–5),      // redaktionellt betyg, ej eget test
pros: string[],
cons: string[],
affiliateUrl: string,
merchant: string,
featured: boolean,
budgetPick: boolean,
targetSpecies: string[],
techniques: string[],
priceRange: string,        // budget|mellanklass|premium
quizEnabled: boolean
```

### gear-categories (JSON)
```ts
title, slug, description, heroImage,
heroSource, heroCredit, heroCreditUrl,   // som ovan
guideUrl: string (optional),   // länk till relaterad guide, t.ex. "/guider/valja-fiskelina/"
excerpt: string (optional)     // korttext för indexsidan (40–80 tecken)
```

### destinations (MDX, urval av fält)
`lat`, `lng`, `län`, `primarySpecies[]`, `waterType` (lake|river|coastal|stream),
`iFiskeUrl`, `recommendedGear[]`, `kostrad[]` (kvicksilver|dioxin, sätts efter geografi),
`excerpt`.

OBS för MDX (gear-reviews, species, destinations, techniques, articles):
- Astro cachar aggressivt. Kör `rm -rf .astro && npm run dev` efter nya MDX-filer.
- Apostrof och citattecken i frontmatter-strängar (t.ex. 7'0") kraschar YAML-parsern. Undvik.
- Fot-symbol i mått (7'0", 8'4") kraschar MDX-parsern. Undvik helt.
- MDX-osäkra tecken (~, mindre-än, större-än, krullparenteser) utanför giltig JSX kraschar parsern. Använd "ca" i stället för tilde.
- `targetSpecies` ska skrivas som inline-array: `["abborre", "gadda"]`, inte YAML-bindestreck.

---

## Gear-categories (6 st)

| Slug | Titel | Quiz | guideUrl |
|---|---|---|---|
| spon | Fiskespön | Ja (SpoQuiz) | /guider/basta-fiskespon-2026/ |
| haspelrullar | Haspelrullar | Nej | (ingen) |
| trollingspon | Trollingspön | Nej | (ingen) |
| flatlinor | Flätlinor | Nej | /guider/valja-fiskelina/ |
| fluorocarbon | Fluorocarbontafsar | Nej | /guider/valja-fiskelina/ |
| nylon | Nylonlinor | Nej | /guider/valja-fiskelina/ |

OBS: `category`-fältet i en gear-review MÅSTE matcha kategorins slug exakt och med gemena bokstäver
(`fluorocarbon`, `nylon`, inte displaynamnet). Fel skiftläge ger en tom kategorisida utan byggfel.
`check-content.mjs` har en regel som fångar detta.

---

## Gear-reviews (111 st)

Tabellerna nedan är ett urval och inte fullständiga. `claude-context.md` är
auktoritativ för vilka produkter som faktiskt finns, och `ls src/content/gear-reviews/`
ger det snabba svaret.

### Spön (category: spon, alla quizEnabled: true)

| Slug | Prisklass |
|---|---|
| shimano-nexave-haspelspo-191m | budget |
| mikado-inazuma-pro-zander | budget |
| kinetic-xarann-predator-trigger-ct | budget |
| bft-raptor-g2-jerkbait | budget |
| westin-w3-finesse-tc-2nd | mellanklass |
| westin-w3-finesse-jig-3rd | mellanklass |
| westin-w3-hybridcast-t-3rd | mellanklass |
| westin-w3-powerteez-3rd | mellanklass |
| westin-w2-powercast-t-spinnspo | mellanklass |
| shimano-yasei-bb-pike-xh | mellanklass |
| bft-ninety-two-mimic-stick | mellanklass |
| shimano-expride-haspelspo-198m | premium |
| shimano-26-zodias-haspelspo | premium |
| westin-w6-dropshot-haspelspo | premium |
| westin-w6-powercast-t-spinnspo | premium |
| westin-w6-powerteez-haspelspo | premium |
| westin-w6-jerk-swimbait-t-2nd | premium |
| bft-lizzard-x-stefan-trumstedt | premium |

### Haspelrullar (category: haspelrullar, quizEnabled: false)

| Slug | Prisklass |
|---|---|
| shimano-nexave-fi-2500 | budget |
| kinetic-marshall-4000-fd | budget |
| kinetic-brutalis-5000-fd | budget |
| okuma-ceymar-hd-2500a | mellanklass |
| okuma-inspira-2500a | mellanklass |
| okuma-itx-cb-2500h | mellanklass |
| shimano-miravel-2500 | mellanklass |
| shimano-stradic-fm-c3000-hg | mellanklass |
| westin-w3-4000-fd | mellanklass |
| shimano-vanford-fa-2500 | premium |
| shimano-vanford-fa-4000 | premium |
| shimano-stella-fk-2500 | premium |

### Trollingspön (category: trollingspon, quizEnabled: false)

| Slug | Prisklass |
|---|---|
| okuma-magda-finn-trollingspo | budget |
| okuma-magda-finn-trolling-combo | mellanklass |
| westin-w3-predator-trolling-3rd | mellanklass |
| westin-w2-predator-trolling | mellanklass |

### Flätlinor (category: flatlinor, quizEnabled: false)

| Slug | Prisklass |
|---|---|
| kinetic-4-braid-012mm | budget |
| kinetic-8-braid-014mm | budget |
| hurricane-x8-braid-012mm | budget |
| shimano-kairiki-8-013mm | mellanklass |
| westin-w3-8-braid-smokey-grey | mellanklass |
| strike-wire-extreme-015mm | mellanklass |
| westin-w6-8-braid-0148mm | premium |
| westin-w10-13-braid-coastal | premium |

### Fluorocarbontafsar (category: fluorocarbon, quizEnabled: false)

| Slug | Prisklass |
|---|---|
| strike-wire-fluorocarbon-022mm-invisible | budget |
| westin-w6-st5-soft-030mm | budget |
| westin-w6-st5-soft-038mm | budget |
| westin-w6-st3-hard-062mm | mellanklass |
| strike-wire-shockleader-090mm | premium |

### Nylonlinor (category: nylon, quizEnabled: false)

| Slug | Prisklass |
|---|---|
| stroft-abr-028mm | budget |
| stroft-abr-030mm | budget |
| stroft-abr-040mm | mellanklass |

---

## Innehåll: arter, destinationer, tekniker

### Arter (32)
abborre, al, asp, braxen, farna, gadda, gos, harr, havskatt, havsoring, horngadda, id,
kanadaroding, karp, lake, lax, makrill, mort, nors, oring, piggvar, regnbage, roding,
rodspatta, ruda, sarv, sik, sill, skrubbskadda, stromming, sutare, torsk

### Tekniker (9)
dropshot, flugfiske, havsfiske, isfiske, jiggfiske, mete, spinnfiske, trolling, vertikalfiske

### Destinationer (41)
angermanalven, asnen, atran, blekinge-skargard, bohuslan-skargard, bolmen, byskealven,
dalalven, eman, gota-alv, gotland, hjalmaren, hornavan, indalsalven, kalixalven, kalmarsund,
klaralven, kultsjon, lagan, malaren, mellanljusnan, mockeln, morrum, nissan, oland, oresund,
ostergotlands-skargard, ovre-fryken, pitealven, ringsjon, roxen, siljan, sommen,
stockholms-skargard, storsjon, tidan, tornealven, tornetrask, umealven, vanern, vattern,
vindelalven

OBS: sluggar i frontmatter matchar inte alltid filnamnet (t.ex. `bohuslan-skargard.mdx` har
slug `bohuslans-skargard`). Läs alltid slug ur frontmatter, inte ur filnamnet. Verifiera mot
`claude-context.md` innan du skriver interna länkar.

---

## Nappkalender och säsongsmodell (src/data/calendar.ts)

`calendar.ts` är den centrala säsongsmodellen. Arter byggs som SPECIES med säsongskurva.
Modellen driver både nappkalendern (`/nappkalender/`, KalenderWidget) och startsidans
artchips (FiskeKarta), samt påverkar destinationssidornas poäng via `smhi.ts`.

- Fredningstider hanteras via `closedMonths` och visas som "Fredad" (slate-färg) genomgående.
- Regional förskjutning: `regionalDay` skjuter vårtoppar senare norrut och hösttoppar tidigare
  norrut (kallt vatten fryser till tidigare). Mellansverige är referens.
- Default-art i widgeten är Gädda.
- **Trösklarna ägs av `getScoreLabel`.** `SCORE_TOP` (72) och `SCORE_OK` (42) definieras bredvid
  `ANCHOR` i `calendar.ts`. Ingen vy får räkna om dem lokalt. Behöver en vy en annan indelning,
  exportera en ny namngiven funktion ur `calendar.ts` i stället.
- **`SCORE_TOP` och `ANCHOR.ok` är ett par.** Marginalen mellan dem (6 poäng) måste vara större än
  `moonAdjustment` som mest kan ge (+5), annars flippar hela platåmånader på månfasen ensam.
  Ändras det ena måste det andra följa med. Skälet står i `BESLUT.md`.
- Kalenderrutans färg, stapel, siffra och detaljpanelens etikett härleds alla ur totalpoängen.
  Månfasen syns bara som nyansdjup inom nivån, via `moonColorIntensity`.

---

## Utrustningssektionen: hur den är tänkt

`/utrustning/` listar kategorier (gear-categories).
`/utrustning/[kategori]/` listar produkter inom kategorin.
`/utrustning/test/[slug]/` visar enskild produktrecension.

Betyget är redaktionellt. Disclaimer visas automatiskt via [slug].astro.
CTA-texten är "Se pris hos FiskeOnline", aldrig ett fast pris.

**Priset kommer ur produktfeeden, inte ur frontmatter.** Är produkten nedsatt
visas kampanjpriset stort med ordinarie överstruket bredvid, plus raden
"pris hämtat [datum]". Utan feedträff visas `price` från frontmatter, och då
utan datum eftersom vi inte vet när det senast stämde. Priset i `productSchema`
följer alltid det synliga priset.
Produktbilder ligger i `public/images/gear/[slug].jpg`.
Kategorier med en relaterad guide länkar via `guideUrl` (linguiden, spöguiden).

### Prisklasser

**Spön:** budget under 800 kr, mellanklass 800–1 800 kr, premium 1 800–3 500 kr
**Haspelrullar:** budget under 600 kr, mellanklass 600–1 500 kr, premium 1 500–3 500 kr

`priceRange` sätts på ordinarie pris, aldrig på ett kampanjpris. Ett premiumspö
på rea ska inte glida ner i mellanklass så länge kampanjen pågår.

### Quiz (SpoQuiz)

SpoQuiz.tsx innehåller ingen hårdkodad produktdata. Allt hämtas dynamiskt från gear-reviews
via spovaljaren.astro (quizEnabled: true). Endast spön är quiz-kopplade. Övriga kategorier
(haspelrullar, trollingspon, flatlinor, fluorocarbon, nylon) visas bara under /utrustning/.

Planerat: ekolod (kräver annat affiliate-program), båtar (kräver direktpartnerskap),
rullväljare (quiz för haspelrullar, fas 2).

---

## Affiliate-setup

**Nätverk:** Adtraction (tidigare AdRecord, fusionerade maj 2026). Även CJ Affiliate och Awin.
**Godkända program:** FiskeOnline, Frilufts & Vildmark, Outdoorexperten, Scandinavian Outdoor, Outl1, Tacticalstore, Goingoutdoor
**Länkformat:** Baslänk + `&url=` + produktens URL hos butiken

### FiskeOnline

**Provision:** 11 % per order, Fair Tracking. Cookietid 45 dagar.
**Baslänk:** `https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1`
**Tillåtet:** betald annonsering, sociala medier, e-post, kupong, cashback, CSS, retargeting.
**Inte tillåtet:** annonser i sökmotorer.

```
https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1&url=https://fiskeonline.com/sv/produkt/[produkt-slug]/
```

OBS: FiskeOnline URL-sluggar använder bindestreck för decimaler, t.ex. `0-148mm` inte `0148mm`.
Med produktfeeden är det problemet borta, eftersom feeden ger den exakta URL:en.

**Provisionen sjunker till 4 % för cashback- och kupongsajter.** Bygg ingen
rabattkodssida utan att först ha rett ut om det omklassar hela kanalen.

**FiskeOnline finns även i Addrevenue** med identiska villkor, 11 % och 45 dagar.
Adtraction används ändå, eftersom spårningen är etablerad och en flytt inte ger
något mätbart. Se BESLUT.md.

### Outl1

**Baslänk:** `https://do.outl1.se/t/t?a=1728546059&as=2072765905&t=2&tk=1`
**Cookietid:** 30 dagar, alltså kortare än FiskeOnlines 45.
**Tillåtet:** annonser i sociala medier, cashback, lojalitet.
**Inte tillåtet:** rabattkoder, webbläsartillägg, CSS, retargeting, annonser i sökmotorer.

Villkoren är strängare än FiskeOnlines på flera punkter. **Rabattkoder är helt
förbjudna hos Outl1**, medan FiskeOnline tillåter dem mot lägre provision. En
rabattkodssida skulle alltså bryta mot Outl1:s villkor rakt av, inte bara sänka
ersättningen. CSS och retargeting är tillåtet hos FiskeOnline men inte här.

Produkt-URL:erna i Outl1:s feed har ett internt ID sist, `?var=NNNNN`. Våra
publicerade länkar ska inte ha det. Matchningen ignorerar querystring.

ID-mappning: Brand ID `1728546056`, Brand AD ID `1728546059`, Selected channel ID
`2072765905`. Samma mönster som FiskeOnline, alltså Brand AD ID i baslänken.

### Produktfeeds

Både FiskeOnline och Outl1 har produktfeed i Adtraction, i Google Shopping-format
(XML). Feeden hämtas vid byggtid av `src/lib/feed.ts` och används för priser.
Feed-URL:en kopieras från Adtraction under respektive annonsör.

**Annons-ID skiljer sig mellan publicerade länkar och feedens länkar.** Feeden
använder `1954031991` för FiskeOnline och `1728546061` för Outl1, medan vi
publicerar `1954031990` respektive `1728546059`.

Adtraction bekräftade 2026-08-14 att feedens ID är en systemgenererad, dold
annons som bara används internt. **Använd alltid ID:t från gränssnittet**, alltså
`1954031990` och `1728546059`. Kopiera aldrig in feedens länkar rakt av.

Ekonomiskt spelar valet ingen roll: båda tillhör samma program, attributionen
styrs av kanal-ID `2072765905`, och provisionen sätts på programnivå. Skillnaden
syns bara som "Custom link" mot "Product feed" på annonsnivå i rapporten.

**Alla länkar med feedträff bär `cupa_sku`**, alltså produktens `g:id`, placerad
**före** `&url=`. Adtraction URL-kodar inte målet, så en parameter efter `&url=`
hamnar i produktadressen i stället för i spårningen. Utan `cupa_sku` syns bara
att kanalen levererade en order, inte vilken produkt som sålde.

`add-product.py` och `feed-sok.mjs` bygger nya länkar med parametern.
`add-cupa-sku.mjs` lägger till den på befintliga. Värdet får vara högst 128
tecken. Produkter utan feedträff, alltså slutsålda och Fritid och Vildmark, får
ingen parameter och behöver ingen.

ID-mappning i Adtractions gränssnitt för FiskeOnline: Brand ID `1954031989`,
Brand AD ID `1954031990`, Selected channel ID `2072765905`. Det är Brand AD ID
plus kanal-ID som används i baslänken, inte Brand ID.

### Fritid och Vildmark

**Baslänk:** `https://go.fritidvildmark.se/t/t?a=2020679758&as=2072765905&t=2&tk=1`

**Djuplänkar byggs mot `shop.fritidvildmark.se`**, inte mot `fritidvildmark.se`.
Programmets godkända domän är shop-varianten, och en länk mot domänen utan
prefix avvisas med "Invalid link". Att adressen ändå fungerar i webbläsaren
beror på att webbläsaren följer omdirigeringen, vilket spårningen inte gör.

```
https://go.fritidvildmark.se/t/t?a=2020679758&as=2072765905&t=2&tk=1&url=https://shop.fritidvildmark.se/products/[produkt-slug]
```

Butikens slugs följer Shopify-mönstret `/products/<slug>` och matchar inte alltid
våra egna. Kontrollera med `curl -s -o /dev/null -w "%{http_code}"` utan `-L`,
så att en omdirigering inte döljer ett fel.

**Butiken har ingen feed.** Produkterna visar `price` från frontmatter, får
ingen `cupa_sku` och kontrolleras inte av `validate-feed.mjs`.

**Det betyder också att inget varnar när en produkt utgår ur sortimentet.**
I augusti 2026 hade fem av tolv ekolod försvunnit från butiken utan att det
märktes. Kontrollera sortimentet manuellt med jämna mellanrum.

Verifiera alltid att affiliate-URL:er returnerar 200 med URL-testskriptet nedan.

### Affiliate-disclosure
- "*Affiliatelänk. Vi tjänar en provision utan kostnad för dig.*" i AffiliateCard
- Kursiverad klausul längst ned på destinationssidor
- Disclaimer under betyget på produktsidor (automatisk via [slug].astro)

---

## Verktyg i projektroten

### check-content.mjs (`npm run check`)
Validerar innehåll och körs som CI-kontroll.

**Strukturfel (exit 1):** slug-korsreferenser, avslutande slash på interna länkar,
kategori- och slug-skiftläge, samt att gear-review `category` matchar en gear-kategoris
slug exakt.

**Språk och innehåll (varningar):** em-streck, en-streck före gemen, kampanjdatum och
ProduktRuta. Sedan augusti 2026 även tolv mönster som fångar redaktionella regelbrott:

- Prisrelativa jämförelser i kronor, t.ex. "800 kr mindre". De åldras inom dagar.
- Uppfunnen precision, t.ex. "90 procent av prestandan". Andelen går inte att mäta.
- Värdeomdömen om kvalitet: "marknadens bästa", "Sveriges främsta", "landets bästa".
  Träffar även Sydsveriges och Mellansveriges, eftersom delsträngen matchar.
- Superlativ om ett fiskevatten med "mest", t.ex. "världens mest kända vatten".
  Kräver att påståendet gäller fiske eller vatten, annars träffades geografiska
  beskrivningar som "världens mest trafikerade sund", vilket är en uppgift om
  sjöfart och inte om fiske.
- "utan konkurrens" och "inget jämförbart alternativ".
- Sammanskrivet "i dag" och ordet "gratis".
- Dubbla och spatierade bindestreck använda som tankstreck.
- Stycken på minst 200 tecken utan ett enda svenskt tecken, samt filer som
  saknar diakriter helt. Tabellrader och kodblock undantas, eftersom en
  specifikationstabell saknar diakriter av naturliga skäl.

Mönstren är heuristiska och därför varningar, inte fel. Prismönstret kräver ett jämförande
ord direkt efter beloppet, så "kostar 29 995 kr" passerar medan "800 kr mindre" fångas.

**Varför i kod och inte bara i BESLUT.md.** Reglerna skrevs i juli 2026, men 30 produktsidor
hade skapats i maj och juni och bröt mot dem utan att någon märkte det. En regel som bara
finns i ett dokument fångar ingenting i det som redan är publicerat. Se BESLUT.md.

Varje gång kontrollen skärpts har den hittat fel ingen visste fanns: 24 träffar när den
infördes, ytterligare 39 när superlativmönstret utökades med fler regioner, och fem filer
med delvis trasig teckenkodning som filnivåkontrollen släppt igenom. Superlativen är i
skrivande stund inte åtgärdade, de är varningar och stoppar inte bygget.

### validate-feed.mjs
Kontrollerar `gear-reviews` mot Adtractions produktfeeds. Kräver miljövariablerna,
kör som `node --env-file=.env validate-feed.mjs`. Rapporterar avvikelser, patchar
aldrig innehåll.

Fel är bara sådant som gör en sida trasig: saknad eller felformaterad
`affiliateUrl`, och `price` som inte är ett tal. Bara dessa fäller `--strict`.
Prisavvikelser, slutsålda produkter och fel annons-ID ger varning. Avvikelser
under 10 procent räknas bara samman. Flaggor: `--rea` listar pågående kampanjer,
`--json` ger maskinläsbar utdata, `--file` plus `--merchant` läser en enskild
feed från fil.

Körs även dagligen i `daily-rebuild.yml`.

### feed-sok.mjs
Söker i feedsen och skriver ut en kompakt post per produkt: titel, varumärke,
ordinarie och eventuellt kampanjpris, produkt-URL, bild, EAN och en färdig
affiliatelänk med `cupa_sku`. Varje träff märks NY eller FINNS utifrån om
produkten redan har en sida.

Avsett för att slå upp underlag som ska användas någon annanstans, exempelvis
när innehållet skrivs i editor eller chatt i stället för i terminalen.

```
node --env-file=.env feed-sok.mjs shimano haspelrulle --pris 800-2000 --ny
node --env-file=.env feed-sok.mjs --butik Outl1 --kort --antal 40
node --env-file=.env feed-sok.mjs --bild shimano-miravel-2500=27523
```

Sökordet kan vara fritext, en produkt-URL eller ett SKU. SKU-uppslaget är exakt
mot `g:id`, så ett produkt-ID ur `--kort`-listan går att slå upp direkt.

Flaggor: `--butik`, `--pris 500-1500`, `--typ`, `--antal`, `--ny`, `--kort`,
`--bild slug=SKU`.

OBS: fritextsökning matchar tecken för tecken utan att normalisera diakriter,
så `hav` träffar inte `håv`. Och `--typ` matchar `g:product_type`, som hos
FiskeOnline är en naken sifferkod och inte ett läsbart kategorinamn.

### add-cupa-sku.mjs
Lägger till `cupa_sku` i befintliga `affiliateUrl` utifrån feedens `g:id`.
Torrkörning som standard, `--apply` skriver filerna. Idempotent, och rör bara
produkter med feedträff.

Behövs normalt inte, eftersom nya produkter får parametern direkt. Kör den om
länkar byggts för hand eller om en tidigare slutsåld produkt kommit tillbaka i
feeden.

### fix-fallback-prices.mjs
Engångsverktyg som skriver om `price` i frontmatter till feedens ordinarie pris.
Torrkörning som standard, `--apply` skriver filerna. Byter bara ut raden när
nuvarande värde är exakt det förväntade.

Används när reservvärdena hamnat på reanivå, inte som löpande underhåll. Löpande
avvikelser bedöms redaktionellt utifrån `validate-feed.mjs`.

**Matchningslogiken är kopierad mellan `feed.ts`, `validate-feed.mjs`,
`fix-fallback-prices.mjs`, `feed-sok.mjs`, `add-cupa-sku.mjs` och
`add-product.py`.** Ändras normaliseringen i en av dem måste de andra
följa med. När det missades en gång rapporterade skriptet tyst noll träffar,
vilket såg ut som att allt stämde.

### generate-claude-context.sh
Bygger `claude-context.md`, den aggregerade ögonblicksbilden av projektet. Körs
efter varje push, och filen laddas upp till Claude-projektet.

Inkluderar src/, config, content, prompts och `.github/workflows/`. Rotens `.mjs`,
`.py` och `.sh` hittas automatiskt, så nya verktyg kommer med utan att någon
behöver minnas att lägga till dem. `src/data/` är exkluderat.

**Utförda engångsskript flyttas till `scripts/utford/`.** Ett migreringsskript
som redan körts ser ut som ett aktuellt verktyg, både när du listar roten och i
ögonblicksbilden, och alla är inte idempotenta.

### BESLUT.md
Beslutsregister. Innehåller ingen kod och inget innehåll, bara de beslut som inte är
självklara, skälet bakom dem, och vad som skulle få oss att ändra oss. `claude-context.md`
beskriver vad som finns, `BESLUT.md` beskriver varför. Det är den enda filen som är portabel
till en ny marknad. Se workflow-avsnittet längre ned för när en ny post ska föreslås.

### add-product.py
CLI för nya produkter. Skapar MDX med korrekt frontmatter och affiliate-länk. Hanterar
slug-generering, YAML-sanitering och affiliate-URL-byggnad automatiskt. Efteråt: spara
produktbild som `public/images/gear/[slug].jpg`, git commit.

### URL-testskript (kör i terminalen)
Testar alla affiliate-URL:er och rapporterar 404:or:

```bash
python3 << 'EOF'
import urllib.request, re, os, glob
folder = "src/content/gear-reviews"
errors = []
for filepath in sorted(glob.glob(os.path.join(folder, "*.mdx"))):
    with open(filepath, encoding="utf-8") as f:
        content = f.read()
    match = re.search(r'affiliateUrl:\s*"([^"]+)"', content)
    if not match: continue
    url_match = re.search(r'&url=(.+)', match.group(1))
    if not url_match: continue
    try:
        req = urllib.request.Request(url_match.group(1), headers={"User-Agent": "Mozilla/5.0"})
        urllib.request.urlopen(req, timeout=10)
    except urllib.error.HTTPError as e:
        errors.append((os.path.basename(filepath), url_match.group(1), e.code))
if errors:
    for name, url, code in errors:
        print(f"FEL {code}: {name}\n  {url}")
else:
    print("Alla URL:er OK")
EOF
```

---

## Workflow: föreslå alltid en post i BESLUT.md när ett beslut fattats

`BESLUT.md` förklarar **varför** sajten ser ut som den gör. Den är den enda filen som är
portabel till en ny marknad, eftersom koden inte är det. Den är också det som hindrar att
samma fråga utreds om från början i en senare session.

Claude ska därför **självmant föreslå** en post när ett arbete avslutas och något av
följande stämmer. Förslaget kommer i slutet av arbetet, medan mätvärden och alternativ
fortfarande är färska, inte som en separat uppgift senare.

- Ett val gjordes mellan två försvarbara alternativ, och det valda är inte självklart.
- En bugg visade sig ha en **strukturell** orsak, alltså inte ett skrivfel utan ett mönster
  som kan uppstå igen på andra ställen.
- En konstant, tröskel eller kalibrering ändrades, eller två konstanter visade sig hänga ihop.
- En kringgående lösning infördes vars skäl inte syns i koden.
- Något valdes medvetet bort, och skälet skulle annars utredas om av nästa person.
- En begränsning upptäcktes som är värd att känna till men inte värd att åtgärda nu.

Föreslå **inte** en post för rutinarbete: nytt innehåll, produkttillägg, uppenbara buggfixar,
formatering, textjusteringar.

**Format per post:** beslutet, skälet, och den tröskel som skulle ändra det. Ta med mätta
siffror när de finns, de är det som gör posten övertygande i efterhand. Skriv ut det konkreta
symptomet, inte bara principen.

**Kontrollera samtidigt** om klonavsnittet längst ned behöver en rad, alltså om principen är
portabel till en annan marknad även när talen är lokala.

---

## Workflow för att lägga till ny produkt

1. Kör `python3 add-product.py` och fyll i info
2. Spara produktbild som `public/images/gear/[slug].jpg`
3. Verifiera med URL-testskriptet
4. `node --env-file=.env validate-feed.mjs` för att kontrollera pris och länk mot feeden
5. `npm run check` för innehållsvalidering
6. `rm -rf .astro && npm run dev` för att rensa cache
7. `git status` och `git add` för nya filer, sedan `git commit`

---

## Innehållsmallar (prompts)

- `prompt_artsida.md`: species/-filer (10 sektioner, FAQ i frontmatter, targetTechniques styr teknikvisning)
- `prompt_destinationssida.md`: destinations/-filer (12 sektioner, kostrad efter geografi)
- `prompt_tekniksida.md`: techniques/-filer
- `prompt_produktsida.md`: redaktionellt innehåll i gear-reviews (category = gear-kategorins slug)
- `prompt_artikelsida.md`: articles/-filer (guider och artiklar)

---

## Språkregler (gäller all text på sajten)

- Korrekt svenska genomgående
- Inga em-streck (—) i löptext. Talstreck i sifferintervall (10–15 cm) är OK.
- Inga semikolon
- Inga ellipser
- Kolon bara för att introducera lista eller direkt förklaring
- "i dag" skrivs i två ord
- "kostnadsfri", inte "gratis"
- Inga specifika produktmodellnamn i teknik- eller artinnehåll
- Kortare meningar föredras

---

## Juridiska regler som alltid gäller

- Levande betesfisk är förbjudet i Sverige. Rekommendera det aldrig.
- Riktat torskfiske i Östersjön är förbjudet sedan 2025.
- Laxfiske i Östersjön: i grunden förbjudet sedan 2025, en fettfeneklippt lax per fiskare och dag får tas.
- Livsmedelsverkets dioxin/PCB-kostråd gäller Östersjön (ICES 24–32). Vatten mot Kattegatt/Skagerrak ligger utanför.
- Rekord: verifiera alltid mot Sportfiskarnas Storfiskregister (svenskt) och IGFA (världsrekord).

---

## Vad som är byggt vs. planerat

**Byggt:**
- Alla layouts och kärnkomponenter, samt React-öar (FiskeKarta, KalenderWidget, LinVäljare, DestinationMap, SpoQuiz)
- 41 destinationssidor, 32 artsidor, 9 tekniksidor, 3 artiklar/guider
- 6 gear-categories och 50 gear-reviews med affiliate-länkar och redaktionellt innehåll
- Nappkalender med säsongsmodell i calendar.ts, fredningstider, regional förskjutning
- Linguide (`valja-fiskelina`) med interaktiv LinVäljare, plus fluorocarbon- och nylon-kategorier
- SMHI-integration vid byggtid, daglig automatisk ombyggnad via GitHub Actions
- SpoQuiz med dynamisk matchning, GA4-tracking, RSS, 404, cookie-policy, sök
- check-content.mjs, generate-claude-context.sh, add-product.py, URL-testskript

**Saknas / att göra:**
- Artfiltrets gruppering (Rovfisk/Laxfisk/Vitfisk/Kust)
- Programmatisk SEO: art × destination × tid, med kvalitetsgrind mot tunna sidor
- Pagefind-baserad fulltextsök (nuvarande /sok/ söker bara titel och beskrivning)
- Hero som `<img>` i stället för CSS background-image (indexeras inte av Google Images i dag)
- Ekolod-kategori när affiliate-program är klart, rullväljare (fas 2)
- Trolling- och beten-innehåll (identifierade gear-luckor)
