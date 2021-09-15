import React, { FC } from "react";
import cx from "classnames";
import { Disclosure } from "@headlessui/react";
import Icon from "../Icon/index";

type TogglelistProps = {
  /**
   * defaultOpen 初始化面板是否默认打开。
   */
  defaultOpen?: boolean;
  /**
   * header 面板头内容。
   */
  header: React.ReactNode;
  /**
   * className 样式。
   */
  className?: string;
  /**
   * boolean 样式。
   */
  noStyle?: boolean;
};

const Togglelist: FC<TogglelistProps> = ({
  children,
  className,
  defaultOpen,
  header,
  noStyle,
  ...rest
}) => {
  const classes = cx(
    "okd-flex okd-items-center okd-justify-between okd-w-full okd-p-2 okd-pr-3 okd-text-sm okd-font-medium okd-text-left",
    noStyle
      ? "okd-text-gray-400"
      : "okd-text-brand-800 okd-bg-brand-50 okd-rounded-t okd-rounded-b hover:okd-bg-brand-100 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-brand-500 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 focus:okd-ring-opacity-75"
  );
  return (
    <Disclosure
      as="div"
      className={className}
      defaultOpen={defaultOpen}
      {...rest}
    >
      {({ open }) => {
        return (
          <>
            <Disclosure.Button className={classes}>
              {header}
              <Icon
                name="ChevronUpOutline"
                className={`${
                  !open ? "okd-transform okd-rotate-180" : ""
                } okd-w-5 okd-h-5 ${
                  noStyle ? "okd-text-gray-400" : "okd-text-brand-500"
                }`}
              ></Icon>
            </Disclosure.Button>
            <Disclosure.Panel className="okd-p-2 okd-text-sm text-gray-500">
              {children}
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};

export default Togglelist;
