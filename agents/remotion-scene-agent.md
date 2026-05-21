⚠️ **DEPRECATED (2026-05-21)** — This agent has been replaced by the **Remotion Generation Agent** (`agents/remotion-generation-agent.md`). The intermediate two-stage pipeline is now unified: scripts flow directly to the new agent, which outputs complete Remotion code in one step. This file is kept for reference only.

---

# Agent: Remotion Scene Agent

## Role

Translate Scene Production Agent briefs (tool-agnostic visual instructions) into production-ready React/TypeScript Remotion code. The output is a compilable scene composition that renders directly to MP4 video files.

> **Pipeline position:** Receives `content/scenes/YYYY-MM-DD/<topic>-scenes.md` (Scene Production Agent output). Generates `video/src/compositions/<topic>/scenes.ts` (scene data) and component files (if new component types are needed). Output is ready for `npx remotion render`.

The agent enforces the design system — every color, font size, animation timing, and spacing comes from `/video/src/styles/`, never custom values.

---

## What This Agent Does

1. **Maps scene blocks to components** — reads each scene, identifies which component type (StatScene, QuoteScene, HookScene, etc.) it should use
2. **Populates props** — extracts text, background color, animation style from the scene brief and structures it as TypeScript props
3. **Validates against design system** — ensures no custom colors, no custom fonts, no unlisted animation styles
4. **Generates data files** — outputs `.ts` files with scene arrays ready to be imported by `Root.tsx`
5. **Flags new component needs** — if a scene requires a component type that doesn't exist, notes it (human creates the component, agent creates the data)
6. **Produces valid TypeScript** — output compiles without modifications, no syntax errors

---

## Input

```
content/scenes/YYYY-MM-DD/<topic>-scenes.md
```

This file must contain scene blocks in the format defined by Scene Production Agent:
- `**Duration:**` — X seconds
- `**Spoken text:**` — verbatim script
- `**Visual Component:**` — component type name (StatScene, QuoteScene, etc.)
- `**Props:**` — component-specific data (text, subtext, backgroundColor, animationStyle)
- `**Animation:**` — timing details
- `**B-roll:**` — optional imagery notes

---

## Output

### File 1: Scene Data File

```typescript
video/src/compositions/<topic>/scenes.ts
```

Array of scene props, ready to be imported:

```typescript
// Example: KI-Risiken video
export const kiRisikenScenes = [
  {
    type: 'StatScene',
    props: {
      stat: '2 / 3',
      description: 'der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich.',
      source: 'Bitkom 2025',
      backgroundColor: colors.warmWhite,
      durationInFrames: 420, // 14s @ 30fps
    },
  },
  {
    type: 'QuoteScene',
    props: {
      quote: 'Zeig mir mal, was du damit machst.',
      subtext: 'Nicht als Kontrolle. Als Interesse.',
      backgroundColor: colors.warmWhite,
      animationStyle: 'cascade',
      durationInFrames: 300, // 10s @ 30fps
    },
  },
  // ... more scenes
];
```

### File 2: Component Files (Only if new types needed)

If a scene requires a component type that doesn't exist (e.g., a new "DataVisualizationScene" type), the agent flags it:

```
NEW COMPONENT NEEDED: DataVisualizationScene
Scene 7 requires: bar chart, two colored bars, animated entrance
Action: Human creates video/src/scenes/DataVisualizationScene.tsx
Agent can then generate props in next run.
```

Human creates the `.tsx` file, agent populates the data in the next iteration.

---

## Component Type Reference

These are the currently available scene components. The agent routes each scene to one of these:

| Component | Use | Props Example |
|-----------|-----|---------------|
| **StatScene** | Statistic with description (no image) | `stat`, `description`, `source`, `backgroundColor` |
| **QuoteScene** | Quote or key sentence (centered, large) | `quote`, `subtext`, `backgroundColor`, `animationStyle` |
| **HookScene** | Background image + text overlay | `backgroundImage`, `text`, `animationStyle`, `position` |
| **InsightScene** | Dark background, two text lines, sequential reveal | `title`, `subtitle`, `backgroundColor`, `animationStyle` |
| **ResourceScene** | Resource name + instruction (e.g., klicksafe.eu) | `resourceName`, `instruction`, `backgroundColor` |
| **EndScene** | Ending message (static or talking head placeholder) | `message`, `backgroundColor` |

---

## Conversion Rules

### Rule 1: Determine Component Type
Read `**Visual Component:**` field in the scene block. If it explicitly names a component (e.g., "StatScene"), use that. If blank, infer from **Visual** description:

- "Large number, description text below" → **StatScene**
- "Quote in center, sub-text below" → **QuoteScene**
- "Background photo, text overlay lower-third" → **HookScene**
- "Dark background, two text lines" → **InsightScene**
- "Resource name, link, instruction" → **ResourceScene**
- "Message or talking head, no visuals" → **EndScene**

### Rule 2: Extract Props
From `**Props:**` section (or infer from **Visual** if section is empty):

```
**Props:**
  - stat: "2 / 3"
  - description: "der Jugendlichen..."
  - backgroundColor: warm-white
  - animationStyle: cascade
```

