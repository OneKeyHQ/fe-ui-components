import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InfoCircleOutlined from '../Icon/react/InformationCircleOutline';
import CheckOutlined from '../Icon/react/CheckOutline';
import CloseCircleOutlined from '../Icon/react/XCircleOutline';
import ExclamationCircleOutlined from '../Icon/react/ExclamationCircleOutline';
import ConfirmDialog, { iconColors } from './ConfirmDialog';
import type { ConfirmDialogProps } from './ConfirmDialog';
import { getConfirmLocale } from './locale';


type ConfigUpdate = ConfirmDialogProps | ((prevConfig: ConfirmDialogProps) => ConfirmDialogProps);

export type ModalFunc = (props: ConfirmDialogProps) => {
  destroy: () => void;
  update: (configUpdate: ConfigUpdate) => void;
};

export type ModalStaticFunctions = Record<NonNullable<ConfirmDialogProps['type']>, ModalFunc>;

// 用于储存销毁函数
export const destroyFns: Array<() => void> = [];

export default function confirm(config: ConfirmDialogProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  let currentConfig = { ...config, close, visible: true } as any;

  function destroy(...args: any[]) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args.some(param => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render({ okText, cancelText, prefixCls: customizePrefixCls, ...props }: any) {
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    setTimeout(() => {
      const runtimeLocale = getConfirmLocale();
      // because Modal.config  set rootPrefixCls, which is different from other components
      ReactDOM.render(
        <ConfirmDialog
          {...props}
          okText={okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText)}
          cancelText={cancelText || runtimeLocale.cancelText}
        />,
        div,
      );
    });
  }

  function close(...args: any[]) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy.apply(this, args);
      },
    };
    render(currentConfig);
  }

  function update(configUpdate: ConfigUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate,
      };
    }
    render(currentConfig);
  }

  render(currentConfig);

  destroyFns.push(close);

  return {
    destroy: close,
    update,
  };
}

export function withWarn(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = 'warning'
  return {
    icon: <ExclamationCircleOutlined className={`okd-h-6 okd-w-6 ${iconColors[type]}`} okd-aria-hidden="true" />,
    okCancel: false,
    ...props,
    type,
  };
}

export function withInfo(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = 'info'
  return {
    icon: <InfoCircleOutlined className={`okd-h-6 okd-w-6 ${iconColors[type]}`} okd-aria-hidden="true" />,
    okCancel: false,
    ...props,
    type,
  };
}

export function withSuccess(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = 'success'
  return {
    icon: <CheckOutlined className={`okd-h-6 okd-w-6 ${iconColors[type]}`} okd-aria-hidden="true" />,
    okCancel: false,
    ...props,
    type,
  };
}

export function withError(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = 'error'
  return {
    icon: <CloseCircleOutlined className={`okd-h-6 okd-w-6 ${iconColors[type]}`} okd-aria-hidden="true" />,
    okCancel: false,
    ...props,
    type,
  };
}

export function withConfirm(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = 'confirm'
  return {
    type,
    icon: <ExclamationCircleOutlined className={`okd-h-6 okd-w-6 ${iconColors[type]}`} okd-aria-hidden="true" />,
    okCancel: true,
    ...props,
  };
}
