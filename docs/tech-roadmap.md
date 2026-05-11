# Technology Roadmap

This document records the long-term technology direction for tasan-media-agents and *why* each piece was chosen. Most of these are not implemented yet — they exist here as deliberate choices for future phases.

The guiding rule: **introduce each technology only when a real use case demands it.**

---

## Python — primary language

- **Role:** AI agent orchestration, automation scripts, data processing, API clients.
- **Why chosen:** Best-in-class ecosystem for AI/ML, official SDKs for almost every API (Anthropic, Google, Reddit, etc.), and the most readable language for scripting.
- **Market relevance:** The default language of AI engineering. Skills transfer everywhere.
- **AI engineering relevance:** Direct integration with LLM SDKs, vector databases, data tooling, and the broader ML stack.

---

## FastAPI — future backend / services layer

- **Role:** Expose agents and pipelines as HTTP APIs once a frontend or external consumer needs them.
- **Why chosen:** Async-first, type-hinted, automatic OpenAPI docs, low ceremony.
- **Market relevance:** Very high — the modern Python web framework, widely adopted in AI startups.
- **Future scalability:** Pairs cleanly with Docker, Postgres, and a TypeScript frontend.
- **Introduce when:** A dashboard, webhook, or external integration needs to call agents.

---

## TypeScript — future frontend / dashboard

- **Role:** Build a dashboard for trends, research, and pipeline monitoring.
- **Why chosen:** Type safety, large ecosystem, the de-facto standard for modern web UIs.
- **Market relevance:** Essential frontend skill in 2026 and beyond.
- **AI engineering relevance:** Most AI product UIs (chat, agent interfaces, observability) are built in TS.
- **Introduce when:** There's enough generated content to justify a viewing/management UI.

---

## Docker — deployment and reproducibility

- **Role:** Containerize Python services and any future databases for consistent local + remote runs.
- **Why chosen:** Industry standard for reproducible environments and deployment.
- **Market relevance:** Core DevOps skill, expected in any production AI system.
- **Future scalability:** Path to cloud deployment, CI/CD, and orchestration.
- **Introduce when:** A service needs to run somewhere other than the dev machine.

---

## PostgreSQL — structured storage

- **Role:** Persistent store for trends, research dossiers, scripts, and run metadata.
- **Why chosen:** Battle-tested relational DB with first-class JSON support — flexibility without giving up integrity.
- **Market relevance:** The most common production database for AI-adjacent products.
- **AI engineering relevance:** Pairs with `pgvector` for embeddings if/when semantic search is needed.
- **Introduce when:** Date-folder Markdown stops scaling for queries / cross-run analysis.

---

## Markdown — prompts, agents, and documentation

- **Role:** Define agents, write reusable prompt templates, store generated reports, document the project.
- **Why chosen:** Human-readable, diffable, version-controllable, LLM-friendly.
- **Market relevance:** Markdown has effectively become the lingua franca of LLM context.
- **AI engineering relevance:** Markdown-as-context is the foundation of Claude Code, Claude.md, agent SDKs, and most modern prompt-engineering practice.

---

## Claude Code — primary AI coding environment

- **Role:** Day-to-day driver for building agents, writing code, refactoring, and exploring the codebase.
- **Why chosen:** Strong agentic capabilities, native CLI, MCP and subagent support, and a clean fit with a Markdown-driven workflow.
- **Market relevance:** Anthropic's flagship developer tool — learning it deeply is directly market-relevant.
- **AI engineering relevance:** Hands-on practice with the same patterns used in production agent systems.

---

## AI-Agent Workflows — the architectural style

- **Role:** Decompose work into specialized agents that communicate through structured outputs.
- **Why chosen:** Mirrors how real production AI systems are built — single-purpose agents are easier to test, swap, and improve than monolithic prompts.
- **Market relevance:** Agentic systems are the dominant pattern in modern AI product development.
- **Future scalability:** The same agents that run locally today can be wrapped in FastAPI, scheduled, and observed in production tomorrow.

---

## Roadmap Summary

| Phase | Tech added | Trigger |
|------|------------|---------|
| 0 | Markdown, Claude Code | Repository scaffolding (now) |
| 1 | Python | First real automation / API client |
| 2 | PostgreSQL | Querying across many runs |
| 3 | FastAPI | First external consumer of agents |
| 4 | TypeScript | First UI |
| 5 | Docker | First deployment outside the dev machine |
