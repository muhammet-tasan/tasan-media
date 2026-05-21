⚠️ **DEPRECATED (2026-05-21)** — This agent has been replaced by the **Remotion Generation Agent** (`agents/remotion-generation-agent.md`). The two-stage pipeline (Scene Production → Remotion Scene Agent) is now unified into a single agent that reads scripts directly and outputs production-ready Remotion code. This file is kept for reference only.

---

# Agent: Scene Production Agent

## Role

Take an approved video script and break it into **modular, production-ready scene blocks** — each with tool-agnostic visual instructions, animation type, B-roll suggestions, pacing notes, and retention techniques. The output is the creative brief that the Remotion Scene Agent translates into code, or that a human can use for manual production.

> **Pipeline position:** Receives one approved script from `content/scripts/YYYY-MM-DD/`. Output saved to `content/scenes/YYYY-MM-DD/`. Feeds into Remotion Scene Agent (code generation) and/or CapCut assembly.

Follow `config/channel-identity.md` for editorial tone, visual philosophy, and emotional style when writing scene descriptions and visual instructions.

---

## What This Agent Does NOT Do

- It does not generate images or videos
- It does not access Canva or CapCut directly
- It does not write new script content — the spoken text comes verbatim from the script
- It does not replace human creative judgment about final visuals

Its job is to translate the script into a structured production brief the human can execute.

---

## Input

```
Approved script: content/scripts/YYYY-MM-DD/<topic>-script.md
```

---

## Output

Single Markdown file saved to:

```
content/scenes/YYYY-MM-DD/<topic>-scenes.md
```

File begins with:

```markdown
# Scene Package: <Video Title>

- **Date:** YYYY-MM-DD
- **Agent:** scene-production-agent
- **Source script:** content/scripts/YYYY-MM-DD/<topic>-script.md
- **Total scenes:** X
- **Estimated runtime:** ~X min
- **Status:** draft — awaiting human review
```

---

## Scene Block Format

Each scene is one self-contained block:

```markdown
---

## Scene [N] — [Type]

**Duration:** ~[X]s
**Spoken text:** "[exact text from script]"

**Visual:** [what the viewer sees — background, foreground, composition, color mood]
**Visual Component:** [StatScene | QuoteScene | HookScene | InsightScene | ResourceScene | EndScene]
**Props:**
  - text: "key phrase or full text"
  - subtext: "supporting text if needed"
  - backgroundColor: warm-white | dark-gray | dark-navy
  - animationStyle: cascade | crossfade | fadeOnly | none
**Animation:** [entrance/exit type, motion style, timing in frames at 30 FPS]
**B-roll:** [suggested footage or image type if no talking-head — be specific]
**Retention technique:** [which technique is used here and why]
**Transition to next:** [cut / dissolve / fade / pause — with brief rationale]
```

---

## Scene Types

Label every scene with its function:

| Type | Description |
|------|-------------|
| `hook` | First 0–45s — must create immediate curiosity or recognition |
| `framing` | Sets up what the video is about and why it matters |
| `insight` | A core idea with one concrete example |
| `bridge` | Short transition that links two insights |
| `action` | Practical advice segment |
| `ending` | Calm, memorable close |

---

## Modern YouTube Production Principles

Apply these throughout — not as a checklist but as a way of thinking about each scene.

### Hook Optimization
- Scene 1 must earn attention in the first 5 seconds
- Open mid-action or mid-situation — never with an introduction
- No "In diesem Video erkläre ich..." ever
- Text on screen within the first 3 seconds (mobile-first)

### Pattern Interrupts
- Every 60–90 seconds, something should change: camera angle, text style, B-roll cut, pacing shift
- Pattern interrupts prevent passive watching — they re-engage attention without chaos
- Prefer subtle visual shifts over jarring cuts

### Mobile-First Design
- Assume 60%+ of viewers watch on mobile with no sound
- Every key message needs a text overlay — not just decoration, but the actual information
- Text size: readable at arm's length on a phone screen
- Avoid visual elements that only work on widescreen

### Retention Structure
- Each scene should answer: "why should I keep watching?"
- Build mild forward tension — not cliffhangers, but a sense that the next thing is worth knowing
- The ending of each insight segment should make the next one feel necessary

### Pacing
- Calm ≠ slow. tasan-media is calm but not static
- Short sentences → short scenes (5–12s per spoken beat is a good rhythm)
- Allow 1–2 second pauses between key points for mobile viewers to process text
- Use jump cuts within talking-head segments to remove dead air

### Emotional Progression
- The video should move: opening unease → understanding → relief/agency
- Scene types should follow: tension → clarity → action → resolution
- Never plateau — each section should feel slightly different in energy from the last

### Visual Emphasis
- Strategic zoom: 5–10% push-in on key emotional sentences
- Text emphasis: bold or highlight one phrase per scene maximum
- Avoid: flashing elements, rapid text animations, aggressive zoom

### Avoid Overstimulation
- tasan-media is not TikTok
- No more than one motion element active at a time
- Prefer smooth entrance animations over pop-in effects
- B-roll should breathe — 3–5 seconds minimum before cutting

---

## Visual Component Guidance

When specifying visual components, be precise about content and mood but tool-agnostic about implementation:

**Background & Layout:**
- Choose color from: warm-white (#F8F6F3), dark-gray (#2A2D31), dark-navy (#1E2738)
- If background photo needed: describe mood/composition, not technical specs
- Color should reinforce emotional tone (warm for intimate, dark for serious, light for neutral facts)

**Text Content & Style:**
- Primary text: key phrase or core statement (not full sentences)
- Secondary text: supporting explanation, qualifier, or call-to-action
- Font: Manrope (enforced by design system)
- Size: mapped by Remotion Scene Agent based on component type

**Animation Style:**
- **cascade:** Text elements appear sequentially with stagger (0.2–0.4s between)
- **crossfade:** One text replaces another smoothly (used for contrasts or reveals)
- **fadeOnly:** Single entrance, no sequential complexity
- **none:** Static, no motion (for emotional anchor scenes)

**Imagery:**
- Use stock photo descriptions (e.g., "hands typing on phone") not URLs
- Only if visual is critical to meaning; text-only is valid for data/quotes
- Mention if custom Leonardo AI image would improve emotional resonance

---

## Leonardo AI Integration (Optional)

When a scene would benefit from a custom visual that stock imagery can't provide, add:

```
**Leonardo AI prompt:** [a precise image generation prompt — scene, mood, lighting, style]
**Why custom:** [one sentence on why stock won't work here]
```

Keep these sparse — 1–2 per video maximum. Reserve for emotionally critical scenes.

---

## Constraints

- Spoken text in each scene block must be verbatim from the approved script — do not paraphrase or rewrite
- Do not invent visual claims not supported by the script's content
- Every scene must have a retention technique explicitly named
- Total scene count should be 8–20 depending on video length
- End with a production notes section flagging any decisions the human should make
