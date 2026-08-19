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

### Dagsrutans färg härleds ur totalpoängen, och alla trösklar ägs av `getScoreLabel`

**Beslut.** Kalenderrutans bakgrund, dess stapel, dess siffra och detaljpanelens etikett kommer alla från samma tal, dagens totalpoäng, via `getScoreLabel` i `calendar.ts`. Ingen vy räknar trösklar själv. Månfasen finns kvar som nyansdjup inom färgnivån, alltså som mättnad, inte som nivå.

**Skäl.** Tidigare färgades rutan på säsongsbaslinjen medan panelen skrev ut totalpoängen. Två tal, samma ruta. Resultatet var att den 12 juli kunde visa 68 på grön botten medan den 27 juli visade 81 på gul, och båda fick etiketten Toppläge. Felet var osynligt i koden eftersom varje enskild rad var korrekt. Det syntes bara när någon läste färgen och siffran samtidigt.

Samma trösklar låg dessutom hårdkodade i fyra filer: `KalenderWidget.tsx`, `FiskeKarta.tsx`, `smhi.ts` och `forhallanden/index.astro`. Duplicerade trösklar glider isär tyst, eftersom ingenting går sönder när de gör det. Sidorna säger bara olika saker.

**Vad som skulle ändra det.** Att en vy behöver en genuint annan indelning, exempelvis en säsongsvy som medvetet bortser från väder. Då exporteras en andra namngiven funktion ur `calendar.ts`, den räknas inte om lokalt i vyn.

---

### Topplägetröskeln ligger längre från ok-ankaret än månfasens största utslag

**Beslut.** `SCORE_TOP` är 72 och `ANCHOR.ok` är 66. Marginalen på 6 poäng är större än `moonAdjustment` någonsin kan ge, som mest +5. Konstanterna ligger bredvid varandra i `calendar.ts` just för att relationen ska vara läsbar.

**Skäl.** Med tröskeln på 68 låg gränsen 2 poäng över ok-ankaret. En art på en halvbra månad står stilla på 66 hela månaden, så ny- och fullmåne räckte för att lyfta den till Toppläge och tillbaka igen, fyra gånger i månaden. Mätt över 17 arter och 4 regioner orsakades 721 av kalenderns 882 årliga färgbyten av månfasen ensam, alltså 82 procent. Kalendern rapporterade en förändring som inte fanns i vattnet.

Vädret får fortfarande korsa gränsen, och det är avsikten. Vädret är faktisk information om just det dygnet. Månfasen är ett statistiskt mönster på några få procent och hör hemma som nyans, inte som nivåbyte.

Effekten av ändringen är avgränsad. Alla verkliga toppmånader ligger på 84 till 93 och rörs inte. Det som flyttade sig var uteslutande månader på 68 till 71, alltså precis de fall där månen tryckte över en medelmåttig säsong. Andelen dagar som kallas Toppläge sjönk från 38 till 30 procent.

**Vad som skulle ändra det.** Att `ANCHOR` kalibreras om. Trösklarna och ankarvärdena är ett par och kan inte ändras var för sig. Höjs `ANCHOR.ok` måste `SCORE_TOP` följa med, annars återkommer flimret.

---

### Destinationslistor sorteras på `raw`, medan `score` visas

**Beslut.** `getBiteScore` returnerar både `score` och `raw`. `score` är klampad till 0-100 och är det som visas. `raw` är den oklampade summan `season + moonAdj + weatherAdj` för den styrande arten och är det som sorteras på. `raw` avrundas inte, bara `score` gör det. Både startsidans lista i `FiskeKarta.tsx` och `/forhallanden/` sorterar på `raw`.

**Skäl.** `getScore` klampar varje arts poäng till 100. Modellen kan producera mer än så: `ANCHOR.peak` 92 plus månfas 5 plus väder 20 blir 117. En art i toppsäsong slår därför i taket redan vid en väderjustering på +3, och enbart en lufttemperatur mellan 8 och 17 grader ger +12.

Konsekvensen är att `score` slutar särskilja destinationer under stora delar av året. Mätt över alla 48 destinationer har den bästa arten toppsäsong 58 procent av året, och vid en väderjustering på +9 klampas 44 av 48 till exakt 100.

`Array.prototype.sort` är stabil. När alla nycklar är lika behålls ursprungsordningen, och den är samlingsordningen, alltså bokstavsordning på slug. Startsidans lista "Bäst just nu", med pokal och utskrivna placeringar 1 till 7, visade därför i praktiken en alfabetisk lista. Ordningen var Ångermanälven, Åsnen, Blekinge skärgård, Bolmen, Byskeälven, Dalälven, Dammån. Det var det enda felet på sajten som en besökare kunde se, och det syntes inte i koden eftersom varje rad var korrekt för sig.

Att `raw` inte avrundas är en del av samma sak. Med avrundning slogs Kalixälven på 114,6 ihop med tre vatten på exakt 115,0, och de fyra föll tillbaka på bokstavsordning igen. Samma fel, mindre skala.

**Vad `raw`-sorteringen faktiskt ordnar på.** Säsongsdelen är nästan konstant mellan destinationer i högsäsong. Utan väderdata ger `season + moonAdj` bara fyra unika värden över de 48, med median 97, eftersom varje vatten med någon art i topp landar på 92 plus 5. Det som skiljer dem åt är alltså vädret, vars spann är 45 poäng. Under vår och höst väger säsongen tyngre eftersom norr och söder då ligger olika. Rubriken "Bäst just nu" lovar därmed något bredare än vad listan levererar i högsommar, men ordningen är verklig och går att förklara.

