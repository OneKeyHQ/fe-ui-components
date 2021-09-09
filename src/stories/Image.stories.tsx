import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image as ImageComponent } from "../components";

export default {
  title: "UI/Image",
  component: ImageComponent,
} as ComponentMeta<typeof ImageComponent>;

const Template: ComponentStory<typeof ImageComponent> = (args) => (
  <ImageComponent {...args} />
);

export const Image = Template.bind({});
Image.args = {
  src: "https://source.unsplash.com/random",
};

export const Fallback = Template.bind({});
Fallback.args = {
  src: "dafsfdsadfsaf",
};