# StatisticScene Standards — tasan-media Documentary Statistic Presentation

**Component:** `StatisticScene.tsx`  
**Status:** Production standard (2026-05-25, redesigned)  
**Audience:** Documentary-style statistic slides (3–7 min videos, scene 4 variant)

---

## Overview

StatisticScene presents key statistics with cinematic dominance and atmospheric depth. **It has its own visual language distinct from HookScene** — not lower-left edge positioning, but center-left dominance.

The statistic must feel emotionally important and immediately readable on mobile. The supporting description and atmospheric B-roll background create context without distraction.

**Aesthetic Reference:** Netflix documentaries (statistic sequences), ARTE productions — intimate B-roll backgrounds, large cinematic typography, documentary mood. Modern editorial, not presentation slides or infographics.

---

## Typography Standards

### Statistic (Dominant Primary Element)
```
Font: Manrope
Weight: 700 (bold)
Size: 160px (LARGE, dominates frame)
Line Height: 0.95 (tight, cinematic presence)
Letter Spacing: -3px (strong optical tightening for large scale)
Color: #F5F2EC (warm off-white)
Opacity: Fades in/out via interpolate()
Text Shadow: 0 24px rgba(0, 0, 0, 0.45) (stronger shadow for dominance)
Max Width: 900px (allows flexible number formats)
Text Align: Left (not centered)
```

**Philosophy:** The statistic is the scene's emotional anchor. 160px is substantially larger than HookScene (112px) because the statistic must dominate the frame and be immediately readable on mobile phones.

### Description (Supporting Context)
```
Font: Manrope
Weight: 400 (regular)
Size: 52px (substantial, supports statistic hierarchy)
Line Height: 1.25 (readable breathing)
Letter Spacing: 0px (no tightening)
Color: #F5F2EC (warm off-white)
Opacity: Fades in/out via interpolate()
Text Shadow: 0 16px rgba(0, 0, 0, 0.35) (softer than statistic)
Max Width: 820px (proportional to statistic width)
Text Align: Left
```

### Source Attribution (Caption)
```
Font: Manrope
Weight: 400 (regular)
Size: 24px (small, corner position)
Line Height: 1.4 (airy)
Letter Spacing: 0.5px (slight breathing)
Color: #F5F2EC
Opacity: 0.75 (lighter than description for visual hierarchy)
Text Shadow: None
Position: Bottom-right corner (distance from statistic)
```

---

## Composition Standards

### Positioning (Center-Left Layout)
- **Statistic position:** left: 260px, bottom: 480px (center-left, visually dominant)
- **Description position:** left: 260px, bottom: 310px (naturally beneath statistic)
- **Source position:** right: 260px, bottom: 100px (bottom-right corner)

### Philosophy: Center-Left Dominance
Unlike HookScene's lower-left composition, StatisticScene uses **center-left positioning** with a **larger statistic that dominates the frame**. This creates:
- **Visual dominance** (large typography commands attention)
- **Balance** (centered enough to feel intentional, not edge-hugging)
- **Asymmetry** (right side of frame remains open for atmospheric B-roll)
- **Mobile readability** (large size visible on small screens)

### Required Background Image
**StatisticScene REQUIRES a background image.** The background is not optional:
- **Type:** Blurred documentary-style B-roll image
- **Atmosphere:** Teenager / phone / evening / digital-life context
- **Style:** Heavily softened and darkened, blurred depth of field
- **Mood:** Intimate, observational, calm documentary aesthetic
- **Composition:** Real-life moment (not staged), room/hands/screen visible
- **Contrast:** Warm light (lamp/window) + cool light (screen glow)

**Purpose:** The background establishes mood and context without distraction. It's atmospheric support for the statistic, not a decorative element.

---

## Overlays (Enhanced for Center-Left Composition)

### Gradient Overlays (Enhanced Coverage)
1. **Heavy base gradient overlay:** SoftGradientOverlay direction="both", opacity=0.62
   - Darker and more extensive than HookScene
   - Creates strong atmospheric mood around centered statistic
   - Supports high contrast for text dominance

