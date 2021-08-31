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
    <div className="okd-pt-8 okd-pb-48 okd-flex okd-justify-center">
      {children}
    </div>
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

Default.args = {
  sections: [
    {
      items: [
        {
          content: "Add Liquidity",
          icon: "PlusSolid",
          onAction: console.log("click"),
        },
        {
          content: "Remove Liquidity",
          icon: "MinusSolid",
        },
      ],
    },
    {
      items: [
        {
          content: "Filter in Farm",
          icon: "ExternalLinkSolid",
        },
      ],
    },
  ],
};

export const BasicButtonAsTriggerAndSectionTitle = Template.bind({});
BasicButtonAsTriggerAndSectionTitle.args = {
  trigger: "Trigger",
  sections: [
    {
      items: [
        {
          content: "Action 1",
        },
        {
          content: "Action 2",
        },
      ],
    },
    {
      title: "Section Title",
      items: [
        {
          content: "Action 3",
        },
        {
          content: "Action 4",
        },
      ],
    },
  ],
};

export const CustomTrigger = Template.bind({});
CustomTrigger.args = {
  trigger: <Button type="primary">Custom Trigger</Button>,
  sections: [
    {
      items: [
        {
          content: "Action 1"
        },
        {
          content: "Action 2"
        },
        {
          content: "Action 3"
        },
      ]
    }
  ],
};
