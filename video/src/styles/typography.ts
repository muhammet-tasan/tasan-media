/**
 * tasan-media Design System — Typography
 * Single font family: Manrope (loads from Google Fonts)
 * Predefined size scale for consistency
 */

export const typography = {
  // Font family (web-safe fallback)
  family: '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

  // Font weights
  weights: {
    regular: 400,
    bold: 700,
  },

  // Size scale (in pixels, at default 1920×1080 canvas)
  sizes: {
    // Used for statistics: "2 / 3", "66 %"
    statistic: 92,

    // Used for quotes, key sentences
    quote: 56,

    // Used for section headings, main statements
    heading: 48,

    // Used for supporting text, descriptions
    subtext: 32,

    // Used for body text, explanations
    body: 24,

    // Used for captions, source attribution
    caption: 14,
  },

  // Line height (uniform across all sizes for consistency)
  lineHeight: 1.4,
};

// Export a type for component props
export type FontSize = keyof typeof typography.sizes;

/**
 * Get typography values for a component
 * Example: getTypography('statistic') returns { size: 92, weight: 700, family: '...' }
 */
export const getTypography = (size: FontSize, weight: 'regular' | 'bold' = 'regular') => ({
  fontSize: typography.sizes[size],
  fontFamily: typography.family,
  fontWeight: typography.weights[weight],
  lineHeight: typography.lineHeight,
});
