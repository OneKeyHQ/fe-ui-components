import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select as SelectComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Select",
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

const Wrapper = ({children}) => {
  return (
    <div className="okd-h-96">
      {children}
    </div>
  )
}

const Template: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent {...args} />
);

export const Default: ComponentStory<typeof SelectComponent> = (args) => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent {...args} />
    </Wrapper>
  </>
);

Default.args = {};

export const example = Template.bind({});
example.args = {};
