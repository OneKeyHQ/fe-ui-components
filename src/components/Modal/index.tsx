/* This example requires Tailwind CSS v2.0+ */
import React, { FC, Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CheckIcon from '../Icon/react/CheckOutline'

export type ModalProps = {
  /**
   * 传入 Modal 组件的 class
   */
  className?: string;
  /**
   * Modal 标题
   */
  title?: string
  /**
   * 是否可见
   */
  visible?: boolean
  /**
   * 点击 ok 的回调
   */
  onOk?: () => void
  /**
   * 点击 cancel 的回调
   */
  onCancel?: () => void
};

const Modal: FC<ModalProps> = ({ onOk, onCancel, visible, className, title, children }) => {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog
        as="div"
        auto-reopen="true"
        className="okd-fixed okd-z-10 okd-inset-0 okd-overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={onCancel}
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
            <Dialog.Overlay className="okd-fixed okd-inset-0 okd-bg-gray-500 okd-bg-opacity-75 okd-transition-opacity" />
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
            <div className="okd-inline-block okd-align-bottom okd-bg-white okd-rounded-lg okd-px-4 okd-pt-5 okd-pb-4 okd-text-left okd-overflow-hidden okd-shadow-xl okd-transform okd-transition-all sm:okd-my-8 sm:okd-align-middle sm:okd-max-w-lg sm:okd-w-full sm:okd-p-6">
              <div>
                <div className="okd-mx-auto okd-flex okd-items-center okd-justify-center okd-h-12 okd-w-12 okd-rounded-full okd-bg-green-100">
                  <CheckIcon className="okd-h-6 okd-w-6 okd-text-green-600" okd-aria-hidden="true" />
                </div>
                <div className="okd-mt-3 okd-text-center sm:okd-mt-5">
                  <Dialog.Title as="h3" className="okd-text-lg okd-leading-6 okd-font-medium okd-text-gray-900">
                    {title}
                  </Dialog.Title>
                  <div className="okd-mt-2">
                    {children}
                  </div>
                </div>
              </div>
              {(onOk || onCancel) && <div className="okd-mt-5 sm:okd-mt-6 sm:okd-grid sm:okd-grid-cols-2 sm:okd-gap-3 sm:okd-grid-flow-row-dense">
                {onOk && <button
                  className="okd-w-full okd-inline-flex okd-justify-center okd-rounded-md okd-border okd-border-transparent okd-shadow-sm okd-px-4 okd-py-2 okd-bg-brand-500 okd-text-base okd-font-medium okd-text-white hover:okd-bg-brand-600 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 sm:okd-col-start-2 sm:okd-text-sm"
                  onClick={onOk}
                >
                  Deactivate
                </button>}
                {onCancel && <button
                  type="button"
                  className="okd-mt-3 okd-w-full okd-inline-flex okd-justify-center okd-rounded-md okd-border okd-border-gray-300 okd-shadow-sm okd-px-4 okd-py-2 okd-bg-white okd-text-base okd-font-medium okd-text-gray-700 hover:okd-bg-gray-50 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 sm:okd-mt-0 sm:okd-col-start-1 sm:okd-text-sm"
                  onClick={onCancel}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>}
              </div>}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
