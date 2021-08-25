import React, { useMemo } from 'react';
import { ModalProps } from '../Modal';
import { modalLocaleKeys } from '../locale';
import ConfirmDialog from '../ConfirmDialog';
import { useLocale } from '../../Provider/hooks';

export interface HookModalProps {
  afterClose: () => void;
  config: ModalProps;
}

export interface HookModalRef {
  destroy: () => void;
  update: (config: ModalProps) => void;
}

interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}

const HookModal: React.ForwardRefRenderFunction<HookModalRef, HookModalProps> = (
  { afterClose, config },
  ref,
) => {
  const [visible, setVisible] = React.useState(true);
  const [innerConfig, setInnerConfig] = React.useState(config);
  const { locale } = useLocale()
  const modalLocale: ModalLocale = useMemo(() => modalLocaleKeys[locale], [locale])

  function close(...args: any[]) {
    setVisible(false);
    const triggerCancel = args.some(param => param && param.triggerCancel);
    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel();
    }
  }

  React.useImperativeHandle(ref, () => ({
    destroy: close,
    update: (newConfig: ModalProps) => {
      setInnerConfig(originConfig => ({
        ...originConfig,
        ...newConfig,
      }));
    },
  }));

  return (
    <ConfirmDialog
      {...innerConfig}
      close={close}
      visible={visible}
      afterClose={afterClose}
      okText={
        innerConfig.okText ||
        (innerConfig.okCancel ? modalLocale.okText : modalLocale.justOkText)
      }
      cancelText={innerConfig.cancelText || modalLocale.cancelText}
    />
  );
};

export default React.forwardRef(HookModal);
