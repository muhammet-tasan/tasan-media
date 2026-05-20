/**
 * tasan-media Design System — Motion & Animation Presets
 * All timings are in FRAMES (at 30 FPS)
 * Reference: 30 frames = 1 second
 */

export const motion = {
  // Basic entrance animations
  fadeIn: {
    durationFrames: 12, // 0.4 seconds
    easing: 'easeInOut' as const,
  },

  fadeInSlow: {
    durationFrames: 15, // 0.5 seconds (more emphasis)
    easing: 'easeInOut' as const,
  },

  fadeOut: {
    durationFrames: 9, // 0.3 seconds
    easing: 'easeInOut' as const,
  },

  // Slide animations
  slideUp: {
    durationFrames: 12, // 0.4 seconds
    easing: 'easeOut' as const,
  },

  slideRight: {
    durationFrames: 15, // 0.5 seconds (exit transition)
    easing: 'easeInOut' as const,
  },

  // Crossfade (text replacement)
  crossfade: {
    outFrames: 9,    // 0.3s fade out
    inFrames: 12,    // 0.4s fade in
  },

  // Zoom (subtle, for tension)
  subtleZoom: {
    from: 1.0,
    to: 1.05, // 5% zoom
    durationFrames: 300, // Over full scene if used
  },

  // Stagger delays (for cascade animations)
  stagger: {
    short: 6,      // 0.2 seconds between elements
    medium: 12,    // 0.4 seconds
  },

  // Transition timing between scenes
  transition: {
    fadeToBlack: {
      durationFrames: 30, // 1 second
    },
    cut: {
      durationFrames: 0,  // Instant
    },
  },
};

// Type for animation styles
export type AnimationStyle = 'fadeOnly' | 'cascade' | 'crossfade' | 'none';

/**
 * Get animation timing for a given style
 * Used by components to apply consistent timing
 */
export const getAnimationTiming = (
  style: AnimationStyle,
  sceneDurationFrames: number
) => {
  switch (style) {
    case 'fadeOnly':
      return {
        enterDelay: 0,
        enterDuration: motion.fadeIn.durationFrames,
      };
    case 'cascade':
      return {
        firstElementDelay: 0,
        firstElementDuration: motion.fadeIn.durationFrames,
        secondElementDelay: motion.stagger.short,
        secondElementDuration: motion.slideUp.durationFrames,
      };
    case 'crossfade':
      return {
        outDuration: motion.crossfade.outFrames,
        inDuration: motion.crossfade.inFrames,
        triggerFrame: motion.crossfade.outFrames,
      };
    case 'none':
      return {}; // No animation
    default:
      return {};
  }
};
