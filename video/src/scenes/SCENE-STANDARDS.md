# tasan-media Scene Standards — Reusable Patterns & Primitives

**Status:** Production (2026-05-24)  
**Purpose:** Document learned standards from HookScene so future scene generation reuses these patterns instead of rediscovering them.

---

## Documentary Aesthetic Philosophy

All tasan-media scenes should feel like **premium documentary opening moments** comparable to Netflix, ARTE, BBC, Apple keynote style:
- **Restrained, cinematic, trustworthy**
- **No clickbait, urgency, or attention-hacking**
- **Minimal motion, premium texture, emotionally controlled pacing**
- **Invitation through composition, not manipulation through speed**

---

## Typography Standards (Cinematic Documentary)

### Primary Text (Headlines, Hooks, Key Moments)
```
Font: Manrope
Weight: 700 (bold)
Size: 112px (sufficient for cinematic presence, not oversized)
Line Height: 1.0 (tight, premium feel)
Letter Spacing: -2px (optical tightening for cinematic scale)
Color: #F5F2EC (warm off-white, not pure white or cold gray)
Opacity: 0.96 (static, slight transparency for integration)
Text Shadow: 0 20px rgba(0, 0, 0, 0.35) (soft subtle depth, not heavy)
Max Width: 780px (allows fuller horizontal layout)
Text Align: left (not centered)
```

### Secondary Text (Supporting Information)
```
Font: Manrope
Weight: 400 (regular)
Size: 48px (sub-headline, still substantial)
Line Height: 1.2
Letter Spacing: 0px (no tightening)
Color: #F5F2EC
Opacity: 0.92
Text Shadow: 0 12px rgba(0, 0, 0, 0.25) (lighter shadow)
```

### Caption/Source Text
```
Font: Manrope
Weight: 400 (regular)
Size: 24px (readable, not tiny)
Line Height: 1.4
Letter Spacing: 0.5px (slight breathing)
Color: #F5F2EC
Opacity: 0.80 (intentionally lighter for hierarchy)
Text Shadow: none
```

---

## Composition Standards (Lower-Left Third)

### Safe Area & Margins
```
Horizontal safe area: 96px (5% of 1920px)
Vertical safe area: 80px (7.4% of 1080px)
```

### Positioning Philosophy: Lower-Left Composition
Documentary convention places intentional text in the lower-left third of the frame. This creates:
- **Visual balance** (negative space right + top)
- **Trustworthiness** (not centered, not edge-hugging)
- **Intentionality** (clearly composed, not random)
- **Viewer eye movement** (naturally guides into scene depth)

### Specific Values (HookScene)
```
Left margin: 180px (intentional breathing room from edge)
Bottom margin: 190px (slightly higher for visual presence)
Max width: 780px (wider horizontal layout)
Avoid: centered text, edge-hugging, symmetric layouts
```

### Overlays for Text Readability (Premium Treatment)
1. **Left-bottom readability gradient**
   - Purpose: Enhance text legibility without visible design
   - Type: Linear gradient (to right top)
   - Coverage: ~60% width, ~55% height from lower-left
   - Darkness progression: darker at text, transparent at right-top
   - Opacity: 0.24 (subtle, not heavy)
   - Effect: Dark near typography, invisible transition to image

2. **Bottom gradient overlay**
   - SoftGradientOverlay direction="bottom", opacity=0.48
   - Gentle darkening for overall text readability
   - Preserves left-side clarity where typography sits

3. **Vignette (cinematic focus)**
   - VignetteOverlay opacity=0.25, strength=0.55
   - Subtle radial darkening from edges
   - Creates depth and cinematic framing

4. **Film grain (premium texture)**
   - GrainOverlay opacity=0.08, scale=1
   - SVG fractal noise + displacement map
   - Subtle documentary/cinema texture without visible noise

---

## Motion Standards (Extremely Subtle, Emotionally Intentional)

### Ken Burns Effect (Documentary Push-In)
```
Type: Breathing zoom, documentary-style
Start scale: 1.0
End scale: 1.015 (1.5% total movement)
Duration: full scene length
Easing: Easing.inOut(Easing.exp) (smooth exponential, premium)
Philosophy: Almost subconscious, viewer feels mood not zoom
Avoid: aggressive pan, aggressive zoom, TikTok-style motion
```

### Text Fades (Emotional Pacing)
```
Fade duration: 18 frames = 0.6 seconds @ 30fps
Easing: Easing.inOut(Easing.exp) (exponential smoothness)
Philosophy: Cinematic and emotional, never instant or snappy
Avoid: bounce, snap, overshoot, UI-like animation
```

