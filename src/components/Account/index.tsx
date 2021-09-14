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
    <div className="okd-w-full okd-bg-white hover:okd-bg-gray-100 okd-flex okd-items-center">
      <Avatar address={address}></Avatar>
      <div className="okd-ml-2">
        {!!label ? (
          <div>
            <p>{label}</p>
            <Address address={address} short></Address>
          </div>
        ) : (
          <div>
            <Address address={address} short></Address>
          </div>
        )}
      </div>
    </div>
  );
};

Account.displayName = "Account";
Account.defaultProps = defaultProps;

export default Account;
