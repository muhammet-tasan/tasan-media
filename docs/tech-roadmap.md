# Technology Roadmap

This document records the long-term technology direction for tasan-media and *why* each piece was chosen. Most of these are not implemented yet — they exist here as deliberate choices for future phases.

The guiding rule: **introduce each technology only when a real use case demands it.**

---

## Current Production Tool Stack

These tools are already in active use as human-operated production tools. Agents generate briefs for them; they are not automated (yet).

### Canva — slide design and scene production

- **Role:** Scene backgrounds, text overlays, simple animations, visual templates for each video.
- **Why chosen:** No-code, fast, excellent for solo creators, strong template ecosystem, motion features sufficient for educational content.
- **Agent integration:** Scene Production Agent generates Canva-specific instructions per scene block.
- **Automation readiness:** 6 base templates established for first video (Warm Static, Dark Two-Text, Data Stat, App Overview, Quote Card, Serious Statement). Stat and quote slides are Canva API candidates—text + optional B-roll swaps. Future: when producing 2+ videos/month, Canva API could reduce template production time from 2.5 hours to <30 min per video.
- **Future:** Could be partially automated via Canva API when volume justifies it.

### ElevenLabs — AI voice generation

- **Role:** Narration voice for all videos.
- **Why chosen:** High-quality German TTS, controllable pacing and emotion, no recording studio needed.
- **Agent integration:** Voice Prep Agent formats scripts with pause markers, emphasis, and pronunciation guides for direct ElevenLabs upload.
- **Future:** API integration for automated voice generation from approved scripts.

### CapCut — final video editing and assembly

- **Role:** Assemble Canva scenes + ElevenLabs audio + B-roll into the final video. Export and subtitle.
- **Why chosen:** Free, powerful, solo-creator friendly, good mobile and desktop support, auto-subtitle feature.
- **Agent integration:** Scene Production Agent provides CapCut-compatible pacing and transition notes.
- **Future:** CapCut API or template system for partially automated assembly.

### Leonardo AI — custom image generation (optional)

- **Role:** Generate custom scene visuals when stock imagery or Canva graphics are insufficient.
- **Why chosen:** High quality, controllable style, good for atmospheric/emotional images.
- **Agent integration:** Scene Production Agent marks scenes where Leonardo AI would add value and provides image prompts.
- **Future:** Integrated into scene automation pipeline when volume justifies.

---

## Core Development Stack

### Python — primary language

- **Role:** AI agent orchestration, automation scripts, data processing, API clients.
- **Why chosen:** Best-in-class ecosystem for AI/ML, official SDKs for almost every API (Anthropic, Google, Reddit, ElevenLabs, Canva, etc.), and the most readable language for scripting.
- **Market relevance:** The default language of AI engineering. Skills transfer everywhere.
- **AI engineering relevance:** Direct integration with LLM SDKs, vector databases, data tooling, and the broader ML stack.

### Markdown — prompts, agents, and documentation

- **Role:** Define agents, write reusable prompt templates, store generated reports, document the project.
- **Why chosen:** Human-readable, diffable, version-controllable, LLM-friendly.
- **Market relevance:** Markdown has effectively become the lingua franca of LLM context.
- **AI engineering relevance:** Markdown-as-context is the foundation of Claude Code, Claude.md, agent SDKs, and most modern prompt-engineering practice.

### Claude Code — primary AI development environment

- **Role:** Day-to-day driver for building agents, writing code, refactoring, and exploring the codebase.
- **Why chosen:** Strong agentic capabilities, native CLI, MCP and subagent support, custom commands, and a clean fit with a Markdown-driven workflow.
- **Market relevance:** Anthropic's flagship developer tool — learning it deeply is directly market-relevant.
- **AI engineering relevance:** Hands-on practice with the same patterns used in production agent systems.

### AI-Agent Workflows — the architectural style

- **Role:** Decompose work into specialized agents that communicate through structured outputs.
- **Why chosen:** Mirrors how real production AI systems are built — single-purpose agents are easier to test, swap, and improve than monolithic prompts.
- **Market relevance:** Agentic systems are the dominant pattern in modern AI product development.
- **Future scalability:** The same agents that run locally today can be wrapped in FastAPI, scheduled, and observed in production tomorrow.

---

## Future Stack (introduce when a real use case demands it)

### FastAPI — future backend / services layer

- **Role:** Expose agents and pipelines as HTTP APIs once a frontend or external consumer needs them.
- **Why chosen:** Async-first, type-hinted, automatic OpenAPI docs, low ceremony.
- **Market relevance:** The modern Python web framework, widely adopted in AI startups.
- **Introduce when:** A dashboard, webhook, or external integration needs to call agents.

### TypeScript — future frontend / dashboard

- **Role:** Build a dashboard for trends, research, pipeline monitoring, and content review.
- **Why chosen:** Type safety, large ecosystem, the de-facto standard for modern web UIs.
- **Market relevance:** Essential frontend skill in 2026 and beyond.
- **Introduce when:** There's enough generated content to justify a viewing/management UI.

### Docker — deployment and reproducibility

- **Role:** Containerize Python services and any future databases for consistent local + remote runs.
- **Why chosen:** Industry standard for reproducible environments and deployment.
- **Market relevance:** Core DevOps skill, expected in any production AI system.
- **Introduce when:** A service needs to run somewhere other than the dev machine.

### PostgreSQL — structured storage

- **Role:** Persistent store for trends, research dossiers, scripts, run metadata, and eventually embeddings.
- **Why chosen:** Battle-tested relational DB with first-class JSON support, plus `pgvector` for semantic search.
- **Market relevance:** The most common production database for AI-adjacent products.
- **Introduce when:** Date-folder Markdown stops scaling for queries / cross-run analysis.

---

## Roadmap Summary

| Phase | What's added | Trigger |
|------|-------------|---------|
| 0 | Markdown, Claude Code, agent definitions | Repository scaffolding ✓ |
| 1 | Canva + ElevenLabs + CapCut + scene/voice agents | First real video produced ✓ |
| 2 | Python API clients (Google Trends, YouTube Data API) | First automated trend collection |
| 3 | PostgreSQL | Querying across many runs |
| 4 | FastAPI | First external consumer of agents |
| 5 | TypeScript dashboard | First content management UI |
| 6 | Docker | First deployment outside the dev machine |
| 7 | Full pipeline automation | Volume justifies removing manual steps |
