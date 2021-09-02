import React from "react";
import { useIntl } from "react-intl";

import { modalLocaleKeys } from "../locale";
import ConfirmDialog, { ConfirmDialogProps } from "../ConfirmDialog";
import UIProvider from "../../Provider";

export interface HookModalProps {
  /** 取消之后的函数 */
  afterClose?: () => void;
  /** ConfirmDialog Props */
  config: ConfirmDialogProps;
}

export interface HookModalRef {
  destroy: () => void;
  update: (config: ConfirmDialogProps) => void;
}

const HookModal: React.ForwardRefRenderFunction<
  HookModalRef,
  HookModalProps
> = ({ afterClose, config }, ref) => {
  const [visible, setVisible] = React.useState(true);
  const [innerConfig, setInnerConfig] = React.useState(config);
  const { formatMessage } = useIntl();

  function close(...args: any[]) {
    setVisible(false);
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel();
    }
  }

  React.useImperativeHandle(ref, () => ({
    destroy: close,
    update: (newConfig: ConfirmDialogProps) => {
      setInnerConfig((originConfig) => ({
        ...originConfig,
        ...newConfig,
      }));
    },
  }));

  return (
    <UIProvider>
      <ConfirmDialog
        {...innerConfig}
        close={close}
        visible={visible}
        afterClose={afterClose}
        okText={
          innerConfig.okText ||
          (innerConfig.okCancel
            ? formatMessage({ id: modalLocaleKeys.okText })
            : formatMessage({ id: modalLocaleKeys.justOkText }))
        }
        cancelText={
          innerConfig.cancelText ||
          formatMessage({ id: modalLocaleKeys.cancelText })
        }
      />
    </UIProvider>
  );
};

export default React.forwardRef(HookModal);
