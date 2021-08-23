import React, { FC, Fragment, ReactNode } from 'react'
import cx from 'classnames/dedupe'
import { Dialog, Transition } from '@headlessui/react'
import CheckIcon from '../Icon/react/CheckOutline'

type ModalType = 'info' | 'success' | 'error' | 'warn' | 'warning' | 'confirm'

export type ConfirmDialogProps = {
  /**
   * 传入 Modal 组件的 class
   */
  className?: string;
  /**
   * Modal 标题
   */
  title?: ReactNode;
  /**
   * 是否可见
   */
  visible?: boolean
  /** 点击确定回调 */
  onOk?: (...args: any[]) => any;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
  onCancel?: (...args: any[]) => any;

  // TODO: Update docs
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  type?: ModalType;
  icon?: React.ReactNode;
  okCancel?: boolean;
  close?: (...args: any[]) => void;
  afterClose?: () => void;
  content?: React.ReactNode;
};

export const iconColors: Record<ModalType, string> = {
  'info': 'okd-text-gray-400',
  'success': 'okd-text-green-400',
  'error': 'okd-text-red-400',
  'warn': 'okd-text-yellow-500',
  'warning': 'okd-text-yellow-500',
  'confirm': 'okd-text-yellow-500',
}

const iconBgColors: Record<ModalType, string> = {
  'info': 'okd-bg-gray-100',
  'success': 'okd-bg-green-100',
  'error': 'okd-bg-red-100',
  'warn': 'okd-bg-yellow-100',
  'warning': 'okd-bg-yellow-100',
  'confirm': 'okd-bg-yellow-100',
}

const ConfirmDialog: FC<ConfirmDialogProps> = (props) => {
  const { icon, onOk, close, onCancel, okText, okCancel, cancelText, visible, title, content, type, children } = props

  const handleCancel = () => {
    if (!onCancel || !onCancel()) {
      close({ triggerCancel: true })
      return
    }
  }

  const handleOkClick = () => {
    if (!onOk || !onOk()) {
      close({ triggerCancel: true })
      return
    }
  }

  const cancelActionNode = okCancel && <button
    type="button"
    className="okd-mt-3 okd-w-full okd-inline-flex okd-justify-center okd-rounded okd-border okd-border-gray-300 okd-shadow-sm okd-px-4 okd-py-2 okd-bg-white okd-text-base okd-font-medium okd-text-gray-700 hover:okd-bg-gray-50 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 sm:okd-mt-0 sm:okd-text-sm"
    onClick={handleCancel}
  >
    {cancelText}
  </button>


  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog
        as="div"
        auto-reopen="true"
        className="okd-fixed okd-z-10 okd-inset-0 okd-overflow-y-auto"
        onClose={handleCancel}
      >
        <div className="okd-flex okd-items-end okd-justify-center okd-min-h-screen okd-pt-4 okd-px-4 okd-pb-20 okd-text-center sm:okd-block sm:okd-p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="okd-fixed okd-inset-0 okd-bg-opacity-75 okd-transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="okd-hidden sm:okd-inline-block sm:okd-align-middle sm:okd-h-screen" okd-aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="okd-inline-block okd-align-bottom okd-bg-white okd-rounded-lg okd-px-4 okd-pt-5 okd-pb-4 okd-text-left okd-overflow-hidden okd-ring-1 okd-ring-black okd-ring-opacity-5 okd-shadow-xl okd-rounded-lg okd-transform okd-transition-all sm:okd-my-8 sm:okd-align-middle sm:okd-max-w-lg sm:okd-w-full sm:okd-p-6">
              <div>
                <div className={cx("okd-mx-auto okd-flex okd-items-center okd-justify-center okd-h-12 okd-w-12 okd-rounded-full", iconBgColors[type ?? 'info'])}>
                  {icon || <CheckIcon className="okd-h-6 okd-w-6 okd-text-green-600" okd-aria-hidden="true" />}
                </div>
                <div className="okd-mt-3 okd-text-center sm:okd-mt-5">
                  <Dialog.Title as="h3" className="okd-text-lg okd-leading-6 okd-font-medium okd-text-gray-900">
                    {title}
                  </Dialog.Title>
                  <div className="okd-mt-2">
                    {content || children}
                  </div>
                </div>
              </div>
              <div className={cx("okd-mt-5 sm:okd-mt-6 sm:okd-grid sm:okd-gap-3 sm:okd-grid-flow-row-dense", cancelActionNode && 'sm:okd-grid-cols-2')}>
                {cancelActionNode}
                <button
                  className="okd-w-full okd-inline-flex okd-justify-center okd-rounded okd-border okd-border-transparent okd-shadow-sm okd-px-4 okd-py-2 okd-bg-brand-500 okd-text-base okd-font-medium okd-text-white hover:okd-bg-brand-600 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 sm:okd-text-sm"
                  onClick={handleOkClick}
                >
                  {okText}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ConfirmDialog