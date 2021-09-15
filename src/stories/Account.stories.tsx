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

export const AccountLabel = Template.bind({});
AccountLabel.args = {
  label: "OneKey",
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
};
