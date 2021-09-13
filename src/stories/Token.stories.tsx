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

export const EVMToken = Template.bind({});
EVMToken.args = {
  chain: 'bsc',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

export const TokenWithName = Template.bind({});
TokenWithName.args = {
  chain: 'bsc',
  name: 'BSC'
};

export const TokenWithDescription = Template.bind({});
TokenWithDescription.args = {
  chain: 'bsc',
  name: 'BSC',
  description: 'Ethereum'
};

export const TokenWithContractAddress = Template.bind({});
TokenWithContractAddress.args = {
  chain: 'bsc',
  name: 'DOGE',
  address: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
  description: 'BSC'
}