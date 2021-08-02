import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip as TooltipComponent, Button } from '../components';

export default {
  title: 'UI/Tooltip',
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

const Template: ComponentStory<typeof TooltipComponent> = (args) => <TooltipComponent {...args}><Button>Button</Button></TooltipComponent>;

export const Tooltip = Template.bind({});
Tooltip.args = {
  content: 'tooltip',
};