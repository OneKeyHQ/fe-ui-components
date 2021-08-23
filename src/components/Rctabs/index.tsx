import React, { FC } from "react";
import RcTabs, {
  TabPane,
  TabsProps as RcTabsProps,
  TabPaneProps as RcTabPaneProps,
} from "rc-tabs";
import cx from "classnames";
import "./index.css";

type RctabsProps = {
  /**
   * activeKey 当前激活 tab 面板的 key。
   */
  activeKey: string;
  /**
   * defaultActiveKey 初始化选中面板的 key，如果没有设置 activeKey。
   */
  defaultActiveKey: string;
  /**
   * centered 标签居中展示。
   */
  centered?: boolean;
  /**
   * centered 标签布局。
   */
  tabLayout?: "normal" | "between";
  /**
   * onChange 切换面板的回调
   */
  onChange?: () => void;
  /**
   * onTabClick tab 被点击的回调
   */
  onTabClick?: () => void;
};

export interface RctabPaneProps {
  /**
   * key 对应 activeKey，唯一。
   */
  key: string;
  /**
   * tab 选项卡的显示文字。
   */
  tab: React.ReactNode;
}

export { RcTabPaneProps };

const defaultProps = {
  defaultActiveKey: "account",
} as const;

const Rctabs = (props: RctabsProps) => {
  const classes = cx();

  return <RcTabs {...props} className={classes} prefixCls="onekey-tabs" />;
};

Rctabs.defaultProps = defaultProps;
Rctabs.TabPane = TabPane;

export default Rctabs;
export { TabPane };
