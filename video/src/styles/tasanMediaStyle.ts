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