**Att mönstret redan fanns.** Tiodagarsutsikten i samma fil hade löst det här från början med sin `rawOf`, och regeln om bästa dagen ovan är formulerad i råpoäng just därför. `getBiteScore` fick aldrig samma behandling. Ett klampat värde kan visas men inte sorteras på.

**Vad som skulle ändra det.** Att takhöjden åtgärdas, antingen genom sänkta ankarvärden så att 92 plus 25 ryms under 100, eller genom mjuk kompression i toppen i stället för hård klampning. Då sammanfaller `score` och `raw` i praktiken och uppdelningen behövs inte längre. Så länge modellen kan producera 117 på en hundragradig skala måste det sorterade och det visade vara två olika tal.

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

### Superlativ om ett vatten anger havsområde, art, mått och årtal

**Beslut.** Ett superlativ om ett fiskevatten ("störst", "viktigast", "mest produktiv") får stå kvar i en text bara om det framgår vilket havsområde eller vilken region jämförelsen gäller, vilken art eller beståndsform som avses, vilket mått som ligger till grund, och från vilket år siffran kommer. Saknas någon av de fyra skrivs påståendet om utan superlativ.

**Skäl, mätt på tre sidor.** Ätran beskrevs som "Sveriges viktigaste vildlaxälv" och som "landets största bestånd av naturreproducerande atlantlax". Mörrumsån beskrevs som "en av Östersjöns viktigaste vildlaxälvar". Torneälven beskrevs som "Östersjöns mest produktiva vildlaxälv". De tre kan inte alla stämma, och bara den sista gjorde det. Havs- och vattenmyndigheten kallar Torneälven ordagrant den enskilt mest produktiva laxälven i Östersjön, med över 1,5 miljoner smolt per år sedan 2016, ungefär hälften av all vild laxsmolt i Östersjön.

Ätrans smoltutvandring låg enligt SLU i snitt på 5 806 per år under 2000 till 2022. Mörrumsåns årliga smoltproduktion uppskattas till omkring 15 000. Avståndet till Torneälven är två storleksordningar för Ätran och nästan lika mycket för Mörrumsån.

Felet uppstod inte i en enskild mening utan i att jämförelsen aldrig ramades in. Ätran mynnar i Kattegatt och tillhör västkustens atlantlaxbestånd, medan Mörrumsån och Torneälven tillhör Östersjön. Tre sidor skrivna vid olika tillfällen kan var för sig låta rimliga och ändå motsäga varandra, eftersom ingen av dem sa vad den jämförde med. Det är ett strukturellt fel, inte ett skrivfel, och det upprepas på nästa laxälv om regeln inte finns.

Rättningen: Ätran har "västkustens starkaste bestånd av vild atlantlax" (SLU Fiskbarometern 2023, Länsstyrelsen i Halland 2021:10). Mörrumsån är "ett av få kvarvarande ursprungliga vildlaxbestånd i södra Östersjön". Torneälven står oförändrad, eftersom en korrekt mening inte ska rättas för symmetrins skull.

**Vad som skulle ändra det.** Regeln själv är svår att argumentera bort. Den kostar en handfull ord per ingress och fångar ett fel som är lätt för en läsare att avslöja. Talen åldras däremot. Om ICES eller SLU reviderar Torneälvens andel av vild Östersjösmolt tydligt bort från ungefär hälften, eller om Mörrumsån tappar sin MSY-status vid fortsatt svag uppvandring, måste formuleringarna uppdateras.

---

### Utbredningsnotisen beskriver arten, inte regionen

**Beslut.** Nappkalendern visar en rad med `forekomst` för arter med begränsad utbredning, exempelvis "Kustart på väst- och sydkusten, saknas i insjöar". Texten beskriver artens utbredning i sig och inte förhållandet till den valda regionen. Åtta arter fick texter i augusti 2026, grundade på HaV, Länsstyrelsen och SLU. Arter som finns i stort sett överallt saknar fältet och får ingen notis.

**Skäl.** Poängen i kalendern beskriver säsong och månfas, inte om arten finns i vattnet framför läsaren. Makrill i Mellansverige fick 95 i månadssnitt för augusti trots att arten i praktiken inte fiskas där. Det är falsk precision av samma slag som en påhittad flödessiffra: siffran ser ut som kunskap.

Texten kunde inte formuleras per region, eftersom regionerna är fyra etiketter utan geografisk definition. Var Mellansverige slutar och Norra Sverige börjar finns inte i koden. En text om artens utbredning är sann oavsett var gränsen går, och läsaren gör själv kopplingen till sitt vatten.

`absentRegions` täcker bara de uppenbara fallen, alltså makrill och horngädda i Norrland och fjällen. Att fylla i fältet för alla arter och regioner skulle kräva sjuttiotvå bedömningar där många är gränsfall. Notisen löser det utan att kräva den matrisen.

**Vad som skulle ändra det.** Att regionerna får en geografisk definition. Då blir det möjligt att säga något om artens förekomst i just den valda regionen, vilket vore mer användbart. Definitionen behöver inte ligga i koden, en rad i CLAUDE.md räcker.

---

### Vattenspecifika fiskeregler ligger på destinationssidorna, inte i kalendern

