import type { CSSProperties } from "react";

const WAVE_HEIGHTS = [
  0.5, 0.9, 0.35, 1, 0.6, 0.8, 0.45, 1, 0.7, 0.3, 0.85, 0.55, 0.95, 0.4, 0.75,
];

/** Equalizer bars driven purely by the CSS `wave` keyframe (no state). */
export function WaveBars({
  count,
  color,
  height,
}: {
  count: number;
  color: string;
  height: number;
}) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          style={{
            display: "block",
            flex: 1,
            borderRadius: 2,
            background: color,
            transformOrigin: "bottom",
            height: Math.round(height * WAVE_HEIGHTS[i % WAVE_HEIGHTS.length]),
            animation: `wave ${900 + (i % 5) * 120}ms ease-in-out ${
              i * 70
            }ms infinite`,
          }}
        />
      ))}
    </>
  );
}

export function Stars({
  size = 13,
  color = "#f4b000",
}: {
  size?: number;
  color?: string;
}) {
  const star: CSSProperties = {
    display: "block",
    width: size,
    height: size,
    background: color,
    clipPath:
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  };
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={star} />
      ))}
    </>
  );
}
