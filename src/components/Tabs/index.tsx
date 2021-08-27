import React from "react";
import cx from "classnames";
import { Tab } from "@headlessui/react";
import Badge from "../Badge";

type TabsProps = {
  /**
   * defaultIndex 初始化选中面板的 index。
   */
  defaultIndex: number;
  /**
   * tabLayout 标签布局。
   */
  tabLayout?: "normal" | "between";
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
  //   tabIcon: <Icon name="AcademicCapOutline" size={16}></Icon>,
} as const;

interface TabListProps {
  /**
   * tabLayout 标签布局。
   */
  tabLayout?: "normal" | "between";
  /**
   * children 子元素。
   */
  children?: React.ReactNode;
}

const TabList = ({ tabLayout, children }: TabListProps) => {
  const classes = cx(
    "okd-flex okd-flex-none okd-items-center okd-relative okd-border-b okd-border-gray-200 okd-mb-4",
    // "before:okd-border-b okd-border-gray-50 okd-absolute okd-left-0 okd-right-0 okd-bottom-0",
    { "okd-flex-none": tabLayout !== "between" },
    { "okd-justify-between": tabLayout === "between" }
  );
  return <Tab.List className={classes}>{children}</Tab.List>;
};

interface TabItemProps {
  /**
   * first 是否为第一个tab。
   */
  first?: boolean;
  /**
   * tabLayout 标签布局。
   */
  tabLayout?: "normal" | "between";
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
}

const TabItem = ({
  first,
  tabLayout,
  children,
  icon,
  tabBadge,
  badgeContent,
}: TabItemProps) => {
  return (
    <Tab
      className={({ selected }) =>
        cx(
          "okd-inline-flex okd-items-center okd-py-4 okd-px-1 okd-font-medium okd-text-sm okd-text-gray-500 focus:okd-outline-none",
          "okd-cursor-pointer okd-border-b-2 okd-duration-300 okd-transition-colors",
          !first && tabLayout !== "between" && "okd-ml-9",
          tabLayout === "between" && "okd-flex-grow okd-justify-center",
          !selected &&
            "hover:okd-text-gray-700 okd-border-transparent hover:okd-border-gray-500",
          selected && "okd-text-brand-500 okd-border-brand-500"
        )
      }
    >
      {React.isValidElement(icon) && <div className="okd-mr-2.5">{icon}</div>}
      {children}
      {tabBadge && <Badge className="okd-ml-3">{badgeContent}</Badge>}
    </Tab>
  );
};

const TabPanels = ({ children }) => {
  return <Tab.Panels>{children}</Tab.Panels>;
};

const TabPanel = ({ children }) => {
  return <Tab.Panel>{children}</Tab.Panel>;
};

const Tabs = (props: TabsProps) => {
  const { children, onChange, defaultIndex } = props;

  return (
    <div className="okd-w-full okd-overflow-hidden okd-p-0">
      <Tab.Group defaultIndex={defaultIndex} onChange={onChange}>
        {children(props)}
      </Tab.Group>
    </div>
  );
};

Tabs.defaultProps = defaultProps;
Tabs.TabList = TabList;
Tabs.TabItem = TabItem;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;

export default Tabs;
