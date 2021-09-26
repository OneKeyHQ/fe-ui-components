import React from "react";
import { ComponentMeta } from "@storybook/react";
import { useIntl } from "react-intl";

import { Button, Modal, TradeForm, UIProvider } from "../components";
import { iconColors } from "../components/Modal/ConfirmDialog";
import ExclamationOutlined from "../components/Icon/react/outline/Exclamation";
import ConfigBar from "./Base";
import { InputItem } from "../components/TradeForm/Items";

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
            <strong className="okd-font-bold">Detach instance to use.</strong>
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
    </>
  );
};

export const NestedModals = () => {
  const [open, setOpen] = React.useState(false);
  const [openTop, setOpenTop] = React.useState(false);
  const [openSecondModal, setOpenSecondModal] = React.useState(false);

  const NestedModal = ({ onClose, level = 0 }) => {
    let [showChild, setShowChild] = React.useState(false);
    const { formatMessage } = useIntl();
    const contentMessage = formatMessage({ id: "hello" });

    return (
      <Modal
        visible={true}
        onClose={onClose}
        containerStyle={{
          transform: `translate(calc(50px * ${level}), calc(50px * ${level}))`,
          width: "fit-content",
        }}
      >
        <Modal.Body>
          <div>
            <p>Level: {level}</p>
            <p>Content: {contentMessage} </p>
            <div className="okd-space-x-4">
              <Button
                className="okd-bg-gray-200 okd-px-2 okd-py-1 okd-rounded"
                onClick={() => setShowChild(true)}
              >
                Open (1)
              </Button>
              <Button
                className="okd-bg-gray-200 okd-px-2 okd-py-1 okd-rounded"
                onClick={() => setShowChild(true)}
              >
                Open (2)
              </Button>
              <Button
                className="okd-bg-gray-200 okd-px-2 okd-py-1 okd-rounded"
                onClick={() => setShowChild(true)}
              >
                Open (3)
              </Button>
            </div>
          </div>
        </Modal.Body>
        {showChild && (
          <NestedModal onClose={() => setShowChild(false)} level={level + 1} />
        )}
      </Modal>
    );
  };

  return (
    <div className="okd-space-x-2">
      <Button onClick={() => setOpen(true)}>
        Open deeply nested Dialog components
      </Button>
      <UIProvider
        messagesMap={{
          "en-US": { hello: "Hello There👋!" },
          "zh-CN": { hello: "你好啊👋！" },
        }}
      >
        {open && <NestedModal onClose={setOpen} />}
      </UIProvider>

      <Button onClick={() => setOpenTop(true)}>
        Open one nested top Modal
      </Button>
      <Modal
        visible={openTop}
        onClose={() => setOpenTop(false)}
        className="okd-p-2"
      >
        <Button onClick={() => setOpenSecondModal(true)}>Open Second</Button>
        <Modal
          visible={openSecondModal}
          onClose={() => setOpenSecondModal(false)}
          className="okd-p-2"
        >
          Two
        </Modal>
      </Modal>
    </div>
  );
};

export const ControlledFocus = () => {
  const [open, setOpen] = React.useState(false);
  const autoFocusRef = React.useRef<HTMLInputElement>(null);
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open
      </Button>

      <Modal visible={open} onClose={closeModal} initialFocusRef={autoFocusRef}>
        <Modal.Header onClose={closeModal}>Modal</Modal.Header>
        <Modal.Body className="okd-space-y-6">
          <TradeForm
            label="You Pay"
            labelCorner={
              <Button
                className="!okd-p-0 okd-text-brand-600 hover:okd-bg-gray-100"
                size="sm"
                type="plain"
              >
                Balance: 2.3245
              </Button>
            }
          >
            <InputItem ref={autoFocusRef} placeholder="0.0" />
          </TradeForm>

          <TradeForm label="You Receive">
            <InputItem placeholder="0.0" />
          </TradeForm>
        </Modal.Body>
      </Modal>
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
      <Button onClick={info} type="primary">
        Info
      </Button>
      <Button onClick={success} type="primary">
        Success
      </Button>
      <Button onClick={error} type="primary">
        Error
      </Button>
      <Button onClick={warning} type="primary">
        Warning
      </Button>
      <Button onClick={confirm} type="primary">
        Confirm
      </Button>
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
        <Button
          type="primary"
          onClick={() => {
            modal.confirm(config);
          }}
        >
          Confirm
        </Button>
        <Button
          type="primary"
          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </Button>
        <Button
          type="primary"
          onClick={() => {
            modal.info(config);
          }}
        >
          Info
        </Button>
        <Button
          type="primary"
          onClick={() => {
            modal.error(config);
          }}
        >
          Error
        </Button>
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
      <Button
        type="primary"
        onClick={() => {
          modal.confirm(config);
        }}
      >
        Confirm
      </Button>
      <Button
        type="primary"
        onClick={() => {
          modal.warning(config);
        }}
      >
        Warning
      </Button>
      <Button
        type="primary"
        onClick={() => {
          modal.info(config);
        }}
      >
        Info
      </Button>
      <Button
        type="primary"
        onClick={() => {
          modal.error(config);
        }}
      >
        Error
      </Button>
      {contextHolder}
    </div>
  );
};
