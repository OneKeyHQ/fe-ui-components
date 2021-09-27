import React, { FC, ReactNode } from "react";
import cx, { Argument } from "classnames";
import Icon from "../Icon";
import { ICON_NAMES } from "../Icon/Icons";

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
   * label
   */
  label?: string | ReactNode;
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
  label,
  ...rest
}) => {
  return (
    <div className="okd-flex">
      <button
        className={cx(
          "okd-flex-1 okd-p-2 okd--mx-2 okd-flex okd-items-center okd-text-sm okd-text-gray-700 okd-rounded hover:okd-bg-gray-50 focus:okd-bg-gray-100 focus:okd-outline-none",
          !!className && className
        )}
        onClick={onAction}
        {...rest}
      >
        {!!iconName && (
          <Icon
            name={iconName}
            className="okd-h-5 okd-w-5 okd-text-gray-400 okd-mr-3"
          />
        )}
        {label}
        {children}
      </button>
    </div>
  );
};

Action.defaultProps = defaultProps;

export default Action;
