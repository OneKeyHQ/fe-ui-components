import React, { FC, Fragment } from "react";
import cx, { Argument } from "classnames";
import Icon from "../Icon";
import Button from "../Button";
import Tooltip from "../Tooltip";

type OptionProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 是否已选
   */
  isSelected?: boolean;
  /**
   * 按钮操作
   */
  actions?: Array<any>;
  /**
   * Option 点击回调
   */
  onAction?: () => void;
};

const defaultProps = {} as const;

const Option: FC<OptionProps> = ({
  className,
  children,
  isSelected,
  actions,
  onAction,
  ...rest
}) => {
  return (
    <div
      className={cx(
        "okd-flex okd-items-center okd-justify-between",
        !!className && className
      )}
      {...rest}
    >
      <button
        className={cx(
          "okd-flex-1 okd-p-2 okd--mx-2 okd-flex okd-rounded hover:okd-bg-gray-50 focus:okd-bg-gray-100 focus:okd-outline-none",
          !isSelected ? "okd-pl-10" : ""
        )}
        onClick={onAction}
      >
        {!!isSelected && (
          <Icon
            name="CheckSolid"
            className="okd-h-5 okd-w-5 okd-text-brand-500 okd-mr-3"
          />
        )}
        {children}
      </button>
      {!!actions && (
        <div className="okd-flex-shrink-0 okd-inline-flex okd-space-x-4 okd-px-2">
          {actions.map((item, key) => (
            <Fragment key={key}>
              <div className="okd-flex okd-justify-center okd-items-center okd-w-5 okd-h-5">
                {!item.tooltipContent ? (
                  <Button
                    leadingIcon={item.icon}
                    type="plain"
                    circular
                    size="sm"
                    onClick={item.onAction}
                  />
                ) : (
                  <Tooltip content={item.tooltipContent} place="top">
                    <Button
                      leadingIcon={item.icon}
                      type="plain"
                      circular
                      size="sm"
                      onClick={item.onAction}
                    />
                  </Tooltip>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

Option.defaultProps = defaultProps;

export default Option;
