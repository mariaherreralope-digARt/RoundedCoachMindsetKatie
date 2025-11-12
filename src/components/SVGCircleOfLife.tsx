import React from "react";

type Props = {
  className?: string;
  size?: number | string; // width/height, e.g. 400 or "100%"
  strokeWidth?: number;
};

export default function SvgSacredGeometry({
  className = "",
  size = "100%",
  strokeWidth = 6,
}: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sacred geometry pattern"
    >
      <defs>
        <style>{`.g-stroke{fill:none;stroke:currentColor;stroke-width:${strokeWidth};stroke-linecap:round;stroke-linejoin:round;opacity:0.95}`}</style>
      </defs>

      <rect x="-600" y="-600" width="1200" height="1200" fill="transparent" />

      <g id="flower">
        <circle className="g-stroke" cx="0" cy="0" r="120" />
        <g>
          <circle className="g-stroke" cx="120" cy="0" r="120" />
          <circle className="g-stroke" cx="60" cy="104" r="120" />
          <circle className="g-stroke" cx="-60" cy="104" r="120" />
          <circle className="g-stroke" cx="-120" cy="0" r="120" />
          <circle className="g-stroke" cx="-60" cy="-104" r="120" />
          <circle className="g-stroke" cx="60" cy="-104" r="120" />
        </g>

        <g>
          <circle className="g-stroke" cx="240" cy="0" r="120" opacity="0.75" />
          <circle className="g-stroke" cx="120" cy="208" r="120" opacity="0.75" />
          <circle className="g-stroke" cx="-120" cy="208" r="120" opacity="0.75" />
          <circle className="g-stroke" cx="-240" cy="0" r="120" opacity="0.75" />
          <circle className="g-stroke" cx="-120" cy="-208" r="120" opacity="0.75" />
          <circle className="g-stroke" cx="120" cy="-208" r="120" opacity="0.75" />
        </g>

        <circle className="g-stroke" cx="0" cy="0" r="360" opacity="0.45" strokeDasharray="6 10" />
        <circle className="g-stroke" cx="0" cy="0" r="480" opacity="0.25" strokeDasharray="3 14" />
      </g>

      <g>
        <g stroke="currentColor" strokeWidth={1.5} fill="none" opacity={0.55}>
          <circle cx="0" cy="0" r="60" />
          <circle cx="180" cy="0" r="60" />
          <circle cx="90" cy="156" r="60" />
          <circle cx="-90" cy="156" r="60" />
          <circle cx="-180" cy="0" r="60" />
          <circle cx="-90" cy="-156" r="60" />
          <circle cx="90" cy="-156" r="60" />
        </g>
      </g>
    </svg>
  );
}
