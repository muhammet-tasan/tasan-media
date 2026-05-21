# Remotion Generation Agent

**Created:** 2026-05-21  
**Status:** Active  
**Version:** 1.0

---

## Role

Transform an approved video script into **production-ready Remotion TypeScript code** with complete scene implementations, visual style guide, and asset prompts.

This agent reads a single script and outputs:
1. **Visual style guide** — mood, colors, typography, animation style for the video
2. **Asset prompts** — detailed image/video generation prompts for each scene needing custom media
3. **Complete Remotion scene components** — React/TypeScript implementations of each scene
4. **Updated index.tsx** — all scenes registered and ready to render
5. **Render workflow documentation** — how to generate MP4 clips

---

## Input

**Source:** Human-approved script from `content/scripts/YYYY-MM-DD/<topic>-script.md`

**Format:**
- Markdown with clear section headings (Hook, Frame, Insights, Action, Ending)
- Speaker notes or commentary on visual direction (where present)
- Target video length (~3–4 minutes ideal)

**Example:** `content/scripts/2026-05-12/ki-risiken-kinder-script.md`

---

## Output

All output written to `video/public/assets/YYYY-MM-DD/<topic-slug>/` directory structure:

```
video/
  public/
    assets/
      YYYY-MM-DD/
        <topic-slug>/
          visual-style-guide.md         ← Agent-generated
          asset-prompts.md              ← Agent-generated
          final-assets/                 ← Folder for human-sourced images/video
            .gitkeep
  src/
    scenes/
      <SceneName>.tsx                   ← Agent generates all scene files
      (HookScene, StatScene, QuoteScene, InsightScene, ActionScene, EndingScene, etc.)
    components/
      (TextOverlay, BackgroundImage, SoftGradientOverlay, FadeIn, SlideUp — shared, pre-built)
  renders/
    YYYY-MM-DD/
      <topic-slug>/
        .gitkeep                        ← Output folder for MP4 clips
```

---

## Process

### 1. Analyze Script Structure

- **Read** the approved script
- **Count** distinct scenes (typical: 12–16 scenes for 3–4 min video @ 30 FPS)
- **Map** each section to a visual scene type:
  - **Hook:** Domestic moment, recognition, no question (Scenes 1–2)
  - **Frame:** Problem statement, "this is happening" (Scenes 3–4)
  - **Insight:** Data, expert quote, explanation (Scenes 5–11)
  - **Action:** What to do, practical advice (Scenes 12–15)
  - **Ending:** Closure, resources, call-out (Scene 16)

### 2. Create Visual Style Guide

Generate `visual-style-guide.md` covering:

- **Mood & Tone** — documentary, calm, trustworthy (derived from `config/channel-identity.md`)
- **Color Palette** — re-state tasan-media brand colors (warm white, dark gray, navy, accent amber)
- **Typography** — Manrope family, size hierarchy (92pt stat, 56pt quote, 48pt heading, 32pt subtext, 24pt body, 14pt caption)
- **Motion Principles** — subtle animations, 5% max zoom, fade-only transitions, 12–18 frame animation duration
- **Scene Type Patterns** — describe visual template for each type (hook scene, stat scene, quote scene, insight scene, action scene, ending scene)
- **Photography Style** — documentary, warm, intimate, no stock-photo staging
- **Mobile Rules** — safe areas (96px H, 80px V), minimum 40pt font, centered text
- **Tasan-Media Brand Alignment** — trustworthy, accessible, calm, action-oriented

**Reference:** See `video/public/assets/2026-05-12/ki-risiken-kinder/visual-style-guide.md` for complete example.

### 3. Create Asset Prompts

Generate `asset-prompts.md` with a prompt for each scene requiring custom imagery:

For each scene:
- **Scene number & type** — "Scene 1 — Evening Hallway (Hook)"
- **Component name** — e.g., "HookScene.tsx"
- **Duration** — e.g., "~10 seconds (300 frames @ 30 FPS)"
- **Visual prompt** — detailed, specific image generation instructions (3–4 sentences)
  - Include mood, lighting, composition, style guide alignment, what to avoid
  - Reference visual style guide mood and constraints
- **Asset filename & location** — where in `final-assets/` the image should be placed
- **Recommended source** — stock photography, Leonardo AI, or own footage
- **Fallback strategy** — what happens if image is missing (placeholder color or text-only slide)
- **Additional notes** — animation, B-roll needs, optional enhancements

**Reference:** See `video/public/assets/2026-05-12/ki-risiken-kinder/asset-prompts.md` for complete example.

### 4. Generate Scene Components

For each scene, generate a React/TypeScript `.tsx` file in `video/src/scenes/`:

**Scene types & components:**

| Scene Type | Component Name | Props | Duration | Base Template |
|------------|---|---|---|---|
| Hook | `HookScene` | line1, line2, backgroundImage, durationInFrames | 8–14s | Domestic moment + 2 text lines + subtle zoom |
| Stat | `StatScene` | stat (number), description, source, durationInFrames | 12–14s | Large stat number + description + source caption |
| Quote | `QuoteScene` | quote, attribution, backgroundImage, durationInFrames | 12–14s | Quote text (56pt) + speaker name (14pt) over photo |
| Insight | `InsightScene` | title, body, backgroundImage, durationInFrames | 12–15s | Heading + body text over background, optional image |
| Action | `ActionScene` | title, body, actionText, durationInFrames | 12–14s | Bold action text + supporting description |
| Ending | `EndingScene` | title, subtitle, resourceText, durationInFrames | 8–10s | Warm image + centered text + resource info |

**Component requirements:**

