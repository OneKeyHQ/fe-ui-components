import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table as TableComponent } from "../components";

export default {
  title: "UI/Table",
  component: TableComponent,
} as ComponentMeta<typeof TableComponent>;

const Template: ComponentStory<typeof TableComponent> = (args) => (
  <TableComponent {...args}></TableComponent>
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
      toolTip: true,
      tooltipContent: "token address",
    },
    {
      title: "Count",
      dataIndex: "count",
      sortOrder: true,
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
