import React, { FC, HTMLAttributes } from "react";
import { ReactSVG } from "react-svg";

import ICON_NAME from "./Icons";
import { useConfig } from "../Provider/hooks";

export type ICONS = typeof ICON_NAME;
export type ICON_TYPES = keyof ICONS;

type IconProps = {
  /**
   * 传入组件中的 class 样式名字
   */
  className?: string;
  /**
   * 图标名称，大小写均可
   */
  name: Lowercase<ICON_TYPES> | ICON_TYPES;
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

const Icon: FC<IconProps> = ({ className, name, color, size, ...rest }) => {
  const { theme } = useConfig();

  return (
    // @ts-expect-error
    <ReactSVG
      className={className}
      wrapper="div"
      // toUpperCase 会丢掉 ICON_TYPES 类型
      src={ICON_NAME[name.toUpperCase() as ICON_TYPES]}
      beforeInjection={(svg) => {
        svg.setAttribute("width", `${size}px`);
        svg.setAttribute("height", `${size}px`);
        if (color) {
          svg.setAttribute("color", theme?.[color] || color);
        }
      }}
      {...rest}
    />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
