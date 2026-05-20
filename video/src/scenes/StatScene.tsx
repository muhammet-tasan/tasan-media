import React from 'react';
import { AbsoluteFill } from 'remotion';
import { FadeIn } from '../components/FadeIn';
import { SlideUp } from '../components/SlideUp';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { motion } from '../styles/motion';

interface StatSceneProps {
  stat: string; // e.g., "2 / 3" or "66 %"
  description: string; // e.g., "der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich."
  source?: string; // e.g., "Bitkom 2025"
  backgroundColor?: string;
  durationInFrames?: number;
}

/**
 * StatScene — Presents a statistic (large number) with description below
 * Example: "2 / 3" with "der Jugendlichen in Deutschland..." below
 *
 * Animation:
 * - Stat number fades in at frame 0 (0.4s)
 * - Description slides up at frame 6 (0.2s stagger)
 * - Source attribution fades in with description
 */
export const StatScene: React.FC<StatSceneProps> = ({
  stat,
  description,
  source,
  backgroundColor = colors.warmWhite,
  durationInFrames = 420, // 14 seconds default
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
        fontFamily: typography.family,
      }}
    >
      {/* Large statistic number */}
      <FadeIn duration={motion.fadeIn.durationFrames}>
        <div
          style={{
            fontSize: typography.sizes.statistic,
            fontWeight: typography.weights.bold,
            color: colors.darkGray2,
            lineHeight: typography.lineHeight,
            marginBottom: '40px',
          }}
        >
          {stat}
        </div>
      </FadeIn>

      {/* Description text (slides up after stat) */}
      <SlideUp delay={motion.stagger.short} duration={motion.slideUp.durationFrames}>
        <div
          style={{
            fontSize: typography.sizes.body,
            color: colors.darkGray2,
            lineHeight: typography.lineHeight,
            maxWidth: '800px',
            textAlign: 'center',
            marginBottom: source ? '40px' : '0',
          }}
        >
          {description}
        </div>
      </SlideUp>

      {/* Source attribution (optional, very small) */}
      {source && (
        <FadeIn delay={motion.stagger.short + motion.slideUp.durationFrames}>
          <div
            style={{
              fontSize: typography.sizes.caption,
              color: colors.lightGray,
              position: 'absolute',
              bottom: '30px',
              right: '30px',
            }}
          >
            {source}
          </div>
        </FadeIn>
      )}
    </AbsoluteFill>
  );
};
