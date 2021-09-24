import React, { FC } from "react";
import cx, { Argument } from "classnames";

type PageContentProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const PageContent: FC<PageContentProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={cx("okd-flex-1 okd-p-4 lg:okd-p-8 okd-overflow-y-auto", !!className && className)}
      {...rest}
    >
      <div className={cx("okd-w-full okd-max-w-6xl okd-mx-auto")}>
        {children}
      </div>
    </div>
  );
};

PageContent.defaultProps = defaultProps;

export default PageContent;
