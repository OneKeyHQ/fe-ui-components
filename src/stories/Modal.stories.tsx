import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button, Modal } from "../components";
import { iconColors } from "../components/Modal/ConfirmDialog";
import ExclamationOutlined from "../components/Icon/react/outline/Exclamation";
import ConfigBar from "./Base";

export default {
  title: "UI/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(false);
  const [isFooterVisible, setIsFooterVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ConfigBar />
      <div className="okd-space-x-3">
        <Button
          onClick={() => {
            setIsHeaderVisible(true);
            setIsFooterVisible(false);
            showModal();
          }}
        >
          Open Header Modal
        </Button>
        <Button
          onClick={() => {
            setIsHeaderVisible(false);
            setIsFooterVisible(true);
            showModal();
          }}
        >
          Open Footer Modal
        </Button>
        <Button
          onClick={() => {
            setIsHeaderVisible(true);
            setIsFooterVisible(true);
            showModal();
          }}
        >
          Open Full Modal
        </Button>
      </div>

      <Modal visible={isModalVisible} onClose={() => handleCancel()}>
        {!!isHeaderVisible && (
          <Modal.Header
            // Custom styled title
            // title={<div className="okd-text-green-200">Create User</div>}
            // Default title style
            title="Create User"
            onClose={() => handleCancel()}
            actions={
              <div className="okd-flex okd-space-x-6">
                <div className="okd-flex okd-w-5 okd-h-5 okd-items-center okd-justify-center">
                  <Button circular type="plain" leadingIcon="RefreshSolid" />
                </div>
                <div className="okd-flex okd-w-5 okd-h-5 okd-items-center okd-justify-center">
                  <Button circular type="plain" leadingIcon="CogSolid" />
                </div>
              </div>
            }
          />
        )}

        <Modal.Body>
          <p className="okd-font-normal okd-text-sm okd-leading-5 okd-text-gray-900">
            <strong className="okd-font-bold">Detach instance to use.</strong>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio porta
            risus nec, cursus faucibus libero dolor integer. Cursus sagittis,
            tempus ut cum cursus gravida suspendisse tristique nunc.
          </p>
        </Modal.Body>

        {!!isFooterVisible && (
          <Modal.Footer
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Create"
          />
        )}
      </Modal>

      <Modal visible={true} onClose={() => null}>No body. <Button></Button></Modal>
    </>
  );
};

export const UsingStaticMethods = () => {
  function info() {
    Modal.info({
      title: "This is a information prompts",
      content: (
        <>
          <p className="okd-text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore.
          </p>
        </>
      ),
      onOk() {},
    });
  }

  function success() {
    Modal.success({
      title: "Payment Successful",
      content: (
        <>
          <p className="okd-text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore.
          </p>
        </>
      ),
    });
  }

  function error() {
    Modal.error({
      title: "This is an error message",
      content: (
        <>
          <p className="okd-text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore.
          </p>
        </>
      ),
    });
  }

  function warning() {
    Modal.warning({
      title: "This is a warning message",
      content: (
        <>
          <p className="okd-text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore.
          </p>
        </>
      ),
    });
  }

  function confirm() {
    Modal.confirm({
      title: "Delete Address",
      icon: (
        <ExclamationOutlined
          className={`okd-h-6 okd-w-6 ${iconColors.error}`}
        />
      ),
      type: "error",
      content: (
        <>
          <p className="okd-text-gray-500">
            Address [0xfc...c7ea] will be remove
          </p>
        </>
      ),
      onOk() {
        alert("OK");
      },
      onCancel() {
        alert("Cancel");
      },
    });
  }

  return (
    <div className="okd-space-x-2">
      <button
        onClick={info}
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
      >
        Info
      </button>
      <button
        onClick={success}
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
      >
        Success
      </button>
      <button
        onClick={error}
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
      >
        Error
      </button>
      <button
        onClick={warning}
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
      >
        Warning
      </button>
      <button
        onClick={confirm}
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
      >
        Confirm
      </button>
    </div>
  );
};

export const UsingWithHooksInContexts = () => {
  const ReachableContext = React.createContext({});
  const UnreachableContext = React.createContext({});

  const config = {
    title: "Use Hook!",
    content: (
      <>
        <ReachableContext.Consumer>
          {(name) => `Reachable: ${name}!`}
        </ReachableContext.Consumer>
        <br />
        <UnreachableContext.Consumer>
          {(name) => `Unreachable: ${name}!`}
        </UnreachableContext.Consumer>
      </>
    ),
  };

  const [modal, contextHolder] = Modal.useModal();

  return (
    <ReachableContext.Provider value="Light">
      <div className="okd-space-x-2">
        <button
          className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
          onClick={() => {
            modal.confirm(config);
          }}
        >
          Confirm
        </button>
        <button
          className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </button>
        <button
          className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
          onClick={() => {
            modal.info(config);
          }}
        >
          Info
        </button>
        <button
          className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
          onClick={() => {
            modal.error(config);
          }}
        >
          Error
        </button>
      </div>
      {/* `contextHolder` 需要始终放在你要访问的 context 里 */}
      {/* `contextHolder` should always under the context you want to access */}
      {contextHolder}

      {/* 无法获取到 UnreachableContext 的值 */}
      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};

export const UsingWithHooksWithoutContexts = () => {
  const config = {
    title: "Use Hook!",
    content: (
      <>
        balablabalba
        <br />
      </>
    ),
  };

  const [modal, contextHolder] = Modal.useModal();

  return (
    <div className="okd-space-x-2">
      <button
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          modal.confirm(config);
        }}
      >
        Confirm
      </button>
      <button
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          modal.warning(config);
        }}
      >
        Warning
      </button>
      <button
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          modal.info(config);
        }}
      >
        Info
      </button>
      <button
        className="border okd-inline-flex okd-items-center okd-justify-center okd-px-4 okd-py-2 okd-text-sm okd-font-medium okd-rounded okd-shadow-sm focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 dark:okd-ring-offset-gray-900 okd-bg-brand-500 hover:okd-bg-brand-600 focus:okd-ring-brand-500 dark:okd-bg-brand-600 dark:hover:okd-bg-brand-500 okd-border-transparent okd-text-white"
        onClick={() => {
          modal.error(config);
        }}
      >
        Error
      </button>
      {contextHolder}
    </div>
  );
};
