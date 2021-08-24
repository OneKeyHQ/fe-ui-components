import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs as TabsComponent } from "../components";
const { TabList, TabItem, TabPanels, TabPanel } = TabsComponent;

export default {
  title: "UI/Tabs",
  component: TabsComponent,
} as ComponentMeta<typeof TabsComponent>;

const Template: ComponentStory<typeof TabsComponent> = (args) => (
  <TabsComponent {...args}>
    {(props) => {
      const { tabLayout, tabIcon } = props;
      return (
        <>
          <TabList tabLayout={tabLayout}>
            <TabItem first tabLayout={tabLayout} icon={tabIcon}>
              Tab1
            </TabItem>
            <TabItem tabLayout={tabLayout} icon={tabIcon}>
              Tab2222
            </TabItem>
            <TabItem tabLayout={tabLayout} icon={tabIcon}>
              Tab3
            </TabItem>
          </TabList>
          <TabPanels>
            <TabPanel>Tab1 Content</TabPanel>
            <TabPanel>Tab2 Content</TabPanel>
            <TabPanel>Tab3 Content</TabPanel>
          </TabPanels>
        </>
      );
    }}
  </TabsComponent>
);

export const Tabs = Template.bind({});

Tabs.args = {
  defaultIndex: 1,
  onChange: (index) => {
    console.log("index: ", index);
  },
  tabLayout: "normal",
};
