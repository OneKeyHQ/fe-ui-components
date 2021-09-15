import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select as SelectComponent, Icon } from "../components";
import ConfigBar from "./Base";

export default {
  title: "UI/Select",
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

const Wrapper = ({children}) => {
  return (
    <div className="okd-h-96">
      {children}
    </div>
  )
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Default: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent
        options={options}
      />
    </Wrapper>
  </>
);

export const Disable: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent
        isDisabled
        options={options}
      />
    </Wrapper>
  </>
);

export const MultipleSelect: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent
        multi
        isClearable
        options={options}
      />
    </Wrapper>
  </>
);


export const Loading: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent
        isLoading
      />
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
            label: 'first group',
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]
          },
          {
            label: 'second group',
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]
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
        prefix={<Icon name="SearchOutline" className={"okd-w-5 okd-h-5 okd-ml-3"} />}
        options={[
          {
            label: 'first group',
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]
          },
          {
            label: 'second group',
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]
          },
        ]}
      />
    </Wrapper>
  </>
);

export const CustomRenderOption: ComponentStory<typeof SelectComponent> = () => (
  <>
    <ConfigBar />
    <Wrapper>
      <SelectComponent
        multi
        prefix={<Icon name="SearchOutline" className={"okd-w-5 okd-h-5 okd-ml-3"} />}
        options={[
          {
            label: 'first group',
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]
          },
          {
            label: 'second group',
            options: [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]
          },
        ]}
        renderOption={(data, props) => {
          return (<div {...props.innerProps}>{data.label}</div>)
        }}
      />
    </Wrapper>
  </>
);
