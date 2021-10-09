import React from "react";

export interface RenderProps {
  /**
   * The auto-generated or passed `id` of the notification
   */
  id: React.Key;
  /**
   * Function to close the notification
   */
  onClose(): void;
}

export type NotificationMessage = (props: RenderProps) => React.ReactNode;

export interface NotificationOptions {
  /**
   * The element or component type to render.
   * The component will be passed `id` and `onClose`
   */
  message: NotificationMessage;
  /**
   * The notification's id
   */
  id: React.Key;
  /**
   * The duration of the notification
   */
  duration: number | null;
  /**
   * The status of the notification's alert component.
   */
  type: NotificationType;
  /**
   * Function that removes the notification from manager's state.
   */
  onRequestRemove(): void;
  /**
   * Whether a notification is currently in view or not
   */
  showing: boolean;
  /**
   * Callback function to run side effects after the notification has closed.
   */
  onCloseComplete?(): void;
  /**
   * Internally used to queue closing a notification. Should probably not be used by
   * anyone else, but documented regardless.
   */
  requestClose?: boolean;
  /**
   * If `true`, notification will show a close button
   *
   * @default true
   */
  closable?: boolean;
}

export type NotificationState = { notifications: NotificationOptions[] };

export type NotificationType = "success" | "error" | "processing" | "warning";

export type UpdateFn = (state: NotificationState) => void;
