import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button, WalletSelector } from "../components";
import ConfigBar from "./Base";

export default {
  title: "CUSTOM/WalletSelector",
  component: WalletSelector,
} as ComponentMeta<typeof WalletSelector>;

export const Default = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => { showModal(); }}>Connect</Button>
      <WalletSelector visible={isModalVisible} onClose={() => handleCancel()} />
    </>
  );
}

Default.args = {};

// const Template: ComponentStory<typeof CardComponent> = (args) => (
//   <CardComponent {...args} />
// );

// export const example = Template.bind({});
// example.args = {};
