import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { BackgroundImage } from '../components/BackgroundImage';
import { SoftGradientOverlay } from '../components/SoftGradientOverlay';
import { VignetteOverlay } from '../components/VignetteOverlay';
import { GrainOverlay } from '../components/GrainOverlay';
import { colors, typography, sceneStandards } from '../styles/tasanMediaStyle';

const { hookPrimary } = sceneStandards.typography;
const { lowerLeftThird } = sceneStandards.positioning;
const { bottomGradient, textReadabilityGradient, vignette, grain } = sceneStandards.overlays;
const { bgFadeIn, fadeIn, primaryHold, pause, kenBurnsZoom } = sceneStandards.motion;

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

  // Text pacing timeline, derived from sceneStandards.motion (see SCENE-STANDARDS.md)
  const fade1Start = bgFadeIn;                     // 15
  const fade1End = fade1Start + fadeIn;             // 33
  const hold1End = fade1End + primaryHold;          // 84
  const fadeOut1End = hold1End + fadeIn;            // 102
  const fade2Start = fadeOut1End + pause;           // 123
  const fade2End = fade2Start + fadeIn;             // 141

  // Background fade-in
  const bgOpacity = interpolate(frame, [0, bgFadeIn], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Line 1: fade-in, emotional hold, fade-out
  const line1Opacity = interpolate(
    frame,
    [fade1Start, fade1End, hold1End, fadeOut1End],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.exp),
    }
  );

  // Line 2: fade-in after emotional pause, hold until scene end
  const line2Opacity = interpolate(
    frame,
    [fade2Start, fade2End, durationInFrames],
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
            zoomTo={1.0 + kenBurnsZoom}
            durationInFrames={durationInFrames - bgFadeIn}
          />
        </AbsoluteFill>
      ) : null}

      {/* Gradient overlay: gentle bottom-only for text readability (preserves left side) */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction={bottomGradient.direction} opacity={bottomGradient.opacity} />
      </AbsoluteFill>

      {/* Subtle vignette for cinematic focus (premium aesthetic) */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <VignetteOverlay opacity={vignette.opacity} strength={vignette.strength} />
      </AbsoluteFill>

      {/* Film grain texture for premium documentary aesthetic */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <GrainOverlay opacity={grain.opacity} scale={grain.scale} />
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
            rgba(0, 0, 0, ${textReadabilityGradient.opacity}) 0%,
            rgba(0, 0, 0, ${textReadabilityGradient.opacity / 2}) 50%,
            rgba(0, 0, 0, 0) 100%
          )`,
          pointerEvents: 'none',
          opacity: bgOpacity,
        }}
      />

      {/* Line 1: "Sie ist ruhig." — intentional lower-left cinematic composition */}
      <div
        style={{
          position: 'absolute',
          bottom: lowerLeftThird.bottom,
          left: lowerLeftThird.left,
          maxWidth: lowerLeftThird.maxWidth,
          textAlign: lowerLeftThird.textAlign,
          opacity: line1Opacity,
          fontSize: hookPrimary.size,
          fontFamily: typography.family,
          fontWeight: hookPrimary.weight,
          color: hookPrimary.color,
          lineHeight: hookPrimary.lineHeight,
          letterSpacing: `${hookPrimary.letterSpacing}px`,
          textShadow: `0 ${hookPrimary.shadowBlur}px ${hookPrimary.shadowColor}`,
        }}
      >
        {line1}
      </div>

      {/* Line 2: "Du hast deinen Abend." — same standard, intentional cinematic placement */}
      <div
        style={{
          position: 'absolute',
          bottom: lowerLeftThird.bottom,
          left: lowerLeftThird.left,
          maxWidth: lowerLeftThird.maxWidth,
          textAlign: lowerLeftThird.textAlign,
          opacity: line2Opacity,
          fontSize: hookPrimary.size,
          fontFamily: typography.family,
          fontWeight: hookPrimary.weight,
          color: hookPrimary.color,
          lineHeight: hookPrimary.lineHeight,
          letterSpacing: `${hookPrimary.letterSpacing}px`,
          textShadow: `0 ${hookPrimary.shadowBlur}px ${hookPrimary.shadowColor}`,
        }}
      >
        {line2}
      </div>
    </AbsoluteFill>
  );
};
