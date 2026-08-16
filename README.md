# Tasan Media – AI Content System

AI-powered content workflow for the YouTube channel **tasan-media**, built with Claude Code and a growing ecosystem of agents.

Website: https://tasan.ch

---

## Project Vision

Tasan Media is a long-term project with two equally important goals:

1. **Build a real, working YouTube content pipeline** — from trend discovery to published video.
2. **Learn AI engineering by doing** — Claude Code, agent design, automation, APIs, and full-stack tooling.

The system should grow gradually from a few Markdown-defined agents into a professional, modular AI-agent architecture.

---

## Long-Term Architecture Idea

```
trend discovery  →  research  →  scripting  →  NotebookLM  →  video production  →  publishing
```

Each stage is owned by one or more specialized agents. Outputs from each stage are stored as structured Markdown / JSON so the next stage can consume them directly.

Architecture principles:

- **Modular** — each agent has a single, clear responsibility
- **Composable** — outputs of one agent are the inputs of the next
- **Reproducible** — every run is dated, stored, and reusable as a dataset
- **Human-in-the-loop** — nothing is published without review
- **Tool-agnostic at the edges** — official APIs over scraping; standard formats over vendor lock-in

---

## Learning Goals

- Master Claude Code (agents, slash commands, hooks, MCP)
- Practice clean prompt and context engineering with Markdown
- Build production-style Python services (later FastAPI)
- Learn TypeScript for a future dashboard
- Containerize with Docker and persist with PostgreSQL when the time is right
- Develop a feel for *when* to introduce complexity — and when not to

---

## Current MVP Phase

**Phase 0 — Foundations (now)**

- Repository scaffolding
- First Markdown-defined agent: `trend-scout`
- Channel principles and content philosophy documented
- Data source plan written down (no code yet)

No automation, no hooks, no subagents, no frameworks. Just clean foundations.

---

## Future Plans

| Phase | Focus | Outputs |
|------|------|--------|
| 1 | **Trend collection** | Daily Markdown/JSON trend reports per region |
| 2 | **Research pipeline** | Per-trend research dossiers with sources |
| 3 | **Scripting pipeline** | Draft video scripts from research dossiers |
| 4 | **NotebookLM integration** | Use research dossiers as NotebookLM sources |
| 5 | **YouTube publishing workflow** | Metadata, thumbnails checklist, upload prep |

All outputs follow a date-based folder structure (`content/<stage>/YYYY-MM-DD/`) for organization, historical tracking, and dataset reuse.

---

## Repository Layout

```
agents/      Markdown definitions for each AI agent
templates/   Reusable prompt and document templates
content/     Generated outputs (trends / research / scripts), date-organized
config/      Channel principles and configuration
docs/        Roadmaps, data sources, design notes
scripts/     Python automation (added incrementally)
data/        Raw and processed datasets
.claude/     Claude Code project settings
```
