import React, { FC, Fragment, useCallback } from "react";
import cx, { Argument } from "classnames";
import { Menu, Transition } from "@headlessui/react";
import Button from "../Button";
import Icon from "../Icon";

type DropdownProps = {
  /**
   * Menu 的位置，分别对应左下、中下、右下
   */
  place: "bottom-start" | "bottom-center" | "bottom-end";
  /**
   * 触发元素。当为空时，则为图标按钮；当为字段时，则为 Basic 按钮；使用 HTML 来自定义；
   */
  trigger?: JSX.Element | string;
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 菜单弹框的宽度
   */
  menuWidth?: number;
  /**
   * Collection of sectioned action items
   */
  // sections?: Array<any>;
  sections?: Array<any>;
};

const defaultProps = {
  place: "bottom-end",
} as const;

const Dropdown: FC<DropdownProps> = ({
  place,
  trigger,
  className,
  menuWidth,
  sections,
}) => {
  const defaultTrigger = useCallback(() => {
    return (
      <Button circular leadingIcon="DotsVerticalSolid" type="plain">
        {/* TODO i18n */}
        <span className="okd-sr-only">Open options</span>
      </Button>
    );
  }, []);
  return (
    <Menu
      as="div"
      className={cx(
        "okd-relative okd-inline-block okd-text-left",
        !!className && className
      )}
    >
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
            "okd-absolute okd-mt-2 okd-w-56 okd-px-3 okd-rounded okd-shadow-lg okd-bg-white okd-ring-1 okd-ring-black/5 okd-divide-y okd-divide-gray-100 focus:okd-outline-none",
            {
              "okd-origin-top-left okd-left-0": place === "bottom-start",
              "okd-left-1/2 okd--translate-x-1/2": place === "bottom-center",
              "okd-origin-top-right okd-right-0": place === "bottom-end",
            }
          )}
          style={{ width: menuWidth }}
        >
          {sections.map((section) => (
            <div className="okd-flex okd-flex-col okd-space-y-1 okd-py-1">
              {section.title && (
                <p className="okd-pt-2 okd-text-xs okd-font-medium okd-text-gray-500 okd-tracking-wider okd-uppercase">
                  {section.title}
                </p>
              )}
              {section.items.map((item) => (
                <Menu.Item>
                  {/* To style the active `Menu.Item` you can read the `active` render prop
                  argument, which tells you whether or not that menu item is currently
                  focused via the mouse or keyboard. */}
                  {({ active }) => (
                    <button
                      className={cx(
                        "okd-flex okd-items-center okd--mx-2 okd-p-2 okd-text-sm okd-text-left okd-rounded okd-group",
                        active
                          ? "okd-text-gray-900 okd-bg-gray-100"
                          : "okd-text-gray-700"
                      )}
                      onClick={item.onAction}
                    >
                      {item.icon && (
                        <Icon
                          name={item.icon}
                          className="okd-w-5 okd-h-5 okd-mr-3 okd-text-gray-400 group-hover:okd-text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                      {item.content}
                      {active && (
                        <Icon
                          name="CheckOutline"
                          className="okd-w-5 okd-h-5 okd-ml-3 okd-text-brand-400 group-hover:okd-text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
