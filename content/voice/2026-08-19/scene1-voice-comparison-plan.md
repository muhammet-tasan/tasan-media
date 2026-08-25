# Scene 1 Voice Comparison Plan

- **Date:** 2026-08-19 (candidates locked 2026-08-25, pilot voice decided 2026-08-25, Hook VO Take 01 accepted 2026-08-25)
- **Status:** **Decision made — see "Decision" section below.** Hannes selected as the pilot channel voice for the first video. Not yet locked as a permanent, unchangeable TASAN-MEDIA channel standard — validation happens against the finished Scene 1 Hook render. The final Scene 1 Hook VO (Take 01) has been recorded and accepted — see `content/voice/2026-08-25/scene1-hook-vo/hook-vo-production-brief.md`.
- **Scope:** Scene 1 ("KI-Risiken für Kinder") Opening-Hook pilot, per `video/src/scenes/Scene01-Opening-Production-Plan.md` step 4 ("Select the permanent channel voice / voice provider").

---

## Decision (2026-08-25)

**Pilot channel voice: Hannes — "Grounded and Intimate."**

| | |
|---|---|
| Voice Name | Hannes |
| Voice ID | `GZckiELWRyqX481UWTDl` |
| Model for production | **Eleven v3** |
| Status | **Pilot channel voice** for the first video, chosen from the A/B/C/D blind comparison (candidates A–D above). **Not** a permanent, unchangeable channel standard yet. |
| Validation gate | The decision is validated against the finished, rendered Scene 1 Hook (`HookSequence.tsx`, once built) — not locked permanently until that render is reviewed. |

**Correction (2026-08-25):** the A/B/C/D comparison below was actually run on **Eleven v3** for all four candidates, not Eleven Multilingual v2 as an earlier draft of this document stated. Hannes won the direct v3 comparison — Model, Settings, and Generation Instructions sections below have been corrected to match. No model gap: Hannes's production model (v3) is the same model all four candidates were judged under.

See `content/voice/2026-08-25/scene1-hook-vo/hook-vo-production-brief.md` for the full production VO brief (text, settings, file naming, workflow).

---

## Provider decision

**ElevenLabs**, adopted provisionally for this pilot.

