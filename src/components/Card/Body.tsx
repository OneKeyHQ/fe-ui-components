import React, { FC } from "react";
import cx, { Argument } from "classnames";

type BodyProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const Body: FC<BodyProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={cx("okd-px-4 sm:okd-px-6 okd-py-6", !!className && className)}
      {...rest}
    >
      {children}
    </div>
  );
};

Body.defaultProps = defaultProps;

export default Body;
