import React, { FC, ReactNode } from "react";
import cx, { Argument } from "classnames";
import ItemGroup from "../Dropdown/ItemGroup";

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

const OptionGroup: FC<OptionGroupProps> = ({
  className,
  children,
  title,
  ...rest
}) => {
  return (
    <ItemGroup
      title={title}
      className={cx("", !!className && className)}
      {...rest}
    >
      {children}
    </ItemGroup>
  );
};

OptionGroup.defaultProps = defaultProps;

export default OptionGroup;
