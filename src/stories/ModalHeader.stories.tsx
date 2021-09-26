import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Modal } from "../components";

export default {
  title: "UI/ModalHeader",
  component: Modal.Header,
} as ComponentMeta<typeof Modal>;

export const Default = (args) => {
  return (
    <>
      (
      <Modal visible={true} onClose={() => null}>
        <Modal.Header title="Show case of header" {...args} />
      </Modal>
      )
    </>
  );
};
