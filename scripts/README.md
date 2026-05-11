# scripts/

Python automation for the tasan-media-agents pipeline.

This folder is **intentionally empty for now** — scripts will be added incrementally as real needs appear, not preemptively.

---

## Planned Responsibilities

When implementation begins, scripts here will:

- **Collect trends** from Google Trends, YouTube Data API, and (later) Reddit / HN / Product Hunt.
- **Normalize data** into a consistent internal schema regardless of source.
- **Save reports** as structured JSON and human-readable Markdown into the dated `content/` folders.
- **Prepare datasets** for downstream AI agents (research, scripting).

---

## Conventions (when scripts arrive)

- Python 3.11+
- Standard library first; third-party only when necessary
- Each script is small and single-purpose
- Outputs go to `content/<stage>/YYYY-MM-DD/` — never overwrite existing dated outputs
- Raw API dumps go to `data/raw/`, cleaned/normalized data to `data/processed/`
- Secrets via environment variables — never committed
- One CLI entry point per script, with `--help` text

---

## Out of Scope (for now)

- Schedulers, queues, or daemons
- Web frameworks
- Container builds
- Database migrations

These join the project later — see `docs/tech-roadmap.md`.
