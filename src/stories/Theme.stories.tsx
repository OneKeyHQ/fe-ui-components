import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { COLORS } from "../components";

const ThemeComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-8 pt-8">
      {Object.entries(COLORS).map((item, index) => {
        const [key, value] = item;
        return (
          <div
            className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4"
            key={key + index}
          >
            <div className="w-32 flex-shrink-0">
              <div className="h-10 flex flex-col justify-center">
                <div className="text-sm font-semibold text-gray-900">{key}</div>
                <div>
                  <code className="text-xs text-gray-500">colors.{key}</code>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
              {Object.entries(value).map((subConfig, subIndex) => {
                const [level, color] = subConfig;
                return (
                  <div className="space-y-1.5">
                    <div
                      className="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                      <div className="w-full font-medium text-gray-900">
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
