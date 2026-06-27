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
- **Daglig automatisk ombyggnad** håller väderdatan färsk:
  - Schemalagt GitHub Actions-workflow: `.github/workflows/daily-rebuild.yml`,
    schema `0 5 * * *` (UTC = 06–07 svensk tid). `workflow_dispatch` finns
    för manuell körning.
  - Workflowet POST:ar mot en Vercel deploy hook, vilket startar ett nytt bygge.
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
price: number,             // SEK, statiskt (rek. cirkapris, ej reapris)
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

## Gear-reviews (50 st)

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

---

## Utrustningssektionen: hur den är tänkt

`/utrustning/` listar kategorier (gear-categories).
`/utrustning/[kategori]/` listar produkter inom kategorin.
`/utrustning/test/[slug]/` visar enskild produktrecension.

Betyget är redaktionellt. Disclaimer visas automatiskt via [slug].astro.
CTA-texten är "Se pris hos FiskeOnline", aldrig ett fast pris.
Produktbilder ligger i `public/images/gear/[slug].jpg`.
Kategorier med en relaterad guide länkar via `guideUrl` (linguiden, spöguiden).

### Prisklasser

**Spön:** budget under 800 kr, mellanklass 800–1 800 kr, premium 1 800–3 500 kr
**Haspelrullar:** budget under 600 kr, mellanklass 600–1 500 kr, premium 1 500–3 500 kr

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
**FiskeOnline provision:** 11% per order, Fair Tracking
**FiskeOnline baslänk:** `https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1`
**Länkformat:** Baslänk + `&url=` + produktens URL på FiskeOnline

```
https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1&url=https://fiskeonline.com/sv/produkt/[produkt-slug]/
```

OBS: FiskeOnline URL-sluggar använder bindestreck för decimaler, t.ex. `0-148mm` inte `0148mm`.
Verifiera alltid att affiliate-URL:er returnerar 200 med URL-testskriptet nedan.
FiskeOnline har ingen produktfeed i Adtraction. Länkar byggs manuellt eller via add-product.py.

### Affiliate-disclosure
- "*Affiliatelänk. Vi tjänar en provision utan kostnad för dig.*" i AffiliateCard
- Kursiverad klausul längst ned på destinationssidor
- Disclaimer under betyget på produktsidor (automatisk via [slug].astro)

---

## Verktyg i projektroten

### check-content.mjs (`npm run check`)
Validerar innehåll och körs som CI-kontroll. Regler: slug-korsreferenser, avslutande slash på
interna länkar, kategori-/slug-skiftläge, samt att gear-review `category` matchar en
gear-kategoris slug exakt. Stämmer även av språkregler (em-streck, en-streck före gemen, m.m.).

### generate-claude-context.sh
Aggregerar projektets faktiska filinnehåll till `claude-context.md`, som laddas upp till
Claude-projektet och ersätter tidigare version. Inkluderar src/, config, content, prompts,
`check-content.mjs` och `.github/workflows/`. Kör om och ladda upp på nytt när innehåll ändras.

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

## Workflow för att lägga till ny produkt

1. Kör `python3 add-product.py` och fyll i info
2. Spara produktbild som `public/images/gear/[slug].jpg`
3. Verifiera med URL-testskriptet
4. `npm run check` för innehållsvalidering
5. `rm -rf .astro && npm run dev` för att rensa cache
6. `git status` och `git add` för nya filer, sedan `git commit`

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
- Nappkalender våg 2: kustarter (makrill, horngädda) kopplat till havsfiske
- Artfiltrets gruppering (Rovfisk/Laxfisk/Vitfisk/Kust)
- Programmatisk SEO: art × destination × tid, med kvalitetsgrind mot tunna sidor
- Pagefind-baserad fulltextsök (nuvarande /sok/ söker bara titel och beskrivning)
- Hero som `<img>` i stället för CSS background-image (indexeras inte av Google Images i dag)
- Ekolod-kategori när affiliate-program är klart, rullväljare (fas 2)
- Trolling- och beten-innehåll (identifierade gear-luckor)
