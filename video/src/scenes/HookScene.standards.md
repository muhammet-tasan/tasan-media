# HookScene Standards — tasan-media Documentary Opening

**Component:** `HookScene.tsx`  
**Status:** Production standard (2026-05-24)  
**Audience:** Documentary-style video opening hook (3–7 min videos)

---

## Overview

HookScene is the reusable opening component for tasan-media videos. It establishes a calm, intimate, emotionally intentional documentary moment that orients viewers and builds trust.

The component is designed to feel like the opening shot of a premium documentary (Netflix, ARTE, BBC) — restrained, cinematic, trustworthy, and technically sophisticated. It avoids clickbait, urgency, or attention-hacking. Instead, it invites through carefully crafted composition and motion design.

**Aesthetic Reference:** Netflix documentaries, ARTE productions, Apple keynote style — minimal motion, premium texture, emotionally controlled pacing.

---

## Typography Standards

### Primary Hook Text
- **Size:** 112px
- **Weight:** Bold (700)
- **Font:** Manrope
- **Color:** #F5F2EC (warm off-white, not pure white)
- **Line Height:** 1.0 (tight, premium cinematic presence)
- **Letter Spacing:** -2px (optical tightening, cinematic scale)
- **Text Shadow:** `0 20px rgba(0, 0, 0, 0.35)` (soft subtle depth + readability)
- **Opacity:** Static 0.96 for text opacity over fades
- **Text Align:** Left

### Constraints
- **Max Width:** 780px (40% of 1920px frame width, allows wider horizontal layout)
- **Text should feel intentionally cinematic and integrated into image composition**, not like subtitles or captions
- **No decorations, no emoji**, pure typography
- **Premium documentary aesthetic**, calm and emotionally intentional

---

## Composition Standards

### Positioning
- **Left margin:** 180px (intentional breathing room from left edge, premium spacing)
- **Bottom margin:** 190px (intentional vertical centering in lower half, stronger visual presence)
- **Placement:** Lower-left composition with integrated documentary positioning
- **Max Width:** 780px (allows fuller horizontal layout without edge-hugging)
- **Avoid:** Center-bottom, centered text, symmetrical layouts, edge-hugging text

### Visual Hierarchy
- **Hallway image:** Primary emotional anchor (not secondary)
- **Text:** Intentional secondary element guiding mood
- **Negative space:** Right side and top left clear for balance
- **Eye movement:** Naturally guides viewer into hallway depth

### Overlays (Premium Treatment)
- **Left-bottom readability gradient:** Positioned in lower-left area (opacity 0.24)
  - Darker near typography, invisible transition into image
  - Linear gradient from bottom-left (to right top), fades smoothly
  - Covers ~60% width, ~55% height of frame
  - Ensures text legibility without visible hard edge
- **Bottom gradient overlay:** SoftGradientOverlay direction="bottom", opacity=0.48
  - Gentle darkening for overall text readability
  - Preserves left-side clarity (where typography sits)
  - Prevents heavy-handed overlay feeling
- **Vignette:** Subtle radial darkening (VignetteOverlay opacity=0.25, strength=0.55)
  - Refined focus effect without heavy darkness
  - Creates depth and cinematic framing
  - Premium look, never heavy-handed
- **Film grain:** SVG-based texture overlay (GrainOverlay opacity=0.08, scale=1)
  - Subtle documentary/cinema texture
  - Fractal noise + displacement map
  - Adds premium production value without visible noise
- **Purpose:** Text readability + cinematic focus + atmospheric texture + premium aesthetic

---

## Motion Standards

### Ken Burns Effect
- **Type:** Extremely subtle documentary-style push-in (breathing zoom)
- **Start scale:** 1.0
- **End scale:** 1.015 (1.5% total zoom — barely subconscious)
- **Duration:** Full scene (210 frames)
- **Easing:** `Easing.inOut(Easing.exp)` (smooth exponential, premium feel)

