import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Token as TokenComponent } from "../components";

export default {
  title: "UI/Token",
  component: TokenComponent,
} as ComponentMeta<typeof TokenComponent>;

const Template: ComponentStory<typeof TokenComponent> = (args) => (
  <TokenComponent {...args} />
);

export const Token = Template.bind({});
Token.args = {
  src:
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};