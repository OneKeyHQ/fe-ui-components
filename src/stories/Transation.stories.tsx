import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TransationList as TransationListComponent } from "../components";
import cx from "classnames";
import { Card, Account, Tooltip, Icon } from "../components";

export default {
  title: "UI/TransationList",
  component: TransationListComponent,
} as ComponentMeta<typeof TransationListComponent>;

const Template: ComponentStory<typeof TransationListComponent> = (args) => (
  <Card className="okd-overflow-hidden okd-w-80">
    <div className="okd--m-4 sm:okd--m-6">
      <TransationListComponent {...args}></TransationListComponent>
    </div>
  </Card>
);

export const Default = Template.bind({});

Default.args = {
  dataSource: [
    {
      label: "QUEUE",
      lists: [
        {
          label: "Send",
          address: null,
          direction: 0,
          status: 1,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
      ],
    },
    {
      label: "September",
      lists: [
        {
          label: "Send",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 0,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
        {
          label: "Send",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 2,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
        {
          label: "Send",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 3,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
        {
          label: "Send",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 0,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
      ],
    },
  ],
};

export const AccountList = Template.bind({});

AccountList.args = {
  dataSource: [
    {
      label: "solana",
      lists: [
        {
          label: "OkeKey",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 1,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
      ],
    },
    {
      label: "bsc",
      lists: [
        {
          label: "Account2",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 0,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
        {
          label: "Account3",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 2,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
        {
          label: "Account5",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 3,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
        {
          label: "Account6",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 0,
          value: "-0.5",
          symbol: "ETH",
          timestamp: "15:03·Sep",
        },
      ],
    },
  ],
  renderLabel: (label, len) => {
    return (
      <div className="okd-flex okd-items-center okd-text-gray-400 okd-py-2 okd-px-4 okd-text-sm okd-leading-4">
        {`${label}(${len})`}
        <Tooltip place="bottom" content="chain">
          <Icon name="PresentationChartBarOutline" size={14}></Icon>
        </Tooltip>
      </div>
    );
  },
  renderItem: (item, idx, len) => {
    return (
      <div
        className={cx({
          "okd-border-b okd-border-gray-50 okd-border-solid": idx !== len - 1,
        })}
      >
        <Account
          className="okd-pl-0"
          label={item.label}
          address={item.address}
        ></Account>
      </div>
    );
  },
};
