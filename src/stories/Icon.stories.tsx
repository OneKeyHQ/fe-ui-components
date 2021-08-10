import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Icon as IconComponent,
  IconGroup as IconGroupComponent,
  ICONS,
} from "../components";

export default {
  title: "UI/Icon",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent {...args} />
);

export const Icon = Template.bind({});
Icon.args = {
  name: "BRAND-LOGO-SOLID",
  color: "#00b812",
  size: 100,
};

export const List: ComponentStory<typeof IconComponent> = () => {
  return (
    <div className="okd-grid lg:okd-grid-cols-3 okd-gap-8 okd-pt-8">
      {Object.entries(ICONS).map((item, index) => {
        const [key] = item;
        return (
          <div
            key={key}
            className="okd-min-w-0 okd-flex-1 okd-flex okd-flex-col okd-items-center"
          >
            <IconComponent name={key as any} />
            <div className="okd-h-10 okd-flex okd-justify-center">
              <div className="okd-text-sm okd-font-semibold okd-text-gray-900">
                {key}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const IconGroup: ComponentStory<typeof IconGroupComponent> = () => {
  return (
    <IconGroupComponent
      icons={[
        { name: "BRAND-LOGO-SOLID" },
        { name: "AT-SYMBOL-OUTLINE" },
        { name: "BACKSPACE-OUTLINE" },
      ]}
      size={36}
      color="#00b812"
    />
  );
};
