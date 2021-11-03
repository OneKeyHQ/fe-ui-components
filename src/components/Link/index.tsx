import React from "react";
import cx, { Argument } from "classnames";

import ExternalLinkIcon from "../Icon/react/solid/ExternalLink";

export type Props = {
  /**
   * 链接
   */
  href?: string;
  /**
   * 是否带颜色，是则显示主色，否为默认黑色
   */
  color?: boolean;
  /**
   * 是否带 外链icon
   */
  icon?: boolean;
  /**
   * 显示下划线
   */
  underline?: boolean;
  /**
   * 是否以块的方式显示链接
   */
  block?: boolean;
  /**
   * 转发的原生链接 Ref
   */
  ref?: React.Ref<HTMLAnchorElement>;
  /**
   * 样式属性，支持 classnames 的参数
   */
  className?: Argument;
};

const defaultProps = {
  href: undefined,
  color: false,
  icon: false,
  underline: false,
  block: false,
  className: "",
};

type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>;
export type LinkProps = Props & NativeAttrs;

/**
 * 带样式的链接组件
 */
const LinkComponent = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<LinkProps>
>(
  (
    {
      href,
      color,
      underline,
      children,
      className,
      block,
      icon,
      ...props
    }: React.PropsWithChildren<LinkProps> & typeof defaultProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    return (
      <a
        className={cx(
          "okd-inline-flex okd-group okd-rounded-sm",
          "okd-text-sm okd-font-medium",
          "focus:okd-outline-none focus:okd-ring-offset-2 focus:okd-ring-offset-white focus:okd-ring-2 focus:okd-ring-brand-500",
          {
            "okd-text-gray-700 hover:okd-text-900": !color,
            "okd-text-brand-600 hover:okd-text-brand-700": color,
            "okd-underline": underline,
            "okd-py-2 okd-px-4 hover:okd-bg-brand-100 okd-rounded-sm": block,
          },
          className
        )}
        href={href}
        {...props}
        ref={ref}
      >
        {icon && (
          <ExternalLinkIcon
            className={cx(
              "okd-w-5 okd-h-5",
              children ? "okd-mr-1" : null,
              color
                ? "okd-text-brand-500 group-hover:okd-text-brand-600"
                : "okd-text-gray-400 group-hover:okd-text-gray-500"
            )}
          />
        )}
        {children}
      </a>
    );
  }
);

LinkComponent.defaultProps = defaultProps;
LinkComponent.displayName = "Link";
const Link = LinkComponent;
export default Link;