**Beslut.** Kalendern och artsidorna beskriver säsong och utbredning. Regler som gäller enskilda vatten, som totalförbudet mot harrfiske i Vättern sedan 15 mars 2025 och fredningsområdena för gädda längs ostkusten, ligger på respektive destinationssida.

**Skäl.** Ett eget fält i `calendar.ts` övervägdes men förkastades. Harr i Vättern är en enda tydlig regel, men gäddans fredningsområden är dussintals områden med olika datum från Uppsala till Kalmar, plus Gotland, Kalmarsund, Öland och Stockholms skärgård. Ett fält som rymmer det första men inte det andra blir halvfyllt och ser heltäckande ut, alltså samma problem som `absentRegions` med två arter av sjutton.

Reglerna är dessutom vattenspecifika i grunden. Ett fredningsområde gäller en plats, inte en art. Den som planerar fiske gör det för ett vatten, och det är på destinationssidan regeln blir konkret och möjlig att hålla aktuell. Vätternsidan beskriver redan förbudet på sju ställen, inklusive att det omfattar tillrinnande vattendrag upp till första vandringshinder, vilket en notis i kalendern inte hade fångat.

`closedMonths` fungerar inte heller tekniskt: det är månadsbaserat och skulle freda harren i alla regioner alla månader, vilket vore fel för Norrland där fisket pågår som vanligt.

**Vad som skulle ändra det.** Att ett regelverk blir så enhetligt att det går att uttrycka per art i stället för per vatten.

---

## Metod

### Massändringar av innehåll verifieras mot git, aldrig mot egna mönster

**Beslut.** Efter varje skript som ändrar många innehållsfiler jämförs resultatet mot den senast committade versionen, ord för ord.

**Skäl, inlärt den hårda vägen.** Under ingressmigreringen raderade ett skript 90 medvetna sektionsavdelare i tolv filer, på antagandet att de var rester efter kostrådsnotisen. Kontrollen som kördes efteråt letade efter "streck före rubrik" och rapporterade att alla 48 filer var rena. Den mätte exakt det som just förstörts.

En kontroll som bara letar efter det man nyss ändrat är ingen kontroll. Det enda som fångar oavsiktlig skada är en jämförelse mot vad som faktiskt fanns förut.

**Praktisk regel.** Committa före varje massändring. Kör skriptet i torrkörning först. Jämför sedan ordinnehållet mot git och kräv att varje avvikelse går att förklara.

---

### Ögonblicksbilden söker igenom projektroten i stället för att lista filer

**Beslut.** `generate-claude-context.sh` hittar rotens `.mjs`, `.py` och `.sh` automatiskt, med en kort uteslutningslista för skriptet självt och `astro.config.mjs`. Utförda engångsskript flyttas till `scripts/utford/` och kommer därför inte med.

**Skäl.** Den explicita listan missades två gånger på två dagar när nya verktyg tillkom. Ett skript som saknas i `claude-context.md` blir osynligt för nästa session utan att något går sönder, alltså exakt den sorts tyst fel som är svårast att upptäcka. En rad i CLAUDE.md hade inte hjälpt, eftersom den bygger på att någon minns att läsa den.

Genomsökningen drog först in fem utförda migreringar. Det är sämre än att de saknas: ett migreringsskript i ögonblicksbilden ser ut som ett aktuellt verktyg, och `convert-gear-reviews.py` som konverterar JSON till MDX en andra gång är inte harmlöst. Flytten till `scripts/utford/` löser det vid källan i stället för via uteslutningslistan, som annars hade vuxit med varje migrering.

**Vad som skulle ändra det.** Att projektroten börjar innehålla annat än verktyg. Då behövs urval igen, och urvalet bör i så fall vara en katalog och inte en lista.

---

### Ett tomt fält är bättre än en gissad siffra

Den genomgående principen bakom flera av besluten ovan. Dammån saknar vattenföring. Tio älvar saknar den. "Jämnt läge" visas hellre än en påhittad bästa dag.

Falsk precision är svårare att upptäcka än ett tomt fält, eftersom den ser ut som kunskap.

---

### En regel i ett dokument gäller inte retroaktivt, en regel i kod gör det

**Beslut.** `check-content.mjs` varnar för prisrelativa jämförelser i kronor, uppfunnen precision av typen "90 procent av prestandan", superlativ om marknaden, sammanskrivet "i dag", "gratis" i stället för "kostnadsfri", dubbla och spatierade bindestreck som tankstreck, samt filer helt utan svenska tecken. Elva mönster, alla som varningar.

**Skäl.** Genomgången i augusti 2026 av 30 produktsidor hittade prisjämförelser, superlativ och uppfunnen precision i sidor skapade maj till juni. `BESLUT.md` skapades 12 juli, alltså efter att texterna skrevs. Reglerna fanns inte nedskrivna då, och texterna bröt inte mot något när de skrevs.

Det är själva poängen. En regel som bara finns i ett dokument gäller framåt för den som läser dokumentet, och fångar ingenting i det som redan är publicerat. Efter att kontrollen infördes gav den 24 träffar i innehåll som inte ingick i genomgången, fördelat på destinationer, tekniker och produktsidor. Femton av dem var bindestreck som tankstreck, alltså samma konverteringsartefakt som fanns i `calendar.ts`.

Mönstren är heuristiska och därför varningar, inte fel. Prismönstret kräver ett jämförande ord direkt efter beloppet, så "kostar 29 995 kr" passerar medan "800 kr mindre" fångas. Testat mot 31 rättade filer och mot artiklar med prisuppgifter utan falsklarm.

