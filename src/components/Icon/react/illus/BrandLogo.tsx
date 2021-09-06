import * as React from "react";

function SvgBrandLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.918 13.459c0 9.291-4.168 13.459-13.46 13.459C4.169 26.918 0 22.75 0 13.458 0 4.169 4.167 0 13.459 0c9.291 0 13.459 4.167 13.459 13.459z"
        fill="currentColor"
      />
      <path
        d="M10.93 5.707h3.745v6.17h-2.322V7.693h-2.08l.657-1.986z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.459 21.21a4.27 4.27 0 100-8.54 4.27 4.27 0 000 8.54zm2.331-4.27a2.332 2.332 0 11-4.663 0 2.332 2.332 0 014.663 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgBrandLogo;
