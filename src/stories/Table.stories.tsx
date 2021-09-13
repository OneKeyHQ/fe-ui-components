import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table as TableComponent } from "../components";
import { Card, TokenGroup } from "../components";

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

Default.args = {
  rowkey: "address",
  columns: [
    {
      title: "Name",
      dataIndex: "name",
      render: (value, record) => {
        return `${record.name}-${value}`;
      },
    },
    {
      title: "Chain",
      dataIndex: "chain",
    },
    {
      title: "Address",
      dataIndex: "address",
      tooltipContent: "token address",
    },
    {
      title: "Count",
      dataIndex: "count",
      sortOrder: true,
      contentType: "numeric",
    },
  ],
  dataSource: [
    {
      name: "ETH",
      chain: "ETH",
      address: "0x348",
      count: 20,
    },
    {
      name: "BNB",
      chain: "BSC",
      address: "0x000",
      count: 17,
    },
    {
      name: "HT",
      chain: "HECO",
      address: "0x111",
      count: 1,
    },
    {
      name: "OKB",
      chain: "OKEX",
      address: "0x222",
      count: 7,
    },
  ],
};

export const Opportunities = Template.bind({});
const TokenGroupDatas = {
  cornerToken: {
    src:
      "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/eth.png",
  },
  sources: [
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/btc.png",
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/bnb.png",
  ],
};
Opportunities.args = {
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
      title: "Address",
      dataIndex: "address",
      tooltipContent: "token address",
    },
    {
      title: "Count",
      dataIndex: "count",
      sortOrder: true,
      contentType: "numeric",
    },
  ],
  dataSource: [
    {
      tokenGroup: TokenGroupDatas,
      tvl: "$729,153,278",
      address: "0x348",
      count: 20,
    },
    {
      tokenGroup: TokenGroupDatas,
      tvl: "$729,153,278",
      address: "0x000",
      count: 17,
    },
    {
      tokenGroup: TokenGroupDatas,
      tvl: "$729,153,278",
      address: "0x111",
      count: 1,
    },
    {
      tokenGroup: TokenGroupDatas,
      tvl: "$729,153,278",
      address: "0x222",
      count: 7,
    },
  ],
};
