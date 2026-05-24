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
 * Timing: hallway visible → line 1 appears → pause → line 1 fades out → line 2 appears → fade to end
 */
export const HookScene: React.FC<HookSceneProps> = ({
  line1,
  line2,
  backgroundImage,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  // Background fade-in: frames 0-15 (0.5s)
  const bgOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Subtle zoom throughout: 1.0 → 1.02 (very subtle)
  const zoomScale = interpolate(frame, [15, durationInFrames], [1.0, 1.02], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Line 1 fade-in: frames 15-33 (0.6s), display until frame 90, fade out frames 90-108 (0.6s)
  const line1Opacity = interpolate(
    frame,
    [15, 33, 90, 108],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Line 2 fade-in: frames 108-126 (0.6s), hold, fade out frames 168-186 (0.6s)
  const line2Opacity = interpolate(
    frame,
    [108, 126, 168, 186],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: colors.darkNavy }}>
      {/* Background with zoom animation */}
      {backgroundImage ? (
        <AbsoluteFill style={{ opacity: bgOpacity }}>
          <BackgroundImage
            src={backgroundImage}
            brightness={100}
            zoomFrom={1.0}
            zoomTo={1.02}
            durationInFrames={durationInFrames - 15}
          />
        </AbsoluteFill>
      ) : null}

      {/* Soft gradient overlay for text readability */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction="bottom" opacity={0.5} />
      </AbsoluteFill>

      {/* Line 1: "Sie ist ruhig." */}
      <AbsoluteFill style={{ opacity: line1Opacity }}>
        <TextOverlay
          text={line1}
          size="subtext"
          weight="regular"
          color={colors.warmWhite}
          position="lower-third"
          delay={0}
          maxWidth={1200}
        />
      </AbsoluteFill>

      {/* Line 2: "Du hast deinen Abend." */}
      <AbsoluteFill style={{ opacity: line2Opacity }}>
        <TextOverlay
          text={line2}
          size="subtext"
          weight="regular"
          color={colors.warmWhite}
          position="lower-third"
          delay={0}
          maxWidth={1200}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
