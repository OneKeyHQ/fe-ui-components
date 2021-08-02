import React, { FC } from "react";
import { ReactSVG } from "react-svg";

import ICON_NAME from "./Icons";
import { useConfig } from "../Provider/hooks";

export type ICONS = typeof ICON_NAME;
export type ICON_TYPES = keyof ICONS;

type IconProps = {
  className?: string;
  name: ICON_TYPES;
  size?: number;
  color?: string;
};

const defaultProps = {
  size: 32,
} as const;

const Icon: FC<IconProps> = ({ className, name, color, size, ...rest }) => {
  const { theme } = useConfig();
  const defaultColor = color ?? theme?.["grey-500"] ?? "";
  return (
    <ReactSVG
      className={className}
      src={ICON_NAME[name]?.toUpperCase?.()}
      beforeInjection={(svg) => {
        svg.setAttribute("width", `${size}px`);
        svg.setAttribute("height", `${size}px`);
        svg.setAttribute("fill", defaultColor);
      }}
      {...rest}
    />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
