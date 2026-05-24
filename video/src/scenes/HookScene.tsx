import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { BackgroundImage } from '../components/BackgroundImage';
import { SoftGradientOverlay } from '../components/SoftGradientOverlay';
import { VignetteOverlay } from '../components/VignetteOverlay';
import { GrainOverlay } from '../components/GrainOverlay';
import { FadeIn } from '../components/FadeIn';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { style } from '../styles/tasanMediaStyle';

interface HookSceneProps {
  line1: string;
  line2: string;
  backgroundImage?: string;
  durationInFrames: number;
}

/**
 * HookScene — tasan-media cinematic documentary opening hook
 * Establishes calm, intimate domestic moment with emotional pacing
 * Standards: 104px bold typography, lower-left composition, 2-3% zoom, 7s duration
 */
export const HookScene: React.FC<HookSceneProps> = ({
  line1,
  line2,
  backgroundImage,
  durationInFrames = 210,
}) => {
  const frame = useCurrentFrame();

  // Background fade-in: frames 0-15 (0.5s)
  const bgOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Ken Burns breathing zoom: 1.0 → 1.015 (1.5% extremely subtle push-in)
  const zoomScale = interpolate(frame, [15, durationInFrames], [1.0, 1.015], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.exp),
  });

  // Line 1: fade-in 0.5s (frame 15, 18 frames = 0.6s), hold ~1.2s, fade-out ~2.8s (18 frames = 0.6s), gone ~3.5s
  // Frames: fade-in 15-33 (18 frames), display 33-84 (51 frames), fade-out 84-102 (18 frames)
  const line1Opacity = interpolate(
    frame,
    [15, 33, 84, 102],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.exp),
    }
  );

  // Line 2: fade-in start ~4.1s (frame 123, 18 frames = 0.6s), hold until end
  // Frames: fade-in 123-141 (18 frames), hold 141-210 (no fade-out)
  const line2Opacity = interpolate(
    frame,
    [123, 141, 210],
    [0, 1, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.exp),
    }
  );

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

      {/* Gradient overlay: gentle bottom-only for text readability (preserves left side) */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction="bottom" opacity={0.48} />
      </AbsoluteFill>

      {/* Subtle vignette for cinematic focus (premium aesthetic) */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <VignetteOverlay opacity={0.25} strength={0.55} />
      </AbsoluteFill>

      {/* Film grain texture for premium documentary aesthetic */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <GrainOverlay opacity={0.08} scale={1} />
      </AbsoluteFill>

      {/* Soft left-bottom readability gradient — darker near typography, invisible transition to image */}
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

      {/* Line 1: "Sie ist ruhig." — 112pt bold, intentional lower-left cinematic composition */}
      <div
        style={{
          position: 'absolute',
          bottom: 190,
          left: 180,
          maxWidth: 780,
          textAlign: 'left',
          opacity: line1Opacity,
          fontSize: 112,
          fontFamily: typography.family,
          fontWeight: 700,
          color: '#F5F2EC',
          lineHeight: 1.0,
          letterSpacing: '-2px',
          textShadow: '0 20px rgba(0, 0, 0, 0.35)',
        }}
      >
        {line1}
      </div>

      {/* Line 2: "Du hast deinen Abend." — Same 112pt bold, intentional cinematic placement */}
      <div
        style={{
          position: 'absolute',
          bottom: 190,
          left: 180,
          maxWidth: 780,
          textAlign: 'left',
          opacity: line2Opacity,
          fontSize: 112,
          fontFamily: typography.family,
          fontWeight: 700,
          color: '#F5F2EC',
          lineHeight: 1.0,
          letterSpacing: '-2px',
          textShadow: '0 20px rgba(0, 0, 0, 0.35)',
        }}
      >
        {line2}
      </div>
    </AbsoluteFill>
  );
};
