import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TradeForm as TradeFormComponent } from "../components";
import {
  Button,
  Token,
  TokenGroup,
  Icon,
  RadioButtonGroup,
} from "../components";
import ConfigBar from "./Base";

export default {
  title: "CUSTOM/TradeForm",
  component: TradeFormComponent,
} as ComponentMeta<typeof TradeFormComponent>;

const Wrapper = ({ children }) => {
  return <div className="okd-max-w-sm okd-mx-auto">{children}</div>;
};

const Template: ComponentStory<typeof TradeFormComponent> = (args) => {
  return (
    <>
      <Wrapper>
        <TradeFormComponent {...args} />
      </Wrapper>
    </>
  );
};

export const Default: ComponentStory<typeof TradeFormComponent> = (args) => (
  <>
    <ConfigBar />
    <Wrapper>
      <TradeFormComponent {...args} />
    </Wrapper>
  </>
);

Default.args = {
  label: "You Pay",
  labelCorner: (
    <Button
      type="plain"
      size="sm"
      className="!okd-p-0 okd-text-brand-600 hover:okd-bg-gray-100"
    >
      Balance: 2.3245
    </Button>
  ),
  children: (
    <TradeFormComponent.Input
      placeholder="0.0"
      valueType={<Button type="primary">Select a token</Button>}
    />
  ),
};

export const ValueTypeAsTokenSelectorTrigger = Template.bind({});
ValueTypeAsTokenSelectorTrigger.args = {
  children: (
    <TradeFormComponent.Input
      placeholder="0.0"
      valueType={
        <div className="okd--mx-2">
          <Button type="plain" className="okd-px-2 hover:okd-bg-gray-100">
            <Token chain="bsc" name="BSC" />
            <Icon
              name="ChevronDownSolid"
              className="okd-w-5 okd-h-5 okd-ml-1 okd-text-gray-400"
            />
          </Button>
        </div>
      }
    />
  ),
};

export const ValueTypeAsToken = Template.bind({});
ValueTypeAsToken.args = {
  children: (
    <TradeFormComponent.Input
      placeholder="0.0"
      valueType={
        <div className="okd-flex okd-items-center">
          <Token chain="bsc" name="BSC" />
        </div>
      }
    />
  ),
};

export const ValueTypeAsTokenGroup = Template.bind({});
ValueTypeAsTokenGroup.args = {
  children: (
    <TradeFormComponent.Input
      placeholder="0.0"
      valueType={
        <div className="okd-flex okd-items-center">
          <TokenGroup
            cornerToken={{
              chain: "asdfasdfsf",
            }}
            description="something"
            sources={[
              {
                chain: "bsc",
                name: "BSC",
              },
              {
                chain: "eth",
                name: "ETH",
              },
            ]}
          />
        </div>
      }
    />
  ),
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  children: (
    <TradeFormComponent.Input
      placeholder="0.0"
      valueType={
        <div className="okd-flex okd-items-center">
          <Token chain="bsc" name="BSC" />
        </div>
      }
      readOnly
      value="1.2333"
    />
  ),
};

export const InputItemWithRateAndBalance = Template.bind({});
InputItemWithRateAndBalance.args = {
  children: (
    <TradeFormComponent.Input
      placeholder="0.0"
      valueType={
        <div className="okd--mx-2">
          <Button type="plain" className="okd-px-2 hover:okd-bg-gray-100">
            <Token chain="bsc" name="BSC" />
            <Icon
              name="ChevronDownSolid"
              className="okd-w-5 okd-h-5 okd-ml-1 okd-text-gray-400"
            />
          </Button>
        </div>
      }
      showRate
      showBalance
    />
  ),
};

export const StackedInputItem = Template.bind({});
StackedInputItem.args = {
  children: (
    <>
      <TradeFormComponent.Input
        placeholder="0.0"
        valueType={
          <div className="okd--mx-2">
            <Button type="plain" className="okd-px-2 hover:okd-bg-gray-100">
              <Token chain="bsc" name="BSC" />
              <Icon
                name="ChevronDownSolid"
                className="okd-w-5 okd-h-5 okd-ml-1 okd-text-gray-400"
              />
            </Button>
          </div>
        }
        showRate
        showBalance
      />
      <TradeFormComponent.Input
        placeholder="0.0"
        valueType={
          <div className="okd--mx-2">
            <Button type="plain" className="okd-px-2 hover:okd-bg-gray-100">
              <Token chain="bsc" name="BSC" />
              <Icon
                name="ChevronDownSolid"
                className="okd-w-5 okd-h-5 okd-ml-1 okd-text-gray-400"
              />
            </Button>
          </div>
        }
        showRate
        showBalance
      />
    </>
  ),
};

export const DescriptionList = Template.bind({});
DescriptionList.args = {
  children: (
    <>
      <TradeFormComponent.Input
        value="5.4651"
        readOnly
        valueType={
          <div className="okd-flex okd-items-center">
            <TokenGroup
              cornerToken={{
                chain: "asdfasdfsf",
              }}
              description="something"
              sources={[
                {
                  chain: "bsc",
                  name: "BSC",
                },
                {
                  chain: "eth",
                  name: "ETH",
                },
              ]}
            />
          </div>
        }
      />
      <TradeFormComponent.Description
        list={[
          {
            description: "Est. Pool Allocation",
            values: [
              {
                value: "26.26",
                name: "cake",
              },
              {
                value: "1.176",
                name: "wbnb",
              },
            ],
          },
          {
            description: "Est. Daily Income",
            values: "$0.01",
          },
        ]}
      />
    </>
  ),
};

export const HeaderWithRadioButtonGroup = () => {
  const [selected, setSelected] = useState<string>("25%");

  return (
    <>
      <Wrapper>
        <TradeFormComponent
          label="From"
          labelCorner={
            <RadioButtonGroup
              value={selected}
              onChange={setSelected}
              label="example"
            >
              <RadioButtonGroup.Option size="xs" value="25%" label="25%" />
              <RadioButtonGroup.Option size="xs" value="50%" label="50%" />
              <RadioButtonGroup.Option size="xs" value="100%" label="100%" />
            </RadioButtonGroup>
          }
        />
      </Wrapper>
    </>
  );
};

export const HeaderWithRadioButtonGroupOnly = () => {
  const [selected, setSelected] = useState<string>("25%");

  return (
    <>
      <Wrapper>
        <TradeFormComponent
          labelCorner={
            <RadioButtonGroup
              value={selected}
              onChange={setSelected}
              label="example"
              className="okd-flex-1"
            >
              <RadioButtonGroup.Option className="okd-flex-1" size="xs" value="25%" label="25%" />
              <RadioButtonGroup.Option className="okd-flex-1" size="xs" value="50%" label="50%" />
              <RadioButtonGroup.Option className="okd-flex-1" size="xs" value="100%" label="100%" />
            </RadioButtonGroup>
          }
        />
      </Wrapper>
    </>
  );
};
