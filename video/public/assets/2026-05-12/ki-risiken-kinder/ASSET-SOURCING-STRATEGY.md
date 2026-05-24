# Asset Sourcing Strategy — StatisticScene Background

**Status:** Active sourcing phase  
**Target:** Cinematic documentary B-roll background for "2 / 3 der Jugendlichen nutzen KI-Chatbots"  
**Timeline:** Phase B prep (before full scene rendering)

---

## Overview

This document outlines the AI-assisted asset pipeline for sourcing StatisticScene backgrounds. The goal is to move from **manual Canva-style asset collection** to **automated AI-assisted sourcing and generation**.

---

## Asset Sourcing Approaches

### Approach 1: Free Stock Photo Search
**Fastest path** if suitable images exist.

**Platforms:** [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), [Pixabay](https://pixabay.com/)

**Search queries:**
```
- "teenager phone night"
- "phone evening warm light"
- "teenager smartphone bedroom"
- "hands phone blue light evening"
- "digital life evening"
- "domestic phone use"
```

**Evaluation criteria:**
- ✓ Documentary-style (not corporate/stock-photo feel)
- ✓ Teenager visible or hands with phone
- ✓ Warm evening lighting (lamps, sunset)
- ✓ Cool blue screen glow visible
- ✓ Domestic atmosphere (room, couch, desk)
- ✓ 1920×1080+ resolution
- ✓ Calm mood (not anxious, not dramatic)
- ✓ Royalty-free / CC0 licensed

**Candidates to evaluate:**
- Search each platform with queries above
- Download 3-5 candidates
- Test with StatisticScene (brightness ~50%, overlays applied)
- Choose strongest match

**Advantage:** Immediate results, no processing time  
**Disadvantage:** May not perfectly match cinematic documentary aesthetic

---

### Approach 2: AI Generation
**Most control** over exact aesthetic requirements.

**Platforms:**
- [Midjourney](https://www.midjourney.com/) — High quality, fast
- [Leonardo AI](https://leonardo.ai/) — Free tier available, fine-tuned for cinematic
- [Stable Diffusion](https://stability.ai/) — Open source, can run locally
- Adobe Firefly — Integrated with Creative Cloud

**Generation Prompt (Primary):**

```
CINEMATOGRAPHY PROMPT — StatisticScene Background

A deeply observational documentary photograph capturing a quiet evening 
moment of a teenager using a smartphone.

VISUAL ELEMENTS:
- Single teenager (hands visible, or silhouette, or partial face)
- Smartphone in hands, screen glowing cool blue/white
- Domestic interior: bedroom, living room, or desk area
- Evening/night time (day ending, room lit by lamps + screen)
- Warm ambient light from tungsten lamp or window
- Cool blue/cyan glow from smartphone screen creating light contrast
- Subtle shadows and depth of field (shallow focus)
- Real, lived-in space (not staged, not sterile)

MOOD & TONE:
- Calm, introspective, meditative
- Documentary observational style (not posed)
- Trustworthy, human-centered
- Quiet moment, not dramatic
- Emotionally believable (this is how teenagers spend evenings)

CINEMATOGRAPHY STYLE:
- Shallow depth of field (blurred background, phone in focus)
- Cinematic lighting with defined shadows
- Warm/cool color temperature contrast
- Film photograph aesthetic (not digital pop, not overly saturated)
- Documentary realism (not stylized, not fantasy)
- 16:9 aspect ratio, high resolution

COMPOSITION:
- Subject off-center (rule of thirds)
- Foreground blur or atmospheric depth
- Interesting light play on hands/face/screen
- Negative space to right/top for text overlay
- Feel of private, unobserved moment

COLOR PALETTE:
- Warm tungsten: #D4B896, #C49060, #8B6F47
- Cool screen light: #1E3A5F, #2A5A8C, #4A90E2
- Deep shadows: #0D0F15, #1A1515
- Muted, not saturated; warm/cool contrast prominent

PHOTOGRAPHIC REFERENCES:
- Documentary photography (Magnum Photos style)
- Cinema lighting tutorials
- Observational family photography
- Netflix documentary opening moments
- ARTE documentary aesthetic

WHAT TO AVOID:
- Anxious or scared expression
- "Phone addiction" framing (no grimacing, no eye strain)
- Generic stock photo feel
- Corporate or educational aesthetics
- Overly bright or cheerful mood
- Posed or artificial composition
- AI-generated obvious artifacts
- Stereotypical "digital native" clichés
- Surveillance/creepy angle
- Over-dramatic lighting

OUTPUT SPECS:
- Resolution: 2K (1920×1080) or higher
- Format: JPEG or PNG (will be heavily treated)
- Aspect: 16:9 (1920×1080)
- Style: Photorealistic (not illustrated, not stylized)
```

**Alternative Prompt (Documentary Focus):**

```
A real documentary photograph from a series about teenage digital life 
in Germany. A Jugendlicher (teenager) using their phone at night in 
their room. Warm lamp light mixed with cool smartphone screen glow. 
Real, calm, observational. Not posed. Not stock-photo. Film-like. 
Shallow depth of field. Evening atmosphere. Hands and phone in focus, 
background blurred. Magnum Photos documentary style.
```

**Concise Prompt (Fast Generation):**

```
Documentary photo: teenager with glowing phone at night in bedroom. 
Warm lamp light + cool screen glow. Shallow focus, blurred background. 
Calm, realistic, intimate. Film aesthetic. Not stock photo. Real moment.
```

**Generation Parameters (for Midjourney/Leonardo):**
```
--ar 16:9 (aspect ratio)
--quality 1 (highest detail for 1920×1080)
--style raw (cinematic, not over-stylized)
--niji 5 (for photorealism, not anime)
--upscale 2x (if needed for 1920×1080+)
--no stock photo, generic, posed, bright, cheerful
```

**Advantage:** Full control, exact specifications  
**Disadvantage:** Requires paid tier for some platforms, processing time

---

## Recommended Workflow

1. **Quick Search (30 min)**
   - Search Unsplash/Pexels/Pixabay with queries above
   - Download 3-5 candidate images
   - Quick test with StatisticScene overlay

2. **If suitable image found:**
   - Crop/adjust to 1920×1080 if needed
   - Save as `scene-04-statistic-bg.jpg` in final-assets/
   - Test with full StatisticScene render
   - DONE (fastest path)

3. **If no suitable image found:**
   - Use generation prompts above
   - Generate 3-5 variations (Midjourney/Leonardo)
   - Evaluate against criteria
   - Choose strongest candidate
   - Save as `scene-04-statistic-bg.jpg`
   - Test with StatisticScene render

---

## Evaluation Criteria (Final Check)

After sourcing/generating image, test:

1. **Mood match:**
   - Does it feel like documentary, not corporate?
   - Is it calm, not anxious?
   - Does it emotionally support the statistic?

2. **Technical specs:**
   - ✓ 1920×1080 resolution
   - ✓ File size <2MB (for web delivery)
   - ✓ JPEG or PNG format
   - ✓ Royalty-free or original rights

3. **Scene integration:**
   - ✓ Text remains readable (will be heavily overlaid)
   - ✓ No distracting elements
   - ✓ Warm/cool lighting contrast present
   - ✓ Blurriness acceptable (will be further blurred + darkened)

4. **Documentary aesthetic:**
   - ✓ Looks like documentary, not ad/marketing
   - ✓ Teenager present or implied
   - ✓ Phone/screen glow visible
   - ✓ Evening/night atmosphere clear

---

## File Placement

Once approved:
```
video/public/assets/2026-05-12/ki-risiken-kinder/final-assets/scene-04-statistic-bg.jpg
```

Then render test:
```bash
cd video
npx remotion render src/index.tsx Scene04Statistic \
  --output renders/2026-05-25/statistic-test.mp4
```

---

## Asset Pipeline Integration (Future)

This workflow becomes a **pattern for all future scenes**:

1. Scene agent identifies asset needs from script
2. Asset agent generates sourcing prompts
3. Asset agent searches free platforms
4. Asset agent generates candidates (if needed)
5. Asset agent evaluates against criteria
6. Asset agent places approved asset in final-assets/
7. Scene renders with actual asset

**Goal:** Scenes should render with production-quality assets automatically, not wait for manual human sourcing.

---

## Notes

- This image will be heavily treated in StatisticScene: blurred, darkened (50%), overlaid with gradients, vignettes, grain
- So the source image doesn't need to be "perfect" — the treatment will enhance it
- Documentary style is key (emotion > technical perfection)
- If unsure, generate multiple candidates and choose strongest

---

## Quick Links

**Free Stock Platforms:**
- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/
- Flickr Creative Commons: https://www.flickr.com/creativecommons/

**AI Generation:**
- Midjourney: https://www.midjourney.com/
- Leonardo AI: https://leonardo.ai/
- Stable Diffusion: https://stability.ai/
