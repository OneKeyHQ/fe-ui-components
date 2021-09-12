import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TokenList as TokenListComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "CUSTOM/TokenList",
  component: TokenListComponent,
} as ComponentMeta<typeof TokenListComponent>;

const Template: ComponentStory<typeof TokenListComponent> = (args) => (
  <TokenListComponent {...args} />
);

export const Default: ComponentStory<typeof TokenListComponent> = (args) => (
  <>
    <ConfigBar />
    <TokenListComponent {...args} />
  </>
);

Default.args = {};

export const example = Template.bind({});
example.args = {};
