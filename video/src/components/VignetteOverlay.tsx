import React from 'react';
import { AbsoluteFill } from 'remotion';

interface VignetteOverlayProps {
  opacity?: number; // 0-1, default 0.3
  strength?: number; // 0-1, controls how far from edges vignette extends
}

export const VignetteOverlay: React.FC<VignetteOverlayProps> = ({
  opacity = 0.3,
  strength = 0.6,
}) => {
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(
          ellipse at center,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) ${40 * (1 - strength)}%,
          rgba(0, 0, 0, ${opacity}) 100%
        )`,
        pointerEvents: 'none',
      }}
    />
  );
};
