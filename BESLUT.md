# Beslutsregister

Den här filen förklarar **varför** Strömkast ser ut som den gör. Den innehåller ingen kod och inget innehåll, bara de beslut som inte är självklara, skälet bakom dem, och vad som skulle få oss att ändra oss.

`claude-context.md` beskriver *vad* som finns. Den här filen beskriver *varför*. När ett beslut ifrågasätts, eller när sajten ska klonas till en ny marknad, är det den här filen som är portabel. Koden är det inte.

Format per post: beslutet, skälet, och den tröskel som skulle ändra det.

---

## Data och modell

### Vattenföring vägs inte in i betningspoängen

**Beslut.** Nappkalenderns poäng bygger på säsong, månfas och väder. Flödet visas som egen data men påverkar inte poängen.

**Skäl.** Det finns ingen publicerad, artspecifik modell för hur flöde påverkar bett i svenska vatten. De starkaste beläggen (Alabaster 1970, Gaula-studien 1999, Otero 2011) gäller laxfiskars uppvandring och årsvariation, inte fångst per ansträngning en given dag. Att bygga en flödesterm hade betytt att uppfinna koefficienter, alltså precis den falska precision resten av modellen är byggd för att undvika.

**Vad som skulle ändra det.** En peer-reviewed studie som visar ett statistiskt signifikant, artspecifikt samband mellan flöde och fångst per ansträngning, med publicerade koefficienter, i nordiska vatten.

---

### Vattenföringsstationer är handplockade, inte algoritmiskt matchade

**Beslut.** `hydro-stations.ts` är en kurerad tabell där varje älv har fått sin station manuellt.

**Skäl.** Närmaste station efter fågelvägen är fel matchning för flöde. Ett flöde har bara betydelse i sitt eget vattendrag. En kartläggning av alla 23 älvdestinationer gav falska träffar i sju fall:

- Göta älv: närmaste var Vrångebäcken, 279 km². Huvudfåran är Vargön, 46 883 km².
- Helge å: närmaste var Köpinge, 2 km². Det är ett dike.
- Nissan: närmaste stationen ligger i Fylleån, en annan å.
- Klarälven: närmaste var Edsvalla, som sitter i Norsälven.
- Dammån: närmaste var Sällsjön, som avvattnas åt motsatt håll.

Att visa ett dikes flöde som Helge ås hade varit ett tyst fel, alltså ett som ser rimligt ut och därför aldrig upptäcks.

**Varför namnmatchning inte heller duger.** SMHI:s fält `catchmentName` anger **huvud**avrinningsområdet, inte vattendraget. Gimån redovisas under Ljungan, Vindelälven under Umeälven, Klarälven under Göta älv. Namnet ensamt kan alltså inte skilja huvudfåra från biflöde.

**Vad som avgör.** Rätt vattendrag, rimlig `catchmentSize` för huvudfåran, aktiv station, och först därefter avstånd. En station som täcker mer än halva systemets areal kan inte sitta i ett biflöde, och det är den enda geometriska regel som håller.

**Vad som skulle ändra det.** En datakälla som anger vattendragets namn per station, inte bara huvudavrinningsområdet. Då blir automatisk matchning möjlig.

---

### Bara 13 av 23 älvar visar vattenföring

**Beslut.** Ångermanälven, Indalsälven, Mellanljusnan, Dalälven, Klarälven, Göta älv, Ätran, Nissan, Lagan och Dammån saknar flödesdata.

**Skäl.** Hydroobs har tre perioder: `latest-hour`, `latest-day` och `corrected-archive`. Kraftbolagens stationer (KRV) levererar med eftersläpning och har **bara** arkivet, som ligger veckor efter. De får alltså aldrig ett aktuellt värde, trots att de är märkta `active` i stationslistan.

För de tio älvarna finns ingen station i **rätt** vattendrag med aktuell data. Alternativen SMHI erbjuder ligger i biflöden (Röån 584 km² mot Ångermanälvens 30 638) eller i fel vatten (Säffle sitter i Byälven).

**Ett tomt fält är bättre än en siffra från fel älv.**

