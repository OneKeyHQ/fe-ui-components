import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioButtonGroup as RadioButtonGroupComponent } from "../components";

export default {
  title: "FORM/RadioButtonGroup",
  component: RadioButtonGroupComponent,
} as ComponentMeta<typeof RadioButtonGroupComponent>;

const Template: ComponentStory<typeof RadioButtonGroupComponent> = (args) => {
  const [selected, setSelected] = useState("standard");

  return (
    <RadioButtonGroupComponent
      value={selected}
      onChange={setSelected}
      label="example"
      {...args}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <RadioButtonGroupComponent.Option
        value="standard"
        label="Standard"
        description="6 Gwei"
      />
      <RadioButtonGroupComponent.Option
        value="fast"
        label="Fast"
        description="10 Gwei"
      />
      <RadioButtonGroupComponent.Option
        value="rapid"
        label="Rapid"
        description="15 Gwei"
        disabled
      />
    </>
  ),
};

export const example = Template.bind({});
example.args = {};