**Vad som skulle ändra det.** Att falsklarmen blir fler än träffarna. Då ska mönstret snävas in, inte tas bort, eftersom en varning som ignoreras är värre än ingen varning.

---

## Internlänkning och produktmodul

### Betyget följer priset, med en liten premie för Shimano

**Beslut.** Betyget på en ny produktsida sätts så att det passar in bland befintliga produkter i samma kategori. Regeln är härledd ur hur de tolv haspelrullarna faktiskt är satta i augusti 2026, inte beslutad i förväg.

Skalan för haspelrullar: 399 kr ger 3,7, 549 kr ger 3,8, 599 kr ger 4,0, 1 199 kr ger 4,1, 1 599 kr ger 4,2 till 4,4, 1 669 kr ger 4,3, 2 149 kr ger 4,3, 2 799 kr ger 4,6, 3 199 kr ger 4,7 och 7 999 kr ger 5,0. Shimano ligger ungefär 0,1 över annat märke vid samma pris, vilket syns mellan Miravel på 4,4 och Inspira på 4,2 vid 1 599 kr.

Shimano Sahara FJ 2500 fick 4,2 enligt regeln: samma pris som Ceymar HD på 4,1, plus Shimano-premien.

**Skäl.** Betyg som inte hänger ihop inbördes är värdelösa. Utan en regel blir varje nytt betyg en isolerad gissning, och sidorna motsäger varandra över tid. Att härleda regeln ur befintliga sidor ger konsekvens utan att kräva att någon minns hur de tidigare sattes.

**Förbehållet är att regeln i praktiken är en omskrivning av priset.** Ett betyg som bara upprepar prislappen tillför läsaren ingenting, eftersom priset redan står bredvid. Stella på 5,0 säger dessutom att rullen är felfri, vilket ingen produkt är. Disclaimern under betyget säger att det bygger på specifikationer, prisnivå och varumärkets rykte, och prisnivån dominerar helt.

**Vad som skulle ändra det.** Att betyget ska säga något priset inte redan säger. Då krävs kriterier per kategori, exempelvis kullager, materialval och bromskraft i förhållande till pris, och en produkt måste kunna få lågt betyg trots högt pris. Så länge betyget följer priset är det ärligare att kalla det prisklass än betyg.

---

### Storleksvarianter får egna sidor, färgvarianter gör det inte

**Beslut.** Rullar och spön i olika storlekar är egna produktsidor. Beten i olika färger är det inte.

**Skäl.** En sökning på jigg i FiskeOnlines feed gav 103 träffar, varav ett tjugotal var Rapala Jigging Rap i tre längder och lika många färger. En sida per färg vore tunt duplicerat innehåll av precis det slag som skadar topikal auktoritet.

Storlek är däremot produktrelevant. Shimano Sahara i 1000 är en abborrulle och i 4000 en gäddrulle. Slås de ihop går det inte längre att sätta `targetSpecies` per storlek, och GearModul bygger hela sin matchning på det fältet. En familjesida måste dessutom peka sin affiliatelänk på en enda variant, vilket är ett godtyckligt val som feeden inte kan hjälpa till med.

**Vad som skulle ändra det.** Att en storleksserie är så smal att storlekarna delar art och teknik. Då är familjesidan bättre, och storlekarna nämns i texten.

---

### Produktbilder hämtas ur feeden, inte manuellt

**Beslut.** `node --env-file=.env feed-sok.mjs --bild slug=SKU` laddar ner produktbilden till `public/images/gear/<slug>.jpg`. Bilden sparas inte längre för hand från butikssidan.

**Skäl.** Feedens `g:image_link` är butikens egen produktbild i full upplösning. Att hämta den programmatiskt tar bort ett manuellt steg, ger rätt filnamn direkt och undviker att fel bild sparas för fel produkt. Butiker utan feed, i dag Fritid och Vildmark, kräver fortfarande manuell hämtning.

**Vad som skulle ändra det.** Att en butiks feedbilder håller för låg upplösning eller innehåller vattenstämplar. Kontrollera bilden efter hämtning första gången en ny butik läggs till.

---

### Produktlänkning härleds ur data, kurateras inte manuellt

**Beslut.** `GearModul.astro` renderar produktkort på art-, teknik- och destinationssidor genom att filtrera `gear-reviews` på `targetSpecies`, `techniques` och `waterType`. Den manuella listan (`gearRecs` på arter, `recommendedGear` på destinationer) är kvar men fungerar som override, inte som förstahandsval. Är den tom härleds produkterna.

**Skäl.** Den manuella vägen släpade alltid efter. Nya produkter syntes bara på sidor någon kom ihåg att uppdatera. Schemat hade samtidigt ett omvänt index som ingen sida läste: varje produkt var redan taggad med sina arter och tekniker. Att låta mallen filtrera på de fälten gav internlänkar från alla art-, teknik- och destinationssidor i dag i stället för allteftersom listor fylldes i. Nettot var hundratals interna länkar mot produktsidorna, från sidor som redan var indexerade, utan handpåläggning.

**Vad som skulle ändra det.** Att produktsortimentet blev så litet eller så manuellt kuraterat att en redaktör vill styra varje placering. Då blir override-vägen förstahandsval igen. Vid nuvarande skala (50+ produkter) vinner härledning.

---

### `techniques` är en betestaxonomi, översatt via aliastabell, inte normaliserad

