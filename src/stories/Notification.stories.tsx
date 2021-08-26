import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Notification as NotificationComponent } from '../components';
import { useState } from 'react';

export default {
  title: 'UI/Notification',
  component: NotificationComponent,
} as ComponentMeta<typeof NotificationComponent>;

export const Default = () => {
  const [successVisibility, setSuccessVisibility] = useState(false)
  const [errorVisibility, setErrorVisibility] = useState(false)

  return (
    <div className="okd-space-x-2">
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => setSuccessVisibility(true)}
      >点击打开 Success Notification 提示</button>
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => setErrorVisibility(true)}
      >点击打开 Error Notification 提示</button>

      <NotificationComponent
        title="Successfully added!"
        content="Added 2.3245 BNB to CAKE/WBNB."
        show={successVisibility}
        onClose={() => setSuccessVisibility(false)}
      />

      <NotificationComponent
        title="Add failure"
        type="error"
        content="Failure to add 2.3245 BNB to CAKE/WBNB."
        show={errorVisibility}
        onClose={() => setErrorVisibility(false)}
      />

    </div>
  )
};
