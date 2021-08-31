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
  list: [
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/usdt.png",
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/bnb.png",
  ],
  chain: true,
  chainUrl:
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/eth.png",
};
