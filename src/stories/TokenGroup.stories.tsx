import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TokenGroup as TokenGroupComponent } from "../components";

export default {
  title: "UI/TokenGroup",
  component: TokenGroupComponent,
} as ComponentMeta<typeof TokenGroupComponent>;

const Template: ComponentStory<typeof TokenGroupComponent> = (args) => (
  <TokenGroupComponent {...args} />
);

export const TokenGroup = Template.bind({});
TokenGroup.args = {
  sources: [
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/usdt.png",
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/bnb.png",
  ],
  cornerToken: {
    src: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/eth.png',
  },
};

export const TokenGroupChain = Template.bind({});
TokenGroupChain.args = {
  sources: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
  cornerToken: {
    chain: 'eth',
  }
};

export const TokenGroupWithUnavailableChain = Template.bind({});
TokenGroupWithUnavailableChain.args = {
  sources: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
  cornerToken: {
    chain: 'asdfasdfsf',
  },
};

export const TokenGroupWithChain = Template.bind({});
TokenGroupWithChain.args = {
  sources: [{ chain: 'bsc', name: 'BSC' }, { chain: 'eth', name: 'ETH' }],
  cornerToken: {
    chain: 'asdfasdfsf',
  },
};

export const TokenGroupWithDescription = Template.bind({});
TokenGroupWithDescription.args = {
  sources: [{ chain: 'bsc', name: 'BSC' }, { chain: 'eth', name: 'ETH' }],
  cornerToken: {
    chain: 'asdfasdfsf',
  },
  description: 'something'
};
