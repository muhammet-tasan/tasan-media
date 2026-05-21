import React from 'react';
import { FadeIn } from './FadeIn';
import { typography, colors, style } from '../styles/tasanMediaStyle';

type Position = 'lower-third' | 'center' | 'upper';
type FontSize = keyof typeof typography.sizes;

interface TextOverlayProps {
  text: string;
  size?: FontSize;
  weight?: 'regular' | 'bold';
  color?: string;
  position?: Position;
  delay?: number; // in frames
  maxWidth?: number; // in pixels
}

/**
 * TextOverlay — Positioned text with fade-in animation
 * Respects safe areas, handles mobile readability
 */
export const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  size = 'body',
  weight = 'regular',
  color = colors.darkGray2,
  position = 'lower-third',
  delay = 0,
  maxWidth = style.maxTextWidth,
}) => {
  const fontSize = typography.sizes[size];
  const isSmallOnMobile = fontSize < style.mobileReadableMinSize;

  const getPositionStyle = (): React.CSSProperties => {
    const safeH = style.safeArea.horizontal;
    const safeV = style.safeArea.vertical;

    switch (position) {
      case 'lower-third':
        return {
          position: 'absolute',
          bottom: safeV,
          left: safeH,
          right: safeH,
        };
      case 'upper':
        return {
          position: 'absolute',
          top: safeV,
          left: safeH,
          right: safeH,
        };
      case 'center':
      default:
        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
    }
  };

  return (
    <FadeIn delay={delay} duration={12}>
      <div
        style={{
          ...getPositionStyle(),
          maxWidth,
          fontSize,
          fontFamily: typography.family,
          fontWeight: typography.weights[weight],
          color,
          lineHeight: typography.lineHeight,
          textAlign: 'center',
          opacity: isSmallOnMobile ? 0.9 : 1, // hint that text might be small
        }}
      >
        {text}
      </div>
    </FadeIn>
  );
};
