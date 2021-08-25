import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Notification as NotificationComponent } from '../components';
import { useState } from 'react';

export default {
  title: 'UI/Notification',
  component: NotificationComponent,
} as ComponentMeta<typeof NotificationComponent>;

export const Default = () => {
  const [show, setShow] = useState(false)

  return (<>
    <button onClick={() => setShow(true)}>点击打开 Notification 提示</button>
    <NotificationComponent show={show} onClose={() => setShow(false)} />
  </>)
};
