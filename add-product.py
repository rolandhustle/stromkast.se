#!/usr/bin/env python3
"""
add-product.py, lägg till en ny produkt i Strömkast

Användning:
  python3 add-product.py

Skriptet guidar dig igenom processen och skapar en MDX-fil med korrekt
frontmatter och affiliate-länk.

PRODUKTDATA HÄMTAS UR ADTRACTIONS FEED

Tidigare skrapades priset ur produktsidans HTML. Det fältet innehåller butikens
aktuella pris, alltså reapriset under kampanj, och eftersom ungefär hälften av
FiskeOnlines sortiment är nedsatt vid varje given tidpunkt matades reapriser
systematiskt in i ett fält som ska hålla ordinarie pris. Vid genomgången
2026-08-13 låg 37 av 51 matchade priser fel av den anledningen.

Feeden skiljer på g:price (ordinarie) och g:sale_price (kampanj). Skriptet
använder ordinarie, vilket är vad price i frontmatter ska innehålla. Det är
numera ett reservvärde, eftersom src/lib/feed.ts hämtar det visade priset vid
byggtid.

Kräver ADTRACTION_FEED_URL_FISKEONLINE och ADTRACTION_FEED_URL_OUTL1. Läses ur
.env om filen finns. Saknas feeden fungerar skriptet ändå, men utan förifyllda
värden.

Normaliseringen speglar src/lib/feed.ts. Ändras den ena måste den andra följa
med, annars matchar skriptet mot andra produkter än de sajten visar.
"""

import os
import re
import sys
import json
import urllib.request
from urllib.parse import urlsplit, parse_qsl, urlencode, urlunsplit

MERCHANTS = {
    "1": {
        "name": "FiskeOnline",
        "base": "https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1",
        "domain": "fiskeonline.com",
        "env": "ADTRACTION_FEED_URL_FISKEONLINE",
    },
    "2": {
        "name": "Frilufts och Vildmark",
        "base": "https://go.fritidvildmark.se/t/t?a=2020679758&as=2072765905&t=2&tk=1",
        "domain": "fritidvildmark.se",
        "env": None,  # Ingen feed uppsatt i Adtraction, kontrollerat 2026-08-13
    },
    "3": {
        "name": "Outl1",
        "base": "https://do.outl1.se/t/t?a=1728546059&as=2072765905&t=2&tk=1",
        "domain": "outl1.se",
        "env": "ADTRACTION_FEED_URL_OUTL1",
    },
}

GEAR_REVIEWS_DIR = "src/content/gear-reviews"
GEAR_CATEGORIES_DIR = "src/content/gear-categories"
IMAGES_DIR = "public/images/gear"

SPECIES_OPTIONS = ["abborre", "gadda", "gos", "oring", "lax", "harr", "havsoring"]
TECHNIQUE_OPTIONS = ["jigg", "dropshot", "spinn", "wobbler", "jerkbait", "flugfiske", "mete", "trolling", "isfiske"]
PRICE_RANGES = {"1": "budget", "2": "mellanklass", "3": "premium"}

# Trösklar ur CLAUDE.md. Räknas på ordinarie pris, aldrig på kampanjpris.
# Kategorier som saknas här får inget förslag.
PRICE_THRESHOLDS = {
    "spon": (800, 1800),
    "haspelrullar": (600, 1500),
}

TRACKING_PARAMS = ("gclid", "gbraid", "wbraid", "gad_source", "fbclid", "msclkid")


def load_env(path=".env"):
    """Läser .env utan att skriva över variabler som redan är satta."""
    if not os.path.exists(path):
        return
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            if key and key not in os.environ:
                os.environ[key] = value.strip().strip('"').strip("'")


def load_categories():
    """Läser giltiga kategori-sluggar direkt från gear-categories-mappen."""
    slugs = []
    for name in sorted(os.listdir(GEAR_CATEGORIES_DIR)):
        if not name.endswith(".json"):
            continue
        path = os.path.join(GEAR_CATEGORIES_DIR, name)
        try:
            with open(path, encoding="utf-8") as f:
                data = json.load(f)
            slugs.append(data.get("slug", name[:-5]))
        except (json.JSONDecodeError, OSError):
            slugs.append(name[:-5])
    return slugs


