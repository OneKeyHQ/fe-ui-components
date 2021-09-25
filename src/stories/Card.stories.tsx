import React, { useState } from "react";
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

export const Default: ComponentStory<typeof CardComponent> = (args) => {
  const [isApproving, setIsApproving] = useState(false);
  const [swapable, setSwapable] = useState(false);

  const handleApprove = () => {
    setIsApproving(true);
    setTimeout(() => {
      setIsApproving(false);
      setSwapable(true);
    }, 666);
  };

  const resetApproveState = () => {
    setIsApproving(false);
    setSwapable(false);
  };

  const defaultProps = {
    title: "Card Title",
    className: "okd-mx-auto okd-w-[480px]",
    actions: (
      <div className="okd-space-x-6 okd-flex okd-items-center">
        <div className="okd-w-5 okd-h-5 okd-flex okd-justify-center okd-items-center">
          <Button leadingIcon="RefreshSolid" type="plain" circular></Button>
        </div>
        <div className="okd-w-5 okd-h-5 okd-flex okd-justify-center okd-items-center">
          <Button leadingIcon="CogSolid" type="plain" circular></Button>
        </div>
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
    footer: (
      <div className="okd-flex">
        <Button
          className="okd-flex-1 okd-mr-3"
          type="primary"
          loading={isApproving}
          disabled={swapable}
          onClick={handleApprove}
        >
          {swapable ? "Approved" : "Approve"}
        </Button>
        <Button
          className="okd-flex-1"
          type="primary"
          disabled={!swapable}
          onClick={resetApproveState}
        >
          Swap
        </Button>
      </div>
    ),
  };

  return (
    <>
      <ConfigBar />
      <CardComponent {...defaultProps} {...args} />
    </>
  );
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

export const CoverWithDescription = Template.bind({});
CoverWithDescription.args = {
  className: "okd-mx-auto okd-w-[480px] okd-overflow-hidden",
  cover: (
      <img src="https://source.unsplash.com/random" alt="Random" />
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
