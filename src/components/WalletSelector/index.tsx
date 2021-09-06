import React, { FC, useCallback } from "react";
import { AbstractConnectorArguments } from "@web3-react/types";
import { AbstractConnector } from "@web3-react/abstract-connector";

import { buildMetaMaskConnector, buildOneKeyConnector } from "./connectors";

import { UnsupportedChainIdError, useWeb3React } from "../web3/core";
import { FormattedMessage, useIntl } from "../Intl";
import Button from "../Button";
import Icon from "../Icon";
import Modal from "../Modal";

type WalletSelectorProps = {
  /** 是否可见 */
  visible?: boolean;
  /** 点击模态框遮罩时或键盘按下 Esc 时的回调 */
  onClose: () => void;
  /** @web3-react connector params */
  connectorConfig?: AbstractConnectorArguments;
};

const defaultProps = {
  connectorConfig: {},
} as const;

const WalletSelector: FC<WalletSelectorProps> = ({
  visible,
  onClose,
  connectorConfig,
}) => {
  const intl = useIntl();
  const { active, account, connector, activate, error } = useWeb3React();

  const wallets = [
    {
      name: "OneKey",
      logo: "BrandLogoIllus",
      connector: buildOneKeyConnector(connectorConfig),
      downloadLink: "https://onekey.so/plugin",
      hasLoad: !!(typeof window !== "undefined" && window.onekey),
    },
    {
      name: "MetaMask",
      logo: "MetamaskIllus",
      connector: buildMetaMaskConnector(connectorConfig),
      downloadLink: "https://metamask.io/",
      hasLoad: !!(typeof window !== "undefined" && window.ethereum),
    },
  ] as const;

  const tryActivation = useCallback(
    async (
      connector: AbstractConnector | undefined,
      wallet: typeof wallets[number]
    ) => {
      if (!connector) return null;
      if (typeof window !== "undefined" && window.ethereum.switchProvider) {
        window.ethereum.switchProvider(wallet.name.toLowerCase());
      }
      activate(connector, undefined, true).catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
          activate(connector);
        } else {
          // setPendingError(true);
        }
      });
    },
    [activate]
  );

  if (account) {
    return <div>{account}</div>;
  }

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      className="okd-w-full sm:okd-max-w-md"
    >
      <Modal.Header
        title={intl.formatMessage({ id: "ui-components__connect_a_wallet" })}
        onClose={onClose}
      />
      <Modal.Body>
        <div className="max-w-full okd-flex okd-flex-col okd-space-y-3">
          {wallets.map((wallet) => {
            if (!wallet.hasLoad) {
              return (
                <Button
                  block
                  size="xl"
                  as="a"
                  href={wallet.downloadLink}
                  key={wallet.name}
                  target="_blank"
                  className="okd-flex okd-items-center okd-justify-between !okd-p-4 okd-border okd-border-gray-200 okd-shadow-none"
                >
                  <span className="okd-text-gray-900">
                    <FormattedMessage id="ui-components__connect__option_item__install_onekey" />
                  </span>
                  <Icon className="okd-ml-4" name={wallet.logo} />
                </Button>
              );
            }
            return (
              <Button
                block
                size="xl"
                onClick={() => tryActivation(wallet.connector, wallet)}
                key={wallet.name}
                className="okd-flex okd-items-center okd-justify-between !okd-p-4 okd-border okd-border-gray-200 okd-shadow-none"
              >
                <span className="okd-text-gray-900">
                  <FormattedMessage id="ui-components__connect__option_item__install_onekey" />
                </span>
                <Icon className="okd-ml-4" name={wallet.logo} />
              </Button>
            );
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
};

WalletSelector.defaultProps = defaultProps;

export default WalletSelector;
