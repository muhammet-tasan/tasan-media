# Remotion Video Rendering — tasan-media

Programmatic video rendering for the tasan-media YouTube channel. This project uses [Remotion](https://www.remotion.dev/) to generate production-ready MP4 video from React/TypeScript components — no manual Canva/slide design.

## Prerequisites

- **Node.js 18+** ([download](https://nodejs.org/))
- **npm** (comes with Node.js)

## Setup

```bash
cd video
npm install
```

## Quick Start

### 1. Preview in Browser (Hotload)

```bash
npm start
```

Opens Remotion Studio at `http://localhost:3000`. Shows all registered compositions with live preview. Hot-reloads when you edit code.

### 2. Render a Composition to MP4

Compositions are registered by `id` in [src/index.tsx](src/index.tsx). Pass the id and an output path after `--`:

```bash
npm run render -- Scene01Hook --output renders/2026-05-12/ki-risiken-kinder/scene-01-hook.mp4
npm run render -- Scene04Statistic --output renders/2026-05-12/ki-risiken-kinder/scene-04-statistic.mp4
```

Output: 1920×1080, 30 FPS, H.264.

### 3. Render with Custom Props

```bash
npm run render -- Scene01Hook --props '{"line1":"Sie ist ruhig.","line2":"Du hast deinen Abend."}' --output renders/custom.mp4
```

## Project Structure

```
video/
├── src/
│   ├── index.tsx                          # Entry point — registers all compositions (registerRoot)
│   ├── scenes/
│   │   ├── HookScene.tsx                  # Documentary opening hook (production quality)
│   │   ├── HookScene.standards.md         # Detailed HookScene specification
│   │   ├── StatisticScene.tsx             # Statistic + description + B-roll (production quality)
│   │   ├── StatisticScene.standards.md    # Detailed StatisticScene specification
│   │   └── SCENE-STANDARDS.md             # Shared patterns for all scene types
│   ├── components/
│   │   ├── BackgroundImage.tsx            # Full-canvas image with Ken Burns zoom + brightness
│   │   ├── SoftGradientOverlay.tsx        # Gradient overlay for text readability
│   │   ├── VignetteOverlay.tsx            # Radial vignette for cinematic focus
│   │   ├── GrainOverlay.tsx               # SVG film grain texture
│   │   ├── FadeIn.tsx                     # Opacity fade wrapper (reserved for future scenes)
│   │   └── SlideUp.tsx                    # Fade + translate wrapper (reserved for future scenes)
│   └── styles/
│       ├── tasanMediaStyle.ts             # Unified entry point — re-exports colors/typography/motion,
│       │                                  # plus `style` (safe areas/canvas specs) and `sceneStandards`
│       │                                  # (concrete per-scene-type values — the single source of truth)
│       ├── colors.ts                      # Color palette
│       ├── typography.ts                  # Font family + size scale (Manrope)
│       └── motion.ts                      # Generic animation timing presets
├── public/
│   └── assets/YYYY-MM-DD/<topic-slug>/    # visual-style-guide.md, asset-prompts.md, final-assets/
├── renders/                                # Exported MP4s (gitignored)
├── package.json
├── tsconfig.json
├── remotion.config.ts
└── README.md
```

## Design System

Scene components import everything from `src/styles/tasanMediaStyle.ts`:

```typescript
import { colors, typography, sceneStandards } from '../styles/tasanMediaStyle';

const { hookPrimary } = sceneStandards.typography;
const { lowerLeftThird } = sceneStandards.positioning;
```

- **Colors:** `sceneStandards` typography entries carry their own color (`#F5F2EC` warm off-white); `colors.ts` holds background/base colors (e.g. `colors.darkNavy`).
- **Typography:** Manrope only. Concrete per-scene sizes/weights/letter-spacing live in `sceneStandards.typography` (e.g. `hookPrimary` = 112px, `statisticPrimary` = 160px).
- **Positioning:** `sceneStandards.positioning` holds the exact px composition values per scene type (e.g. `lowerLeftThird` for HookScene, `statistic` for StatisticScene).
- **Motion:** `sceneStandards.motion` holds shared frame timings (fade durations, holds, pauses) and per-scene zoom amounts (`kenBurnsZoom`, `ambientDrift`).
- **Overlays:** `sceneStandards.overlays` holds gradient/vignette/grain settings per scene type.

**Rule:** scene components should read values from `sceneStandards`, not hardcode pixels/frames directly — this keeps the documented standards in [SCENE-STANDARDS.md](src/scenes/SCENE-STANDARDS.md) and the actual rendered output in sync. See `HookScene.tsx` and `StatisticScene.tsx` for the pattern.

## Scene Components

| Component | Status | Standards doc |
|-----------|--------|----------------|
| **HookScene** | Production quality | [HookScene.standards.md](src/scenes/HookScene.standards.md) |
| **StatisticScene** | Production quality | [StatisticScene.standards.md](src/scenes/StatisticScene.standards.md) |
| **QuoteScene** | Not yet implemented | — |
| **InsightScene** | Not yet implemented | — |
| **ActionScene** | Not yet implemented | — |
| **EndingScene** | Not yet implemented | — |

Each scene type has its **own visual language** (typography size, composition, overlay intensity) rather than a single shared template — see the comparison table in `StatisticScene.standards.md` and the philosophy section in `SCENE-STANDARDS.md`.

## Building a New Scene

1. Create `src/scenes/<Name>Scene.tsx` — props for text content, optional `backgroundImage`, `durationInFrames`.
2. Add its values to `sceneStandards` in `tasanMediaStyle.ts` (typography/positioning/motion/overlays), then import and use them in the component instead of hardcoding numbers.
3. Compose the overlay stack in order: `BackgroundImage` → `SoftGradientOverlay` → `VignetteOverlay` → `GrainOverlay` → any scene-specific readability gradient.
4. Drive all text fades via `interpolate()` using the shared frame breakpoints in `sceneStandards.motion` (`bgFadeIn`, `fadeIn`, `primaryHold`, `pause`), always with `Easing.inOut(Easing.exp)`.
5. Register the composition in `src/index.tsx` (`id`, `durationInFrames`, `fps=30`, `width=1920`, `height=1080`, `defaultProps`).
6. Write `<Name>Scene.standards.md` documenting typography, composition, timing, and an "Is / Is Not" section, following the existing two standards docs.

## Workflow: From Script to Rendered Video

1. **Script Agent** produces the approved script (`content/scripts/YYYY-MM-DD/*.md`)
2. **Remotion Generation Agent** ([agents/remotion-generation-agent.md](../agents/remotion-generation-agent.md)) reads the script and produces: visual style guide, asset prompts, and render-ready scene components + registrations
3. **Human sources assets** per `asset-prompts.md`, placed in `public/assets/YYYY-MM-DD/<topic-slug>/final-assets/`
4. **You render** each scene with `npm run render -- <CompositionId> --output ...`
5. **Human assembly in CapCut** — layer voice narration, B-roll, music, export final video

## Troubleshooting

### "Cannot find module 'remotion'"
```bash
npm install
```

### Studio doesn't open
Make sure port 3000 is not in use, or specify a different port:
```bash
npx remotion studio --port 3001
```

### Render produces black/blank video
1. Check that the composition `id` exists in `src/index.tsx`
2. Make sure props are valid and complete (required props like `StatisticScene`'s `backgroundImage` must be set)
3. Check that the referenced asset file actually exists under `public/assets/.../final-assets/`

### Performance issues
- Simplify animations (fewer active elements per frame)
- Reduce preview resolution in Remotion Studio (rendering itself always uses full resolution)
- Use `npx remotion bundle` to create an optimized bundle before batch rendering

## Reference

- [Remotion Documentation](https://www.remotion.dev/docs)
- [Remotion API](https://www.remotion.dev/docs/composition)
- [tasan-media Channel Identity](../config/channel-identity.md)
- [Remotion Generation Agent](../agents/remotion-generation-agent.md)
- [Scene Standards](src/scenes/SCENE-STANDARDS.md)
