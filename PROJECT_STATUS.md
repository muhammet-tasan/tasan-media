# PROJECT_STATUS.md

> Read this file at the start of any Claude session to quickly understand current state, completed work, and next steps. Update this file whenever significant work is completed or architecture decisions are made.

---

## Current Phase

**Phase 1 — First video production run**

The full pipeline has been defined and run once end-to-end on the topic "KI-Risiken für Kinder". The architecture is stable. Next step is producing the first complete video using the new scene/voice production agents.

---

## Active Pipeline

```
Trend Scout
    ↓ [Human selects ONE topic]
Research Agent
    ↓ [Human reviews dossier]
Script Agent
    ↓ [Human approves script]
    ├── Scene Production Agent → content/scenes/
    └── Voice Prep Agent       → content/voice/
                                    ↓
                            [Human: Canva + ElevenLabs + CapCut]
                                    ↓
                              Published Video
```

---

## Active Agents

| Agent | File | Status |
|-------|------|--------|
| Trend Scout | `agents/trend-scout.md` | Stable |
| Research Agent | `agents/research-agent.md` | Stable |
| Script Agent | `agents/script-agent.md` | Stable |
| Scene Production Agent | `agents/scene-production-agent.md` | New — not yet run |
| Voice Prep Agent | `agents/voice-prep-agent.md` | New — not yet run |

**Removed:** NotebookLM Agent (replaced by Canva/ElevenLabs/CapCut workflow)

---

## Completed Work

- [2026-05-10] Project scaffolding — folders, CLAUDE.md, README, initial agent definitions
- [2026-05-10] Trend Scout run — first trend report generated for CH/DE/AT topics
- [2026-05-12] Research Agent run — deep dossier on "KI-Risiken für Kinder" (30+ sources)
- [2026-05-12] Script Agent run — video script revised 3× to tasan-media voice (v3, ~7 min)
- [2026-05-12] NotebookLM Agent run — package generated (then agent retired)
- [2026-05-12] Channel identity refactor — `config/channel-identity.md` introduced, duplicated tone rules removed from agents
- [2026-05-12] Architecture evolution — NotebookLM removed, Canva/ElevenLabs/CapCut workflow introduced, Scene Production Agent and Voice Prep Agent defined

---

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| Human selection checkpoint between Trend Scout and Research Agent | Token efficiency — deep research is expensive; pick one topic before spending |
| NotebookLM removed | Replaced by more controllable Canva + ElevenLabs + CapCut stack |
| Scene blocks as modular units | Enables future per-scene automation; human-editable now |
| Voice Prep Agent separate from Scene Production Agent | Single responsibility; voice and visuals are independent production streams |
| `config/channel-identity.md` as shared identity layer | Avoid duplicating tone rules across agents; single place to update |
| Scene Production + Voice Prep run in parallel | Both consume the script independently; no dependency between them |

---

## Content Outputs (current topic)

| Stage | File | Status |
|-------|------|--------|
| Trend report | `content/trends/2026-05-10/trends.md` | Complete |
| Research dossier | `content/research/2026-05-12/ki-risiken-kinder.md` | Complete |
| Video script | `content/scripts/2026-05-12/ki-risiken-kinder-script.md` | Complete (v3) |
| Scene package | `content/scenes/2026-05-12/` | **Not yet run** |
| Voice script | `content/voice/2026-05-12/` | **Not yet run** |
| Final video | — | Not yet produced |

---

## Folder Structure

```
agents/          Agent definitions (Markdown)
config/          Channel identity, principles
content/
  trends/        Trend Scout outputs (YYYY-MM-DD/)
  research/      Research Agent outputs (YYYY-MM-DD/)
  scripts/       Script Agent outputs (YYYY-MM-DD/)
  scenes/        Scene Production Agent outputs (YYYY-MM-DD/)
  voice/         Voice Prep Agent outputs (YYYY-MM-DD/)
data/
  raw/           Raw API data
  processed/     Normalized data
docs/            Tech roadmap, data sources
scripts/         Python automation (future)
templates/       Reusable prompt fragments (future)
.claude/
  commands/      Custom Claude slash commands
```

---

## Next Steps

1. **Run Scene Production Agent** on `content/scripts/2026-05-12/ki-risiken-kinder-script.md`
2. **Run Voice Prep Agent** on the same script
3. **Human production** — use scene package in Canva, voice script in ElevenLabs, assemble in CapCut
4. **After first video:** assess what was missing from scene/voice outputs and refine agents
5. **Next trend run** — run Trend Scout again for a fresh topic

---

## Open Questions / Flags

- Schweizer Kontext: no Swiss-specific KI-Jugendschutz data found — supplement before publishing if CH audience is targeted
- KJM-Vorsitzender name: not confirmed — verify before using the KJM quote in video
- Scene Production Agent: first run ever — expect the output format to need iteration
- Voice Prep Agent: ElevenLabs SSML support varies by plan — verify before using SSML markers
