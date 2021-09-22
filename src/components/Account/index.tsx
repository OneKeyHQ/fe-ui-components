import React from "react";
import cx from "classnames";
import Address from "../Address";
import Avatar from "../Avatar";

export type AccountProps = {
  /**
   * 地址
   */
  address: string;
  /**
   * 代币数量
   */
  value?: string;
  /**
   * 代币符号
   */
  symbol?: string;
  /**
   * 账户操作
   */
  action?: React.ReactNode;
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
  value,
  symbol,
  address,
  label,
  action,
  children,
  className,
  ...restProps
}) => {
  return (
    <div
      className={cx(
        "okd-w-full okd-bg-white hover:okd-bg-gray-100 okd-flex okd-items-center okd-justify-between okd-p-3",
        className
      )}
    >
      <div className="okd-flex okd-items-center">
        <div className="okd-w-8 okd-h-8 okd-overflow-hidden">
          <Avatar address={address} size={32}></Avatar>
        </div>
        <div className="okd-ml-2">
          {!!label ? (
            <div>
              <p className="okd-text-gray-900 okd-font-medium okd-text-base okd-leading-5">
                {label}
              </p>
              {!!value ? (
                <p className="okd-text-gray-400 okd-font-medium okd-text-sm okd-leading-4">
                  {`${value} ${symbol}`}
                </p>
              ) : (
                <Address
                  address={address}
                  short
                  className="okd-text-gray-400 okd-font-medium okd-text-sm okd-leading-4"
                ></Address>
              )}
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
      {!!action && React.isValidElement(action) && <>{action}</>}
    </div>
  );
};

Account.displayName = "Account";
Account.defaultProps = defaultProps;

export default Account;
