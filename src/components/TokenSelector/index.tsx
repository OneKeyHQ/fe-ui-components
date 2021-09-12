import React, { FC } from "react";
import cx, { Argument } from "classnames";

type TokenSelectorProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const TokenSelector: FC<TokenSelectorProps> = ({ className, ...rest }) => {
  return (
    <div className={cx("", !!className && className)} {...rest}>
      <div>...</div>
    </div>
  );
};

TokenSelector.defaultProps = defaultProps;

export default TokenSelector;
