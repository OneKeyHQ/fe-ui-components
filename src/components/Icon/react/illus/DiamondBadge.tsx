import * as React from "react";

function SvgDiamondBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={10}
        cy={10}
        r={9.25}
        fill="url(#diamond-badge_svg__paint0_linear)"
        stroke="url(#diamond-badge_svg__paint1_linear)"
        strokeWidth={1.5}
      />
      <path
        d="M4.365 8.556l1.298-2.084A1 1 0 016.512 6h6.976a1 1 0 01.849.472l1.298 2.084a1 1 0 01-.054 1.136l-3.992 5.226a2 2 0 01-3.179 0L4.42 9.692a1 1 0 01-.055-1.136z"
        fill="#E3E7ED"
      />
      <path
        d="M4.577 8.689l1.298-2.085a.75.75 0 01.637-.354h6.976c.26 0 .5.134.637.354l1.298 2.085a.75.75 0 01-.04.851l-3.992 5.227a1.75 1.75 0 01-2.782 0L4.618 9.54a.75.75 0 01-.04-.851z"
        stroke="url(#diamond-badge_svg__paint2_linear)"
        strokeOpacity={0.24}
        strokeWidth={0.5}
      />
      <defs>
        <linearGradient
          id="diamond-badge_svg__paint0_linear"
          x1={10}
          y1={0}
          x2={10}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A2ACB6" />
          <stop offset={1} stopColor="#CCD4DB" />
        </linearGradient>
        <linearGradient
          id="diamond-badge_svg__paint1_linear"
          x1={10}
          y1={0}
          x2={10}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCD4DB" />
          <stop offset={1} stopColor="#A2ACB6" />
        </linearGradient>
        <linearGradient
          id="diamond-badge_svg__paint2_linear"
          x1={10}
          y1={6}
          x2={10}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgDiamondBadge;
