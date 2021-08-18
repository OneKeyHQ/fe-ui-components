import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch as SwitchComponent } from '../components';
import ConfigBar from './Base';

export default {
  title: 'FORM/Switch',
  component: SwitchComponent,
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = (args) => <><ConfigBar></ConfigBar><SwitchComponent {...args} /></>;

export const Switch = Template.bind({});
