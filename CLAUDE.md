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
│   ├── gear-categories/        JSON — se lista nedan
│   ├── gear-reviews/           MDX — se lista nedan
│   ├── species/                MDX (abborre, asp, gadda, gos, harr, lax, oring)
│   └── techniques/             MDX (flugfiske, isfiske, jiggfiske)
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   └── track.ts
├── pages/
│   ├── index.astro
│   ├── arter/[slug].astro + index.astro
│   ├── destinationer/[slug].astro + index.astro
│   ├── forhallanden/index.astro
│   ├── guider/[slug].astro + index.astro
│   ├── nyhetsbrev/index.astro
│   ├── om/index.astro
│   ├── sok/index.astro
│   ├── spovaljaren.astro
│   ├── teknik/[slug].astro + index.astro
│   ├── utrustning/
│   │   ├── index.astro
│   │   ├── [kategori].astro
│   │   └── test/[slug].astro
│   ├── cookiepolicy.astro
│   ├── 404.astro
│   └── rss.xml.ts
└── styles/
    ├── global.css
    └── tokens.css
```

---

## Content collections — scheman (src/content.config.ts)

### gear-reviews (MDX)
```ts
title, slug, description, heroImage,
brand: string,
category: string,          // matchar slug i gear-categories
price: number,             // SEK, statiskt
rating: number (0–5),      // redaktionellt betyg, ej eget test
pros: string[],
cons: string[],
affiliateUrl: string,
merchant: string,
featured: boolean,
budgetPick: boolean,
targetSpecies: string[],   // abborre|gadda|gos|oring|lax|harr|havsoring
techniques: string[],      // jigg|dropshot|spinn|wobbler|jerkbait|flugfiske|mete|trolling|isfiske
priceRange: string,        // budget|mellanklass|premium
quizEnabled: boolean
```

OBS: gear-reviews använder MDX (inte JSON). Filformat är frontmatter + löptext.
Astro cachar aggressivt — kör alltid `rm -rf .astro && npm run dev` efter nya MDX-filer.
Specialtecken som apostrof och citattecken i titlar (t.ex. 7'0") kraschar YAML-parsern.
`add-product.py` hanterar detta automatiskt. Vid manuell skapning: undvik ' och " i frontmatter-strängar.

---

## Gear-categories (befintliga)

| Slug | Titel | Kategori |
|---|---|---|
| spon | Fiskespön | Quiz-kopplad |
| haspelrullar | Haspelrullar | Ej quiz |
| trollingspon | Trollingspön | Ej quiz |
| flatlinor | Flätlinor | Ej quiz |

---

## Gear-reviews (befintliga)

### Spön — quiz-kopplade (quizEnabled: true)

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

### Spön — ej quiz (quizEnabled: false)

| Slug | Prisklass |
|---|---|
| shimano-26-zodias-haspelspo | premium |
| bft-ninety-two-mimic-stick | mellanklass |
| bft-raptor-g2-jerkbait | budget |
| westin-w6-jerk-swimbait-t-2nd | premium |

### Haspelrullar (category: haspelrullar, quizEnabled: false)

| Slug | Prisklass |
|---|---|
| shimano-nexave-fi-2500 | budget |
| kinetic-marshall-4000-fd | budget |
| kinetic-brutalis-5000-fd | budget |
| okuma-ceymar-hd-2500a | mellanklass |
| okuma-inspira-2500a | mellanklass |
| shimano-miravel-2500 | mellanklass |
| westin-w3-4000-fd | mellanklass |
| okuma-itx-cb-2500h | mellanklass |
| shimano-stradic-fm-c3000-hg | mellanklass |
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

---

## Utrustningssektionen — hur den är tänkt

`/utrustning/` listar kategorier (gear-categories).
`/utrustning/[kategori]/` listar produkter inom kategorin.
`/utrustning/test/[slug]/` visar enskild produktrecension.

Betyget är redaktionellt — disclaimer visas automatiskt via [slug].astro.
CTA-texten är "Se pris hos FiskeOnline", aldrig ett fast pris.
Produktbilder ligger i `public/images/gear/[slug].jpg`.

### Prisklasser

**Spön:**
- Budget: under 800 kr
- Mellanklass: 800–1 800 kr
- Premium: 1 800–3 500 kr

**Haspelrullar:**
- Budget: under 600 kr
- Mellanklass: 600–1 500 kr
- Premium: 1 500–3 500 kr

### Quiz-kopplade spökategorier (SpoQuiz)

SpoQuiz.tsx innehåller ingen hårdkodad produktdata.
Allt hämtas dynamiskt från gear-reviews via spovaljaren.astro (quizEnabled: true).
Tekniker i quizen: jigg, dropshot, spinn, wobbler, jerkbait, unsure.

**Kategorier utanför quizen (visas bara på /utrustning/):**
- haspelrullar, trollingspon, flatlinor
- ekolod (prioriterat nästa steg, kräver annat affiliate-program)
- battar (kräver direktpartnerskap)

---

## Affiliate-setup

**Nätverk:** Adtraction (tidigare AdRecord, fusionerade maj 2026)
**Godkända program:** FiskeOnline, Frilufts & Vildmark, Outdoorexperten, Scandinavian Outdoor, Outl1, Tacticalstore, Goingoutdoor
**FiskeOnline provision:** 11% per order, Fair Tracking
**FiskeOnline baslänk:** `https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1`
**Länkformat:** Baslänk + `&url=` + produktens URL på FiskeOnline

```
https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1&url=https://fiskeonline.com/sv/produkt/[produkt-slug]/
```

OBS: FiskeOnline URL-sluggar använder bindestreck för decimaler, t.ex. `0-148mm` inte `0148mm`.
Verifiera alltid att affiliate-URL:er returnerar 200 med URL-testskriptet nedan.

FiskeOnline har ingen produktfeed i Adtraction — länkar byggs manuellt eller via add-product.py.

### Affiliate-disclosure
- "*Affiliatelänk. Vi tjänar en provision utan kostnad för dig.*" i AffiliateCard
- Kursiverad klausul längst ned på destinationssidor
- Disclaimer under betyget på produktsidor (automatisk via [slug].astro)

### Programtabell

| Program | Kategorier |
|---|---|
| FiskeOnline | Spön, rullar, linor, trolling |
| Frilufts & Vildmark | Kläder, tillbehör (framtida) |
| Outdoorexperten | Kläder, tillbehör (framtida) |
| Scandinavian Outdoor | Kläder, tillbehör (framtida) |
| Outl1 | Båtar, elvmotorer, båttillbehör (framtida) |
| Tacticalstore | Kläder, tillbehör (framtida) |
| Goingoutdoor | Kläder, tillbehör (framtida) |

---

## Verktyg i projektroten

### add-product.py
CLI-skript för att lägga till nya produkter. Skapar MDX-fil med korrekt frontmatter och affiliate-länk.

```bash
python3 add-product.py
```

Hanterar automatiskt: slug-generering, YAML-sanitering av specialtecken, affiliate-URL-byggnad.
Manuella steg efteråt: spara produktbild som `public/images/gear/[slug].jpg`, git commit.

### URL-testskript (kör i terminalen)
Testar alla affiliate-URL:er och rapporterar 404:or:

```bash
python3 << 'EOF'
import urllib.request, re, os, glob
folder = "src/content/gear-reviews"
errors = []
for filepath in sorted(glob.glob(os.path.join(folder, "*.mdx"))):
    with open(filepath) as f:
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

