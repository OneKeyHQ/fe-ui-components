import React, { FC, ReactNode } from "react";
import cx, { Argument } from "classnames";

type OptionGroupProps = {
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

const OptionGroup: FC<OptionGroupProps> = ({ className, children, title, ...rest }) => {
  return (
    <div className={cx("okd-py-1 okd-space-y-1", !!className && className)} {...rest}>
      {!!title && (
        <div className="okd-pt-1 okd-text-xs okd-uppercase okd-tracking-widest okd-text-gray-500">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

OptionGroup.defaultProps = defaultProps;

export default OptionGroup;
