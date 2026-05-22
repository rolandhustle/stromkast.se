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
import urllib.request

AFFILIATE_BASE = "https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1"
GEAR_REVIEWS_DIR = "src/content/gear-reviews"
IMAGES_DIR = "public/images/gear"

SPECIES_OPTIONS = ["abborre", "gadda", "gos", "oring", "lax", "harr", "havsoring"]
TECHNIQUE_OPTIONS = ["jigg", "dropshot", "spinn", "wobbler", "jerkbait", "flugfiske", "mete", "trolling", "isfiske"]
PRICE_RANGES = {"1": "budget", "2": "mellanklass", "3": "premium"}
PRICE_RANGE_LABELS = {"budget": "under 800 kr", "mellanklass": "800–1 800 kr", "premium": "1 800–3 500 kr"}


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


def ask_choice(prompt, options):
    print(f"\n{prompt}")
    for key, val in options.items():
        print(f"  {key}. {val} ({PRICE_RANGE_LABELS[val]})")
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

    url = ask("Klistra in produktens URL på FiskeOnline").strip()
    if not url.startswith("http"):
        print("Ogiltig URL.")
        sys.exit(1)

    affiliate_url = f"{AFFILIATE_BASE}&url={url}"

    print("\nFörsöker hämta produktinfo...")
    fetched_price = try_fetch_price(url)

    title = ask("Produktnamn (exakt som på FiskeOnline)")
    brand = ask("Varumärke (t.ex. Westin, Shimano, Kinetic)")

    price_input = ask("Pris i SEK", str(fetched_price) if fetched_price else None)
    price = int(re.sub(r'[^0-9]', '', price_input))

    suggested_slug = smart_slug(title)
    slug = ask("Slug (filnamn utan .mdx)", suggested_slug)

    print("\nKort beskrivning (1–2 meningar, visas i produktkort och quiz):")
    description = input("> ").strip()

    target_species = ask_list("Vilka arter passar spöet för?", SPECIES_OPTIONS)
    techniques = ask_list("Vilka tekniker passar spöet för?", TECHNIQUE_OPTIONS)
    price_range = ask_choice("Prisklass?", PRICE_RANGES)

    quiz_raw = ask("Ska spöet visas i Spöväljaren? (j/n)", "j")
    quiz_enabled = quiz_raw.lower() in ("j", "ja", "y", "yes")

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
        "category": "spon",
        "price": price,
        "rating": rating,
        "pros": pros if pros else ["Lägg till fördelar"],
        "cons": cons if cons else ["Lägg till nackdelar"],
        "affiliateUrl": affiliate_url,
        "merchant": "FiskeOnline",
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
    print(f"  3. git add . && git commit -m 'feat: lägg till {slug}'")
    print(f"\nAffiliate-länk:")
    print(f"  {affiliate_url}\n")


if __name__ == "__main__":
    main()
