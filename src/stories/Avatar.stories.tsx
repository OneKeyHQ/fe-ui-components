import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar as AvatarComponent } from '../components';

export default {
  title: 'UI/Avatar',
  component: AvatarComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => <AvatarComponent {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  address: '0x0000000000000000000000000000000000000000',
};