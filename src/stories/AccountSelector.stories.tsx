import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccountSelector as AccountSelectorComponent } from "../components";
import ConfigBar from "./Base";

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

Default.args = {
  place: "bottom-start",
  trigger: {},
};

// const Template: ComponentStory<typeof AccountSelectorComponent> = (args) => (
//   <AccountSelectorComponent {...args} />
// );

// export const example = Template.bind({});
// example.args = {};
