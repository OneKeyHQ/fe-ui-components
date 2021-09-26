import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccountSelector as AccountSelectorComponent } from "../components";
import ConfigBar from "./Base";
import { Account } from "../components";

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
        <AccountSelectorComponent.Action icon="LogoutSolid">
          Disconnect
        </AccountSelectorComponent.Action>
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
};
