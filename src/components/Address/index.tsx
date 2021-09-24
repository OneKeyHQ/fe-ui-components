import React from "react";
import cx from "classnames";
import { shortenAddress } from "../utils";

export type AddressProps = {
  /**
   * 地址
   */
  address: string;
  /**
   * 是否缩写，默认为 false
   */
  short?: boolean;
  /**
   * 传入 Address 组件的样式名称
   */
  className?: string;
};

const defaultProps = {
  short: false,
} as const;

/**
 * Address 是一个适用于展示 区块链地址 的组件
 */
export const Address: React.FC<AddressProps> = ({
  address,
  short,
  children,
  className,
  ...restProps
}) => {
  let textContent = address || children;

  if (short) {
    textContent = shortenAddress(textContent);
  }

  return (
    <p
      className={cx("okd-font-mono", !!className ? className : null)}
      {...restProps}
    >
      {textContent}
    </p>
  );
};

Address.displayName = "Address";
Address.defaultProps = defaultProps;

export default Address;
