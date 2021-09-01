import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioButtonGroup as RadioButtonGroupComponent } from "../components";
import { omit } from "lodash";

export default {
  title: "FORM/RadioButtonGroup",
  component: RadioButtonGroupComponent,
} as ComponentMeta<typeof RadioButtonGroupComponent>;

const Template: ComponentStory<typeof RadioButtonGroupComponent> = (args) => {
  const [selected, setSelected] = useState<string>();

  return (
    <RadioButtonGroupComponent
      value={selected}
      onChange={setSelected}
      label="example"
      // Omit args for overriding default `onChange` behavior
      {...omit(args, "onChange")}
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
        size="xs"
      />
      <RadioButtonGroupComponent.Option
        value="fast"
        label="Fast"
        description="10 Gwei"
        size="xl"
      />
      <RadioButtonGroupComponent.Option
        value="rapid"
        label="Rapid"
        description="15 Gwei"
        size="xs"
      />
      <RadioButtonGroupComponent.Option
        value="disabled"
        label="Disabled"
        description="I thus be disable"
        size="xs"
        disabled
      />
    </>
  ),
};

export const example = Template.bind({});
example.args = {};
