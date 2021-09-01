import React, { Fragment, PropsWithChildren } from "react";
import cx from "classnames";
import { Dialog, Transition } from "@headlessui/react";

import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import UIProvider from "../Provider";

type ModalType = "info" | "success" | "error" | "warn" | "warning" | "confirm";

export type ModalProps = {
  /** 是否可见 */
  visible?: boolean;
  /** 内容 */
  content?: React.ReactNode;
  /** 点击模态框遮罩时或键盘按下 Esc 时的回调 */
  onClose: (v: boolean) => void;
};

export const iconColors: Record<ModalType, string> = {
  info: "okd-text-gray-400",
  success: "okd-text-green-400",
  error: "okd-text-red-400",
  warn: "okd-text-yellow-500",
  warning: "okd-text-yellow-500",
  confirm: "okd-text-yellow-500",
};

// Comment for future use
// const iconBgColors: Record<ModalType, string> = {
//   info: "okd-bg-gray-100",
//   success: "okd-bg-green-100",
//   error: "okd-bg-red-100",
//   warn: "okd-bg-yellow-100",
//   warning: "okd-bg-yellow-100",
//   confirm: "okd-bg-yellow-100",
// };

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { visible, content, onClose, children } = props;

  const contentNode = content ?? children;

  return (
    <UIProvider>
      <Transition.Root show={visible} as={Fragment}>
        <Dialog
          as="div"
          auto-reopen="true"
          className="okd-fixed okd-z-10 okd-inset-0 okd-overflow-y-auto"
          onClose={onClose}
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
              <Dialog.Overlay className="okd-fixed okd-inset-0 okd-bg-gray-500/75 okd-transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="okd-hidden sm:okd-inline-block sm:okd-align-middle sm:okd-h-screen"
              okd-aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as="div"
              className={cx(
                "okd-inline-block okd-align-bottom okd-bg-white-ground okd-rounded-lg okd-text-left okd-overflow-hidden",
                "okd-ring-1 okd-ring-black okd-ring-opacity-5 okd-shadow-xl",
                "sm:okd-my-8 sm:okd-align-middle sm:okd-max-w-lg sm:okd-w-full",
                "okd-transform okd-transition-all"
              )}
              enter="okd-ease-out okd-duration-300"
              enterFrom="okd-opacity-0 okd-translate-y-4 sm:okd-translate-y-0 sm:okd-scale-95"
              enterTo="okd-opacity-100 okd-translate-y-0 sm:okd-scale-100"
              leave="okd-ease-in okd-duration-200"
              leaveFrom="okd-opacity-100 okd-translate-y-0 sm:okd-scale-100"
              leaveTo="okd-opacity-0 okd-translate-y-4 sm:okd-translate-y-0 sm:okd-scale-95"
            >
              {contentNode}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </UIProvider>
  );
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;

export default Modal;
