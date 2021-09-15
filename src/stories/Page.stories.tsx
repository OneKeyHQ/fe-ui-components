import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page as PageComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Page",
  component: PageComponent,
} as ComponentMeta<typeof PageComponent>;

const Wrapper = ({ children }) => {
  return <div className="okd-flex okd-flex-col okd-h-96">{children}</div>;
};

const Template: ComponentStory<typeof PageComponent> = (args) => (
  <PageComponent {...args} />
);

export const Default: ComponentStory<typeof PageComponent> = (args) => (
  <>
    <ConfigBar />
    <Wrapper>
      <PageComponent {...args} />
    </Wrapper>
  </>
);

Default.args = {
  pageHeader: {
    title: "Page Title",
  },
  children: <div>Content here</div>,
};

export const example = Template.bind({});
example.args = {};
