import React, { FC } from "react";
import cx from "classnames";

export type BadgeProps = {
  /**
   * 尺寸大小
   */
  size?: "sm" | "lg";

  /**
   * 是否坐落在灰色的背景上，默认所处环境是白色
   */
  onGray?: boolean;

  /**
   * 类型
   */
  type?: "default" | "success" | "info" | "warning" | "critical";

  /*
   * 圆点 – 装饰性元素，默认不显示，通常用来强调状态，如 pending, success, warning
   */
  dot?: boolean;
  
  /**
   * 传入 badge 组件的样式名称
   */
  className?: string;
};

const defaultProps = {
  size: "sm",
  type: "default",
  onGray: false,
  dot: false,
} as const;

const Badge: FC<BadgeProps> = ({
  className,
  children,
  type,
  size,
  onGray,
  dot,
  ...rest
}) => {
  return (
    <div
      className={cx(
        className,
        "okd-inline-flex okd-items-center okd-py-0.5 okd-font-medium okd-rounded",
        {
          "okd-px-1.5 okd-text-xs": size === "sm",
          "okd-px-2 okd-text-sm": size === "lg",
        },
        onGray
          ? {
              "okd-bg-gray-200 okd-text-gray-600": type === "default",
              "okd-bg-green-200 okd-text-green-700": type === "success",
              "okd-bg-blue-100 okd-text-blue-600": type === "info",
              "okd-bg-yellow-200 okd-text-yellow-800": type === "warning",
              "okd-bg-red-100 okd-text-red-500": type === "critical",
            }
          : {
              "okd-bg-gray-100 okd-text-gray-500": type === "default",
              "okd-bg-green-100 okd-text-green-600": type === "success",
              "okd-bg-blue-100 okd-text-blue-600": type === "info",
              "okd-bg-yellow-100 okd-text-yellow-700": type === "warning",
              "okd-bg-red-100 okd-text-red-500": type === "critical",
            }
      )}
      {...rest}
    >
      {dot && (
        <div className="okd-p-px okd-mr-1.5">
          <div
            className={cx("okd-w-1.5 okd-h-1.5 okd-rounded-full", {
              "okd-bg-gray-400": type === "default",
              "okd-bg-green-400": type === "success",
              "okd-bg-blue-400": type === "info",
              "okd-bg-yellow-400": type === "warning",
              "okd-bg-red-400": type === "critical",
            })}
          />
        </div>
      )}
      {children}
    </div>
  );
};

Badge.defaultProps = defaultProps;

export default Badge;
