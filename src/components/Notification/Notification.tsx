import { Transition } from "@headlessui/react";
import * as React from "react";
import type { NotificationOptions } from "./types";

export interface NotificationProps extends NotificationOptions {}

export const Notification: React.FC<NotificationProps> = (props) => {
  const {
    id,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    showing,
    duration = 3000,
  } = props;

  const mounted = React.useRef(false);
  const [delay, setDelay] = React.useState(duration);
  const [renderShowing, setRenderShowing] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setRenderShowing(showing));
  }, [showing]);

  React.useEffect(() => {
    if (mounted.current && !showing) {
      onCloseComplete?.();
    }
    mounted.current = true;
  }, [showing, onCloseComplete]);

  React.useEffect(() => {
    if (mounted.current) {
      setDelay(duration);
    }
    mounted.current = true;
    return undefined;
  }, [duration]);

  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);

  const close = React.useCallback(() => {
    if (showing) onRequestRemove();
  }, [showing, onRequestRemove]);

  React.useEffect(() => {
    if (showing && requestClose) {
      onRequestRemove();
    }
  }, [showing, requestClose, onRequestRemove]);

  React.useEffect(() => {
    if (delay == null) return undefined;

    let timeoutId: number | null = null;

    timeoutId = window.setTimeout(() => {
      close();
    }, delay);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, close]);

  return (
    <Transition
      show={renderShowing}
      as="div"
      enter="okd-transform okd-ease-out okd-duration-300 okd-transition"
      enterFrom="okd-translate-y-2 okd-opacity-0 sm:okd-translate-y-0 sm:okd-translate-x-2"
      enterTo="okd-translate-y-0 okd-opacity-100 sm:okd-translate-x-0"
      leave="okd-transition okd-ease-in okd-duration-300"
      leaveFrom="okd-opacity-100 sm:okd-translate-x-0"
      leaveTo="okd-opacity-0 sm:okd-translate-x-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="okd-max-w-sm okd-w-full okd-bg-white okd-shadow-lg okd-rounded-lg okd-pointer-events-auto okd-ring-1 okd-ring-black okd-ring-opacity-5 okd-overflow-hidden"
    >
      {typeof message === "function"
        ? message({ id, onClose: close })
        : message}
    </Transition>
  );
};
