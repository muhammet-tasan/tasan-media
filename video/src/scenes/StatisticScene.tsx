import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { BackgroundImage } from '../components/BackgroundImage';
import { SoftGradientOverlay } from '../components/SoftGradientOverlay';
import { VignetteOverlay } from '../components/VignetteOverlay';
import { GrainOverlay } from '../components/GrainOverlay';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

interface StatisticSceneProps {
  stat: string;                    // e.g., "2 / 3" or "66 %"
  description: string;             // e.g., "der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich."
  source?: string;                 // e.g., "Bitkom 2025"
  backgroundImage?: string;        // Required: blurred documentary B-roll image
  durationInFrames?: number;       // Default: 210 (7 seconds)
}

/**
 * StatisticScene — Premium documentary statistic presentation
 * Own visual language: large dominant statistic, atmospheric B-roll background
 *
 * NOT HookScene positioning. StatisticScene has its own standards:
 * - Statistic dominates frame (160px bold, center-left positioning)
 * - Description positioned naturally beneath
 * - Required atmospheric B-roll background (blurred, darkened, heavily treated)
 * - Cinematic documentary aesthetic: Netflix/ARTE statistic sequences
 * - Target: emotionally important, immediately readable on mobile
 *
 * Typography: Statistic 160px bold (dominates), Description 52px (supporting)
 * Composition: Center-left layout with intentional visual balance
 * Background: Blurred documentary B-roll (teenager/phone/evening/digital atmosphere)
 * Motion: Extremely subtle ambient drift, no flashy animation
 * Duration: 7 seconds (210 frames @ 30fps)
 */
export const StatisticScene: React.FC<StatisticSceneProps> = ({
  stat,
  description,
  source,
  backgroundImage,
  durationInFrames = 210,
}) => {
  const frame = useCurrentFrame();

  // Background fade-in: frames 0-15 (0.5s)
  const bgOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Extremely subtle ambient drift (barely noticeable slow push-in)
  // 1.0 → 1.008 (0.8% total movement, almost imperceptible)
  const zoomScale = interpolate(frame, [15, durationInFrames], [1.0, 1.008], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.exp),
  });

  // Statistic: fade-in 0.5s (frame 15, 18 frames = 0.6s), hold ~1.7s, fade-out ~2.8s
  // Frames: fade-in 15-33 (18 frames), display 33-84 (51 frames), fade-out 84-102 (18 frames)
  const statOpacity = interpolate(
    frame,
    [15, 33, 84, 102],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.exp),
    }
  );

  // Description: fade-in start ~4.1s (frame 123, 18 frames = 0.6s), hold until end
  // Frames: fade-in 123-141 (18 frames), hold 141-210 (no fade-out)
  const descriptionOpacity = interpolate(
    frame,
    [123, 141, 210],
    [0, 1, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.exp),
    }
  );

  // Source attribution fades in with description
  const sourceOpacity = descriptionOpacity;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.darkNavy }}>
      {/* Background: Required atmospheric B-roll image (blurred, darkened) */}
      {backgroundImage ? (
        <AbsoluteFill style={{ opacity: bgOpacity }}>
          <BackgroundImage
            src={backgroundImage}
            brightness={50} // Heavily darkened for statistic dominance
            zoomFrom={1.0}
            zoomTo={1.008} // Extremely subtle drift
            durationInFrames={durationInFrames - 15}
          />
        </AbsoluteFill>
      ) : null}

      {/* Heavy gradient overlay: darker, more coverage for cinematic mood */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction="both" opacity={0.62} />
      </AbsoluteFill>

      {/* Subtle vignette for cinematic frame (same as HookScene) */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <VignetteOverlay opacity={0.25} strength={0.55} />
      </AbsoluteFill>

      {/* Film grain texture for premium documentary aesthetic */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <GrainOverlay opacity={0.08} scale={1} />
      </AbsoluteFill>

      {/* Center-left readability gradient (larger coverage for centered composition) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          width: '70%',
          height: '60%',
          background: `radial-gradient(
            ellipse at 30% 50%,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.15) 40%,
            rgba(0, 0, 0, 0) 100%
          )`,
          pointerEvents: 'none',
          opacity: bgOpacity,
        }}
      />

      {/* Statistic number: 160px bold, dominates frame with center-left positioning */}
      <div
        style={{
          position: 'absolute',
          bottom: 480,
          left: 260,
          maxWidth: 900,
          textAlign: 'left',
          opacity: statOpacity,
          fontSize: 160,
          fontFamily: typography.family,
          fontWeight: 700,
          color: '#F5F2EC',
          lineHeight: 0.95, // Slightly tighter for cinematic presence
          letterSpacing: '-3px', // Stronger tightening for large size
          textShadow: '0 24px rgba(0, 0, 0, 0.45)', // Stronger shadow for dominance
        }}
      >
        {stat}
      </div>

      {/* Description: 52px regular, naturally positioned beneath statistic */}
      <div
        style={{
          position: 'absolute',
          bottom: 310,
          left: 260,
          maxWidth: 820,
          textAlign: 'left',
          opacity: descriptionOpacity,
          fontSize: 52,
          fontFamily: typography.family,
          fontWeight: 400,
          color: '#F5F2EC',
          lineHeight: 1.25,
          letterSpacing: '0px',
          textShadow: '0 16px rgba(0, 0, 0, 0.35)',
        }}
      >
        {description}
      </div>

      {/* Source attribution: 24px caption, bottom-right corner */}
      {source && (
        <div
          style={{
            position: 'absolute',
            bottom: 100,
            right: 260,
            opacity: sourceOpacity * 0.75, // Lighter for hierarchy
            fontSize: 24,
            fontFamily: typography.family,
            fontWeight: 400,
            color: '#F5F2EC',
            lineHeight: 1.4,
            letterSpacing: '0.5px',
            textShadow: 'none',
          }}
        >
          {source}
        </div>
      )}
    </AbsoluteFill>
  );
};
