# StatisticScene Standards — tasan-media Documentary Statistic Presentation

**Component:** `StatisticScene.tsx`  
**Status:** Production standard (2026-05-25)  
**Audience:** Documentary-style statistic slides (3–7 min videos, Scene 4 variant)

---

## Overview

StatisticScene is a reusable component for presenting key statistics with description and source attribution. It establishes the same calm, cinematic documentary moment as HookScene, but optimized for:
- **Large number presentation** (statistic primary element)
- **Explanatory context** (description secondary)
- **Source attribution** (credibility via citation)

The component follows HookScene's proven standards: premium typography, lower-left composition, subtle motion, documentary aesthetic.

**Aesthetic Reference:** Same as HookScene — Netflix documentaries, ARTE productions, premium documentary opening style — minimal motion, premium texture, emotionally controlled pacing.

---

## Typography Standards

### Statistic (Primary Element)
- **Size:** 112px (same as HookScene primary text, cinematic presence)
- **Weight:** Bold (700)
- **Font:** Manrope
- **Color:** #F5F2EC (warm off-white)
- **Line Height:** 1.0 (tight, premium)
- **Letter Spacing:** -2px (optical tightening)
- **Text Shadow:** `0 20px rgba(0, 0, 0, 0.35)` (soft subtle depth)
- **Opacity:** Fades in/out via interpolate()

### Description (Secondary Element)
- **Size:** 48px (substantial, sub-headline level)
- **Weight:** Regular (400)
- **Font:** Manrope
- **Color:** #F5F2EC (warm off-white)
- **Line Height:** 1.2 (readable)
- **Letter Spacing:** 0px (no tightening)
- **Text Shadow:** `0 12px rgba(0, 0, 0, 0.25)` (softer than stat shadow)
- **Opacity:** Fades in/out via interpolate()

### Source Attribution (Caption)
- **Size:** 24px (small but readable)
- **Weight:** Regular (400)
- **Font:** Manrope
- **Color:** #F5F2EC (warm off-white)
- **Line Height:** 1.4 (airy)
- **Letter Spacing:** 0.5px (slight breathing)
- **Opacity:** 0.80 (lighter than description for visual hierarchy)
- **Shadow:** None (minimal styling for caption)

### Constraints
- **Stat Max Width:** 780px (allows wider layout for large numbers)
- **Description Max Width:** 780px (consistent with stat)
- **Text Align:** Left (not centered, documentary convention)

---

## Composition Standards

### Positioning
- **Stat Position:** left: 180px, bottom: 280px (higher up for visual hierarchy)
- **Description Position:** left: 180px, bottom: 190px (lower, supporting role)
- **Source Position:** right: 180px, bottom: 80px (bottom-right corner, optional)
- **Placement:** Lower portion of frame, intentional spacing
- **Avoid:** Center-bottom, centered text, edge-hugging

### Visual Hierarchy
- **Statistic:** Primary visual anchor (largest, highest position)
- **Description:** Secondary supporting element (medium size, lower)
- **Source:** Tertiary attribution (smallest, corner position)
- **Negative space:** Right side and top clear for balance
- **Eye movement:** Top-to-bottom natural flow (stat → description → source)

### Overlays (Premium Treatment)
Same as HookScene for consistency:
- **Left-bottom readability gradient:** opacity=0.24, linear gradient to right-top
- **Bottom gradient overlay:** SoftGradientOverlay direction="bottom", opacity=0.48
- **Vignette:** Subtle radial darkening (opacity=0.25, strength=0.55)
- **Film grain:** SVG-based texture overlay (opacity=0.08, scale=1)
- **Purpose:** Text readability + cinematic focus + atmospheric texture

---

## Motion Standards

### Ken Burns Effect
- **Type:** Subtle documentary-style push-in
- **Start scale:** 1.0
- **End scale:** 1.015 (1.5% total zoom)
- **Duration:** Full scene (210 frames)
- **Easing:** `Easing.inOut(Easing.exp)`
- **Philosophy:** Almost subconscious, viewer feels mood not zoom

