import * as React from "react";

function SvgBrandLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 27 27"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.459 26.918c9.291 0 13.459-4.168 13.459-13.46C26.918 4.169 22.75 0 13.458 0 4.169 0 0 4.167 0 13.459c0 9.291 4.167 13.459 13.459 13.459zM10.93 5.707h3.744v6.17h-2.322V7.693h-2.08l.658-1.986zm2.528 15.504a4.27 4.27 0 100-8.54 4.27 4.27 0 000 8.54zm0-1.939a2.332 2.332 0 100-4.663 2.332 2.332 0 000 4.663z"
      />
    </svg>
  );
}

export default SvgBrandLogo;
