import React, { FC, ReactNode, useMemo } from "react";
import cx, { Argument } from "classnames";

import CheckCircleSolid from "../Icon/react/solid/CheckCircle";
import ExclamationSolid from "../Icon/react/solid/Exclamation";
import InformationCircleSolid from "../Icon/react/solid/InformationCircle";
import XCircleSolid from "../Icon/react/solid/CloseCircle";
import XSolid from "../Icon/react/solid/Close";

export const alertIcons = {
  info: (
    <InformationCircleSolid
      className="okd-h-5 okd-w-5 okd-text-gray-400"
      okd-aria-hidden="true"
    />
  ),
  warning: (
    <ExclamationSolid
      className="okd-h-5 okd-w-5 okd-text-yellow-400"
      okd-aria-hidden="true"
    />
  ),
  error: (
    <XCircleSolid
      className="okd-h-5 okd-w-5 okd-text-red-400"
      okd-aria-hidden="true"
    />
  ),
  success: (
    <CheckCircleSolid
      className="okd-h-5 okd-w-5 okd-text-green-400"
      okd-aria-hidden="true"
    />
  ),
};

export type AlertProps = {
  /**
   * 标题
   */
  title: ReactNode;
  /**
   * 内容
   */
  content?: ReactNode;
  /**
   * Alert 的类型
   */
  type?: "info" | "warning" | "error" | "success";
  /**
   * 是否可关闭
   */
  closable?: boolean;
  /**
   * 点击关闭按钮的事件
   */
  onClose?: () => void;
  /**
   * 自定义左边的提示 Icon
   */
  icon?: ReactNode;
  /**
   * 自定义右边的按钮
   */
  action?: ReactNode;
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 设置内容容器的 class
   */
  contentClassName?: Argument;
};

const defaultProps = {
  type: "info",
  closable: false,
} as const;

const Alert: FC<AlertProps> = ({
  type,
  icon,
  action,
  title,
  content,
  closable,
  onClose,
  contentClassName,
  className,
  children,
}) => {
  const alertIconNode = icon ?? alertIcons[type];
  const textContent = content ?? children;

  const rightNode = useMemo(() => {
    if (!!action) {
      return (
        <div className="sm:okd-ml-auto okd-w-full okd-flex sm:okd-w-auto okd-self-center okd-pl-3">
          {action}
        </div>
      );
    }

    return (
      closable && (
        <div className="okd-ml-auto okd-pl-3">
          <button
            type="button"
            className={cx(
              "okd-inline-flex okd-justify-center okd-items-center okd-rounded okd-p-1.5 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-1",
              {
                "okd-text-gray-400 focus:okd-ring-offset-gray-50 focus:okd-ring-gray-600":
                  type === "info",
                "okd-text-yellow-500 focus:okd-ring-offset-yellow-50 focus:okd-ring-yellow-600":
                  type === "warning",
                "okd-text-red-500 focus:okd-ring-offset-red-50 focus:okd-ring-red-600":
                  type === "error",
                "okd-text-green-500 focus:okd-ring-offset-green-50 focus:okd-ring-green-600":
                  type === "success",
              }
            )}
            onClick={onClose}
          >
            <span className="okd-sr-only">Dismiss</span>
            <XSolid className="okd-h-5 okd-w-5" okd-aria-hidden="true" />
          </button>
        </div>
      )
    );
  }, [action, closable, onClose, type]);

  return (
    <div
      className={cx(
        "okd-rounded okd-p-4",
        {
          "okd-bg-gray-50": type === "info",
          "okd-bg-yellow-50": type === "warning",
          "okd-bg-red-50": type === "error",
          "okd-bg-green-50": type === "success",
        },
        className
      )}
    >
      <div
        className={cx(
          "okd-flex okd-flex-col okd-items-center sm:okd-items-start okd-space-y-2 sm:okd-space-y-0 sm:okd-flex-row",
          contentClassName
        )}
      >
        <div className="okd-flex-shrink-0">{alertIconNode}</div>

        <div
          className={cx("okd-flex okd-flex-col okd-justify-between", {
            "okd-ml-1 okd-p-2": !!icon,
            "okd-ml-3": !icon,
          })}
        >
          <h3
            className={cx("okd-text-sm okd-font-medium", {
              "okd-text-gray-700": type === "info",
              "okd-text-yellow-800": type === "warning",
              "okd-text-red-800": type === "error",
              "okd-text-green-800": type === "success",
            })}
          >
            {title}
          </h3>

          {textContent && (
            <div
              className={cx("okd-mt-2 okd-text-sm", {
                "okd-text-gray-500": type === "info",
                "okd-text-yellow-700": type === "warning",
                "okd-text-red-700": type === "error",
                "okd-text-green-700": type === "success",
              })}
            >
              {textContent}
            </div>
          )}
        </div>

        {rightNode}
      </div>
    </div>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
