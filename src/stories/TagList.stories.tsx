import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TagList as TagListComponent } from "../components";

export default {
  title: "UI/TagList",
  component: TagListComponent,
} as ComponentMeta<typeof TagListComponent>;

const Template: ComponentStory<typeof TagListComponent> = (args) => (
  <TagListComponent {...args}>
  </TagListComponent>
);

export const TagList = Template.bind({});
TagList.args = {
  tags: [
    {
      token: {
        chain: 'eth'
      },
      children: 1,
    },
    {
      token: {
        chain: 'bsc'
      },
      children: 2,
    },
    {
      token: {
        chain: 'bsc'
      },
      children: 'asdfasdfasdfasdfasdfasfs',
    }
  ]
};

export const TagListControl = Template.bind({});
TagListControl.args = {
  multi: true,
  onChange(active) {
    console.log('current select is:', active);
  },
  tags: [
    {
      token: {
        chain: 'eth'
      },
      children: 'this is first one',
    },
    {
      token: {
        chain: 'bsc'
      },
      children: 'this is second one',
    },
    {
      token: {
        chain: 'bsc'
      },
      children: 'this is second one',
    },
    {
      token: {
        chain: 'bsc'
      },
      children: 'this is second one',
    },
    {
      token: {
        chain: 'bsc'
      },
      children: 'this is second one',
    },
    {
      token: {
        chain: 'bsc'
      },
      children: 'this is second one',
    },
    {
      token: {
        chain: 'bsc'
      },
      children: 'asdfasdfasdfasdfasdfasfs',
    }
  ]
};
