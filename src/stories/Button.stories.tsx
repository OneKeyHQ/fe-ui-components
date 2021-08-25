import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "../components/Icon/index";
import { Button as ButtonComponent } from "../components";

export default {
  title: "UI/Button",
  component: ButtonComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

const TemplateIcon: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>
    Button
    <Icon name="AcademicCapOutline" className="okd-ml-2.5" size={16}></Icon>
  </ButtonComponent>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  type: "primary",
  onClick: (e) => {
    console.log("e: ", e?.target);
  },
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: "Button",
  type: "primary",
  disabled: true,
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  children: "Button",
  type: "primary",
  icon: <Icon name="AcademicCapOutline" size={16}></Icon>,
};

export const ChildrenIcon = TemplateIcon.bind({});
ChildrenIcon.args = {
  type: "primary",
};

export const PrimaryCircle = Template.bind({});
PrimaryCircle.args = {
  children: "Button",
  type: "primary",
  shape: "circle",
  icon: <Icon name="AcademicCapOutline" size={16}></Icon>,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: "Button",
  type: "primary",
  loading: true,
};

export const PrimaryLoadingCircle = Template.bind({});
PrimaryLoadingCircle.args = {
  children: "Button",
  type: "primary",
  loading: true,
  shape: "circle",
};

export const Basic = Template.bind({});
Basic.args = {
  children: "Button",
  type: "basic",
};

export const Plain = Template.bind({});
Plain.args = {
  children: "Button",
  type: "plain",
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: "Button",
  type: "destructive",
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  children: "Button Link",
  type: "link",
  href: "https://crowdfund.onekey.so/shop",
};
