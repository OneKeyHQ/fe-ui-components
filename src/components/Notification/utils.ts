import { Key } from "react";
import type { NotificationOptions, NotificationState } from "./types";

/**
 * Given the notification manager state, finds the notification that matches
 * the id and return its index
 */
export function findNotificationIndex(
  notifications: NotificationOptions[],
  id: Key
) {
  return notifications.findIndex(
    (notification) => String(notification.id) === String(id)
  );
}

/**
 * Given the notification manager state, checks if a specific notification is
 * still in the state, which means it is still visible on screen.
 */
export const isVisible = (notifications: NotificationState, id: Key) =>
  !!Object.values(notifications)
    .flat()
    .find((notification) => notification.id === id);
