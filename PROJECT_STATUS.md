# PROJECT_STATUS.md

> Read this file at the start of any Claude session to quickly understand current state, completed work, and next steps. Update this file whenever significant work is completed or architecture decisions are made.

---

## Recent Updates

(Last update: 2026-05-20 23:24)

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
    ├── Scene Production Agent     → Visual briefs (tool-agnostic)
    │   ↓
    │   Remotion Scene Agent       → Generates React/TS video code
    │   ↓
    │   [Render: npx remotion render] → MP4 scene files
    │
    └── Voice Prep Agent           → ElevenLabs script with markers
                                    ↓
                            [Human: Assemble in CapCut]
                            (voice + B-roll + music)
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
| Scene Production Agent | `agents/scene-production-agent.md` | Updated (2026-05-19) — tool-agnostic visual briefs |
| Remotion Scene Agent | `agents/remotion-scene-agent.md` | New (2026-05-19) — generates React/TS code |
| Voice Prep Agent | `agents/voice-prep-agent.md` | New — not yet run |

**Removed:** NotebookLM Agent (replaced by Remotion-first automated rendering)

---

## Completed Work

- [2026-05-10] Project scaffolding — folders, CLAUDE.md, README, initial agent definitions
- [2026-05-10] Trend Scout run — first trend report generated for CH/DE/AT topics
- [2026-05-12] Research Agent run — deep dossier on "KI-Risiken für Kinder" (30+ sources)
- [2026-05-12] Script Agent run — video script revised 3× to tasan-media voice (v3, ~7 min)
- [2026-05-12] Scene Production Agent run — 16 scenes generated (v2 with production optimization, 2026-05-16)
- [2026-05-12] Channel identity refactor — `config/channel-identity.md` introduced, duplicated tone rules removed from agents
- [2026-05-12] Architecture evolution — NotebookLM removed, Canva/ElevenLabs/CapCut workflow introduced, Scene Production Agent and Voice Prep Agent defined
- [2026-05-16] Canva production guide created — 13 effective scenes, step-by-step instructions, 6 base templates identified, 3–3.5 hour production estimate
- [2026-05-16] NotebookLM cleanup — folder removed, architecture finalized
- [2026-05-16] Pre-commit hook configured — auto-updates PROJECT_STATUS.md with timestamp before each commit
- [2026-05-19] Remotion architecture planned and initiated — transition from Canva-manual to code-first rendering

---

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| Human selection checkpoint between Trend Scout and Research Agent | Token efficiency — deep research is expensive; pick one topic before spending |
| NotebookLM removed (2026-05-16) | Replaced by more controllable Canva + ElevenLabs + CapCut stack |
| Scene blocks as modular units | Enables future per-scene automation; human-editable now |
| Voice Prep Agent separate from Scene Production Agent | Single responsibility; voice and visuals are independent production streams |
| `config/channel-identity.md` as shared identity layer | Avoid duplicating tone rules across agents; single place to update |
| Scene Production + Voice Prep run in parallel | Both consume the script independently; no dependency between them |
| Remotion replaces manual Canva workflow (2026-05-19) | Code-driven scene rendering eliminates manual slide design; enables full automation and consistent design system enforcement |
| Scene Production Agent remains (with updated output) | Produces tool-agnostic visual briefs; Remotion Scene Agent translates to code. Keeps human review checkpoint before rendering. |

---

## Content Outputs (current topic)

| Stage | File | Status |
|-------|------|--------|
| Trend report | `content/trends/2026-05-10/trends.md` | Complete |
| Research dossier | `content/research/2026-05-12/ki-risiken-kinder.md` | Complete |
| Video script | `content/scripts/2026-05-12/ki-risiken-kinder-script.md` | Complete (v3) |
| Scene package | `content/scenes/2026-05-12/ki-risiken-kinder-scenes.md` | Complete (16 scenes, v2 optimization) |
| Canva production guide | `content/scenes/2026-05-12/canva-production-guide.md` | **Complete — ready for production** |
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

## Next Steps (Priority: Remotion MVP + First Video)

### Phase A — Remotion MVP (Complete, blocking first video)
1. **Set up Remotion project** — `/video/` folder, Node.js dependencies, config
2. **Define design system** — colors, typography, motion (from Canva palette)
3. **Build StatScene component** — Scene 4 (statistic slide, no assets needed)
4. **Test rendering** — `npx remotion render` produces valid MP4
5. **Document render workflow** — CLI commands for preview/render/export

### Phase B — Remaining Scenes (Parallel with Phase A)
- Implement remaining scene components (QuoteScene, HookScene, InsightScene, ResourceScene)
- Convert all 13 scenes from Scene Production Agent output to Remotion code

### Phase C — First Video Assembly
1. **Run Voice Prep Agent** on the script
   - Generate or record narration for all scenes
2. **Render all scenes** from Remotion (automated)
3. **Assemble in CapCut**
   - Import rendered scenes in order
   - Layer voice narration
   - Add B-roll where specified
   - Add music/ambient sound
   - Color grade if needed
   - Export final 1920×1080, 30 FPS

### Phase D — After First Video
1. Assess Remotion workflow — is it faster than Canva was?
2. Refine Remotion Scene Agent based on learnings
3. Run Trend Scout again for next topic

---

## Open Questions / Flags

- Schweizer Kontext: no Swiss-specific KI-Jugendschutz data found — supplement before publishing if CH audience is targeted
- KJM-Vorsitzender name: not confirmed — verify before using the KJM quote in video
- Scene Production Agent: first run ever — expect the output format to need iteration
- Voice Prep Agent: ElevenLabs SSML support varies by plan — verify before using SSML markers
