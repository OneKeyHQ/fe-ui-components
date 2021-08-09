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
    <div className="grid lg:grid-cols-3 gap-8 pt-8">
      {Object.entries(ICONS).map((item, index) => {
        const [key] = item;
        return (
          <div key={key} className="min-w-0 flex-1 flex flex-col items-center">
            <IconComponent name={key as any} />
            <div className="h-10 flex justify-center">
              <div className="text-sm font-semibold text-gray-900">{key}</div>
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
