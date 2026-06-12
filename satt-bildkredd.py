#!/usr/bin/env python3
"""
Sätter heroSource/heroCredit/heroCreditUrl i frontmatter för de destinationer
som har riktigt foto med känd kredd. Idempotent: hoppar över filer som redan
har heroSource. Körs från projektroten (~/stromkast).

    python3 satt-bildkredd.py          # gör ändringen
    python3 satt-bildkredd.py --dry    # visar vad som skulle ändras, rör inget
"""
import sys
from pathlib import Path

DEST_DIR = Path("src/content/destinations")

# slug -> (fotograf, profil-url). Slug = filnamn utan .mdx för dessa tio.
KREDD = {
    "hornavan":          ("Kent Holmkvist",  "https://pixabay.com/sv/users/fraggelot-265538/"),
    "vindelalven":       ("Helena",          "https://pixabay.com/sv/users/hsvall-975796/"),
    "byskealven":        ("Peter Schulz",    "https://unsplash.com/@visionaryconcepts"),
    "tidan":             ("Julia Wallin",    "https://unsplash.com/@jjuuuliiaa"),
    "pitealven":         ("Niklas Jonasson", "https://unsplash.com/@niklasjonasson"),
    "tornetrask":        ("Hendrik Morkel",  "https://unsplash.com/@hendrikmorkel"),
    "angermanalven":     ("Mahshid Helali",  "https://unsplash.com/@mahshidhelali"),
    "blekinge-skargard": ("Patrick Federi",  "https://unsplash.com/@federi"),
    "vattern":           ("Niklas Jonasson", "https://unsplash.com/@niklasjonasson"),
    "vanern":            ("Vincent Eisfeld", "https://unsplash.com/@extraleben"),
}

dry = "--dry" in sys.argv


def split_frontmatter(lines):
    """Returnerar (start_idx, end_idx) för raderna mellan de två --- markörerna."""
    if not lines or lines[0].strip() != "---":
        return None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return (1, i)  # frontmatter-innehåll ligger på [1, i)
    return None


def process(slug, credit, url):
    path = DEST_DIR / f"{slug}.mdx"
    if not path.exists():
        return f"SAKNAS   {path}"

    text = path.read_text(encoding="utf-8")
    lines = text.split("\n")
    fm = split_frontmatter(lines)
    if fm is None:
        return f"INGEN FM {path}"
    fm_start, fm_end = fm

    # Idempotens: redan satt?
    for i in range(fm_start, fm_end):
        if lines[i].lstrip().startswith("heroSource:"):
            return f"HOPPAR   {slug} (heroSource finns redan)"

    # Hitta heroImage-raden inom frontmatter och lägg in efter den.
    hero_idx = None
    for i in range(fm_start, fm_end):
        if lines[i].lstrip().startswith("heroImage:"):
            hero_idx = i
            break
    if hero_idx is None:
        return f"INGEN heroImage {slug}"

    block = [
        'heroSource: photo',
        f'heroCredit: "{credit}"',
        f'heroCreditUrl: "{url}"',
    ]
    new_lines = lines[: hero_idx + 1] + block + lines[hero_idx + 1 :]
    new_text = "\n".join(new_lines)

    if dry:
        return f"SKULLE   {slug}: + {credit} ({url})"

    path.write_text(new_text, encoding="utf-8")
    return f"SATT     {slug}: {credit}"


def main():
    if not DEST_DIR.exists():
        print(f"Hittar inte {DEST_DIR}. Kör skriptet från projektroten (~/stromkast).")
        sys.exit(1)
    print("DRY RUN, inget skrivs.\n" if dry else "")
    for slug, (credit, url) in KREDD.items():
        print(process(slug, credit, url))


if __name__ == "__main__":
    main()