### Text Hold (Emotional Breath)
```
Concept: Hold duration allows emotional resonance
Minimum hold: ~1.5s per text element
Pauses between elements: 0.7s (breath, not rushed)
Philosophy: Longer holds = deeper emotional impact
Example: first text holds 1.7s, pause 0.7s, second text holds 2.3s
```

### Scene Duration
```
Typical: 7 seconds (210 frames @ 30fps)
Rationale: Enough for cinematic pacing, not too long for opening hook
Can extend: 8-10 seconds if longer emotional holds needed
Never: shorter than 6 seconds (feels rushed)
```

---

## Emotional Pacing Framework

All scenes should follow a **breathing pattern**: fade-in → hold → fade-out → pause → repeat.

### Example: HookScene Pacing (7 seconds)
```
0–15 frames:     Background fades in (0.5s, establishes setting)
15–33 frames:    First text fades in (0.6s, slow atmospheric entry)
33–84 frames:    Hold first text (1.7s, let recognition settle)
84–102 frames:   First text fades out (0.6s, gentle completion)
102–123 frames:  Emotional pause (0.7s, breath between moments)
123–141 frames:  Second text fades in (0.6s, reflection enters)
141–210 frames:  Hold second text (2.3s, extends to scene end)
```

### Principles
- **Fade-in duration:** 0.6s (slow, atmospheric, not snappy)
- **Hold duration:** 1.5s–2.3s (emotional resonance, not glance)
- **Fade-out duration:** 0.6s (gentle, not abrupt)
- **Pause between elements:** 0.6s–0.7s (natural breathing)
- **Easing:** Always `Easing.inOut(Easing.exp)` for premium feel
- **No bounce, snap, or overshoot**

---

## Visual Language Standards

### Atmosphere & Lighting
```
Mood: Intimate, quiet, lived-in, documentary
Lighting: Warm/cool contrast (e.g., warm left, cool right)
Texture: Real, not stylized; not stock-photo
Emotional tone: Trustworthy, calm, slightly introspective
```

### Color Palette
```
Text: #F5F2EC (warm off-white, not pure white)
Background: Real documentary photograph (warm domestic space)
Overlays: Dark for readability (blacks/dark grays)
Avoid: Bright colors, saturated tones, pure white text
```

### Image Requirements (for background scenes)
```
Style: Documentary-style photograph of real domestic space
Subjects: Hallway, kitchen, bedroom, or similar calm evening setting
Lighting: Warm light source (left, e.g., living room light)
         Cool light source (right, e.g., screen glow or window)
People: None visible (viewer projects self into scene)
Resolution: 1920×1080 minimum (for Ken Burns zoom)
Format: PNG or JPEG
Serving: via staticFile('assets/YYYY-MM-DD/topic/final-assets/filename.png')
```

---

## Component Architecture (Reusable Primitives)

### Existing Components (Proven Patterns)
1. **BackgroundImage** — Full-canvas image with optional zoom
2. **SoftGradientOverlay** — Gradient overlay for text readability
3. **VignetteOverlay** — Subtle radial vignette for cinematic focus
4. **GrainOverlay** — SVG film grain texture for premium feel
5. **FadeIn** — Simple opacity fade over duration
6. **SlideUp** — Translate + fade animation

### Scene Components (To Implement)
1. **HookScene** (✓ Complete) — Documentary opening hook (7s)
2. **StatisticScene** — Large statistic with description (7s)
3. **QuoteScene** — Full-screen quote or key insight (5s)
4. **InsightScene** — Headline + explanatory text (6s)
5. **ActionScene** — Call-to-action with visual context (5s)
6. **EndingScene** — Closing hook with channel identity (4s)

### Pattern: Scene Reusability
Each scene component should:
- Accept props for **text content** (not hardcoded)
- Use **standard timing/easing** (Easing.inOut(Easing.exp))
- Apply **standard overlays** (gradient + vignette + grain)
- Respect **safe areas** (96px H, 80px V)
- Use **consistent typography** (Manrope, warm off-white, sized for cinema)
- Implement **breathing motion** (subtle Ken Burns, emotional holds)
- Target **documentary aesthetic** (calm, intentional, trustworthy)

---

## Reference Values (tasanMediaStyle.ts Exports)

`sceneStandards` is the single source of truth — scene components import from it instead of
hardcoding pixel/frame values. Values are grouped per scene type since each scene has its own
visual language (see "What These Standards Are NOT" below).

