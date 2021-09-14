import React from "react";
import Address from "../Address";
import Avatar from "../Avatar";

export type AccountProps = {
  /**
   * 地址
   */
  address: string;
  /**
   * label 账户名称
   */
  label?: string;
  /**
   * 传入 Account 组件的样式名称
   */
  className?: string;
};

const defaultProps = {
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
} as const;

/**
 * Account 是一个适用于展示 区块链账户 的组件
 */
export const Account: React.FC<AccountProps> = ({
  address,
  label,
  children,
  ...restProps
}) => {
  return (
    <div className="okd-w-full okd-bg-white hover:okd-bg-gray-100 okd-flex okd-items-center okd-p-3">
      <div className="okd-w-8 okd-h-8 okd-overflow-hidden">
        <Avatar address={address} size={32}></Avatar>
      </div>
      <div className="okd-ml-2">
        {!!label ? (
          <div>
            <p className="okd-text-gray-900 okd-font-medium okd-text-base okd-leading-5">
              {label}
            </p>
            <Address
              address={address}
              short
              className="okd-text-gray-400 okd-font-medium okd-text-sm okd-leading-4"
            ></Address>
          </div>
        ) : (
          <div>
            <Address
              address={address}
              short
              className="okd-text-gray-900 okd-font-medium okd-text-base okd-leading-5"
            ></Address>
          </div>
        )}
      </div>
    </div>
  );
};

Account.displayName = "Account";
Account.defaultProps = defaultProps;

export default Account;
