import * as React from "react";

function SvgLoadingIndicator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#loading-indicator_svg__clip0)">
        <path
          d="M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
          stroke="#A0A0B0"
          strokeWidth={4}
        />
        <path
          d="M6.843 6.343A8 8 0 006.5 17.291l-3 2.647A11.966 11.966 0 01.5 12c0-6.627 5.373-12 12-12v4a8 8 0 00-5.657 2.343z"
          fill="#D3D3DE"
        />
      </g>
      <defs>
        <clipPath id="loading-indicator_svg__clip0">
          <path fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgLoadingIndicator;
