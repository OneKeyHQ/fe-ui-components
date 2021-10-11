import React from "react";
import {
  Button,
  useNotification,
  createStandaloneNotification,
} from "../components";

export default {
  title: "UI/Notification",
  component: React.Fragment,
};

export const NotificationExample = () => {
  const notification = useNotification();
  const id = "a custom key";
  return (
    <div className="okd-space-x-2">
      <Button
        onClick={() => {
          if (notification.isActive(id)) return;
          notification.error(
            "You do not have permissions to perform this action.",
            {
              id,
              title: "Error Connecting...",
              duration: null,
              closable: false,
            }
          );
        }}
      >
        Show Notification
      </Button>
      <Button onClick={() => notification.closeAll()}>Close all</Button>
      <Button
        onClick={() =>
          notification.update(id, {
            title: "Hooray 🥳🥳🥳!!!",
            content: "You now have permissions to perform this action.",
            type: "success",
            duration: 3000,
          })
        }
      >
        Update
      </Button>
      <Button onClick={() => notification.close(id)}>Close One</Button>
    </div>
  );
};

export function SuccessNotificationWithCloseCallback() {
  const notification = useNotification();
  return (
    <Button
      onClick={() =>
        notification.success("We've created your account for you.", {
          title: "Account created.",
          duration: 3000,
          closable: true,
          onCloseComplete: () => {
            console.log("close");
          },
        })
      }
    >
      Show Success Notification
    </Button>
  );
}

export function WarningNotification() {
  const notification = useNotification();
  return (
    <Button
      onClick={() =>
        notification.warn("This is a warning.", {
          title: "Warning.",
          duration: 9000,
          closable: true,
        })
      }
    >
      Show Warning Notification
    </Button>
  );
}

export function ProcessingNotificationWithFooter() {
  const notification = useNotification();
  return (
    <Button
      onClick={() =>
        notification.processing("Please wait until transaction success!", {
          title: "Processing transaction.",
          duration: 9000,
          closable: true,
          footer: (
            <div className="okd-space-x-3">
              <Button type="primary">Accept</Button>
              <Button>Decline</Button>
            </div>
          ),
        })
      }
    >
      Show Processing with Footer Notification
    </Button>
  );
}

export function ErrorNotification() {
  const notification = useNotification();
  return (
    <Button
      onClick={() =>
        notification.error("Unable to create user account.", {
          title: "An error occurred.",
          duration: 9000,
          closable: true,
        })
      }
    >
      Show Error Notification
    </Button>
  );
}

export const usingStaticMethods = () => {
  // 可以在 scope 外声明
  const notification = createStandaloneNotification();

  return (
    <div className="okd-space-x-2">
      <Button
        onClick={() => {
          notification.success("Added 2.3245 BNB to CAKE/WBNB.", {
            title: "Successfully added!",
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          notification.error("Failure to add 2.3245 BNB to CAKE/WBNB.", {
            title: "Add failure",
          });
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          notification.processing("Something is happening.", {
            title: "Processing...",
          });
        }}
      >
        Processing
      </Button>
      <Button
        onClick={() => {
          notification.warn("Something is happening.", {
            title: "Attention needed",
          });
        }}
      >
        Warn
      </Button>

      <Button
        onClick={() => {
          notification.warn("Something is happening.", {
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
    </div>
  );
};