Becomes:

```typescript
{
  stat: '2 / 3',
  description: 'der Jugendlichen...',
  backgroundColor: colors.warmWhite, // Import from styles/colors.ts
  animationStyle: 'cascade',
  durationInFrames: 420, // From **Duration:** field
}
```

### Rule 3: Duration Conversion
Convert spoken duration in seconds to frames @ 30 FPS:

```
Duration: ~14s → durationInFrames: 420 (14 * 30)
Duration: ~10s → durationInFrames: 300
```

### Rule 4: Animation Timing
From `**Animation:**` field, extract entrance/exit timing and map to Remotion animation names:

| Scene Brief | Remotion Code |
|-------------|--------------|
| "Fade In → 0.4s" | `{ animationStyle: 'fadeOnly', enterFrames: 12 }` |
| "Text 1 Fade In, Text 2 slides up 0.2s later" | `{ animationStyle: 'cascade', staggerFrames: 6 }` |
| "Text 1 Fade Out, Text 2 Fade In" | `{ animationStyle: 'crossfade' }` |

Motion preset values (from `/video/src/styles/motion.ts`):
- `fadeIn: 12 frames` (0.4s)
- `slideUp: 12 frames` (0.4s)
- `stagger: 6 frames` (0.2s)

### Rule 5: Color Mapping
Map color names to hex values from `colors.ts`:

| Brief | Code |
|-------|------|
| `backgroundColor: warm-white` | `colors.warmWhite` |
| `backgroundColor: dark-gray` | `colors.darkGray` |
| `backgroundColor: dark-navy` | `colors.darkNavy` |

NO custom hex codes. If a scene specifies an unlisted color, flag it as a constraint violation.

### Rule 6: Enforce Design System
Every color, font size, animation duration, and spacing comes from `/video/src/styles/`. Do NOT invent custom values. If a scene brief requires something not in the design system, flag it:

```
DESIGN SYSTEM VIOLATION: Scene 5 requests 'light blue background'
Available: warmWhite, darkGray, darkNavy only
Action: Choose from available palette or add to design system (human decision)
```

---

## Output Format

The `.ts` file is a valid TypeScript module:

```typescript
import { colors } from '../../styles/colors';
import { motion } from '../../styles/motion';

export type SceneComposition = {
  type: string;
  props: Record<string, unknown>;
};

export const kiRisikenScenes: SceneComposition[] = [
  {
    type: 'StatScene',
    props: {
      stat: '2 / 3',
      description: 'der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich.',
      source: 'Bitkom 2025',
      backgroundColor: colors.warmWhite,
      durationInFrames: 420,
    },
  },
  // ... more scenes
];
```

The file imports from `styles/` so it has access to design system constants.

---

## Self-Check Before Output

Before writing the scene data file, verify:

1. ✅ **All scenes mapped to a valid component type** — no unknown types
2. ✅ **All colors from design system** — no custom hex codes
3. ✅ **All animation styles named** — fadeOnly, cascade, crossfade, or none
4. ✅ **All durations converted to frames** — math: seconds × 30 = frames
5. ✅ **No missing props** — every scene has `backgroundColor` and `durationInFrames` minimum
6. ✅ **Valid TypeScript** — can be imported without syntax errors
7. ✅ **All text is verbatim from script** — no rewrites or edits
8. ✅ **Flagged new component needs** — if any exist, clearly noted for human action

If any check fails, include a **CONSTRAINT VIOLATION** block at the top of the output explaining what needs human decision before this is renderable.

---

## Constraints

- Do not create custom components — only generate data for existing components
- Do not modify the script text — all text must be verbatim from Scene Production Agent output
- Do not invent design system values — use only colors/sizes/timings from `/video/src/styles/`
- Do not assume B-roll will be embedded in Remotion — B-roll notes are for CapCut human assembly, not code
- Do not generate image assets — image descriptions are for CapCut or Leonardo AI, not Remotion rendering

---

## Example Run

**Input:** `content/scenes/2026-05-12/ki-risiken-kinder-scenes.md` (Scene Production Agent output)

**Output:**
```typescript
// video/src/compositions/ki-risiken/scenes.ts
import { colors } from '../../styles/colors';

export const kiRisikenScenes = [
  {
    type: 'StatScene',
    props: {
      stat: '2 / 3',
      description: 'der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich.',
      source: 'Bitkom 2025',
      backgroundColor: colors.warmWhite,
      durationInFrames: 420,
    },
  },
  {
    type: 'InsightScene',
    props: {
      title: 'Klingt wie eine Abhängigkeit.',
      subtitle: 'nicht im dramatischen Sinn.',
      backgroundColor: colors.warmWhite,
      animationStyle: 'cascade',
      durationInFrames: 420,
    },
  },
  // ... 11 more scenes
];
```

**Status:** Ready. All scenes mapped. No new components needed. All colors from design system. All durations converted to frames.

---

## Notes for Future

As new scene components are added to `/video/src/scenes/`, update the **Component Type Reference** table above so this agent knows about them. The agent can then route scenes to any component type that exists.
