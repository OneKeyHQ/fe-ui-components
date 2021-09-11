import React, { FC, useCallback, useState } from "react";
import cx, { Argument } from "classnames";

import Token, { TokenProps } from "../Token";
import Icon from "../Icon";

export type TagProps = {
  /** 前置 token 的 props 属性，同 Token 组件 */
  token?: TokenProps;
  /** 是否是激活状态 */
  active?: boolean;
  /** 状态改变回调函数 */
  onChange?: (status: boolean) => void;
  /** 尺寸大小 */
  size?: "sm" | "lg";
  /** 所处环境，默认是白色背景 */
  theme?: "onWhite" | "onGray";
  /** 是否可移除 */
  removeable?: boolean;
  /** 是否可点击 */
  clickable?: boolean;
  /** 实现类似 Checkbox 的效果，点击切换选中效果 */
  checkable?: boolean;
  /** 设置额外的 class */
  className?: Argument;
};

const defaultProps = {
  size: "sm",
  theme: "onWhite",
} as const;

const Tag: FC<TagProps> = ({
  token,
  children,
  active,
  size,
  theme,
  onChange,
  removeable,
  clickable,
  checkable,
  className,
}) => {
  const [status, setStatus] = useState(false);
  const isActive = active ?? status;

  const handleClick = useCallback(() => {
    onChange?.(!isActive);
    setStatus(!isActive);
  }, [onChange, isActive]);

  return (
    <div
      className={cx(
        size === "sm" ? "okd-px-1.5 okd-text-xs" : "okd-px-2 okd-text-sm",
        theme === "onWhite"
          ? "okd-bg-gray-100 okd-text-gray-500"
          : "okd-bg-gray-200 okd-text-gray-600",
        isActive
          ? "okd-ring-2 okd-ring-offset-2 okd-ring-brand-500 okd-ring-offset-white"
          : "",
        !!(clickable || checkable) ? "okd-cursor-pointer" : "",
        !!(clickable || checkable)
          ? !isActive
            ? "hover:okd-ring-2 hover:okd-ring-gray-200 hover:okd-ring-offset-2 hover:okd-ring-offset-white"
            : ""
          : "",
        "okd-inline-flex okd-items-center okd-rounded-full okd-py-0.5 okd-font-medium",
        !!className && className
      )}
      onClick={handleClick}
    >
      {!!token && (
        <Token
          className={cx(
            size === "sm" ? "okd--ml-1" : "",
            size === "lg" ? "okd--ml-1.5" : "",
            size === "sm" ? (children ? "okd-mr-1" : "okd--mr-1") : "",
            size === "lg" ? (children ? "okd-mr-1" : "okd--mr-1.5") : ""
          )}
          size={size === "sm" ? "xs" : "sm"}
          {...token}
        ></Token>
      )}
      {children}
      {!!removeable && (
        <button
          className={cx(
            "okd-ml-0.5 okd--mr-1 okd-p-0.5 okd-rounded-full",
            "focus:okd-bg-gray-500 focus:okd-text-white focus:okd-outline-none",
            theme === "onWhite"
              ? "hover:okd-bg-gray-200 okd-text-gray-400 hover:okd-text-gray-500"
              : "",
            theme === "onGray"
              ? "hover:okd-bg-gray-300 okd-text-gray-500 hover:okd-text-gray-600"
              : ""
          )}
        >
          <Icon name="CloseSolid" className={cx("okd-w-3 okd-h-3")} />
        </button>
      )}
    </div>
  );
};

Tag.defaultProps = defaultProps;

export default Tag;
