import React, { FC, ReactNode, Ref, Fragment, useCallback } from "react";
import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import cx from "classnames";
import Button from "../Button";

type PopoverProps = {
  /**
   * 触发打开 Popover 组件的元素
   */
  trigger?:
    | ReactNode
    | ((open: boolean, defaultTrigger: ReactNode) => ReactNode);
  /**
   * Popover 组件自身外层 button 的 ref
   */
  triggerButtonRef?: Ref<HTMLButtonElement>;
  /**
   * Menu 的位置，分别对应左下、中下、右下
   */
  place?: "bottom-start" | "bottom-center" | "bottom-end";
  /**
   * 设置额外的 class
   */
  className?: string | null;
};

const defaultProps = {
  place: "bottom-end",
} as const;

const Popover: FC<PopoverProps> = ({
  triggerButtonRef,
  trigger,
  children,
  place,
  className,
}) => {
  const defaultTrigger = useCallback((open) => {
    return (
      <Button
        className={cx({ "okd-bg-gray-100 okd-text-gray-500": open })}
        circular
        leadingIcon="DotsVerticalSolid"
        type="plain"
      />
    );
  }, []);
  return (
    <HeadlessPopover className="okd-relative okd-inline-block">
      {({ open }) => (
        <>
          <HeadlessPopover.Button ref={triggerButtonRef}>
            {typeof trigger === "function"
              ? trigger(open, defaultTrigger(open))
              : trigger || defaultTrigger(open)}
          </HeadlessPopover.Button>
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
            <HeadlessPopover.Panel
              className={cx(
                "okd-absolute okd-z-10 okd-w-64 okd-mt-2",
                {
                  "okd-origin-top-left okd-left-0": place === "bottom-start",
                  "okd-left-1/2 okd--translate-x-1/2":
                    place === "bottom-center",
                  "okd-origin-top-right okd-right-0": place === "bottom-end",
                },
                className
              )}
            >
              <div className="okd-bg-white okd-overflow-hidden okd-rounded okd-shadow-lg okd-ring-1 okd-ring-black/5">
                {children}
              </div>
            </HeadlessPopover.Panel>
          </Transition>
        </>
      )}
    </HeadlessPopover>
  );
};

Popover.defaultProps = defaultProps;

export default Popover;
