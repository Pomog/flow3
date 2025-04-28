#!/usr/bin/env bash
# Usage: ./dump_tree.sh [source_dir] [output_file]

set -euo pipefail

SRC_DIR=${1:-.}
OUT_FILE=${2:-tree.txt}

: > "$OUT_FILE"

# find:  -type f
#        ! -samefile "$OUT_FILE"
#        -print0
find "$SRC_DIR" -type f ! -samefile "$OUT_FILE" -print0 |
while IFS= read -r -d '' file; do
  {
    printf '===== %s =====\n' "$file"
    cat "$file"
    printf '\n\n'
  } >> "$OUT_FILE"
done

echo "Done. Written to: $OUT_FILE"
