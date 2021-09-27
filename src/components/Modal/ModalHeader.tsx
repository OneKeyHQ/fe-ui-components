import React, {
  FC,
  isValidElement,
  MouseEventHandler,
  ReactNode,
  useCallback,
} from "react";
import { Dialog } from "@headlessui/react";

import Button from "../Button";
import { useModalContext } from "./Modal";

export type ModalHeaderProps = {
  /**
   * 标题
   */
  title?: ReactNode;
  /**
   * 操作组件，在 关闭按钮 左侧
   */
  actions?: ReactNode;
  /**
   * 是否可被关闭，默认为 true
   */
  closable?: boolean;
  /**
   * 点击关闭按钮时的事件回调，默认为 Modal 的 onClose
   */
  onClose?: () => void;
};

const ModalHeaderDefaultProps: Partial<ModalHeaderProps> = {
  closable: true,
};

export const ModalHeader: FC<ModalHeaderProps> = ({
  title,
  onClose,
  closable,
  actions,
  children,
}) => {
  const { onClose: rootOnClose } = useModalContext();

  const handleCloseClick = useCallback(() => {
    onClose?.();
    closable && rootOnClose();
  }, [closable, onClose, rootOnClose]);

  const titleNode = (() => {
    if (title) {
      return isValidElement(title) ? (
        title
      ) : (
        <Dialog.Title className="okd-text-lg okd-font-medium okd-text-gray-900 okd-flex-1">
          {title}
        </Dialog.Title>
      );
    }

    return children;
  })();

  return (
    <Dialog.Title<"header">
      className="okd-px-4 okd-py-3 sm:okd-py-4 sm:okd-px-6 okd-flex okd-items-center okd-justify-between okd-border-b okd-border-gray-200"
      as="header"
    >
      {titleNode}
      <div className="okd-flex okd-items-center okd-space-x-4 okd-divide-x okd-divide-gray-200 okd-flex-shrink-0">
        {actions}
        {!!closable && (
          <div className="okd-pl-4 okd-w-9 okd-h-5 okd-flex okd-items-center okd-justify-center">
            <Button
              type="plain"
              leadingIcon="CloseSolid"
              onClick={handleCloseClick}
              circular
            />
          </div>
        )}
      </div>
    </Dialog.Title>
  );
};

ModalHeader.defaultProps = ModalHeaderDefaultProps;

export default ModalHeader;
