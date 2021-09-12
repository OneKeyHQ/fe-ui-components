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
}

const defaultProps = {
  href: "",
  color: false,
  pure: false,
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
          "okd-inline-flex okd-transition-colors okd-duration-200 okd-p-0 okd-m-0 okd-w-[fit-content]",
          "okd-text-sm okd-font-medium okd-leading-5",
          {
            "okd-text-gray-800 hover:okd-text-black": !color,
            "okd-text-brand-500 hover:okd-text-brand-600": color,
            "okd-underline": underline,
            "okd-py-2 okd-px-4 hover:okd-bg-green-100 okd-rounded-sm": block,
          },
          className
        )}
        href={href}
        {...props}
        ref={ref}
      >
        {icon && <ExternalLinkIcon className="okd-w-5 okd-h-5" />}
        {children}
      </a>
    );
  }
);

LinkComponent.defaultProps = defaultProps;
LinkComponent.displayName = "Link";
const Link = LinkComponent;
export default Link;
