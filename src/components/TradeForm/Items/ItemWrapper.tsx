import React, { FC } from "react";
import cx, { Argument } from "classnames";

type ItemProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const Item: FC<ItemProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={cx(
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
