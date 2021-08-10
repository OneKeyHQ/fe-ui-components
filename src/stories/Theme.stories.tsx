import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { COLORS } from "../components";

const ThemeComponent = () => {
  return (
    <div className="okd-grid okd-grid-cols-1 okd-gap-8 okd-pt-8">
      {Object.entries(COLORS).map((item, index) => {
        const [key, value] = item;
        return (
          <div
            className="okd-flex okd-flex-col okd-space-y-3 sm:okd-flex-row okd-text-xs sm:okd-space-y-0 sm:okd-space-x-4"
            key={key + index}
          >
            <div className="okd-w-32 okd-flex-shrink-0">
              <div className="okd-h-10 okd-flex okd-flex-col okd-justify-center">
                <div className="okd-text-sm okd-font-semibold okd-text-gray-900">
                  {key}
                </div>
                <div>
                  <code className="okd-text-xs okd-text-gray-500">
                    colors.{key}
                  </code>
                </div>
              </div>
            </div>
            <div className="okd-min-w-0 okd-flex-1 okd-grid okd-grid-cols-5 2xl:okd-grid-cols-10 okd-gap-x-4 okd-gap-y-3 2xl:okd-gap-x-2">
              {Object.entries(value).map((subConfig, subIndex) => {
                const [level, color] = subConfig;
                return (
                  <div className="space-y-1.5">
                    <div
                      className="okd-h-10 okd-w-full okd-rounded okd-ring-1 okd-ring-inset okd-ring-black okd-ring-opacity-0"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="okd-px-0.5 md:okd-flex md:okd-justify-between md:okd-space-x-2 2xl:okd-space-x-0 2xl:okd-block">
                      <div className="okd-w-full okd-font-medium okd-text-gray-900">
                        {level}
                      </div>
                      <div>{color}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: "BASIC/Theme",
  component: ThemeComponent,
} as ComponentMeta<typeof ThemeComponent>;

export const Theme: ComponentStory<typeof ThemeComponent> = (args) => (
  <ThemeComponent />
);
