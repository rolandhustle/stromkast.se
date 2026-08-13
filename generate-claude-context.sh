#!/usr/bin/env bash
# generate-claude-context.sh
# Kör från projektroten (~/stromkast eller där din src/ ligger).
# Genererar filen claude-context.md som du laddar upp till Claude-projektet.

set -euo pipefail
OUT="claude-context.md"

# ---------------------------------------------------------------------------
# Hjälpfunktion: skriver en sektion med filinnehåll
# ---------------------------------------------------------------------------
section() {
  local label="$1"
  local file="$2"
  if [ -f "$file" ]; then
    echo "" >> "$OUT"
    echo "## $label" >> "$OUT"
    echo '```' >> "$OUT"
    cat "$file" >> "$OUT"
    echo '```' >> "$OUT"
  fi
}

# ---------------------------------------------------------------------------
# Starta filen
# ---------------------------------------------------------------------------
cat > "$OUT" << 'HEADER'
# Strömkast.se — samlad projektkontext för Claude

Genererad automatiskt av generate-claude-context.sh.
Ersätter inte CLAUDE.md — är ett komplement med faktiskt filinnehåll.
Ladda upp den här filen till Claude-projektet och ersätt tidigare version.

---
HEADER

# ---------------------------------------------------------------------------
# 1. Filträd
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "## Filträd (src/)" >> "$OUT"
echo '```' >> "$OUT"
if command -v tree &>/dev/null; then
  tree src/ --noreport -I "node_modules|*.png|*.jpg|*.jpeg|*.webp|*.svg|*.ico|*.woff*|*.ttf" >> "$OUT"
else
  find src/ \
    ! -path "*/node_modules/*" \
    ! -name "*.png" ! -name "*.jpg" ! -name "*.jpeg" \
    ! -name "*.webp" ! -name "*.svg" ! -name "*.ico" \
    ! -name "*.woff" ! -name "*.woff2" ! -name "*.ttf" \
    | sort >> "$OUT"
fi
echo '```' >> "$OUT"

# ---------------------------------------------------------------------------
# 2. Konfiguration
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Konfiguration" >> "$OUT"

section "src/content.config.ts" "src/content.config.ts"
section "astro.config.mjs" "astro.config.mjs"
section "tsconfig.json" "tsconfig.json"
section "package.json" "package.json"

# ---------------------------------------------------------------------------
# 3. Stilar och tokens
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Stilar" >> "$OUT"

section "src/styles/tokens.css" "src/styles/tokens.css"
section "src/styles/global.css" "src/styles/global.css"

# ---------------------------------------------------------------------------
# 4. Layouts
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Layouts" >> "$OUT"

for f in src/layouts/*.astro; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 5. Komponenter
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Komponenter" >> "$OUT"

for f in src/components/*.astro src/components/*.tsx; do
  [ -f "$f" ] && section "$f" "$f"
done

# Subkataloger (t.ex. quiz/)
while IFS= read -r f; do
  section "$f" "$f"
done < <(find src/components -mindepth 2 \( -name "*.astro" -o -name "*.tsx" \) | sort)

# ---------------------------------------------------------------------------
# 6. Sidmallar (pages)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Sidmallar (pages)" >> "$OUT"

for f in $(find src/pages -name "*.astro" -o -name "*.ts" -o -name "*.tsx" | sort); do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 7. Lib
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Lib" >> "$OUT"

for f in src/lib/*.ts src/lib/*.tsx; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 8. Content — gear-categories (JSON)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Content: gear-categories" >> "$OUT"

for f in src/content/gear-categories/*.json; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 9. Content — gear-reviews (MDX, alla)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Content: gear-reviews" >> "$OUT"

for f in src/content/gear-reviews/*.mdx; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 10. Content — species (MDX)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Content: species" >> "$OUT"

for f in src/content/species/*.mdx; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 11. Content — destinations (MDX)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Content: destinations" >> "$OUT"

for f in src/content/destinations/*.mdx; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 12. Content — techniques (MDX)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Content: techniques" >> "$OUT"

for f in src/content/techniques/*.mdx; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 13. Content — articles (MDX)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Content: articles" >> "$OUT"

for f in src/content/articles/*.mdx; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 14. Content — authors (JSON)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Content: authors" >> "$OUT"

for f in src/content/authors/*.json; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 15. Promptmallar
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Promptmallar" >> "$OUT"

for f in prompt_*.md; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# 16. Verktyg och drift (CI + deploy)
# ---------------------------------------------------------------------------
echo "" >> "$OUT"
echo "# Verktyg och drift" >> "$OUT"

# Innehållsvalidering (npm run check)
section "check-content.mjs" "check-content.mjs"
section "validate-feed.mjs" "validate-feed.mjs"
section "fix-fallback-prices.mjs" "fix-fallback-prices.mjs"

# GitHub Actions-workflows (t.ex. daglig ombyggnad för SMHI-data)
for f in .github/workflows/*.yml .github/workflows/*.yaml; do
  [ -f "$f" ] && section "$f" "$f"
done

# ---------------------------------------------------------------------------
# Klart
# ---------------------------------------------------------------------------
SIZE=$(wc -c < "$OUT")
LINES=$(wc -l < "$OUT")
echo ""
echo "✅ Klar: $OUT ($LINES rader, $SIZE bytes)"
echo ""
echo "Nästa steg:"
echo "  1. Kontrollera att filen inte överstiger 5 MB (Claude-projektets gräns per fil)"
echo "  2. Ladda upp claude-context.md till ditt Claude-projekt"
echo "  3. Du kan ta bort individuellt uppladdade MDX/JSON/Astro-filer efteråt"
echo "     och hålla claude-context.md som enda aggregerad källfil"
