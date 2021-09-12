import React, { FC, useCallback, useState } from "react";
import cx, { Argument } from "classnames";
import Token, { TokenProps } from "../Token";

type TokenListItemProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 是否显示汇率
   */
  rate?: string;
  /**
   * 是否为当前所选
   */
  current?: boolean;
  /**
   * Token 的 props
   */
  token?: TokenProps;
  /**
   * 所属 token 的余额
   */
  balance?: number;
  /**
   * 状态改变回调函数
   */
  onChange?: (status: boolean) => void;
};

const defaultProps = {
  balance: 0,
} as const;

const TokenListItem: FC<TokenListItemProps> = ({
  className,
  rate,
  current,
  token,
  balance,
  onChange,
  ...rest
}) => {
  const [status, setStatus] = useState(false);
  const isCurrent = current ?? status;

  const handleClick = useCallback(() => {
    onChange?.(!isCurrent);
    setStatus(!isCurrent);
  }, [onChange, isCurrent]);

  return (
    <button
      className={cx(
        "okd-flex okd-items-center okd-justify-between okd-w-full",
        "focus:okd-outline-none focus:okd-border-brand-500",
        "okd-p-3.5 sm:okd-px-[22px] okd-border-2 okd-border-transparent",
        "disabled:okd-opacity-50 disabled:okd-cursor-not-allowed",
        !isCurrent ? "hover:okd-bg-gray-50 hover:okd-border-gray-50" : "",
        !!className && className
      )}
      disabled={isCurrent}
      onClick={handleClick}
      {...rest}
    >
      <Token size="lg" {...token} />
      <div
        className={cx(
          !!rate ? "okd-text-sm" : "okd-text-base",
          "okd-text-gray-900 okd-font-medium okd-text-right"
        )}
      >
        {balance}
        {!!rate && (
          <div className="okd-text-gray-500 okd-font-normal">{rate}</div>
        )}
      </div>
    </button>
  );
};

TokenListItem.defaultProps = defaultProps;

export default TokenListItem;
