import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select as SelectComponent, Icon } from "../components";
import ConfigBar from "./Base";
import { Token } from "../components";

export default {
  title: "UI/Select",
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

const Wrapper = ({ children }) => {
  return <div className="okd-h-96">{children}</div>;
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Default: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent options={options} />
    </Wrapper>
  </>
);

export const Disable: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent isDisabled options={options} />
    </Wrapper>
  </>
);

export const MultipleSelect: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent multi isClearable options={options} />
    </Wrapper>
  </>
);

export const Loading: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent isLoading />
    </Wrapper>
  </>
);

export const Group: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent
        multi
        options={[
          {
            label: "first group",
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ],
          },
          {
            label: "second group",
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ],
          },
        ]}
      />
    </Wrapper>
  </>
);

export const PrefixIcon: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent
        multi
        prefix={
          <Icon
            name="SearchOutline"
            className={"okd-w-5 okd-h-5 okd-ml-3 okd-text-gray-400 okd--mr-1"}
          />
        }
        options={[
          {
            label: "first group",
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ],
          },
          {
            label: "second group",
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ],
          },
        ]}
      />
    </Wrapper>
  </>
);

export const CustomRenderOption: ComponentStory<
  typeof SelectComponent
> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent
        multi
        prefix={
          <Icon
            name="SearchOutline"
            className={"okd-w-5 okd-h-5 okd-ml-3 okd-text-gray-400 okd--mr-1"}
          />
        }
        options={[
          {
            label: "first group",
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ],
          },
          {
            label: "second group",
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ],
          },
        ]}
        renderOption={(data, props) => {
          return (
            <div
              className="okd-py-2 okd-px-3 okd-rounded okd-text-gray-900 hover:okd-bg-gray-50 okd-cursor-default focus:okd-bg-gray-100"
              {...props.innerProps}
            >
              <div className="okd-flex okd-items-center">
                {/* if token / if leadingContent / something else */}
                <Token chain="bsc" className="okd-mr-3" />
                <div>
                  {data.label}
                  {/* if description */}
                  <div className="okd-text-gray-500">Description</div>
                </div>
              </div>
            </div>
          );
        }}
      />
    </Wrapper>
  </>
);
