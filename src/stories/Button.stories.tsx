import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button as ButtonComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Default: ComponentStory<typeof ButtonComponent> = (args) => (
  <>
    <ConfigBar />
    <ButtonComponent {...args} />
  </>
);
Default.args = {
  children: "Button",
};

export const Basic = Template.bind({});
Basic.args = {
  children: "Button",
  type: "basic",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  type: "primary",
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

export const Link = Template.bind({});
Link.args = {
  children: "Button Link",
  type: "link",
  href: "https://crowdfund.onekey.so/shop",
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  children: "Button",
  type: "primary",
  leadingIcon: "AcademicCapOutline",
};

export const Circular = Template.bind({});
Circular.args = {
  type: "primary",
  leadingIcon: "AcademicCapOutline",
  circular: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  leadingIcon: "AcademicCapOutline",
  type: "destructive",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  type: "primary",
  loading: true,
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  children: "Button Link",
  type: "link",
  href: "https://crowdfund.onekey.so/shop",
};