```typescript
export const sceneStandards = {
  typography: {
    hookPrimary: { size: 112, weight: 700, lineHeight: 1.0, letterSpacing: -2, color: '#F5F2EC', shadowColor: 'rgba(0, 0, 0, 0.35)', shadowBlur: 20 },
    secondary: { size: 48, weight: 400, lineHeight: 1.2, letterSpacing: 0 },       // reserved for future scenes
    caption: { size: 24, weight: 400, lineHeight: 1.4, letterSpacing: 0.5 },       // reserved for future scenes
    statisticPrimary: { size: 160, weight: 700, lineHeight: 0.95, letterSpacing: -3, color: '#F5F2EC', shadowColor: 'rgba(0, 0, 0, 0.45)', shadowBlur: 24 },
    statisticDescription: { size: 52, weight: 400, lineHeight: 1.25, letterSpacing: 0, color: '#F5F2EC', shadowColor: 'rgba(0, 0, 0, 0.35)', shadowBlur: 16 },
    statisticSource: { size: 24, weight: 400, lineHeight: 1.4, letterSpacing: 0.5, color: '#F5F2EC', opacityMultiplier: 0.75, shadowBlur: 0 },
  },
  positioning: {
    lowerLeftThird: { left: 180, bottom: 190, maxWidth: 780, textAlign: 'left' },  // HookScene
    statistic: {                                                                   // StatisticScene
      stat: { left: 260, bottom: 480, maxWidth: 900 },
      description: { left: 260, bottom: 310, maxWidth: 820 },
      source: { right: 260, bottom: 100 },
    },
  },
  motion: {
    bgFadeIn: 15,        // frames (0.5s), background fade-in, shared
    fadeIn: 18,          // frames (0.6s), text fade-in
    fadeOut: 18,         // frames (0.6s), text fade-out
    primaryHold: 51,     // frames (1.7s), primary text hold
    pause: 21,           // frames (0.7s), breath between elements
    minHold: 45,         // frames (1.5s), minimum hold duration
    kenBurnsZoom: 0.015, // HookScene: 1.5% push-in
    ambientDrift: 0.008, // StatisticScene: 0.8% drift (more subtle)
  },
  duration: {
    hook: 210,       // 7 seconds
    statistic: 210,  // 7 seconds
    quote: 150,      // 5 seconds
    insight: 180,    // 6 seconds
    action: 150,     // 5 seconds
    ending: 120,     // 4 seconds
  },
  overlays: {
    bottomGradient: { direction: 'bottom', opacity: 0.48 },              // HookScene
    textReadabilityGradient: { opacity: 0.24 },                          // HookScene, left-bottom
    statisticGradient: { direction: 'both', opacity: 0.62 },             // StatisticScene
    statisticReadabilityGradient: { opacity: 0.3 },                      // StatisticScene, center-left
    statisticBackgroundBrightness: 50,                                   // StatisticScene B-roll darkening
    vignette: { opacity: 0.25, strength: 0.55 },                         // shared
    grain: { opacity: 0.08, scale: 1 },                                  // shared
  },
};
```

---

## Implementation Checklist (For Each New Scene)

- [ ] Choose scene type & duration (from standard durations above)
- [ ] Define text content & hierarchy (primary/secondary/caption)
- [ ] Position text using lower-left composition (180px left, 190px bottom for hook-style)
- [ ] Apply standard overlays (gradient + vignette + grain)
- [ ] Use standard fade/hold/pause timing (18-frame fades, emotional holds)
- [ ] Apply Ken Burns zoom (1.5%, Easing.inOut(Easing.exp))
- [ ] Use warm off-white text (#F5F2EC, weight 700 for primary)
- [ ] Implement breathing motion pattern (not static, not jerky)
- [ ] Verify safe areas respected (96px H, 80px V)
- [ ] Target documentary aesthetic (calm, trustworthy, intentional)
- [ ] Render & verify quality (no subtitle-feel, no placeholder appearance)

---

## What These Standards Enable

1. **Consistency** — All scenes feel like part of the same visual language
2. **Speed** — New scenes reuse proven patterns, no rediscovery
3. **Quality** — Documentary aesthetic is baked in, not optional
4. **Scalability** — Can generate many scenes with same production quality
5. **Brand Recognition** — tasan-media opening moments feel distinct & premium

---

## What These Standards Are NOT

- ❌ Not rigid constraints (can be adapted for scene needs)
- ❌ Not generic subtitle defaults (cinema-specific, not UI-like)
- ❌ Not TikTok motion (restrained, emotional, premium)
- ❌ Not placeholder standards (production-quality from frame 1)

---

## Future Evolution

These standards are **version 1** based on HookScene MVP. As new scenes are implemented:
- Document what works (add to these standards)
- Document what doesn't (update constraints)
- Evolve typography/motion/pacing based on learned patterns
- Never regress to generic subtitle-like layouts
- Always target premium documentary aesthetic

---

## References
- HookScene.standards.md — Detailed HookScene specification
- src/styles/tasanMediaStyle.ts — Exported constants
- CLAUDE.md → Production Tool Stack section
- PROJECT_STATUS.md → Scene Architecture section
