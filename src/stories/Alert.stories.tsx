import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert as AlertComponent } from '../components';
import ConfigBar from './Base';

export default {
  title: 'UI/Alert',
  component: AlertComponent,
} as ComponentMeta<typeof AlertComponent>;

const Template: ComponentStory<typeof AlertComponent> = (args) => (
  <AlertComponent {...args} />
);

export const Default: ComponentStory<typeof AlertComponent> = (args) => (
  <>
    <ConfigBar />
    <AlertComponent {...args} />
  </>
);
Default.args = {
  title: "Defaults to info type",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  title: "Success",
  children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>,
  closable: true,
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  title: "Info",
  children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>,
  closable: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  title: "Warning",
  children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>,
  closable: true,
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  title: "Error",
  children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>,
  closable: true,
};
