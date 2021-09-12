import React, { FC, Fragment } from "react";
import cx, { Argument } from "classnames";
import TokenListItem from "./TokenListItem";

type TokenListProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * token 列表
   */
  list?: Array<any>;
};

const defaultProps = {} as const;

const TokenList: FC<TokenListProps> = ({ className, list, ...rest }) => {
  return (
    <div className={cx("", !!className && className)} {...rest}>
      {!!list.length && list.map((token, i) => {
        return (
          <Fragment key={i}>
            <TokenListItem
              token={{
                src: token.src,
                name: token.name,
              }}
              balance={token.balance}
              rate={token.rate}
            />
          </Fragment>
        )
      })}
    </div>
  );
};

TokenList.defaultProps = defaultProps;

export default TokenList;
