import React, { FC, useCallback } from "react";
import { AbstractConnectorArguments } from "@web3-react/types";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { UnsupportedChainIdError, useWeb3React } from "../web3/core";

import { buildMetaMaskConnector, buildOneKeyConnector } from "./connectors";

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
      <Modal.Header title="Connect Wallet" onClose={onClose} />
      <Modal.Body>
        <div className="max-w-full okd-flex okd-flex-col okd-space-y-3">
          {wallets.map((wallet) => {
            if (!wallet.hasLoad) {
              return (
                <a
                  href={wallet.downloadLink}
                  target="_blank"
                  rel="noreferrer"
                  key={wallet.name}
                  className="okd-flex okd-items-center okd-justify-between okd-p-4 okd-font-medium okd-text-gray-900 okd-rounded okd-border okd-border-gray-200 focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 focus:okd-ring-offset-white focus:okd-outline-none hover:okd-bg-gray-50"
                >
                  <span>download {wallet.name}</span>
                  <Icon className="okd-ml-4" name={wallet.logo} />
                </a>
              );
            }
            return (
              <button
                onClick={() => tryActivation(wallet.connector, wallet)}
                key={wallet.name}
                className="okd-flex okd-items-center okd-justify-between okd-p-4 okd-font-medium okd-text-gray-900 okd-rounded okd-border okd-border-gray-200 focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 focus:okd-ring-offset-white focus:okd-outline-none hover:okd-bg-gray-50"
              >
                <span>{wallet.name}</span>
                <Icon className="okd-ml-4" name={wallet.logo} />
              </button>
            );
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
};

WalletSelector.defaultProps = defaultProps;

export default WalletSelector;
