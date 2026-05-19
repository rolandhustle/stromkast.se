#!/usr/bin/env python3
"""
add-product.py — Lägg till en ny produkt i Strömkast

Användning:
  python3 add-product.py

Skriptet guidar dig igenom processen steg för steg.
"""

import json
import os
import re
import sys
import urllib.request
import urllib.error

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
        print(f"  {key}. {val}")
    while True:
        raw = input("> ").strip()
        if raw in options:
            return options[raw]
        print("Ogiltigt val, försök igen.")

def smart_slug(title):
    """Genererar en kort slug från varumärke + modellnamn, utan tekniska specifikationer."""
    # Ta bort allt efter första förekomsten av längd/mått (siffra + cm/m/fot/tum)
    title = re.split(r'\s+\d+[\',″"/]', title)[0]
    # Ta bort vanliga suffix
    title = re.sub(r'\s*(Multi|2-delat|2pcs)\s*', ' ', title, flags=re.IGNORECASE)
    # Slugga och kapa till 50 tecken
    slug = slugify(title.strip())
    return slug[:50].rstrip('-')
    match = re.search(r'/produkt/([^/?]+)', url)
    if match:
        return match.group(1)
    return None

def try_fetch_price(url):
    """Försök hämta pris från FiskeOnline. Returnerar None om det misslyckas."""
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

def main():
    print("\n" + "="*50)
    print("  Strömkast — Lägg till ny produkt")
    print("="*50 + "\n")

    # URL
    url = ask("Klistra in produktens URL på FiskeOnline").strip()
    if not url.startswith("http"):
        print("Ogiltig URL.")
        sys.exit(1)

    affiliate_url = f"{AFFILIATE_BASE}&url={url}"
    url_slug = extract_slug_from_url(url)

    print("\nFörsöker hämta produktinfo...")
    fetched_price = try_fetch_price(url)

    # Produktnamn
    title = ask("Produktnamn (exakt som på FiskeOnline)")

    # Varumärke
    brand = ask("Varumärke (t.ex. Westin, Shimano, Kinetic)")

    # Pris
    if fetched_price:
        price_input = ask(f"Pris i SEK", str(fetched_price))
    else:
        price_input = ask("Pris i SEK")
    price = int(re.sub(r'[^0-9]', '', price_input))

    # Slug
    suggested_slug = smart_slug(title)
    slug = ask("Slug (filnamn utan .json)", suggested_slug)

    # Beskrivning
    print("\nKort beskrivning (1–2 meningar, visas i produktkort och quiz):")
    description = input("> ").strip()

    # Målarter
    target_species = ask_list("Vilka arter passar spöet för?", SPECIES_OPTIONS)

    # Tekniker
    techniques = ask_list("Vilka tekniker passar spöet för?", TECHNIQUE_OPTIONS)

    # Prisklass
    price_range = ask_choice(
        "Prisklass?",
        {k: f"{v} ({PRICE_RANGE_LABELS[v]})" for k, v in PRICE_RANGES.items()}
    )

    # Quiz
    quiz_raw = ask("Ska spöet visas i Spöväljaren? (j/n)", "j")
    quiz_enabled = quiz_raw.lower() in ("j", "ja", "y", "yes")

    # Featured / budgetPick
    featured_raw = ask("Markera som 'Bästa val'? (j/n)", "n")
    featured = featured_raw.lower() in ("j", "ja", "y", "yes")

    budget_raw = ask("Markera som 'Bästa budget'? (j/n)", "n")
    budget_pick = budget_raw.lower() in ("j", "ja", "y", "yes")

    # Betyg
    rating_raw = ask("Redaktionellt betyg (1.0–5.0)", "4.2")
    rating = round(float(rating_raw.replace(",", ".")), 1)

    # Bild
    image_filename = f"{slug}.jpg"
    image_path = f"/images/gear/{image_filename}"
    print(f"\nKom ihåg att spara produktbilden som:")
    print(f"  {IMAGES_DIR}/{image_filename}")

    # Pros och cons
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

    # Bygg JSON
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
        "quizEnabled": quiz_enabled
    }

    # Spara fil
    output_path = os.path.join(GEAR_REVIEWS_DIR, f"{slug}.json")

    if os.path.exists(output_path):
        overwrite = ask(f"\n{output_path} finns redan. Skriva över? (j/n)", "n")
        if overwrite.lower() not in ("j", "ja"):
            print("Avbrutet.")
            sys.exit(0)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("\n" + "="*50)
    print("  Klar!")
    print("="*50)
    print(f"\n✓ JSON-fil skapad: {output_path}")
    print(f"✓ Affiliate-länk inlagd automatiskt")
    print(f"\nÅterstår:")
    print(f"  1. Spara produktbild som: {IMAGES_DIR}/{image_filename}")
    print(f"  2. Kontrollera pros/cons om du hoppade över dem")
    print(f"  3. git add . && git commit -m 'feat: lägg till {slug}'")
    print(f"\nAffiliate-länk:")
    print(f"  {affiliate_url}\n")

if __name__ == "__main__":
    main()
