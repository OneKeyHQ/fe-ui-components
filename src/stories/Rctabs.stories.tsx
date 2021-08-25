import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Rctabs as TabsComponent } from "../components";
const { TabPane } = TabsComponent;

export default {
  title: "UI/Rctabs",
  component: TabsComponent,
} as ComponentMeta<typeof TabsComponent>;

const Template: ComponentStory<typeof TabsComponent> = (args) => (
  //   <TabsComponent {...args} />
  <TabsComponent {...args}>
    <TabPane tab="My Account" key="account">
      first tab: Account
    </TabPane>
    <TabPane tab="Company" key="company">
      second tab: Company
    </TabPane>
    <TabPane tab="Third" key="third">
      Third tab: Bitcoin
    </TabPane>
  </TabsComponent>
);

export const Rctabs = Template.bind({});

Rctabs.args = {
  defaultActiveKey: "account",
  onChange: (activeKey) => {
    console.log("activeKey: ", activeKey);
  },
  tabLayout: "normal",
};
