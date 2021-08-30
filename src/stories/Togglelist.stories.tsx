import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Togglelist as TogglelistComponent } from "../components";

export default {
  title: "UI/Togglelist",
  component: TogglelistComponent,
} as ComponentMeta<typeof TogglelistComponent>;

const Template: ComponentStory<typeof TogglelistComponent> = (args) => (
  <TogglelistComponent {...args}>
    私钥不掌控在自己手里，币就永远不是你的。我们的任务是创造世界一流的工具，让所有加密资产爱好者能够长期、放心、安全地管理和使用他们的资产。
  </TogglelistComponent>
);

const MultilineTemplate: ComponentStory<typeof TogglelistComponent> = (
  args
) => (
  <>
    <TogglelistComponent {...args}>
      私钥不掌控在自己手里，币就永远不是你的。我们的任务是创造世界一流的工具，让所有加密资产爱好者能够长期、放心、安全地管理和使用他们的资产。
    </TogglelistComponent>
    <TogglelistComponent {...args}>
      私钥不掌控在自己手里，币就永远不是你的。我们的任务是创造世界一流的工具，让所有加密资产爱好者能够长期、放心、安全地管理和使用他们的资产。
      私钥不掌控在自己手里，币就永远不是你的。我们的任务是创造世界一流的工具，让所有加密资产爱好者能够长期、放心、安全地管理和使用他们的资产。
    </TogglelistComponent>
    <TogglelistComponent {...args}>
      私钥不掌控在自己手里，币就永远不是你的。我们的任务是创造世界一流的工具，让所有加密资产爱好者能够长期、放心、安全地管理和使用他们的资产。
    </TogglelistComponent>
  </>
);

export const Togglelist = Template.bind({});
Togglelist.args = {
  header: "OneKeyHQ",
};

export const TogglelistOpen = Template.bind({});
TogglelistOpen.args = {
  header: "OneKeyHQ",
  defaultOpen: true,
};

export const TogglelistMultiline = MultilineTemplate.bind({});
TogglelistMultiline.args = {
  header: "OneKeyHQ",
  className: "okd-mt-2",
};
