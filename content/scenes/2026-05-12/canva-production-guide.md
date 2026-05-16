# Canva Production Guide — KI und deine Kinder

**Practical production instructions for the 13 effective scenes**

- **Date:** 2026-05-16
- **Target Duration:** ~4:30 min
- **Canva Format:** 16:9 (2560 × 1440 px)
- **Total Scenes to Build:** 13 (after 3 merges from original 16)
- **Status:** Ready for manual production in Canva

This guide translates the existing scene package (`ki-risiken-kinder-scenes.md`) into step-by-step Canva instructions. It preserves all pacing, visuals, animations, and production decisions from the source.

---

## Quick Workflow

1. **Set up 6 base templates** (30–40 min)
2. **Build 13 scenes from templates** (2–2.5 hours)
3. **Export all** (20 min)
4. **Import to CapCut** → add voice, B-roll, final edit

**Total Canva time: 3–3.5 hours**

---

# Scene 1 — Hook: Evening Routine

**From source:** "Sie ist ruhig. Du hast deinen Abend."

## Purpose
Open with immediate recognition. Viewer sees their own life: teen comes home, stays quiet, feels fine. Grounded, warm, intimate. No drama.

## Canva Setup
- **Format:** 16:9 (2560 × 1440)
- **Background:** Soft, warm evening hallway (actual photo, not stock cliché)
- **Text style:** Single centered line, white, lower-third positioned
- **Animation:** Text fade-in only; subtle push-in on background (5% over 10 seconds)
- **Template for reuse:** YES — "Warm Evening Static"

## Assets Needed
- Evening hallway photo: warm tones, dim lighting, door visible
  - *Option A:* Stock photo (careful — many are too staged)
  - *Option B:* Your own phone photo at dusk/evening (more authentic)
- No B-roll, no AI image

## Canva Build Steps

1. Create new 16:9 blank design
2. Upload hallway background → resize to fill canvas
3. Reduce brightness to **60%** (should feel dark, intimate, not blown out)
4. Add text: **"Sie ist ruhig. Du hast deinen Abend."**
   - Font: Manrope Bold, 56pt, white
   - Position: Lower third, centered
   - Line height: 1.4
5. Animate text: Fade In → 0.4 seconds
6. Add subtle zoom on background: Animate background → Zoom In → 102% → duration 10 seconds (very slow drift, almost imperceptible)
7. Preview: Text should feel like it arrives gently, not jarring

## Layers
1. Background image (60% brightness)
2. Text overlay (white, centered)

## Animation
- **Text:** Fade-in, 0.4s
- **Background:** Subtle 5% zoom drift over 10s (gives motion without restlessness)
- **Transition out:** Hard cut (no effect)

## Export
- **Format:** MP4, H.264
- **Filename:** `scene-01-hook-evening.mp4`
- **Duration:** 10 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **High** — background swap + text replacement = fully templatable

## Estimated Production Time
**5 minutes** (find/upload background, add text, animate, export)

---

# Scene 2 — Hook: Chatbot Revelation

**From source:** "Mit einem Chatbot. Immer auf ihrer Seite."

## Purpose
Reveal: the teen isn't talking to a friend. She's talking to a chatbot. This is the emotional hook. Intimate, calm, sad but not dramatic.

## Canva Setup
- **Format:** 16:9
- **Background:** Dark bedroom at night, blue phone light on face (Leonardo AI ideal, but stock or own photo okay)
- **Text style:** Two sequential crossfading text boxes
- **Animation:** Text 1 appears → holds → fades out → Text 2 fades in
- **Template for reuse:** YES — "Dark Intimate Two-Text Crossfade"

## Assets Needed
- Dark bedroom photo at night with blue light
  - **Best:** Leonardo AI with provided prompt from scene notes
  - **Fallback:** High-quality stock photo (risky — easily looks clichéd)
  - **Best fallback:** Your own phone photo of evening light in a room
- B-roll (optional but strengthens scene): Hands typing on phone, defocused, 4–5 seconds

## Canva Build Steps

1. Create new 16:9 blank
2. Upload bedroom background → resize to fill
3. Reduce brightness to **50%** (very dark, moody)
4. Add text box 1: **"Mit einem Chatbot."**
   - Font: Manrope Bold, 52pt, white
   - Position: Lower third, centered
5. Add text box 2: **"Immer auf ihrer Seite."**
   - Font: Manrope Bold, 52pt, white
   - Position: Same as Box 1 (will replace it visually)
   - Set initial opacity to 0% (invisible until animated)
6. Animate Box 1: Fade In → 0.4s
7. Animate Box 1: Fade Out → 0.3s → Trigger "After 6 seconds"
8. Animate Box 2: Fade In → 0.4s → Trigger "After Box 1 fades"
9. Preview: Texts should crossfade smoothly at same position
10. Add transition out: Fade to black → 1 second

## Layers
1. Bedroom background (50% brightness)
2. Text Box 1 — "Mit einem Chatbot."
3. Text Box 2 — "Immer auf ihrer Seite." (fades in as Box 1 fades out)

