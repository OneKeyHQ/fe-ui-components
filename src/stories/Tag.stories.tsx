import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag as TagComponent } from "../components";

export default {
  title: "UI/Tag",
  component: TagComponent,
} as ComponentMeta<typeof TagComponent>;

const Template: ComponentStory<typeof TagComponent> = (args) => (
  <TagComponent {...args}>
  </TagComponent>
);

export const Tag = Template.bind({});
Tag.args = {
  children: "OneKeyHQ",
  token: {
    chain: 'eth'
  }
};

export const TagActiveControl = Template.bind({});
TagActiveControl.args = {
  children: "OneKeyHQ",
  active: true,
  token: {
    chain: 'eth'
  }
};

export const TokenOnly = Template.bind({});
TokenOnly.args = {
  active: true,
  token: {
    chain: 'eth'
  }
};

export const RemoveableTag = Template.bind({});
RemoveableTag.args = {
  children: "OneKeyHQ",
  removeable: true,
  token: {
    chain: "eth",
  },
};