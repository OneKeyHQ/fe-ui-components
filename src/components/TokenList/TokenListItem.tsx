import React, { FC, useCallback, useState, ReactNode } from "react";
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
  value?: string | ReactNode;
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
  balance?: number | ReactNode;
  /**
   * TokenListItem 的额外操作
   */
  actions?: ReactNode;
  /**
   * 是否可激活
   */
  activatable?: boolean;
  /**
   * 状态改变回调函数
   */
  onChange?: (status: boolean) => void;
  /**
   * 定义 TokenListItem 的点击事件
   */
  onClick?: () => void;
};

const defaultProps = {
  balance: 0,
} as const;

const TokenListItem: FC<TokenListItemProps> = ({
  className,
  value,
  current,
  token,
  balance,
  actions,
  activatable,
  onChange,
  onClick,
  ...rest
}) => {
  const [status, setStatus] = useState(false);
  const isCurrent = current ?? status;

  const handleActive = useCallback(() => {
    onChange?.(!isCurrent);
    setStatus(!isCurrent);
  }, [onChange, isCurrent]);

  return (
    <div
      className={cx(
        "okd-relative okd-flex okd-items-center okd-justify-between",
        "okd-px-4 okd-py-3 sm:okd-px-6 sm:okd-py-4",
        !!(activatable || onClick)
          ? isCurrent
            ? "okd-opacity-50"
            : "hover:okd-bg-gray-50 hover:okd-border-gray-50"
          : "",
        !!className && className
      )}
      {...rest}
    >
      {!!(activatable || onClick) && (
        <button
          className={cx(
            "okd-absolute okd-inset-0 okd-w-full disabled:okd-cursor-not-allowed",
            "focus:okd-outline-none focus:okd-border-brand-500",
            "okd-border-2 okd-border-transparent"
          )}
          disabled={isCurrent}
          onClick={activatable ? handleActive : onClick}
          aria-hidden="true"
        />
      )}
      <Token size="lg" {...token} />
      {!!(balance || value) && (
        <div
          className={cx(
            !!(balance && value) ? "okd-text-sm" : "okd-text-base",
            "okd-text-gray-900 okd-font-medium okd-text-right"
          )}
        >
          {!!balance && balance}
          {!!value && !!balance ? (
            <div className="okd-text-gray-500 okd-font-normal">{value}</div>
          ) : (
            value
          )}
        </div>
      )}
      {!!actions && <div className="okd-z-10">{actions}</div>}
    </div>
  );
};

TokenListItem.defaultProps = defaultProps;

export default TokenListItem;
