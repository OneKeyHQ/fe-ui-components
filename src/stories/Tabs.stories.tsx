import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "../components/Icon/index";
import { Tabs as TabsComponent } from "../components";
const { TabList, TabItem, TabPanels, TabPanel } = TabsComponent;

export default {
  title: "UI/Tabs",
  component: TabsComponent,
} as ComponentMeta<typeof TabsComponent>;

const Template: ComponentStory<typeof TabsComponent> = (args) => (
  <TabsComponent {...args}>
    {(props) => {
      const { fitted, tabIcon, tabBadge } = props;

      return (
        <>
          <TabList fitted={fitted}>
            <TabItem fitted={fitted} icon={tabIcon}>
              Tab1
            </TabItem>
            <TabItem
              fitted={fitted}
              icon={tabIcon}
              tabBadge={tabBadge}
              badgeContent={6}
            >
              Tab1
            </TabItem>
            <TabItem
              fitted={fitted}
              icon={tabIcon}
              tabBadge={tabBadge}
              badgeContent={6}
            >
              Tab2222
            </TabItem>
            <TabItem
              fitted={fitted}
              icon={tabIcon}
              tabBadge={tabBadge}
              badgeContent={10}
            >
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

export const Default = Template.bind({});

Default.args = {
  defaultIndex: 0,
  onChange: (index) => {
    console.log("index: ", index);
  },
};

export const TabIcon = Template.bind({});

TabIcon.args = {
  defaultIndex: 0,
  onChange: (index) => {
    console.log("index: ", index);
  },
  tabIcon: <Icon name="AcademicCapOutline" size={16}></Icon>,
};

export const TabBetween = Template.bind({});

TabBetween.args = {
  defaultIndex: 0,
  onChange: (index) => {
    console.log("index: ", index);
  },
  fitted: true,
};

export const TabBadge = Template.bind({});

TabBadge.args = {
  defaultIndex: 1,
  onChange: (index) => {
    console.log("index: ", index);
  },
  tabBadge: true,
};
