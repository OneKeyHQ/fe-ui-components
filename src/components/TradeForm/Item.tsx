import React, { FC } from "react";
import cx, { Argument } from "classnames";

type ItemProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 只读状态
   */
  readonly?: boolean;
};

const defaultProps = {} as const;

const Item: FC<ItemProps> = ({ className, readonly, children, ...rest }) => {
  return (
    <div
      className={cx(
        readonly
          ? "okd-bg-white"
          : "okd-bg-gray-50 focus-within:okd-ring-1 focus-within:okd-ring-brand-500 focus-within:okd-border-brand-500 focus-within:okd-z-10",
        "okd-px-4 okd-py-3 okd-border okd-border-gray-200",
        "first:okd-rounded-t last:okd-rounded-b only:okd-rounded",
        !!className && className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

Item.defaultProps = defaultProps;

export default Item;
