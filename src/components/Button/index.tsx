import React, { FC, useCallback } from "react";
import cx from "classnames";
import Icon from "../Icon/index";
import { ICON_NAMES } from "../Icon/Icons";
import Spinner from "./Spinner";
import { LeadingIcon, TrailingIcon } from "./ButtonIcon";

export type ButtonProps = {
  /**
   * block 为 true 则宽度撑满父元素宽度，默认 false 则为 auto 宽度，自动根据内容长度变长。
   */
  block?: boolean | null;
  /**
   * 按钮失效状态
   */
  disabled?: boolean | null;
  /**
   * 前置图标
   */
  leadingIcon?: ICON_NAMES;
  /**
   * 后置图标
   */
  trailingIcon?: ICON_NAMES;
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
  type?: "primary" | "basic" | "plain" | "destructive";
  /**
   * 设置额外的 class
   */
  className?: string | null;
  /**
   * 内容更改回调信息
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * 设置额外的 class
   */
  as?: "button" | "a";
  ring?: boolean | null;
} & Omit<React.HTMLProps<HTMLButtonElement>, "size"> &
  Omit<React.HTMLProps<HTMLAnchorElement>, "size">;

const defaultProps = {
  block: false,
  disabled: false,
  loading: false,
  circular: false,
  ring: true,
  size: "base",
  type: "basic",
  as: "button",
  // icon: <Icon name="AcademicCapOutline" size={16}></Icon>,
} as const;

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    block,
    disabled,
    onClick,
    type,
    size,
    loading,
    circular,
    leadingIcon,
    trailingIcon,
    href,
    className,
    as,
    ring,
    ...rest
  } = props;

  const handleClick = useCallback(
    (e) => {
      if (loading || disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    },
    [disabled, loading, onClick]
  );

  const btnClasses = cx(
    // Shared styles
    "okd-inline-flex okd-items-center okd-justify-center okd-font-medium okd-rounded focus:okd-outline-none",
    // Full width
    { "okd-w-full": block },
    // Add border
    { "okd-border": type !== "plain" },
    // The width and offset of ring
    {
      "focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-offset-white": !loading && ring,
    },
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
    ["plain"].includes(type) && {
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

  if (as === "a" && href) {
    return (
      <a
        role="button"
        className={cx(btnClasses, !!className && className)}
        href={href}
        {...rest}
      >
        {loading ? (
          <>
            <Spinner
              buttonSize={size}
              buttonType={type}
              circularButton={circular}
              className={cx({
                "okd-mr-2": size === "xs" || size === "sm" || size === "base",
                "okd-mr-3": size === "lg" || size === "xl",
              })}
            />
            {children}
          </>
        ) : (
          <>
            {React.isValidElement(<Icon name={leadingIcon} />) && (
              <LeadingIcon
                iconName={leadingIcon}
                circularButton={circular}
                buttonSize={size}
                isDisabledButton={disabled}
                buttonType={type}
              />
            )}
            {children}
            {React.isValidElement(<Icon name={trailingIcon} />) && (
              <TrailingIcon
                iconName={trailingIcon}
                circularButton={circular}
                buttonSize={size}
                isDisabledButton={disabled}
                buttonType={type}
              />
            )}
          </>
        )}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cx(btnClasses, !!className && className)}
      onClick={handleClick}
      disabled={!!disabled}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner
            buttonSize={size}
            buttonType={type}
            circularButton={circular}
            className={cx({
              "okd-mr-2": size === "xs" || size === "sm" || size === "base",
              "okd-mr-3": size === "lg" || size === "xl",
            })}
          />
          {children}
        </>
      ) : (
        <>
          {React.isValidElement(<Icon name={leadingIcon} />) && (
            <LeadingIcon
              iconName={leadingIcon}
              circularButton={circular}
              buttonSize={size}
              isDisabledButton={disabled}
              buttonType={type}
            />
          )}
          {children}
          {React.isValidElement(<Icon name={trailingIcon} />) && (
            <TrailingIcon
              iconName={trailingIcon}
              circularButton={circular}
              buttonSize={size}
              isDisabledButton={disabled}
              buttonType={type}
            />
          )}
        </>
      )}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
