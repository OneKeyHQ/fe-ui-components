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
        "inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-900",
        {
          "hover:border-brand-500 hover:text-brand-500 focus:ring-brand-500 dark:hover:bg-brand-500":
            type === "default",
          "bg-brand-500 hover:bg-brand-600 focus:ring-brand-500 dark:bg-brand-600 dark:hover:bg-brand-500 border-transparent text-white":
            type === "primary",
          "w-full": block,
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
