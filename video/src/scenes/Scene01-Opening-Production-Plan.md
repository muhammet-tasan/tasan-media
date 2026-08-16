# Scene 1 / Opening Hook — Production Pilot Plan

**Status:** Approved in principle — finalized shot list, no Remotion code yet
**Date:** 2026-08-16 (updated)
**Script source:** `content/scripts/2026-05-12/ki-risiken-kinder-script.md`, Hook section (0:00–0:40)
**Goal:** Produce the opening sequence to a bar where we'd use it in a real published video without caveats — and use it to define how the *entire* future Remotion pipeline should work, not just this one scene.

---

## 0. Governing decisions (approved 2026-08-16)

These supersede the equivalent points in the previous version of this plan:

1. **Stock-only B-roll for this first video.** No self-filmed footage yet. Pexels, Pixabay, or other clearly rights-clean sources only. No generic corporate stock — documentary, calm, cinematic footage only. (`scene-01-hallway.png`, already in `final-assets/`, qualifies as this kind of sourced material and stays in use.)
2. **Audio fully inside Remotion, not CapCut.** This pilot tests the full pipeline: voice-over, stock B-roll, music/score, ambient soundbeds, sound effects, motion design, typography, and transitions all assembled and rendered by Remotion. CapCut is no longer treated as a required pipeline step — it becomes optional/legacy until proven otherwise. (`video/README.md`'s "audio added in CapCut" line is now stale; it gets rewritten once this pilot proves the pattern, not before.)
3. **Voice-first timing, confirmed.** VO is recorded first; real timestamps drive shot boundaries and animation timing. Nothing here is "cram the voice into a fixed 7-second scene."
4. **Use Remotion's full toolkit where it earns its place** — `Sequence`/`Series`, `interpolate`, `spring`, `OffthreadVideo`/`Video`, `Audio`, layering, masks, blur/focus shift, camera motion, zoom/pan, motion typography, gradients/light, grain/vignette, color treatment, transitions, sound-sync — but never an effect just because it's technically available. Each technique below is tied to a specific narrative reason.
5. **No artificial cap on asset count.** Quality and storytelling decide the number of clips, not a minimalism target. This hook ends up using **4 distinct visual assets** (1 existing + 3 new stock clips) across 5 shots — chosen because each is narratively justified, not to hit a number.

---

## 1. Is 4 shots enough, or does a professional hook need more?

Re-checked against the script's own structure. The Hook has five distinct beats (A–E, see table below), and a calm documentary pace (restrained motion, no MTV-style rapid cutting, per `SCENE-STANDARDS.md`) works best when the cut points follow the material's own rhythm instead of an arbitrary shot-count target.

**Decision: 5 shots, not 4.** The previous plan folded the "arrival" beat (A) into the establishing hallway shot. On review, that beat deserves its own short visual (front door, keys, entryway) — Beat A is textually a distinct action (arrival → greeting → walking off) that the "settled evening" hallway image doesn't actually depict. Splitting it out also gives Beat E ("in vielen Familien") room to become its own wider shot — an apartment-building-at-night exterior — which visualizes "many families" far better than reusing the same interior a third time. Net result: 5 shots, varied duration (5–15s), matching the script's natural beat structure almost 1:1 — not padding, not over-cutting.

---

## 2. Standing rule carried over: no depicted face

Unchanged from the prior review, still binding: **the daughter is never shown.** Hands, phone glow, architecture, and light only — no face, no identifiable figure. This video is about the risk of AI-generated imagery of minors; showing (or AI-generating) a photorealistic teenage face in our own hook would be a direct tonal and platform-policy contradiction. This also shapes the stock search terms below — all searches are written to return object/architecture/hands shots, not posed people.

---

## A. Final shot list

### Shot 1 — Arrival
- **VO line:** *"Deine Tochter kommt nach Hause. Sagt hi. Geht in ihr Zimmer."*
- **Timing:** ~0:00–0:06 (6s) — *approximate; final cut points are set from the real VO recording, per voice-first rule*
- **B-roll motif:** Front door / entryway details — keys on a hook, shoes by the door, hallway light switching on. Objects and architecture only, no posed figure.
- **Search terms:** `front door closing evening home`, `house keys entryway hook`, `hallway light turning on warm evening`, `shoes by front door home`, `coming home evening apartment door` · DE: `Haustür Eingang Abend`, `Schlüssel Flur Haken`
- **Camera/crop:** Static or locked-off stock shot preferred; light crop to 16:9 if needed. No added pan.
- **Remotion motion:** `OffthreadVideo` at natural speed, subtle `interpolate` opacity fade-in (0→1 over ~15 frames), matching `bgFadeIn` convention from `sceneStandards.motion`.
- **Text/typography:** None.
- **Music/atmosphere:** Ambience begins here — door, keys, quiet house sounds. No score yet.
- **Sound effects:** Door latch/click, keys set down — naturalistic, low in the mix, VO stays dominant.
- **Transition to next:** Fade (standard, ~18 frames).
- **Story purpose:** Establishes ordinary domestic normalcy — time (evening), place (home) — before anything is reframed.

### Shot 2 — The quiet evening
- **VO line:** *"Du hörst nichts. Kein Streiten, kein Musik hören, nichts. Und irgendwie — es fühlt sich okay an. Sie ist ruhig, du hast deinen Abend."*
- **Timing:** ~0:06–0:15 (9s)
- **B-roll motif:** **Reuse `scene-01-hallway.png`** (existing asset). It already contains the exact duality the VO needs — warm dining room left, dark hallway, cool blue-lit door right — no better replacement is worth sourcing.
- **Search terms:** N/A (existing asset). Optional supplemental cutaway only if the pacing needs a second angle: `cozy living room lamp light evening quiet`, `warm apartment hallway night light` · DE: `gemütliches Wohnzimmer Abend Lampe`
- **Camera/crop:** Slow Ken Burns push-in, 1.0 → ~1.02 over the shot (same philosophy as current `HookScene`, stretched proportionally to 9s).
- **Remotion motion:** `BackgroundImage` (existing component, unchanged), `SoftGradientOverlay` + `VignetteOverlay` + `GrainOverlay` as already standardized.
- **Text/typography:** None.
- **Music/atmosphere:** Score enters here — a single sustained low tone (no melody), volume interpolated in from silence. Very quiet.
- **Sound effects:** Deliberately none. "Du hörst nichts" — the mix should literally support that line, not contradict it with ambient noise.
- **Transition to next:** Fade, continuing directly into Shot 3's push (same asset, so this can be closer to a seamless motion continuation than a hard fade).
- **Story purpose:** The parent's comfortable read of the moment — calm, textbook "nothing's wrong here."

### Shot 3 — Push through the hallway
- **VO line:** *"Was du nicht siehst: Sie tippt. Den ganzen Abend. Nicht mit einer Freundin."* (stops just short of "Mit einem Chatbot" — see sync note)
- **Timing:** ~0:15–0:21 (6s)
- **B-roll motif:** Two options, decide at sourcing time based on what's actually available:
  - **Option A (default):** Masked crop-zoom into the *same* `scene-01-hallway.png`, pushing toward the blue-lit door. Cheapest, thematically exact ("getting closer to what you don't see"), reuses an already-approved asset.
  - **Option B (if a strong match exists):** A dedicated stock clip of a dark corridor/hallway with a light source ahead, cross-faded in from Shot 2 for real camera motion instead of a simulated push.
- **Search terms (Option B only):** `hallway corridor walking toward light door`, `apartment corridor dark blue light door ajar`, `dark hallway door light glow night` · DE: `dunkler Flur Tür Licht Abend`
- **Camera/crop:** Accelerating push toward the door (2–4% scale over the shot — the one shot allowed a slightly less subtle move, since the beat itself *is* "getting closer"). Progressive cool color-shift as we approach.
- **Remotion motion:** `BackgroundImage` extended with a focus-point prop (pan/zoom toward the door region, not center) — small, justified extension, not a new component. `interpolate` for the color/brightness shift.
- **Text/typography:** None.
- **Music/atmosphere:** Score holds steady, very slight rise as the push completes.
- **Sound effects:** A subtle low tonal shift or soft door-adjacent room-tone change marking the threshold crossing — not a jump-scare sting, just a tonal hinge.
- **Sync note:** the cut to Shot 4 should land **exactly on the word "Chatbot"** — a deliberate, precise voice-driven sync point, not an arbitrary cut. This is the one place a slightly quicker transition (a fast ~6–9 frame fade instead of the standard 18) is justified by the reveal itself.
- **Transition to next:** Fast fade (~6–9 frames), timed to the word "Chatbot."
- **Story purpose:** The turn — from "everything's fine" to "here's what you're not seeing."

### Shot 4 — The phone
- **VO line:** *"...Mit einem Chatbot. Sie erzählt ihm Dinge, die sie dir nicht sagt. Nicht weil sie dich nicht mag. Sondern weil er nie genervt klingt. Nie beschäftigt ist. Immer antwortet. Immer auf ihrer Seite."* + `[Atmosphäre: stilles Zimmer, bläuliches Handylight]` (silent tail)
- **Timing:** ~0:21–0:35 (14s, including the ~2s silent atmosphere tail)
- **B-roll motif:** Hands holding a phone, cool blue screen glow, dark domestic room. No face, ever.
- **Search terms:** `hands holding phone blue light dark room`, `smartphone screen glow hands night close up`, `texting phone dark room close up night`, `hands typing smartphone blue light bedroom` · DE: `Hände Smartphone blaues Licht Dunkelheit`
- **Camera/crop:** Prefer a clip with natural, alive handheld micro-movement already in it — if so, add little to no extra Remotion motion (stacking motion on already-alive footage looks over-produced). If the sourced clip is static/flat, add a slow rack-focus instead (see below).
- **Remotion motion:**
  - `OffthreadVideo` for the clip itself.
  - `FocusShift` (new small component) — blur→sharp rack focus landing sharp exactly as "Was du nicht siehst" resolves, but only if the sourced footage needs it (don't add if the clip already reads well).
  - `TypingIndicator` (new small component, `spring`-based pulsing dots) — appears subtly near the phone starting at "Sie erzählt ihm Dinge," abstract representation of "she's texting," no literal chat UI, no product branding.
  - Slow breathing radial "screen glow" light layer (`interpolate` opacity), code-generated, not an asset.
- **Text/typography:** None.
- **Music/atmosphere:** Score is most present here — still just the sustained low tone, no melody, held steady through the whole beat including the silent tail.
- **Sound effects:** Sparse, quiet keyboard/screen taps loosely tied to the typing-indicator's pulses — reinforcement, not a rhythmic loop. Silence (ambience + score only) carries the final ~2s atmosphere tail.
- **Transition to next:** Slowest fade in the sequence (~1s / 30 frames) — marks the emotional low point before the pull-back.
- **Story purpose:** The emotional core — *why* this is happening, not just *that* it's happening. Longest hold in the sequence, matching its narrative weight.

### Shot 5 — Pull back
- **VO line:** *"Das passiert gerade. In vielen Familien. Meistens unbemerkt."*
- **Timing:** ~0:35–0:40 (5s)
- **B-roll motif:** Apartment building exterior at night, multiple windows lit warmly (one or two with a cooler flicker). Deliberately **not** a third reuse of the hallway interior — "in vielen Familien" calls for a wider visual metaphor than the same room again, and this is where a genuinely new asset is worth sourcing (per decision #5).
- **Search terms:** `apartment building night lit windows exterior`, `residential building evening lights many windows`, `city apartments night glowing windows`, `neighbourhood houses lit up evening dusk` · DE: `Wohnhaus Abend beleuchtete Fenster`
- **Camera/crop:** Static or a very slow drift; if a still, a gentle Ken Burns *zoom-out* (1.02 → 1.0) — literalizes "zooming out to the pattern," mirrors Shot 3's push-in.
- **Remotion motion:** `interpolate` scale (subtle un-zoom), standard `VignetteOverlay`/`GrainOverlay` for consistency with the rest of the sequence.
- **Text/typography:** **One sparse text card** — "Meistens unbemerkt." — using the existing `hookPrimary` 112px lower-left standard from `sceneStandards`, appearing *after* the VO says it, held briefly, then fading with the shot. The only on-screen typography in the entire 40s hook.
- **Music/atmosphere:** Score resolves and fades down; ambience fades toward near-silence.
- **Sound effects:** None — let it breathe into the cut.
- **Transition to next:** Fade to black, then fade up into the existing `StatisticScene` ("2/3" statistic) — the script's very next line is the statistic, so this is a clean, already-built handoff.
- **Story purpose:** Zooms the specific anecdote out into the general, unnoticed pattern — sets up the statistic that immediately follows.

---

## B. Asset list

| # | Asset | Shot(s) | New or reuse | Type | Source |
|---|-------|---------|--------------|------|--------|
| 1 | `scene-01-hallway.png` | 2, 3 (Option A) | **Reuse** (in `final-assets/`) | Still image | Already sourced, documentary-quality, kept |
| 2 | Front door / entryway | 1 | **New** | Stock video (still as fallback) | Pexels / Pixabay |
| 3 | Dark hallway toward light (only if Option B chosen for Shot 3) | 3 | **New, optional** | Stock video | Pexels / Pixabay |
| 4 | Hands + phone, blue glow, no face | 4 | **New** | Stock video (still as fallback) | Pexels / Pixabay |
| 5 | Apartment building exterior, night, lit windows | 5 | **New** | Stock video or high-res still | Pexels / Pixabay |
| 6 | VO recording, full 40s hook, German | all | **New** | Audio | ElevenLabs or human |
| 7 | Ambient room tone (subtle house ambience, layered per shot) | 1–5 | **New** | Audio | Pixabay Audio / freesound.org |
| 8 | Sustained low score tone (no melody) | 2–5 | **New** | Audio | Pixabay Music or YouTube Audio Library — royalty-free, no attribution ambiguity |
| 9 | Soft typing/tap SFX | 4 | **New** | Audio | Pixabay Audio |
| 10 | Door/keys SFX | 1 | **New** | Audio | Pixabay Audio |

3–4 new visual clips (depending on the Shot 3 option), all stock-sourced, all rights-clean. This lands inside the "4–6 clips is fine" range approved above — each one earns its place in the story, not chosen to fill a quota.

---

## C. Audio / voice / music concept

This is now the full pipeline test, not a VO-only experiment:

1. **Voice:** one continuous ~40s VO take, calm/measured pace, natural pauses at each beat boundary, a deliberate ~2s silence at the `[Atmosphäre]` mark, and extra space between the three closing fragments in Beat E.
2. **Ambience:** near-inaudible room tone under the whole sequence, shot-specific texture where useful (Shot 1: entryway; Shot 4: quieter, more intimate room tone).
3. **Score:** single sustained low tone, no melody, entering quietly in Shot 2, most present in Shot 4, resolving in Shot 5. Sourced from a clearly royalty-free library (Pixabay Music / YouTube Audio Library) — no ambiguous-license sources, consistent with "official APIs over scraping" / legally clean project philosophy.
4. **SFX:** door/keys (Shot 1), a subtle threshold-crossing tonal shift (Shot 3), soft typing taps (Shot 4) — all sparse, all subordinate to VO, none rhythmic/loop-like or gimmicky.
5. **Sync approach — voice-first, unchanged:** record VO before locking any shot durations, extract real timestamps (ElevenLabs alignment export or manual scrub), build a frame-offset table, and drive `Series`/`Sequence` from that table. The one hard sync point to explicitly hit: the Shot 3→4 cut lands on the word "Chatbot."

---

## D. Remotion component plan

### Keep unchanged
- `SoftGradientOverlay`, `VignetteOverlay`, `GrainOverlay` — reused across all 5 shots exactly as today.
- `sceneStandards.typography.hookPrimary` / `lowerLeftThird` / motion timing constants — reused once, for Shot 5's text card.
- `HookScene.tsx` — stays as a valid *silent title-card* primitive for future short/simple videos; not deleted, just not the tool for this narrated hook.

### Small, justified extensions
- **`BackgroundImage`** → add a focus-point/pan-target prop (`focusX`/`focusY`) for Shot 3's push toward the door and Shot 5's zoom-out. One prop addition, not a new component.

### New components (each tied to a concrete shot, not built speculatively)
1. **`HookSequence.tsx`** — orchestrator using `Series`/`Sequence`, places all 5 shots at VO-derived frame offsets, layers `<Audio>` tracks (VO + ambience + score + SFX) with volume envelopes. Core new architecture this pilot exists to prove.
2. **`TypingIndicator.tsx`** — small `spring`-based pulsing-dots motion graphic (Shot 4). Reusable later (Character.AI/Replika beat appears again mid-video).
3. **`FocusShift.tsx`** — rack-focus helper (blur `interpolate`), used only if Shot 4's sourced clip needs it. Reusable for any future "reveal" beat.
4. **Stock video handling** — `OffthreadVideo` (preferred over `<Video>` for render performance) for Shots 1, 3 (Option B), 4, 5 if video; falls back to the existing `BackgroundImage` pattern for any shot where only a still is sourced.

### Deliberately not building yet
- A generic shared `SceneAudioBed` component — build the audio layering inline in `HookSequence.tsx` first; extract to a shared component only after this pattern repeats in Scene 2+ (avoids premature abstraction).
- True multi-layer parallax — still only one flat hallway photo for Shots 2/3; faking depth from a flat image risks a cardboard-cutout look. The masked crop-zoom (or Option B video) delivers the "getting closer" feeling without that risk.
- Rewriting `video/README.md`'s CapCut-based workflow section — deferred until this pilot proves the full-Remotion audio pipeline actually works end to end. Documenting a process before it's validated would be premature.

---

## E. Production order

1. ~~Lock the plan~~ **Done — approved 2026-08-16, shot list finalized.**
2. **Source the 3–4 new stock clips** (entryway, optionally hallway-push, phone/hands, apartment exterior) from Pexels/Pixabay against the search terms in §A; evaluate against the documentary/calm/cinematic bar, discard anything that reads as corporate stock.
3. **Source the audio bed** (ambience, score, SFX) from Pixabay Music/Audio or equivalent clearly-licensed sources.
4. **Record VO** for the full 40s Hook text, including the deliberate pauses and the "Chatbot" sync point.
5. **Extract exact timestamps** from the VO (alignment export or manual scrub) → the frame-offset table `HookSequence` is built against. Nothing in step 6 starts before this exists.
6. **Build `HookSequence.tsx`**, wiring in the timing table, the existing overlay components, the `BackgroundImage` focus-point extension, and the two new small components — only as each shot is actually built.
7. **Layer `<Audio>` tracks** (VO + ambience + score + SFX) with volume envelopes.
8. **Render a first full draft**, check against the quality bar in §F — once muted, once with sound.
9. **Iterate** — 1–2 rounds expected.
10. **Lock and document** — write `HookSequence.standards.md`, fold the "no depicted face" rule and voice-first/full-audio-in-Remotion process into `SCENE-STANDARDS.md`, and only then update `video/README.md`'s pipeline description. Further scene types/standards (QuoteScene, InsightScene, etc.) start **after** this, not before.

---

## F. Quality bar — when is Scene 1 "production ready"?

- [ ] VO fully recorded, every shot boundary locked to actual word/pause timestamps
- [ ] The Shot 3→4 cut lands precisely on "Chatbot"
- [ ] No visible sync drift between VO and visual beats anywhere in the 40s
- [ ] The daughter is never shown — hands, light, and architecture only
- [ ] All B-roll is stock-sourced (Pexels/Pixabay/equivalent), documentary-quality, no corporate-stock look
- [ ] Camera motion stays restrained everywhere except the one deliberate Shot 3 push; `Easing.inOut(Easing.exp)` throughout except the one small `spring` on the typing indicator
- [ ] On-screen text appears exactly once (Shot 5's card), not as redundant captioning
- [ ] Warm (Shots 1–2) vs. cool (Shots 3–4) color contrast reads clearly even at reduced brightness / on a phone screen
- [ ] Ambient sound never contradicts the VO (Shot 2 stays quiet — "Du hörst nichts")
- [ ] Score is a single sustained tone, never becomes a melody or "trailer music"
- [ ] All music/SFX/ambience sources are clearly royalty-free with no attribution ambiguity
- [ ] Full sequence renders via `npx remotion render` at 1920×1080/30fps/H.264 **with VO, ambience, score, and SFX all correctly muxed and audible** — the core test of decision #2
- [ ] Watched twice end-to-end (muted, then with sound) and clears the bar: *we would use this in a real published video without apologizing for it*
- [ ] Hands off cleanly into the existing `StatisticScene` with a natural fade, no timing gap or overlap

---

## Open questions for human review

1. Shot 3: Option A (mask-zoom on existing asset) or Option B (dedicated stock hallway-walk clip) — decide once candidates are actually sourced and compared side by side.
2. Score source: confirm Pixabay Music / YouTube Audio Library is acceptable, or is there an existing licensed music tool for the channel not yet documented here?
3. Once this pilot is complete and validated, `video/README.md` and `SCENE-STANDARDS.md` need a pass to reflect the full-Remotion-audio pipeline — intentionally deferred, not forgotten.
