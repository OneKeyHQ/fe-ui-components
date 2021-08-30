import React, {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import cx from "classnames";
import { Menu, Transition } from "@headlessui/react";
import Button from "../Button";

type DropdownProps = {
  /**
   * Menu 的位置，分别对应左下、中下、右下
   */
  place: "bottom-start" | "bottom-center" | "bottom-end";
  trigger?: JSX.Element | string;
};

const defaultProps = {
  place: "bottom-end",
} as const;

const Dropdown: FC<DropdownProps> = ({ place, children, trigger }) => {
  const defaultTrigger = useCallback(() => {
    return (
      <Button circular leadingIcon="DotsVerticalSolid" type="plain">
        {/* TODO i18n */}
        <span className="okd-sr-only">Open options</span>
      </Button>
    );
  }, []);
  return (
    <Menu as="div" className="okd-relative okd-inline-block okd-text-left">
      {/* The `Menu.Button` will automatically open/close the `Menu.Items` when clicked,
      and when the menu is open, the list of items receives focus and is
      automatically navigable via the keyboard. */}
      <Menu.Button as="div">
        {typeof trigger === "string" ? (
          <Button trailingIcon="ChevronDownSolid">{trigger}</Button>
        ) : (
          trigger || defaultTrigger
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="okd-transition okd-ease-out okd-duration-100"
        enterFrom="okd-transform okd-opacity-0 okd-scale-95"
        enterTo="okd-transform okd-opacity-100 okd-scale-100"
        leave="okd-transition okd-ease-in okd-duration-75"
        leaveFrom="okd-transform okd-opacity-100 okd-scale-100"
        leaveTo="okd-transform okd-opacity-0 okd-scale-95"
      >
        <Menu.Items
          className={cx(
            "okd-absolute okd-mt-2 okd-w-56 okd-rounded okd-shadow-lg okd-bg-white okd-ring-1 okd-ring-black/5 focus:okd-outline-none",
            {
              "okd-origin-top-left okd-left-0": place === "bottom-start",
              "okd-left-1/2 okd--translate-x-1/2": place === "bottom-center",
              "okd-origin-top-right okd-right-0": place === "bottom-end",
            }
          )}
        >
          <Menu.Item>
            {/* To style the active `Menu.Item` you can read the `active` render prop
            argument, which tells you whether or not that menu item is currently
            focused via the mouse or keyboard. */}
            {({ active }) => (
              <button className={`${active && "bg-blue-500"}`}>
                Account settings
                {children}
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
