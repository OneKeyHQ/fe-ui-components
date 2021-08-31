import React, { FC, useCallback, useEffect, Key } from "react";
import Notification from "./Notification";
import { useNotification } from "./useNotification";
import { emitter, notificationDispatcher } from "./utils";
import { Events, Position } from "./types";

interface INotificationContainer {
  // Unused prop right now
  position?: Position;
  /** 多久后关闭弹窗，默认为 3，单位为秒 */
  duration?: number;
}

const NotificationContainer: FC<INotificationContainer> = ({
  // Unused prop right now
  position = "top-left",
  duration = 3,
}) => {
  const { notifications, dispatch } = useNotification();

  useEffect(() => {
    notificationDispatcher({ dispatch, duration: duration * 1000 });

    return () => {
      emitter.off();
    };
  }, [dispatch, duration]);

  const onClose = useCallback((noticeKey: Key) => {
    emitter.emit(Events.HIDE, noticeKey);
  }, []);

  return (
    <div
      aria-live="assertive"
      className="okd-fixed okd-inset-0 okd-flex okd-items-end okd-px-4 okd-py-6 okd-pointer-events-none sm:okd-p-6 sm:okd-items-start okd-space-y-4"
    >
      <div className="okd-w-full okd-flex okd-flex-col okd-items-center okd-space-y-4 sm:okd-items-end">
        {notifications.map((notificationProps) => (
          <Notification
            key={notificationProps.noticeKey}
            noticeKey={notificationProps.noticeKey}
            {...notificationProps}
            // 覆盖方法
            onClose={(key) => {
              onClose(key);
              notificationProps.onClose(key);
            }}
            // Container 设为 null
            container={null}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationContainer;
