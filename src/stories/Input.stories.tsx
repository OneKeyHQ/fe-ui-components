import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input as InputComponent } from '../components';

export default {
  title: 'FORM/Input',
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});

export const InitialValue = Template.bind({});
InitialValue.args = {
  initialValue: 'this is initial value control.'
}


export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessage: '错误的信息'
}
