import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { BackgroundImage } from '../components/BackgroundImage';
import { SoftGradientOverlay } from '../components/SoftGradientOverlay';
import { TextOverlay } from '../components/TextOverlay';
import { colors } from '../styles/colors';

interface HookSceneProps {
  line1: string;
  line2: string;
  backgroundImage?: string;
  durationInFrames: number;
}

/**
 * HookScene — Scene 1: warm, domestic hook establishing calm atmosphere
 * Sequence: background fades in → subtle zoom → text cascades in → text fades out
 */
export const HookScene: React.FC<HookSceneProps> = ({
  line1,
  line2,
  backgroundImage,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  // Background fade-in: frames 0-20 (0.67s)
  const bgOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Zoom animation: frames 20-300 (1.0 → 1.04)
  const zoomScale = interpolate(frame, [20, durationInFrames], [1.0, 1.04], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Text fade-out: frames 280-300 (20 frames)
  const textOpacity = interpolate(frame, [280, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.darkNavy }}>
      {/* Background with zoom animation */}
      {backgroundImage ? (
        <AbsoluteFill style={{ opacity: bgOpacity }}>
          <BackgroundImage
            src={backgroundImage}
            brightness={100}
            zoomFrom={1.0}
            zoomTo={1.04}
            durationInFrames={durationInFrames - 20}
          />
        </AbsoluteFill>
      ) : null}

      {/* Soft gradient overlay for text readability */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction="bottom" opacity={0.4} />
      </AbsoluteFill>

      {/* Text overlays with cascade timing */}
      <AbsoluteFill style={{ opacity: textOpacity }}>
        <TextOverlay
          text={line1}
          size="body"
          weight="regular"
          color={colors.warmWhite}
          position="lower-third"
          delay={30}
          maxWidth={1400}
        />
      </AbsoluteFill>

      <AbsoluteFill style={{ opacity: textOpacity }}>
        <TextOverlay
          text={line2}
          size="body"
          weight="regular"
          color={colors.warmWhite}
          position="lower-third"
          delay={80}
          maxWidth={1400}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