### Text Fades
- **Fade-in duration:** 21–24 frames (0.7–0.8 seconds @ 30fps) for slow atmospheric entry
- **Fade-out duration:** 18–30 frames (0.6–1.0 seconds @ 30fps) for gentle exit
- **Easing:** `Easing.inOut(Easing.exp)` (exponential smoothness, premium cinematic feel)
- **Philosophy:** Fades feel cinematic and emotional, never instant or snappy — comparable to Netflix documentary openings
- **No bounce, snap, or overshoot**

### Motion Philosophy
- **Movement should be almost subconscious**
- **The viewer should feel the mood, not notice the zoom**
- **No aggressive pan, no aggressive zoom, no TikTok caption motion**

---

## Timing Standards

### Scene Duration
- **Total:** 210 frames (7 seconds @ 30fps)
- **Breathing room:** Never more than ~2 seconds of static content

### Text Timing (Frame-based)

#### Line 1 ("Sie ist ruhig." or similar)
- **Fade in:** Frames 15–33 (18 frames = 0.6s, slow atmospheric entry)
- **Display:** Frames 33–84 (51 frames = 1.7s emotional hold)
- **Fade out:** Frames 84–102 (18 frames = 0.6s, gentle exit)
- **Total:** 87 frames (2.9 seconds, fully gone by ~3.4s)

#### Emotional Pause
- **Frames 102–123:** 21 frames (0.7s, breath of silence between texts)

#### Line 2 ("Du hast deinen Abend." or similar)
- **Fade in:** Frames 123–141 (18 frames = 0.6s, slow atmospheric entry)
- **Display:** Frames 141–210 (69 frames = 2.3s emotional hold until scene end)
- **No fade out:** Text holds until end of scene for final emotional resolution
- **Total:** 87 frames (2.9 seconds)

#### Final Transition
- **Frame 210:** Seamless fade-out into next scene or silence
- **Philosophy:** Both text elements fade to black naturally, not cut**

### Emotional Pacing
- **0–15 frames:** Hallway already visible (establishes setting, no delay)
- **15–33 frames:** First text fades in slowly (0.6s, recognition moment)
- **33–84 frames:** Emotional hold (1.7s, let the recognition settle deeply)
- **84–102 frames:** First text fades out gently (0.6s, completion and release)
- **102–123 frames:** Emotional pause, silence (0.7s, breath between texts)
- **123–141 frames:** Second text fades in slowly (0.6s, reflection enters)
- **141–210 frames:** Emotional hold (2.3s, let the echo resonate, extends to scene end)
- **Philosophy:** Longer holds for emotional depth, equal fade durations (18 frames) for consistency, natural breathing between elements

---

## Visual Standards

### Atmosphere
- **Mood:** Intimate, quiet, lived-in, documentary
- **Lighting:** Warm/cool contrast (evening domestic space)
- **Texture:** Real, not stylized; not stock-photo
- **Emotional tone:** Trustworthy, calm, slightly introspective

### Color
- **Background:** Warm hallway image (anchor mood)
- **Text:** Warm off-white #F5F2EC (trust, not coldness)
- **Overlays:** Dark (readability), subtle vignette (cinema)
- **Avoid:** Pure white text, bright colors, saturated tones

### Image Requirements
- **Must be:** Documentary-style photograph of a real domestic space
- **Hallway, kitchen, or bedroom:** Calm evening lighting
- **Warm light source** (left side, e.g., living room light)
- **Cool light source** (right side, e.g., screen glow or window)
- **No people visible** (viewer projects self into scene)
- **Resolution:** 1920×1080+ (for Ken Burns zoom)
- **Format:** PNG or JPEG, served via `staticFile('filename.png')`

---

## Props Interface

```typescript
interface HookSceneProps {
  line1: string;              // First text (typically 3–6 words)
  line2: string;              // Second text (typically 3–6 words)
  backgroundImage?: string;   // Filename in public/ (e.g., 'scene-01-hallway.png')
  durationInFrames?: number;  // Default: 210 (7 seconds)
}
```

---

## Usage Example

```typescript
<Composition
  id="Scene01Hook"
  component={HookScene}
  durationInFrames={210}
  fps={30}
  width={1920}
  height={1080}
  defaultProps={{
    line1: 'Sie ist ruhig.',
    line2: 'Du hast deinen Abend.',
    backgroundImage: 'scene-01-hallway.png',
    durationInFrames: 210,
  }}
/>
```

