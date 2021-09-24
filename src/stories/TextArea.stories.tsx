import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfigBar from "./Base";
import { TextArea as TextAreaComponent } from "../components";

export default {
  title: "FORM/TextArea",
  component: TextAreaComponent,
} as ComponentMeta<typeof TextAreaComponent>;

const Template: ComponentStory<typeof TextAreaComponent> = (args) => (
  <TextAreaComponent {...args} />
);

export const Default: ComponentStory<typeof TextAreaComponent> = (args) => (
  <>
    <ConfigBar />
    <TextAreaComponent {...args} />
  </>
);

Default.args = {};

export const InitialValue = Template.bind({});
InitialValue.args = {
  initialValue: "this is initial value control.",
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  placeholder: "You should enabled something first",
};

export const readonly = Template.bind({});
readonly.args = {
  readOnly: true,
  placeholder: "You should enabled something first",
};

export const Label = Template.bind({});
Label.args = {
  label: "label",
  labelTooltip: "tooltip",
};

export const allowClear = Template.bind({});
allowClear.args = {
  allowClear: true,
  initialValue: "this is initial value control.",
};

export const setRows = Template.bind({});
setRows.args = {
  rows: 5,
};
