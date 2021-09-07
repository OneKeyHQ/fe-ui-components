import React, { FC, useCallback, useState, useEffect, useRef, useMemo } from "react";
import { AbstractConnectorArguments } from "@web3-react/types";
import { AbstractConnector } from "@web3-react/abstract-connector";
import classNames from "classnames";

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
  /** @web3-react connector 配置 */
  connectorConfig?: AbstractConnectorArguments;
};

const defaultProps = {
  connectorConfig: {},
} as const;

const WALLET_VIEWS = {
  OPTIONS: "options",
  OPTIONS_SECONDARY: "options_secondary",
  ACCOUNT: "account",
  PENDING: "pending",
};

export function usePrevious<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const WalletSelector: FC<WalletSelectorProps> = ({
  visible,
  onClose,
  connectorConfig,
}) => {
  const intl = useIntl();
  const [pendingError, setPendingError] = useState<boolean>();
  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);
  const { active, account, connector, activate, error } = useWeb3React();
  const [pendingWallet, setPendingWallet] = useState<
    AbstractConnector | undefined
  >();

  const previousAccount = usePrevious(account);

  /** 新连接账户成功，则直接关闭 modal */
  useEffect(() => {
    if (account && !previousAccount && visible) {
      onClose();
    }
  }, [account, previousAccount, onClose, visible]);

  /** visible 改变时重置状态 */
  useEffect(() => {
    if (visible) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [visible]);

  /** 已连接时展示账户连接状态 */
  const activePrevious = usePrevious(active);
  const connectorPrevious = usePrevious(connector);
  useEffect(() => {
    if (
      visible &&
      ((active && !activePrevious) ||
        (connector && connector !== connectorPrevious && !error))
    ) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [
    setWalletView,
    active,
    error,
    connector,
    visible,
    activePrevious,
    connectorPrevious,
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const wallets = [
      {
        name: "OneKey",
        logo: "BrandLogoIllus",
        translationId: 'ui-components__connect__option_item__onekey',
        unloadTranslationId: 'ui-components__connect__option_item__install_onekey',
        connector: buildOneKeyConnector(connectorConfig),
        downloadLink: "https://onekey.so/plugin",
        hasLoad: !!(typeof window !== "undefined" && window.onekey),
      },
      {
        name: "MetaMask",
        logo: "MetamaskIllus",
        translationId: 'ui-components__connect__option_item__metamask',
        unloadTranslationId: 'ui-components__connect__option_item__install_metamask',
        connector: buildMetaMaskConnector(connectorConfig),
        downloadLink: "https://metamask.io/",
        hasLoad: !!(typeof window !== "undefined" && window.ethereum && !window.ethereum.isOneKey),
      },
    ] as const;

  const tryActivation = useCallback(
    async (
      connector: AbstractConnector | undefined
    ) => {
      if (!connector) return null;
      setWalletView(WALLET_VIEWS.PENDING);
      setPendingWallet(connector);

      /** switchProvider to active wallet */
      if (typeof window !== "undefined" && window.ethereum.switchProvider) {
        const wallet = wallets.find(wallet => wallet.connector === connector);
        window.ethereum.switchProvider(wallet.name.toLowerCase());
      }

      activate(connector, undefined, true)
        .catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(connector);
          } else {
            setPendingError(true);
          }
        });
    },
    [activate, wallets]
  );

  const title = useMemo(() => {
    if (walletView === WALLET_VIEWS.ACCOUNT) {
      if (account) {
        /** 账户 */
        return intl.formatMessage({id: 'ui-components__connect_account_literal'});
      } else {
        /** 连接钱包 */
        return intl.formatMessage({id: 'ui-components__connect_a_wallet'});
      }
    } else {
      return intl.formatMessage({id: 'ui-components__connect_back_literal'});
    }
  }, [walletView, account, intl]);

  const body = useMemo(() => {
    if (walletView === WALLET_VIEWS.PENDING) {
      if (!error) {
        return intl.formatMessage({id: 'ui-components__connect_wallet__connecting'});
      }
      return (
        <Button
          onClick={() => {
            setPendingError(false);
            connector && tryActivation(connector);
          }}
        >
          {intl.formatMessage({id: 'ui-components__connect_wallet__retry'})}
        </Button>
      );
    }

    if (error) {
      if (error instanceof UnsupportedChainIdError) {
        return (
          <>
            <FormattedMessage id="ui-components__connect_error_network_title" />
            <FormattedMessage id="ui-components__connect_error__wrong_network" />
          </>
        );
      }

      return (
        <>
          <FormattedMessage id="ui-components__connect_error_reject" />
        </>
      );
    }

    if (account && walletView === WALLET_VIEWS.ACCOUNT) {
      return (
        <>{account}</>
      );
    }

    return (
      wallets.map((wallet) => {
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
                <FormattedMessage id={wallet.unloadTranslationId} />
              </span>
              <Icon className="okd-ml-4" name={wallet.logo} />
            </Button>
          );
        }

        const isActiveConnection = !!connector && wallet.connector === connector;

        return (
          <Button
            block
            size="xl"
            onClick={() => tryActivation(wallet.connector)}
            key={wallet.name}
            className={classNames("okd-flex okd-items-center okd-justify-between !okd-p-4", {
              'okd-border okd-border-gray-200 okd-shadow-none': !isActiveConnection,
              'okd-ring-2 okd-ring-brand-500 okd-ring-offset-2 okd-ring-offset-white': isActiveConnection,
            })}
          >
            <span className="okd-text-gray-900 okd-inline-flex">
              <FormattedMessage id={wallet.translationId} />
            </span>
            <Icon className="okd-ml-4" name={wallet.logo} />
          </Button>
        );
      })
    )
  }, [walletView, error, connector, tryActivation, intl, wallets, account]);


  return (
    <Modal
      visible={visible}
      onClose={onClose}
      className="okd-w-full sm:okd-max-w-md"
    >
      <Modal.Header
        title={title}
        onClose={onClose}
      />
      <Modal.Body>
        <div className="max-w-full okd-flex okd-flex-col okd-space-y-3">
          {body}
        </div>
      </Modal.Body>
    </Modal>
  );
};

WalletSelector.defaultProps = defaultProps;

export default WalletSelector;
