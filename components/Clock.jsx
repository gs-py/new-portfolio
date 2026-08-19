"use client";

import { useEffect, useState } from "react";

const TZ = "Asia/Kolkata";

/**
 * Analog clock, engraved into the surface.
 * Hands run on three CSS animations seeded with a negative delay at mount —
 * no per-frame JS, no re-render, and the sweep stays smooth under load.
 */
const Clock = ({ size = 208 }) => {
  const [seed, setSeed] = useState(null);

  useEffect(() => {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
      .formatToParts(new Date())
      .reduce((acc, p) => ({ ...acc, [p.type]: Number(p.value) }), {});

    const seconds = parts.second;
    const minutes = parts.minute * 60 + seconds;
    const hours = (parts.hour % 12) * 3600 + minutes;
    setSeed({ seconds, minutes, hours });
  }, []);

  const r = size / 2;
  const ticks = Array.from({ length: 60 }, (_, i) => i);

  const hand = (offset, duration) =>
    seed
      ? {
          animation: `sweep ${duration}s linear infinite`,
          animationDelay: `-${offset}s`,
        }
      : { transform: "rotate(0deg)" };

  return (
    <div
      className="relative shrink-0 rounded-full bg-surface shadow-neu"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Local time in Thrissur, India"
    >
      {/* engraved face */}
      <div className="absolute inset-[9px] rounded-full shadow-neu-in-sm" />

      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 h-full w-full">
        {ticks.map((i) => {
          const major = i % 5 === 0;
          const angle = (i * 6 * Math.PI) / 180;
          const outer = r - 22;
          const inner = outer - (major ? 9 : 4);
          return (
            <line
              key={i}
              x1={r + outer * Math.sin(angle)}
              y1={r - outer * Math.cos(angle)}
              x2={r + inner * Math.sin(angle)}
              y2={r - inner * Math.cos(angle)}
              stroke={major ? "#9a9ca8" : "#c2c3cb"}
              strokeWidth={major ? 1.6 : 1}
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* hands */}
      <div
        className="absolute inset-0 origin-center"
        style={hand(seed?.hours ?? 0, 43200)}
      >
        <span
          className="absolute left-1/2 rounded-full bg-ink"
          style={{ width: 3.5, height: r * 0.44, top: r - r * 0.44, marginLeft: -1.75 }}
        />
      </div>
      <div
        className="absolute inset-0 origin-center"
        style={hand(seed?.minutes ?? 0, 3600)}
      >
        <span
          className="absolute left-1/2 rounded-full bg-ink"
          style={{ width: 2.5, height: r * 0.66, top: r - r * 0.66, marginLeft: -1.25 }}
        />
      </div>
      <div
        className="absolute inset-0 origin-center"
        style={hand(seed?.seconds ?? 0, 60)}
      >
        <span
          className="absolute left-1/2 rounded-full bg-accent"
          style={{ width: 1.5, height: r * 0.74, top: r - r * 0.74, marginLeft: -0.75 }}
        />
      </div>

      {/* raised cap */}
      <span className="absolute left-1/2 top-1/2 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface shadow-neu-flat" />
      <span className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
    </div>
  );
};

export default Clock;
