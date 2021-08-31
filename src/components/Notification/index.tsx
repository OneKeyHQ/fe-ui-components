import { ReactNode } from "react";
import OriginNotification, { NotificationProps } from "./Notification";
import { emitter } from "./utils";
import { Events } from "./types";
import { uniqueId } from "lodash";

const createNotificationProps = (props: NotificationProps) => {
  return {
    noticeKey: uniqueId(),
    show: true,
    ...props,
  };
};

type Notifier = (content: ReactNode, props?: NotificationProps) => void;

type NotificationType = typeof OriginNotification & {
  notify: Notifier;
  success: Notifier;
  error: Notifier;
  warn: Notifier;
  processing: Notifier;
  hideAll: () => void;
};

const Notification = OriginNotification as NotificationType;

const applyNotification = ({ ...notification }: NotificationProps) =>
  emitter.emit(Events.SHOW, createNotificationProps({ ...notification }));

Notification.notify = (content: ReactNode, props?: NotificationProps) =>
  applyNotification({ content, type: "success", ...props });

Notification.success = (content: ReactNode, props?: NotificationProps) =>
  applyNotification({ content, type: "success", ...props });

Notification.error = (content: ReactNode, props?: NotificationProps) =>
  applyNotification({ content, type: "error", ...props });

Notification.processing = (content: ReactNode, props?: NotificationProps) =>
  applyNotification({ content, type: "processing", ...props });

Notification.warn = (content: ReactNode, props?: NotificationProps) =>
  applyNotification({ content, type: "warning", ...props });

Notification.hideAll = () => emitter.emit(Events.HIDE_ALL);

export * from "./types";
export * from "./utils";

export { default as NotificationContainer } from "./NotificationContainer";
export default Notification;
