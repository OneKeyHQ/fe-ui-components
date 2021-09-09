import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Address as AddressComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Address",
  component: AddressComponent,
} as ComponentMeta<typeof AddressComponent>;

const Paint = ({ children }) => {
  return (
    <div className="okd-pt-8 okd-pb-48 okd-flex okd-justify-center okd-bg-white-ground">
      {children}
    </div>
  );
};

const Template: ComponentStory<typeof AddressComponent> = (args) => (
  <Paint>
    <AddressComponent {...args} />
  </Paint>
);

export const Default: ComponentStory<typeof AddressComponent> = (args) => (
  <>
    <ConfigBar />
    <Paint>
      <AddressComponent {...args} />
    </Paint>
  </>
);
Default.args = {
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
};

export const ShortenAddress = Template.bind({});
ShortenAddress.args = {
  short: true,
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
};