---

## Customization & Variations

### Allowed Variations
- **Text content:** Any 2–6 word phrases per line
- **Background image:** Different domestic spaces (living room, bedroom, kitchen)
- **Duration:** Can extend to 8–10 seconds by adjusting frame counts proportionally

### Do Not Modify
- **Typography size, weight, color** (these are brand standards)
- **Composition positioning** (these are cinematic standards)
- **Motion philosophy** (subtlety is the point)
- **Vignette/overlay treatment** (readability + focus)

### If Customizing Duration
When extending or shortening HookScene, maintain proportions:
- **Background fade-in:** Always 0.5s (15 frames)
- **Text fade duration:** Always 0.5s (15 frames)
- **Text hold duration:** Adjust based on new total (currently ~2.5s for line 1, ~2s for line 2)
- **Ken Burns zoom:** Always 2.5% regardless of duration

---

## Rendering & Export

### Command
```bash
npx remotion render src/index.tsx Scene01Hook --output renders/2026-05-12/ki-risiken-kinder/scene-01-hook.mp4
```

### Output Specs
- **Codec:** H.264 (MP4)
- **Resolution:** 1920×1080
- **Frame rate:** 30 FPS
- **Color space:** sRGB
- **File size:** ~2.8–3.5 MB (7 seconds, with background image)

### Quality Checks Before Approval
- [ ] Text is 112px, bold (700), warm off-white (#F5F2EC)
- [ ] Text positioned lower-left (180px left, 190px bottom)
- [ ] Max width 780px with left text alignment
- [ ] Line height 1.0, letter spacing -2px for cinematic optical tightening
- [ ] Text shadow 0 20px rgba(0,0,0,0.35) for soft subtle depth
- [ ] Soft left-bottom readability gradient (0.24 opacity) covers lower-left area
- [ ] Background image visible and in focus
- [ ] No text overlap (line 2 fades in after line 1 completely fades out)
- [ ] Ken Burns zoom is subtle (1.5%, barely noticeable breathing)
- [ ] Vignette/gradient/grain enhance premium documentary aesthetic
- [ ] Text fades feel slow and emotional (18-frame fades = 0.6s each)
- [ ] No TikTok effects, aggressive motion, or overstimulation
- [ ] Emotional pacing feels intentional, integrated, cinematic, not rushed
- [ ] Overall aesthetic: Netflix/ARTE documentary opening, not subtitle-like

---

## What HookScene Is Not

- ❌ Not a subtitle slide (too large, too intentional)
- ❌ Not an Instagram caption (no emoji, no decoration)
- ❌ Not a TikTok intro (no music sync, no bounce, no snap)
- ❌ Not a commercial hook (no urgency, no FOMO)
- ❌ Not a news chyron (no information density, no speed)

## What HookScene Is

- ✓ **Documentary opening shot:** Real, calm, inviting
- ✓ **Emotional anchor:** Sets tone for the video
- ✓ **Cinematic moment:** Intentional, restrained, trustworthy
- ✓ **Reusable primitive:** Works for any 3–7 min tasan-media video
- ✓ **Brand standard:** Consistent, recognizable, professional

---

## Rationale

HookScene uses large, bold typography because cinema — whether film or high-end video — uses scale and weight to establish emotional presence. 56pt feels like a subtitle; 104pt feels like cinema. Off-white (#F5F2EC) is warmer than pure white, avoiding the coldness of generic video text. Lower-left positioning is documentary convention; it's where real documentaries place intentional text. The 2.5% Ken Burns zoom is almost imperceptible but creates life and prevents static flatness.

Together, these choices create a moment that feels like the opening of a calm, trustworthy, well-made documentary — not like typical YouTube clickbait.

---

## Future Variations

### Possible Extensions (Not Yet Implemented)
- **Dialogue variant:** Two speakers with different text positions
- **Longer duration:** 10–15 seconds for longer emotional holds
- **Different overlays:** Warm-tinted vignette for different moods
- **Cinematic bars:** Optional pillar-box or letter-box frame

These are future considerations; use the current standard for all 2026 content.
