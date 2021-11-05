import React, { Fragment } from "react";
import cx from "classnames";
import { Tab } from "@headlessui/react";
import Badge from "../Badge";

type TabsProps = {
  /**
   * defaultIndex 初始化选中面板的 index。
   */
  defaultIndex: number;
  /**
   * TabItem 自适应宽度
   */
  fitted?: boolean;
  reversed?: boolean;
  /**
   * 设置tab的图标
   */
  tabIcon?: React.ReactNode;
  /**
   * tabBadge 是否设置tab下的计数/徽章
   */
  tabBadge?: boolean;
  /**
   * children render props。
   */
  children?: (props: any) => React.ReactNode;
  /**
   * onChange 切换面板的回调
   */
  onChange?: (index: number) => void;
};

const defaultProps = {
  defaultIndex: 1,
} as const;

interface TabListProps {
  /**
   * TabItem 自适应宽度
   */
  fitted?: boolean;
  reversed?: boolean;
  /**
   * children 子元素。
   */
  children?: React.ReactNode;
  className?: string;
}

const TabList = ({ fitted, reversed, children, className }: TabListProps) => {
  const classes = cx(
    "okd-relative okd-flex okd-flex-none okd-items-center  okd-border-gray-200",
    { "okd-space-x-8": !fitted },
    reversed?"okd-border-t":"okd-border-b"
  );
  return <Tab.List className={cx(classes, className)}>{children}</Tab.List>;
};

interface TabItemProps {
  /**
   * first 是否为第一个tab。
   */
  first?: boolean;
  /**
   * TabItem 自适应宽度
   */
  fitted?: boolean;
  reversed?: boolean;
  /**
   * 设置tab的图标
   */
  icon?: React.ReactNode;
  /**
   * tabBadge 是否设置tab下的计数/徽章
   */
  tabBadge?: boolean;
  /**
   * badgeContent 是否设置tab下的计数/徽章
   */
  badgeContent?: React.ReactNode;
  /**
   * children 子元素。
   */
  children?: React.ReactNode;
  className?: string;
}

const TabItem = ({
  fitted,
  reversed,
  children,
  icon,
  tabBadge,
  badgeContent,
  className,
}: TabItemProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={cx(
            "okd-inline-flex okd-items-center okd-justify-center okd-py-4 okd-px-1 okd-font-medium okd-text-sm  ",
            { "okd-flex-1": fitted },
            reversed ? "okd-border-t-2 okd--mt-px" : "okd-border-b-2 okd--mb-px",
            selected
              ? "okd-text-brand-600 okd-border-brand-500"
              : "okd-border-transparent okd-text-gray-500 hover:okd-text-gray-700 hover:okd-border-gray-300",
            className
          )}
        >
          {React.isValidElement(icon) && (
            <div className="okd-mr-2.5">{icon}</div>
          )}
          {children}
          {tabBadge && (
            <Badge type={selected ? "success" : undefined} className="okd-ml-3">
              {badgeContent}
            </Badge>
          )}
        </button>
      )}
    </Tab>
  );
};

const TabPanels = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <Tab.Panels className={cx(className)}>{children}</Tab.Panels>;
};

const TabPanel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <Tab.Panel className={cx(className)}>{children}</Tab.Panel>;
};

const Tabs = (props: TabsProps) => {
  const { children, onChange, defaultIndex } = props;

  return (
    <Tab.Group defaultIndex={defaultIndex} onChange={onChange}>
      {children(props)}
    </Tab.Group>
  );
};

Tabs.defaultProps = defaultProps;
Tabs.TabList = TabList;
Tabs.TabItem = TabItem;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;

export default Tabs;
