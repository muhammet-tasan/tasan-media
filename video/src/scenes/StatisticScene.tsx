import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { BackgroundImage } from '../components/BackgroundImage';
import { SoftGradientOverlay } from '../components/SoftGradientOverlay';
import { VignetteOverlay } from '../components/VignetteOverlay';
import { GrainOverlay } from '../components/GrainOverlay';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { sceneStandards } from '../styles/tasanMediaStyle';

interface StatisticSceneProps {
  stat: string;                    // e.g., "2 / 3" or "66 %"
  description: string;             // e.g., "der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich."
  source?: string;                 // e.g., "Bitkom 2025"
  backgroundImage?: string;        // Optional background image path
  durationInFrames?: number;       // Default: 210 (7 seconds)
}

/**
 * StatisticScene — Premium documentary presentation of a statistic
 * Follows HookScene standards: warm text, subtle overlays, emotional pacing
 *
 * Composition: Lower-left positioning (intentional, not centered)
 * Typography: Primary (stat) 112px bold, secondary (description) 48px, caption (source) 24px
 * Motion: 18-frame fades, emotional holds, breathing pattern, Ken Burns zoom
 * Duration: 7 seconds (210 frames @ 30fps)
 *
 * Example: "2 / 3" with description "der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich."
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

  // Ken Burns breathing zoom: 1.0 → 1.015 (1.5% subtle push-in)
  const zoomScale = interpolate(frame, [15, durationInFrames], [1.0, 1.015], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.exp),
  });

  // Stat number: fade-in 0.5s (frame 15, 18 frames = 0.6s), hold ~1.7s, fade-out ~2.8s
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
      {/* Background with Ken Burns breathing zoom */}
      {backgroundImage ? (
        <AbsoluteFill style={{ opacity: bgOpacity }}>
          <BackgroundImage
            src={backgroundImage}
            brightness={100}
            zoomFrom={1.0}
            zoomTo={1.015}
            durationInFrames={durationInFrames - 15}
          />
        </AbsoluteFill>
      ) : null}

      {/* Gradient overlay: gentle bottom-only for text readability */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction="bottom" opacity={0.48} />
      </AbsoluteFill>

      {/* Subtle vignette for cinematic focus */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <VignetteOverlay opacity={0.25} strength={0.55} />
      </AbsoluteFill>

      {/* Film grain texture for premium documentary aesthetic */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <GrainOverlay opacity={0.08} scale={1} />
      </AbsoluteFill>

      {/* Soft left-bottom readability gradient */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '60%',
          height: '55%',
          background: `linear-gradient(
            to right top,
            rgba(0, 0, 0, 0.24) 0%,
            rgba(0, 0, 0, 0.12) 50%,
            rgba(0, 0, 0, 0) 100%
          )`,
          pointerEvents: 'none',
          opacity: bgOpacity,
        }}
      />

      {/* Statistic number: 112px bold, lower-left composition */}
      <div
        style={{
          position: 'absolute',
          bottom: 280,
          left: 180,
          maxWidth: 780,
          textAlign: 'left',
          opacity: statOpacity,
          fontSize: 112,
          fontFamily: typography.family,
          fontWeight: 700,
          color: '#F5F2EC',
          lineHeight: 1.0,
          letterSpacing: '-2px',
          textShadow: '0 20px rgba(0, 0, 0, 0.35)',
        }}
      >
        {stat}
      </div>

      {/* Description: 48px regular, lower-left composition */}
      <div
        style={{
          position: 'absolute',
          bottom: 190,
          left: 180,
          maxWidth: 780,
          textAlign: 'left',
          opacity: descriptionOpacity,
          fontSize: 48,
          fontFamily: typography.family,
          fontWeight: 400,
          color: '#F5F2EC',
          lineHeight: 1.2,
          letterSpacing: '0px',
          textShadow: '0 12px rgba(0, 0, 0, 0.25)',
        }}
      >
        {description}
      </div>

      {/* Source attribution: 24px caption, bottom-right corner */}
      {source && (
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            right: 180,
            opacity: sourceOpacity,
            fontSize: 24,
            fontFamily: typography.family,
            fontWeight: 400,
            color: '#F5F2EC',
            lineHeight: 1.4,
            letterSpacing: '0.5px',
            opacity: sourceOpacity * 0.80, // Slightly dimmer for hierarchy
          }}
        >
          {source}
        </div>
      )}
    </AbsoluteFill>
  );
};
