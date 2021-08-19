import React, { FC } from "react";
import cx from "classnames";

type ButtonProps = {
  /**
   * block 为 true 则宽度撑满父元素宽度，默认 false 则为 auto 宽度，自动根据内容长度变长。
   */
  block?: boolean | null;
  /**
   * 设置危险按钮（danger与type destructive是冲突的，所以暂不使用danger props）
   */
  danger?: boolean | null;
  /**
   * 按钮失效状态
   */
  disabled?: boolean | null;
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  href?: string | null;
  /**
   * 设置 button 原生的 type 值，可选值请参考 HTML 标准
   */
  htmlType?: string | null;
  /**
   * 设置按钮形状，默认为 circle 圆角，round 为圆形
   */
  shape?: "circle" | "round";
  /**
   * 设置按钮大小
   */
  size?: "xsmall" | "small" | "base" | "large" | "xlarge";
  /**
   * 设置按钮类型
   */
  type?: "primary" | "basic" | "plain" | "destructive";
  /**
   * 点击按钮时的回调，默认情况下，会同时注册键盘事件 onKeyEnter 点击回车
   */
  onClick?: () => void;
};

const defaultProps = {
  block: false,
  danger: false,
  disabled: false,
  shape: "circle",
  size: "base",
  type: "basic",
} as const;

const Button: FC<ButtonProps> = (props) => {
  const { children, block, disabled, type, size } = props;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props;
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<
      HTMLButtonElement | HTMLAnchorElement
    >)?.(e);
  };

  return (
    <button
      type="button"
      className={cx(
        "okd-inline-flex okd-items-center okd-justify-center okd-text-xs okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900",
        {
          "okd-px-4 okd-py-2": size === "base",
        },
        {
          "okd-bg-white okd-text-gray-700 okd-border okd-border-solid okd-border-gray-300 hover:okd-bg-gray-50 focus:okd-ring-brand-500 dark:hover:okd-bg-brand-500":
            type === "basic",
          "okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white":
            type === "primary",
          "okd-w-full": block,
        },
        {
          "okd-bg-white okd-text-gray-300 okd-cursor-not-allowed":
            type === "basic" && !!disabled,
          "okd-text-gray-100 okd-bg-gray-100": type === "primary" && !!disabled,
          "okd-text-gray-300": type === "plain" && !!disabled,
          "okd-bg-white okd-text-red-200": type === "destructive" && !!disabled,
        }
      )}
      // disabled={!!disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
