#!/bin/bash
# Pre-commit hook: Update PROJECT_STATUS.md with timestamp and file summary

set -e

FILES=$(git diff --cached --name-only | grep -v "^PROJECT_STATUS.md$" | head -3 | tr '\n' ', ' | sed 's/,$//')
if [ -z "$FILES" ]; then
  exit 0
fi

TIMESTAMP=$(date "+%Y-%m-%d %H:%M")

# Find the line with "## Completed Work" and insert a marker
if ! grep -q "^## Recent Updates" PROJECT_STATUS.md; then
  # Add a Recent Updates section after the first h2
  sed -i "0,/^## /s/^## /## Recent Updates\n\n(Last update: $TIMESTAMP)\n\n## /" PROJECT_STATUS.md
else
  # Update the timestamp in existing Recent Updates section
  sed -i "s/^(Last update: .*)/($TIMESTAMP)/" PROJECT_STATUS.md
fi

git add PROJECT_STATUS.md
exit 0
