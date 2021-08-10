import React, { FC, HTMLAttributes } from "react";
import { ReactSVG } from "react-svg";

import CurrencyBangladeshiOutlineSvg from "../files/outline/currency-bangladeshi.svg";

export type CurrencyBangladeshiOutlineSvgProps = {
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

const CurrencyBangladeshiOutline: FC<CurrencyBangladeshiOutlineSvgProps> = ({
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
      src={CurrencyBangladeshiOutlineSvg}
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

CurrencyBangladeshiOutline.defaultProps = defaultProps;

export default CurrencyBangladeshiOutline;
