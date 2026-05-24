import React from 'react';
import { AbsoluteFill, Img, useCurrentFrame, interpolate, Easing, staticFile } from 'remotion';

interface BackgroundImageProps {
  src: string;
  brightness?: number; // 0-100, where 100 is full brightness
  zoomFrom?: number; // e.g., 1.0
  zoomTo?: number; // e.g., 1.05 for 5% zoom
  durationInFrames?: number;
}

/**
 * BackgroundImage — Full-canvas image background with optional subtle zoom
 * If brightness < 100, applies a darkening filter
 */
export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  brightness = 100,
  zoomFrom = 1.0,
  zoomTo = 1.0,
  durationInFrames = 300,
}) => {
  const frame = useCurrentFrame();

  // Zoom animation
  const scale = interpolate(
    frame,
    [0, durationInFrames],
    [zoomFrom, zoomTo],
    {
      extrapolateRight: 'clamp',
    }
  );

  // Brightness filter
  const brightnessValue = brightness / 100;

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      >
        <Img src={staticFile(src)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </AbsoluteFill>

      {/* Brightness adjustment overlay */}
      {brightness < 100 && (
        <AbsoluteFill
          style={{
            backgroundColor: `rgba(0, 0, 0, ${1 - brightnessValue})`,
            pointerEvents: 'none',
          }}
        />
      )}
    </AbsoluteFill>
  );
};
