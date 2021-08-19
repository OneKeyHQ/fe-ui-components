import React, { FC } from "react";
import cx from "classnames";

type ButtonProps = {
  /**
   * block 为 true 则宽度撑满父元素宽度，默认 false 则为 auto 宽度，自动根据内容长度变长。
   */
  block?: boolean | null;
  /**
   * 设置危险按钮
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
  size?: "large" | "middle" | "small";
  /**
   * 设置按钮类型
   */
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
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
  size: "middle",
  type: "default",
} as const;

const Button: FC<ButtonProps> = ({ children, block, disabled, type }) => {
  return (
    <button
      type="button"
      className={cx(
        "okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900",
        {
          "hover:okd-border-brand-500 hover:okd-text-brand-500 focus:okd-ring-brand-500 dark:hover:okd-bg-brand-500":
            type === "default",
          "okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white":
            type === "primary",
          "okd-w-full": block,
        }
      )}
      disabled={!!disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
