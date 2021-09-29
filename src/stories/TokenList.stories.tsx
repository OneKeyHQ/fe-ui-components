import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TokenList as TokenListComponent } from "../components";
import { Button } from "../components";
import ConfigBar from "./Base";

export default {
  title: "CUSTOM/TokenList",
  component: TokenListComponent,
} as ComponentMeta<typeof TokenListComponent>;

export const Default: ComponentStory<typeof TokenListComponent> = (args) => (
  <>
    <ConfigBar />
    <TokenListComponent {...args} />
  </>
);

const valueSymble = "$";
const value = 10000;
const addButton = (
  <>
    <Button size="xs">Add</Button>
  </>
);
const handleClick = () => {
  alert("get click");
};
Default.args = {
  list: [
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      balance: 123,
      value: `${valueSymble}${value}`,
    },
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      balance: 123,
      value: `${valueSymble}${value}`,
    },
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      balance: 123,
      value: `${valueSymble}${value}`,
    },
  ],
};

const Template: ComponentStory<typeof TokenListComponent> = (args) => (
  <TokenListComponent {...args} />
);
export const showDivider = Template.bind({});
showDivider.args = {
  divider: true,
  list: [
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      balance: 123,
      value: `${valueSymble}${value}`,
    },
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      balance: 123,
      value: `${valueSymble}${value}`,
    },
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      balance: 123,
      value: `${valueSymble}${value}`,
    },
  ],
};

export const WithActions = Template.bind({});
WithActions.args = {
  divider: true,
  list: [
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      actions: addButton,
    },
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      actions: addButton,
    },
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      actions: addButton,
    },
  ],
};

export const Activatable = Template.bind({});
Activatable.args = {
  activatable: true,
  list: [
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      actions: addButton,
    },
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      actions: addButton,
    },
  ],
};

export const onClickEvent = Template.bind({});
onClickEvent.args = {
  list: [
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      balance: 123,
      value: `${valueSymble}${value}`,
      onClick: handleClick,
    },
    {
      token: {
        src:
          "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
        name: "BTC",
      },
      balance: 123,
      value: `${valueSymble}${value}`,
      onClick: handleClick,
    },
  ],
};
