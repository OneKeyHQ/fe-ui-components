import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button, Modal, useDisclosure } from "../components";

export default {
  title: "UI/ModalHeader",
  component: Modal.Header,
} as ComponentMeta<typeof Modal>;

export const Default = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal visible={isOpen} onClose={onClose}>
        <Modal.Header title="Show case of header" {...args} />
      </Modal>
    </>
  );
};

export const WithActions = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal visible={isOpen} onClose={onClose}>
        <Modal.Header
          title="With actions"
          actions={
            <Button circular type="plain" leadingIcon="AcademicCapOutline" />
          }
          {...args}
        />
      </Modal>
    </>
  );
};

export const NonClosable = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal visible={isOpen} onClose={onClose}>
        <Modal.Header
          title="I'm unclosable"
          actions={
            <Button circular type="plain" leadingIcon="AcademicCapOutline" />
          }
          closable={false}
          {...args}
        />
      </Modal>
    </>
  );
};
