/**
 * tasan-media Unified Style System
 * Re-exports the design system modules for convenience
 * Import: import { colors, typography, motion, style } from '../styles/tasanMediaStyle'
 */

export { colors } from './colors';
export { typography, getTypography, type FontSize } from './typography';
export { motion, getAnimationTiming, type AnimationStyle } from './motion';

// Unified style constants
export const style = {
  // Safe area (5% padding on 1920×1080)
  safeArea: {
    horizontal: 96,  // 5% of 1920
    vertical: 80,    // ~7% of 1080
  },

  // Text constraints
  maxTextWidth: 1400,       // max readable line width
  mobileReadableMinSize: 40, // min font size for mobile viewers

  // Canvas/composition specs
  compositionWidth: 1920,
  compositionHeight: 1080,
  fps: 30,

  // Responsive breakpoints (if needed for future web components)
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1920,
  },
};

// Reusable scene standards (from SCENE-STANDARDS.md)
// Each scene type has its own visual language (see SCENE-STANDARDS.md) — values
// are grouped per scene type rather than forced into one shared shape.
export const sceneStandards = {
  // Typography (Manrope font family)
  typography: {
    // HookScene primary hook text
    hookPrimary: {
      size: 112,
      weight: 700,
      lineHeight: 1.0,
      letterSpacing: -2,
      color: '#F5F2EC',
      opacity: 0.96,
      shadowColor: 'rgba(0, 0, 0, 0.35)',
      shadowBlur: 20,
    },
    // Generic secondary text (reserved for future scenes, e.g. InsightScene)
    secondary: {
      size: 48,
      weight: 400,
      lineHeight: 1.2,
      letterSpacing: 0,
      color: '#F5F2EC',
      opacity: 0.92,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowBlur: 12,
    },
    // Generic caption/source text
    caption: {
      size: 24,
      weight: 400,
      lineHeight: 1.4,
      letterSpacing: 0.5,
      color: '#F5F2EC',
      opacity: 0.80,
      shadowBlur: 0,
    },
    // StatisticScene: dominant statistic number
    statisticPrimary: {
      size: 160,
      weight: 700,
      lineHeight: 0.95,
      letterSpacing: -3,
      color: '#F5F2EC',
      shadowColor: 'rgba(0, 0, 0, 0.45)',
      shadowBlur: 24,
    },
    // StatisticScene: description beneath the statistic
    statisticDescription: {
      size: 52,
      weight: 400,
      lineHeight: 1.25,
      letterSpacing: 0,
      color: '#F5F2EC',
      shadowColor: 'rgba(0, 0, 0, 0.35)',
      shadowBlur: 16,
    },
    // StatisticScene: source attribution (bottom-right)
    statisticSource: {
      size: 24,
      weight: 400,
      lineHeight: 1.4,
      letterSpacing: 0.5,
      color: '#F5F2EC',
      opacityMultiplier: 0.75, // applied on top of the fade opacity
      shadowBlur: 0,
    },
  },

  // Composition (per scene type — see SCENE-STANDARDS.md "Composition Standards")
  positioning: {
    // HookScene: lower-left third
    lowerLeftThird: {
      left: 180,      // px from left edge
      bottom: 190,    // px from bottom edge
      maxWidth: 780,  // px max text width
      textAlign: 'left' as const,
    },
    // StatisticScene: center-left dominance
    statistic: {
      stat: { left: 260, bottom: 480, maxWidth: 900 },
      description: { left: 260, bottom: 310, maxWidth: 820 },
      source: { right: 260, bottom: 100 },
    },
  },

  // Motion timing (in frames @ 30fps)
  motion: {
    bgFadeIn: 15,        // 0.5s background fade-in (shared by all scenes)
    fadeIn: 18,          // 0.6s text fade-in
    fadeOut: 18,         // 0.6s text fade-out
    primaryHold: 51,     // 1.7s primary text hold
    pause: 21,           // 0.7s breath between elements
    minHold: 45,         // 1.5s minimum hold duration
    easing: 'exp',       // Easing.inOut(Easing.exp) for all text/motion
    kenBurnsZoom: 0.015, // HookScene: 1.5% total push-in over scene
    ambientDrift: 0.008, // StatisticScene: 0.8% total drift (more subtle than Hook)
  },

  // Scene durations (in frames @ 30fps)
  duration: {
    hook: 210,         // 7 seconds (opening hook like HookScene)
    statistic: 210,    // 7 seconds (stat slide with description)
    quote: 150,        // 5 seconds (full-screen quote)
    insight: 180,      // 6 seconds (headline + explanation)
    action: 150,       // 5 seconds (call-to-action)
    ending: 120,       // 4 seconds (closing moment)
  },

  // Overlay settings (premium documentary aesthetic)
  overlays: {
    // HookScene
    bottomGradient: { direction: 'bottom' as const, opacity: 0.48 },
    textReadabilityGradient: { opacity: 0.24 }, // left-bottom custom gradient (Hook)
    // StatisticScene
    statisticGradient: { direction: 'both' as const, opacity: 0.62 },
    statisticReadabilityGradient: { opacity: 0.3 }, // center-left custom gradient
    statisticBackgroundBrightness: 50, // required B-roll is heavily darkened
    // Shared across all scenes
    vignette: { opacity: 0.25, strength: 0.55 },
    grain: { opacity: 0.08, scale: 1 },
  },
};
