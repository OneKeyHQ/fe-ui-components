import React, { FC, isValidElement, ReactNode } from "react";
import { Dialog } from "@headlessui/react";

import Button from "../Button";

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
   * 点击关闭按钮时的事件回调
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
  if (closable && !onClose) {
    throw new Error("'onClose' props is required when closable is set to true");
  }

  const titleNode = (() => {
    if (title) {
      return isValidElement(title) ? (
        title
      ) : (
        <Dialog.Title className="okd-text-lg okd-font-medium okd-leading-7">
          {title}
        </Dialog.Title>
      );
    }

    return children;
  })();

  // 只在有 关闭按钮 和 actions 都有时显示
  const divider = !!actions && !!closable && (
    <div className="okd-w-[1px] okd-bg-gray-200"></div>
  );

  // TODO: Add small padding
  return (
    <div className="okd-text-gray-900 okd-py-4 okd-px-6 okd-flex okd-items-center okd-border-b okd-border-gray-200">
      {titleNode}
      <div className="okd-relative okd-flex-1 okd-flex okd-justify-end okd-space-x-2">
        {actions}
        {divider}
        {!!closable && (
          <Button
            type="plain"
            leadingIcon="CloseSolid"
            onClick={onClose}
            circular
          />
        )}
      </div>
    </div>
  );
};

ModalHeader.defaultProps = ModalHeaderDefaultProps;

export default ModalHeader;
