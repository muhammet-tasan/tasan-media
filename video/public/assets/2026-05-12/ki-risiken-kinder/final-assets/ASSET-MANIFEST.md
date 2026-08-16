# Scene 1 (Opening Hook) — B-Roll Asset Manifest

**Status:** All 5 selected clips downloaded and technically verified (2026-08-16). Shot 5's original candidate failed verification and was replaced same-day — see entry 5 below.
**Verified against:** `video/src/scenes/Scene01-Opening-Production-Plan.md`
**Verification method:** Files downloaded directly from each platform's public CDN download link (the same file the page's "Free Download" button serves), then inspected with `ffprobe`/`ffmpeg` (via the Recoverit-bundled binaries at `C:\Program Files\Wondershare\Recoverit\`) for authoritative resolution/fps/duration/codec, and spot-checked with extracted frames for visual content. Values below are measured from the actual downloaded file, not copied from the source page — see the sourcing shortlist (`scene-01-stock-candidates-shortlist.md`) for the page-listed specs that were unconfirmed at research time.

---

## 1. `scene-01-shot-01-arrival-shadow.mp4`

- **Shot:** Shot 1 — Arrival
- **Source:** Pexels, uploader SHVETS production
- **URL:** https://www.pexels.com/video/shadow-of-a-person-passing-by-7986624/
- **License:** Pexels License — free, royalty-free, commercial use, no attribution required
- **Resolution:** 1920×1080 (downloaded HD tier; UHD 2560×1440 / 4K 3840×2160 also available on the source if higher res is needed later)
- **FPS:** 25
- **Duration (measured):** 7.2s
- **Format:** MP4 / H.264
- **File size:** 4.2 MB

## 2. `scene-01-shot-02-living-room-evening.mp4`

- **Shot:** Shot 2 — The quiet evening
- **Source:** Pexels, uploader Florian Delée
- **URL:** https://www.pexels.com/video/soft-light-illuminating-a-cozy-living-space-34824046/
- **License:** Pexels License — free, royalty-free, commercial use, no attribution required
- **Resolution:** 1920×1080 (downloaded HD tier; UHD 2560×1440 / 4K 3840×2160 also available)
- **FPS:** 25
- **Duration (measured):** 9.8s
- **Format:** MP4 / H.264
- **File size:** 1.5 MB

## 3. `scene-01-shot-04-phone-typing.mp4`

- **Shot:** Shot 4 — The phone (primary/typing beat)
- **Source:** Pixabay, uploader magicmore
- **URL:** https://pixabay.com/videos/smartphone-keyboard-typing-message-169446/
- **License:** Pixabay Content License — free, commercial use, no attribution required
- **Resolution:** 4096×2160 (true 4K, confirmed by ffprobe — this is the only tier Pixabay exposed via direct page download without an API key)
- **FPS:** 25
- **Duration (measured):** 16.92s
- **Format:** MP4 / H.264
- **File size:** 31 MB — flagged for compression/re-encode before final render, see Open Points below

## 4. `scene-01-shot-04-phone-scrolling.mp4`

- **Shot:** Shot 4 — The phone (secondary/scrolling beat)
- **Source:** Pixabay, uploader magicmore (same uploader/series as #3)
- **URL:** https://pixabay.com/videos/smart-phone-mobile-phone-scrolling-169445/
- **License:** Pixabay Content License — free, commercial use, no attribution required
- **Resolution:** 3840×2160 (true 4K, confirmed by ffprobe)
- **FPS:** 25
- **Duration (measured):** 25.8s
- **Format:** MP4 / H.264
- **File size:** 36 MB — flagged for compression/re-encode before final render, see Open Points below

## 5. `scene-01-shot-05-halifax-neighbourhood-night.mp4`

- **Shot:** Shot 5 — Pull back
- **Source:** Pexels, uploader David Pickup | Advertising & Marketing
- **URL:** https://www.pexels.com/video/an-aerial-view-of-a-residential-area-at-night-28466799/
- **License:** Pexels License — free, royalty-free, commercial use, no attribution required
- **Resolution:** 1920×1080 (downloaded HD tier; UHD 2560×1440 / 4K 3840×2160 also available)
- **FPS:** 29.97 (30000/1001)
- **Duration (measured):** 17.82s
- **Format:** MP4 / H.264
- **File size:** 27.7 MB
- **Status: LOCKED (2026-08-16)** — replaces the rejected T Studio candidate, see history below.

### Superseded candidate (rejected, removed from `final-assets/`)

The original Shot 5 pick, `scene-01-shot-05-apartment-night.mp4` (Pexels, T Studio, https://www.pexels.com/video/footage-of-an-apartment-building-at-night-9431644/, 1920×1080/25fps/11.72s), **failed the European-context visual check** — see the Shot 5 finding below — and its same-uploader backup (9431584) failed identically. Both were downloaded, frame-inspected, and rejected on 2026-08-16. The file has been deleted from `final-assets/`; the URLs remain here and in the production plan for the record.

---

## Visual Verification Findings (2026-08-16)

Frames extracted at multiple timestamps per clip and inspected directly (not inferred from page descriptions/tags).

### Shot 1 — can it be credibly graded to evening?
**Verdict: Plausible, needs a grading test to confirm.** The clip shows a home entryway (coat rack with scarf/coats, a wall-mounted intercom/buzzer phone — a genuinely European residential detail) lit by strong, low-angle, hard-edged directional sunlight through the door glass. This is not neutral midday light — the low angle and hard shadow lines are consistent with early-morning or late-day sun, which gives real "bones" for an evening grade (reduced exposure, warmer/amber cast, softened highlights). It won't read as deep dusk without work, but "early evening, last daylight" is a credible target — matches "kommt nach Hause" better than expected. The shadow-passing motif itself is confirmed working: a clear, unmistakably human silhouette crosses the door around 3.5–4.5s, no face or identifiable figure, exactly as the candidate research described.

### Shot 2 — can Golden Hour be credibly graded toward evening?
**Verdict: Yes, lower risk than expected.** The room is already mostly in shadow/dim in the actual footage — only a small rectangular patch of warm light falls on the wall through an off-frame window; the rest of the frame (sofa back, TV, plants, framed art, dried pampas grass) is already dark, cozy, and lived-in. This reads much closer to "quiet evening apartment" *as-is* than the page's "golden hour" tag suggested. A light grade (soften/reduce that one bright patch, slight cool shift in the shadows, standard vignette) should be enough — this is not a heavy-lift color-correction problem.

### Shot 4 — do 4.3/4.4 visually match, and does the phone-glow work?
**Verdict: Partial — usable, but the "matched pair" needs real edit work, not just a same-uploader assumption.** Findings:
- Both are hands-only, no face, dark room, phone-glow visible — the core rule and mood both hold.
- **They are not the same physical setup.** The typing clip holds the phone up near face height; the scrolling clip has the phone lying flat on a wooden desk with a hand reaching down into frame. Cutting between them will read as a setup/location change, not one continuous beat, unless the edit (crop, camera distance, framing) deliberately smooths that over.
- **The scrolling clip shows a photo/camera-roll grid, not a chat thread.** It doesn't literally continue "she's texting" — it reads as generic "absorbed in phone," which still works as an abstract cutaway but isn't the "reading a reply" beat the plan described on paper.
- **Color glow differs slightly**: the typing clip trends blue-purple/magenta in places, the scrolling clip trends cleaner teal-blue. A unifying grade pass is needed to make them feel like one sequence.
- **On-screen UI is generic/unbranded** in both — a plain iOS-style keyboard and plain gray chat bubbles with placeholder text ("Hi", "how are you"), no app logo spotted. Low risk, but the chat text is legible if a viewer pauses — worth a final glance once cropped/composited, not a blocker.

### Shot 5 — does architecture/mood fit the European context?
**Original candidate FAILED, replacement LOCKED (2026-08-16).** The original candidate and its same-uploader backup both read as an Asian residential tower, not European — confirmed by direct frame inspection of both `9431644` and the backup `9431584` (T Studio, same building/complex, different angle): dense grid of small uniform windows with barred/grilled balconies, and — the clearest tell — a red/orange illuminated East Asian character sign glowing in one window, visible in both clips. Page tags later confirmed the location as Iran, not an East Asian country as first guessed from the visual alone — either way, not European. This was exactly the risk the original shortlist flagged and, on inspection, it didn't clear the bar.

**Re-sourced with explicitly European search terms** (city/country names, "European apartment building," etc.) and 8 new candidates frame-checked. Most failed on the same non-European-high-rise pattern, a touristy Old-Town street with visible shop signage, or wrong orientation/lighting. The replacement, `scene-01-shot-05-halifax-neighbourhood-night.mp4`, is confirmed via page tags ("Halifax," "United Kingdom," "Wainhouse Tower Halifax") and frame inspection: an aerial drone shot of an ordinary English terraced-house neighbourhood at dusk, dozens of genuinely lit windows, brick houses, slate roofs, streetlights, no people in focus, no text/logos. Clears every check the original failed. One framing difference from the original plan worth noting: this is a wide aerial neighbourhood shot (many houses), not a single building facade — arguably a stronger fit for "in vielen Familien" than the original single-building concept, but a different visual language than §A originally specified. Full candidate-by-candidate writeup (including the runner-up Warsaw candidate, which was verifiably Polish but stayed in daylight/sunset with no lit windows for its full 72s runtime) was shared with the user during sourcing; not duplicated here.

### Shot 1 SFX (per production plan request)
The plan's current Shot 1 SFX line ("door latch/click, keys set down") partly fits and partly doesn't, now that the visual is confirmed. The entryway/coat-rack/intercom setting still supports a **door latch/click** sound naturally (there's a real door in frame). **"Keys set down" doesn't fit** — no keys or hook interaction are shown, only a shadow crossing the frame. Recommend dropping the keys sound and keeping only the door latch/click, optionally adding a soft ambient footstep or coat-rustle as a secondary layer instead of the keys cue.

---

## Open Points / Decisions Needed

1. ~~Shot 5 asset does not pass the European-context check~~ **Resolved 2026-08-16** — replaced with the Halifax candidate (see entry 5 above). No further action needed unless the aerial-neighbourhood framing (vs. the originally planned single-building facade) turns out not to work once composited — revisit only if that becomes a real problem in Remotion.
2. **Shot 4 pair needs a genuine grade/crop pass**, not just trimming — treat as one editorial task, not two independent clips.
3. **Pixabay 4K files (31–36 MB each) are large** for a scene that only needs ~14s total — consider downscaling to 1080p or trimming to the actually-used range once exact in/out points are known from the VO timing, rather than shipping full 4K/full-duration files through the render pipeline.
4. **Shot 1 SFX line in the production plan should be updated** to drop "keys set down" (done — see plan).
