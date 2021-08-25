import React, { FC, useCallback } from "react";
import cx from "classnames";
import Icon from "../Icon/index";
import { ICON_NAMES } from "../Icon/Icons";

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
  iconName?: ICON_NAMES;
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
   * 设置按钮形状，默认为 circle 圆形，round 为圆角
   */
  shape?: "circle" | "round";
  /**
   * 设置按钮大小
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  /**
   * 设置按钮类型
   */
  type?: "primary" | "basic" | "plain" | "destructive" | "link";
  /**
   * 点击按钮时的回调，默认情况下，会同时注册键盘事件 onKeyEnter 点击回车
   */
  onClick?: () => void;
};

export const iconSizeMap = {
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
  shape: "round",
  size: "sm",
  type: "basic",
  // icon: <Icon name="AcademicCapOutline" size={16}></Icon>,
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
    iconName,
    href,
  } = props;

  const handleClick = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
    ) => {
      const { onClick, loading, disabled } = props;
      if (loading || disabled) {
        e.preventDefault();
        return;
      }
      (onClick as React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
      >)?.(e);
    },
    [props]
  );

  const iconSize = iconSizeMap[size];

  const classes = cx(
    "okd-inline-flex okd-items-center okd-justify-center okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900",
    {
      "okd-w-full": block,
    },
    type === "primary" && {
      "okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white":
        !loading && !disabled,
      "okd-bg-gray-100 okd-cursor-not-allowed hover:okd-bg-gray-200 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-gray-300":
        !!disabled || !!loading,
    },
    type === "basic" && {
      "okd-bg-white okd-text-gray-700 okd-border okd-border-solid okd-border-gray-300 hover:okd-bg-gray-50 focus:okd-ring-brand-500 dark:hover:okd-bg-brand-500": !disabled,
      "okd-bg-white okd-text-gray-300 okd-cursor-not-allowed okd-border okd-border-solid okd-border-gray-300 hover:okd-bg-gray-50 focus:okd-ring-brand-500 dark:hover:okd-bg-brand-500": !!disabled,
    },
    ["plain", "link"].includes(type) && {
      "okd-shadow-none okd-bg-white okd-text-gray-700 hover:okd-bg-gray-50 focus:okd-ring-brand-500 dark:hover:okd-bg-brand-500": !disabled,
      "okd-shadow-none okd-bg-white okd-text-gray-300 okd-cursor-not-allowed hover:okd-bg-gray-50 focus:okd-ring-brand-500 dark:hover:okd-bg-brand-500": !!disabled,
      "hover:okd-bg-white hover:okd-text-gray-500": type === "link",
    },
    type === "destructive" && {
      "okd-bg-white okd-text-red-600 okd-border okd-border-solid okd-border-red-300 hover:okd-bg-red-50 focus:okd-ring-red-500 dark:hover:okd-bg-red-500": !disabled,
      "okd-bg-white okd-text-red-200 okd-cursor-not-allowed okd-border okd-border-solid okd-border-red-300 hover:okd-bg-red-50 focus:okd-ring-red-500 dark:hover:okd-bg-red-500": !!disabled,
    },
    size === "xs" && {
      "okd-px-2.5 okd-py-2 okd-text-xs okd-w-22":
        !loading && !(shape === "circle" && iconName),
      "okd-px-9 okd-py-1.5 okd-text-xs": !!loading && shape !== "circle",
      "okd-rounded-full okd-px-0 okd-py-0 okd-w-7 okd-h-7 okd-text-xs":
        shape === "circle" && (iconName || !!loading),
    },
    size === "sm" && {
      "okd-px-3.5 okd-py-2 okd-text-sm":
        !loading && !(shape === "circle" && iconName),
      "okd-px-10 okd-py-1.5 okd-text-sm": !!loading && shape !== "circle",
      "okd-rounded-full okd-px-0 okd-py-0 okd-w-8.5 okd-h-8.5 okd-text-sm":
        shape === "circle" && (iconName || !!loading),
    },
    size === "base" && {
      "okd-px-4 okd-py-2 okd-text-base":
        !loading && !(shape === "circle" && iconName),
      "okd-px-11 okd-py-2 okd-text-base": !!loading && shape !== "circle",
      "okd-text-base okd-rounded-full okd-px-0 okd-py-0 okd-w-9.5 okd-h-9.5":
        shape === "circle" && (iconName || !!loading),
    },
    size === "lg" && {
      "okd-px-4 okd-py-2 okd-text-base":
        !loading && !(shape === "circle" && iconName),
      "okd-px-12 okd-py-2 okd-text-base": !!loading && shape !== "circle",
      "okd-text-base okd-rounded-full okd-px-0 okd-py-0 okd-w-10.5 okd-h-10.5":
        shape === "circle" && (iconName || !!loading),
    },
    size === "xl" && {
      "okd-px-6 okd-py-3 okd-text-base":
        !loading && !(shape === "circle" && iconName),
      "okd-px-14 okd-py-3 okd-text-base": !!loading && shape !== "circle",
      "okd-text-base okd-rounded-full okd-px-0 okd-py-0 okd-w-12.5 okd-h-12.5":
        shape === "circle" && (iconName || !!loading),
    }
  );

  if (type === "link" && href) {
    return (
      <a className={classes} href={href}>
        {React.isValidElement(<Icon name={iconName} />) && (
          <Icon name={iconName} size={iconSize} />
        )}
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
      {loading ? (
        <Icon
          name="LoadingOutline"
          size={iconSize}
          className="okd-text-xs"
        ></Icon>
      ) : shape === "circle" && !!iconName ? (
        React.isValidElement(<Icon name={iconName} />) && (
          <Icon name={iconName} size={iconSize}></Icon>
        )
      ) : (
        <>
          {React.isValidElement(<Icon name={iconName} />) && (
            <Icon className="okd-mr-2.5" name={iconName} size={iconSize}></Icon>
          )}
          {children}
        </>
      )}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
