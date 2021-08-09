import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PriceCurrency as PriceCurrencyComponent } from "../components";

export default {
  title: "UI/Numberic",
  component: PriceCurrencyComponent,
} as ComponentMeta<typeof PriceCurrencyComponent>;

const Template: ComponentStory<typeof PriceCurrencyComponent> = (args) => (
  <PriceCurrencyComponent {...args} />
);

export const Numberic = Template.bind({});
Numberic.args = {
  currency: "USD",
  value: 10000000,
};

export const Percent = Template.bind({});
Percent.args = {
  style: "percent",
  value: "0.82",
};

export const Unit = Template.bind({});
Unit.args = {
  style: "unit",
  value: "99999999",
};
