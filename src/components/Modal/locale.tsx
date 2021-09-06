export const modalLocaleKeys = {
  okText: "ui-components__modal__ok_text",
  justOkText: "ui-components__modal__just_ok_text",
  cancelText: "ui-components__modal__cancel_text",
} as const;

export interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}
