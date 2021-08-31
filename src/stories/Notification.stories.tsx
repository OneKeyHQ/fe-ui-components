import React from "react";
import { ComponentMeta } from "@storybook/react";

import {
  NotificationContainer,
  Notification as NotificationComponent,
} from "../components";
import { useState } from "react";

export default {
  title: "UI/Notification",
  component: NotificationComponent,
} as ComponentMeta<typeof NotificationComponent>;

export const Default = () => {
  const [successVisibility, setSuccessVisibility] = useState(false);
  const [errorVisibility, setErrorVisibility] = useState(false);
  const [
    processingWithActionVisibility,
    setProcessingWithActionVisibility,
  ] = useState(false);

  // 声明式使用方法
  return (
    <div className="okd-block okd-space-x-2">
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => setSuccessVisibility(true)}
      >
        点击打开 Success Notification 提示
      </button>
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => setErrorVisibility(true)}
      >
        点击打开 Error Notification 提示
      </button>

      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => setProcessingWithActionVisibility(true)}
      >
        点击打开拥有 footer 按钮的 Notification 提示
      </button>

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

      <NotificationComponent
        title="Processing..."
        content="Something is happening."
        show={processingWithActionVisibility}
        onClose={() => setProcessingWithActionVisibility(false)}
        type="processing"
        duration={0}
        footer={
          <div className="okd-space-x-2">
            <button
              type="button"
              className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
            >
              Accept
            </button>
            <button
              type="button"
              className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-border-gray-300 okd-rounded focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-white hover:okd-bg-gray-200 focus:okd-ring-gray-500 dark:okd-bg-gray-500 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-gray-900"
            >
              Decline
            </button>
          </div>
        }
      />
    </div>
  );
};

export const usingStaticMethods = () => {
  return (
    <div className="okd-space-x-2">
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          NotificationComponent.success("Added 2.3245 BNB to CAKE/WBNB.", {
            title: "Successfully added!",
          });
        }}
      >
        Success
      </button>
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          NotificationComponent.error(
            "Failure to add 2.3245 BNB to CAKE/WBNB.",
            { title: "Add failure" }
          );
        }}
      >
        Error
      </button>
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          NotificationComponent.processing("Something is happening.", {
            title: "Processing...",
          });
        }}
      >
        Processing
      </button>
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          NotificationComponent.warn("Something is happening.", {
            title: "Attention needed",
          });
        }}
      >
        Warn
      </button>

      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          NotificationComponent.warn("Something is happening.", {
            title: "Attention needed",
            footer: (
              <div className="okd-space-x-2">
                <button
                  type="button"
                  className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
                >
                  Accept
                </button>
                <button
                  type="button"
                  className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-border okd-border-gray-300 okd-rounded focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-white hover:okd-bg-gray-200 focus:okd-ring-gray-500 dark:okd-bg-gray-500 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-gray-900"
                >
                  Decline
                </button>
              </div>
            ),
          });
        }}
      >
        With Footer
      </button>

      <NotificationContainer />
    </div>
  );
};
