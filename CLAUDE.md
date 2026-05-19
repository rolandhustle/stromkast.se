# CLAUDE.md — Strömkast.se

Projektkontext för Claude. Uppdatera den här filen när ny infrastruktur tillkommer eller beslut ändras.

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
- **Interaktiva öar:** React (SpoQuiz, DestinationMap)
- **Hosting:** Cloudflare Pages (troligt) / Vercel
- **Analytics:** Google Tag Manager (G-BP2R8TQWQP), Cloudflare Web Analytics
- **Fonts:** Bitter 700 (display/rubriker), Inter variable (brödtext), självhostad under `/fonts/`

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
│   ├── DestinationMap.tsx      React-ö för karta
│   ├── Footer.astro
│   ├── Header.astro
│   ├── NewsletterForm.astro
│   ├── SEO.astro               Hanterar title, description, OG, schema, canonical
│   └── quiz/SpoQuiz.tsx        React-ö, interaktiv spöväljare (dynamisk matchning)
├── content/
│   ├── articles/               MDX, kategori: destination|teknik|utrustning|guide
│   ├── authors/                JSON
│   ├── destinations/           MDX (bolmen, malaren, morrum, storsjon, vanern, vattern)
│   ├── gear-categories/        JSON (spon) — ekolod och gaddspon är borttagna
│   ├── gear-reviews/           JSON — 14 riktiga spön med affiliate-länkar (se nedan)
│   ├── species/                MDX (abborre, asp, gadda, gos, harr, lax, oring)
│   └── techniques/             MDX (flugfiske, isfiske, jiggfiske)
├── layouts/
│   └── BaseLayout.astro        HTML-skal, importerar Header/Footer/ConsentBanner/SEO
├── lib/
│   └── track.ts                Typed wrapper för dataLayer-events
├── pages/
│   ├── index.astro
│   ├── arter/[slug].astro + index.astro
│   ├── destinationer/[slug].astro + index.astro
│   ├── forhallanden/index.astro
│   ├── guider/[slug].astro + index.astro
│   ├── nyhetsbrev/index.astro
│   ├── om/index.astro
│   ├── sok/index.astro
│   ├── spovaljaren.astro       Hämtar gear-reviews med quizEnabled=true, skickar till SpoQuiz
│   ├── teknik/[slug].astro + index.astro
│   ├── utrustning/
│   │   ├── index.astro         Kategorilista (hämtar gear-categories)
│   │   ├── [kategori].astro    Produktlista per kategori (filtrerar gear-reviews på category)
│   │   └── test/[slug].astro   Enskild produktrecension med disclaimer på betyg
│   ├── cookiepolicy.astro
│   ├── 404.astro
│   └── rss.xml.ts
└── styles/
    ├── global.css
    └── tokens.css
