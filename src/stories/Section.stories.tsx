import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Section as SectionComponent } from "../components";
import ConfigBar from "./Base";
import { Layout } from "../components";

export default {
  title: "UI/Section",
  component: SectionComponent,
} as ComponentMeta<typeof SectionComponent>;

export const Default: ComponentStory<typeof SectionComponent> = (args) => (
  <>
    <ConfigBar />
    <Layout
      page={{
        pageHeader: {
          title: "Page Title",
        },
      }}
    >
      <SectionComponent {...args} />
      <SectionComponent {...args} />
    </Layout>
  </>
);

Default.args = {
  sectionHeader: {
    title: "Section Title",
  },
  children: <div>Content here</div>,
};

// const Template: ComponentStory<typeof SectionComponent> = (args) => (
//   <SectionComponent {...args} />
// );

// export const example = Template.bind({});
// example.args = {};