Rationale (full provider comparison done 2026-08-19, not persisted as a separate file — see this session's summary):
- 2026 reviews consistently rate German as one of ElevenLabs' strongest languages, including correct handling of German compound words (a common TTS weak point).
- Positioned specifically for narrative/documentary content, not just neutral announcement-style TTS (unlike Azure/Google/Polly, which read as more neutral/"glatt").
- API supports per-voice, per-project settings (Stability/Similarity/Style) that can be fixed and reused — satisfies the "consistent voice across many videos" and "reproducible via API long-term" requirements.
- Growth path exists (Professional Voice Cloning) if the channel later wants a fully unique, non-library voice — without switching providers.

Alternatives considered and set aside for now: Azure/Google/Amazon (cheaper, more neutral/less warm), WellSaid Labs (weak German coverage), Play.ht (mixed quality, podcast-focused), Cartesia (optimized for real-time conversational latency, not this use case), Murf.ai (corporate-explainer character).

**Not yet decided:** the specific voice within ElevenLabs. That is an explicit human decision — see below.

---

## Candidate selection — human task

Direct API/browser access to the current ElevenLabs Voice Library was not reliably available in-session (the public marketing page does not expose the real filterable library; the authenticated app view (`elevenlabs.io/app/voice-library`) requires login and dynamic interaction). Per explicit instruction, no voice names or IDs were invented.

**Selection criteria** (filter Language: German, Use Case: Narration/Documentary/Informative & Educational where tagged):
- Favor tags/descriptions: calm, warm, mature, narration, documentary, trustworthy
- Avoid tags/descriptions: energetic, young, commercial, advertisement, dramatic, character
- Pick 4 candidates with real contrast (not 4 similar-sounding voices), e.g.: one deep/calm male, one neutral-authoritative female, one warmer-but-still-serious voice (either), one "wildcard" that stands out on first listen

**Candidates locked 2026-08-25** (selected by the human directly in the ElevenLabs app — names/IDs below as provided, not independently verified against the live library):

| Label | Voice Name | Voice ID | Characterization (as tagged in ElevenLabs) |
|---|------------|----------|-------------------|
| A | Daniel Dark | `5hobNnfFWAwxjwZSecAE` | Crime Narrator |
| B | Ralf Benz | `jJxw1Rvgr2c60UdJHPBn` | Premium Audiobook |
| C | Hannes | `GZckiELWRyqX481UWTDl` | Grounded and Intimate |
| D | Romolus | `vzQig4HUz4S19MKnT0jp` | The Storyteller from Ried |

Real contrast is present across the four (crime-narration edge vs. polished audiobook vs. intimate/grounded vs. distinct regional storyteller character) — satisfies the "not 4 similar-sounding voices" selection criterion above.

---

## Test text (30–40s, drawn from the real script)

Source: `content/scripts/2026-05-12/ki-risiken-kinder-script.md`, section "Was wirklich passiert" (0:40–2:30). Chosen because it exercises all required elements in one short passage: calm narration, an emotional beat, a technical/proper-noun term, a statistic, and short pauses.

```
Zwei Drittel der Jugendlichen in Deutschland nutzen KI-Chatbots
mindestens einmal pro Woche.

Es gibt Apps, die heißen Character.AI oder Replika. Die sind nicht
dafür gemacht, Fragen zu beantworten. Die sind dafür gemacht, eine
Beziehung aufzubauen.

Und sie sind immer verfügbar. Nachts um zwei. Wenn du weinst und
nicht weißt warum. Wenn du nicht willst, dass jemand fragt, was los
ist.

Ein Drittel der Jugendlichen, die sich einsam fühlen oder kämpfen —
wenden sich zuerst an einen Chatbot.
```

Coverage:
- Calm narration: overall baseline tone
- Emotional passage: "Nachts um zwei. Wenn du weinst und nicht weißt warum…"
- Technical term / proper noun: "Character.AI", "Replika", "Chatbot" (tests English brand-name pronunciation inside German flow)
- Statistic: "Zwei Drittel", "Ein Drittel"
- Short pauses: two plain paragraph breaks (blank line) between passages. **Model used: Eleven v3** (see settings table below, corrected 2026-08-25). No `<break>` SSML tags used — plain paragraph breaks only, kept simple and consistent across all 4 generations.
- Runtime target: ~30–40s per candidate (matches the segment length used to lock this passage on 2026-08-19).

**Note:** this same passage is a *candidate-comparison* text only — it is not the Scene 1 Hook VO script itself (that is the 40s Hook text in `Scene01-Opening-Production-Plan.md` / the script's "Hook (0:00–0:40)" section). Do not use this comparison audio as final Scene 1 VO.

---

## Comparison settings (identical across all 4 candidates — CORRECTED 2026-08-25)

**Correction:** an earlier draft of this section documented invented v2-style numeric settings (Stability 60%, Similarity 80%, Style 10%, Speaker Boost on) that were never actually used. Per the human's direct correction: all 4 candidates were tested on **Eleven v3** using **v3's default/automatic voice settings** — no manual Stability/Similarity/Style/Speaker Boost values were dialed in, either because v3 doesn't expose them in that form in the ElevenLabs UI used, or because v3 handles them automatically. This document does not state specific numeric values for those parameters, since none were actually set.

These are neutral comparison settings for this first round only — **not** a final TASAN-MEDIA channel standard. No per-voice tuning happens in this round; whatever the v3 default produces for a given candidate stays as-is so the comparison is fair. Tuning happens only for the 1–2 finalists, after this round.

| Parameter | Value | Rationale |
|---|---|---|
| Model | **Eleven v3** | Locked for this round — identical for all 4 generations. |
| Voice settings | **Eleven v3 default / automatic control** — no manual Stability, Similarity, Style, or Speaker Boost values entered | Matches what the human actually used to test and compare all 4 candidates; documenting invented numeric values instead would misrepresent the real comparison conditions. |

**Rule for this round:** exact same text, exact same model, exact same (default/automatic) settings for all 4 candidates. No candidate gets an individually adjusted setting in this round, even if the default sounds slightly off for that voice — that adjustment belongs to the finalist-tuning stage, not here.

---

## Test files — naming and location

| Label | Candidate | Output filename |
|---|---|---|
| A | Daniel Dark | `A-daniel-dark.mp3` |
| B | Ralf Benz | `B-ralf-benz.mp3` |
| C | Hannes | `C-hannes.mp3` |
| D | Romolus | `D-romolus.mp3` |

Save all 4 files into `content/voice/2026-08-25/scene1-candidate-comparison/` (new dated folder for this comparison round, per the project's date-based output convention — separate from this plan doc's original 2026-08-19 folder since the samples are generated today).

---

## Generation instructions (historical record — comparison already completed by the human)

No ElevenLabs API key is configured in this project and no direct API/browser access was available in this session, so this comparison was run entirely by the human, outside this session. The steps below are kept as the record of how it was done (corrected 2026-08-25 to match what was actually used), not as an outstanding to-do:

1. **Speech Synthesis** / Text-to-Speech workspace in the ElevenLabs app.
2. For **each** of the 4 candidates:
   a. Voice selected by its **Voice ID** (e.g. `5hobNnfFWAwxjwZSecAE` for Daniel Dark).
   b. **Model:** Eleven v3.
   c. **Voice settings:** left at Eleven v3's default / automatic control — no manual Stability/Similarity/Style/Speaker Boost values entered.
   d. **Text:** the exact test text from the "Test text" section above, unedited, identical across all 4.
   e. Generated and downloaded as MP3, renamed to the exact filename from the table below, saved to `content/voice/2026-08-25/scene1-candidate-comparison/`.
3. Same text, same model, same (default) settings for all 4 — no per-candidate tuning in this round.
4. Blind A/B/C/D listen done against the channel target profile (modern/YouTube-tauglich, natürlich, vertrauenswürdig, spannend, leicht mysteriös/futuristisch, intelligent, nicht wie Werbung, nicht überdramatisch, angenehm über 10–15 Min.).

---

## Next step

Comparison complete, decision made (see "Decision" section above: Hannes, Eleven v3, `GZckiELWRyqX481UWTDl`, pilot channel voice — not yet a permanent standard). Final Scene 1 Hook VO recorded and **Take 01 accepted (2026-08-25)** — see `content/voice/2026-08-25/scene1-hook-vo/hook-vo-production-brief.md`. Next: extract exact VO timestamps from Take 01 → build the frame-offset table (voice-first workflow). No audio bed and no Remotion code yet.
