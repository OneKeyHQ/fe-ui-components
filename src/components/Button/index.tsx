import React, { FC, useEffect } from "react";
import cx from "classnames";
import Icon from "../Icon/index";

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
   * 设置按钮的图标组件，如果想控制Icon具体的位置，只能直接使用Icon组件，而非icon属性
   */
  icon?: React.ReactNode;
  /**
   * 设置按钮的载入状态
   */
  loading?: boolean | null;
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
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  /**
   * 设置按钮类型
   */
  type?: "primary" | "basic" | "plain" | "destructive";
  /**
   * 点击按钮时的回调，默认情况下，会同时注册键盘事件 onKeyEnter 点击回车
   */
  onClick?: () => void;
};

const loadingIconSizeMap = {
  xs: 16,
  sm: 20,
  base: 20,
  lg: 24,
  xl: 24,
};

const defaultProps = {
  block: false,
  danger: false,
  disabled: false,
  loading: false,
  shape: "circle",
  size: "xs",
  type: "basic",
  // icon: <Icon name="LoadingOutline" size={16}></Icon>,
} as const;

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    block,
    disabled,
    type,
    size,
    loading,
    shape,
    icon,
    href,
  } = props;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props;
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<
      HTMLButtonElement | HTMLAnchorElement
    >)?.(e);
  };

  const loadingIconSize = loadingIconSizeMap[size];

  const classes = cx(
    "okd-inline-flex okd-items-center okd-justify-center okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900",
    {
      "okd-px-2.5 okd-py-1.5 okd-text-xs okd-w-22": size === "xs",
      "okd-px-3.5 okd-py-1.5 okd-text-sm": size === "sm",
      "okd-px-4 okd-py-2 okd-text-base": size === "base" || size === "lg",
      "okd-px-6 okd-py-3  okd-text-base": size === "xl",
    },
    {
      "okd-px-9": size === "xs" && !!loading,
      "okd-px-10": size === "sm" && !!loading,
      "okd-px-11": size === "base" && !!loading,
      "okd-px-12": size === "lg" && !!loading,
      "okd-px-14": size === "xl" && !!loading,
    },
    {
      "okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white":
        type === "primary",
      "okd-bg-white okd-text-gray-700 okd-border okd-border-solid okd-border-gray-300 hover:okd-bg-gray-50 focus:okd-ring-brand-500 dark:hover:okd-bg-brand-500":
        type === "basic",
      "okd-bg-white okd-text-gray-700 hover:okd-bg-gray-50 focus:okd-ring-brand-500 dark:hover:okd-bg-brand-500":
        type === "plain",
      "okd-bg-white okd-text-red-600 okd-border okd-border-solid okd-border-red-300 hover:okd-bg-red-50 focus:okd-ring-red-500 dark:hover:okd-bg-red-500":
        type === "destructive",
      "okd-w-full": block,
    },
    // {
    //   "okd-bg-gray-100": type === "primary" && !!loading,
    // },
    {
      "okd-bg-white okd-text-gray-300 okd-cursor-not-allowed":
        type === "basic" && !!disabled,
      "okd-text-gray-100 okd-bg-gray-100":
        type === "primary" && (!!disabled || !!loading),
      "okd-text-gray-300": type === "plain" && !!disabled,
      "okd-bg-white okd-text-red-200": type === "destructive" && !!disabled,
    }
    // {
    //   "okd-rounded-circle okd-px-0 okd-py-0 w-7.5 h-7.5":
    //     shape === "circle" && size === "xs" && icon,
    //   "okd-rounded-circle okd-px-0 okd-py-0 w-8.5 h-8.5":
    //     shape === "circle" && size === "sm" && icon,
    //   "okd-rounded-circle okd-px-0 okd-py-0 w-9.5 h-9.5":
    //     shape === "circle" && size === "base" && icon,
    //   "okd-rounded-circle okd-px-0 okd-py-0 w-10.5 h-10.5":
    //     shape === "circle" && size === "lg" && icon,
    //   "okd-rounded-circle okd-px-0 okd-py-0 w-12.5 h-12.5":
    //     shape === "circle" && size === "xl" && icon,
    // }
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      // disabled={!!disabled}
      onClick={handleClick}
    >
      {/* {children} */}
      {loading ? (
        <Icon name="LoadingOutline" size={loadingIconSize}></Icon>
      ) : shape === "circle" && !!icon ? (
        icon
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
