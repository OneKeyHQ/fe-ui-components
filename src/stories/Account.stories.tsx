import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Account as AccountComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Account",
  component: AccountComponent,
} as ComponentMeta<typeof AccountComponent>;

const Template: ComponentStory<typeof AccountComponent> = (args) => (
  <AccountComponent {...args} />
);

export const Default: ComponentStory<typeof AccountComponent> = (args) => (
  <>
    <ConfigBar />
    <AccountComponent {...args} />
  </>
);
Default.args = {
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "OneKey",
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
};

export const WithBalance = Template.bind({});
WithBalance.args = {
  balance: "0.026829",
  symbol: "ETH",
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
};

export const WithLabelAndBalance = Template.bind({});
WithLabelAndBalance.args = {
  label: "OneKey",
  balance: "0.026829",
  symbol: "ETH",
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
};

export const AccountSize = () => {
  return (
    <div className="okd-grid okd-gap-4">
      <div className="okd-flex okd-items-center okd-space-x-6">
        <span className="okd-w-10">sm</span>
        <AccountComponent
          size="sm"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
        />
        <AccountComponent
          size="sm"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
          label="OneKey"
        />
      </div>
      <div className="okd-flex okd-items-center okd-space-x-6">
        <span className="okd-w-10">md</span>
        <AccountComponent
          size="md"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
        />
        <AccountComponent
          size="md"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
          label="OneKey"
        />
      </div>
      <div className="okd-flex okd-items-center okd-space-x-6">
        <span className="okd-w-10">lg</span>
        <AccountComponent
          size="lg"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
        />
        <AccountComponent
          size="lg"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
          label="OneKey"
        />
      </div>
      <div className="okd-flex okd-items-center okd-space-x-6">
        <span className="okd-w-10">xl</span>
        <AccountComponent
          size="xl"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
        />
        <AccountComponent
          size="xl"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
          label="OneKey"
        />
      </div>
      <div className="okd-flex okd-items-center okd-space-x-6">
        <span className="okd-w-10">2xl</span>
        <AccountComponent
          size="2xl"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
        />
        <AccountComponent
          size="2xl"
          address="0xa3C6cA435B784ab686987Fe0850f7B75388b4551"
          label="OneKey"
        />
      </div>
    </div>
  );
};
