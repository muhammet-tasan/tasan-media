import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { motion } from '../styles/motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number; // in frames
  duration?: number; // in frames
  distance?: number; // in pixels (how far to slide from)
}

/**
 * SlideUp — Slides children up from below while fading in
 * Used for secondary text that enters after primary text
 */
export const SlideUp: React.FC<SlideUpProps> = ({
  children,
  delay = 0,
  duration = motion.slideUp.durationFrames,
  distance = 30,
}) => {
  const frame = useCurrentFrame();

  // Opacity animation
  const opacity = interpolate(
    frame,
    [delay, delay + duration],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  // Position animation (translate from below)
  const translateY = interpolate(
    frame,
    [delay, delay + duration],
    [distance, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {children}
    </div>
  );
};
