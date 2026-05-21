# Asset Prompts — KI und deine Kinder (2026-05-12)

Generated from: `content/scripts/2026-05-12/ki-risiken-kinder-script.md`  
Visual Style Guide: `visual-style-guide.md`  
Scene Source: `content/scenes/2026-05-12/ki-risiken-kinder-scenes.md`

---

## Scene 1 — Evening Hallway (Hook)

**Component:** HookScene.tsx  
**Duration:** ~10 seconds (300 frames @ 30 FPS)  
**Status:** MVP — component complete, awaiting asset

### Prompt
```
A warm evening hallway in a quiet German family home. Soft warm amber 
light filtering from a living room or kitchen (left side). A slightly 
ajar bedroom door in the background with faint cool blue-white light 
visible through the gap (phone or screen glow). Wooden or light parquet 
flooring. Neutral beige or soft gray walls. No people visible — the 
space should feel lived-in but empty in this moment. 16:9 composition, 
hallway extends left-to-right, door center-right. Cinematic, 
documentary photography style. Intimate, calm, contemplative. Not 
dramatic. Not staged. Not horror-adjacent. Real.
```

### Asset Details
- **Filename:** `scene-01-hallway.jpg`
- **Location:** `final-assets/scene-01-hallway.jpg`
- **Recommended Source:** Stock photography (Unsplash, Pexels) or own photography
- **Fallback:** Component renders with dark navy (#1E2738) background if image missing
- **Usage in Scene:** Full-canvas background with subtle 5% zoom animation over 10 seconds + soft black gradient overlay (bottom third) for text readability

### Style Notes
- **Mood:** Calm, familiar, domestic — not cinematic thriller
- **Lighting:** Warm ambient + cool screen glow = visual tension without drama
- **Composition:** Door should feel like it's a destination, not a threat
- **Avoid:** Overly perfect, staged interiors; harsh shadows; cold fluorescent light; any sense of danger or suspicion

---

## Scene 2 — Bedroom at Night (Hook / Reveal)

**Component:** Planned for Phase B  
**Duration:** ~14 seconds  
**Asset Type:** Photograph or AI-generated image

### Prompt
```
A dim teenage bedroom at night. Soft blue phone light illuminating 
the side of a young face (14–18 years old), hands visible typing on 
a smartphone. The room is quiet, personal — posters, photos, or small 
decorations visible but subdued in low light. Focus is on hands and 
partial face, not dramatic close-up. Cinematic documentary style. Calm, 
intimate, no sense of danger or addiction narrative — just a normal 
moment of connection. 16:9, soft focus on background, sharp on hands 
and phone screen reflection.
```

### Asset Details
- **Filename:** `scene-02-bedroom-night.jpg`
- **Location:** `final-assets/scene-02-bedroom-night.jpg`
- **Recommended Source:** Leonardo AI or stock photo
- **Priority:** High — emotional anchor of the Hook
- **Usage in Scene:** Background layer, hands B-roll overlay (separate video or stacked composition)

### Additional Media
- **B-roll:** Close-up of hands typing, soft focus, 4–5 seconds min duration. Can be stock or own phone footage.

---

## Scene 4 — Statistics (Insight / Data Point)

**Component:** StatScene.tsx (already implemented)  
**Duration:** ~14 seconds  
**Status:** MVP complete

### Prompt (Supporting B-roll, optional)
```
Close, defocused overhead shot of a hand holding a smartphone on a 
desk or lap. The phone screen should show light (not necessarily text), 
just the gesture of holding and scrolling. Warm desk lighting. Very 
shallow depth of field. Documentary style. 4–6 seconds.
```

### Asset Details
- **Filename:** `scene-04-hands-phone.jpg` (B-roll)
- **Location:** `final-assets/` (video clip format)
- **Status:** Optional for first production run

---

## Scene 6 — Static Insight (Breathing Life)

**Component:** Planned for Phase B  
**Duration:** ~10 seconds  
**Asset Type:** Photograph or graphic

### Prompt
```
A calm, abstract or photographic image suggesting growth, protection, 
or connection. Could be: hands forming a circle, a window showing 
light, a parent and child in conversation (back-view, no faces). Warm, 
neutral color palette. No text, no logos. Suitable for 1–2% subtle 
drift or zoom animation to avoid static feel.
```

### Asset Details
- **Filename:** `scene-06-insight-visual.jpg`
- **Location:** `final-assets/scene-06-insight-visual.jpg`
- **Animation:** Ken Burns effect (subtle 2% zoom) over scene duration

---

## Scene 8 — Emotional Pivot (B-roll)

**Component:** Planned for Phase B  
**Duration:** ~12 seconds  
**Asset Type:** Photograph or short video

### Prompt
```
A close moment between parent and teenager: sitting together, 
conversation, or shared activity (cooking, walk, sitting on a couch). 
Natural light, real interaction, no staging. Warm, calm, connected mood. 
Show relationship, not problem. 16:9 landscape. Documentary style, 
not stock-photo.
```

### Asset Details
- **Filename:** `scene-08-parent-teen-moment.jpg` or `.mp4`
- **Location:** `final-assets/scene-08-parent-teen-moment.[ext]`
- **Recommended Source:** Stock or own video
- **Usage:** Background or B-roll overlay with subtle 5% zoom

---

## Scene 13 — Action Moment (Parent Conversation)

**Component:** Planned for Phase B  
**Duration:** ~12 seconds  
**Asset Type:** Photograph or video B-roll

### Prompt
```
Parent and teenager in conversation: kitchen table, or sitting together 
talking. Natural setting, real emotion, relaxed body language. The scene 
should suggest openness, not tension. Warm lighting, soft focus if 
needed. Could be own phone footage or stock. 16:9.
```

### Asset Details
- **Filename:** `scene-13-conversation.mp4` (or .jpg for still)
- **Location:** `final-assets/scene-13-conversation.[ext]`
- **Duration:** 6–10 seconds if video
- **Fallback:** Simple text-only slide with accent color background

---

## Scene 16 — Ending (Warmth + Resources)

**Component:** Planned for Phase B  
**Duration:** ~10 seconds  
**Asset Type:** Photograph

### Prompt
```
An evening or warm room setting: window with warm light, or a family 
space lit by soft golden hour light. No people visible, but sense of 
home and safety. Calm, welcoming, trustworthy. Could be the same 
hallway as Scene 1 but daytime or evening with different light. 16:9, 
warm color palette, documentary style.
```

### Asset Details
- **Filename:** `scene-16-warm-room.jpg`
- **Location:** `final-assets/scene-16-warm-room.jpg`
- **Usage:** Background for ending slide with resource text overlay (Telefonseelsorge, etc.)

---

## Asset Folder Structure

```
video/public/assets/2026-05-12/ki-risiken-kinder/
  ├── visual-style-guide.md          (brand, mood, color, typography)
  ├── asset-prompts.md               (this file)
  └── final-assets/
      ├── scene-01-hallway.jpg       [MVP]
      ├── scene-02-bedroom-night.jpg [Phase B]
      ├── scene-04-hands-phone.jpg   [Phase B, optional]
      ├── scene-06-insight-visual.jpg [Phase B]
      ├── scene-08-parent-teen-moment.jpg (or .mp4) [Phase B]
      ├── scene-13-conversation.mp4  [Phase B]
      └── scene-16-warm-room.jpg     [Phase B]
```

---

## Generation Priority

1. **Scene 1 hallway image** (MVP blocking — enables first render test)
2. **Scene 2 bedroom image** (emotional anchor, high impact)
3. **Scene 13 conversation video** (action moment, practical sequence)
4. **Scene 8 parent-teen moment** (supporting visual)
5. Remaining supporting assets as needed

---

## Notes

- All images should respect the **tasan-media visual identity**: calm, trustworthy, documentary, contemporary.
- **No AI-generated people as main focus** unless explicitly requested and approved (Scene 2 is an exception for consistency reasons).
- Stock photography sources: Unsplash, Pexels, Pixabay (free, good for German/European contexts).
- **For custom generation:** Use Leonardo AI with detailed prompts. See Scene 2 for example.
