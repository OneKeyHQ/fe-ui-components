export const modalLocaleKeys = {
  okText: "ui-compnoents__modal__ok_text",
  justOkText: "ui-compnoents__modal__just_ok_text",
  cancelText: "ui-compnoents__modal__cancel_text",
} as const;

export interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}
