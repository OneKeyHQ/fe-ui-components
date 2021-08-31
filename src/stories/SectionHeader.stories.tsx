import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SectionHeader as SectionHeaderComponent } from "../components";
import ConfigBar from "./Base";
import { Button, Switch, Input, Icon } from "../components";

export default {
  title: "UI/SectionHeader",
  component: SectionHeaderComponent,
} as ComponentMeta<typeof SectionHeaderComponent>;

const Template: ComponentStory<typeof SectionHeaderComponent> = (args) => (
  <SectionHeaderComponent {...args} />
);

export const Default: ComponentStory<typeof SectionHeaderComponent> = (
  args
) => (
  <>
    <ConfigBar />
    <SectionHeaderComponent {...args} />
  </>
);

Default.args = {
  title: "Title",
};

export const Description = Template.bind({});
Description.args = {
  title: "Title",
  description:
    "Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.",
};

export const Actions = Template.bind({});
Actions.args = {
  title: "Title",
  actions: (
    <div className="okd-space-x-3">
      <Button>Secondary</Button>
      <Button type="primary">Primary</Button>
    </div>
  ),
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: (
    <div className="okd-flex okd-items-center">
      Title
      <Switch className="okd-ml-4" label="Stable Asset" />
    </div>
  ),
  actions: (
    <div className="okd-space-x-3">
      <Button>Secondary</Button>
      <Button type="primary">Primary</Button>
    </div>
  ),
};

export const WithInput = Template.bind({});
WithInput.args = {
  title: "Title",
  actions: (
    <>
      <Input
        className="okd-w-80"
        placeholder="Filter by token,  platform"
        type="search"
        addonBefore={
          <Icon name="SearchSolid" className="okd-text-gray-400" size={20} />
        }
      />
    </>
  ),
};
