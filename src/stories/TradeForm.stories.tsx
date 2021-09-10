import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TradeForm as TradeFormComponent } from "../components";
import { Button } from "../components";
import ConfigBar from "./Base";

export default {
  title: "CUSTOM/TradeForm",
  component: TradeFormComponent,
} as ComponentMeta<typeof TradeFormComponent>;

const Wrapper = ({ children }) => {
  return <div className="okd-max-w-sm okd-mx-auto">{children}</div>;
};

const Template: ComponentStory<typeof TradeFormComponent> = (args) => (
  <TradeFormComponent {...args} />
);

export const Default: ComponentStory<typeof TradeFormComponent> = (args) => (
  <>
    <ConfigBar />
    <Wrapper>
      <TradeFormComponent {...args} />
    </Wrapper>
  </>
);

Default.args = {
  label: "Form",
  labelCorner: (
    <div className="okd-flex okd--mx-1">
      <Button type="plain" size="sm" className="!okd-px-1 !okd-py-0 okd-text-brand-600 hover:okd-bg-gray-100">
        Balance: 2.3245
      </Button>
    </div>
  ),
};

export const example = Template.bind({});
example.args = {};
