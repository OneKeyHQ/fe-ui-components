import * as React from "react";
import { Notification } from "./notification";
import type {
  NotificationMessage,
  NotificationOptions,
  NotificationState,
} from "./types";
import { findNotificationIndex } from "./utils";

export interface NotificationMethods {
  notify: (
    message: NotificationMessage,
    options: CreateNotificationOptions
  ) => React.Key;
  closeAll: () => void;
  close: (id: React.Key) => void;
  update: (id: React.Key, options: CreateNotificationOptions) => void;
  isActive: (id: React.Key) => boolean;
}

interface Props {
  notify: (methods: NotificationMethods) => void;
}

type CreateNotificationOptions = Partial<NotificationOptions>;

/**
 * Manages the creation, and removal of notifications
 * across all corners ("top", "bottom", etc.)
 */
export class NotificationManager extends React.Component<
  Props,
  NotificationState
> {
  /**
   * Static id counter to create unique ids
   * for each notification
   */
  static counter = 0;

  /**
   * State to track all the notification
   */
  state: NotificationState = {
    notifications: [],
  };

  constructor(props: Props) {
    super(props);

    const methods = {
      notify: this.notify,
      closeAll: this.closeAll,
      close: this.closeNotification,
      update: this.updateNotification,
      isActive: this.isVisible,
    };

    props.notify(methods);
  }

  /**
   * Function to actually create a notification
   */
  notify = (
    message: NotificationMessage,
    options: CreateNotificationOptions
  ) => {
    const givenId = options.id;
    const index = findNotificationIndex(this.state.notifications, givenId);

    if (givenId && index !== -1) {
      this.setState((prevState) => {
        const notifications = [...prevState.notifications];
        notifications[index].requestClose = false;
        notifications[index].showing = true;
        return { ...prevState, notifications };
      });
      return givenId;
    }

    const notification = this.createNotification(message, options);
    const { id } = notification;

    this.setState((prevState) => {
      return {
        ...prevState,
        notifications: [...prevState.notifications, notification],
      };
    });

    return id;
  };

  /**
   * Update a specific notification with new options based on the
   * passed `id`
   */
  updateNotification = (id: React.Key, options: CreateNotificationOptions) => {
    this.setState((prevState) => {
      const nextState = { ...prevState };
      const index = findNotificationIndex(nextState.notifications, id);

      if (index !== -1) {
        const newNotification = {
          ...nextState.notifications[index],
          ...options,
        };

        nextState.notifications[index] = newNotification;
      }

      return nextState;
    });
  };

  /**
   * Close all notifications at once.
   */
  closeAll = () => {
    // only one setState here for perf reasons
    // instead of spamming this.closeNotification
    this.setState((prev) => {
      return { ...prev, notifications: [] };
    });
  };

  /**
   * Create properties for a new notification
   */
  createNotification = (
    message: NotificationMessage,
    options: CreateNotificationOptions
  ): NotificationOptions => {
    NotificationManager.counter += 1;
    const id = options.id ?? NotificationManager.counter;
    const duration = options.duration ?? 3000;
    const type = options.type ?? "success";

    return {
      ...options,
      id,
      type,
      message,
      duration,
      showing: true,
      requestClose: false,
      onRequestRemove: () => this.removeNotification(id),
    };
  };

  /**
   * Requests to close a notification based on its id
   */
  closeNotification = (id: React.Key) => {
    this.setState((prevState) => {
      return {
        notifications: prevState.notifications.map((notification) => {
          // id may be string or number
          // eslint-disable-next-line eqeqeq
          if (notification.id == id) {
            return {
              ...notification,
              requestClose: true,
            };
          }

          return notification;
        }),
      };
    });
  };

  /**
   * Hide a notification using showing properity
   */
  removeNotification = (id: React.Key) => {
    this.setState((prevState) => {
      const notifications = [...prevState.notifications];
      const index = findNotificationIndex(prevState.notifications, id);

      if (index !== -1) {
        notifications[index].showing = false;
      }

      return {
        ...prevState,
        notifications,
      };
    });
  };

  isVisible = (id: React.Key) => {
    const index = findNotificationIndex(this.state.notifications, id);
    return !!this.state.notifications[index]?.showing;
  };

  render() {
    const notifications = this.state.notifications;

    return (
      <div
        aria-live="assertive"
        className="okd-fixed okd-inset-0 okd-flex okd-items-end okd-px-4 okd-py-6 okd-pointer-events-none sm:okd-p-6 sm:okd-items-start okd-space-y-4"
      >
        <div className="okd-w-full okd-flex okd-flex-col okd-items-center okd-space-y-4 sm:okd-items-end">
          {notifications.map((notification) => (
            <Notification {...notification} />
          ))}
        </div>
      </div>
    );
  }
}
