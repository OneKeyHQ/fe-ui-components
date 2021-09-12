import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TokenSelector as TokenSelectorComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "CUSTOM/TokenSelector",
  component: TokenSelectorComponent,
} as ComponentMeta<typeof TokenSelectorComponent>;

const Template: ComponentStory<typeof TokenSelectorComponent> = (args) => (
  <TokenSelectorComponent {...args} />
);

export const Default: ComponentStory<typeof TokenSelectorComponent> = (args) => (
  <>
    <ConfigBar />
    <TokenSelectorComponent {...args} />
  </>
);

Default.args = {};

export const example = Template.bind({});
example.args = {};
