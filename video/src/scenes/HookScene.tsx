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
 * HookScene — Cinematic documentary opening hook
 * Establishes calm, intimate domestic moment with emotional pacing
 * Lower-left composition with breathing motion and vignette treatment
 */
export const HookScene: React.FC<HookSceneProps> = ({
  line1,
  line2,
  backgroundImage,
  durationInFrames = 210,
}) => {
  const frame = useCurrentFrame();

  // Background fade-in: frames 0-18 (0.6s)
  const bgOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Ken Burns breathing zoom: 1.0 → 1.015 (very gentle)
  const zoomScale = interpolate(frame, [18, durationInFrames], [1.0, 1.015], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });

  // Line 1: fade in 0.7s, hold 1.3s, fade out 1s
  const line1Opacity = interpolate(
    frame,
    [18, 39, 99, 129],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  // Line 2: fade in 1s, hold 2s, fade out 1s
  const line2Opacity = interpolate(
    frame,
    [129, 159, 189, 210],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
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
            durationInFrames={durationInFrames - 18}
          />
        </AbsoluteFill>
      ) : null}

      {/* Gradient overlay: bottom and sides for vignette effect */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction="both" opacity={0.55} />
      </AbsoluteFill>

      {/* Cinematic vignette for focus and depth */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <VignetteOverlay opacity={0.35} strength={0.65} />
      </AbsoluteFill>

      {/* Line 1: "Sie ist ruhig." — Lower-left documentary composition */}
      <div
        style={{
          position: 'absolute',
          bottom: style.safeArea.vertical + 40,
          left: style.safeArea.horizontal,
          maxWidth: 1000,
          opacity: line1Opacity,
          fontSize: 56,
          fontFamily: typography.family,
          fontWeight: 400,
          color: colors.warmWhite,
          lineHeight: '1.2',
          letterSpacing: '-0.5px',
        }}
      >
        {line1}
      </div>

      {/* Line 2: "Du hast deinen Abend." — Same lower-left position */}
      <div
        style={{
          position: 'absolute',
          bottom: style.safeArea.vertical + 40,
          left: style.safeArea.horizontal,
          maxWidth: 1000,
          opacity: line2Opacity,
          fontSize: 56,
          fontFamily: typography.family,
          fontWeight: 400,
          color: colors.warmWhite,
          lineHeight: '1.2',
          letterSpacing: '-0.5px',
        }}
      >
        {line2}
      </div>
    </AbsoluteFill>
  );
};