## Animation
- **Text 1:** Fade-in 0.4s → hold 6s → fade-out 0.3s
- **Text 2:** Fade-in 0.4s (triggered after Text 1 fades out)
- **Background:** Static (no movement)
- **Transition out:** Fade to black, 1s

## Export
- **Format:** MP4, H.264
- **Filename:** `scene-02-hook-chatbot.mp4`
- **Duration:** 14 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **High** — dark background + two text boxes = templatable, though background image is hard to automate

## Estimated Production Time
**15 minutes** (find/create background, set up crossfade animation, export)

---

# Scenes 3–4 (MERGED) — Stat Reveal

**From source:** Scene 3 spoken during Scene 4 fade-in (no separate build). "Das passiert gerade. In vielen Familien. Meistens unbemerkt." → "Zwei Drittel der Jugendlichen in Deutschland nutzen KI-Chatbots..."

## Purpose
Bridge from hook to insight. Scene 3 text is spoken over the fade-in of Scene 4's data slide. Scene 4 anchors the conversation with a concrete statistic.

## Canva Setup
- **Format:** 16:9
- **Background:** Bright, clean off-white (#F8F6F3)
- **Layout:** Large centered number + descriptive text below
- **B-roll layer (optional):** Semi-transparent desk/phone image behind (60% opacity)
- **Template for reuse:** YES — "Data Stat Slide"

## Assets Needed
- B-roll (optional): Stock or own photo of hands on phone at desk, or teenager at kitchen table with phone
  - Use defocused, calm framing (no drama)
  - Will be layered behind the text at 60% opacity

## Canva Build Steps

1. Create new 16:9 blank
2. Add background color: **#F8F6F3**
3. [Optional] Upload B-roll image, resize to fill, reduce opacity to 60%, position in layers BEHIND all text
4. Add text box 1 (the statistic):
   - Text: **"2 / 3"** or **"66 %"** (choose one, use consistently across video)
   - Font: Manrope Bold, 92pt, dark gray (#2D3E3D)
   - Position: Centered, slightly above vertical center
5. Add text box 2 (description):
   - Text: **"der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich."**
   - Font: Manrope Regular, 24pt, dark gray (#2D3E3D)
   - Position: Below Box 1, ~40px gap, centered
6. Add text box 3 (source):
   - Text: **"Bitkom 2025"** (verify source before final export)
   - Font: Manrope Regular, 14pt, light gray (#9CA3A3)
   - Position: Bottom right corner, 20px padding
7. Animate Box 1: Fade In → 0.4s
8. Animate Box 2: Slide Up → 0.4s → Trigger "After 0.2s" (creates cascading feel)
9. Preview: Number appears, then description slides up below it

## Layers
1. Off-white background
2. [Optional] B-roll image, 60% opacity
3. Number (large)
4. Description (smaller)
5. Source attribution (small, bottom right)

## Animation
- **Number:** Fade-in 0.4s
- **Description:** Slide up 0.4s, triggered 0.2s after number appears
- **Transition out:** Smooth slide-out to right, 0.5s

## Export
- **Format:** MP4, H.264
- **Filename:** `scene-03-04-stat.mp4`
- **Duration:** 14 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **Very high** — number, description, source all replaceable; B-roll optional

## Estimated Production Time
**10 minutes** (set up layout, add text boxes, cascade animation, export)

---

# Scene 5 — Insight: Apps (Character.AI, Replika)

**From source:** "Es gibt Apps, die heißen Character.AI oder Replika. Die sind nicht dafür gemacht, Fragen zu beantworten. Die sind dafür gemacht, eine Beziehung aufzubauen."

## Purpose
Reframe: These apps aren't search engines. They're built to form relationships.

## Canva Setup
- **Format:** 16:9
- **Background:** Dark navy (#1E2738)
- **Layout:** Two lines of text (app names, then key insight)
- **B-roll layer (optional):** Defocused typing video behind (40% opacity)
- **Template for reuse:** YES — "App Overview Dark"

## Assets Needed
- B-roll (optional): Stock video of hands typing on phone, defocused, calm (4–5 seconds)

## Canva Build Steps

1. Create new 16:9 blank
2. Add background color: **#1E2738**
3. [Optional] Add B-roll video layer, resize to fill, reduce opacity to 40%, position BEHIND text
4. Add text box 1:
   - Text: **"Character.AI · Replika"**
   - Font: Manrope Bold, 44pt, white
   - Position: Upper-center, ~180px from top
5. Add text box 2:
   - Text: **"Gemacht, um eine Beziehung aufzubauen."**
   - Font: Manrope Bold, 48pt, white
   - Position: Center of canvas, ~60px gap below Box 1
6. Animate Box 1: Fade In → 0.4s
7. Animate Box 2: Fade In → 0.4s → Trigger "After 0.5s"
8. Preview: App names appear, then key insight appears with slight delay

## Layers
1. Dark navy background
2. [Optional] B-roll video, 40% opacity
3. App names (bold)
4. Key insight (bold)

## Animation
- **App names:** Fade-in 0.4s
- **Insight:** Fade-in 0.4s, triggered 0.5s after app names
- **Transition out:** Cut

## Export
- **Format:** MP4, H.264
- **Filename:** `scene-05-apps-overview.mp4`
- **Duration:** 16 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **High** — text replaceable, background and B-roll replaceable

## Estimated Production Time
**8 minutes**

---

# Scene 6 — Insight: Available 24/7

**From source:** "Und sie sind immer verfügbar. Nachts um zwei. Wenn du nicht willst, dass jemand fragt, was los ist."

## Purpose
Availability angle: The apps are there when you need connection, without judgment. Intimate, late-night feeling.

## Canva Setup
- **Format:** 16:9
- **Background:** Night scene (bed, pillow, phone glow)
- **Text style:** Single centered line, minimal
- **Animation:** Text fade-in + subtle background drift (2–3% zoom over 10 seconds)
- **Template for reuse:** MAYBE — "Nighttime Static Moment" (semi-reusable)

## Assets Needed
- Night scene photo: pillow, phone light visible, blue/warm glow
  - Best: Your own phone photo (most authentic)
  - Fallback: High-quality stock if needed

## Canva Build Steps

1. Create new 16:9 blank
2. Upload night scene → resize to fill canvas
3. Reduce brightness to **55%**
4. Add text: **"Nachts um zwei."**
   - Font: Manrope Bold, 52pt, white
   - Position: Centered
5. Animate text: Fade In → 0.4s
6. Animate background: Zoom In → 102% → Duration 10 seconds (very subtle drift, almost imperceptible)
7. Preview: Text appears gently, background drifts very slightly

## Layers
1. Night scene background (55% brightness)
2. Text overlay (white)
3. Background zoom animation (slow, subtle)

## Animation
- **Text:** Fade-in 0.4s
- **Background:** Subtle 2–3% zoom drift over 10s
- **Transition out:** Pause 0.7s, then cut

## Export
- **Format:** MP4, H.264
- **Filename:** `scene-06-available-24-7.mp4`
- **Duration:** 10 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
⚠️ **Medium** — image-specific, but zoom pattern is reusable

## Estimated Production Time
**7 minutes**

---

# Scene 7 — Insight: Addiction-Like Patterns

**From source:** "Forscher haben sich angeschaut, wie Jugendliche über diese Apps reden — anonym, in Foren. Was sie beschreiben, klingt wie eine Abhängigkeit. Nicht im dramatischen Sinn."

## Purpose
Introduce research framing: researchers noticed addiction-like patterns. But not dramatic. Just a familiar absence when the app is gone.

## Canva Setup
- **Format:** 16:9
- **Background:** Warm off-white (#F4F1EC)
- **Layout:** Two lines (main statement + qualifier)
- **Animation:** Sequential fade-in with stagger
- **Template for reuse:** YES — "Authority Statement + Qualifier"

## Assets Needed
- None (text only)

## Canva Build Steps

1. Create new 16:9 blank
2. Add background color: **#F4F1EC**
3. Add text box 1:
   - Text: **"Klingt wie eine Abhängigkeit."**
   - Font: Manrope Bold, 60pt, dark gray (#2D3E3D)
   - Position: Center, slightly above vertical center
4. Add text box 2:
   - Text: **"nicht im dramatischen Sinn."**
   - Font: Manrope Regular Italic, 32pt, medium gray (#6B7677)
   - Position: Below Box 1, ~40px gap, centered
5. Animate Box 1: Fade In → 0.4s
6. Animate Box 2: Fade In → 0.4s → Trigger "After 1s"
7. Preview: Main statement appears, then qualifier appears with 1-second delay

## Layers
1. Warm off-white background
2. Main statement (bold)
3. Qualifier (italic, gray)

## Animation
- **Statement:** Fade-in 0.4s
- **Qualifier:** Fade-in 0.4s, triggered 1s after statement
- **Transition out:** Smooth slide

## Export
- **Format:** MP4, H.264
- **Filename:** `scene-07-addiction-framing.mp4`
- **Duration:** 14 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **High** — text replaceable, colors replaceable

## Estimated Production Time
**5 minutes**

---

# Scene 8 — Insight: The Emotional Pivot (TALKING HEAD PREFERRED)

**From source:** "Ein Drittel der Jugendlichen, die sich einsam fühlen oder kämpfen — wenden sich zuerst an einen Chatbot... Sie braucht jemanden, der wirklich da ist."

## Purpose
This is the emotional core of the first half. The speaker explains the real problem: loneliness needs a person, not software. **This scene should be a talking head if possible.** If not, fallback to minimal slide.

## Canva Setup (Talking Head)
- If recorded: Import video directly, no Canva design needed
- If fallback slide:
  - Background: Warm off-white (#F9F7F5)
  - Text: Single centered line, appears only near end
  - Duration: 18 seconds of mostly voiceover

## Canva Setup (Fallback Slide)
- **Format:** 16:9
- **Background:** Warm off-white (#F9F7F5)
- **Layout:** Minimal — one text line, appears only at ~8 second mark
- **Animation:** Single fade-in, late
- **Template for reuse:** NO — emotional core is best spoken

## Assets Needed
- **Preferred:** Talking head video (30 seconds, calm, good light, centered framing)
- **Fallback:** None

## Canva Build Steps (Fallback Slide)

1. Create new 16:9 blank
2. Add background color: **#F9F7F5**
3. Do NOT add text initially — let voiceover carry the scene
4. At 10-second mark: Add text box
   - Text: **"Sie braucht jemanden, der wirklich da ist."**
   - Font: Manrope Bold, 56pt, dark gray (#2D3E3D)
   - Position: Centered
5. Animate text: Fade In → 0.4s (triggered at 10 seconds)
6. That's it — keep it simple and let the voice carry weight

## Layers (Fallback Slide)
1. Warm off-white background
2. Text (appears only at end)

## Animation (Fallback)
- **Text:** Fade-in 0.4s at 10-second mark
- **Background:** Static (no zoom, no drift)
- **Transition out:** Fade to black, 1s (marks shift to second topic)

## Export
- **Format:** MP4 (if slide) or direct video file (if talking head)
- **Filename:** `scene-08-emotional-pivot.mp4` (slide) or `scene-08-emotional-pivot-talking-head.mp4` (video)
- **Duration:** 18 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
⚠️ **Low** — talking head is human-recorded; fallback slide is semi-templatable

## Estimated Production Time
- **Talking head:** 5 min (record, trim, export)
- **Fallback slide:** 3 min

---

# Scenes 9–10–11 (MERGED) — Deepfakes Introduction

**From source:**
- Scene 9 (bridge): "Es gibt noch etwas. Etwas, das weniger über Gefühle geht und mehr darüber, was Jugendliche einander antun können." *[Spoken during fade transition]*
- Scene 10–11: Deepfakes capabilities + school incidents

## Purpose
Transition to second major risk. Explain: AI can create realistic deepfakes, and this has already happened in schools. **Visual discipline is non-negotiable here: no images, no examples, no suggestions.**

## Canva Setup
- **Format:** 16:9
- **Background:** Dark gray (#2A2D31)
- **Layout:** Two simple text layers per slide
- **Animation:** Sequential fade-in with pauses
- **Template for reuse:** YES — "Serious Statement (No Images)"
- **CRITICAL:** No background images, no decorative elements

## Assets Needed
- **None** — pure text only

## Canva Build Steps (Combined Scenes 9–10–11)

### Slide A (Scenes 9–10 combined)

1. Create new 16:9 blank
2. Add background color: **#2A2D31** (dark gray)
3. Add text box 1:
   - Text: **"Realistische Bilder. Von jedem Menschen. In wenigen Minuten. Kostenlos."**
   - Font: Manrope Regular, 36pt, white
   - Position: Upper-center, ~200px from top
4. Add text box 2:
   - Text: **"Mehrere Schulen."**
   - Font: Manrope Bold, 48pt, white
   - Position: Lower-center, ~60px gap from Box 1
5. Animate Box 1: Fade In → 0.3s
6. Animate Box 2: Fade In → 0.3s → Trigger "After 3 seconds"
7. Do not add anything else

### Slide B (Scene 11 — same template, text swap)

1. Duplicate Slide A
2. Replace Box 1 text: **"Nicht nur ein amerikanisches Problem."**
3. Replace Box 2 text: **"Einen Suchbegriff entfernt."**
4. Add subtle zoom: Animate background → Zoom In → 102% → Duration 12 seconds

## Layers (Slide A)
1. Dark gray background
2. Capabilities statement (regular weight)
3. School reference (bold weight)

## Layers (Slide B)
1. Dark gray background
2. Scope statement (regular weight)
3. Accessibility statement (bold weight)

## Animation (Slide A)
- **Capabilities:** Fade-in 0.3s
- **School reference:** Fade-in 0.3s, triggered 3s after capabilities
- **Transition out:** 0.7s black pause

## Animation (Slide B)
- **Scope statement:** Fade-in 0.3s (immediate)
- **Accessibility statement:** Fade-in 0.3s, triggered 2s after scope
- **Background zoom:** Subtle 5% zoom over 12 seconds
- **Transition out:** Cut

## Export
- **Format:** MP4, H.264 (two separate files)
- **Filenames:**
  - `scene-09-10-deepfakes.mp4`
  - `scene-11-deepfakes-proximity.mp4`
- **Durations:** 18s + 12s
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **High** — text replaceable, but do NOT allow image replacements (visual discipline is load-bearing)

## Estimated Production Time
- **Slide A:** 4 minutes
- **Slide B:** 2 minutes (duplicate + text swap)
- **Total:** 6 minutes

---

# Scene 12 — Framing: The Intention (TALKING HEAD PREFERRED)

**From source:** "Ich sage das nicht, um Panik zu machen. Ich sage es, weil viele Eltern schlicht nicht wissen, dass das möglich ist. Und weil Kinder — die das wissen — besser einschätzen können, was sie selbst tun und was ihnen passieren kann."

## Purpose
Reframe the channel's stance: "Not to scare you, but so you understand." This is the hinge between risk identification and practical action. **Ideally a talking head.** Fallback to slide if needed.

## Canva Setup (Talking Head)
- If recorded: Import video directly

## Canva Setup (Fallback Slide)
- **Format:** 16:9
- **Background:** Warm off-white (#F9F7F5)
- **Layout:** Two lines (statement + intention)
- **Animation:** None (static, intentional quiet)

## Assets Needed
- **Preferred:** Talking head (30 seconds, calm, grounded)
- **Fallback:** None

## Canva Build Steps (Fallback Slide)

1. Create new 16:9 blank
2. Add background color: **#F9F7F5**
3. Add text box 1:
   - Text: **"Nicht um Panik zu machen."**
   - Font: Manrope Bold, 52pt, dark gray (#2D3E3D)
   - Position: Center
4. Add text box 2:
   - Text: **"Sondern damit Kinder es selbst einschätzen können."**
   - Font: Manrope Regular, 36pt, medium gray (#6B7677)
   - Position: Below Box 1, ~30px gap
5. **No animation** — this slide is intentionally static, quiet
6. Add transition out: Fade to black, 0.5s (marks shift to action section)

## Layers (Fallback)
1. Warm off-white background
2. Statement (bold)
3. Intention (regular)

## Animation
- **None** (intentionally static)
- **Transition out:** Fade to black, 0.5s

## Export
- **Format:** MP4 (if slide) or video file (if talking head)
- **Filename:** `scene-12-intention.mp4`
- **Duration:** 14 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
⚠️ **Low** — talking head is human; slide is semi-templatable

## Estimated Production Time
- **Talking head:** 5 min (record + export)
- **Fallback slide:** 3 min

---

# Scene 13 — Action: App Removal Doesn't Work (B-ROLL REQUIRED)

**From source:** "Wenn Eltern von diesen Themen hören, ist der erste Impuls oft: App weg, Gerät weg, Problem gelöst... Aber es funktioniert meistens nicht so. Und was du dabei verlierst, ist schwerer zurückzugewinnen: dass dein Kind weiß, es kann mit dir reden — ohne dass sofort etwas gesperrt oder verboten wird."

## Purpose
Break up the slide-heavy section. Show: parent + teen in a real moment. The contrast is the message — removing the app isn't the answer; open communication is.

## Canva Setup
- **Format:** 16:9
- **Layout:** Stock video (parent and teen, calm moment) + lower-third text overlay
- **Text animation:** Crossfade between two statements
- **Template for reuse:** YES — "B-Roll with Lower-Third Text Swap"

## Assets Needed
- Stock video: Parent and teenager in calm moment (kitchen table, walk, etc.)
  - 12–14 seconds
  - Avoid: Dramatic lighting, conflict, "after school special" vibe
  - Ideal: Peaceful, natural, everyday
  - Alternative: Your own phone video of real moment

## Canva Build Steps

1. Create new 16:9 blank
2. Add stock video → resize to fill canvas
3. Reduce video opacity to **70%** (so text is clearly readable)
4. Add text box 1 (lower-third):
   - Text: **"App weg, Gerät weg."**
   - Font: Manrope Bold, 40pt, white
   - Position: Lower-left corner, 30px padding
   - [Optional] Add semi-transparent background: dark gray (#000000, 40% opacity), 10px padding
5. Add text box 2 (will replace Box 1):
   - Text: **"Reden können."**
   - Font: Manrope Bold, 40pt, white
   - Position: Same as Box 1
   - Set opacity to 0% initially
6. Animate Box 1: Fade In → 0.3s
7. Animate Box 1: Fade Out → 0.3s → Trigger "After 6 seconds"
8. Animate Box 2: Fade In → 0.3s → Trigger "After Box 1 fades"
9. Preview: Text crossfades at lower third, B-roll plays naturally beneath

## Layers
1. B-roll video (parent + teen)
2. [Optional] Semi-transparent background box for text readability
3. Text Box 1 — "App weg, Gerät weg."
4. Text Box 2 — "Reden können."

## Animation
- **Text Box 1:** Fade-in 0.3s → hold 6s → fade-out 0.3s
- **Text Box 2:** Fade-in 0.3s (triggered after Box 1 fades)
- **Video:** Plays naturally, no zoom or pan
- **Transition out:** Smooth slide

## Export
- **Format:** MP4, H.264
- **Filename:** `scene-13-app-removal.mp4`
- **Duration:** 14 seconds
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **Very high** — video replaceable, text replaceable, timing adjustable

## Estimated Production Time
**10 minutes** (find stock video, layer text, animate crossfade, export)

---

# Scene 14 — Action: The Key Sentence (QUOTE CARD + COMPARISON)

**From source:** "Was hilft, ist Neugier... 'Zeig mir mal, was du damit machst.' Nicht als Kontrolle. Als Interesse... unterscheide, was dein Kind nutzt. ChatGPT für einen Aufsatz — okay, anderes Thema. Character.AI als täglicher Gesprächspartner — das ist eine andere Frage."

## Purpose
Give viewers a concrete, immediately usable takeaway: "Show me what you do with it" (not as control, as interest). Then: differentiate the use cases.

## Canva Setup
- **Format:** 16:9
- **Part A (Quote):** Warm background, centered quote with sub-text
- **Part B (Comparison):** Same background, two-line differentiation
- **Template for reuse:** YES (both are highly reusable)

## Assets Needed
- **Part B (optional):** Stock image/video of hands on phone with homework (4 seconds, 40% opacity behind text)

## Canva Build Steps

### Part A: Quote Card

1. Create new 16:9 blank
2. Add background color: **#F8F6F3**
3. Add text box 1:
   - Text: **"Zeig mir mal, was du damit machst."**
   - Font: Manrope Bold, 56pt, dark gray (#2D3E3D)
   - Wrapped in quotation marks
   - Position: Center
4. Add text box 2:
   - Text: **"Nicht als Kontrolle. Als Interesse."**
   - Font: Manrope Regular, 32pt, medium gray (#6B7677)
   - Position: Below Box 1, ~40px gap
5. Animate Box 1: Fade In → 0.5s (slower for emphasis)
6. Animate Box 2: Fade In → 0.4s → Trigger "After 1s"

**Export as:** `scene-14a-quote-card.mp4` (10 seconds)

### Part B: Comparison Slide

1. Create new 16:9 blank
2. Add background color: **#F8F6F3**
3. [Optional] Add stock image (hands on phone) → resize to fill → reduce opacity to 40% → layer BEHIND text
4. Add text box 1:
   - Text: **"ChatGPT für einen Aufsatz."**
   - Font: Manrope Bold, 44pt, neutral gray (#5B6C72)
   - Position: Upper-center
5. Add text box 2:
   - Text: **"Character.AI als täglicher Begleiter."**
   - Font: Manrope Bold, 44pt, warm accent (#D97706) or warm gray (#9A7C6B)
   - Position: Below Box 1, ~60px gap
   - The warm color emphasizes: "This is the important distinction"
6. Animate Box 1: Slide In (from left) → 0.4s
7. Animate Box 2: Slide In (from left) → 0.4s → Trigger "After 0.3s"
8. Preview: Two statements appear sequentially, second one colored for emphasis

**Export as:** `scene-14b-comparison.mp4` (10 seconds)

## Layers (Part A)
1. Warm off-white background
2. Quote
3. Intention sub-text

## Layers (Part B)
1. Warm off-white background
2. [Optional] B-roll image (40% opacity)
3. First statement (neutral gray)
4. Second statement (warm accent)

## Animation (Part A)
- **Quote:** Fade-in 0.5s (slow, for emphasis)
- **Sub-text:** Fade-in 0.4s, triggered 1s after quote
- **Transition:** Cut to Part B

## Animation (Part B)
- **First statement:** Slide-in from left, 0.4s
- **Second statement:** Slide-in from left, 0.4s, triggered 0.3s after first
- **Transition out:** Smooth slide

## Export
- **Format:** MP4, H.264 (two separate files)
- **Filenames:** `scene-14a-quote-card.mp4`, `scene-14b-comparison.mp4`
- **Durations:** 10s + 10s = 20s total
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **Very high** — both slides are templatable; text, colors, B-roll all replaceable

## Estimated Production Time
**12 minutes** (layout both parts, animate, export)

---

# Scene 15 — Action: Deepfakes Conversation + klicksafe Resource

**From source:** "Rund um Deepfakes hilft ein direktes Gespräch... 'Weißt du, dass es Tools gibt, mit denen jemand dein Gesicht in Bilder setzen kann, die du nie gemacht hast?' Das ist Grundwissen... klicksafe.eu hat eine kostenlose Broschüre... Link ist in der Beschreibung."

## Purpose
Explain how to talk about deepfakes (as information, not scare). Then point to resource.

## Canva Setup
- **Part A (Conversation):** Reuse quote template from Scene 14a
- **Part B (Resource):** Simple resource slide, klicksafe.eu
- **Template for reuse:** YES (both reuse existing templates)

## Assets Needed
- None (text only)

## Canva Build Steps

### Part A: Deepfakes Conversation Slide (Quote Template Reuse)

1. **Duplicate Scene 14a quote slide**
2. Replace quote text: **"Weißt du, dass es Tools gibt, mit denen jemand dein Gesicht in Bilder setzen kann, die du nie gemacht hast?"**
   - Same style: Manrope Bold, 56pt, dark gray, centered
3. Keep sub-text: **"Das ist kein Schockgespräch. Das ist Grundwissen."**
4. Same animations as Scene 14a

**Export as:** `scene-15a-deepfakes-conversation.mp4` (8 seconds)

### Part B: klicksafe Resource Slide

1. Create new 16:9 blank
2. Add background color: **#F8F6F3**
3. Add text box 1:
   - Text: **"klicksafe.eu"**
   - Font: Manrope Bold, 64pt, dark gray (#2D3E3D)
   - Position: Center (slightly above)
4. Add text box 2:
   - Text: **"Link in der Beschreibung"**
   - Font: Manrope Regular, 28pt, medium gray (#6B7677)
   - Position: Below Box 1, ~30px gap
5. [Optional] Add simple icon: Phone outline or information symbol (single color, top or left)
6. Animate Box 1: Fade In → 0.4s
7. Animate Box 2: Fade In → 0.3s → Trigger "After 0.5s"
8. Add transition out: Fade to black, 1s (marks shift to ending)

**Export as:** `scene-15b-klicksafe.mp4` (10 seconds)

## Layers (Part A)
1. Off-white background
2. Quote
3. Sub-text

## Layers (Part B)
1. Off-white background
2. [Optional] Icon
3. Resource name (large)
4. Instruction (smaller)

## Animation (Part A)
- **Quote:** Fade-in 0.5s
- **Sub-text:** Fade-in 0.4s, triggered 1s after quote

## Animation (Part B)
- **Resource name:** Fade-in 0.4s
- **Instruction:** Fade-in 0.3s, triggered 0.5s after name
- **Transition out:** Fade to black, 1s

## Export
- **Format:** MP4, H.264 (two files)
- **Filenames:** `scene-15a-deepfakes-conversation.mp4`, `scene-15b-klicksafe.mp4`
- **Durations:** 8s + 10s = 18s total
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
✅ **Very high** — both are template reuses; minimal customization needed

## Estimated Production Time
**8 minutes** (duplicate templates, swap text, export)

---

# Scene 16 — Ending: The Call to Connection

**From source:** "Diese Lücke zu schließen, fängt nicht mit einer Regel an... Das ist schwieriger als eine App zu sperren. Und es hilft mehr... Die Telefonseelsorge ist kostenlos und anonym — 0800 111 0 111, immer erreichbar. Bis zum nächsten Video."

## Purpose
Wrap without hype. Reframe: connection is harder than rules, but it works. Provide resource (Telefonseelsorge). Quiet close, no subscribe button, no dramatic endcard.

## Canva Setup
- **Format:** 16:9
- **Part A (Ending message):** Warm background, minimal text or no text (let voiceover carry)
- **Part B (Telefonseelsorge):** Resource information slide
- **Part C (Endcard):** Channel name only, minimal
- **Template for reuse:** Part B is templatable; Part A and C are specific to this video

## Assets Needed
- **Preferred:** Talking head (20–30 seconds, calm, grounded)
- **Optional warm B-roll:** Evening window or warm room (3–4 seconds, between talking head and resource slide)

## Canva Build Steps

### Part A: Ending Message (Talking Head or Minimal Slide)

If using talking head: Import video directly, no Canva needed.

If using fallback slide:
1. Create new 16:9 blank
2. Add background color: **#F9F7F5**
3. **No text** — let voiceover carry the ending
4. Export as 30-second static slide

**Export as:** `scene-16a-ending-message.mp4` (30 seconds)

### Part B: Telefonseelsorge Resource Slide

1. Create new 16:9 blank
2. Add background color: **#F8F6F3**
3. Add text box 1:
   - Text: **"Telefonseelsorge"**
   - Font: Manrope Bold, 56pt, dark gray (#2D3E3D)
   - Position: Upper-center
4. Add text box 2:
   - Text: **"0800 111 0 111"**
   - Font: Manrope Bold, 48pt, dark gray or warm accent (#D97706)
   - Position: Center
5. Add text box 3:
   - Text: **"Kostenlos · Anonym · Immer erreichbar"**
   - Font: Manrope Regular, 24pt, medium gray (#6B7677)
   - Position: Below number, ~25px gap
6. [Optional] Add simple phone outline icon (single color)
7. Animate Box 1: Fade In → 0.4s
8. Animate Box 2: Fade In → 0.4s → Trigger "After 1s" (number appears after label)
9. Animate Box 3: Fade In → 0.3s → Trigger "After 0.5s"

**Export as:** `scene-16b-telefonseelsorge.mp4` (12 seconds)

### Part C: Endcard Slide

1. Create new 16:9 blank
2. Add background color: **#F9F7F5**
3. Add text:
   - Text: **"tasan-media"**
   - Font: Manrope Regular, 32pt, medium gray (#6B7677)
   - Position: Bottom-center, 40px from bottom
4. **No subscribe button, no animation, no graphics — intentionally quiet**
5. Add transition out: Fade to black, 1.5s (intentional silence)

**Export as:** `scene-16c-endcard.mp4` (5 seconds)

## Layers (Part A)
1. Background color only (no text)

## Layers (Part B)
1. Off-white background
2. [Optional] Icon
3. "Telefonseelsorge" label
4. Phone number
5. Description

## Layers (Part C)
1. Background
2. Channel name only

## Animation (Part A)
- None (static slide or talking head)

## Animation (Part B)
- **Label:** Fade-in 0.4s
- **Number:** Fade-in 0.4s, triggered 1s after label
- **Description:** Fade-in 0.3s, triggered 0.5s after number

## Animation (Part C)
- None (static)
- **Transition out:** Fade to black, 1.5s

## Export
- **Format:** MP4, H.264 (three files)
- **Filenames:**
  - `scene-16a-ending-message.mp4` (30s)
  - `scene-16b-telefonseelsorge.mp4` (12s)
  - `scene-16c-endcard.mp4` (5s)
- **Resolution:** 1920 × 1080
- **FPS:** 30

## Automation Potential
⚠️ **Medium** — talking head is unique; resource slides are semi-templatable

## Estimated Production Time
- **Talking head:** 5 min (record + export)
- **Resource slides:** 8 min (two slides)
- **Total:** 10–13 min

---

# Production Summary & Global Rules

## Font System

**Single font: Manrope (no mixing)**

- **Bold (600):** Headlines, quotes, statistics, emphatic statements
- **Regular (400):** Body text, descriptions, sub-statements
- **Italic (400):** Qualifiers, soft emphasis
- **Sizes:**
  - Statistics: 92pt
  - Quotes: 52–56pt
  - Sub-text: 32–36pt
  - Body: 24–28pt
  - Small (sources, notes): 14–18pt
- **Line height:** 1.4 minimum

## Color Palette

- **Warm off-white:** #F8F6F3, #F9F7F5, #F4F1EC (primary light backgrounds)
- **Dark gray (serious):** #2A2D31, #2D3E3D (dark backgrounds)
- **Dark navy (intimate):** #1E2738 (nighttime, emotional scenes)
- **Text:** #FFFFFF (white), #2D3E3D (dark), #6B7677 (medium gray)
- **Accent (optional):** #D97706 (warm) or #4A9B8E (teal)

**Rule:** Use maximum 3 background colors per video. Use one accent color throughout.

## Animation Rules

- **Fade-in:** 0.3–0.5 seconds, smooth easing
- **Slide-in:** 0.4 seconds, left-to-right
- **Crossfade:** Out 0.3s, In 0.4s (slight overlap = smoother)
- **Zoom drift:** Maximum 5% over full scene (subtle, not jarring)
- **Transitions between scenes:** Cut (instant), slide (0.3–0.5s), or fade to black (0.5–1s for section breaks)

## Text Positioning

- **Lower-third:** Bottom 25% of frame, centered or left-aligned, 30px padding
- **Centered:** Vertical and horizontal center
- **Safe zone:** 30px padding from all edges (important for mobile/YouTube crop)

## Reusable Templates

You need exactly **6 base templates:**

1. **"Warm Evening Static"** — Image + lower-third text, subtle drift (Scene 1)
2. **"Dark Intimate Two-Text"** — Dark background, crossfading text (Scene 2)
3. **"Data Stat"** — Large number + description, optional B-roll (Scenes 3–4)
4. **"App Overview Dark"** — Navy background, two text lines (Scene 5)
5. **"Quote Card"** — Centered quote + sub-text, warm background (Scenes 14, 15)
6. **"Serious Statement"** — Dark gray, no images, two text layers (Scenes 9–11)

All other scenes are variations of these, or unique builds.

## Export All Scenes

| Scene | Filename | Duration |
|-------|----------|----------|
| 1 | `scene-01-hook-evening.mp4` | 10s |
| 2 | `scene-02-hook-chatbot.mp4` | 14s |
| 3–4 | `scene-03-04-stat.mp4` | 14s |
| 5 | `scene-05-apps-overview.mp4` | 16s |
| 6 | `scene-06-available-24-7.mp4` | 10s |
| 7 | `scene-07-addiction-framing.mp4` | 14s |
| 8 | `scene-08-emotional-pivot.mp4` | 18s |
| 9–10 | `scene-09-10-deepfakes.mp4` | 18s |
| 11 | `scene-11-deepfakes-proximity.mp4` | 12s |
| 12 | `scene-12-intention.mp4` | 14s |
| 13 | `scene-13-app-removal.mp4` | 14s |
| 14a | `scene-14a-quote-card.mp4` | 10s |
| 14b | `scene-14b-comparison.mp4` | 10s |
| 15a | `scene-15a-deepfakes-conversation.mp4` | 8s |
| 15b | `scene-15b-klicksafe.mp4` | 10s |
| 16a | `scene-16a-ending-message.mp4` | 30s |
| 16b | `scene-16b-telefonseelsorge.mp4` | 12s |
| 16c | `scene-16c-endcard.mp4` | 5s |
| **Total** | **~4:30 min** | |

## Canva Folder Structure

```
tasan-media / KI und deine Kinder
├── Templates/
│   ├── 01-evening-static
│   ├── 02-dark-intimate-two-text
│   ├── 03-data-stat
│   ├── 04-app-overview
│   ├── 05-quote-card
│   └── 06-serious-statement
├── Scenes/ (scenes built from templates)
└── Exports/ (finished MP4s)
```

## Time Estimate

| Task | Time |
|------|------|
| Template setup | 30–40 min |
| Scene builds | 2–2.5 hours |
| Exports | 20 min |
| **Total in Canva** | **3–3.5 hours** |

## Next Step

After exporting all scenes from Canva:
1. Import to CapCut in order
2. Add narration (voice recording or AI voice)
3. Layer B-roll for Scenes 4, 5, 13, 14b, 16 (if not already done)
4. Add music/ambient sound
5. Color grade if needed
6. Export final video as 1920 × 1080, 30 FPS

---

## Notes for Future Videos

This template structure (6 base templates + variations) is designed to scale. Once these templates exist in Canva:
- Scenes 3–4 (stat) can be rebuilt in 5 minutes for any new stat
- Scenes 14–15 (quote cards) can be rebuilt in 5 minutes for any new actionable insight
- Scenes 9–10 (serious statements) can be rebuilt in 3 minutes for any sensitive topic

Future videos using this structure will reduce Canva production time to 1–1.5 hours.
