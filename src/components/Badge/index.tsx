import React, { FC } from "react";
import classNames from "classnames";

export type BadgeProps = {
  /**
   * 传入 badge 组件的样式名称
   */
  className?: string;
  /**
   * badge 类型
   */
  type?: "default" | "primary" | "important" | "removed" | "added";
};

const defaultProps = {
  type: "default",
} as const;

const Badge: FC<BadgeProps> = ({ className, children, type, ...rest }) => {
  return (
    <div
      className={classNames(
        className,
        "okd-inline-block okd-font-medium okd-text-xs okd-py-0.5 okd-px-1.5 okd-rounded",
        {
          "okd-bg-gray-100 okd-text-gray-500 dark:okd-bg-gray-700 dark:okd-text-gray-300":
            type === "default",
          "okd-bg-brand-500 okd-text-white dark:okd-bg-brand-300 dark:okd-text-brand-900":
            type === "primary",
          "okd-bg-red-500 okd-text-white dark:okd-bg-red-300 dark:okd-text-red-900":
            type === "important",
          "okd-bg-brand-100 okd-text-brand-600 dark:okd-bg-brand-800 dark:okd-text-brand-200":
            type === "added",
          "okd-bg-red-100 okd-text-red-500 dark:okd-bg-red-800 dark:okd-text-red-200":
            type === "removed",
        }
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

Badge.defaultProps = defaultProps;

export default Badge;
