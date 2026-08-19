# Scene 1 Voice Comparison Plan

- **Date:** 2026-08-19
- **Status:** Provider decided (provisional). Candidate selection in progress — human task, not yet complete.
- **Scope:** Scene 1 ("KI-Risiken für Kinder") Opening-Hook pilot, per `video/src/scenes/Scene01-Opening-Production-Plan.md` step 4 ("Select the permanent channel voice / voice provider").

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

**Candidates (fill in once selected):**

| # | Voice Name | Voice ID | Characterization | Library Link |
|---|------------|----------|-------------------|--------------|
| 1 | _pending_ | _pending_ | _pending_ | _pending_ |
| 2 | _pending_ | _pending_ | _pending_ | _pending_ |
| 3 | _pending_ | _pending_ | _pending_ | _pending_ |
| 4 | _pending_ | _pending_ | _pending_ | _pending_ |

---

## Test text (30–40s, drawn from the real script)

Source: `content/scripts/2026-05-12/ki-risiken-kinder-script.md`, section "Was wirklich passiert" (0:40–2:30). Chosen because it exercises all required elements in one short passage: calm narration, an emotional beat, a technical/proper-noun term, a statistic, and short pauses.

```
Zwei Drittel der Jugendlichen in Deutschland nutzen KI-Chatbots
mindestens einmal pro Woche.

Es gibt Apps, die heißen Character.AI oder Replika. Die sind nicht
dafür gemacht, Fragen zu beantworten. Die sind dafür gemacht, eine
Beziehung aufzubauen.

<break time="0.6s" />

Und sie sind immer verfügbar. Nachts um zwei. Wenn du weinst und
nicht weißt warum. Wenn du nicht willst, dass jemand fragt, was los
ist.

<break time="0.6s" />

Ein Drittel der Jugendlichen, die sich einsam fühlen oder kämpfen —
wenden sich zuerst an einen Chatbot.
```

Coverage:
- Calm narration: overall baseline tone
- Emotional passage: "Nachts um zwei. Wenn du weinst und nicht weißt warum…"
- Technical term / proper noun: "Character.AI", "Replika", "Chatbot" (tests English brand-name pronunciation inside German flow)
- Statistic: "Zwei Drittel", "Ein Drittel"
- Short pauses: two `<break time="0.6s" />` markers (Eleven v3 SSML). If staying on v2, replace with a paragraph break + em dash instead — v2 does not reliably honor SSML breaks.

**Note:** this same passage is a *candidate-comparison* text only — it is not the Scene 1 Hook VO script itself (that is the 40s Hook text in `Scene01-Opening-Production-Plan.md` / the script's "Hook (0:00–0:40)" section). Do not use this comparison audio as final Scene 1 VO.

---

## Comparison settings (identical across all 4 candidates)

| Parameter | Value | Rationale |
|---|---|---|
| Model | Eleven Multilingual v2 (or v3, if used — must be identical across all 4) | Reproducibility for future automation over newest features |
| Stability | 60% | Calm and consistent without going flat/monotone |
| Similarity Boost | 80% | Stays close to the voice's original timbre |
| Style Exaggeration | 10% | Deliberately low — avoids "overdramatic," matches "warm, not overemotional" |
| Speaker Boost | On | Improves clarity; no meaningful downside for offline rendering |
| Speed | 1.0× | Neutral baseline; tempo tuning happens after voice selection |

---

## Next step

Human selects 4 candidates in the ElevenLabs Voice Library per the criteria above, fills in the candidate table, generates the test text with identical settings for each, and does a blind comparison listen against: not-typically-AI-sounding, credible, warm-not-overemotional, fits AI/tech/society/family topics, distinct/recognizable. Final voice selection remains a human decision.
