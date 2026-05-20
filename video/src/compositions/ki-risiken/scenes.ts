/**
 * KI und deine Kinder — Scene Compositions
 * Generated from: content/scenes/2026-05-12/ki-risiken-kinder-scenes.md
 * Agent: Remotion Scene Agent
 *
 * This file defines all scenes for the video with their props
 * Ready to be rendered: npx remotion render src/Root.tsx -c src/compositions/ki-risiken/scenes.ts
 */

import { colors } from '../../styles/colors';

export type SceneComposition = {
  type: string;
  props: Record<string, unknown>;
};

/**
 * MVP: Scene 4 — StatScene
 * Full composition array will be populated as more scenes are implemented
 */
export const kiRisikenScenes: SceneComposition[] = [
  // Scene 1: Evening Hook (placeholder — needs HookScene component)
  // { type: 'HookScene', props: { ... } }

  // Scene 2: Chatbot Revelation (placeholder — needs crossfade component)
  // { type: 'ChatbotScene', props: { ... } }

  // Scene 3–4: Merged — Statistic Reveal (MVP IMPLEMENTED)
  {
    type: 'StatScene',
    props: {
      stat: '2 / 3',
      description: 'der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich.',
      source: 'Bitkom 2025',
      backgroundColor: colors.warmWhite,
      durationInFrames: 420, // 14 seconds @ 30 FPS
    },
  },

  // Scene 5–11: Additional insight scenes (placeholders)
  // { type: 'InsightScene', props: { ... } }

  // Scene 12–16: Action and ending scenes (placeholders)
  // { type: 'QuoteScene', props: { ... } }
  // { type: 'ResourceScene', props: { ... } }
  // { type: 'EndScene', props: { ... } }
];

/**
 * MVP Status:
 * ✅ Scene 4 (StatScene) — IMPLEMENTED, ready to render
 * ⏳ Remaining 12 scenes — Awaiting component implementations
 *
 * Next steps:
 * 1. Implement QuoteScene component
 * 2. Implement HookScene component
 * 3. Implement InsightScene component
 * 4. Implement ResourceScene component
 * 5. Populate remaining scene props from ki-risiken-kinder-scenes.md
 */
