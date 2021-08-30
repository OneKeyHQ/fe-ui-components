import { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Popover as PopoverComponent } from "../components";

export default {
  title: "UI/Popover",
  component: PopoverComponent,
} as ComponentMeta<typeof PopoverComponent>;

const Paint: FC = ({ children }) => {
  return (
    <div className="okd-h-[150px] okd-flex okd-justify-center">{children}</div>
  );
};

export const Popover: ComponentStory<typeof PopoverComponent> = () => (
  <Paint>
    <PopoverComponent>hello Popover</PopoverComponent>
  </Paint>
);

export const CustomTrigger: ComponentStory<typeof PopoverComponent> = () => (
  <Paint>
    <PopoverComponent trigger={<Button type="primary">Click Me!!</Button>}>
      hello Popover
    </PopoverComponent>
  </Paint>
);

export const CustomTriggerStatus: ComponentStory<
  typeof PopoverComponent
> = () => (
  <Paint>
    <PopoverComponent
      trigger={(status, icon) => (
        <Button type="primary">
          {icon}isOpen: {status ? "true" : "false"}
        </Button>
      )}
    >
      hello Popover
    </PopoverComponent>
  </Paint>
);
