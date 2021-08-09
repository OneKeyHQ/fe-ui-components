import React, { FC, ReactNode, Ref, Fragment, useCallback } from "react";
import { Popover, Dialog, Transition } from "@headlessui/react";
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
          "w-5 h-5 transition flex items-center justify-center",
          open
            ? "text-gray-500 -rotate-180 dark:text-gray-400"
            : "text-gray-400 dark:text-gray-500"
        )}
        size={14}
        name="CHEVRON-DOWN-OUTLINE"
      />
    );
  }, []);
  return (
    <Popover className="relative inline-block">
      {({ open }) => (
        <>
          <Popover.Button
            ref={triggerButtonRef}
            className={classNames(
              "inline-flex items-center p-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 dark:ring-offset-gray-900",
              open
                ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-50 focus:ring-0 focus:ring-transparent"
                : "text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-200"
            )}
          >
            {typeof trigger === "function"
              ? trigger(open, defaultIcon(open))
              : trigger || defaultIcon(open)}
          </Popover.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute z-10 w-64 mt-2 origin-top -translate-x-1/2 left-1/2 sm:origin-top-right sm:left-auto sm:translate-x-0 sm:-right-1">
              <div className="overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/20">
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