```

---

## Content collections — scheman (src/content.config.ts)

### destinations
```ts
title, slug, description, heroImage,
lat: number, lng: number,
län: string,
primarySpecies: string[],
waterType: 'lake' | 'river' | 'coastal' | 'stream',
iFiskeUrl: string (url),
recommendedGear: string[],
publishedAt: string, updatedAt: string
```

### species
```ts
title, slug, description, heroImage,
season?: string,
techniques?: string[],
targetTechniques?: string[],
gearRecs?: string[],
topDestinations?: string[]
```

### techniques
```ts
title, slug, description, heroImage,
targetSpecies: string[],
difficulty: 'nybörjare' | 'mellannivå' | 'avancerad'
```

### gear-categories
```ts
title, slug, description, heroImage
```

### gear-reviews
```ts
title, slug, description, heroImage,
brand: string,
category: string,          // matchar slug i gear-categories, t.ex. "spon"
price: number,             // SEK, statiskt — speglar inte butikens aktuella pris
rating: number (0–5),      // redaktionellt betyg baserat på specs och rykte, ej eget test
pros: string[],
cons: string[],
affiliateUrl: string,      // spårad Adtraction-länk
merchant: string,          // t.ex. "FiskeOnline"
featured: boolean,         // "Bästa val"-badge, rust-border
budgetPick: boolean,       // "Bästa budget"-badge, copper-badge
targetSpecies: string[],   // quiz-matchning: abborre|gadda|gos|oring|lax|harr|havsoring
techniques: string[],      // quiz-matchning: jigg|dropshot|spinn|wobbler|flugfiske|mete|trolling|isfiske
priceRange: string,        // quiz-matchning: budget|mellanklass|premium
quizEnabled: boolean       // true = visas i SpoQuiz
```

### articles
```ts
title, slug, description, heroImage,
publishedAt, updatedAt,
author: string,
category: 'destination' | 'teknik' | 'utrustning' | 'guide'
```

### authors
```ts
name, slug, bio, photo,
expertise: string[],
social?: { instagram?, twitter? }
```

---

## Utrustningssektionen — hur den är tänkt

`/utrustning/` listar kategorier (gear-categories).
`/utrustning/[kategori]/` listar produkter inom kategorin (gear-reviews filtrerade på category-fält).
`/utrustning/test/[slug]/` visar enskild produktrecension med pros/cons och affiliate-CTA.

Produkterna är handplockade och läggs in som JSON-filer i `gear-reviews/`.
Priset i JSON är statiskt och speglar inte butikens aktuella pris.
CTA-texten är "Se pris hos FiskeOnline", inte ett fast pris.
Betyget är redaktionellt baserat på specs och rykte — disclaimer visas automatiskt på produktsidan.

### Produktbilder

Bilder ligger i `public/images/gear/` med enkla slug-baserade filnamn, t.ex. `westin-w3-finesse-jig-3rd.jpg`.
heroImage i JSON pekar på `/images/gear/[slug].jpg`.
Bilder laddas ner manuellt från FiskeOnline och sparas med enkelt filnamn direkt.

### Spökategorier och quiz-koppling

Spön är uppdelade i två spår:

**Quiz-kopplade kategorier (fas 1, FiskeOnline):**
Dessa kategorier matas in i SpoQuiz och ger personliga rekommendationer.
- Abborrspön — 6 produkter (jigg/dropshot + haspel, budget + mellanklass + premium)
- Gäddspön — 6 produkter (spinn + jigg, budget + mellanklass + premium)
- Gösspön — 2 produkter (mellanklass + premium, Mikado Inazuma delas med abborre)

Totalt 14 produkter i fas 1. Quizen matchar dynamiskt på targetSpecies, techniques och priceRange.
SpoQuiz.tsx innehåller ingen hårdkodad produktdata — allt hämtas från gear-reviews via spovaljaren.astro.

Prisklasser i quizen:
- Budget: under 800 kr (quiz-etikett "Under 1 000 kr")
- Mellanklass: 800–1 800 kr (quiz-etikett "1 000–2 000 kr")
- Premium: 1 800–3 500 kr (quiz-etikett "2 000–4 000 kr")

**Kategorier utanför quizen (läggs till på sikt, visas bara på /utrustning/):**
- `havsfiske-spon` — havsöring, torsk, makrill
- `trolling-spon`
- `met-spon`
- `ekolod` — prioriterat nästa steg, kräver annat affiliate-program än FiskeOnline
- `battar` — kräver direktpartnerskap, inte standard affiliate

### Befintliga gear-reviews (fas 1)

| Slug | Art | Teknik | Prisklass |
|---|---|---|---|
| mikado-inazuma-pro-zander | abborre, gos | jigg, dropshot | budget |
| shimano-nexave-haspelspo-191m | abborre | spinn, jigg | budget |
| westin-w3-finesse-tc-2nd | abborre | jigg, dropshot, spinn | mellanklass |
| westin-w3-finesse-jig-3rd | abborre | jigg, dropshot | mellanklass |
| shimano-expride-haspelspo-198m | abborre | dropshot, jigg | premium |
| westin-w6-dropshot-haspelspo | abborre | dropshot | premium |
| kinetic-xarann-predator-trigger-ct | gadda | spinn, wobbler, jigg | budget |
| westin-w2-powercast-t-spinnspo | gadda | spinn, wobbler, jigg | mellanklass |
| westin-w3-hybridcast-t-3rd | gadda, gos | spinn, wobbler, jigg | mellanklass |
| shimano-yasei-bb-pike-xh | gadda | spinn, wobbler | mellanklass |
| westin-w6-powercast-t-spinnspo | gadda | spinn, wobbler, jigg | premium |
| bft-lizzard-x-stefan-trumstedt | gadda | spinn, wobbler, jigg | premium |
| westin-w3-powerteez-3rd | gos | jigg, dropshot | mellanklass |
| westin-w6-powerteez-haspelspo | gos | jigg, dropshot | premium |

### Godkända affiliate-program per kategori

| Program | Kategorier |
|---|---|
| FiskeOnline | Alla spökategorier fas 1 |
| Frilufts & Vildmark | Kläder, tillbehör (framtida) |
| Outdoorexperten | Kläder, tillbehör (framtida) |
| Scandinavian Outdoor | Kläder, tillbehör (framtida) |

---

## Affiliate-setup

**Nätverk:** Adtraction (tidigare AdRecord, fusionerade maj 2026)
**Godkända program:** FiskeOnline, Frilufts & Vildmark, Outdoorexperten, Scandinavian Outdoor
**FiskeOnline provision:** 11% per order
**FiskeOnline baslänk:** `https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1`
**Länkformat:** Baslänk + `&url=` + produktens URL på FiskeOnline

Exempel:
```
https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1&url=https://fiskeonline.com/sv/produkt/[produkt-slug]/
```

FiskeOnline har ingen produktfeed i Adtraction — länkar byggs manuellt eller via add-product.py.

Affiliate-disclosure visas:
- Som "*Affiliatelänk. Vi tjänar en provision utan kostnad för dig.*" i AffiliateCard
- Som kursiverad klausul längst ned på destinationssidor
- Som disclaimer under betyget på produktsidor (automatisk via [slug].astro)

Tracking: `affiliate_click`-event via dataLayer (merchant, product_id, position, page_type).
Se `src/lib/track.ts` och script-blocket i `AffiliateCard.astro`.

---

## Workflow för att lägga till ny produkt

Använd skriptet `add-product.py` i projektroten:

```bash
python3 add-product.py
```

Skriptet guidar dig igenom: URL, namn, pris, art, teknik, prisklass, pros/cons.
Det skapar JSON-filen och fyller i affiliate-länken automatiskt.

Manuella steg efteråt:
1. Spara produktbild som `public/images/gear/[slug].jpg`
2. Kontrollera pros/cons
3. `git add . && git commit -m "feat: lägg till [produktnamn]"`

---

## AffiliateCard.astro — props

```ts
title: string
brand: string
price: number
rating: number
description: string
image: string
affiliateUrl: string
merchant: string
slug?: string          // om satt, länkas rubriken till /utrustning/test/[slug]/
featured?: boolean     // "Bästa val"-badge, rust-border
budgetPick?: boolean   // "Bästa budget"-badge, copper-badge
```

---

## Innehållsmallar (prompts)

Tre promptfiler styr hur nytt innehåll ska skrivas:
- `prompt_artsida.md` — för species/-filer
- `prompt_destinationssida.md` — för destinations/-filer
- `prompt_tekniksida.md` — för techniques/-filer
- `prompt_produktsida.md` — för redaktionellt innehåll i gear-reviews MDX-filer

Dessa definierar frontmatter-format, innehållsstruktur, språkregler och juridiska kontroller.
Följ dem alltid när nytt innehåll i dessa kategorier skapas.

---

## Språkregler (gäller all text på sajten)

- Korrekt svenska genomgående
- Inga em-streck (—) i löptext. Talstreck i sifferintervall (10–15 cm) är OK.
- Inga semikolon
- Kolon bara för att introducera lista eller direkt förklaring
- "i dag" skrivs i två ord
- "Stimmen" (inte "stimen") i bestämd form plural
- Kortare meningar föredras

---

## Juridiska regler som alltid gäller

- Levande betesfisk är förbjudet i Sverige. Rekommendera det aldrig.
- Riktat torskfiske i Östersjön är förbjudet sedan 2025.
- Laxfiske i Östersjön: i grunden förbjudet sedan 2025, en fettfeneklippt lax per fiskare och dag får tas.
- Rekord: verifiera alltid mot Sportfiskarnas Storfiskregister (svenskt) och IGFA (världsrekord).

---

## Vad som är byggt vs. planerat

**Byggt och redaktionellt godkänt:**
- Alla layouts och kärnkomponenter (BaseLayout, Header, Footer, SEO, AffiliateCard, ConsentBanner)
- 6 destinationssidor (redaktionellt innehåll, ej platshållare)
- 7 artsidor (redaktionellt innehåll, ej platshållare)
- 3 tekniksidor (redaktionellt innehåll, ej platshållare)
- Utrustningssidornas sidmallar (index, [kategori], test/[slug])
- 14 gear-reviews med riktiga affiliate-länkar, bilder och redaktionellt innehåll
- 1 gear-category: spon.json
- SpoQuiz (React) — dynamisk matchning mot gear-reviews, inga hårdkodade produkter
- DestinationMap (React)
- GTM/GA4-integration, dataLayer-tracking för affiliate-klick
- RSS, 404, cookie-policy, nyhetsbrev, om-sida
- add-product.py — CLI-skript för att lägga till nya produkter

**Platshållare — ska inte behandlas som godkänt innehåll:**
- `src/content/articles/` — basta-ekolodet-2026.mdx och jiggfiske-for-nyborjare.mdx
  är platshållare. Ersätt med redaktionellt granskade artiklar.

**Saknas / att göra:**
- Fler tekniksidor (spinnfiske, mete, drop-shot, trolling)
- Ekolod-kategori när affiliate-program är klart
- Fler produkter i befintliga kategorier
- Programmatiska sidor i större skala
- Redaktionella artiklar (ersätt platshållare)
