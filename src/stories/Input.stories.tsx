import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfigBar from "./Base";

import { Input as InputComponent } from "../components";
import { Icon as IconComponent } from "../components";

export default {
  title: "FORM/Input",
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Default: ComponentStory<typeof InputComponent> = (args) => (
  <>
    <ConfigBar />
    <InputComponent {...args} />
  </>
);

Default.args = {};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 5,
};

export const InitialValue = Template.bind({});
InitialValue.args = {
  initialValue: "this is initial value control.",
};

export const helpText = Template.bind({});
helpText.args = {
  helpText: "Make your password short and easy to guess.",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  helpText: "错误的信息",
};

export const AddonBefore = Template.bind({});
AddonBefore.args = {
  addonBefore: (
    <IconComponent name="MailSolid" size={20} className="okd-text-gray-400" />
  ),
};

export const AddonAfter = Template.bind({});
AddonAfter.args = {
  addonAfter: (
    <IconComponent
      name="QuestionMarkCircleSolid"
      size={20}
      className="okd-text-gray-400"
    />
  ),
};

export const AddonBoth = Template.bind({});
AddonBoth.args = {
  addonBefore: "http://",
  paddingLeft: 56,
  placeholder: "www.onekey.so",
  addonAfter: (
    <IconComponent
      name="QuestionMarkCircleSolid"
      size={20}
      className="okd-text-gray-400"
    />
  ),
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  placeholder: "You should enabled something first",
};

export const Label = Template.bind({});
Label.args = {
  label: "label",
  labelTooltip: "tooltip",
  labelCorner: <button className="okd-text-brand-600">Max</button>,
};
