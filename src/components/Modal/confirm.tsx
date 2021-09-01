import * as React from "react";
import * as ReactDOM from "react-dom";

import { modalLocaleKeys } from "./locale";
import defaultLocaleMessages from "../locales";
import { getLocaleSymbol } from "../utils";
import InfoCircleOutlined from "../Icon/react/outline/InformationCircle";
import CheckOutlined from "../Icon/react/outline/Check";
import CloseCircleOutlined from "../Icon/react/outline/CloseCircle";
import ExclamationCircleOutlined from "../Icon/react/outline/ExclamationCircle";
import ConfirmDialog, { iconColors } from "./ConfirmDialog";
import type { ConfirmDialogProps } from "./ConfirmDialog";

type ConfigUpdate =
  | ConfirmDialogProps
  | ((prevConfig: ConfirmDialogProps) => ConfirmDialogProps);

export type ModalFunc = (
  props: ConfirmDialogProps
) => {
  destroy: () => void;
  update: (configUpdate: ConfigUpdate) => void;
};

export type ModalStaticFunctions = Record<
  NonNullable<ConfirmDialogProps["type"]>,
  ModalFunc
>;

// 用于储存销毁函数
export const destroyFns: Array<() => void> = [];

export default function confirm(config: ConfirmDialogProps) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  let currentConfig = { ...config, close, visible: true } as any;

  function destroy(...args: any[]) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel();
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render({ okText, cancelText, ...props }: ConfirmDialogProps) {
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    setTimeout(() => {
      // 根据 Cookie 从文件里获取翻译内容
      const messages = defaultLocaleMessages[getLocaleSymbol()];
      const defaultCancelText = messages[modalLocaleKeys.cancelText];
      const defaultOkText = props.okCancel
        ? messages[modalLocaleKeys.okText]
        : messages[modalLocaleKeys.justOkText];

      ReactDOM.render(
        <ConfirmDialog
          {...props}
          okText={okText || defaultOkText}
          cancelText={cancelText || defaultCancelText}
        />,
        div
      );
    });
  }

  function close(...args: any[]) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: () => {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy.apply(this, args);
      },
    };
    render(currentConfig);
  }

  function update(configUpdate: ConfigUpdate) {
    if (typeof configUpdate === "function") {
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
  const type = "warning";
  return {
    icon: (
      <ExclamationCircleOutlined
        className={`okd-h-6 okd-w-6 ${iconColors[type]}`}
        okd-aria-hidden="true"
      />
    ),
    okCancel: false,
    ...props,
    type,
  };
}

export function withInfo(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = "info";
  return {
    icon: (
      <InfoCircleOutlined
        className={`okd-h-6 okd-w-6 ${iconColors[type]}`}
        okd-aria-hidden="true"
      />
    ),
    okCancel: false,
    ...props,
    type,
  };
}

export function withSuccess(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = "success";
  return {
    icon: (
      <CheckOutlined
        className={`okd-h-6 okd-w-6 ${iconColors[type]}`}
        okd-aria-hidden="true"
      />
    ),
    okCancel: false,
    ...props,
    type,
  };
}

export function withError(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = "error";
  return {
    icon: (
      <CloseCircleOutlined
        className={`okd-h-6 okd-w-6 ${iconColors[type]}`}
        okd-aria-hidden="true"
      />
    ),
    okCancel: false,
    ...props,
    type,
  };
}

export function withConfirm(props: ConfirmDialogProps): ConfirmDialogProps {
  const type = "confirm";
  return {
    type,
    icon: (
      <ExclamationCircleOutlined
        className={`okd-h-6 okd-w-6 ${iconColors[type]}`}
        okd-aria-hidden="true"
      />
    ),
    okCancel: true,
    ...props,
  };
}
