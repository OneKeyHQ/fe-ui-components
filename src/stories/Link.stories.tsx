import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link as LinkComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Link",
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>;

const Template: ComponentStory<typeof LinkComponent> = (args) => (
  <LinkComponent {...args} />
);

export const Default: ComponentStory<typeof LinkComponent> = (args) => (
  <>
    <ConfigBar />
    <LinkComponent {...args} />
  </>
);
Default.args = {
  children: "Link",
};

export const Highlight = Template.bind({});
Highlight.args = {
  color: true,
  children: "Link",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: true,
  children: "Link",
};

export const Underline = Template.bind({});
Underline.args = {
  underline: true,
  children: "Link",
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  children: "Link",
};
