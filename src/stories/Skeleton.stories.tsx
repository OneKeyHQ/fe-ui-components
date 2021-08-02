import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton as SkeletonComponent } from '../components';

export default {
  title: 'UI/Skeleton',
  component: SkeletonComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof SkeletonComponent>;

export const Skeleton: ComponentStory<typeof SkeletonComponent> = (args) => <SkeletonComponent {...args} />;
