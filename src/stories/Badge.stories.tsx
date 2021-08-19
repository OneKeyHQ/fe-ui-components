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

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Badge",
};

export const Important = Template.bind({});
Important.args = {
  type: "important",
  children: "Badge",
};

export const Removed = Template.bind({});
Removed.args = {
  type: "removed",
  children: "Badge",
};

export const Added = Template.bind({});
Added.args = {
  type: "added",
  children: "Badge",
};