**Beslut.** Produkternas `techniques`-fält behåller kortformer (`jigg`, `spinn`, `jerkbait`, `wobbler`). En aliastabell i `GearModul.astro` översätter dem till tekniksidornas slugs (`jigg` → `jiggfiske`). Fältet normaliseras alltså inte till sidslugs i datan.

**Skäl.** `jerkbait` och `wobbler` är bettyper, inte tekniksidor. Hade fältet normaliserats till sidslugs tvingades de in som `jiggfiske` eller `spinnfiske`, vilket är fel klassificering och förstör fältets värde som betestaxonomi för framtida betesfilter. Aliastabellen håller översättningen på ett ställe i stället för att sprida den över 50 filer, och en produkt kan behålla ärliga bettaggar utan att det stör teknikmatchningen.

**Vad som skulle ändra det.** Att `techniques` aldrig ska användas till annat än teknikmatchning. Då vore normalisering enklare. Så länge fältet också beskriver betestyp måste taxonomin och sidslugarna hållas isär.

---

### Kärnutrustning viktas före tillbehör på tekniksidor

**Beslut.** När tekniken är det aktiva filtret rankas spön och beten (`KATEGORI_VIKT` 0) före rullar och linor (2–3) och tillbehör som ekolod (4). Betyg avgör inom samma vikt. På art- och destinationssidor är viktningen av.

**Skäl.** Ekolod är taggade brett (`jigg`, `spinn`), eftersom man kan använda ekolod när man jiggar. Utan viktning dominerade ekolod och kustlina över jiggspön och jiggar på jiggfiskesidan, trots att en besökare där vill se kärnutrustning. Sortimentet fanns, rankningen begravde det. Viktningen lyfter det en teknikbesökare faktiskt söker och gör sidan trovärdig även innan sortimentet växer.

**Vad som skulle ändra det.** Att sortimentet blev så teknikspecifikt taggat att breda tillbehör inte längre matchar fel tekniker. Då behövs ingen viktning. Vid brett taggade tillbehör krävs den.

---

### Sidebar-kortet roterar ekolod deterministiskt per destination

**Beslut.** Det kompakta produktkortet i destinationernas sidokolumn (`variant="sidebar"`) visar ett ekolod ur budget/mellanklasspoolen, valt med en hash av destinationens slug. Samma vatten visar alltid samma ekolod, olika vatten sprids över poolen. Kortet är dolt på mobil (`hidden lg:block`) och `recommendedGear` överstyr rotationen.

**Skäl.** Ekolod har bäst ordervärde och passar destinationskontexten, någon som lär känna ett nytt vatten. Men ett ekolod är inte vattenspecifikt, så all variation är i grunden godtycklig. Att visa samma modell på alla 41 destinationer såg automatiserat ut. Deterministisk rotation på slugen ger stabil variation utan manuellt arbete och utan att påstå en relevans som inte finns: kortet säger "bra att ha på vattnet", vilket är sant för alla ekolod. Premiummodellerna utesluts ur poolen så ett dyrt ekolod inte dyker upp slumpvis. Mobildöljningen finns för att kortet annars dubblerar full-modulen som ligger i flödet.

**Vad som skulle ändra det.** Att ekolod blev genuint vattenspecifika (djupintervall, sötvatten mot kust) och kunde matchas mot `waterType` i stället för roteras. Då blir matchning bättre än rotation. Så länge skillnaden mellan modeller är för liten för att motivera en äkta matchning är stabil rotation det ärliga valet.

---

## Priser och produktfeeds

### Priser hämtas ur Adtractions feed vid byggtid, frontmatter är reserv

**Beslut.** `src/lib/feed.ts` hämtar produktfeeds från Adtraction vid varje bygge och slår upp pris per produkt via `affiliateUrl`. `price` i `gear-reviews` visas bara när feeden saknas, inte svarar, eller inte innehåller produkten. Fältet ska alltid innehålla ordinarie pris, aldrig ett reapris.

**Skäl.** Vid genomgången 13 augusti 2026 låg 37 av 51 matchade FiskeOnline-priser på reanivå i stället för ordinarie, eftersom de matats in under pågående kampanj. Samtidigt var 50 av 94 produkter REA-märkta just då, vilket gör kampanj till normaltillstånd snarare än undantag hos butiken. Ett handinmatat pris är därmed nästan alltid fel, och regeln om att alltid verifiera priser mot butikssidan innan patchning skalade inte. Med den dagliga cron-körningen klockan 05:00 blir priset aldrig äldre än ett dygn.

**Vad som skulle ändra det.** Att en butik slutar leverera feed, eller att andelen produkter utan feedträff blir så stor att reservvärdet dominerar. Vid 73 av 94 sidor med feedpris är byggtidshämtning klart bättre än statiska tal.

---

### Både kampanjpris och överstruket ordinarie visas, med hämtningsdatum

**Beslut.** Är produkten nedsatt visar kortet och köpboxen kampanjpriset stort med ordinarie överstruket bredvid, försett med dold etikett för skärmläsare. Butiksraden kompletteras med "pris hämtat 13 augusti". Utan feedträff visas reservvärdet utan datum.

**Skäl.** Alternativen var att visa ordinarie, vilket är fel under kampanj, eller enbart reapriset, vilket döljer att det är en nedsättning och gör prisklassindelningen instabil. Att visa båda är det enda som inte undanhåller information, och matchar hur butiken själv presenterar priset. Datumet är inte kosmetiskt: ett pris som ändras utan att vi ser det måste kunna dateras av läsaren, annars påstår kortet mer än vi vet. Att datumet utelämnas vid fallback är samma princip, vi vet då inte när priset senast stämde.

