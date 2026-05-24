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
export const sceneStandards = {
  // Typography (Manrope font family)
  typography: {
    primary: {
      size: 112,
      weight: 700,
      lineHeight: 1.0,
      letterSpacing: -2,
      color: '#F5F2EC',
      opacity: 0.96,
      shadowColor: 'rgba(0, 0, 0, 0.35)',
      shadowBlur: 20,
    },
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
    caption: {
      size: 24,
      weight: 400,
      lineHeight: 1.4,
      letterSpacing: 0.5,
      color: '#F5F2EC',
      opacity: 0.80,
      shadowBlur: 0,
    },
  },

  // Composition (lower-left third)
  positioning: {
    lowerLeftThird: {
      left: 180,      // px from left edge
      bottom: 190,    // px from bottom edge
      maxWidth: 780,  // px max text width
      textAlign: 'left',
    },
  },

  // Motion timing (in frames @ 30fps)
  motion: {
    fadeIn: 18,        // 0.6s fade-in
    fadeOut: 18,       // 0.6s fade-out
    pause: 21,         // 0.7s breath between elements
    minHold: 45,       // 1.5s minimum hold duration
    easing: 'exp',     // Easing.inOut(Easing.exp) for all text/motion
    kenBurnsZoom: 0.015, // 1.5% total push-in over scene
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
    bottomGradient: { direction: 'bottom', opacity: 0.48 },
    vignette: { opacity: 0.25, strength: 0.55 },
    grain: { opacity: 0.08, scale: 1 },
    textReadabilityGradient: { opacity: 0.24 }, // left-bottom for hook-style text
  },
};
