import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Badge as BadgeComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Badge",
  component: BadgeComponent,
} as ComponentMeta<typeof BadgeComponent>;

const Template: ComponentStory<typeof BadgeComponent> = (args) => (
  <BadgeComponent {...args} />
);

export const Default: ComponentStory<typeof BadgeComponent> = (args) => (
  <>
    <ConfigBar />
    <BadgeComponent {...args} />
  </>
);
Default.args = {
  children: "Badge",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  children: "Badge",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  children: "Badge",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  children: "Badge",
};

export const Critical = Template.bind({});
Critical.args = {
  type: "critical",
  children: "Badge",
};
