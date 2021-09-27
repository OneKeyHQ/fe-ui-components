import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button, Modal, useDisclosure } from "../components";

export default {
  title: "UI/ModalFooter",
  component: Modal.Footer,
} as ComponentMeta<typeof Modal>;

export const Default = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal visible={isOpen} onClose={onClose}>
        <Modal.Footer {...args} />
      </Modal>
    </>
  );
};

export const CustomTexts = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal visible={isOpen} onClose={onClose}>
        <Modal.Footer okText="好的👌" cancelText="残忍拒绝🙅‍♂️" {...args} />
      </Modal>
    </>
  );
};

/**
 * 自定义 Action
 */
export const CustomActions = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal visible={isOpen} onClose={onClose}>
        <Modal.Footer {...args}>
          <Button className="okd-w-full" type="primary">一个霸占了整个宽度的按钮</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
