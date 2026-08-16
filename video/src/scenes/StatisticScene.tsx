import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { BackgroundImage } from '../components/BackgroundImage';
import { SoftGradientOverlay } from '../components/SoftGradientOverlay';
import { VignetteOverlay } from '../components/VignetteOverlay';
import { GrainOverlay } from '../components/GrainOverlay';
import { colors, typography, sceneStandards } from '../styles/tasanMediaStyle';

const { statisticPrimary, statisticDescription, statisticSource } = sceneStandards.typography;
const { statistic: statisticPositioning } = sceneStandards.positioning;
const {
  statisticGradient,
  statisticReadabilityGradient,
  statisticBackgroundBrightness,
  vignette,
  grain,
} = sceneStandards.overlays;
const { bgFadeIn, fadeIn, primaryHold, pause, ambientDrift } = sceneStandards.motion;

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

  // Text pacing timeline, derived from sceneStandards.motion (see SCENE-STANDARDS.md)
  const fadeStart = bgFadeIn;                  // 15
  const fadeEnd = fadeStart + fadeIn;           // 33
  const holdEnd = fadeEnd + primaryHold;        // 84
  const fadeOutEnd = holdEnd + fadeIn;          // 102
  const descriptionFadeStart = fadeOutEnd + pause; // 123
  const descriptionFadeEnd = descriptionFadeStart + fadeIn; // 141

  // Background fade-in
  const bgOpacity = interpolate(frame, [0, bgFadeIn], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Statistic: fade-in, emotional hold, fade-out
  const statOpacity = interpolate(
    frame,
    [fadeStart, fadeEnd, holdEnd, fadeOutEnd],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.exp),
    }
  );

  // Description: fade-in after pause, hold until scene end
  const descriptionOpacity = interpolate(
    frame,
    [descriptionFadeStart, descriptionFadeEnd, durationInFrames],
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
            brightness={statisticBackgroundBrightness}
            zoomFrom={1.0}
            zoomTo={1.0 + ambientDrift}
            durationInFrames={durationInFrames - bgFadeIn}
          />
        </AbsoluteFill>
      ) : null}

      {/* Heavy gradient overlay: darker, more coverage for cinematic mood */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <SoftGradientOverlay direction={statisticGradient.direction} opacity={statisticGradient.opacity} />
      </AbsoluteFill>

      {/* Subtle vignette for cinematic frame (same as HookScene) */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <VignetteOverlay opacity={vignette.opacity} strength={vignette.strength} />
      </AbsoluteFill>

      {/* Film grain texture for premium documentary aesthetic */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <GrainOverlay opacity={grain.opacity} scale={grain.scale} />
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
            rgba(0, 0, 0, ${statisticReadabilityGradient.opacity}) 0%,
            rgba(0, 0, 0, ${statisticReadabilityGradient.opacity / 2}) 40%,
            rgba(0, 0, 0, 0) 100%
          )`,
          pointerEvents: 'none',
          opacity: bgOpacity,
        }}
      />

      {/* Statistic number: dominates frame with center-left positioning */}
      <div
        style={{
          position: 'absolute',
          bottom: statisticPositioning.stat.bottom,
          left: statisticPositioning.stat.left,
          maxWidth: statisticPositioning.stat.maxWidth,
          textAlign: 'left',
          opacity: statOpacity,
          fontSize: statisticPrimary.size,
          fontFamily: typography.family,
          fontWeight: statisticPrimary.weight,
          color: statisticPrimary.color,
          lineHeight: statisticPrimary.lineHeight,
          letterSpacing: `${statisticPrimary.letterSpacing}px`,
          textShadow: `0 ${statisticPrimary.shadowBlur}px ${statisticPrimary.shadowColor}`,
        }}
      >
        {stat}
      </div>

      {/* Description: naturally positioned beneath statistic */}
      <div
        style={{
          position: 'absolute',
          bottom: statisticPositioning.description.bottom,
          left: statisticPositioning.description.left,
          maxWidth: statisticPositioning.description.maxWidth,
          textAlign: 'left',
          opacity: descriptionOpacity,
          fontSize: statisticDescription.size,
          fontFamily: typography.family,
          fontWeight: statisticDescription.weight,
          color: statisticDescription.color,
          lineHeight: statisticDescription.lineHeight,
          letterSpacing: `${statisticDescription.letterSpacing}px`,
          textShadow: `0 ${statisticDescription.shadowBlur}px ${statisticDescription.shadowColor}`,
        }}
      >
        {description}
      </div>

      {/* Source attribution: bottom-right corner */}
      {source && (
        <div
          style={{
            position: 'absolute',
            bottom: statisticPositioning.source.bottom,
            right: statisticPositioning.source.right,
            opacity: sourceOpacity * statisticSource.opacityMultiplier,
            fontSize: statisticSource.size,
            fontFamily: typography.family,
            fontWeight: statisticSource.weight,
            color: statisticSource.color,
            lineHeight: statisticSource.lineHeight,
            letterSpacing: `${statisticSource.letterSpacing}px`,
            textShadow: 'none',
          }}
        >
          {source}
        </div>
      )}
    </AbsoluteFill>
  );
};
