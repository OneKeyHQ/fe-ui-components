import React, { FC } from "react";
import cx, { Argument } from "classnames";

type HeaderProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 表单标签
   */
  label?: string;
  /**
   * Corner content
   */
  labelCorner?: React.ReactNode;
};

const defaultProps = {} as const;

const Header: FC<HeaderProps> = ({
  className,
  label,
  labelCorner,
  ...rest
}) => {
  return (
    <div
      className={cx(
        "okd-flex okd-items-center okd-justify-between okd-mb-2",
        !!className && className
      )}
      {...rest}
    >
      {!!label && (
        <h5 className="okd-text-sm okd-font-medium okd-text-gray-700">
          {label}
        </h5>
      )}
      {!!labelCorner && labelCorner}
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;
