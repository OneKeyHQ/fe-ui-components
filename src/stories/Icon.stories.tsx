import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon as IconComponent, ICONS } from "../components";

export default {
  title: "UI/Icon",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent {...args} />
);

export const Icon = Template.bind({});
Icon.args = {
  name: "GITHUB-OUTLINED",
  color: "#333",
};

export const List: ComponentStory<typeof IconComponent> = () => {
  return (
    <div className="grid grid-cols-6 gap-8 pt-8">
      {Object.entries(ICONS).map((item, index) => {
        const [key] = item;
        return (
          <div className="min-w-0 flex-1 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2 flex flex-col items-center">
            <IconComponent name={key as any} />
            <div className="h-10 flex justify-center">
              <div className="text-sm font-semibold text-gray-900">{key}</div>
            </div>
          </div>
          // <div
          //   className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4"
          //   key={key + index}
          // >
          //   <div className="w-32 flex-shrink-0">
          //     <div className="h-10 flex flex-col justify-center">
          //       <div className="text-sm font-semibold text-gray-900">{key}</div>
          //       <div>
          //         <code className="text-xs text-gray-500">ICONS.{key}</code>
          //       </div>
          //     </div>
          //   </div>

          // </div>
        );
      })}
    </div>
  );
};
