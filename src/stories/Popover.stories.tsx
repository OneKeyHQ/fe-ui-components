import { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Popover as PopoverComponent } from "../components";

export default {
  title: "UI/Popover",
  component: PopoverComponent,
} as ComponentMeta<typeof PopoverComponent>;

const Paint: FC = ({ children }) => {
  return (
    <div className="okd-pt-4 okd-pb-28 okd-flex okd-justify-center">{children}</div>
  );
};

export const Popover: ComponentStory<typeof PopoverComponent> = () => (
  <Paint>
    <PopoverComponent place="bottom-center">
      <div className="okd-p-4 okd-text-center okd-text-sm okd-text-gray-500">
        Popovers are perfect for floating panels with arbitrary content like
        navigation menus, mobile menus and flyout menus.
      </div>
    </PopoverComponent>
  </Paint>
);

export const CustomTrigger: ComponentStory<typeof PopoverComponent> = () => (
  <Paint>
    <PopoverComponent
      place="bottom-center"
      trigger={<Button type="primary">Click Me!!</Button>}
    >
      <div className="okd-p-4 okd-text-center okd-text-sm okd-text-gray-500">
        Popovers are perfect for floating panels with arbitrary content like
        navigation menus, mobile menus and flyout menus.
      </div>
    </PopoverComponent>
  </Paint>
);

export const CustomTriggerStatus: ComponentStory<
  typeof PopoverComponent
> = () => (
  <Paint>
    <PopoverComponent
      place="bottom-center"
      trigger={(status, icon) => (
        <Button type="primary">isOpen: {status ? "true" : "false"}</Button>
      )}
    >
      <div className="okd-p-4 okd-text-center okd-text-sm okd-text-gray-500">
        Popovers are perfect for floating panels with arbitrary content like
        navigation menus, mobile menus and flyout menus.
      </div>
    </PopoverComponent>
  </Paint>
);
