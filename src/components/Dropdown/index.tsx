import React, { FC, ReactNode, Ref, Fragment, useCallback } from "react";
import { Popover, Transition } from "@headlessui/react";
import classNames from "classnames";

import Icon from "../Icon";

type DropdownProps = {
  /**
   * 触发打开 Dropdown 组件的元素
   */
  trigger?: ReactNode | ((open: boolean, defaultIcon: ReactNode) => ReactNode);
  /**
   * Dropdown 组件自身外层 button 的 ref
   */
  triggerButtonRef?: Ref<HTMLButtonElement>;
};

const Dropdown: FC<DropdownProps> = ({
  triggerButtonRef,
  trigger,
  children,
}) => {
  const defaultIcon = useCallback((open) => {
    return (
      <Icon
        className={classNames(
          "okd-w-5 okd-h-5 okd-transition okd-flex okd-items-center okd-justify-center",
          open
            ? "okd-text-gray-500 okd--rotate-180  dark:okd-text-gray-400"
            : "okd-text-gray-400 dark:okd-text-gray-500"
        )}
        size={14}
        name="ChevronDownOutline"
      />
    );
  }, []);
  return (
    <Popover className="relative okd-inline-block">
      {({ open }) => (
        <>
          <Popover.Button
            ref={triggerButtonRef}
            className={classNames(
              "okd-inline-flex okd-items-center okd-p-2 okd-text-sm okd-font-medium okd-rounded focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 dark:okd-ring-offset-gray-900",
              open
                ? "okd-bg-gray-100 okd-text-gray-900 dark:okd-bg-gray-700 dark:okd-text-gray-50 focus:okd-ring-0 focus:okd-ring-transparent"
                : "okd-text-gray-700 hover:okd-bg-gray-50 dark:hover:okd-bg-gray-800 dark:okd-text-gray-200"
            )}
          >
            {typeof trigger === "function"
              ? trigger(open, defaultIcon(open))
              : trigger || defaultIcon(open)}
          </Popover.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="okd-transition okd-ease-out okd-duration-100"
            enterFrom="okd-transform okd-opacity-0 okd-scale-95"
            enterTo="okd-transform okd-opacity-100 okd-scale-100"
            leave="okd-transition okd-ease-in okd-duration-75"
            leaveFrom="okd-transform okd-opacity-100 okd-scale-100"
            leaveTo="okd-transform okd-opacity-0 okd-scale-95"
          >
            <Popover.Panel className="okd-absolute okd-z-10 okd-w-64 okd-mt-2 okd-origin-top okd--translate-x-1/2 left-1/2 sm:origin-tookd-p-right sm:left-auto sm:translate-x-0 sm:-right-1">
              <div className="bg-white okd-overflow-hidden okd-rounded-lg okd-shadow-lg okd-ring-1 okd-ring-black/5 dark:okd-bg-gray-900 dark:okd-ring-white/20">
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Dropdown;
