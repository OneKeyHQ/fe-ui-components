import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider as DividerComponent, Heading, Link, Paragraph, Text } from '../components';

export default {
  title: 'UI/Divider',
  component: DividerComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof DividerComponent>;

const Template: ComponentStory<typeof DividerComponent> = () => <>
  <Heading>水平分割线 Horizontal</Heading>
  <Paragraph><Text strong> Jelly:</Text> Hi, Akhan. Good to see you today!</Paragraph>
  <DividerComponent />
  <Paragraph><Text strong> Akhanmta: </Text>Halloya, Jelly. How are you doing today?</Paragraph>
  <DividerComponent />
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</Paragraph>
  <DividerComponent />

  <Heading>垂直分割线 Vertical</Heading>
  WIP
  {/* <div>
    <Link>A</Link>
    <Divider type="vertical" />
    <Link>B</Link>
    <Divider type="vertical" />
    <Link>C</Link>
  </div> */}

  <Heading>With label</Heading>
  WIP
</>;

export const Divider = Template.bind({});
Divider.args = {
};