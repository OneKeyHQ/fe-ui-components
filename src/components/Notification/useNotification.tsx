import * as React from "react";
import cx from "classnames";
import { notificationer } from "./notificationer";
import type {
  NotificationType,
  RenderProps,
  NotificationOptions,
} from "./types";
import {
  CheckCircleOutlineIcon,
  CloseCircleOutlineIcon,
  ExclamationOutlineIcon,
  RefreshOutlineIcon,
} from "../Icon/react/outline";
import Button from "../Button";

export interface UseNotificationOptions {
  /**
   * 多久后关闭 Notification 组件，默认为 3000。单位为毫秒ms
   * 如果为 `null`，将不会自动关闭
   *
   * @default 5000 ( = 5000ms )
   */
  duration?: NotificationOptions["duration"];
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 内容或描述，可用 children 代替
   */
  content?: React.ReactNode;
  /**
   * 页脚，可用来添加按钮
   */
  footer?: React.ReactNode;
  /**
   * 是否显示 关闭按钮
   *
   * @default true
   */
  closable?: boolean;
  /**
   * 自定义关闭按钮的 icon
   */
  closeIcon?: React.ReactNode;
  /**
   * 类型
   */
  type?: NotificationType;
  /**
   * 是否展示
   */
  className?: string;
  /**
   * 关闭时的回调
   */
  onClose?: (key?: React.Key) => void;
  /**
   * 关闭后的回调
   */
  onCloseComplete?: () => void
  /**
   * 是否展示 Notification
   */
  show?: boolean;
  /**
   * The `id` of the notification.
   *
   * Mostly used when you need to prevent duplicate.
   * By default, we generate a unique `id` for each notification
   */
  id?: React.Key;
}

export type INotification = UseNotificationOptions;

const notificationIcons = {
  success: (
    <CheckCircleOutlineIcon
      className="okd-h-6 okd-w-6 okd-text-green-400"
      okd-aria-hidden="true"
    />
  ),
  error: (
    <CloseCircleOutlineIcon
      className="okd-h-6 okd-w-6 okd-text-red-400"
      okd-aria-hidden="true"
    />
  ),
  processing: (
    <RefreshOutlineIcon
      className="okd-h-6 okd-w-6 okd-text-gray-400"
      okd-aria-hidden="true"
    />
  ),
  warning: (
    <ExclamationOutlineIcon
      className="okd-h-6 okd-w-6 okd-text-yellow-400"
      okd-aria-hidden="true"
    />
  ),
} as const;

const InnerNotification: React.FC<any> = (props) => {
  const {
    type,
    id,
    title,
    content,
    closable,
    onClose,
    closeIcon,
    footer,
    children,
  } = props;

  const handleClose = React.useCallback(() => {
    onClose?.(id);
  }, [id, onClose]);

  const icon = notificationIcons[type];
  const textContent = content || children;

  return (
    <div className="okd-p-4">
      <div className="okd-flex okd-items-start">
        <div className="okd-flex-shrink-0">{icon}</div>
        <div className="okd-ml-3 okd-w-0 okd-flex-1 okd-pt-0.5">
          <p className="okd-text-sm okd-font-medium okd-text-gray-900">
            {title}
          </p>
          <p
            className={cx(
              "okd-text-sm okd-text-gray-500",
              !!title && "okd-mt-1"
            )}
          >
            {textContent}
          </p>

          {!!footer && <div className="okd-mt-4 okd-flex">{footer}</div>}
        </div>

        {closable && (
          <div className="okd-ml-4 okd-flex-shrink-0 okd-flex okd-items-center okd-justify-center okd-w-5 okd-h-5">
            {closeIcon || (
              <Button
                onClick={handleClose}
                circular
                size="xs"
                leadingIcon="CloseSolid"
                type="plain"
              >
                <span className="okd-sr-only">Close</span>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const defaults = {
  duration: 5000,
  closable: true,
  type: "success",
} as const;

export type CreateStandAloneNotificationParam = Partial<UseNotificationOptions>;

export const defaultStandaloneParam: CreateStandAloneNotificationParam = defaults;
/**
 * Create a notification from outside of React Components
 */
export function createStandaloneNotification(
  defaultOptions: CreateStandAloneNotificationParam = defaultStandaloneParam
) {
  const notificationImpl = (options?: UseNotificationOptions) => {
    const opts = { ...defaultOptions, ...options } as UseNotificationOptions;
    const Message: React.FC<RenderProps> = (props) => (
      <InnerNotification {...props} {...opts} />
    );

    return notificationer.notify(Message, opts);
  };

  notificationImpl.close = notificationer.close;
  notificationImpl.closeAll = notificationer.closeAll;

  // notifications can only be updated if they have a valid id
  notificationImpl.update = (
    id: React.Key,
    options: Omit<UseNotificationOptions, "id">
  ) => {
    if (!id) return;

    const opts = { ...defaultOptions, ...options } as UseNotificationOptions;

    notificationer.update(id, {
      ...opts,
      message: (props) => <InnerNotification {...props} {...opts} />,
    });
  };

  notificationImpl.isActive = notificationer.isActive;

  notificationImpl.notify = (
    content: React.ReactNode,
    props?: UseNotificationOptions
  ) => notificationImpl({ content, type: "success", ...props });

  notificationImpl.success = (
    content: React.ReactNode,
    props?: UseNotificationOptions
  ) => notificationImpl({ content, type: "success", ...props });

  notificationImpl.error = (
    content: React.ReactNode,
    props?: UseNotificationOptions
  ) => notificationImpl({ content, type: "error", ...props });

  notificationImpl.processing = (
    content: React.ReactNode,
    props?: UseNotificationOptions
  ) => notificationImpl({ content, type: "processing", ...props });

  notificationImpl.warn = (
    content: React.ReactNode,
    props?: UseNotificationOptions
  ) => notificationImpl({ content, type: "warning", ...props });

  return notificationImpl;
}

/**
 * React hook used to create a function that can be used
 * to show notifications in an application.
 */
export function useNotification(options?: UseNotificationOptions) {
  return React.useMemo(() => {
    return createStandaloneNotification(options);
  }, [options]);
}

export default useNotification;
