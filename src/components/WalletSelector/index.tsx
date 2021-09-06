import React, { FC } from "react";
import Modal from "../Modal";
import Icon from "../Icon";

const wallets = [
  {
    name: "OneKey",
    logo: "BrandLogoIllus"
  },
  {
    name: "MetaMask",
    logo: "MetamaskIllus"
  },
] as const;

type WalletSelectorProps = {
  /** 是否可见 */
  visible?: boolean;
  /** 点击模态框遮罩时或键盘按下 Esc 时的回调 */
  onClose: () => void;
};

const defaultProps = {} as const;

const WalletSelector: FC<WalletSelectorProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal visible={visible} onClose={onClose} className="okd-w-full sm:okd-max-w-md">
      <Modal.Header title="Connect Wallet" onClose={onClose} />
      <Modal.Body>
        <div className="max-w-full okd-flex okd-flex-col okd-space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              className="okd-flex okd-items-center okd-justify-between okd-p-4 okd-font-medium okd-text-gray-900 okd-rounded okd-border okd-border-gray-200 focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 focus:okd-ring-offset-white focus:okd-outline-none hover:okd-bg-gray-50"
            >
              <span>{wallet.name}</span>
              <Icon className="okd-ml-4" name={wallet.logo} />
            </button>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

WalletSelector.defaultProps = defaultProps;

export default WalletSelector;
