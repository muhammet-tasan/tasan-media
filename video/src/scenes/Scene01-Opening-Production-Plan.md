# Scene 1 / Opening Hook — Production Pilot Plan

**Status:** All 5 B-roll clips downloaded, verified, and locked — including a Shot 5 replacement after the original candidate failed the European-context check — no Remotion code yet
**Date:** 2026-08-16 (updated — download + verification pass complete)
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

*B-roll sourcing (2026-08-16): every shot evaluated against a shortlist of stock candidates — see `video/public/assets/2026-05-12/ki-risiken-kinder/scene-01-stock-candidates-shortlist.md` for the full candidate-by-candidate research. Final picks below.*

### Shot 1 — Arrival
- **VO line:** *"Deine Tochter kommt nach Hause. Sagt hi. Geht in ihr Zimmer."*
- **Timing:** ~0:00–0:06 (6s) — *approximate; final cut points are set from the real VO recording, per voice-first rule*
- **B-roll motif:** Front door / entryway details — keys on a hook, shoes by the door, hallway light switching on. Objects and architecture only, no posed figure.
- **Final asset (locked 2026-08-16):** ["Shadow of a Person Passing By"](https://www.pexels.com/video/shadow-of-a-person-passing-by-7986624/) — Pexels, SHVETS production, 4K/HD. Warm sunlit room with hanging coats; only a shadow crosses the frame — no identifiable figure, no hand/key close-up. Calm, non-eerie tag set. Chosen over hand/key-detail candidates (1.1–1.3, rejected) as the more creative, less literal read of "coming home."
  - **Known gap, accepted:** source clip reads as daytime/sunlit — needs a cooler/dimmer color grade in Remotion to sell "evening," per the same color-treatment approach used in Shot 3.
  - **Downloaded and verified (2026-08-16):** `final-assets/scene-01-shot-01-arrival-shadow.mp4` — 1920×1080, 25fps, 7.2s, H.264. Frame-checked: the shadow-passing motif works exactly as intended (clear human silhouette, no face, ~3.5–4.5s). Light is low-angle/hard-edged directional sun, not neutral midday — gives real basis for an evening grade; verdict "plausible, needs a grading test," not guaranteed. Full findings: `final-assets/ASSET-MANIFEST.md`.
  - **SFX correction:** the planned "keys set down" cue doesn't fit this visual (no keys/hook interaction shown) — dropped. "Door latch/click" still fits (a real door is in frame). See §C.
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
- **B-roll motif:** Warm, lived-in living room, no people — the parent's comfortable evening.
- **Final asset (locked 2026-08-16):** ["Soft Light Illuminating a Cozy Living Space"](https://www.pexels.com/video/soft-light-illuminating-a-cozy-living-space-34824046/) — Pexels, Florian Delée, 2560×1440 landscape confirmed. No people, genuinely lived-in (not showroom/real-estate style), warm light.
  - **Known gap, accepted:** the clip is lit golden-hour/sunset, not night. Accepted deliberately rather than re-sourcing — to be tested in Remotion via color treatment (grade toward evening: reduce warmth/brightness, add contrast, possibly a subtle cool-leaning overlay) rather than by continuing the stock search. If the grade can't sell "evening" convincingly, revisit before lock.
  - **Downloaded and verified (2026-08-16):** `final-assets/scene-01-shot-02-living-room-evening.mp4` — 1920×1080, 25fps, 9.8s, H.264. Frame-checked: gap turns out smaller than expected — most of the frame is already dim/shadowed (sofa, TV, plants, framed art all in shadow), only one small warm patch of direct light hits the wall. Verdict: "yes, lower risk than expected" — a light grade should be enough, not a heavy color-correction lift. Full findings: `final-assets/ASSET-MANIFEST.md`.
- **`scene-01-hallway.png` status:** No longer assigned to Shot 2. Demoted to fallback/possible asset only — its primary role is now Shot 3 (see below).
- **Camera/crop:** Slow Ken Burns push-in or hold, gentle scale (~1.0 → ~1.02) over the shot — same restrained philosophy as the rest of the sequence, adapted to the new clip's own composition (don't force the exact hallway.png push if the new clip reads better held static or with a different subtle move).
- **Remotion motion:** `OffthreadVideo` for the clip, `SoftGradientOverlay` + `VignetteOverlay` + `GrainOverlay` as already standardized. Color treatment (warm→evening grade) to be tuned directly in Remotion — see gap note above.
- **Text/typography:** None.
- **Music/atmosphere:** Score enters here — a single sustained low tone (no melody), volume interpolated in from silence. Very quiet.
- **Sound effects:** Deliberately none. "Du hörst nichts" — the mix should literally support that line, not contradict it with ambient noise.
- **Transition to next:** Fade, continuing directly into Shot 3's push (same asset, so this can be closer to a seamless motion continuation than a hard fade).
- **Story purpose:** The parent's comfortable read of the moment — calm, textbook "nothing's wrong here."

### Shot 3 — Push through the hallway
- **VO line:** *"Was du nicht siehst: Sie tippt. Den ganzen Abend. Nicht mit einer Freundin."* (stops just short of "Mit einem Chatbot" — see sync note)
- **Timing:** ~0:15–0:21 (6s)
- **B-roll motif:** **Option A locked, final (2026-08-16).** Masked crop-zoom into `scene-01-hallway.png`, pushing toward the blue-lit door. Reuses the already-approved still.
  - **Option B formally rejected** after two dedicated stock-search rounds (see shortlist doc). Finding: Pexels/Pixabay's entire "dark corridor with light ahead" inventory (the Nino Souza series and equivalents) is consistently tagged eerie/horror/industrial, which breaks the standing "not horror-adjacent" rule; the residential-hallway alternatives that avoid that tag are consistently bright, real-estate-showroom-style daytime shots. No candidate across either round cleared both bars at once — this is a structural gap in available stock, not a search-effort gap. Sourcing a new clip is closed for this shot.
- **Creative direction for the still-image treatment (this is the deliberate "how good can a still look in Remotion" test for this pilot):**
  - A deliberate push toward the door — the one shot allowed a slightly less subtle camera move, since the beat itself *is* "getting closer."
  - A considered crop / focus point — pushing toward the door region specifically, not a center-frame zoom.
  - Warm → cool/blue color treatment over the course of the shot, bridging Shot 2's warm grade into Shot 4's cool blue phone glow (the still already ends on a cool-lit door, which supports this arc without inventing a color that isn't in the source).
  - Layering / light — apply where it earns its place (e.g. the existing gradient/vignette/grain stack), not as decoration.
  - Optional blur / focus shift — only if it serves the "getting closer to what you don't see" idea; not mandatory.
  - **Explicit non-goal: don't force every technique above into the shot.** The result must read as cinematic and natural, not as an effects showcase. Judge each technique on the render, drop what doesn't earn its place.
  - Transition to Shot 4 must land **exactly on the word "Chatbot"** (see sync note) — this is the one non-negotiable technical requirement of this shot.
- **Camera/crop:** Accelerating push toward the door (2–4% scale over the shot). Progressive cool color-shift as we approach.
- **Remotion motion:** `BackgroundImage` extended with a focus-point prop (pan/zoom toward the door region, not center) — small, justified extension, not a new component. `interpolate` for the color/brightness shift; optional `FocusShift` blur if it serves the shot (see above).
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
- **Final assets (locked 2026-08-16), matched pair — two internal beats:**
  - ["Smartphone, Keyboard, Typing"](https://pixabay.com/videos/smartphone-keyboard-typing-message-169446/) — Pixabay, magicmore, 4K (4096×2160) confirmed. Explicitly "at night, close-up," hands-only. Primary typing/dark-room beat.
  - ["Smart Phone, Mobile Phone, Scrolling"](https://pixabay.com/videos/smart-phone-mobile-phone-scrolling-169445/) — Pixabay, magicmore (same series/uploader as above), 4K (3840×2160) confirmed. Secondary beat — "she's texting" → "reading a reply," consistent color grade with the first clip since it's the same series.
  - Still needs a visual preview pass to confirm the screen glow reads cool/blue rather than warm-white before final lock.
  - **Downloaded and verified (2026-08-16):** `final-assets/scene-01-shot-04-phone-typing.mp4` (4096×2160, 25fps, 16.92s, H.264) and `final-assets/scene-01-shot-04-phone-scrolling.mp4` (3840×2160, 25fps, 25.8s, H.264). Frame-checked, verdict "partial — usable but not a plug-and-play pair":
    - Both hands-only/no-face, both read as phone-glow-in-dark-room — core rule and mood hold.
    - **Not the same physical setup**: typing clip holds the phone up near face height; scrolling clip has the phone lying flat on a desk, hand reaching down. Cutting between them will read as a setup change unless the edit deliberately smooths it (matched crop/framing).
    - Scrolling clip shows a **photo/camera-roll grid, not a chat thread** — doesn't literally continue "she's texting," works as an abstract "absorbed in phone" cutaway instead.
    - Glow color differs slightly (typing: blue-purple/magenta cast; scrolling: cleaner teal-blue) — needs a unifying grade pass.
    - On-screen UI in both is generic/unbranded (plain keyboard, plain gray chat bubbles, placeholder text) — no logo risk, but legible text if paused, worth a final glance once cropped.
    - Full findings: `final-assets/ASSET-MANIFEST.md`.
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
- **Final asset (locked 2026-08-16):** ["Footage of an Apartment Building at Night"](https://www.pexels.com/video/footage-of-an-apartment-building-at-night-9431644/) — Pexels, T Studio, 1920×1080 @ 25fps confirmed. Exact motif — nighttime apartment building, multiple lit windows, no people, no logos.
  - **Original candidate FAILED verification 2026-08-16, replaced same day.** The T Studio candidate and its same-uploader backup both read unambiguously as a non-European (Iranian, per page tags) residential tower — dense grid of small uniform windows, barred/grilled balconies, a red/orange illuminated non-Latin character sign glowing in one window in both clips. Rejected; both files removed from `final-assets/`.
  - **Final asset (locked 2026-08-16):** ["Aerial view of a residential area at night"](https://www.pexels.com/video/an-aerial-view-of-a-residential-area-at-night-28466799/) — Pexels, David Pickup, 1920×1080, 29.97fps, 17.82s, confirmed via page tags as Halifax, West Yorkshire, England (UK). Sourced with explicitly European search terms after the original failure; 8 candidates frame-checked, this was the only one to clear every bar (verifiably European, genuinely lit windows at dusk/night, ordinary residential — not touristy Old Town, no people in focus, no text/logos, landscape ≥1080p). Downloaded as `final-assets/scene-01-shot-05-halifax-neighbourhood-night.mp4`.
  - **Framing note:** this is a wide aerial drone shot of an ordinary English terraced-house neighbourhood (many separate homes), not a single building facade as originally envisioned in this section's B-roll motif description above. Arguably a stronger visual for "in vielen Familien" (literally shows many individual homes) than one building would have been, but it's a different visual language (aerial/wide vs. static/close) — worth a sanity check once composited with Shots 1–4's more intimate framing.
  - **Runner-up, not used:** an aerial shot verifiably of Warsaw, Poland (authentic Central European postwar apartment block) was also found and cleared the geography check, but stayed in full sunset daylight for its entire 72s runtime with almost no windows actually lit — fails the "beleuchtete Fenster am Abend/nachts" requirement outright, not just as a gradeable risk. Kept as a documented alternative, not downloaded to `final-assets/`.
  - Full sourcing/verification writeup: `final-assets/ASSET-MANIFEST.md`.
- **Camera/crop:** Static or a very slow drift; if a still, a gentle Ken Burns *zoom-out* (1.02 → 1.0) — literalizes "zooming out to the pattern," mirrors Shot 3's push-in.
- **Remotion motion:** `interpolate` scale (subtle un-zoom), standard `VignetteOverlay`/`GrainOverlay` for consistency with the rest of the sequence.
- **Text/typography:** **One sparse text card** — "Meistens unbemerkt." — using the existing `hookPrimary` 112px lower-left standard from `sceneStandards`, appearing *after* the VO says it, held briefly, then fading with the shot. The only on-screen typography in the entire 40s hook.
- **Music/atmosphere:** Score resolves and fades down; ambience fades toward near-silence.
- **Sound effects:** None — let it breathe into the cut.
- **Transition to next:** Fade to black, then fade up into the existing `StatisticScene` ("2/3" statistic) — the script's very next line is the statistic, so this is a clean, already-built handoff.
- **Story purpose:** Zooms the specific anecdote out into the general, unnoticed pattern — sets up the statistic that immediately follows.

---

## B. Asset list

| # | Asset | Shot(s) | New or reuse | Type | Source | Status |
|---|-------|---------|--------------|------|--------|--------|
| 1 | `scene-01-hallway.png` | 3 (primary), 2 (fallback only) | **Reuse** (in `final-assets/`) | Still image | Already sourced | Already in `final-assets/` |
| 2 | `scene-01-shot-01-arrival-shadow.mp4` | 1 | **New** | Stock video | Pexels, SHVETS production | **Downloaded + verified 2026-08-16** — plausible for evening grade, see §A |
| 3 | `scene-01-shot-02-living-room-evening.mp4` | 2 | **New** | Stock video | Pexels, Florian Delée | **Downloaded + verified 2026-08-16** — evening grade lower-risk than expected, see §A |
| 4 | `scene-01-shot-04-phone-typing.mp4` | 4 (primary beat) | **New** | Stock video | Pixabay, magicmore | **Downloaded + verified 2026-08-16** — usable, needs grade/crop work to pair with #5, see §A |
| 5 | `scene-01-shot-04-phone-scrolling.mp4` | 4 (secondary beat) | **New** | Stock video | Pixabay, magicmore (same series as #4) | **Downloaded + verified 2026-08-16** — usable, needs grade/crop work to pair with #4, see §A |
| 6 | `scene-01-shot-05-halifax-neighbourhood-night.mp4` | 5 | **New** | Stock video | Pexels, David Pickup | **Downloaded + verified + LOCKED 2026-08-16** — replaces a rejected candidate (Iranian, not European, architecture); confirmed Halifax, UK, see §A |

Full per-asset technical spec sheet (source URL, license, measured resolution/fps/duration/format) and detailed visual-verification writeup: `video/public/assets/2026-05-12/ki-risiken-kinder/final-assets/ASSET-MANIFEST.md`.
| 7 | VO recording, full 40s hook, German | all | **New** | Audio | ElevenLabs or human | Not started |
| 8 | Ambient room tone (subtle house ambience, layered per shot) | 1–5 | **New** | Audio | Pixabay Audio / freesound.org | Not started |
| 9 | Sustained low score tone (no melody) | 2–5 | **New** | Audio | Pixabay Music or YouTube Audio Library — royalty-free, no attribution ambiguity | Not started |
| 10 | Soft typing/tap SFX | 4 | **New** | Audio | Pixabay Audio | Not started |
| 11 | Door latch/click SFX | 1 | **New** | Audio | Pixabay Audio | Not started — *resolved 2026-08-16: "keys set down" dropped, door-only cue confirmed to fit the locked shadow-passing visual (see §A, ASSET-MANIFEST.md)* |

5 new visual clips, all stock-sourced, all rights-clean, all selected and locked but **none downloaded yet** — this is the next production step. This lands inside the "4–6 clips is fine" range approved above (Option B for Shot 3 was rejected, keeping the count from growing to 6) — each one earns its place in the story, not chosen to fill a quota.

---

## C. Audio / voice / music concept

This is now the full pipeline test, not a VO-only experiment:

1. **Voice:** one continuous ~40s VO take, calm/measured pace, natural pauses at each beat boundary, a deliberate ~2s silence at the `[Atmosphäre]` mark, and extra space between the three closing fragments in Beat E.
2. **Ambience:** near-inaudible room tone under the whole sequence, shot-specific texture where useful (Shot 1: entryway; Shot 4: quieter, more intimate room tone).
3. **Score:** single sustained low tone, no melody, entering quietly in Shot 2, most present in Shot 4, resolving in Shot 5. Sourced from a clearly royalty-free library (Pixabay Music / YouTube Audio Library) — no ambiguous-license sources, consistent with "official APIs over scraping" / legally clean project philosophy.
4. **SFX:** door latch/click only (Shot 1 — "keys set down" dropped 2026-08-16, doesn't fit the locked shadow-passing visual, no keys/hook interaction shown), a subtle threshold-crossing tonal shift (Shot 3), soft typing taps (Shot 4) — all sparse, all subordinate to VO, none rhythmic/loop-like or gimmicky.
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
2. ~~Select the new stock clips~~ **Done — approved 2026-08-16, all 5 B-roll assets locked (see §A/§B); Option B for Shot 3 formally rejected in favor of the still-image treatment.**
3. ~~Download and verify the 5 stock clips~~ **Done — 2026-08-16.** All 5 downloaded, verified, and locked into `final-assets/` (per-asset spec + visual QA in `final-assets/ASSET-MANIFEST.md`). Shot 5's original candidate failed verification (non-European architecture) and was replaced same-day with a verified Halifax, UK candidate after a second, explicitly-European-targeted search round. Shot 1's SFX line corrected as a result of the verification pass (see §C).
4. **Source the audio bed** (ambience, score, SFX) from Pixabay Music/Audio or equivalent clearly-licensed sources.
5. **Record VO** for the full 40s Hook text, including the deliberate pauses and the "Chatbot" sync point.
6. **Extract exact timestamps** from the VO (alignment export or manual scrub) → the frame-offset table `HookSequence` is built against. Nothing in step 7 starts before this exists.
7. **Build `HookSequence.tsx`**, wiring in the timing table, the existing overlay components, the `BackgroundImage` focus-point extension, and the two new small components — only as each shot is actually built.
8. **Layer `<Audio>` tracks** (VO + ambience + score + SFX) with volume envelopes.
9. **Render a first full draft**, check against the quality bar in §F — once muted, once with sound.
10. **Iterate** — 1–2 rounds expected.
11. **Lock and document** — write `HookSequence.standards.md`, fold the "no depicted face" rule and voice-first/full-audio-in-Remotion process into `SCENE-STANDARDS.md`, and only then update `video/README.md`'s pipeline description. Further scene types/standards (QuoteScene, InsightScene, etc.) start **after** this, not before.

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

1. ~~Shot 3: Option A or Option B~~ **Resolved 2026-08-16 — Option A (mask-zoom on `scene-01-hallway.png`), see §A.**
2. Score source: confirm Pixabay Music / YouTube Audio Library is acceptable, or is there an existing licensed music tool for the channel not yet documented here?
3. Once this pilot is complete and validated, `video/README.md` and `SCENE-STANDARDS.md` need a pass to reflect the full-Remotion-audio pipeline — intentionally deferred, not forgotten.
4. ~~Shot 1's SFX line~~ **Resolved 2026-08-16** — "keys set down" dropped, door latch/click confirmed to still fit the visual. See §A/§B/§C.
5. ~~Shot 5 European-context failure~~ **Resolved 2026-08-16** — re-searched with explicitly European terms, 8 new candidates frame-checked, replaced with a verified Halifax, UK candidate. See §A/§B and `final-assets/ASSET-MANIFEST.md`.
6. **New, for future automated sourcing (see also `ASSET-SOURCING-STRATEGY.md`):** this round surfaced two failure modes worth building explicit checks for in any future automated pipeline — (1) an uploader/series whose whole catalog carries one unwanted regional or stylistic signature (an "own the check per-candidate, not per-series" lesson — a backup from the same uploader is not independent verification), and (2) "matched pair, same uploader" is not the same as "matched pair, same setup" — physical staging (handheld vs. desk-mounted) needs its own check, license/series metadata doesn't guarantee it.
