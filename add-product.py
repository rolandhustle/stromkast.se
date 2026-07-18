#!/usr/bin/env python3
"""
add-product.py — Lägg till en ny produkt i Strömkast

Användning:
  python3 add-product.py

Skriptet guidar dig igenom processen och skapar en MDX-fil
med korrekt frontmatter och affiliate-länk.
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
    },
    "2": {
        "name": "Frilufts och Vildmark",
        "base": "https://go.fritidvildmark.se/t/t?a=2020679758&as=2072765905&t=2&tk=1",
        "domain": "fritidvildmark.se",
    },
    "3": {
        "name": "Outl1",
        "base": "https://do.outl1.se/t/t?a=1728546059&as=2072765905&t=2&tk=1",
        "domain": "outl1.se",
    },
}

GEAR_REVIEWS_DIR = "src/content/gear-reviews"
GEAR_CATEGORIES_DIR = "src/content/gear-categories"
IMAGES_DIR = "public/images/gear"

SPECIES_OPTIONS = ["abborre", "gadda", "gos", "oring", "lax", "harr", "havsoring"]
TECHNIQUE_OPTIONS = ["jigg", "dropshot", "spinn", "wobbler", "jerkbait", "flugfiske", "mete", "trolling", "isfiske"]
PRICE_RANGES = {"1": "budget", "2": "mellanklass", "3": "premium"}

TRACKING_PARAMS = ("gclid", "gbraid", "wbraid", "gad_source", "fbclid", "msclkid")


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


def ask(prompt, default=None):
    if default:
        result = input(f"{prompt} [{default}]: ").strip()
        return result if result else default
    return input(f"{prompt}: ").strip()


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


def ask_choice(prompt, options):
    print(f"\n{prompt}")
    for key, val in options.items():
        print(f"  {key}. {val}")
    while True:
        raw = input("> ").strip()
        if raw in options:
            return options[raw]
        print("Ogiltigt val, försök igen.")


def try_fetch_price(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=5) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
        match = re.search(r'"price"\s*:\s*"?([\d,.]+)"?', html)
        if match:
            return int(float(match.group(1).replace(",", ".").replace(" ", "")))
    except Exception:
        pass
    return None


def yaml_safe(value):
    """Gör en sträng säker för YAML — tar bort tecken som kraschar parsern."""
    safe = str(value)
    # Ersätt fot/tum-tecken som förekommer i spönamn (7'0", 8'6" etc.)
    safe = re.sub(r"(\d)'(\d)", r"\1.\2", safe)   # 7'0 → 7.0
    safe = re.sub(r'(\d)"', r'\1', safe)            # 7" → 7
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


def main():
    print("\n" + "="*50)
    print("  Strömkast — Lägg till ny produkt")
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
        proceed = ask("Fortsätta ändå? (j/n)", "n")
        if proceed.lower() not in ("j", "ja"):
            sys.exit(0)

    cleaned = clean_product_url(url)
    if cleaned != url:
        print(f"Spårningsparametrar borttagna:\n  {cleaned}")
        url = cleaned

    if "&" in urlsplit(url).query:
        print("VARNING: Produkt-URL:en har fler än en parameter.")
        print("Adtraction-länken URL-kodas inte, allt efter andra & tappas.")
        print("Korta ned till högst en parameter eller använd ren URL.")
        proceed = ask("Fortsätta ändå? (j/n)", "n")
        if proceed.lower() not in ("j", "ja"):
            sys.exit(0)

    affiliate_url = f"{merchant['base']}&url={url}"

    categories = load_categories()
    category = ask_single("Kategori:", categories)

    print("\nFörsöker hämta produktinfo...")
    fetched_price = try_fetch_price(url)

    title = ask(f"Produktnamn (exakt som på {merchant['name']})")
    brand = ask("Varumärke (t.ex. Westin, Shimano, Kinetic)")

    price_input = ask("Pris i SEK", str(fetched_price) if fetched_price else None)
    price = int(re.sub(r'[^0-9]', '', price_input))

    suggested_slug = smart_slug(title)
    slug = ask("Slug (filnamn utan .mdx)", suggested_slug)

    print("\nKort beskrivning (1–2 meningar, visas i produktkort och quiz):")
    description = input("> ").strip()

    target_species = ask_list("Vilka arter passar produkten för?", SPECIES_OPTIONS)
    techniques = ask_list("Vilka tekniker passar produkten för?", TECHNIQUE_OPTIONS)
    price_range = ask_choice("Prisklass?", PRICE_RANGES)

    if category == "spon":
        quiz_raw = ask("Ska spöet visas i Spöväljaren? (j/n)", "j")
        quiz_enabled = quiz_raw.lower() in ("j", "ja", "y", "yes")
    else:
        quiz_enabled = False

    featured_raw = ask("Markera som 'Bästa val'? (j/n)", "n")
    featured = featured_raw.lower() in ("j", "ja", "y", "yes")

    budget_raw = ask("Markera som 'Bästa budget'? (j/n)", "n")
    budget_pick = budget_raw.lower() in ("j", "ja", "y", "yes")

    rating_raw = ask("Redaktionellt betyg (1.0–5.0)", "4.2")
    rating = round(float(rating_raw.replace(",", ".")), 1)

    image_filename = f"{slug}.jpg"
    image_path = f"/images/gear/{image_filename}"
    print(f"\nKom ihåg att spara produktbilden som:")
    print(f"  {IMAGES_DIR}/{image_filename}")

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
        overwrite = ask(f"\n{output_path} finns redan. Skriva över? (j/n)", "n")
        if overwrite.lower() not in ("j", "ja"):
            print("Avbrutet.")
            sys.exit(0)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(build_mdx(data))

    print("\n" + "="*50)
    print("  Klar!")
    print("="*50)
    print(f"\n✓ MDX-fil skapad: {output_path}")
    print(f"✓ Affiliate-länk inlagd automatiskt")
    print(f"\nÅterstår:")
    print(f"  1. Spara produktbild som: {IMAGES_DIR}/{image_filename}")
    print(f"  2. Lägg till redaktionellt innehåll i {output_path}")
    print(f"  3. git add {output_path} {IMAGES_DIR}/{image_filename}")
    print(f"\nAffiliate-länk:")
    print(f"  {affiliate_url}\n")


if __name__ == "__main__":
    main()