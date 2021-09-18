import React, { FC } from "react";
import cx, { Argument } from "classnames";
import Page, { PageProps } from "../Page";
import Sidebar, { SidebarProps } from "../Sidebar";

type LayoutProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 是否显示 sidebar，默认为 true
   */
  sidebar?: boolean;
  /**
   * 传入 Sidebar 的 props 属性
   */
  sidebarProps?: SidebarProps;
  /**
   * Page 的属性
   */
  pageProps?: PageProps;
};

const defaultProps = {
  sidebar: true,
} as const;

const Layout: FC<LayoutProps> = ({
  className,
  children,
  sidebar,
  sidebarProps,
  pageProps,
  ...rest
}) => {
  return (
    <div
      className={cx(
        "okd-flex okd-flex-col okd-w-full okd-h-full okd-h-screen lg:okd-flex-row okd-antialiased",
        !!className && className
      )}
      {...rest}
    >
      {!!sidebar && <Sidebar {...sidebarProps} />}
      <Page {...pageProps}>{children}</Page>
    </div>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
