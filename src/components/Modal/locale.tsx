import { getLocaleSymbol } from "../utils";

export const defaultLocale = {
  'zh-CN': {
    okText: '确认',
    justOkText: '没问题',
    cancelText: '取消'
  },
  'en-US': {
    okText: 'Confirm',
    justOkText: 'Ok',
    cancelText: 'Cancel'
  }
}

export interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}

let runtimeLocale: ModalLocale = {
  ...defaultLocale[getLocaleSymbol()]
};

export function changeConfirmLocale(newLocale?: ModalLocale) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale[getLocaleSymbol()]
    };
  }
}

export function getConfirmLocale() {
  return runtimeLocale;
}
