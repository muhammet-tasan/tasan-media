# Scene 1 Hook — Final Voice-Over Production Brief

- **Date:** 2026-08-25 (Take 01 accepted 2026-08-25)
- **Status:** **Take 01 recorded and accepted as the final voice for the current Scene 1 pilot.** Voice-first workflow — this VO is the timing source of truth for `HookSequence.tsx`. No audio bed, no timestamp/shot-timing work, and no Remotion code have started yet — those are separate, not-yet-begun next steps.
- **Voice:** Hannes — "Grounded and Intimate" (pilot channel voice, see decision in `content/voice/2026-08-19/scene1-voice-comparison-plan.md`)
- **Voice ID:** `GZckiELWRyqX481UWTDl`
- **Model:** Eleven v3
- **Script source:** `content/scripts/2026-05-12/ki-risiken-kinder-script.md`, section "Hook (0:00–0:40)"
- **Production plan reference:** `video/src/scenes/Scene01-Opening-Production-Plan.md`

---

## Settings (corrected 2026-08-25)

An earlier draft of this brief proposed invented numeric v2-style values (Stability/Similarity/Speaker Boost/etc.) as "starting settings" for v3. That was wrong and has been removed — no such settings were used to test or select Hannes, and none should be invented here either.

**Actual settings: Eleven v3, default / automatic voice control.** No manual Stability, Similarity, Style, or Speaker Boost values are set — this is exactly how all 4 A/B/C/D candidates were tested and how Hannes was selected (`scene1-voice-comparison-plan.md`). Use the same for the final Hook VO: select the voice and model, leave the voice-settings controls at whatever Eleven v3 defaults to, and generate.

| Parameter | Value |
|---|---|
| Voice | Hannes — `GZckiELWRyqX481UWTDl` |
| Model | Eleven v3 |
| Voice settings | Default / automatic (no manual overrides) |
| Inline audio/emotion tags (e.g. `[calm]`, `[whispers]`) | **Do not use** — text stays unedited, per your instruction |

---

## Text to paste into ElevenLabs (verbatim from the approved script — do not edit)

```
Deine Tochter kommt nach Hause. Sagt hi. Geht in ihr Zimmer.

Du hörst nichts. Kein Streiten, kein Musik hören, nichts. Und irgendwie — es fühlt sich okay an. Sie ist ruhig, du hast deinen Abend.

Was du nicht siehst: Sie tippt. Den ganzen Abend. Nicht mit einer Freundin. Mit einem Chatbot.

Sie erzählt ihm Dinge, die sie dir nicht sagt. Nicht weil sie dich nicht mag. Sondern weil er nie genervt klingt. Nie beschäftigt ist. Immer antwortet. Immer auf ihrer Seite.

Das passiert gerade. In vielen Familien. Meistens unbemerkt.
```

**Eine bewusste Auslassung:** die Regieanweisung `[Atmosphäre: stilles Zimmer, bläuliches Handylight]` — zwischen "Immer auf ihrer Seite." und "Das passiert gerade." — ist **nicht** im Text enthalten. Das ist kein gesprochener Text, sondern laut `Scene01-Opening-Production-Plan.md` (Shot 4) ein ~2s stiller Atmosphäre-Tail, nur Bild, kein VO. Würde man sie mit einfügen, würde Hannes die Regieanweisung vorlesen. Der Absatzumbruch an der Stelle bleibt erhalten, damit die Pause trotzdem sitzt — das ist eine Entscheidung, um den Text sprechbar zu halten, keine inhaltliche Textänderung. Sag Bescheid, falls die Zeile tatsächlich vertont werden soll.

No `<break>` tags or emotion tags added, per your "don't change the text" instruction — plain paragraph breaks only, same approach as the A/B/C/D comparison round.

---

## File naming and location

Save the generated take(s) into this folder:

```
content/voice/2026-08-25/scene1-hook-vo/
```

Naming (increment the take number if you re-record):

```
scene1-hook-vo-hannes-v3-take01.mp3
scene1-hook-vo-hannes-v3-take02.mp3
...
```

Once a take is accepted as final, note it explicitly in this file (add a "Final take" line below) so downstream steps (timestamp extraction, `HookSequence.tsx`) reference the right file unambiguously.

**Final take:** `scene1-hook-vo-hannes-v3-take01.mp3` — **accepted 2026-08-25** as the final voice for the current Scene 1 pilot. This is the file downstream steps (timestamp extraction, `HookSequence.tsx`) should reference.

---

## Voice-first workflow — what happens after this VO exists

Per `Scene01-Opening-Production-Plan.md` and `PROJECT_STATUS.md`, in order:

1. ✅ (this doc) Prepare final Hook VO text, voice, model, settings
2. ✅ Generate and review take(s) in ElevenLabs, pick the final one — **Take 01 accepted 2026-08-25**
3. ⬜ Extract exact VO timestamps from the accepted take → build the frame-offset table (shot cut points, the "Chatbot" sync point in particular — see Shot 3/4 in the production plan) — **not started yet**
4. ⬜ Source the audio bed (ambience, score, SFX) — only after step 3, matched to the actual voice — **not started yet, out of scope for this step**
5. ⬜ Build `HookSequence.tsx` — **not started yet, out of scope for this step**

Nothing in steps 4–5 is touched until you've picked a final take and we have real timestamps — voice-first stays the rule.