### Text Fades
- **Fade-in duration:** 18 frames (0.6s @ 30fps) for slow atmospheric entry
- **Fade-out duration:** 18 frames (0.6s @ 30fps) for gentle exit
- **Easing:** `Easing.inOut(Easing.exp)` (exponential smoothness, premium cinematic)
- **Philosophy:** Fades feel cinematic and emotional, never instant or snappy
- **No bounce, snap, or overshoot**

### Motion Philosophy
Same as HookScene:
- **Movement should be almost subconscious**
- **The viewer should feel the mood, not notice the zoom**
- **No aggressive pan, no aggressive zoom, no TikTok caption motion**

---

## Timing Standards

### Scene Duration
- **Total:** 210 frames (7 seconds @ 30fps)
- **Same as HookScene for consistency**

### Text Timing (Frame-based)

#### Statistic
- **Fade in:** Frames 15–33 (18 frames = 0.6s, slow atmospheric entry)
- **Display:** Frames 33–84 (51 frames = 1.7s, emotional hold)
- **Fade out:** Frames 84–102 (18 frames = 0.6s, gentle exit)
- **Total:** 87 frames (2.9 seconds)

#### Emotional Pause
- **Frames 102–123:** 21 frames (0.7s, breath of silence between stat and description)

#### Description
- **Fade in:** Frames 123–141 (18 frames = 0.6s, slow atmospheric entry)
- **Display:** Frames 141–210 (69 frames = 2.3s, emotional hold until scene end)
- **No fade out:** Holds until end for resolution
- **Total:** 87 frames (2.9 seconds)

### Emotional Pacing
- **0–15 frames:** Background fades in (establishes context)
- **15–33 frames:** Statistic fades in very slowly (0.6s, recognition moment)
- **33–84 frames:** Emotional hold (1.7s, let the impact settle)
- **84–102 frames:** Statistic fades out gently (0.6s, completion)
- **102–123 frames:** Emotional pause, silence (0.7s, breath between elements)
- **123–141 frames:** Description fades in slowly (0.6s, context enters)
- **141–210 frames:** Emotional hold (2.3s, resonates to scene end)
- **Philosophy:** Both elements get emotional space, consistent breathing pattern with HookScene

---

## Visual Standards

### Atmosphere
- **Mood:** Informative, trustworthy, documentary
- **Lighting:** Context-dependent (if background image)
- **Texture:** Real, not stylized; premium documentary aesthetic
- **Emotional tone:** Credible, authoritative, calm

