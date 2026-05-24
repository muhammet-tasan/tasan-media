import React from 'react';
import { AbsoluteFill } from 'remotion';

interface GrainOverlayProps {
  opacity?: number; // 0-1, default 0.08 for very subtle grain
  scale?: number; // grain size multiplier, default 1
}

export const GrainOverlay: React.FC<GrainOverlayProps> = ({
  opacity = 0.08,
  scale = 1,
}) => {
  // SVG-based film grain pattern for premium aesthetic
  const grainSize = 2 * scale;
  const patternId = `grain-${Math.random()}`;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'transparent',
        pointerEvents: 'none',
      }}
    >
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id={patternId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={0.9}
              numOctaves={4}
              result="noise"
              seed={2}
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={grainSize}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`rgba(0, 0, 0, ${opacity})`}
          filter={`url(#${patternId})`}
        />
      </svg>
    </AbsoluteFill>
  );
};
