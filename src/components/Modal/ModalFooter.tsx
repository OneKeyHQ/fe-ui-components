import React, { PropsWithChildren, useCallback } from "react";
import cx from "classnames";
import { useIntl } from "react-intl";

import Button from "../Button";
import { modalLocaleKeys } from "./locale";
import { useModalContext } from "./Modal";

export type ModalFooterProps = {
  /**
   * 点击默认取消按钮的 回调
   */
  onCancel?: (event?: MouseEvent) => void;
  /**
   * 是否展示 默认取消按钮
   */
  showCancel?: boolean;
  /**
   * 是否展示 默认确认按钮
   */
  showOk?: boolean;
  /**
   * 确认按钮文字
   */
  okText?: React.ReactNode;
  /**
   * 点击确定回调
   */
  onOk?: () => void;
  /**
   * 取消按钮文字
   */
  cancelText?: React.ReactNode;
};

const defaultProps = {
  showOk: true,
  showCancel: true,
};

const ModalFooter = ({
  onCancel,
  showCancel,
  cancelText,
  onOk,
  showOk,
  okText,
  children,
}: PropsWithChildren<ModalFooterProps>) => {
  const { formatMessage } = useIntl();
  const { onClose: rootOnClose } = useModalContext();

  const handleCancel = useCallback(
    (event) => {
      onCancel?.(event);
      event.stopPropagation();
      rootOnClose();
    },
    [onCancel, rootOnClose]
  );

  const cancelActionNode = showCancel && (
    <Button onClick={handleCancel}>
      {/* 用 || 操作符来过滤空字符串 '' */}
      {cancelText || formatMessage({ id: modalLocaleKeys.cancelText })}
    </Button>
  );

  const okActionNode = showOk && (
    <Button type="primary" onClick={onOk}>
      {/* 用 || 操作符来过滤空字符串 '' */}
      {okText || formatMessage({ id: modalLocaleKeys.okText })}
    </Button>
  );

  const defaultFooterContent = (
    <>
      {cancelActionNode}
      {okActionNode}
    </>
  );

  return (
    <footer
      className={cx(
        "okd-py-3 okd-px-4 sm:okd-py-4 sm:okd-px-6 okd-border-t okd-border-gray-200",
        {
          "okd-space-x-3 okd-flex okd-justify-end": !children,
        }
      )}
    >
      {children ?? defaultFooterContent}
    </footer>
  );
};

ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
