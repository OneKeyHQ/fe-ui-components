import * as React from "react";
import { render } from "react-dom";
import { NotificationMethods, NotificationManager } from "./manager";
import type { NotificationMessage, NotificationOptions } from "./types";

const portalId = "onekey-notification-portal";

class Notificationer {
  private createNotification?: NotificationMethods["notify"];
  private removeAll?: NotificationMethods["closeAll"];
  private closeNotification?: NotificationMethods["close"];
  private updateNotification?: NotificationMethods["update"];
  private isNotificationActive?: NotificationMethods["isActive"];

  /**
   * Initialize the manager and mount it in the DOM
   * inside the portal node.
   *
   * @todo
   *
   * Update notification constructor to use `PortalManager`'s node or document.body.
   * Once done, we can remove the `zIndex` in `notification.manager.tsx`
   */
  constructor() {
    let portal: HTMLElement;
    const existingPortal = document.getElementById(portalId);

    if (existingPortal) {
      portal = existingPortal;
    } else {
      const div = document.createElement("div");
      div.id = portalId;
      document.body?.appendChild(div);
      portal = div;
    }

    render(<NotificationManager notify={this.bindFunctions} />, portal);
  }

  private bindFunctions = (methods: NotificationMethods) => {
    this.createNotification = methods.notify;
    this.removeAll = methods.closeAll;
    this.closeNotification = methods.close;
    this.updateNotification = methods.update;
    this.isNotificationActive = methods.isActive;
  };

  notify = (
    message: NotificationMessage,
    options: Partial<NotificationOptions> = {}
  ) => this.createNotification?.(message, options);

  close = (id: React.Key) => {
    this.closeNotification?.(id);
  };

  closeAll = () => {
    this.removeAll?.();
  };

  update = (id: React.Key, options: Partial<NotificationOptions> = {}) => {
    this.updateNotification?.(id, options);
  };

  isActive = (id: React.Key) => this.isNotificationActive?.(id);
}

export const notificationer = new Notificationer();
