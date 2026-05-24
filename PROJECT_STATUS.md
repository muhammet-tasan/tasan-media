# PROJECT_STATUS.md

> Read this file at the start of any Claude session to quickly understand current state, completed work, and next steps. Update this file whenever significant work is completed or architecture decisions are made.

---

## Recent Updates

(2026-05-25 EOD)
- **HookScene:** Refined to production quality (112px typography, exact composition values)
- **StatisticScene:** Complete redesign with own visual language (160px statistic, center-left, atmospheric B-roll)
- **Scene standards:** Documented SCENE-STANDARDS.md with reusable patterns (all scene types)
- **Asset sourcing:** Automated AI-assisted pipeline (ASSET-SOURCING-STRATEGY.md) with working example
- **Asset cleanup:** Consolidated duplicates, single final-assets/ location per topic
- **Session documentation:** Created docs/sessions/2026-05-25-session-summary.md for continuity
- **Design system:** Exported sceneStandards constants for code-based standards validation
- **Status:** Phase A complete, ready for Phase B (remaining scene types)

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
- [2026-05-24] HookScene refined to production quality — exact typography composition, soft readability gradient, emotional pacing refined (2026-05-24/25)
- [2026-05-25] Scene standards documented — SCENE-STANDARDS.md with reusable patterns: typography, composition, motion, duration, overlays
- [2026-05-25] Asset structure consolidated — single final-assets location per topic, removed duplicate assets
- [2026-05-25] StatisticScene implemented — second reusable production primitive following HookScene standards
- [2026-05-25] Design system extended — sceneStandards constants added to tasanMediaStyle.ts for future scene generation

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
| Scene 1 (HookScene) | `video/src/scenes/HookScene.tsx` + standards | **Production quality (2026-05-25)** — Refined typography, composition, motion |
| Scene 4 (StatisticScene) | `video/src/scenes/StatisticScene.tsx` + standards | **Production quality (2026-05-25)** — Second reusable primitive |
| Scene standards | `video/src/scenes/SCENE-STANDARDS.md` | **Complete (2026-05-25)** — Documented patterns for future scenes |
| Scene 1 asset (hallway) | `video/public/assets/2026-05-12/ki-risiken-kinder/final-assets/scene-01-hallway.png` | **Awaiting human sourcing** |
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

## Next Steps (Priority: Asset Sourcing → Full Video Production)

### Phase A — Remotion MVP & Core Infrastructure (✅ Complete)
**Status: 100% complete**

- ✅ Set up Remotion project — `/video/` folder, Node.js dependencies, config (2026-05-20)
- ✅ Define design system — colors, typography, motion (2026-05-20)
- ✅ Build core components — FadeIn, SlideUp, TextOverlay, BackgroundImage, SoftGradientOverlay (2026-05-21)
- ✅ Build HookScene component — Scene 1 production quality (2026-05-24/25)
- ✅ Build StatisticScene component — Scene 4 production quality (2026-05-25)
- ✅ Register compositions in index.tsx (2026-05-21)
- ✅ Create visual-style-guide.md (2026-05-21)
- ✅ Create asset-prompts.md (2026-05-21)
- ✅ Create Remotion Generation Agent specification (2026-05-21)
- ✅ Consolidate asset structure — single final-assets location (2026-05-25)
- ✅ Document scene standards — SCENE-STANDARDS.md for future reuse (2026-05-25)
- ✅ **Establish reusable primitives** — HookScene + StatisticScene as proven patterns (2026-05-25)

### Phase B — Remaining Scene Primitives (Next)
Implement remaining reusable scene types following documented standards (SCENE-STANDARDS.md):
- **QuoteScene** — Full-screen quote with speaker/source attribution
- **InsightScene** — Headline + explanatory text
- **ActionScene** — Call-to-action with visual context
- **EndingScene** — Closing hook with channel branding
Each follows HookScene + StatisticScene patterns: typography, composition, motion, overlays.

### Phase C — Asset Sourcing & Scene Rendering
1. **Human sources all scene assets** (per asset-prompts.md)
   - Scene 1 (hallway), Scene 2 (montage), etc.
   - Place in `video/public/assets/2026-05-12/ki-risiken-kinder/final-assets/`
2. **Render all scene components**
   - HookScene, StatisticScene, and remaining scenes
   - Generate MP4 clips to `renders/2026-05-12/ki-risiken-kinder/`

### Phase D — Voice Preparation
1. **Run Voice Prep Agent** on the script
   - Generate ElevenLabs narration with markers
   - Alternative: Human records voiceover
2. **Prepare voice file(s)** for CapCut assembly

### Phase E — Final Assembly & Export
1. **Assemble in CapCut**
   - Import rendered scene MP4s in order
   - Layer voice narration
   - Add B-roll (per asset-prompts.md if needed)
   - Add music/ambient sound
   - Export final 1920×1080, 30 FPS H.264 MP4
2. **Upload to YouTube**
   - Verify timing, audio sync, visual quality
   - Add description, tags, chapters (from script)

### Phase F — Iteration & Next Topics
1. Document lessons learned from first complete video
2. Update scene standards based on final video quality feedback
3. Begin next topic with Trend Scout (reuse design system, components)
4. Establish continuous production cadence

---

## Open Questions / Flags

- Schweizer Kontext: no Swiss-specific KI-Jugendschutz data found — supplement before publishing if CH audience is targeted
- KJM-Vorsitzender name: not confirmed — verify before using the KJM quote in video
- Scene Production Agent: first run ever — expect the output format to need iteration
- Voice Prep Agent: ElevenLabs SSML support varies by plan — verify before using SSML markers
