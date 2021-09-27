import React, { FC } from "react";
import cx from "classnames";
import Address from "../Address";
import Avatar from "../Avatar";

export type AccountProps = {
  /**
   * 地址
   */
  address: string;
  /**
   * 账户余额
   */
  balance?: string;
  /**
   * 代币符号
   */
  symbol?: string;
  /**
   * account or token logo src
   */
  logoUrl?: string;
  /**
   * label 账户名称
   */
  label?: string;
  /**
   * 传入 Account 组件的样式名称
   */
  className?: string;
  /**
   * 组件大小，会影响 Avatar 及文本的大小
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};

const defaultProps = {
  size: "lg",
  address: "0xa3C6cA435B784ab686987Fe0850f7B75388b4551",
} as const;

/**
 * Account 是一个适用于展示 区块链账户 的组件
 */
const Account: FC<AccountProps> = ({
  balance,
  logoUrl,
  symbol,
  address,
  label,
  children,
  size,
  className,
  ...rest
}) => {
  return (
    <div
      className={cx(
        size === "sm" ? "okd-items-start" : "okd-items-center",
        "okd-inline-flex okd-text-left",
        className
      )}
      {...rest}
    >
      <Avatar address={address} size={size} logoUrl={logoUrl}></Avatar>
      <div
        className={cx(
          size === "sm" ? "okd-ml-2" : "",
          size === "md" || size === "lg" || size === "xl" ? "okd-ml-3" : "",
          size === "2xl" ? "okd-ml-4" : "",
          ""
        )}
      >
        {!!label && (
          <p
            className={cx("okd-text-gray-900 okd-font-medium", {
              "okd-text-sm": size === "sm" || size === "md" || size === "lg",
              "okd-text-base": size === "xl",
              "okd-text-lg": size === "2xl",
            })}
          >
            {label}
          </p>
        )}
        {!(label && balance) && (
          <Address
            className={cx(
              // text color
              label ? "okd-text-gray-500" : "okd-text-gray-900",
              // text size
              label
                ? balance
                  ? {}
                  : // label: true, balance: false
                  size === "sm"
                  ? "okd-text-xs"
                  : "okd-text-sm"
                : balance
                ? {
                    // label: false, balance: true
                    "okd-text-sm":
                      size === "sm" || size === "md" || size === "lg",
                    "okd-text-base": size === "xl",
                    "okd-text-lg": size === "2xl",
                  }
                : {
                    // label: false, balance: false
                    "okd-text-sm": size === "sm" || size === "md",
                    "okd-text-base": size === "lg" || size === "xl",
                    "okd-text-lg": size === "2xl",
                  }
            )}
            address={address}
            short
          />
        )}
        {!!balance && (
          <p
            className={cx(
              "okd-text-gray-500",
              size === "sm" ? "okd-text-xs" : "okd-text-sm"
            )}
          >
            {balance} {symbol}
          </p>
        )}
      </div>
    </div>
  );
};

Account.displayName = "Account";
Account.defaultProps = defaultProps;

export default Account;