**Vad som skulle ändra det.** Att byggfrekvensen sjunker så mycket att datumet oftare är gammalt än färskt. Då blir prisuppgiften i sig tveksam, inte bara datumet.

---

### `availability` utelämnas ur schemat när feeden tiger

**Beslut.** `productSchema` sätter `availability` bara när feeden anger `in_stock` eller `out_of_stock`. Saknas produkten i feeden utelämnas fältet. Tidigare påstod schemat alltid `InStock`.

**Skäl.** Feedsen innehåller bara produkter i lager, men att därav sluta sig till `OutOfStock` vore en slutsats vi inte kan belägga, och att alltid påstå `InStock` var direkt fel. Ett utelämnat fält är det ärliga svaret. Priset i schemat följer samtidigt det synliga priset, eftersom en avvikelse där både flaggas av Google och ger läsaren fel siffra i sökresultatet.

**Vad som skulle ändra det.** Att utelämnandet mätbart försämrar rich results för produktsidorna. Då får avvägningen tas om, men inte genom att återinföra ett påstående vi inte kan belägga.

---

### Querystring strippas generellt vid matchning mot feed

**Beslut.** `normalise()` i `feed.ts` tar bort querystring och fragment före jämförelse, för alla butiker. Samma regel speglas i `validate-feed.mjs` och `fix-fallback-prices.mjs`.

**Skäl.** Outl1 lägger ett internt ID sist i varje produkt-URL, exempelvis `?var=14174`, medan våra publicerade länkar saknar det. Utan strippning matchade noll av 22 Outl1-produkter. Kontrollerat 13 augusti 2026: feeden innehöll 2 798 produkter fördelade på 2 798 unika produktsidor, alltså är parametern ett internt ID och inte en variantväljare. FiskeOnlines URL:er saknar querystring helt, så regeln kostar ingenting där.

**Vad som skulle ändra det.** En butik som faktiskt använder query för att skilja produkter åt. Då slås två produkter ihop och fel pris visas. Modulen varnar därför vid bygget när två produkter i samma feed normaliserar till samma nyckel, så att antagandet upptäcks automatiskt i stället för att någon ska minnas den här raden. Kommer en sådan varning ska regeln göras per butik.

---

### Alla feeds slås ihop till ett uppslag i stället för att väljas på `merchant`

**Beslut.** `feed.ts` läser samtliga konfigurerade feeds in i en gemensam karta med produkt-URL som nyckel. Uppslaget tar ingen butiksparameter.

**Skäl.** Produkt-URL:erna skiljer sig redan åt på domännivå, så nycklarna kan inte krocka mellan butiker. Det gjorde att varken `AffiliateCard.astro` eller produktsidan behövde ändras när Outl1 lades till, och det tar bort risken att `merchant` i frontmatter hamnar i otakt med `affiliateUrl`. Butiker utan feed, i dag Fritid och Vildmark med 12 produkter, hanteras av samma fallback och kräver ingen egen kod.

**Vad som skulle ändra det.** Två butiker som säljer via samma domän. Då behövs butiksval igen.

---

### Prisavvikelser under 10 procent listas inte

**Beslut.** `validate-feed.mjs` rapporterar avvikelser mellan `price` och feedens ordinarie pris först vid 10 procent, och räknar övriga samman till en rad.

**Skäl.** Reservvärdets fel spelar roll i proportion till sin storlek. Några procent märks inte den dag en feed uteblir, och `priceRange` påverkas först vid större skillnader. Vid införandet gav gränsen 36 listade avvikelser i stället för 37, alltså liten skillnad då, men den skyddar mot att stora avvikelser drunknar i små när sortimentet växer.

**Vad som skulle ändra det.** Att sammanräkningen börjar dölja ett systematiskt fel. Talet är en kalibrering, inte en princip.

---

### Produkter som saknas i feeden är varning, inte fel

**Beslut.** En produkt vars URL inte finns i feeden rapporteras som varning med texten att den troligen är slut i lager. Bara saknad eller felformaterad `affiliateUrl` och `price` som inte är ett tal räknas som fel och fäller `--strict`.

**Skäl.** Feedsen innehåller bara produkter i lager. Kontrollerat 13 augusti 2026: samtliga nio saknade FiskeOnline-produkter svarade HTTP 200 hos butiken, alltså var ingen borttagen. Hade de räknats som fel skulle varje tillfälligt slutsåld produkt bryta bygget den dag `--strict` sätts på i CI, vilket gör kontrollen oanvändbar just när den behövs.

**Vad som skulle ändra det.** Att samma produkt saknas under lång tid. Då är den sannolikt borttagen och länken bör bytas. Skriptet mäter inte varaktighet i dag.

---

### Publicerade annons-ID är de i gränssnittet, inte feedens

**Beslut.** `affiliateUrl` använder `a=1954031990` för FiskeOnline och `a=1728546059` för Outl1, alltså Brand AD ID i Adtractions gränssnitt. Feedernas egna länkar använder `1954031991` respektive `1728546061` och kopieras aldrig in.

