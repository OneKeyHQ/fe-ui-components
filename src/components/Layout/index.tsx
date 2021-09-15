import React, { FC } from "react";
import cx, { Argument } from "classnames";
import Page, { PageProps } from "../Page";
import Sidebar from "../Sidebar";

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
   * Page 的属性
   */
  page?: PageProps;
};

const defaultProps = {
  sidebar: true,
} as const;

const Layout: FC<LayoutProps> = ({
  className,
  children,
  sidebar,
  page,
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
      {!!sidebar && <Sidebar />}
      <Page {...page}>{children}</Page>
    </div>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
