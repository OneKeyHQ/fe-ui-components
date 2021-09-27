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
  /**
   * 是否显示分割线，默认为 false
   */
  divider?: boolean;
  /**
   * Token 的尺寸
   */
  tokenSize?: number | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /**
   * 是否可激活
   */
  activatable?: boolean;
};

const defaultProps = {
  divider: false,
  tokenSize: "lg",
} as const;

const TokenList: FC<TokenListProps> = ({
  className,
  list,
  divider,
  tokenSize,
  activatable,
  ...rest
}) => {
  return (
    <div
      className={cx(
        divider ? "okd-divide-y okd-divide-gray-200" : "",
        !!className && className,
        ""
      )}
      {...rest}
    >
      {!!list.length &&
        list.map((item, i) => {
          return (
            <Fragment key={i}>
              <TokenListItem
                token={{
                  src: item.token.src,
                  name: item.token.name,
                  description: item.token.description,
                  size: tokenSize,
                }}
                balance={item.balance}
                value={item.value}
                actions={item.actions}
                activatable={activatable}
                onClick={item.onClick}
              />
            </Fragment>
          );
        })}
    </div>
  );
};

TokenList.defaultProps = defaultProps;

export default TokenList;
