import { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Dropdown as DropdownComponent } from "../components";

export default {
  title: "UI/Dropdown",
  component: DropdownComponent,
} as ComponentMeta<typeof DropdownComponent>;

const Paint: FC = ({ children }) => {
  return (
    <div className="okd-h-[150px] okd-flex okd-justify-center">{children}</div>
  );
};

export const Dropdown: ComponentStory<typeof DropdownComponent> = () => (
  <Paint>
    <DropdownComponent>hello dropdown</DropdownComponent>
  </Paint>
);

export const CustomTrigger: ComponentStory<typeof DropdownComponent> = () => (
  <Paint>
    <DropdownComponent trigger={<Button type="primary">Click Me!!</Button>}>
      hello dropdown
    </DropdownComponent>
  </Paint>
);

export const CustomTriggerStatus: ComponentStory<
  typeof DropdownComponent
> = () => (
  <Paint>
    <DropdownComponent
      trigger={(status, icon) => (
        <Button type="primary">
          {icon}isOpen: {status ? "true" : "false"}
        </Button>
      )}
    >
      hello dropdown
    </DropdownComponent>
  </Paint>
);
