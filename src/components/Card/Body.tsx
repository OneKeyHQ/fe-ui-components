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
      className={cx(!!className && className, {
        "okd-p-4 sm:okd-p-6": !className,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

Body.defaultProps = defaultProps;

export default Body;
