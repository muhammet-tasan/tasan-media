# Remotion Video Rendering — tasan-media

Programmatic video rendering for tasan-media YouTube channel. This project uses [Remotion](https://www.remotion.dev/) to generate production-ready MP4 video from React components.

## Prerequisites

- **Node.js 18+** ([download](https://nodejs.org/))
- **npm** (comes with Node.js)

## Setup

```bash
cd video
npm install
```

This installs Remotion, React, and development dependencies.

## Quick Start

### 1. Preview in Browser (Hotload)

```bash
npm start
```

Opens Remotion Studio at `http://localhost:3000`. Shows all registered compositions with live preview. Hot-reloads when you edit code.

### 2. Render a Single Scene to MP4

```bash
npm run render StatScene -- --output renders/scene-04-stat.mp4
```

Outputs to `renders/scene-04-stat.mp4` (1920×1080, 30 FPS, H.264).

### 3. Render with Custom Props

```bash
npm run render StatScene -- \
  --props '{"stat":"66 %","description":"test"}' \
  --output renders/custom.mp4
```

## Project Structure

```
video/
├── src/
│   ├── Root.tsx                          # Registers all compositions
│   ├── scenes/
│   │   ├── StatScene.tsx                 # MVP: Statistic slide
│   │   ├── QuoteScene.tsx                # (coming soon)
│   │   ├── HookScene.tsx                 # (coming soon)
│   │   └── ...
│   ├── components/
│   │   ├── FadeIn.tsx                    # Fade-in animation wrapper
│   │   ├── SlideUp.tsx                   # Slide-up animation wrapper
│   │   └── CrossfadeText.tsx             # (coming soon)
│   ├── styles/
│   │   ├── colors.ts                     # Color palette (tasan-media brand)
│   │   ├── typography.ts                 # Font sizes & weights (Manrope)
│   │   └── motion.ts                     # Animation timing presets
│   └── compositions/
│       └── ki-risiken/
│           └── scenes.ts                 # Scene data for KI-Risiken video
├── renders/                              # Exported MP4s (gitignored)
├── package.json
├── tsconfig.json
├── remotion.config.ts
└── README.md
```

## Design System

All visual elements come from the design system in `src/styles/`:

- **Colors:** `src/styles/colors.ts` — exact hex values (no custom colors allowed)
- **Typography:** `src/styles/typography.ts` — Manrope font sizes
- **Motion:** `src/styles/motion.ts` — animation timing in frames (at 30 FPS)

### Using Design System in Components

```typescript
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { motion } from '../styles/motion';

// In your component:
<div style={{ backgroundColor: colors.warmWhite, fontSize: typography.sizes.heading }}>
  Text here
</div>
```

## Scene Components

Each scene type is a React component that renders a specific layout:

| Component | Props | Example |
|-----------|-------|---------|
| **StatScene** | `stat`, `description`, `source`, `backgroundColor` | Large number with supporting text |
| **QuoteScene** | `quote`, `subtext`, `backgroundColor` | (not yet implemented) |
| **HookScene** | `backgroundImage`, `text`, `position` | (not yet implemented) |
| **InsightScene** | `title`, `subtitle`, `backgroundColor` | (not yet implemented) |
| **ResourceScene** | `resourceName`, `instruction`, `backgroundColor` | (not yet implemented) |

## Animation Primitives

Wrap components with these to add animations:

```typescript
import { FadeIn } from './components/FadeIn';
import { SlideUp } from './components/SlideUp';
import { motion } from './styles/motion';

<FadeIn duration={motion.fadeIn.durationFrames}>
  <div>Fades in over 0.4 seconds</div>
</FadeIn>

<SlideUp delay={motion.stagger.short} duration={motion.slideUp.durationFrames}>
  <div>Slides up after 0.2 second delay, over 0.4 seconds</div>
</SlideUp>
```

## Rendering Complete Videos

To render all scenes from a composition sequentially:

```bash
# (Example — actual command depends on composition structure)
npx remotion render src/Root.tsx -c KiRisiken --output renders/ki-risiken-full.mp4
```

## Workflow: From Script to Rendered Video

1. **Script Agent** produces script (`content/scripts/YYYY-MM-DD/*.md`)
2. **Scene Production Agent** breaks it into visual briefs (`content/scenes/YYYY-MM-DD/*.md`)
3. **Remotion Scene Agent** converts briefs to scene data (`video/src/compositions/*/scenes.ts`)
4. **You run** `npm run render` to generate MP4s
5. **Human assembly in CapCut** — layer voice narration, B-roll, music, export final video

## Troubleshooting

### "Cannot find module 'remotion'"
```bash
npm install
```

### Studio doesn't open
Make sure port 3000 is not in use. Or specify a different port:
```bash
npx remotion studio --port 3001
```

### Render produces black/blank video
1. Check that `StatScene` (or other component) exists in `src/scenes/`
2. Make sure props are valid and complete
3. Check that styles are imported (colors, typography)

### Performance issues
- Simplify animations (fewer active elements per frame)
- Reduce video resolution for preview (Remotion Studio handles this)
- Use `npm run build` to create an optimized bundle before rendering

## Next Steps

1. **MVP Verification:** Render StatScene and verify output
   ```bash
   npm start
   ```
   Preview at http://localhost:3000, select "StatScene", verify animation and timing

2. **Implement Additional Scenes:** Create QuoteScene.tsx, HookScene.tsx, etc.

3. **Populate Scene Data:** Update `video/src/compositions/ki-risiken/scenes.ts` with all 13 scenes once components exist

4. **Render Full Video:** Render all scenes, import into CapCut, assemble with voice + B-roll

## Reference

- [Remotion Documentation](https://www.remotion.dev/docs)
- [Remotion API](https://www.remotion.dev/docs/composition)
- [tasan-media Design System](../../config/channel-identity.md)
- [Scene Production Agent](../../agents/scene-production-agent.md)
- [Remotion Scene Agent](../../agents/remotion-scene-agent.md)