2. **Center-left radial readability gradient:** opacity=0.3
   - Positioned at left side where statistic lives
   - Radial from center-left (30% horizontal, 50% vertical)
   - Covers ~70% width, ~60% height from top
   - Darker near text, fades to transparent right-top

### Vignette (Cinematic Frame)
- VignetteOverlay opacity=0.25, strength=0.55
- Same as HookScene (consistent cinematic framing)

### Film Grain (Premium Texture)
- GrainOverlay opacity=0.08, scale=1
- Same as HookScene (documentary texture)

---

## Motion Standards

### Ambient Drift (Extremely Subtle)
- **Type:** Almost imperceptible slow push-in (even more subtle than HookScene)
- **Start scale:** 1.0
- **End scale:** 1.008 (0.8% total movement, barely noticeable)
- **Duration:** Full scene (210 frames)
- **Easing:** `Easing.inOut(Easing.exp)`
- **Philosophy:** The background breathes gently. Viewer should feel mood, not notice motion.

### Text Fades (Emotional Pacing)
- **Fade-in duration:** 18 frames (0.6s @ 30fps) for slow atmospheric entry
- **Fade-out duration:** 18 frames (0.6s @ 30fps) for gentle exit
- **Easing:** `Easing.inOut(Easing.exp)` (exponential smoothness)
- **Philosophy:** Same as HookScene — cinematic, not UI-like

### Motion Philosophy
- **No flashy infographic animation**
- **No social-media-style statistic effects**
- **No aggressive motion**
- **Mood over spectacle**

---

## Timing Standards

### Scene Duration
- **Total:** 210 frames (7 seconds @ 30fps)
- **Consistency:** Same as HookScene for production workflow

### Text Timing (Frame-based)

#### Statistic
- **Fade in:** Frames 15–33 (18 frames = 0.6s)
- **Display:** Frames 33–84 (51 frames = 1.7s)
- **Fade out:** Frames 84–102 (18 frames = 0.6s)

#### Pause
- **Frames 102–123:** 21 frames (0.7s, breath between elements)

#### Description
- **Fade in:** Frames 123–141 (18 frames = 0.6s)
- **Display:** Frames 141–210 (69 frames = 2.3s, holds to end)

---

## Visual Standards

### Atmosphere
- **Mood:** Documentary, informative, intimate
- **Tone:** Trustworthy, observational, calm
- **Texture:** Real documentary B-roll, not synthetic or staged
- **Scale:** Personal moment, not grand statement

### Background Requirement
The background image is critical to StatisticScene's quality:
- Blurred documentary photograph of teenage digital life
- Evening setting with warm/cool light contrast
- Smartphone or screen visible (but not intrusive)
- Real domestic space (bedroom, living room, study area)
- Partial visibility of person (hands, silhouette, or background)

See `statistic-scene-image-prompt.md` for detailed generation/sourcing instructions.

### Color Palette
- **Text:** #F5F2EC (warm off-white, consistent with HookScene)
- **Background:** Warm (tungsten lamps) + cool (screen light) contrast
- **Overlays:** Dark for readability and mood
- **Avoid:** Bright colors, pure white text, saturated tones, generic stock imagery

---

## Props Interface

```typescript
interface StatisticSceneProps {
  stat: string;              // Statistic (e.g., "2 / 3", "66 %")
  description: string;       // Explanatory text (52px size)
  source?: string;           // Optional source attribution
  backgroundImage: string;   // REQUIRED: path to B-roll image in final-assets/
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
    backgroundImage: 'assets/2026-05-12/ki-risiken-kinder/final-assets/scene-04-statistic-bg.jpg',
    durationInFrames: 210,
  }}
/>
```

---

## Customization & Variations

### Allowed Variations
- **Statistic content:** Any number, ratio, or percentage
- **Description:** 1–3 sentences explaining the statistic
- **Source:** Any citation or attribution
- **Background image:** Different documentary B-roll (must fit aesthetic)
- **Duration:** Can extend to 8–10 seconds if holding longer

