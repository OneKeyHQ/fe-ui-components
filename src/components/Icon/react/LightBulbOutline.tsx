import React, { FC, HTMLAttributes } from "react";
import { ReactSVG } from "react-svg";

import LightBulbOutlineSvg from "../files/outline/light-bulb.svg";

export type LightBulbOutlineSvgProps = {
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

const LightBulbOutline: FC<LightBulbOutlineSvgProps> = ({
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
      src={LightBulbOutlineSvg}
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

LightBulbOutline.defaultProps = defaultProps;

export default LightBulbOutline;
