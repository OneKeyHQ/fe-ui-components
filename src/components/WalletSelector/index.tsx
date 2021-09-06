import React, { FC } from "react";
import cx, { Argument } from "classnames";
import Modal from "../Modal";

const wallets = [
  {
    name: "OneKey",
    logo: "",
  },
  {
    name: "MetaMask",
    logo: "",
  },
  {
    name: "WalletConnect",
    logo: "",
  },
  {
    name: "Coinbase Wallet",
    logo: "",
  },
];

type WalletSelectorProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /** 是否可见 */
  visible?: boolean;
  /** 点击模态框遮罩时或键盘按下 Esc 时的回调 */
  onClose: (v: boolean) => void;
};

const defaultProps = {} as const;

const WalletSelector: FC<WalletSelectorProps> = ({
  className,
  visible,
  onClose,
}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Modal.Header title="Connect Wallet" onClose={onClose} />
      <Modal.Body>
        <div className="okd-flex okd-flex-col okd-space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              className="okd-flex okd-items-center okd-justify-between okd-p-4 okd-font-medium okd-text-gray-900 okd-rounded okd-border okd-border-gray-200 focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 focus:okd-ring-offset-white focus:okd-outline-none hover:okd-bg-gray-50"
            >
              <span>{wallet.name}</span>
              <img src={wallet.logo} alt="Logo of current wallet" />
            </button>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

WalletSelector.defaultProps = defaultProps;

export default WalletSelector;
