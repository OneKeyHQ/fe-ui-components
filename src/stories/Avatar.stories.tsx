import React, { useReducer } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar as AvatarComponent } from "../components";
import { useEffect } from "@storybook/react/node_modules/@storybook/addons";

export default {
  title: "UI/Avatar",
  component: AvatarComponent,
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => (
  <AvatarComponent {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
  address: "0x0000000000000000000000000000000000000000",
};

export const Avatar2: ComponentStory<typeof AvatarComponent> = () => (
  <AvatarComponent address="0x1f73f8C993bf0e2b5a860Ffd93E135103208a707" />
);

export const RemoteErrorFallback: ComponentStory<
  typeof AvatarComponent
> = () => (
  <AvatarComponent
    address="0x0000000000000000000000000000000000000000"
    isRemote
  />
);

// 哪怕更新了，也不会重新向服务器发起无效请求
export const RemoteErrorFallbackWithUpdater: ComponentStory<
  typeof AvatarComponent
> = () => {
  const [count, update] = useReducer((c) => c + 1, 0);

  useEffect(() => {
    const id = setInterval(() => update(), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="okd-flex okd-items-center okd-space-x-2">
      <AvatarComponent
        logoUrl="Wrong logo url"
        address="0x0000000000000000000000000000000000000000"
      />
      <p>{count}</p>
    </div>
  );
};