**Bieffekt värd att notera.** Det som blir kvar är inte slumpmässigt. Kvar är alla fyra nationalälvar plus Gimån och Byskeälven, alltså just de **oreglerade** vattnen där flödet speglar naturlig avrinning och faktiskt betyder något. Det vi tappar är i huvudsak reglerade kraftverksälvar, där korttidsflödet ändå styrs av turbinschemat snarare än av väder.

**Vad som skulle ändra det.** Att SMHI:s S-HYPE-modelldata går att automatisera vid byggtid. Den skulle täcka de tio, tydligt märkt som modell och inte mätning. Vattenwebb är dock en nedladdningsportal och inte ett API, så det är osäkert.

---

### Flödessiffran visas alltid med historiskt sammanhang

**Beslut.** Varje flöde visas med en etikett (mycket lågt, lågt, normalt, högt, mycket högt för årstiden) och med vad stationen normalt visar den månaden.

**Skäl.** En naken siffra säger ingenting. "0,2 m³/s" är meningslöst för en läsare. "0,2 m³/s, mycket lågt, normalt för juli är 8,4" säger allt.

Det ger dessutom ett skydd. När Helge å visade 0,2 för ett avrinningsområde på 3 668 km² misstänkte vi först en trasig station. Arkivet visade att stationens lägsta julivärde är 0,0 och medianen 8,4, alltså att stationen var frisk och Skåne extremt torrt. Utan normalerna hade läsaren inte kunnat göra den bedömningen, och en verkligt trasig station hade sett likadan ut.

Normalerna räknas ur SMHI:s korrigerade arkiv **en gång** och checkas in, eftersom de är historiska. Att hämta flera megabyte arkiv per station vid varje bygge vore slösaktigt och skört.

---

### Bästa dagen pekas ut bara när skillnaden är verklig

**Beslut.** Tiodagarsutsikten utser en bästa dag bara när den är minst 8 råpoäng bättre än ett **typiskt** dygn (medianen) **och** när det typiska dygnet ligger i ett lägre läge än det bästa.

**Skäl.** Det ursprungliga måttet var spridning, alltså max minus min. Det var fel. En vecka med nio likvärdiga dygn och ett uselt får stor spridning, men den nyttiga informationen är då vilket dygn man ska undvika, inte vilket man ska välja.

Testat mot alla 48 destinationers riktiga data: Torneträsk hade spridning 23 men överbest bara 5, alltså drevs spridningen av ett dåligt dygn. Stockholms skärgård hade samma överbest (8) som Hornavan men halva spridningen, och behandlades därför olika trots identisk signal.

Det andra villkoret finns för att nästan alla vatten når poängtaket 100. Att peka ut en bästa dag när **varje** dag redan är Toppläge hjälper ingen.

Resultatet: bara Kultsjön utses i dag, av 48. Det är rätt, för Kultsjön är det enda vatten vars vecka faktiskt spänner över två olika lägen.

---

### Väderjusteringen är kontinuerlig, inte trappstegsvis

**Beslut.** `weatherAdjustment` interpolerar mellan ankarpunkter i stället för att använda intervall.

**Skäl.** Med trappsteg gav 18,0 grader +12 poäng och 18,1 grader +5. En tiondels grad kunde alltså flytta en destination mellan två lägen. Det såg ut som precision men var en artefakt av var vi råkat dra gränsen. Efter ändringen är största hoppet vid 0,1 grads skillnad 0,25 poäng.

---

## Innehåll och struktur

### Ingressen ligger i frontmattern, inte i brödtexten

**Beslut.** Fältet `intro` renderas överst på destinationssidan, ovanför väderdata. Brödtexten börjar med `## Fiskekort och regler`.

**Skäl.** Sidan ska säga vad platsen **är** innan den säger dagens vindstyrka. Tidigare mötte en läsare hero, tre datapaneler, och sedan först en beskrivning av vattnet.

Ingressen är dessutom sidans mest citerbara stycke. AI-system citerar oftare från sidans övre del (CXL, Kevin Indig), även om de studierna är leverantörsdrivna och bör läsas som riktning snarare än lag. Läsarargumentet håller oberoende av dem.

Texten **flyttades**, den duplicerades inte. En sida ska inte säga samma sak två gånger.

