import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { motion } from '../styles/motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // in frames
  duration?: number; // in frames
  durationMs?: number; // alternative: milliseconds (converted to frames at 30fps)
}

/**
 * FadeIn — Fades in children from 0 to 100% opacity
 * Uses Remotion's useCurrentFrame to animate based on playhead position
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = motion.fadeIn.durationFrames,
  durationMs,
}) => {
  const frame = useCurrentFrame();

  // Convert milliseconds to frames if provided
  const durationFrames = durationMs ? Math.round(durationMs / (1000 / 30)) : duration;

  // Opacity animation: ramps from 0 at 'delay' to 1 at 'delay + duration'
  const opacity = interpolate(
    frame,
    [delay, delay + durationFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.ease),
    }
  );

  return (
    <div style={{ opacity }}>
      {children}
    </div>
  );
};
