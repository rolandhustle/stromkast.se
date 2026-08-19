#!/usr/bin/env python3
"""
convert-gear-reviews.py — Konverterar gear-reviews från JSON till MDX

Kör från projektroten:
  python3 convert-gear-reviews.py
"""

import json
import os
import glob

GEAR_REVIEWS_DIR = "src/content/gear-reviews"

def json_to_mdx(data):
    """Konverterar ett JSON-objekt till MDX-format med frontmatter."""
    
    # Bygg frontmatter
    def fmt_list(items):
        return "\n" + "\n".join(f"  - {item}" for item in items)

    pros = fmt_list(data.get("pros", []))
    cons = fmt_list(data.get("cons", []))
    species = fmt_list(data.get("targetSpecies", []))
    techniques = fmt_list(data.get("techniques", []))

    title = data["title"].replace('"', '\\"')

    frontmatter = f"""---
title: "{title}"
slug: "{data["slug"]}"
description: "{data["description"]}"
heroImage: "{data["heroImage"]}"
brand: "{data["brand"]}"
category: "{data["category"]}"
price: {data["price"]}
rating: {data["rating"]}
pros:{pros}
cons:{cons}
affiliateUrl: "{data.get("affiliateUrl", "")}"
merchant: "{data.get("merchant", "FiskeOnline")}"
featured: {str(data.get("featured", False)).lower()}
budgetPick: {str(data.get("budgetPick", False)).lower()}
targetSpecies:{species}
techniques:{techniques}
priceRange: "{data.get("priceRange", "mellanklass")}"
quizEnabled: {str(data.get("quizEnabled", False)).lower()}
---"""

    # Lägg till tom body som placeholder
    body = "\n\n{/* Redaktionellt innehåll läggs till här */}\n"
    
    return frontmatter + body

def main():
    json_files = glob.glob(os.path.join(GEAR_REVIEWS_DIR, "*.json"))
    
    if not json_files:
        print("Inga JSON-filer hittades.")
        return

    converted = 0
    for json_path in json_files:
        with open(json_path, "r", encoding="utf-8") as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError as e:
                print(f"Fel i {json_path}: {e}")
                continue

        mdx_path = json_path.replace(".json", ".mdx")
        mdx_content = json_to_mdx(data)

        with open(mdx_path, "w", encoding="utf-8") as f:
            f.write(mdx_content)

        os.remove(json_path)
        print(f"Konverterad: {os.path.basename(json_path)} → {os.path.basename(mdx_path)}")
        converted += 1

    print(f"\nKlar — {converted} filer konverterade.")

if __name__ == "__main__":
    main()
