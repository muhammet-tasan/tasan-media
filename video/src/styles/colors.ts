/**
 * tasan-media Design System — Color Palette
 * All colors drawn from the Canva production guide for visual consistency
 * These are the ONLY colors used across all videos
 */

export const colors = {
  // Warm off-white backgrounds (calm, trustworthy)
  warmWhite: '#F8F6F3',
  warmWhite2: '#F9F7F5',
  warmWhite3: '#F4F1EC',

  // Dark backgrounds (serious, focused)
  darkGray: '#2A2D31',
  darkGray2: '#2D3E3D',

  // Deep navy (nighttime, intimate)
  darkNavy: '#1E2738',

  // Text colors
  white: '#FFFFFF',
  midGray: '#6B7677',    // Secondary text
  lightGray: '#9CA3A3',  // Captions, small text
  neutralGray: '#5B6C72', // Neutral statements

  // Accent (used sparingly for emphasis)
  warmAccent: '#D97706',
  warmGray: '#9A7C6B',
};

// CSS variable exports for ease of use
export const colorVars = {
  '--color-warm-white': colors.warmWhite,
  '--color-dark-gray': colors.darkGray,
  '--color-dark-navy': colors.darkNavy,
  '--color-white': colors.white,
  '--color-text': colors.darkGray2,
  '--color-text-secondary': colors.midGray,
};
