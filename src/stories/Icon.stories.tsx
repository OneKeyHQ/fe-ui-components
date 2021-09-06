import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Icon as IconComponent,
  IconGroup as IconGroupComponent,
  ICONS,
} from "../components";
// import SvgAcademicCap from "../components/Icon/react/outline/ZoomIn";

export default {
  title: "UI/Icon",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent {...args} />
);

export const Icon = Template.bind({});
Icon.args = {
  name: "BrandLogoIllus",
  size: 128,
  className: "okd-text-brand-500"
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
        { name: "BrandLogoIllus" },
        { name: "AtSymbolOutline" },
        { name: "BackspaceOutline" },
      ]}
      size={36}
      color="#00b812"
    />
  );
};
