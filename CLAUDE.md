# CLAUDE.md — Working Agreement for Claude Code

This file gives Claude Code the context it needs to collaborate well on this project.

---

## Project Purpose

Tasan Media Agents is the AI-content workflow behind the YouTube channel **tasan-media** *and* a personal long-term AI engineering learning project. Both goals matter equally — clean engineering is part of the deliverable, not a side effect.

---

## Architecture Philosophy

- **Start small, grow deliberately.** Markdown-defined agents first, automation only when justified.
- **Modular boundaries.** Each agent / script / service does one thing well.
- **Date-based, structured outputs.** Everything written under `content/<stage>/YYYY-MM-DD/` so future agents and datasets can reuse it.
- **Official APIs over scraping.** Stable, legal, maintainable.
- **Human review before publishing.** No agent ships content directly to the channel.

---

## Coding Philosophy

- **Python** is the default for scripts, automation, data processing, and AI orchestration.
- **Markdown** is the default for prompts, agent definitions, context files, and documentation.
- **Explain tradeoffs before adding complexity** — new dependencies, new services, or new abstractions need a one-paragraph justification.
- **Avoid unnecessary dependencies.** Standard library first; third-party only when it earns its place.
- **Clarity over cleverness.** This is a learning project — readable beats compact.
- **No premature frameworks.** No FastAPI/Docker/Postgres until a real use case requires them.

---

## AI-Agent Workflow Principles

- Every agent lives in `agents/<name>.md` with a clear role, inputs, outputs, and constraints.
- Agent outputs are **structured and reusable** (Markdown sections or JSON), not free-form prose.
- Agents in a pipeline consume each other's outputs — design with that contract in mind.
- Prefer **composable small agents** over one mega-agent.
- Reusable prompt fragments live in `templates/`.

---

## Content Philosophy

- **Avoid hype and clickbait.** Calm, trustworthy framing always.
- **Ethical, useful content.** Real value for real people.
- **Today's trends matter more than evergreen.** The system is built around timely relevance — daily/weekly cycles, not perpetual content.
- **Audience-first language.** Understandable, not jargon-heavy.
- **Respect the viewer's time and intelligence.**

See `config/channel-identity.md` for the full editorial identity.

---

## Production Tool Stack

The video production workflow is split into automated and human-controlled components:

**Automated (Code/Agents):**
- **Remotion** — programmatic video scene rendering (React/TypeScript)
  - Scene-type components (StatScene, QuoteScene, HookScene, etc.)
  - Design system enforcement (colors, typography, motion timing)
  - Generates MP4 output directly, no manual slide design needed

**AI-Assisted (with Human Review):**
- **ElevenLabs** — AI voice generation for narration (human reviews and records if needed)
- **Leonardo AI** — optional custom image generation for specific scenes

**Human Final Assembly:**
- **CapCut** — final video assembly, B-roll integration, music/ambient sound, export

The Remotion Scene Agent reads Scene Production Agent briefs and generates production-ready React code. No manual Canva design step.

---

## Output & Organization Rules

- All generated content goes under a **dated subfolder**:
  - `content/trends/YYYY-MM-DD/`
  - `content/research/YYYY-MM-DD/`
  - `content/scripts/YYYY-MM-DD/`
  - `content/scenes/YYYY-MM-DD/`
  - `content/voice/YYYY-MM-DD/`
- This enables historical tracking, dataset reuse, automation, and reproducibility.
- File names within a date folder should be descriptive and lowercase-kebab-case.

---

## Project State

Read `PROJECT_STATUS.md` at the start of any session to quickly understand current project state, completed work, and recommended next steps.

---

## What NOT to Do (yet)

- Don't auto-publish anything.
- Don't scrape sites when an official API exists.
- Don't refactor for hypothetical future needs.
- Don't introduce FastAPI, Docker, or PostgreSQL until a real use case requires them.
