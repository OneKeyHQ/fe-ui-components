import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown as DropdownComponent } from "../components";
import { Button } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Dropdown",
  component: DropdownComponent,
} as ComponentMeta<typeof DropdownComponent>;

const Paint: FC = ({ children }) => {
  return (
    <div className="okd-h-[150px] okd-flex okd-justify-center">{children}</div>
  );
};

const Template: ComponentStory<typeof DropdownComponent> = (args) => (
  <Paint>
    <DropdownComponent {...args} />
  </Paint>
);

export const Default: ComponentStory<typeof DropdownComponent> = (args) => (
  <>
    <ConfigBar />
    <Paint>
      <DropdownComponent {...args} />
    </Paint>
  </>
);

Default.args = {};

export const BasicButtonAsTrigger = Template.bind({});
BasicButtonAsTrigger.args = {
  trigger: "Trigger"
};

export const CustomTrigger = Template.bind({});
CustomTrigger.args = {
  trigger: (
    <Button type="primary">Custom Trigger</Button>
  )
};