### Color
- **Background:** Dark navy (default: #1E2738) or real documentary image
- **Text:** Warm off-white #F5F2EC (consistency across all scenes)
- **Overlays:** Dark (readability), subtle vignette (cinema)
- **Avoid:** Bright colors, cold whites, saturated tones

### Image Requirements (Optional Background)
- **Style:** Documentary photograph of relevant context scene
- **Resolution:** 1920×1080+ (for Ken Burns zoom)
- **Format:** PNG or JPEG, served via `staticFile('filename.png')`
- **Alternative:** Can omit background (uses dark navy with overlays for clean statistical presentation)

---

## Props Interface

```typescript
interface StatisticSceneProps {
  stat: string;              // Statistic (e.g., "2 / 3", "66 %")
  description: string;       // Explanatory text
  source?: string;           // Optional source attribution
  backgroundImage?: string;  // Optional filename in public/
  durationInFrames?: number; // Default: 210 (7 seconds)
}
```

---

## Usage Example

```typescript
<Composition
  id="Scene04Statistic"
  component={StatisticScene}
  durationInFrames={210}
  fps={30}
  width={1920}
  height={1080}
  defaultProps={{
    stat: '2 / 3',
    description: 'der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich.',
    source: 'Bitkom 2025',
    durationInFrames: 210,
  }}
/>
```

---

## Customization & Variations

### Allowed Variations
- **Statistic content:** Any number format or ratio
- **Description:** 1–3 sentences explaining the statistic
- **Source:** Any source attribution or citation
- **Background image:** Different documentary-style photographs (optional)
- **Duration:** Can extend to 8–10 seconds by adjusting frame counts proportionally

### Do Not Modify
- **Typography size, weight, color** (brand standards)
- **Composition positioning** (documentary standards)
- **Motion philosophy** (subtlety is the point)
- **Overlay treatment** (readability + focus)
- **Fade timing** (emotional pacing consistency)

---

## Rendering & Export

### Command
```bash
npx remotion render src/index.tsx Scene04Statistic --output renders/2026-05-25/statistic-scene.mp4
```

### Output Specs
- **Codec:** H.264 (MP4)
- **Resolution:** 1920×1080
- **Frame rate:** 30 FPS
- **Color space:** sRGB
- **File size:** ~2.0–2.8 MB (7 seconds, no background image)

### Quality Checks Before Approval
- [ ] Stat text is 112px, bold, warm off-white
- [ ] Description text is 48px, regular, same color
- [ ] Source is 24px, positioned bottom-right (if present)
- [ ] Stat positioned lower portion of frame (180px left, 280px bottom)
- [ ] Description positioned below stat (180px left, 190px bottom)
- [ ] Ken Burns zoom is subtle (barely noticeable)
- [ ] All overlays (gradient/vignette/grain) enhance readability
- [ ] No TikTok effects, aggressive motion, or overstimulation
- [ ] Emotional pacing feels intentional (stat → pause → description)
- [ ] Stat fades in/out smoothly with 18-frame fades
- [ ] Description holds until end, no abrupt cut-off

---

## Comparison with HookScene

Both follow the same standards:

| Aspect | HookScene | StatisticScene |
|--------|-----------|----------------|
| **Duration** | 7s (210 frames) | 7s (210 frames) |
| **Primary text size** | 112px | 112px |
| **Secondary text** | None | 48px description |
| **Composition** | Lower-left | Lower-left with stat above description |
| **Motion** | Ken Burns + text fades | Ken Burns + text fades |
| **Overlays** | Gradient + vignette + grain | Same |
| **Easing** | Easing.inOut(Easing.exp) | Same |
| **Philosophy** | Documentary opening | Documentary statistic presentation |

---

## What StatisticScene Is

- ✓ **Documentary statistic moment:** Real, calm, credible
- ✓ **Emotional anchor:** Establishes authority and trust
- ✓ **Cinematic presentation:** Intentional, restrained, premium
- ✓ **Reusable primitive:** Works for any statistic in 3–7 min video
- ✓ **Brand standard:** Consistent with HookScene aesthetic

---

## What StatisticScene Is Not

- ❌ Not a bullet-point slide (no list, single statistic only)
- ❌ Not a data chart (visual presentation, not graphic)
- ❌ Not a news ticker (no scrolling, no information density)
- ❌ Not a commercial pitch (no urgency, no FOMO)
- ❌ Not a subtitle slide (too large, too intentional)

---

## Rationale

StatisticScene uses the same 112px typography as HookScene because statistics—like cinematic moments—benefit from scale and weight. 48px for description is substantial enough to command attention but secondary to the statistic. Lower-left positioning maintains documentary convention. The breathing pacing (0.7s pause between stat and description) gives viewers time to absorb the number before learning its context.

Together, these choices create a moment that feels like a carefully researched statistic presented in a premium documentary—not like a generic data slide.

---

## References
- SCENE-STANDARDS.md — Reusable tasan-media scene patterns
- HookScene.standards.md — HookScene detailed specification
- sceneStandards export in src/styles/tasanMediaStyle.ts — Concrete values
