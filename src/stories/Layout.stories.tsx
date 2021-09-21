import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Layout as LayoutComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Layout",
  component: LayoutComponent,
} as ComponentMeta<typeof LayoutComponent>;

export const Default: ComponentStory<typeof LayoutComponent> = (args) => (
  <>
    <ConfigBar />
    <LayoutComponent {...args} />
  </>
);

Default.args = {
  pageProps: {
    pageHeader: {
      title: "Page Title",
    },
  },
  sidebarProps: {
    active: "portfolio",
  },
  children: <div>Content here.</div>,
};

// const Template: ComponentStory<typeof LayoutComponent> = (args) => (
//   <LayoutComponent {...args} />
// );

// export const example = Template.bind({});
// example.args = {};
