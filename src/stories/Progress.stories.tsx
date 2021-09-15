import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Progress as ProgressComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Progress",
  component: ProgressComponent,
} as ComponentMeta<typeof ProgressComponent>;

const Paint = ({ children }) => {
  return (
    <div className="okd-pt-8 okd-pb-20 okd-px-2 okd-flex okd-justify-center okd-bg-white-ground">
      {children}
    </div>
  );
};

export const Default: ComponentStory<typeof ProgressComponent> = (args) => (
  <>
    <ConfigBar />
    <Paint>
      <ProgressComponent {...args} />
    </Paint>
  </>
);
Default.args = {
  value: 30,
};

const Template: ComponentStory<typeof ProgressComponent> = (args) => (
  <Paint>
    <ProgressComponent {...args} />
  </Paint>
);

/**
 * 自定义进度条的最大数值。
 */
export const CustomMax = Template.bind({});
CustomMax.args = {
  value: 40,
  max: 50,
};

export const DynamicSetWidth: ComponentStory<typeof ProgressComponent> = () => {
  const DEFAULT_VALUE = 2;
  const [value, setValue] = useState(DEFAULT_VALUE);

  return (
    <Paint>
      <div className="okd-flex-col okd-w-full okd-space-y-4">
        <ProgressComponent value={value} />
        <div className="okd-flex okd-space-x-2">
          <Button onClick={() => setValue(value + 10)} type="primary">
            Increase
          </Button>
          <Button onClick={() => setValue(DEFAULT_VALUE)} type="plain">
            Reset
          </Button>
        </div>
      </div>
    </Paint>
  );
};

/**
 * 自定义文字
 */
export const CustomTexts = Template.bind({});
CustomTexts.args = {
  value: 300,
  max: 600,
  leftText: "You should be right!",
  rightText: (
    <p className="okd-text-gray-500">Reach me to get a "Lay Flat Koala"!</p>
  ),
};

/**
 * 展示当前进度文字
 */
export const CustomHint = Template.bind({});
CustomHint.args = {
  value: 30,
  max: 150,
  leftText: "Earn 120 more xp to upgrade",
  rightText: 150,
};
