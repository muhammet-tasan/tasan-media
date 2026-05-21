import React from 'react';
import { AbsoluteFill } from 'remotion';

interface SoftGradientOverlayProps {
  direction?: 'top' | 'bottom' | 'both';
  opacity?: number; // 0-1
}

export const SoftGradientOverlay: React.FC<SoftGradientOverlayProps> = ({
  direction = 'bottom',
  opacity = 0.3,
}) => {
  const getGradient = (): string => {
    const color = `rgba(0, 0, 0, ${opacity})`;
    const transparent = `rgba(0, 0, 0, 0)`;

    switch (direction) {
      case 'top':
        return `linear-gradient(to bottom, ${color}, ${transparent})`;
      case 'bottom':
        return `linear-gradient(to top, ${color}, ${transparent})`;
      case 'both':
        return `linear-gradient(to bottom, ${color} 0%, ${transparent} 30%, ${transparent} 70%, ${color} 100%)`;
      default:
        return `linear-gradient(to up, ${color}, ${transparent})`;
    }
  };

  return (
    <AbsoluteFill
      style={{
        background: getGradient(),
        pointerEvents: 'none',
      }}
    />
  );
};
