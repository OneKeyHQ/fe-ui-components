import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../components';

export default {
  title: 'UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;


// const Template: ComponentStory<typeof Modal> = () => null

// Default.args = {
// };

export const Default = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log(isModalVisible);

  return (
    <>
      <button
        className="okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium border okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => showModal()}>
        Open Modal
      </button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
