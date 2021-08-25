import React, { FC, HTMLAttributes } from "react";
import { ReactSVG } from "react-svg";
import LoadingSvg from "../../../../svg/outline/loading-indicator.svg";

export type LoadingSvgProps = {
  /**
   * 传入组件中的 class 样式名字
   */
  className?: string;
  /**
   * 图标大小
   */
  size?: number;
  /**
   * 图标填充颜色（注：未设置时同时继承自父元素 color 属性）
   */
  color?: string;
} & Pick<HTMLAttributes<HTMLDivElement>, "onClick">;

const defaultProps = {
  size: 24,
} as const;

const LoadingOutline: FC<LoadingSvgProps> = ({
  className,
  color,
  size,
  ...rest
}) => {
  return (
    // @ts-expect-error
    <ReactSVG
      className={className}
      wrapper="div"
      src={LoadingSvg}
      beforeInjection={(svg) => {
        svg.setAttribute("width", `${size}px`);
        svg.setAttribute("height", `${size}px`);
        if (color) {
          svg.setAttribute("color", color);
        }
      }}
      {...rest}
    />
  );
};

LoadingOutline.defaultProps = defaultProps;

export default LoadingOutline;

// import * as React from "react";

// function LoadingOutline(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       // width="25"
//       // height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <g clipPath="url(#clip0)">
//         <path
//           d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
//           stroke="#A0A0B0"
//           strokeWidth="4"
//         />
//         <path
//           d="M6.84315 6.34315C5.34285 7.84344 4.5 9.87827 4.5 12C4.49661 13.949 5.20821 15.8316 6.5 17.291L3.5 19.938C1.635 17.824 0.5 15.042 0.5 12C0.5 5.373 5.873 0 12.5 0V4C10.3783 4 8.34344 4.84285 6.84315 6.34315Z"
//           fill="#D3D3DE"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0">
//           <rect
//             width="24"
//             height="24"
//             fill="white"
//             transform="translate(0.5)"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// export default LoadingOutline;
