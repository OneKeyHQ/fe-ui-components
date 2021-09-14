import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table as TableComponent } from "../components";
import { Card, Button, TokenGroup } from "../components";

export default {
  title: "UI/Table",
  component: TableComponent,
} as ComponentMeta<typeof TableComponent>;

const Template: ComponentStory<typeof TableComponent> = (args) => (
  <Card>
    <div className="okd--m-4 sm:okd--m-6">
      <TableComponent {...args}></TableComponent>
    </div>
  </Card>
);

export const Default = Template.bind({});
const TokenGroupDatas = {
  cornerToken: {
    src:
      "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/eth.png",
  },
  sources: [
    {
      src:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
      name: "BTC",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/bnb.png",
      name: "BNB",
    },
  ],
  description: "Platform name",
};
const apyDatas = {
  total: 93.59,
  daily: 0.18,
};
Default.args = {
  rowkey: "address",
  columns: [
    {
      title: "Pool",
      dataIndex: "tokenGroup",
      render: (value, record) => {
        return (
          <div className="okd-flex">
            <TokenGroup
              size="lg"
              cornerToken={value.cornerToken}
              sources={value.sources}
              description={value.description}
            />
          </div>
        );
      },
    },
    {
      title: "TVL",
      dataIndex: "tvl",
      contentType: "numeric",
    },
    {
      title: "APY",
      dataIndex: "apy",
      render: (value) => {
        return (
          <>
            <div className="okd-text-gray-900">{value.total}%</div>
            <span>{value.daily}% Daily</span>
          </>
        );
      },
      tooltip: {
        content:
          "APY stands for annual percentage yield. It is calculated by profit and loss from all your accounts.<br />Currently it may deviate from the real situation due to the different statistics of each platform.",
        multiline: true,
        className: "okd-max-w-sm",
      },
      contentType: "numeric",
    },
    {
      title: "Uptime",
      dataIndex: "uptime",
      sortOrder: true,
      contentType: "numeric",
    },
    {
      dataIndex: "action",
      contentType: "numeric",
      render: (value) => {
        return (
          <Button size="xs" onClick={value.action}>
            {value.label}
          </Button>
        );
      },
    },
  ],
  dataSource: [
    {
      tokenGroup: TokenGroupDatas,
      tvl: "$729,153,278",
      apy: apyDatas,
      uptime: "59 Days",
      action: {
        label: "Add Liquidity",
      },
    },
    {
      tokenGroup: TokenGroupDatas,
      tvl: "$729,153,278",
      apy: apyDatas,
      uptime: "59 Days",
      action: {
        label: "Deposit",
      },
    },
    {
      tokenGroup: TokenGroupDatas,
      tvl: "$729,153,278",
      apy: apyDatas,
      uptime: "59 Days",
      action: {
        label: "Add Liquidity",
      },
    },
    {
      tokenGroup: TokenGroupDatas,
      tvl: "$729,153,278",
      apy: apyDatas,
      uptime: "59 Days",
      action: {
        label: "Deposit",
      },
    },
  ],
};
