import { Events } from "./types";
import { NotificationProps } from "./Notification";
import { NotificationAction } from "./useNotification";

// An event handler will take an event argument
// and should not return a value
export type Handler<T = any> = (event: T) => void;

interface Emitter {
  on<T = any>(event: Events, handler: Handler<T>): void;
  emit<T = any>(event: Events, args?: T): void;
  off(): void;
}

export const emitter = ((): Emitter => {
  const events = new Map();

  return {
    /**
     * Register an event handler for the given event name.
     * @param {Events} event Type of event to listen for
     * @param {Handler} callback Handler to call in response to given event
     */
    on<T = any>(event: Events, callback: Handler<T>) {
      if (!events.has(event)) events.set(event, []);
      events.get(event).push(callback);
    },

    /**
     * Invoke all handlers for the given event name.
     * @param {Events} event The event type to invoke
     * @param {Any} args Any value passed to each handler
     */
    emit<T = any>(event: Events, args: T) {
      if (!events.has(event)) return;
      events.get(event).forEach((callback: Handler) => callback(args));
    },

    /** Remove all events. */
    off() {
      events.clear();
    },
  };
})();

interface INotificationDispatcher {
  dispatch: (value: NotificationAction) => void;
  duration?: number;
}

export const notificationDispatcher = ({
  dispatch,
  duration,
}: INotificationDispatcher) => {
  emitter.on(Events.SHOW, (notification: NotificationProps) => {
    dispatch({ type: "ADD", notification });

    if (duration) {
      setTimeout(() => {
        dispatch({ type: "REMOVE", noticeKey: notification.noticeKey });
      }, duration);
    }
  });
  emitter.on(Events.HIDE, (id: string) =>
    dispatch({ type: "REMOVE", noticeKey: id })
  );
  emitter.on(Events.HIDE_ALL, () => dispatch({ type: "REMOVE_ALL" }));
};