### convert-gear-reviews.py
Konverterar gear-reviews från JSON till MDX (engångsverktyg, redan kört).

---

## Workflow för att lägga till ny produkt

1. Kör `python3 add-product.py` och fyll i info
2. Spara produktbild som `public/images/gear/[slug].jpg`
3. Verifiera med URL-testskriptet
4. `rm -rf .astro && npm run dev` för att rensa cache
5. `git add . && git commit -m "feat: lägg till [produktnamn]"`

---

## Innehållsmallar (prompts)

- `prompt_artsida.md` — för species/-filer
- `prompt_destinationssida.md` — för destinations/-filer
- `prompt_tekniksida.md` — för techniques/-filer
- `prompt_produktsida.md` — för redaktionellt innehåll i gear-reviews MDX-filer

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
- Alla layouts och kärnkomponenter
- 6 destinationssidor, 7 artsidor, 3 tekniksidor
- Utrustningssidornas sidmallar (index, [kategori], test/[slug])
- 42 gear-reviews med affiliate-länkar, bilder och redaktionellt innehåll
- 4 gear-categories: spon, haspelrullar, trollingspon, flatlinor
- SpoQuiz — dynamisk matchning, jerkbait tillagt som teknikval
- GTM/GA4, dataLayer-tracking, RSS, 404, cookie-policy
- add-product.py, URL-testskript, convert-gear-reviews.py

**Platshållare:**
- `src/content/articles/` — basta-ekolodet-2026.mdx och jiggfiske-for-nyborjare.mdx

**Saknas / att göra:**
- Fler tekniksidor (spinnfiske, mete, drop-shot, trolling)
- Ekolod-kategori när affiliate-program är klart
- Guide: "Så väljer du rätt flätlina" (planerad, skrivs i separat chatt)
- Rullväljare (quiz för haspelrullar, fas 2)
- Redaktionella artiklar (ersätt platshållare)
- Programmatiska sidor i större skala
