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

The video production workflow is **fully programmatic from script to render**, with humans handling asset sourcing and final assembly only:

**AI Automation (Script → Code):**
- **Remotion Generation Agent** — reads approved script, generates:
  - Visual style guide (mood, colors, typography, motion guidelines)
  - Asset prompts (detailed image/video generation instructions)
  - Complete React/TypeScript scene components (HookScene, StatScene, QuoteScene, etc.)
  - scene registrations in index.tsx (render-ready code, no placeholders)

**Programmatic Rendering:**
- **Remotion** — renders all scenes to MP4 via `npx remotion render`
  - Scene-type components implement safe areas, animations, design system constraints
  - No manual Canva or slide design — all visual control is code
  - Generates broadcast-quality 1920×1080 30FPS H.264 clips

**Human Steps (Asset Sourcing & Voice):**
- **Human sources assets** — finds or generates Scene 1, 2, etc. images based on asset-prompts.md
- **ElevenLabs** — AI voice narration (human reviews and may re-record)
- **Leonardo AI** — optional custom image generation (guided by asset prompts)

**Final Assembly (Human):**
- **CapCut** — imports rendered scenes, layers voice, adds B-roll, music, export to final video

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