### Do Not Modify
- **Statistic typography size or weight** (160px bold is non-negotiable for dominance)
- **Composition centering** (center-left layout is core identity)
- **Overlay intensity** (enhanced overlays are required for cinematic mood)
- **Background requirement** (background image is NOT optional)
- **Fade timing** (18-frame fades for emotional consistency)

---

## Quality Checks Before Approval

- [ ] Statistic is 160px, bold (700), warm off-white (#F5F2EC)
- [ ] Statistic dominates frame visually and emotionally
- [ ] Description is 52px, clearly visible beneath statistic
- [ ] Source is 24px, positioned bottom-right, visually recessed
- [ ] Background image is present, blurred, darkened, atmospheric
- [ ] Background shows documentary B-roll (teenager/phone/evening scene)
- [ ] Gradient overlays are darker and more extensive than HookScene
- [ ] Text shadows provide strong contrast against background
- [ ] Ken Burns zoom is extremely subtle (0.8%, barely noticeable)
- [ ] Statistic fades in/out smoothly with 18-frame duration
- [ ] Description enters after pause (0.7s breathing)
- [ ] No flashy animation, no social-media effects
- [ ] Overall feeling is Netflix/ARTE documentary, not PowerPoint or infographic
- [ ] Scene feels emotionally important, not generic data presentation

---

## Comparison with HookScene

| Aspect | HookScene | StatisticScene |
|--------|-----------|----------------|
| **Primary text size** | 112px | 160px (larger, dominates) |
| **Positioning** | Lower-left edge (180px left) | Center-left (260px left) |
| **Composition philosophy** | Documentary opening | Statistic dominance |
| **Description text** | None | 52px (supporting) |
| **Background** | Optional hallway image | REQUIRED B-roll image |
| **Gradient overlay opacity** | 0.48 (gentle) | 0.62 (enhanced) |
| **Motion** | 1.5% zoom | 0.8% drift (more subtle) |
| **Overall feel** | Opening moment | Informative documentary |
| **Typography hierarchy** | Primary only | Stat > Description > Source |

---

## What StatisticScene Is

- ✓ **Documentary statistic moment:** Real B-roll, intimate atmosphere
- ✓ **Emotionally dominant:** Large typography commands attention
- ✓ **Cinematic presentation:** Intentional, restrained, premium
- ✓ **Reusable primitive:** Works for any statistic in 3–7 min video
- ✓ **Own visual language:** Not HookScene positioning, not PowerPoint
- ✓ **Netflix/ARTE aesthetic:** Modern documentary editorial

---

## What StatisticScene Is Not

- ❌ Not a subtitle slide (statistic is primary, dominant)
- ❌ Not a PowerPoint data slide (cinematic B-roll, not plain gradient)
- ❌ Not an infographic (no animated numbers, no charts)
- ❌ Not a TikTok statistic (no social-media-style animation)
- ❌ Not a news ticker (no scrolling, no urgency)
- ❌ Not edge-positioned text (center-left layout with visual balance)

---

## Rationale

StatisticScene's 160px typography dominates because statistics deserve cinematic weight. The center-left positioning (not lower-left) creates balance and intentionality. The required atmospheric B-roll background transforms the scene from a "presentation slide" into an intimate documentary moment. Heavily darkened overlays ensure the large text reads clearly while maintaining mood. Enhanced overlays and larger typography distinguish StatisticScene from HookScene — each scene type has its own visual language.

Together, these choices create a statistic that feels important, credible, and cinematic — worthy of a Netflix documentary.

---

## Background Image Sourcing

See `statistic-scene-image-prompt.md` for:
- Detailed generation prompts
- Visual references
- Sourcing strategies (search, generate, photograph)
- Asset approval workflow

---

## References
- SCENE-STANDARDS.md — Reusable tasan-media scene patterns
- HookScene.standards.md — HookScene detailed specification
- sceneStandards export in src/styles/tasanMediaStyle.ts — Concrete values