def clean_product_url(url):
    """Tar bort utm- och annonsspårning från produkt-URL:en."""
    parts = urlsplit(url)
    kept = [
        (k, v) for k, v in parse_qsl(parts.query, keep_blank_values=True)
        if not k.startswith("utm_") and k not in TRACKING_PARAMS
    ]
    query = urlencode(kept)
    return urlunsplit((parts.scheme, parts.netloc, parts.path, query, ""))


def slugify(text):
    text = text.lower()
    text = re.sub(r'[åä]', 'a', text)
    text = re.sub(r'[ö]', 'o', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')


def smart_slug(title):
    """Kort slug från varumärke + modellnamn, utan mått och specifikationer."""
    title = re.split(r'\s+\d+[\',″"/]', title)[0]
    title = re.sub(r'\s*(Multi|2-delat|2pcs)\s*', ' ', title, flags=re.IGNORECASE)
    return slugify(title.strip())[:50].rstrip('-')


# ---------------------------------------------------------------------------
# Produktfeed
# ---------------------------------------------------------------------------

ENTITIES = {"amp": "&", "lt": "<", "gt": ">", "quot": '"', "apos": "'", "nbsp": " "}


def decode(s):
    s = re.sub(r'&#x([0-9a-fA-F]+);', lambda m: chr(int(m.group(1), 16)), s)
    s = re.sub(r'&#(\d+);', lambda m: chr(int(m.group(1))), s)
    return re.sub(r'&([a-zA-Z]+);', lambda m: ENTITIES.get(m.group(1).lower(), m.group(0)), s)


def tag(block, name):
    m = re.search(rf'<{name}(?:\s[^>]*)?>(.*?)</{name}>', block, re.S | re.I)
    if not m:
        return ""
    cdata = re.match(r'\s*<!\[CDATA\[(.*?)\]\]>\s*$', m.group(1), re.S)
    return cdata.group(1).strip() if cdata else decode(m.group(1)).strip()


def money(raw):
    """'389 SEK' -> 389. None när fältet saknas, är tomt eller inte går att tolka."""
    if not raw:
        return None
    m = re.search(r'([\d\s.,]+)', raw.replace("\u00a0", " "))
    if not m:
        return None
    try:
        return int(float(m.group(1).replace(" ", "").replace(",", ".")))
    except ValueError:
        return None


def normalise(url):
    """Gemener, utan querystring, fragment eller avslutande slash. Speglar feed.ts."""
    if not url:
        return None
    return url.strip().lower().split("#")[0].split("?")[0].rstrip("/")


def product_url_from(tracking_url):
    """Produktens rena URL ur en Adtraction-länk. Allt efter url= är målet."""
    i = tracking_url.find("&url=")
    if i == -1:
        return None
    return normalise(decode(tracking_url[i + 5:]))


def fetch_feed(env_name):
    """Läser feeden och returnerar en karta från normaliserad URL till fält."""
    url = os.environ.get(env_name)
    if not url:
        print(f"  {env_name} saknas, hoppar över feeduppslag.")
        return {}

    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            xml = resp.read().decode("utf-8", errors="ignore")
    except Exception as err:
        print(f"  Kunde inte hämta feeden ({err}). Fortsätter utan förifyllda värden.")
        return {}

    index = {}
    for m in re.finditer(r'<item[\s>].*?</item>', xml, re.S | re.I):
        block = m.group(0)
        key = product_url_from(tag(block, "link"))
        price = money(tag(block, "g:price"))
        if not key or price is None or key in index:
            continue
        index[key] = {
            "sku": tag(block, "g:id"),
            "title": tag(block, "title"),
            "brand": tag(block, "g:brand"),
            "price": price,
            "sale_price": money(tag(block, "g:sale_price")),
            "image": tag(block, "g:image_link"),
            "gtin": tag(block, "g:gtin"),
            "availability": tag(block, "g:availability"),
        }
    print(f"  {len(index)} produkter inlästa.")
    return index


def download_image(image_url, dest_path):
    """Hämtar produktbilden till public/images/gear/."""
    try:
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        req = urllib.request.Request(image_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if len(data) < 1000:
            print("  Bilden verkar tom, hoppar över.")
            return False
        with open(dest_path, "wb") as f:
            f.write(data)
        print(f"  Bild sparad: {dest_path} ({len(data) // 1024} kB)")
        return True
    except Exception as err:
        print(f"  Kunde inte hämta bilden ({err}). Spara den manuellt.")
        return False


# ---------------------------------------------------------------------------
# Frågor
# ---------------------------------------------------------------------------

def ask(prompt, default=None, required=False):
    """required=True frågar om tills något anges, i stället för att gå vidare tomt."""
    while True:
        if default:
            result = input(f"{prompt} [{default}]: ").strip()
            return result if result else default
        result = input(f"{prompt}: ").strip()
        if result or not required:
            return result
        print("  Fältet kan inte lämnas tomt.")


def ask_int(prompt, default=None):
    """Heltal. Frågar om vid tomt eller ogiltigt svar i stället för att krascha."""
    while True:
        raw = ask(prompt, default)
        digits = re.sub(r'[^0-9]', '', raw)
        if digits:
            return int(digits)
        print("  Ange ett tal, t.ex. 1299.")


def ask_list(prompt, options):
    print(f"\n{prompt}")
    for i, opt in enumerate(options, 1):
        print(f"  {i}. {opt}")
    print("  (ange nummer separerade med komma, t.ex. 1,3)")
    while True:
        raw = input("> ").strip()
        indices = [x.strip() for x in raw.split(",")]
        try:
            selected = [options[int(i) - 1] for i in indices if i]
            if selected:
                return selected
        except (ValueError, IndexError):
            pass
        print("Ogiltigt val, försök igen.")


def ask_single(prompt, options):
    """Välj exakt ett alternativ ur en lista."""
    print(f"\n{prompt}")
    for i, opt in enumerate(options, 1):
        print(f"  {i}. {opt}")
    while True:
        raw = input("> ").strip()
        try:
            idx = int(raw) - 1
            if 0 <= idx < len(options):
                return options[idx]
        except ValueError:
            pass
        print("Ogiltigt val, försök igen.")


def ask_choice(prompt, options, default=None):
    print(f"\n{prompt}")
    for key, val in options.items():
        print(f"  {key}. {val}")
    hint = f" [{default}]" if default else ""
    while True:
        raw = input(f">{hint} ").strip()
        if not raw and default:
            return default
        if raw in options:
            return options[raw]
        print("Ogiltigt val, försök igen.")


def suggest_price_range(category, price):
    """Föreslår prisklass ur kategorins trösklar. None när kategorin saknar sådana."""
    bounds = PRICE_THRESHOLDS.get(category)
    if not bounds or price is None:
        return None
    low, high = bounds
    if price < low:
        return "budget"
    return "mellanklass" if price < high else "premium"


def yes(raw):
    return raw.lower() in ("j", "ja", "y", "yes")


def yaml_safe(value):
    """Gör en sträng säker för YAML, tar bort tecken som kraschar parsern."""
    safe = str(value)
    # Ersätt fot- och tumtecken som förekommer i spönamn (7'0", 8'6")
    safe = re.sub(r"(\d)'(\d)", r"\1.\2", safe)   # 7'0 blir 7.0
    safe = re.sub(r'(\d)"', r'\1', safe)          # 7" blir 7
    safe = safe.replace("'", " ").replace('"', " ").replace("\\", "")
    safe = re.sub(r'\s+', ' ', safe).strip()
    return f'"{safe}"'


def build_mdx(data):
    """Bygger MDX-innehåll med frontmatter."""
    def fmt_list(items):
        if not items:
            return " []"
        return "\n" + "\n".join(f"  - {yaml_safe(item)}" for item in items)

    fm = f"""---
title: {yaml_safe(data['title'])}
slug: {yaml_safe(data['slug'])}
description: {yaml_safe(data['description'])}
heroImage: {yaml_safe(data['heroImage'])}
brand: {yaml_safe(data['brand'])}
category: {yaml_safe(data['category'])}
price: {data['price']}
rating: {data['rating']}
pros:{fmt_list(data['pros'])}
cons:{fmt_list(data['cons'])}
affiliateUrl: {yaml_safe(data['affiliateUrl'])}
merchant: {yaml_safe(data['merchant'])}
featured: {str(data['featured']).lower()}
budgetPick: {str(data['budgetPick']).lower()}
targetSpecies:{fmt_list(data['targetSpecies'])}
techniques:{fmt_list(data['techniques'])}
priceRange: {yaml_safe(data['priceRange'])}
quizEnabled: {str(data['quizEnabled']).lower()}
---

{{/* Redaktionellt innehåll läggs till här */}}
"""
    return fm


# ---------------------------------------------------------------------------

def main():
    load_env()

    print("\n" + "="*50)
    print("  Strömkast, lägg till ny produkt")
    print("="*50 + "\n")

    print("Butik:")
    for key, m in MERCHANTS.items():
        print(f"  {key}. {m['name']}")
    while True:
        raw = input("> ").strip()
        if raw in MERCHANTS:
            merchant = MERCHANTS[raw]
            break
        print("Ogiltigt val, försök igen.")

    url = ask(f"\nKlistra in produktens URL på {merchant['name']}").strip()
    if not url.startswith("http"):
        print("Ogiltig URL.")
        sys.exit(1)

    if merchant["domain"] not in url:
        print(f"VARNING: URL:en innehåller inte {merchant['domain']}.")
        if not yes(ask("Fortsätta ändå? (j/n)", "n")):
            sys.exit(0)

    cleaned = clean_product_url(url)
    if cleaned != url:
        print(f"Spårningsparametrar borttagna:\n  {cleaned}")
        url = cleaned

    if "&" in urlsplit(url).query:
        print("VARNING: Produkt-URL:en har fler än en parameter.")
        print("Adtraction-länken URL-kodas inte, allt efter andra & tappas.")
        print("Korta ned till högst en parameter eller använd ren URL.")
        if not yes(ask("Fortsätta ändå? (j/n)", "n")):
            sys.exit(0)

    affiliate_url = f"{merchant['base']}&url={url}"

    # --- feeduppslag -------------------------------------------------------

    print(f"\nHämtar produktfeed för {merchant['name']}...")
    feed = fetch_feed(merchant["env"]) if merchant["env"] else {}
    if not merchant["env"]:
        print(f"  {merchant['name']} har ingen feed i Adtraction, fyll i värdena för hand.")

    product = feed.get(normalise(url))

    if feed and not product:
        print("\nVARNING: produkten finns inte i feeden.")
        print("Feeden innehåller bara produkter i lager, så den är troligen")
        print("tillfälligt slut. Kontrollera också att URL:en är rätt.")
        if not yes(ask("Fortsätta ändå? (j/n)", "j")):
            sys.exit(0)

    if product:
        print(f"\n  Träff i feeden (SKU {product['sku']}):")
        print(f"    {product['title']}")
        print(f"    Ordinarie pris: {product['price']} kr")
        if product["sale_price"] and product["sale_price"] < product["price"]:
            print(f"    Kampanjpris just nu: {product['sale_price']} kr")
            print("    price i frontmatter ska vara ordinarie. Sajten visar")
            print("    kampanjpriset automatiskt så länge det gäller.")
        if product["gtin"]:
            print(f"    EAN: {product['gtin']}")

    categories = load_categories()
    category = ask_single("Kategori:", categories)

    title = ask(f"Produktnamn (exakt som på {merchant['name']})",
                product["title"] if product else None, required=True)
    brand = ask("Varumärke (t.ex. Westin, Shimano, Kinetic)",
                product["brand"] if product and product["brand"] else None, required=True)

    price = ask_int("Ordinarie pris i SEK",
                    str(product["price"]) if product else None)

    suggested_slug = smart_slug(title)
    slug = ask("Slug (filnamn utan .mdx)", suggested_slug)

    print("\nKort beskrivning (1-2 meningar, visas i produktkort och quiz):")
    while True:
        description = input("> ").strip()
        if description:
            break
        print("  Beskrivningen kan inte lämnas tom.")

    target_species = ask_list("Vilka arter passar produkten för?", SPECIES_OPTIONS)
    techniques = ask_list("Vilka tekniker passar produkten för?", TECHNIQUE_OPTIONS)

    suggested_range = suggest_price_range(category, price)
    if suggested_range:
        print(f"\n({price} kr i kategorin {category} ger {suggested_range})")
    price_range = ask_choice("Prisklass?", PRICE_RANGES, suggested_range)

    if category == "spon":
        quiz_enabled = yes(ask("Ska spöet visas i Spöväljaren? (j/n)", "j"))
    else:
        quiz_enabled = False

    featured = yes(ask("Markera som 'Bästa val'? (j/n)", "n"))
    budget_pick = yes(ask("Markera som 'Bästa budget'? (j/n)", "n"))

    while True:
        try:
            rating = round(float(ask("Redaktionellt betyg (1.0-5.0)", "4.2").replace(",", ".")), 1)
            if 1.0 <= rating <= 5.0:
                break
        except ValueError:
            pass
        print("  Ange ett betyg mellan 1.0 och 5.0.")

    # --- bild --------------------------------------------------------------

    image_filename = f"{slug}.jpg"
    image_path = f"/images/gear/{image_filename}"
    dest = os.path.join(IMAGES_DIR, image_filename)
    image_saved = False

    if product and product["image"]:
        print(f"\nProduktbild finns i feeden:\n  {product['image']}")
        if yes(ask("Ladda ner den? (j/n)", "j")):
            image_saved = download_image(product["image"], dest)
    if not image_saved:
        print(f"\nKom ihåg att spara produktbilden som:\n  {dest}")

    # --- redaktionellt -----------------------------------------------------

    print("\nFördelar (ange en per rad, tom rad för att avsluta):")
    pros = []
    while True:
        line = input("  + ").strip()
        if not line:
            break
        pros.append(line)

    print("\nNackdelar (ange en per rad, tom rad för att avsluta):")
    cons = []
    while True:
        line = input("  - ").strip()
        if not line:
            break
        cons.append(line)

    data = {
        "title": title,
        "slug": slug,
        "description": description,
        "heroImage": image_path,
        "brand": brand,
        "category": category,
        "price": price,
        "rating": rating,
        "pros": pros if pros else ["Lägg till fördelar"],
        "cons": cons if cons else ["Lägg till nackdelar"],
        "affiliateUrl": affiliate_url,
        "merchant": merchant["name"],
        "featured": featured,
        "budgetPick": budget_pick,
        "targetSpecies": target_species,
        "techniques": techniques,
        "priceRange": price_range,
        "quizEnabled": quiz_enabled,
    }

    output_path = os.path.join(GEAR_REVIEWS_DIR, f"{slug}.mdx")

    if os.path.exists(output_path):
        if not yes(ask(f"\n{output_path} finns redan. Skriva över? (j/n)", "n")):
            print("Avbrutet.")
            sys.exit(0)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(build_mdx(data))

    print("\n" + "="*50)
    print("  Klar!")
    print("="*50)
    print(f"\nMDX-fil skapad: {output_path}")
    print("Affiliate-länk inlagd automatiskt")
    if image_saved:
        print(f"Produktbild hämtad: {dest}")

    print("\nÅterstår:")
    step = 1
    if not image_saved:
        print(f"  {step}. Spara produktbild som: {dest}")
        step += 1
    print(f"  {step}. Lägg till redaktionellt innehåll i {output_path}")
    step += 1
    print(f"  {step}. node --env-file=.env validate-feed.mjs")
    step += 1
    print(f"  {step}. npm run check")
    step += 1
    print(f"  {step}. git add {output_path}" + (f" {dest}" if image_saved else ""))

    print(f"\nAffiliate-länk:\n  {affiliate_url}\n")


if __name__ == "__main__":
    main()
