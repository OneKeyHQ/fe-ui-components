import React, { FC, HTMLAttributes } from "react";
import { omit } from 'lodash';

import ICON_CONFIG, { ICON_NAMES } from "./Icons";

export type IconProps = {
  /**
   * 传入组件中的 class 样式名字
   */
  className?: string;
  /**
   * 图标名称，大小写均可
   */
  name: Lowercase<ICON_NAMES> | ICON_NAMES;
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

const Icon: FC<IconProps> = (props) => {
  const SVGComponent = ICON_CONFIG[props?.name?.toUpperCase() as ICON_NAMES];
  if (!SVGComponent) return null;

  return (
    <SVGComponent
      {...omit(props, 'name')}
    />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