**Skäl.** Adtraction bekräftade 2026-08-14 att feedens ID är en systemgenererad, dold annons som bara används internt för att bygga länkarna i feeden. Den ska inte användas för egenbyggda länkar. Båda ID:na tillhör samma program, och attributionen styrs av kanal-ID `2072765905` tillsammans med programmet, inte av annons-ID. Provisionen sätts på programnivå och påverkas inte av vilket som används. Den enda skillnaden är att trafiken visas som antingen "Custom link" eller "Product feed" på annonsnivå i rapporten. Ingen migrering behövdes alltså, de 82 befintliga länkarna var redan rätt. `validate-feed.mjs` kontrollerar förväntat ID per butik och fångar avvikelser.

**Vad som skulle ändra det.** Att Adtraction ändrar hur annonsenheter fungerar. Ekonomiskt spelar valet ingen roll, så frågan är avgjord av vilket ID som är avsett för publicering.

---

### `cupa_sku` läggs på alla länkar som har en feedträff

**Beslut.** `affiliateUrl` bär `&cupa_sku=<g:id>` placerad före `&url=`. 73 av 94 produktsidor har den. `add-cupa-sku.mjs` gjorde tillägget på befintliga länkar, och `add-product.py` och `feed-sok.mjs` bygger nya länkar med den.

**Skäl.** Utan parametern visar rapporteringen att en order kom från kanalen, men inte vilken produkt som sålde. Med 94 produktsidor är det skillnaden mellan att veta vad som konverterar och att gissa, vilket i sin tur avgör vilka sidor som är värda att utveckla. Adtraction bekräftade att parametern fungerar på egenbyggda länkar med det vanliga annons-ID:t och inte kräver feedens.

Placeringen före `&url=` är inte kosmetisk. Adtraction URL-kodar inte målet, så allt efter `&url=` tolkas som produktens adress. En parameter placerad efter hamnar i mål-URL:en i stället för i spårningen.

Värdet får vara högst 128 tecken. Skripten hoppar över parametern om ett SKU skulle överskrida det eller innehålla tecken som kräver kodning. FiskeOnline använder numeriska SKU, Outl1 formen `212-1-103`, båda säkra.

**Vad som skulle ändra det.** De 21 produkter som saknas i feeden, alltså slutsålda varor och Fritid och Vildmark, får ingen parameter och kan inte få det. Blir andelen utan feedträff stor blir produktnivån i rapporten missvisande, eftersom den då bara täcker delar av sortimentet.

---

### FiskeOnline körs via Adtraction trots identiska villkor i Addrevenue

**Beslut.** FiskeOnline finns som annonsör i båda nätverken med 11 procent provision och 45 dagars cookietid i båda. Adtraction behålls.

**Skäl.** Villkoren är likvärdiga, och spårningen via Adtraction är etablerad och fungerar. En flytt skulle kräva att samtliga `affiliateUrl` byggs om mot en oprövad uppsättning utan mätbar vinst. Adtractions spårningsdomän `pin.fiskeonline.com` ligger dessutom på butikens eget domännamn, vilket är mindre utsatt för annonsblockerare än en nätverksdomän, även om skillnadens storlek inte är uppmätt. Noteringen i CLAUDE.md om att FiskeOnline saknar produktfeed i Adtraction var felaktig och har rättats.

**Vad som skulle ändra det.** Att FiskeOnline avaktiverar det oanvända Addrevenue-programmet, vilket inte påverkar sajten, eller att villkoren i något nätverk ändras.

---

### Rabattkodsinnehåll sänker provisionen till 4 procent

**Beslut.** Ingen rabattkods- eller cashbacksida byggs för FiskeOnline utan att provisionsfrågan först retts ut.

**Skäl.** FiskeOnlines program har två nivåer: 11 procent normalt och 4 procent för cashback- och kupongsajter. En rabattkodssida riskerar att omklassa hela kanalen till den lägre nivån, alltså en sänkning med nästan två tredjedelar på all trafik, inte bara den från rabattsidan.

**Vad som skulle ändra det.** Skriftligt besked från FiskeOnline om att enstaka rabattkodsinnehåll inte utlöser omklassning.

---

---

## Vid kloning till ny marknad

Följande är **portabelt** och gäller oavsett land:

- Flödesstationer måste matchas på vattendrag, inte på avstånd. Kontrollera att datakällan (USGS, NVE, motsvarande) anger vattendrag och inte bara avrinningsområde.
- Realtidsdata saknas ofta för kraftverksstationer. Kontrollera periodtillgången per station innan en funktion byggs, inte efter.
- Flöde vägs inte in i betningsmodellen förrän det finns källbelagd forskning för den marknadens arter.
- Alla etiketttrösklar ägs av en funktion. En vy som räknar om dem lokalt glider isär tyst, eftersom ingenting går sönder när den gör det.
- Etiketttröskeln måste ligga längre från säsongens mellanankare än den största dagliga justeringen. Annars byter etiketten värde på en faktor som inte är dagsspecifik. Regeln är portabel, talen är lokala.
- Färg, stapel, siffra och etikett i samma vy härleds ur samma tal. Två tal i samma ruta är ett fel som varje enskild kodrad ser korrekt ut i.
- Ett klampat värde kan visas men inte sorteras på. Klampningen gör lika av det som är olika, och en stabil sortering på lika nycklar ger samlingsordningen, alltså bokstavsordning som ser ut som en rangordning.
- En numrerad lista, en pokal eller ordet "bäst" är ett löfte till läsaren om en ordning. Kontrollera att nyckeln som sorteras på faktiskt har den upplösning löftet kräver.- Historiska normaler krävs för att en flödessiffra ska betyda något. Räkna dem ur arkivet en gång och checka in dem.
- Reglerat mot oreglerat är den viktigaste tolkningsnyckeln för flöde. I ett korttidsreglerat vatten är ett dygnsmedelvärde nästintill oanvändbart för dagsplanering.
- Internlänkning mot produktsidor härleds ur produkternas egna taggfält, inte ur manuella listor per sida. Mönstret (filtrera på art, teknik, vattentyp; override möjlig men inte förstahandsval) är portabelt. `GearModul.astro` flyttar med i stort sett oförändrad.
- Produktfält som också beskriver bettyp (`techniques`) hålls isär från sidslugarna via en aliastabell, inte genom normalisering. Principen är portabel även om tabellens innehåll är lokalt.
- Kärnutrustning viktas före tillbehör på tekniksidor. Principen är portabel. Vilka kategorier som är kärna respektive tillbehör beror på sortimentet och är lokalt.
- Sidebar-kortet roterar en högmarginalkategori deterministiskt per destination. Rotationslogiken är portabel. Att kategorin är just ekolod är ett val för den svenska marknadens sortiment och ordervärde.

