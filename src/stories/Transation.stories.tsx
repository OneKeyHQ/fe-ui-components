import React, { useCallback } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TransationList as TransationListComponent } from "../components";
import cx from "classnames";
import {
  Card,
  Account,
  Tooltip,
  Button,
  Switch,
  Icon,
  Tabs,
  Input as Search,
} from "../components";
import _ from "lodash";
const { TabList, TabItem, TabPanels, TabPanel } = Tabs;
const { Body } = Card;

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
        <Account label={item.label} address={item.address}></Account>
      </div>
    );
  },
  listPanelClass: "okd-pl-0",
};

// Manage Tokens

const Tokens: ComponentStory<typeof TransationListComponent> = (args) => {
  const searchHandle = useCallback((value) => {
    setTimeout(() => {
      console.log("fetch data: ");
    }, 1000);
  }, []);

  return (
    <Card title="Manage Tokens" className="okd-overflow-hidden okd-w-96">
      <Body className="okd-p-0">
        <Tabs defaultIndex={0}>
          {(props) => {
            return (
              <>
                <TabList fitted={true}>
                  <TabItem fitted={true}>Search</TabItem>
                  <TabItem fitted={true}>Custom</TabItem>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="okd-p-4 okd-bg-gray-50">
                      <Search
                        onChange={_.debounce(searchHandle, 700)}
                        placeholder="Search Tokens"
                        addonBefore={
                          <Icon
                            name="SearchOutline"
                            size={20}
                            className="okd-text-gray-400"
                          />
                        }
                      />
                    </div>
                    <TransationListComponent
                      {...args}
                    ></TransationListComponent>
                  </TabPanel>
                  <TabPanel>Tab2 Content</TabPanel>
                </TabPanels>
              </>
            );
          }}
        </Tabs>
      </Body>
    </Card>
  );
};

export const ManageTokens = Tokens.bind({});

ManageTokens.args = {
  dataSource: [
    {
      label: "my tokens",
      lists: [
        {
          label: "USDT",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 1,
          value: "0.5",
          symbol: "USDT",
          name: "USDT",
          timestamp: "15:03·Sep",
        },
      ],
    },
    {
      label: "Top 50 tokens",
      lists: [
        {
          label: "BNB",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 0,
          value: "0.5",
          symbol: "BNB",
          name: "BNB",
          timestamp: "15:03·Sep",
        },
        {
          label: "ETH",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 2,
          value: "0.5",
          symbol: "ETH",
          name: "ETH",
          timestamp: "15:03·Sep",
        },
        {
          label: "BTC",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 3,
          value: "0.5",
          symbol: "BTC",
          name: "BTC",
          timestamp: "15:03·Sep",
        },
        {
          label: "CTT",
          address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
          direction: 0,
          status: 0,
          value: "0.5",
          symbol: "CTT",
          name: "CTT",
          timestamp: "15:03·Sep",
        },
      ],
    },
  ],
  renderItem: (item, idx, len, label) => {
    const addToken = (token) => {
      console.log("addToken: ", token);
    };

    const toggleToken = (token) => {
      console.log("toggleToken: ", token);
      // token = {
      //   status: !token.status,
      //   ...token,
      // };
      token.status = !token.status;
      // setTokens
    };

    const actionSwitch = (token) => {
      return (
        <Switch
          value={!token.status}
          onChange={() => toggleToken(token)}
        ></Switch>
      );
    };

    const actionAdd = (token) => {
      return (
        <Button
          className="okd-text-brand-500"
          type="plain"
          onClick={() => addToken(token)}
        >
          ADD
        </Button>
      );
    };

    return (
      <div
        className={cx({
          "okd-border-b okd-border-gray-50 okd-border-solid": idx !== len - 1,
        })}
      >
        {!!label && label.toLowerCase() === "my tokens" ? (
          <Account
            label={item.label}
            value={item.value}
            symbol={item.symbol}
            address={item.address}
            action={actionSwitch(item)}
          ></Account>
        ) : (
          <Account
            label={item.label}
            address={item.address}
            action={actionAdd(item)}
          ></Account>
        )}
      </div>
    );
  },
  listPanelClass: "okd-pl-0",
};
