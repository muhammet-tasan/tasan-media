import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { BackgroundImage } from '../components/BackgroundImage';
import { SoftGradientOverlay } from '../components/SoftGradientOverlay';
import { VignetteOverlay } from '../components/VignetteOverlay';
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

  // Ken Burns breathing zoom: 1.0 → 1.025 (2.5% subtle push-in)
  const zoomScale = interpolate(frame, [15, durationInFrames], [1.0, 1.025], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });

  // Line 1: slow atmospheric fade-in 0.7s, hold 1.8s, slow fade-out 0.6s
  // Frames: fade-in 15-36 (0.7s), display 36-90 (1.8s), fade-out 90-108 (0.6s)
  const line1Opacity = interpolate(
    frame,
    [15, 36, 90, 108],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.quad),
    }
  );

  // Line 2: slow atmospheric fade-in 0.8s, hold 1.0s, slow fade-out 1.0s
  // Frames: pause 108-126, fade-in 126-150 (0.8s), display 150-180 (1.0s), fade-out 180-210 (1.0s)
  const line2Opacity = interpolate(
    frame,
    [126, 150, 180, 210],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.quad),
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
            zoomTo={1.025}
            durationInFrames={durationInFrames - 15}
          />
        </AbsoluteFill>
      ) : null}

      {/* Gradient overlay: bottom and sides for readability */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction="both" opacity={0.55} />
      </AbsoluteFill>

      {/* Cinematic vignette for focus and depth */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <VignetteOverlay opacity={0.35} strength={0.65} />
      </AbsoluteFill>

      {/* Line 1: "Sie ist ruhig." — 104pt bold, intentional lower-left composition */}
      <div
        style={{
          position: 'absolute',
          bottom: 110,
          left: 160,
          maxWidth: 672,
          opacity: line1Opacity,
          fontSize: 104,
          fontFamily: typography.family,
          fontWeight: 700,
          color: '#F5F2EC',
          lineHeight: 1.05,
          letterSpacing: '-1px',
          textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)',
        }}
      >
        {line1}
      </div>

      {/* Line 2: "Du hast deinen Abend." — Same 104pt bold, intentional placement */}
      <div
        style={{
          position: 'absolute',
          bottom: 110,
          left: 160,
          maxWidth: 672,
          opacity: line2Opacity,
          fontSize: 104,
          fontFamily: typography.family,
          fontWeight: 700,
          color: '#F5F2EC',
          lineHeight: 1.05,
          letterSpacing: '-1px',
          textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)',
        }}
      >
        {line2}
      </div>
    </AbsoluteFill>
  );
};
