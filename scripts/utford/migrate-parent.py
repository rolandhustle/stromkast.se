#!/usr/bin/env python3
"""
Lägger till "parent" i de befintliga gear-category-JSON:erna.
Idempotent: skriver bara om filen om parent saknas eller har fel värde.
Kör från projektroten: python3 migrate-parent.py
"""
import json
import os
import glob

# Slug -> parentgrupp. Nya betes-kategorier (jerkbaits/jiggar/kustdrag)
# har redan parent satt i sina egna filer och rörs inte här.
PARENTS = {
    "spon": "spon",
    "trollingspon": "spon",
    "haspelrullar": "rullar",
    "flatlinor": "linor",
    "fluorocarbon": "linor",
    "nylon": "linor",
}

FOLDER = "src/content/gear-categories"

def main():
    changed = []
    for path in sorted(glob.glob(os.path.join(FOLDER, "*.json"))):
        with open(path, encoding="utf-8") as f:
            data = json.load(f)
        slug = data.get("slug") or os.path.basename(path).replace(".json", "")
        if slug not in PARENTS:
            continue  # nya betes-kategorier eller okänd kategori, lämnas orörd
        want = PARENTS[slug]
        if data.get("parent") == want:
            continue  # redan korrekt, hoppa
        # Lägg parent direkt efter slug för läsbarhet
        new = {}
        for k, v in data.items():
            new[k] = v
            if k == "slug":
                new["parent"] = want
        if "parent" not in new:
            new["parent"] = want
        with open(path, "w", encoding="utf-8") as f:
            json.dump(new, f, ensure_ascii=False, indent=2)
            f.write("\n")
        changed.append((slug, want))
    if changed:
        for slug, parent in changed:
            print(f"satte parent={parent} på {slug}")
    else:
        print("Inget att ändra, alla parent-fält redan korrekta")

if __name__ == "__main__":
    main()
