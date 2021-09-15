import React, { useState } from "react";
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

export const TagActiveOutOfControl = Template.bind({});
TagActiveOutOfControl.args = {
  children: "OneKeyHQ",
  clickable: true,
  token: {
    chain: 'eth'
  }
};

export const TagActiveControl: ComponentStory<typeof TagComponent> = () => {
  const [active, setActive] = useState(true);
  return (
    <TagComponent
      children="OneKeyHQ"
      clickable={true}
      active={active}
      onChange={setActive}
      token={
        {
          chain: 'eth'
        }
      }
    />
  );
}

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
  onRemove: () => { alert('removed') },
  token: {
    chain: "eth",
  },
};