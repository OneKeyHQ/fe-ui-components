import React, { FC, ReactNode } from "react";
import cx, { Argument } from "classnames";

type ItemGroupProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * Group title
   */
  title?: ReactNode;
};

const defaultProps = {} as const;

const ItemGroup: FC<ItemGroupProps> = ({ className, children, title, ...rest }) => {
  return (
    <div
      className={cx(
        "okd-flex okd-flex-col okd-space-y-1 okd-py-1",
        !!className && className
      )}
      {...rest}
    >
      {!!title && (
        <div className="okd-pt-1 okd-text-xs okd-font-medium okd-text-gray-500 okd-tracking-wider okd-uppercase okd-top-0 okd-sticky okd-bg-white">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

ItemGroup.defaultProps = defaultProps;

export default ItemGroup;
