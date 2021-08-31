import React from "react";
import { ComponentMeta } from "@storybook/react";

import {
  NotificationContainer,
  Notification as NotificationComponent,
} from "../components";
import { useState } from "react";
import { Button } from "../components";

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
      <Button onClick={() => setSuccessVisibility(true)}>
        Success Notification
      </Button>

      <Button onClick={() => setErrorVisibility(true)}>
        Error Notification
      </Button>

      <Button onClick={() => setProcessingWithActionVisibility(true)}>
        Custom Footer
      </Button>

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
          <div className="okd-space-x-3">
            <Button type="primary">Accept</Button>
            <Button>Decline</Button>
          </div>
        }
      />
    </div>
  );
};

export const usingStaticMethods = () => {
  return (
    <div className="okd-space-x-2">
      <Button
        onClick={() => {
          NotificationComponent.success("Added 2.3245 BNB to CAKE/WBNB.", {
            title: "Successfully added!",
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          NotificationComponent.error(
            "Failure to add 2.3245 BNB to CAKE/WBNB.",
            { title: "Add failure" }
          );
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          NotificationComponent.processing("Something is happening.", {
            title: "Processing...",
          });
        }}
      >
        Processing
      </Button>
      <Button
        onClick={() => {
          NotificationComponent.warn("Something is happening.", {
            title: "Attention needed",
          });
        }}
      >
        Warn
      </Button>

      <Button
        onClick={() => {
          NotificationComponent.warn("Something is happening.", {
            title: "Attention needed",
            footer: (
              <div className="okd-space-x-2">
                <Button type="primary">Accept</Button>
                <Button>Decline</Button>
              </div>
            ),
          });
        }}
      >
        With Footer
      </Button>

      <NotificationContainer />
    </div>
  );
};
