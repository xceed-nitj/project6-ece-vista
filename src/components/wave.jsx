// PinkWaveBanner.jsx
// Smooth pink waves using stroked SVG backgrounds (no filled shapes),
// parallax drift, and transparent backdrop. Pure React + CSS, no TypeScript.
// ------------------------------------------------------------------
// Usage:
// import PinkWaveBanner from "./PinkWaveBanner";
// <PinkWaveBanner height="h-[220px]" />

import React from "react";

function PinkWaveBanner({
  height = "h-72",
  className = "",
  top = false,
  // visual tuning
  speed1 = 14,
  speed2 = 22,
  color1 = "#ff4d9d",
  color2 = "#ff7abf",
  strokeWidth = 2.5,
  children,
}) {
  const containerClasses = `relative w-full ${height} overflow-hidden ${className}`;
  const pos1 = top ? "top: 0;" : "bottom: 0;";
  const pos2 = top ? "top: -6px;" : "bottom: -6px;";

  // Smooth, sinusoidal-ish line paths placed near the bottom of the viewBox
  const LINE_PATH_1 =
    "M0,94 C120,102 240,110 360,110 C480,110 600,102 720,96 C840,90 960,88 1080,94 C1200,100 1320,110 1440,114";
  const LINE_PATH_2 =
    "M0,98 C140,106 280,108 420,104 C560,100 700,92 840,92 C980,92 1120,100 1260,108 C1350,112 1395,114 1440,116";

  const svgLine = (d, color) =>
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120' preserveAspectRatio='none'>` +
    `<path d='${d}' fill='none' stroke='${color}' stroke-width='${strokeWidth}' stroke-linecap='round' stroke-linejoin='round'/>` +
    `</svg>`;

  const bg1 = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgLine(LINE_PATH_1, color1))}")`;
  const bg2 = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgLine(LINE_PATH_2, color2))}")`;

  return (
    <div className={containerClasses}>
      {children && <div className="relative z-10 text-center px-4">{children}</div>}

      <div
        className="wave wave-1"
        aria-hidden="true"
        style={{ animationDuration: `${speed1}s` }}
      />
      <div
        className="wave wave-2"
        aria-hidden="true"
        style={{ animationDuration: `${speed2}s` }}
      />

      <style>{`
        @media (prefers-reduced-motion: reduce) { .wave { animation: none !important; } }
        @keyframes drift { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .wave {
          position: absolute;
          left: 0;
          width: 200%;
          height: 140px;
          background-repeat: repeat-x;
          background-size: 50% 100%;
          pointer-events: none;
          animation: drift linear infinite;
        }
        .wave-1 {
          ${pos1}
          background-image: ${bg1};
          opacity: 0.95;
          filter: drop-shadow(0 -1px 4px rgba(255, 105, 180, 0.25));
        }
        .wave-2 {
          ${pos2}
          background-image: ${bg2};
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}

export default PinkWaveBanner;
