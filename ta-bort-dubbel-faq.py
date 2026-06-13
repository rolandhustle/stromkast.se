#!/usr/bin/env python3
"""
ta-bort-dubbel-faq.py

Tar bort brödtextens "## Vanliga frågor"-sektion pa artsidor dar frageorna
redan finns i frontmatter-faq (mallen renderar faq som dragspel, sa
brödtextsektionen ger dubbel FAQ). Sektionen ar sist i filen pa dessa sidor.

Kor fran repo-roten:  python3 ta-bort-dubbel-faq.py
"""
import re

TARGETS = [
    "src/content/species/farna.mdx",
    "src/content/species/kanadaroding.mdx",
]

for path in TARGETS:
    text = open(path, encoding="utf-8").read()
    m = re.search(r'\n#{2}[ \t]+Vanliga frågor[ \t]*\n', text)
    if not m:
        print(f"{path}: ingen brödtext-FAQ (hoppar)")
        continue
    new = text[:m.start()].rstrip() + "\n"
    open(path, "w", encoding="utf-8").write(new)
    print(f"{path}: tog bort brödtext-FAQ ({len(text) - len(new)} tecken)")
