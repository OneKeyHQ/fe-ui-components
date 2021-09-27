import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccountSelector as AccountSelectorComponent } from "../components";
import ConfigBar from "./Base";
import { Account, Badge } from "../components";

export default {
  title: "CUSTOM/AccountSelector",
  component: AccountSelectorComponent,
} as ComponentMeta<typeof AccountSelectorComponent>;

const Container = ({ children }) => {
  return (
    <div className="okd-w-[377px] okd-h-[667px] okd-p-4 okd-mx-auto okd-border okd-border-gray-200">
      <div className="okd--mx-2">{children}</div>
    </div>
  );
};

export const Default: ComponentStory<typeof AccountSelectorComponent> = (
  args
) => (
  <>
    <ConfigBar />
    <Container>
      <AccountSelectorComponent {...args} />
    </Container>
  </>
);

function handleClick() {
  alert("Get clicked");
}

Default.args = {
  place: "bottom-start",
  trigger: {
    account: {
      address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
      size: "md",
    },
  },
  children: (
    <>
      <AccountSelectorComponent.OptionGroup title="onekey">
        <AccountSelectorComponent.Option isSelected onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            size="sm"
          />
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            size="sm"
          />
        </AccountSelectorComponent.Option>
      </AccountSelectorComponent.OptionGroup>
      <AccountSelectorComponent.OptionGroup title="onekey 2">
        <AccountSelectorComponent.Option onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            size="sm"
          />
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            size="sm"
          />
        </AccountSelectorComponent.Option>
      </AccountSelectorComponent.OptionGroup>
      <AccountSelectorComponent.OptionGroup>
        <AccountSelectorComponent.Action
          iconName="LogoutSolid"
          label="Disconnect"
          onAction={handleClick}
        />
      </AccountSelectorComponent.OptionGroup>
    </>
  ),
};

const Template: ComponentStory<typeof AccountSelectorComponent> = (args) => (
  <Container>
    <AccountSelectorComponent {...args} />
  </Container>
);

export const BundledAddress = Template.bind({});
BundledAddress.args = {
  place: "bottom-start",
  trigger: {
    showBundled: true,
    bundledCount: 2,
  },
  children: (
    <>
      <AccountSelectorComponent.OptionGroup title="onekey">
        <AccountSelectorComponent.Option isSelected onAction={handleClick}>
          <div className="okd-inline-flex okd-items-center okd-text-sm okd-text-gray-900">
            <Badge className="okd-mr-2" type="success">
              2
            </Badge>{" "}
            Bundled Wallets
          </div>
        </AccountSelectorComponent.Option>
      </AccountSelectorComponent.OptionGroup>
      <AccountSelectorComponent.OptionGroup title="watched">
        <AccountSelectorComponent.Option
          onAction={handleClick}
          actions={[
            {
              iconName: "PencilSolid",
              tooltipContent: "Add Label",
              onAction: handleClick,
            },
            {
              iconName: "ClipboardSolid",
              tooltipContent: "Copy",
              onAction: handleClick,
            },
          ]}
        >
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            size="sm"
          />
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option
          onAction={handleClick}
          actions={[
            {
              iconName: "PencilSolid",
              tooltipContent: "Add Label",
              onAction: handleClick,
            },
            {
              iconName: "ClipboardSolid",
              tooltipContent: "Copy",
              onAction: handleClick,
            },
          ]}
        >
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            size="sm"
          />
        </AccountSelectorComponent.Option>
      </AccountSelectorComponent.OptionGroup>
      <AccountSelectorComponent.OptionGroup title="onekey">
        <AccountSelectorComponent.Option
          onAction={handleClick}
          actions={[
            {
              iconName: "PencilSolid",
              tooltipContent: "Add Label",
              onAction: handleClick,
            },
            {
              iconName: "ClipboardSolid",
              tooltipContent: "Copy",
              onAction: handleClick,
            },
          ]}
        >
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            size="sm"
          />
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option
          onAction={handleClick}
          actions={[
            {
              iconName: "PencilSolid",
              tooltipContent: "Add Label",
              onAction: handleClick,
            },
            {
              iconName: "ClipboardSolid",
              tooltipContent: "Copy",
              onAction: handleClick,
            },
          ]}
        >
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            size="sm"
          />
        </AccountSelectorComponent.Option>
      </AccountSelectorComponent.OptionGroup>
      <AccountSelectorComponent.OptionGroup>
        <AccountSelectorComponent.Action
          iconName="CogSolid"
          label="Setting"
          onAction={handleClick}
        />
        <AccountSelectorComponent.Action
          iconName="LogoutSolid"
          label="Disconnect"
          onAction={handleClick}
        />
      </AccountSelectorComponent.OptionGroup>
    </>
  ),
};

export const ForExt = Template.bind({});
ForExt.args = {
  place: "bottom-start",
  trigger: {
    account: {
      label: "Main account for opensea",
      address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
    },
  },
  children: (
    <>
      <AccountSelectorComponent.OptionGroup>
        <AccountSelectorComponent.Option isSelected onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            label="Account 1"
            balance="0.026829"
            symbol="ETH"
          />
          <Badge>Hardware</Badge>
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            label="Account 2"
            balance="0.026829"
            symbol="ETH"
          />
          <Badge>Imported</Badge>
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            label="Account 3"
            balance="0.026829"
            symbol="ETH"
          />
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            label="Account 4"
            balance="0.026829"
            symbol="ETH"
          />
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            label="Account 5"
            balance="0.026829"
            symbol="ETH"
          />
        </AccountSelectorComponent.Option>
        <AccountSelectorComponent.Option onAction={handleClick}>
          <Account
            address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
            label="Account 6"
            balance="0.026829"
            symbol="ETH"
          />
        </AccountSelectorComponent.Option>
      </AccountSelectorComponent.OptionGroup>
      <AccountSelectorComponent.OptionGroup>
        <AccountSelectorComponent.Action
          iconName="PlusSolid"
          label="Add Account"
          onAction={handleClick}
        />
        <AccountSelectorComponent.Action
          iconName="CogSolid"
          label="Setting"
          onAction={handleClick}
        />
        <AccountSelectorComponent.Action
          iconName="LockClosedSolid"
          label="Lock"
          onAction={handleClick}
        />
      </AccountSelectorComponent.OptionGroup>
    </>
  ),
};
