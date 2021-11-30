import React, {
  CSSProperties,
  Fragment,
  PropsWithChildren,
  useContext,
} from "react";
import cx, { Argument } from "classnames";
import { Dialog, Transition } from "@headlessui/react";

import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

type ModalType = "info" | "success" | "error" | "warn" | "warning" | "confirm";

export type ModalProps = {
  /** 是否可见 */
  visible?: boolean;
  /** 内容 */
  content?: React.ReactNode;
  /** 点击模态框遮罩时或键盘按下 Esc 时的回调 */
  onClose: () => void;
  /**
   * 聚焦的 ref 对象
   */
  initialFocusRef?: React.MutableRefObject<HTMLElement | null>;
  /**
   * 设置 Modal Container 的 style 样式
   */
  containerStyle?: CSSProperties;
  /**
   * 设置额外的 class
   */
  className?: string | null;
};

export const iconColors: Record<ModalType, string> = {
  info: "okd-text-gray-400",
  success: "okd-text-green-400",
  error: "okd-text-red-400",
  warn: "okd-text-yellow-500",
  warning: "okd-text-yellow-500",
  confirm: "okd-text-yellow-500",
};

interface ModalBodyProps {
  /**
   * 设置 Modal Body 的 class
   */
  className?: Argument;
}

export const ModalBody = ({
  children,
  className,
}: PropsWithChildren<ModalBodyProps>) => {
  return (
    <div
      className={cx(!!className && className, {
        "okd-p-4 sm:okd-p-6": !className,
      })}
    >
      {children}
    </div>
  );
};

export interface IModalContext extends ModalProps {}
export const ModalContext = React.createContext<IModalContext>(undefined);
export const useModalContext = () => useContext(ModalContext);

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    visible,
    content,
    onClose,
    className,
    containerStyle,
    initialFocusRef,
    children,
  } = props;

  const contentNode = content ?? children;

  const context = {
    ...props,
  };

  return (
    <ModalContext.Provider value={context}>
      <Transition.Root show={visible} as={Fragment}>
        <Dialog
          as="div"
          auto-reopen="true"
          className="okd-fixed okd-z-10 okd-inset-0 okd-overflow-y-auto"
          onClose={onClose}
          initialFocus={initialFocusRef}
        >
          <div className="okd-flex okd-items-end okd-justify-center okd-min-h-screen okd-pt-4 okd-px-4 okd-pb-20 okd-text-center sm:okd-block sm:okd-p-0">
            <Transition.Child
              as={Fragment}
              enter="okd-ease-out okd-duration-300"
              enterFrom="okd-opacity-0"
              enterTo="okd-opacity-100"
              leave="okd-ease-in okd-duration-200"
              leaveFrom="okd-opacity-100"
              leaveTo="okd-opacity-0"
            >
              <Dialog.Overlay className="okd-fixed okd-inset-0 okd-bg-gray-400/75 dark:okd-bg-gray-200/75 okd-transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="okd-hidden sm:okd-inline-block sm:okd-align-middle sm:okd-h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as="div"
              className={cx(
                "okd-inline-block okd-align-bottom okd-bg-white-ground okd-rounded-lg okd-text-left okd-overflow-hidden",
                "okd-ring-1 okd-ring-black okd-ring-opacity-5 okd-shadow-xl",
                "sm:okd-my-8 sm:okd-align-middle sm:okd-max-w-lg sm:okd-w-full",
                "okd-transform okd-transition-all",
                className
              )}
              style={containerStyle}
              enter="okd-ease-out okd-duration-300"
              enterFrom="okd-opacity-0 okd-translate-y-4 sm:okd-translate-y-0 sm:okd-scale-95"
              enterTo="okd-opacity-100 okd-translate-y-0 sm:okd-scale-100"
              leave="okd-ease-in okd-duration-200"
              leaveFrom="okd-opacity-100 okd-translate-y-0 sm:okd-scale-100"
              leaveTo="okd-opacity-0 okd-translate-y-4 sm:okd-translate-y-0 sm:okd-scale-95"
            >
              {contentNode}
            </Transition.Child>
            <button className="w-0 h-0 overflow-hidden" />
          </div>
        </Dialog>
      </Transition.Root>
    </ModalContext.Provider>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