---

### Kostrådsnotisen är borttagen

**Beslut.** Raden "Att äta fångsten: det finns kostråd att känna till, läs mer längre ned" finns inte längre i brödtexten. Kostrådssektionen står kvar.

**Skäl.** Notisen sa bara att det finns information och var den står. Den svarade inte på vilket råd, varför, eller vad läsaren ska göra. En innehållsförteckning på en rad. Den som ser den måste ändå scrolla, och den som inte ser den hittar sektionen ändå.

Ätrans kostrådssektion säger vilka arter det gäller, vilka gränser som råder, och varför Ätran **inte** omfattas av dioxinrådet. Att först varna för att information finns och sedan ge den är en dålig affär för läsaren.

---

### Vattenföringen ligger i sidokolumnen, inte i huvudspalten

**Beslut.** Ordningen är: ingress med förhållandekort bredvid, tiodagarsutsikt i fullbredd, sedan brödtext med vattenföring, fiskekort och karta i sidokolumnen.

**Skäl.** Sidan var tre datablock hög innan brödtexten började. Det tippar från att bevisa djup till att skjuta upp innehållet.

Vattenföringen är fyra siffror och behöver inte full bredd. Tiodagarsutsikten kräver ~520 px och kan inte krympas. Flödet finns dessutom bara på 13 av 48 destinationer, och ett block som ibland saknas mitt i sidan gör att rytmen flyttar sig beroende på vattentyp.

**Om invändningen att vattenföringen är sajtens särskiljare.** Att något är unikt betyder att det ska finnas, vara korrekt och vara upptäckbart. Inte att det ska ligga överst. Särskiljaren uppstår när någon behöver siffran, alltså när de läser om fisket, och där står den nu.

---

## Metod

### Massändringar av innehåll verifieras mot git, aldrig mot egna mönster

**Beslut.** Efter varje skript som ändrar många innehållsfiler jämförs resultatet mot den senast committade versionen, ord för ord.

**Skäl, inlärt den hårda vägen.** Under ingressmigreringen raderade ett skript 90 medvetna sektionsavdelare i tolv filer, på antagandet att de var rester efter kostrådsnotisen. Kontrollen som kördes efteråt letade efter "streck före rubrik" och rapporterade att alla 48 filer var rena. Den mätte exakt det som just förstörts.

En kontroll som bara letar efter det man nyss ändrat är ingen kontroll. Det enda som fångar oavsiktlig skada är en jämförelse mot vad som faktiskt fanns förut.

**Praktisk regel.** Committa före varje massändring. Kör skriptet i torrkörning först. Jämför sedan ordinnehållet mot git och kräv att varje avvikelse går att förklara.

---

### Ett tomt fält är bättre än en gissad siffra

Den genomgående principen bakom flera av besluten ovan. Dammån saknar vattenföring. Tio älvar saknar den. "Jämnt läge" visas hellre än en påhittad bästa dag.

Falsk precision är svårare att upptäcka än ett tomt fält, eftersom den ser ut som kunskap.

---

## Vid kloning till ny marknad

Följande är **portabelt** och gäller oavsett land:

- Flödesstationer måste matchas på vattendrag, inte på avstånd. Kontrollera att datakällan (USGS, NVE, motsvarande) anger vattendrag och inte bara avrinningsområde.
- Realtidsdata saknas ofta för kraftverksstationer. Kontrollera periodtillgången per station innan en funktion byggs, inte efter.
- Flöde vägs inte in i betningsmodellen förrän det finns källbelagd forskning för den marknadens arter.
- Historiska normaler krävs för att en flödessiffra ska betyda något. Räkna dem ur arkivet en gång och checka in dem.
- Reglerat mot oreglerat är den viktigaste tolkningsnyckeln för flöde. I ett korttidsreglerat vatten är ett dygnsmedelvärde nästintill oanvändbart för dagsplanering.

Följande är **lokalt** och måste byggas om:

- Artlistan och säsongskurvorna i `calendar.ts`
- Fredningstider (`closedMonths`)
- Väderkällan och stationsmatchningen
- Kostråd och miljögiftsråd
- Fiskekortssystemet och affiliatepartners
