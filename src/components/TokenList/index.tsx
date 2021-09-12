import React, { FC } from "react";
import cx, { Argument } from "classnames";

type TokenListProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const TokenList: FC<TokenListProps> = ({ className, ...rest }) => {
  return (
    <div className={cx("", !!className && className)} {...rest}>
      <div>...</div>
    </div>
  );
};

TokenList.defaultProps = defaultProps;

export default TokenList;
