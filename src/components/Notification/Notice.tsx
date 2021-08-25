import React, { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { uniqueId } from 'lodash'


interface DivProps extends React.HTMLProps<HTMLDivElement> {
  // Ideally we would allow all data-* props but this would depend on https://github.com/microsoft/TypeScript/issues/28960
  'data-testid'?: string;
}

export type NotificationProps = {
  /** 是否展示 */
  className?: string;
  /** 多久后关闭 Notification 组件，默认为 3s。单位为秒 */
  duration?: number | null;
  /** Mark as final key since set maxCount may keep the key but user pass key is different */
  noticeKey?: React.Key;
  closeIcon?: React.ReactNode;
  closable?: boolean;
  props?: DivProps;
  onClose?: (key: React.Key) => void;

  /** @private Only for internal usage. We don't promise that we will refactor this */
  holder?: HTMLDivElement;

  /** @private Provided by CSSMotionList */
  show?: boolean;
}

export default function Notification({ noticeKey = uniqueId('onekey-modal'), show, onClose, duration = 3 }: NotificationProps) {
  const timerRef = React.useRef(null)

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      onClose?.(noticeKey)
    }, duration * 1000)

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [duration, noticeKey, onClose])

  return (
    <div
      aria-live="assertive"
      className="okd-fixed okd-inset-0 okd-flex okd-items-end okd-px-4 okd-py-6 okd-pointer-events-none sm:okd-p-6 sm:okd-items-start"
    >
      <div className="okd-w-full okd-flex okd-flex-col okd-items-center okd-space-y-4 sm:okd-items-end">
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          show={show}
          as={Fragment}
          enter="okd-transform okd-ease-out okd-duration-300 okd-transition"
          enterFrom="okd-translate-y-2 okd-opacity-0 sm:okd-translate-y-0 sm:okd-translate-x-2"
          enterTo="okd-translate-y-0 okd-opacity-100 sm:okd-translate-x-0"
          leave="okd-transition okd-ease-in okd-duration-100"
          leaveFrom="okd-opacity-100"
          leaveTo="okd-opacity-0"
        >
          <div className="okd-max-w-md okd-w-full okd-bg-white okd-shadow-lg okd-rounded-lg okd-pointer-events-auto okd-flex okd-ring-1 okd-ring-black okd-ring-opacity-5">
            <div className="okd-w-0 okd-flex-1 okd-p-4">
              <div className="okd-flex okd-items-start">
                <div className="okd-flex-shrink-0 okd-pt-0.5">
                  <img
                    className="okd-h-10 okd-w-10 okd-rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                  />
                </div>
                <div className="okd-ml-3 okd-w-0 okd-flex-1">
                  <p className="okd-text-sm okd-font-medium okd-text-gray-900">Emilia Gates</p>
                  <p className="okd-mt-1 okd-text-sm okd-text-gray-500">Sure! 8:30pm works great!</p>
                </div>
              </div>
            </div>
            <div className="okd-flex okd-border-l okd-border-gray-200">
              <button
                className="okd-w-full okd-border okd-border-transparent okd-rounded-none okd-rounded-r-lg okd-p-4 okd-flex okd-items-center okd-justify-center okd-text-sm okd-font-medium okd-text-brand-600 hover:okd-text-brand-500 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-brand-500"
                onClick={() => {
                  onClose(noticeKey)
                }}
              >
                Reply
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}
