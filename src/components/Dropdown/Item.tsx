import React, { FC } from "react";
import cx, { Argument } from "classnames";
import { ICON_NAMES } from "../Icon/Icons";
import Icon from "../Icon";
import { Menu } from "@headlessui/react";

type ItemProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * Currently focused
   */
  active?: boolean;
  /**
   * icon 名称
   */
  icon?: ICON_NAMES;
  /**
   * Option 点击回调
   */
  onAction?: () => void;
};

const defaultProps = {} as const;

const Item: FC<ItemProps> = ({
  className,
  children,
  active,
  onAction,
  icon,
  ...rest
}) => {
  return (
    <button
      className={cx(
        active ? "okd-text-gray-900 okd-bg-gray-100" : "okd-text-gray-700",
        "okd-flex okd-items-center okd--mx-2 okd-p-2 okd-text-sm okd-text-left okd-rounded okd-group",
        !!className && className
      )}
      onClick={onAction}
      {...rest}
    >
      {icon && (
        <Icon
          name={icon}
          className="okd-w-5 okd-h-5 okd-mr-3 okd-text-gray-400 group-hover:okd-text-gray-500"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
};

Item.defaultProps = defaultProps;

export default Item;
