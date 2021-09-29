import React, { FC, ReactNode } from "react";
import cx, { Argument } from "classnames";
import Icon from "../Icon";
import { ICON_NAMES } from "../Icon/Icons";
import Item from "../Dropdown/Item";

type ActionProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * icon 名称
   */
  iconName?: ICON_NAMES;
  /**
   * Option 点击回调
   */
  onAction?: () => void;
};

const defaultProps = {} as const;

const Action: FC<ActionProps> = ({
  className,
  children,
  iconName,
  onAction,
  ...rest
}) => {
  return (
    <Item
      className={cx(
        "hover:okd-bg-gray-50 focus:okd-bg-gray-100 focus:okd-outline-none",
        !!className && className
      )}
      onAction={onAction}
      {...rest}
    >
      {!!iconName && (
        <Icon
          name={iconName}
          className="okd-h-5 okd-w-5 okd-text-gray-400 okd-mr-3"
        />
      )}
      {children}
    </Item>
  );
};

Action.defaultProps = defaultProps;

export default Action;
