import React from "react";
import { ComponentMeta } from "@storybook/react";

import { TokenSelector } from "../components";
import ConfigBar from "./Base";

export default {
  title: "CUSTOM/TokenSelector",
  component: TokenSelector,
} as ComponentMeta<typeof TokenSelector>;

export const Default = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ConfigBar />
      <TokenSelector.Trigger
        token={{
          src:
            "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
          name: "BTC",
        }}
        onClick={() => {
          showModal();
        }}
      >
        Select a token
      </TokenSelector.Trigger>
      <TokenSelector
        visible={isModalVisible}
        onClose={() => handleCancel()}
        list={[
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
        ]}
      />
    </>
  );
};

Default.args = {};
