import React from "react";
import cx from "classnames";
import { useIntl } from "react-intl";

import { modalLocaleKeys } from "./locale";
import Button from "../Button";
import { PropsWithChildren } from "react";

export type ModalFooterProps = {
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
  onCancel?: () => void;
  /** 确认按钮文字 */
  okText?: React.ReactNode;
  /** 点击确定回调 */
  onOk?: () => void;
  /** 取消按钮文字 */
  cancelText?: React.ReactNode;
};

const ModalFooter = ({
  onCancel,
  cancelText,
  onOk,
  okText,
  children,
}: PropsWithChildren<ModalFooterProps>) => {
  const { formatMessage } = useIntl();

  const cancelActionNode = onCancel && (
    <Button onClick={onCancel}>
      {/* 用 || 操作符来过滤空字符串 '' */}
      {cancelText || formatMessage({ id: modalLocaleKeys.cancelText })}
    </Button>
  );

  const defaultFooterContent = (
    <>
      {cancelActionNode}
      <Button type="primary" onClick={onOk}>
        {/* 用 || 操作符来过滤空字符串 '' */}
        {okText || formatMessage({ id: modalLocaleKeys.okText })}
      </Button>
    </>
  );

  return (
    <div
      className={cx("okd-border-t okd-py-4 okd-px-6", {
        "okd-space-x-3 okd-flex okd-justify-end": !children,
      })}
    >
      {children ?? defaultFooterContent}
    </div>
  );
};

export default ModalFooter;
