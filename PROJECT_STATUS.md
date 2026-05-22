# PROJECT_STATUS.md

> Read this file at the start of any Claude session to quickly understand current state, completed work, and next steps. Update this file whenever significant work is completed or architecture decisions are made.

---

## Recent Updates

(2026-05-23 01:57)

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
    ├── Remotion Generation Agent  → Visual style guide, asset prompts, React/TS scene code
    │   ↓
    │   [Human sources assets]
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
| Remotion Generation Agent | `agents/remotion-generation-agent.md` | New (2026-05-21) — replaces Scene Production + Remotion Scene agents |
| Voice Prep Agent | `agents/voice-prep-agent.md` | New — not yet run |

**Deprecated:** Scene Production Agent, Remotion Scene Agent (2026-05-21 — replaced by unified Remotion Generation Agent)

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
- [2026-05-20] Remotion MVP foundation — project setup, design system, core components (FadeIn, SlideUp, TextOverlay, BackgroundImage, SoftGradientOverlay), StatScene
- [2026-05-21] HookScene implementation — Scene 1 MVP with animation timeline, safe area text, zoom effects
- [2026-05-21] Agent architecture unified — Scene Production Agent + Remotion Scene Agent merged into single Remotion Generation Agent
- [2026-05-21] Visual style guide created — comprehensive mood, color, typography, motion, photography, and mobile guidelines
- [2026-05-21] Asset prompts generated — detailed image generation prompts for Scene 1–16, priority ordering, fallback strategies

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
| Two-stage agent pipeline unified into one (2026-05-21) | Scene Production Agent + Remotion Scene Agent merged into Remotion Generation Agent. Faster, simpler, fewer context boundaries. Single agent reads script → outputs code + style guide + asset prompts. |
| Reusable component library (2026-05-21) | TextOverlay, BackgroundImage, SoftGradientOverlay, FadeIn, SlideUp are shared. New scene types compose from these — no code duplication. |

---

## Content Outputs (current topic)

| Stage | File | Status |
|-------|------|--------|
| Trend report | `content/trends/2026-05-10/trends.md` | Complete |
| Research dossier | `content/research/2026-05-12/ki-risiken-kinder.md` | Complete |
| Video script | `content/scripts/2026-05-12/ki-risiken-kinder-script.md` | Complete (v3) |
| Scene package | `content/scenes/2026-05-12/ki-risiken-kinder-scenes.md` | Complete (16 scenes, v2 optimization) |
| Canva production guide | `content/scenes/2026-05-12/canva-production-guide.md` | **Complete — ready for production** |
| Visual style guide | `video/public/assets/2026-05-12/ki-risiken-kinder/visual-style-guide.md` | **Complete (2026-05-21)** |
| Asset prompts | `video/public/assets/2026-05-12/ki-risiken-kinder/asset-prompts.md` | **Complete (2026-05-21)** |
| Scene 1 component | `video/src/scenes/HookScene.tsx` | **Complete (2026-05-21)** |
| Scene 4 component | `video/src/scenes/StatScene.tsx` | **Complete (2026-05-20)** |
| Scene 1 asset (hallway) | `video/public/assets/2026-05-12/ki-risiken-kinder/final-assets/scene-01-hallway.jpg` | **Awaiting human sourcing** |
| Voice script | `content/voice/2026-05-12/` | Not yet run |
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
  scenes/        Scene definitions from old workflow (archived)
  voice/         Voice Prep Agent outputs (YYYY-MM-DD/)
data/
  raw/           Raw API data
  processed/     Normalized data
docs/            Tech roadmap, data sources
video/
  src/
    scenes/      React/TypeScript scene components
    components/  Reusable UI components (TextOverlay, BackgroundImage, etc.)
    styles/      Design system (colors, typography, motion)
  public/
    assets/
      YYYY-MM-DD/
        <topic-slug>/
          visual-style-guide.md    (Remotion Generation Agent output)
          asset-prompts.md         (Remotion Generation Agent output)
          final-assets/            (human-sourced images/video)
  renders/
    YYYY-MM-DD/
      <topic-slug>/               (output folder for MP4 clips)
scripts/         Python automation (future)
templates/       Reusable prompt fragments (future)
.claude/
  commands/      Custom Claude slash commands
```

---

## Next Steps (Priority: Scene 1 MVP + Asset Generation)

### Phase A — Remotion MVP & Core Infrastructure (In Progress)
**Status: ~90% complete**

- ✅ Set up Remotion project — `/video/` folder, Node.js dependencies, config (2026-05-20)
- ✅ Define design system — colors, typography, motion (2026-05-20)
- ✅ Build core components — FadeIn, SlideUp, TextOverlay, BackgroundImage, SoftGradientOverlay (2026-05-21)
- ✅ Build HookScene component — Scene 1 MVP (2026-05-21)
- ✅ Implement StatScene — Scene 4 (statistic slide) (2026-05-20)
- ✅ Register compositions in index.tsx (2026-05-21)
- ✅ Create visual-style-guide.md (2026-05-21)
- ✅ Create asset-prompts.md (2026-05-21)
- ✅ Create Remotion Generation Agent specification (2026-05-21)
- ⏳ **NEXT:** Source or generate Scene 1 background image (scene-01-hallway.jpg) → place in `final-assets/`

### Phase B — Scene 1 Test Render (Blocking first video)
1. **Place scene-01-hallway.jpg** in `video/public/assets/2026-05-12/ki-risiken-kinder/final-assets/`
2. **Test preview:** `npm start` in video/ → HookScene renders with image
3. **Test render:** `npx remotion render src/index.tsx Scene01Hook --output renders/2026-05-12/ki-risiken-kinder/scene-01-hook.mp4`
4. **Verify MP4:** Check output quality, timing, text overlay clarity

### Phase C — Remaining Scenes (Scene 2–6, 8, 13, 16)
Implement and test remaining scene components based on Remotion Generation Agent output:
- QuoteScene, InsightScene, ActionScene, EndingScene
- Source assets for each scene
- Render all scenes to MP4

### Phase D — First Video Assembly
1. **Run Voice Prep Agent** on the script (if not yet run)
   - Generate or record narration for all scenes
2. **Assemble in CapCut**
   - Import all rendered scene MP4 clips in order
   - Layer voice narration
   - Add B-roll (if specified in asset-prompts.md)
   - Add music/ambient sound
   - Export final 1920×1080, 30 FPS H.264

### Phase E — After First Video
1. Review rendering quality, timing, visual impact
2. Document any iteration patterns
3. Run Trend Scout for next topic
4. Begin Phase A for next video (reuse design system, components)

---

## Open Questions / Flags

- Schweizer Kontext: no Swiss-specific KI-Jugendschutz data found — supplement before publishing if CH audience is targeted
- KJM-Vorsitzender name: not confirmed — verify before using the KJM quote in video
- Scene Production Agent: first run ever — expect the output format to need iteration
- Voice Prep Agent: ElevenLabs SSML support varies by plan — verify before using SSML markers
