import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar as AvatarComponent } from "../components";

export default {
  title: "UI/Avatar",
  component: AvatarComponent,
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => (
  <AvatarComponent {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
  address: "0x0000000000000000000000000000000000000000",
};

export const Avatar2: ComponentStory<typeof AvatarComponent> = () => (
  <AvatarComponent address="0x1f73f8C993bf0e2b5a860Ffd93E135103208a707" />
);