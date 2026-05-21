# Visual Style Guide — KI-Risiken für Kinder

**Created:** 2026-05-12  
**Video Duration:** ~3–4 minutes @ 30 FPS, 1920×1080  
**Mood:** Calm, documentary, trustworthy, intimate

---

## Color Palette

All colors derived from tasan-media brand palette (see `config/channel-identity.md`):

- **Primary Background:** #F8F6F3 (warm white) — for text and graphic backgrounds
- **Primary Text:** #2A2D31 (dark gray) — for body copy, captions
- **Accent Dark:** #1E2738 (navy) — for scene backgrounds, fallback, emphasis
- **Accent Warm:** #D97706 (warm amber) — for highlights, callouts, numbers
- **Text Alt:** #666666 (mid gray) — for secondary information
- **Light Accent:** #E5E5E5 (light gray) — for dividers, subtle background

---

## Typography

**Font:** Manrope (sans-serif, modern, clean)

- **Statistic Display:** 92pt, bold, #D97706 or #2A2D31 on light background
- **Quote/Heading:** 56pt, regular, #2A2D31
- **Scene Title:** 48pt, bold, #2A2D31
- **Subtext/Insight:** 32pt, regular, #2A2D31
- **Body/Description:** 24pt, regular, #2A2D31
- **Caption/Source:** 14pt, regular, #666666

**Line Height:** 1.4 (for readability)  
**Safe Area Margins:** 96px horizontal, 80px vertical (5% padding)  
**Maximum Text Width:** 1400px (center aligned)

---

## Imagery & Photography

### Style
- **Documentary, not cinematic.** Real homes, real moments, not styled film sets.
- **Warm, daylit, intimate.** Avoid clinical lighting, harsh shadows, or high-drama color grading.
- **Composition:** Subject typically left or right third, balanced but natural.
- **Diversity:** Realistic representation of German families — mixed ages, backgrounds, home styles.

### Mood Checklist
✓ Warm but not sentimental  
✓ Real but not documentary-filmmaker-edgy  
✓ Modern but not tech-industry shiny  
✓ Family-focused but not stock-photo corny  
✗ Avoid: TikTok aesthetic, Instagram filters, oversaturation, dramatic lighting

### Brightness & Overlay
- Images may be darkened 10–30% with a soft black overlay for text readability
- Gradient overlay preferred over flat darken (preserves image detail, improves text contrast)

---

## Motion & Animation

### General Principles
- **Subtle and calm.** Nothing jerky, nothing flashy.
- **Frame-based timing:** 30 FPS baseline
  - Fade-in: 12 frames (0.4s) standard, 15 frames (0.5s) for slower elements
  - Fade-out: 9 frames (0.3s) for quicker exits
  - Slide motion: 12–15 frames with ease-out
  - Stagger delay: 6 frames (0.2s) between cascade elements

### Zoom / Pan
- **Ken Burns effect:** Subtle (max 5% zoom over entire scene)
- **Speed:** Slow enough to feel calm (not nervous)
- **Use:** Adds life to static photography without drawing attention

### Transitions Between Scenes
- **Fade only.** No wipes, no cuts, no spin transitions.
- **Duration:** 9 frames (0.3s)
- **Easing:** ease-out (natural, not snappy)

### Text Animation
- Fade-in over 12–18 frames with stagger delay
- Fade-out only at end of scene (9–20 frames, natural ease-out)
- No slide-in text, no typewriter effects

---

## Responsive & Mobile Rules

- **Minimum font size for mobile readability:** 40pt (scenes with smaller text get slight opacity reduction as hint)
- **Safe area padding:** Always respected (96px H, 80px V)
- **Text centered but never cramped:** max-width 1400px, never narrower than 800px

---

## Scene Types & Patterns

### Hook Scene (Domestic Moment)
- Dark, warm, intimate setting (hallway, kitchen, bedroom)
- Soft side-lighting, evening mood
- 2–3 text lines max
- ~10 seconds duration
- Example: "Sie ist ruhig. Du hast deinen Abend."

### Stat Scene (Data Point)
- Light background (usually warm white) or clean dark background
- Large number in accent color (#D97706) top-center
- Smaller description text below
- Optional source caption at bottom
- ~14 seconds duration
- Example: "2 / 3 der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich."

### Quote Scene (Authority or Insight)
- Close-up photo or subtle background
- 56pt quote text in dark gray
- Attribution below (14pt)
- 2–3 words emphasis in accent color if needed
- ~12 seconds duration

### Insight Scene (Educational Moment)
- Clean background + supporting image or graphic
- 32pt insight text + 24pt body explanation
- Visual component centered or left-aligned
- ~15 seconds duration

### Action/Call-Out Scene (Problem or Opportunity)
- Dark background with accent color highlight
- Icon or simple illustration
- 48pt heading + 24pt body
- Color emphasis on problem (red-amber shift) or opportunity (warm accent)
- ~12 seconds duration

### Ending Scene (Closure or Next Steps)
- Full-width background image (family or children)
- Overlay text: main message + optional resource link
- Branded footer with channel name (if applicable)
- ~10 seconds duration

---

## Tasan-Media Brand Alignment

✓ **Trustworthy:** No manipulation, honest framing  
✓ **Accessible:** Large text, clear contrast, simple language  
✓ **Contemporary:** Modern design but never trendy or throwaway  
✓ **Calm:** No attention-hacking, no urgency, no FOMO  
✓ **Action-oriented:** Always ends with what viewer should know or do next

---

## Technical Specs

- **Resolution:** 1920×1080 (HD, 16:9)
- **Frame Rate:** 30 FPS
- **Codec:** H.264 (MP4) for CapCut compatibility
- **Color Space:** sRGB
- **Audio:** Stereo, 48 kHz (added in CapCut, not Remotion)