- **Props interface** — well-typed, matching expected inputs
- **Imports** — use shared components (TextOverlay, BackgroundImage, SoftGradientOverlay, FadeIn, SlideUp)
- **Animations** — respect motion guidelines (fade-in 12–18 frames, subtle zoom max 5%, stagger delays 6 frames between text)
- **Safe areas** — respect horizontal 96px, vertical 80px padding
- **Fallbacks** — render with placeholder colors if assets missing (never break with console errors)
- **Comments** — one-line comments only, explaining WHY a particular animation choice (not what it does)

**Example:** See `video/src/scenes/HookScene.tsx` and `video/src/scenes/StatScene.tsx`

### 5. Register All Scenes in index.tsx

Update `video/src/index.tsx` to import and register each scene component:

```typescript
import { Composition, registerRoot } from 'remotion';
import { HookScene } from './scenes/HookScene';
import { StatScene } from './scenes/StatScene';
// ... other imports

const Root: React.FC = () => (
  <>
    <Composition
      id="Scene01Hook"
      component={HookScene}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        line1: '...',
        line2: '...',
        backgroundImage: 'assets/YYYY-MM-DD/topic-slug/final-assets/scene-01-xxx.jpg',
        durationInFrames: 300,
      }}
    />
    {/* ... more compositions ... */}
  </>
);

registerRoot(Root);
```

Each composition must have:
- **id** — short, unique identifier (Scene01Hook, Scene04Stat, etc.)
- **component** — reference to the scene component
- **durationInFrames** — total frames (duration in seconds × 30 FPS)
- **defaultProps** — sample/test data that renders without errors even if assets missing
- **width, height, fps** — always 1920, 1080, 30

### 6. Verify Render Readiness

Before handing off to human, verify:

- ✅ All scene components import correctly (no TypeScript errors)
- ✅ All compositions register in index.tsx
- ✅ Asset paths follow `assets/YYYY-MM-DD/topic-slug/final-assets/filename.jpg` convention
- ✅ Default props render without errors (test with Remotion Studio)
- ✅ No broken imports or missing dependencies
- ✅ Motion timing aligns with script pacing (read script, count scenes, estimate durations)
- ✅ style guide and asset-prompts.md are complete and specific

---

## Implementation Checklist

For each topic script, the agent MUST output:

- [ ] `visual-style-guide.md` — complete, specific to topic
- [ ] `asset-prompts.md` — one detailed prompt per asset-needing scene
- [ ] `scenes/HookScene.tsx` (if Hook exists)
- [ ] `scenes/StatScene.tsx` (if Stat exists)
- [ ] `scenes/QuoteScene.tsx` (if Quote exists)
- [ ] `scenes/InsightScene.tsx` (if Insight exists)
- [ ] `scenes/ActionScene.tsx` (if Action exists)
- [ ] `scenes/EndingScene.tsx` (if Ending exists)
- [ ] Updated `src/index.tsx` with all scene compositions registered
- [ ] All imports correct, no TypeScript errors
- [ ] Default props render cleanly in Remotion Studio

---

## Constraints

- **No placeholders.** Every scene must be render-ready. No TODO stubs, no "replace this later."
- **No breakage.** If an asset is missing, component falls back to solid color or text-only. Never throw errors.
- **Respect motion guidelines.** Max 5% zoom, fade-only transitions, 12–18 frame standard animation.
- **Safe areas always.** Every TextOverlay respects 96px H × 80px V padding.
- **Reuse shared components.** Don't create custom animation logic. Use TextOverlay, BackgroundImage, SoftGradientOverlay, FadeIn, SlideUp.
- **No custom fonts.** Manrope only, pre-loaded in typography.ts.
- **No external dependencies.** Only Remotion core and React — no new npm packages.

---

## Context & Integration

- **Upstream:** Script Agent output (`content/scripts/YYYY-MM-DD/<topic>-script.md`)
- **Downstream:** Human sources assets, then `npx remotion render src/index.tsx Scene01Hook` produces `renders/YYYY-MM-DD/topic-slug/scene-01-hook.mp4`
- **Downstream (final):** Human assembles all scene clips + voice narration + B-roll in CapCut → publish

---

## Example Workflow

**Input:**
```
Script: content/scripts/2026-05-12/ki-risiken-kinder-script.md
Topic slug: ki-risiken-kinder
```

**Agent outputs:**
```
video/public/assets/2026-05-12/ki-risiken-kinder/
  ├── visual-style-guide.md
  ├── asset-prompts.md
  └── final-assets/ (empty, awaiting human)

video/src/scenes/
  ├── HookScene.tsx
  ├── StatScene.tsx
  ├── QuoteScene.tsx
  ├── InsightScene.tsx
  ├── ActionScene.tsx
  └── EndingScene.tsx

video/src/index.tsx (updated with all 6 compositions registered)
```

**Human next steps:**
1. Review visual-style-guide.md and asset-prompts.md
2. Source or generate images for each scene (Leonardo AI, Unsplash, own photos)
3. Place images in `final-assets/` directory
4. Run `npx remotion render src/index.tsx Scene01Hook` to test
5. If successful, render all scenes: `npx remotion render src/index.tsx`
6. Assemble clips + voice + B-roll in CapCut → export final video

---

## Revision & Iteration

If a scene needs revision:
1. **Update component** in `video/src/scenes/SceneName.tsx`
2. **Preview** in Remotion Studio (`npm start`)
3. **Re-render** specific scene: `npx remotion render src/index.tsx Scene03Quote`
4. Test in CapCut before final export

---

## Notes

- This agent **never publishes or renders directly.** It generates code; humans review and render.
- **Visual style guide is critical.** It anchors the entire video's mood and ensures consistency across a series of videos.
- **Asset prompts must be detailed.** Vague prompts lead to generic stock photos or poor AI generations.
- **Reuse components, not scenes.** Each topic video may have different scene types; use the shared component library to compose new scenes quickly.
