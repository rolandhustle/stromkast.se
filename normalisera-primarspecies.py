#!/usr/bin/env python3
"""
normalisera-primarspecies.py

Stadar primarySpecies pa alla destinationssidor till kanoniska visningsnamn
(t.ex. "gadda"/"Gadda" -> "Gädda", "havsoring" -> "Havsöring").

Kanoniska namn las direkt ur artsidornas title-falt, sa kartan halls aktuell.
Arter utan egen sida (nabbgadda, nors, kanadaroding) hanteras via extras.

Kor fran repo-roten:  python3 normalisera-primarspecies.py
"""

import glob
import re
import sys

SPECIES_DIR = "src/content/species"
DEST_DIR = "src/content/destinations"

# Arter utan egen artsida men som forekommer i primarySpecies.
# nabbgadda ar bara ett vardagligt namn pa horngadda, som HAR en artsida,
# sa det konverteras till "Horngädda" (fold fangar bada stavningarna).
EXTRAS = {
    "nabbgadda": "Horngädda",
    "nors": "Nors",
    "kanadaroding": "Kanadaröding",
}


def fold(s: str) -> str:
    """Vik ner till ASCII-nyckel: gemener, a/a/o."""
    return s.strip().lower().replace("å", "a").replace("ä", "a").replace("ö", "o")


def field(fm: str, name: str):
    m = re.search(rf'^{name}:\s*["\']?(.+?)["\']?\s*$', fm, re.M)
    return m.group(1).strip() if m else None


# --- Bygg kanonisk karta: fold(slug|title) -> visningsnamn ---
canon = {}
for f in glob.glob(f"{SPECIES_DIR}/*.mdx"):
    fm = open(f, encoding="utf-8").read().split("---")[1]
    slug = field(fm, "slug")
    title = field(fm, "title")
    if not title:
        continue
    if slug:
        canon[fold(slug)] = title
    canon[fold(title)] = title
for k, v in EXTRAS.items():
    canon[fold(k)] = v

# --- Normalisera varje destination ---
changed_files = 0
unknown = []
total_swaps = 0

for f in sorted(glob.glob(f"{DEST_DIR}/*.mdx")):
    text = open(f, encoding="utf-8").read()
    m = re.search(r'^(primarySpecies:\s*)\[(.*?)\]\s*$', text, re.M)
    if not m:
        continue
    values = [v.strip().strip('"\'') for v in m.group(2).split(",") if v.strip()]
    new_values = []
    file_changed = False
    for v in values:
        key = fold(v)
        if key in canon:
            nv = canon[key]
            if nv != v:
                file_changed = True
                total_swaps += 1
            new_values.append(nv)
        else:
            unknown.append(f"{f}: \"{v}\"")
            new_values.append(v)  # lamna orort
    if file_changed:
        new_line = m.group(1) + "[" + ", ".join(f'"{v}"' for v in new_values) + "]"
        text = text[:m.start()] + new_line + text[m.end():]
        open(f, "w", encoding="utf-8").write(text)
        changed_files += 1

print(f"Normaliserade {total_swaps} varden i {changed_files} destinationsfiler.")
if unknown:
    print("\nOkanda varden (lamnade ororda):")
    for u in sorted(set(unknown)):
        print("  ! " + u)
