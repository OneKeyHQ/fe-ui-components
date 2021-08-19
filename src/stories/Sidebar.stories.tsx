import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sidebar as SidebarComponent } from "../components";
import ConfigBar from './Base';

export default {
  title: "CUSTOM/Sidebar",
  component: SidebarComponent,
} as ComponentMeta<typeof SidebarComponent>;

const Page: FC = ({ children }) => {
  return <div style={{ height: 600 }}>{children}</div>;
};

export const Sidebar: ComponentStory<typeof SidebarComponent> = (args) => (
  <Page>
    <ConfigBar />
    <SidebarComponent {...args} />
  </Page>
);
