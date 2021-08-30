import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card as CardComponent } from "../components";
import ConfigBar from "./Base";
import { Button } from "../components";

export default {
  title: "UI/Card",
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const Default: ComponentStory<typeof CardComponent> = (args) => (
  <>
    <ConfigBar />
    <CardComponent {...args} />
  </>
);

Default.args = {
  title: "Card Title",
  className: "okd-mx-auto okd-w-[480px]",
  actions: (
    <div className="okd-space-x-3">
      <Button>Secondary</Button>
      <Button type="primary">Primary</Button>
    </div>
  ),
  children: (
    <div className="okd-text-gray-700">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit
      sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem
      vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam
      placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam
      tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est.
    </div>
  ),
};

export const CardBody = Template.bind({});
CardBody.args = {
  className: "okd-mx-auto okd-w-[480px]",
  children: <div className="okd-text-gray-700">Body Only</div>,
};

export const TitleWithDescription = Template.bind({});
TitleWithDescription.args = {
  className: "okd-mx-auto okd-w-[480px]",
  title: (
    <>
      Title
      <p className="okd-mt-1 okd-text-sm okd-font-normal okd-text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti
        consectetur.
      </p>
    </>
  ),
  children: (
    <div className="okd-text-gray-200">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit
      sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem
      vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam
      placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam
      tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est.
    </div>
  ),
};
