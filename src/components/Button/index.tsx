import React, { FC, useCallback } from "react";
import cx from "classnames";
import Icon from "../Icon/index";
import { ICON_NAMES } from "../Icon/Icons";
import Spinner from "./Spinner";

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
   * 设置按钮形状为圆形
   */
  circular?: boolean | null;
  /**
   * 设置按钮大小
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  /**
   * 设置按钮类型
   */
  type?: "primary" | "basic" | "plain" | "destructive" | "link";
  /**
   * 设置额外的 class
   */
  className?: string | null;
  /**
   * 点击按钮时的回调，默认情况下，会同时注册键盘事件 onKeyEnter 点击回车
   */
  onClick?: (e: React.MouseEventHandler<HTMLElement>) => void;
};

const defaultProps = {
  block: false,
  danger: false,
  disabled: false,
  loading: false,
  circular: false,
  size: "base",
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
    circular,
    iconName,
    href,
    className,
  } = props;

  const handleClick = useCallback(
    (e) => {
      const { onClick, loading, disabled } = props;
      if (loading || disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    },
    [props]
  );

  const btnClasses = cx(
    // Shared styles
    "okd-inline-flex okd-items-center okd-justify-center okd-font-medium okd-rounded focus:okd-outline-none",
    // Full width
    { "okd-w-full": block },
    // Add border
    { "okd-border": !(type === "plain" || type === "link") },
    // The width and offset of ring
    { "focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-offset-white": !loading },
    // Text's color, background's color, border's color and ring's color
    type === "primary" && {
      "okd-text-white okd-bg-brand-500 okd-border-brand-500 okd-shadow-sm hover:okd-bg-brand-600 hover:okd-border-brand-600 focus:okd-ring-brand-500":
        !loading && !disabled,
      "okd-text-gray-300 okd-bg-gray-100 okd-border-gray-100":
        !!disabled || !!loading,
    },
    type === "basic" && {
      "okd-text-gray-700 okd-bg-white okd-border-gray-300 okd-shadow-sm hover:okd-bg-gray-50 focus:okd-ring-brand-500":
        !disabled && !loading,
      "okd-text-gray-300 okd-bg-white okd-border-gray-200":
        !!disabled || !!loading,
    },
    ["plain", "link"].includes(type) && {
      "okd-text-gray-700 hover:okd-bg-gray-50 focus:okd-ring-brand-500":
        !disabled && !loading,
      "okd-text-gray-300": !!disabled || !!loading,
    },
    type === "destructive" && {
      "okd-bg-white okd-text-red-600 okd-border-red-300 hover:okd-bg-red-50 focus:okd-ring-red-500":
        !disabled && !loading,
      "okd-bg-white okd-text-red-200 okd-border-red-200":
        !!disabled || !!loading,
    },
    // Cursor style
    { "okd-cursor-not-allowed": !!disabled || !!loading },
    // Paddings
    circular
      ? {
          "okd-p-1": size === "xs",
          "okd-p-1.5": size === "sm",
          "okd-p-2": size === "base" || size === "lg",
          "okd-p-3": size === "xl",
        }
      : {
          "okd-px-2.5 okd-py-1.5": size === "xs",
          "okd-px-3 okd-py-1.5": size === "sm",
          "okd-px-4 okd-py-2": size === "base" || size === "lg",
          "okd-px-6 okd-py-3": size === "xl",
        },
    // Font size
    { "okd-text-xs": size === "xs" },
    { "okd-text-sm": size === "sm" || size === "base" },
    // Border Radius
    circular ? "okd-rounded-full" : "okd-rounded"
  );

  if (type === "link" && href) {
    return (
      <a className={cx(btnClasses, !!className && className)} href={href}>
        {React.isValidElement(<Icon name={iconName} />) && (
          <Icon
            name={iconName}
            className={cx(
              // Size
              !circular
                ? {
                    "okd-w-4 okd-h-4": size === "xs" || size === "sm",
                    "okd-w-5 okd-h-5":
                      size === "base" || size === "lg" || size === "xl",
                  }
                : {
                    "okd-w-5 okd-h-5":
                      size === "xs" || size === "sm" || size === "base",
                    "okd-w-6 okd-h-6": size === "lg" || size === "xl",
                  },
              // Padding left
              { "okd--ml-0.5": !circular },
              // Padding right
              !circular && {
                "okd-mr-2": size === "xs" || size === "sm" || size === "base",
                "okd-mr-3": size === "lg" || size === "xl",
              },
              // Color
              !disabled ? "okd-text-gray-400" : "okd-text-gray-300"
            )}
          />
        )}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cx(btnClasses, !!className && className)}
      onClick={handleClick}
      disabled={!!disabled}
    >
      {loading ? (
        <Spinner
          buttonSize={size}
          buttonType={type}
          circularButton={circular}
        />
      ) : (
        <>
          {React.isValidElement(<Icon name={iconName} />) && (
            <Icon
              name={iconName}
              className={cx(
                // Size
                !circular
                  ? {
                      "okd-w-4 okd-h-4": size === "xs" || size === "sm",
                      "okd-w-5 okd-h-5":
                        size === "base" || size === "lg" || size === "xl",
                    }
                  : {
                      "okd-w-5 okd-h-5":
                        size === "xs" || size === "sm" || size === "base",
                      "okd-w-6 okd-h-6": size === "lg" || size === "xl",
                    },
                // Padding left
                { "okd--ml-0.5": !circular },
                // Padding right
                !circular && {
                  "okd-mr-2": size === "xs" || size === "sm" || size === "base",
                  "okd-mr-3": size === "lg" || size === "xl",
                },
                // Color
                !disabled
                  ? {
                      "okd-text-white": type === "primary",
                      "okd-text-gray-400": type === "basic" || type === "plain",
                      "okd-text-red-400": type === "destructive",
                    }
                  : {
                      "okd-text-gray-300":
                        type === "primary" ||
                        type === "basic" ||
                        type === "plain",
                      "okd-text-red-200": type === "destructive",
                    }
              )}
            />
          )}
          {children}
        </>
      )}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
