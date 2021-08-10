import React, { FC, HTMLAttributes } from "react";
import { ReactSVG } from "react-svg";

import ArrowCircleRightSolidSvg from "../files/solid/arrow-circle-right.svg";

export type ArrowCircleRightSolidSvgProps = {
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

const ArrowCircleRightSolid: FC<ArrowCircleRightSolidSvgProps> = ({
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
      src={ArrowCircleRightSolidSvg}
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

ArrowCircleRightSolid.defaultProps = defaultProps;

export default ArrowCircleRightSolid;