- Ett superlativ om ett vatten anger havsområde, art, mått och årtal. Regeln är portabel, jämförelsegrupperna är lokala. En marknad med flera separata bassänger eller beståndsformer har samma fälla: Great Lakes mot Atlantkusten, insjölax mot havsvandrande lax, vilt bestånd mot utsatt. Utan inramning låter varje sida rimlig var för sig och sajten motsäger sig själv.

- Produktpriser hämtas ur affiliatnätverkets feed vid byggtid, inte ur frontmatter. Fältet i innehållet är reservvärde och ska hålla ordinarie pris. Mönstret är portabelt, feedens URL och format är lokalt.
- Ett visat pris som kan ändras utan redaktionell insyn förses med hämtningsdatum. Saknas färsk data utelämnas datumet i stället för att sättas till något ungefärligt.
- Priset i strukturerad data följer det synliga priset. Avviker de flaggas det av sökmotorn och läsaren möter fel siffra i sökresultatet.
- Ett fält i strukturerad data utelämnas hellre än fylls med ett antagande. `availability` som alltid påstår `InStock` är ett tyst fel av samma slag som en påhittad flödessiffra.
- Antaganden om URL-normalisering byggs med automatisk upptäckt, inte med en anteckning. Om två produkter kan kollidera efter normalisering ska koden varna vid bygget.
- Alla feeds slås ihop till ett uppslag när produkt-URL:erna skiljer sig åt på domännivå. Det gör att nya butiker kan läggas till utan att komponenter ändras.
- Affiliatelänkar bär produktens ID när nätverket stöder det. Utan det syns bara att kanalen levererade en order, inte vilken produkt som sålde, och då går det inte att veta vilka sidor som är värda att utveckla. Parametern måste ligga före den parameter som bär mål-URL:en när nätverket inte URL-kodar målet.
- Filer som ska med i en aggregerad kontextfil hittas genom genomsökning, inte genom uppräkning. En uppräkning glöms, och det som saknas märks aldrig eftersom ingenting går sönder.
- Utförda engångsskript flyttas ur projektroten. Ett migreringsskript som redan körts ser ut som ett verktyg, både för en människa som listar katalogen och i en aggregerad kontextfil.
- En redaktionell regel som bara finns i ett dokument fångar ingenting i det som redan är publicerat. Regler som går att uttrycka som mönster hör hemma i innehållsvalideringen, annars gäller de bara för den som råkar läsa dokumentet.
- En kalender eller modell som beskriver säsong ska inte tala om var arten finns. Det är två olika påståenden, och att blanda dem ger ett toppläge för fiske som inte existerar på platsen.
- Betyg måste hänga ihop inbördes inom en kategori. Härled regeln ur befintliga sidor i stället för att gissa per produkt, och var vaken på om betyget bara upprepar priset.
- Storleksvarianter av utrustning får egna sidor, färgvarianter av beten inte. Gränsen går vid om varianten byter målart eller teknik.
- Matchningslogik som delas av flera skript måste hållas i takt. Vid införandet glömdes ett av tre skript och rapporterade tyst noll träffar, vilket såg ut som att allt stämde.

Följande är **lokalt** och måste byggas om:

- Artlistan och säsongskurvorna i `calendar.ts`
- Kalibreringen av `ANCHOR` mot `SCORE_TOP` och `SCORE_OK` i `calendar.ts`: talen är lokala, relationen mellan dem är det inte
- Takhöjden: att modellen kan producera 117 på en hundragradig skala är en följd av de svenska ankarvärdena och måste räknas om per marknad
- Fredningstider (`closedMonths`)
- Väderkällan och stationsmatchningen
- Kostråd och miljögiftsråd
- Fiskekortssystemet och affiliatepartners
- Aliastabellen `TEKNIK_ALIAS` i `GearModul.astro`: marknadens tekniknamn och deras sidslugar
- Kategorivikterna `KATEGORI_VIKT`: vilka produktkategorier som räknas som kärnutrustning
- Sidebar-rotationens kategori: vilken högmarginalkategori som lyfts i destinationernas sidokolumn
- Butiksnamnen i `SOURCES` och deras miljövariabler
- Annons-ID per butik i `validate-feed.mjs`
- Tioprocentsgränsen för prisavvikelser
- Antagandet att querystring i produkt-URL:er är interna ID:n, vilket är verifierat per butik och inte generellt
