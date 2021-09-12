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

Default.args = {
  list: [
    {
      src:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
      name: "BTC",
      balance: 123,
      rate: "$333",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
      name: "BTC",
      balance: 123,
      rate: "$333",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
      name: "BTC",
      balance: 123,
      rate: "$333",
    },
  ],
};

// export const example = Template.bind({});
// example.args = {};
