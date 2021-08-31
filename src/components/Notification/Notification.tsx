import React, {
  ElementType,
  FC,
  Key,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { Transition } from "@headlessui/react";
import cx from "classnames";
import { uniqueId } from "lodash";
import {
  CheckCircleOutlineIcon,
  CloseCircleOutlineIcon,
  ExclamationOutlineIcon,
  RefreshOutlineIcon,
} from "../Icon/react/outline";
import { CloseSolidIcon } from "../Icon/react/solid";

export type NotificationType = "success" | "error" | "processing" | "warning";

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

export type NotificationProps = {
  /** 是否展示 */
  className?: string;
  /** 多久后关闭 Notification 组件，默认为 3s。单位为秒 */
  duration?: number | null;
  /** Mark as final key since set maxCount may keep the key but user pass key is different */
  noticeKey?: Key;
  /** 自定义关闭按钮的 icon */
  closeIcon?: ReactNode;
  /** 是否可被关闭 */
  closable?: boolean;
  /** 关闭时的回调 */
  onClose?: (key?: Key) => void;
  /** 类型 */
  type?: NotificationType;
  /** 标题 */
  title?: ReactNode;
  /** 内容 */
  content?: ReactNode;
  /** 页脚，可用来添加按钮 */
  footer?: ReactNode;
  /** 是否展示 Notification */
  show?: boolean;
  /** 最外层的 wrapper  */
  container?: ElementType<any>;
};

const DefaultContainer: FC = ({ children }) => (
  <div
    aria-live="assertive"
    className="okd-fixed okd-inset-0 okd-flex okd-items-end okd-px-4 okd-py-6 okd-pointer-events-none sm:okd-p-6 sm:okd-items-start okd-space-y-4"
  >
    <div className="okd-w-full okd-flex okd-flex-col okd-items-center okd-space-y-4 sm:okd-items-end">
      {children}
    </div>
  </div>
);

const defaultProps: Partial<NotificationProps> = {
  type: "success",
  closable: true,
  duration: 3,
  container: DefaultContainer,
};

const Notification: FC<NotificationProps> = ({
  type,
  title,
  content,
  footer,
  // Calling uniqueId at runtime
  noticeKey = uniqueId("onekey-modal"),
  show,
  onClose,
  closable,
  duration,
  children,
  container: Container,
}) => {
  const timerRef = React.useRef(null);

  useEffect(() => {
    if (!duration || duration === 0) return;

    timerRef.current = setTimeout(() => {
      onClose?.(noticeKey);
    }, duration * 1000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [closable, duration, noticeKey, onClose]);

  const handleClose = useCallback(() => {
    onClose?.(noticeKey);
  }, [noticeKey, onClose]);

  const icon = notificationIcons[type];
  const textContent = content || children;

  const notificationNode = (
    <Transition
      show={show}
      as="div"
      enter="okd-transform okd-ease-out okd-duration-300 okd-transition"
      enterFrom="okd-translate-y-2 okd-opacity-0 sm:okd-translate-y-0 sm:okd-translate-x-2"
      enterTo="okd-translate-y-0 okd-opacity-100 sm:okd-translate-x-0"
      leave="okd-transition okd-ease-in okd-duration-100"
      leaveFrom="okd-opacity-100"
      leaveTo="okd-opacity-0"
      className="okd-max-w-sm okd-w-full okd-bg-white okd-shadow-lg okd-rounded-lg okd-pointer-events-auto okd-ring-1 okd-ring-black okd-ring-opacity-5 okd-overflow-hidden"
    >
      {/* <div className="okd-max-w-sm okd-w-full okd-bg-white okd-shadow-lg okd-rounded-lg okd-pointer-events-auto okd-ring-1 okd-ring-black okd-ring-opacity-5 okd-overflow-hidden"> */}
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
            <div className="okd-ml-4 okd-flex-shrink-0 okd-flex">
              <button
                className="okd-bg-white okd-rounded-md okd-inline-flex okd-text-gray-400 hover:okd-text-gray-500 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500"
                onClick={handleClose}
              >
                <span className="okd-sr-only">Close</span>
                <CloseSolidIcon
                  className="okd-h-5 okd-w-5 okd-text-gray-500"
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
    </Transition>
  );

  if (Container) {
    return <Container>{notificationNode}</Container>;
  }

  return notificationNode;
};

Notification.defaultProps = defaultProps;

export default Notification;
