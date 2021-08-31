import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tooltip as TooltipComponent, Button } from "../components";

export default {
  title: "UI/Tooltip",
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

const Template: ComponentStory<typeof TooltipComponent> = (args) => (
  <div className="okd-pt-28 okd-pl-28">
    <TooltipComponent {...args}>
      <Button>Button</Button>
    </TooltipComponent>
  </div>
);

export const Top = Template.bind({});
Top.args = {
  content: "tooltip",
  place: "top",
  offset: { top: 10 },
  effect: "solid",
};

export const Right = Template.bind({});
Right.args = {
  content: "tooltip",
  place: "right",
  offset: { right: 10 },
  effect: "solid",
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: "tooltip",
  place: "bottom",
  offset: { bottom: 10 },
  effect: "solid",
};

export const Left = Template.bind({});
Left.args = {
  content: "tooltip",
  place: "left",
  offset: { left: 5 },
  effect: "solid",
};

export const Multiline = Template.bind({});
Multiline.args = {
  content: "tooltip<br />second<br />third",
  place: "top",
  offset: { top: 5 },
  effect: "solid",
  multiline: true,
};
