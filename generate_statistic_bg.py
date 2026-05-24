#!/usr/bin/env python3
"""
Generate a placeholder background image for StatisticScene.

This creates a cinematic documentary-style gradient background that demonstrates
the layout. For production, replace with an actual sourced/generated B-roll image.

Usage:
  python3 generate_statistic_bg.py

Output:
  video/public/assets/2026-05-12/ki-risiken-kinder/final-assets/scene-04-statistic-bg.jpg
"""

import sys
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

def create_statistic_background(width=1920, height=1080):
    """
    Create a cinematic documentary-style background for StatisticScene.

    Color scheme:
    - Warm (tungsten) light upper-left: #3D2817 → #4A3520
    - Cool (screen) light lower-right: #2A3E4F → #1A2A3D
    - Documentary mood with depth and contrast
    """

    # Create base image
    img = Image.new('RGB', (width, height), color='#1A1A1A')
    pixels = img.load()

    # Create gradient background (warm left → cool right, dark overall)
    for y in range(height):
        for x in range(width):
            # Horizontal gradient: warm (left) to cool (right)
            t_h = x / width  # 0 to 1 left to right

            # Vertical gradient: slightly darker at top, lighter center
            t_v = y / height  # 0 to 1 top to bottom

            # Warm colors (left side)
            if t_h < 0.5:
                # Warm brown tones
                r = int(61 + (74 - 61) * (t_h * 2))  # 61-74
                g = int(40 + (53 - 40) * (t_h * 2))  # 40-53
                b = int(23 + (32 - 23) * (t_h * 2))  # 23-32
            else:
                # Transition to cool
                r = int(74 + (42 - 74) * ((t_h - 0.5) * 2))
                g = int(53 + (62 - 53) * ((t_h - 0.5) * 2))
                b = int(32 + (79 - 32) * ((t_h - 0.5) * 2))

            # Apply vertical darkening/lightening
            if t_v < 0.3:
                # Darken top
                factor = 0.8 + (t_v / 0.3) * 0.2
            elif t_v > 0.7:
                # Slightly lighter bottom
                factor = 1.0 - ((t_v - 0.7) / 0.3) * 0.1
            else:
                factor = 1.0

            r = int(r * factor)
            g = int(g * factor)
            b = int(b * factor)

            # Clamp values
            r = min(255, max(0, r))
            g = min(255, max(0, g))
            b = min(255, max(0, b))

            pixels[x, y] = (r, g, b)

    # Add Gaussian blur for softness (documentary feel)
    img = img.filter(ImageFilter.GaussianBlur(radius=8))

    # Add slight vignette (darken edges)
    draw = ImageDraw.Draw(img, 'RGBA')
    for y in range(height):
        for x in range(width):
            # Distance from center
            dx = (x - width/2) / (width/2)
            dy = (y - height/2) / (height/2)
            dist = (dx**2 + dy**2) ** 0.5

            # Vignette effect
            if dist > 0.5:
                alpha = int(min(100, (dist - 0.5) * 200))
                if alpha > 0:
                    # Draw semi-transparent black
                    pixel = img.getpixel((x, y))
                    darken_factor = 1.0 - (alpha / 255.0) * 0.4
                    new_pixel = tuple(int(c * darken_factor) for c in pixel)
                    img.putpixel((x, y), new_pixel)

    return img

def main():
    """Generate and save the background image."""

    output_path = 'video/public/assets/2026-05-12/ki-risiken-kinder/final-assets/scene-04-statistic-bg.jpg'

    try:
        print("Generating StatisticScene background image...")
        img = create_statistic_background(1920, 1080)

        # Save as JPEG with high quality
        img.save(output_path, 'JPEG', quality=95)
        print(f"✓ Background image saved: {output_path}")
        print(f"  Dimensions: 1920×1080")
        print(f"  Quality: High (95%)")
        print(f"\nNote: This is a cinematic placeholder for layout testing.")
        print(f"For production, replace with actual sourced B-roll image using:")
        print(f"  video/public/assets/2026-05-12/ki-risiken-kinder/statistic-scene-image-prompt.md")

    except Exception as e:
        print(f"✗ Error generating image: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
