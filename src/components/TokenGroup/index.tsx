import React, { FC } from "react";
import cx from "classnames";
import Token from "../Token";

type TokenGroupProps = {
  /**
   * Token 列表数组
   */
  list?: Array<string>;
  /**
   * 尺寸大小
   */
  size?: 6 | 8 | 10;
  /**
   * 是否显示 Token 所属链
   */
  chain?: boolean;
  /**
   * Token 所属链的 url
   */
  chainUrl?: string;
};

const defaultProps = {
  size: 6,
} as const;

const TokenGroup: FC<TokenGroupProps> = ({ list, size, chain, chainUrl }) => {
  return (
    <div className={cx("okd-relative okd-inline-flex")}>
      <div
        className={cx("okd-inline-flex", {
          "okd--space-x-1": size === 6,
          "okd--space-x-2": size === 8 || size === 10,
        })}
      >
        {!!list &&
          list.map((url, i) => (
            <Token
              className="okd-ring-2 okd-ring-white first:okd-ring-transparent"
              key={i}
              src={url}
              size={
                (size === 6 && 24) || (size === 8 && 32) || (size === 10 && 40)
              }
            />
          ))}
      </div>
      {!!chain && (
        <Token
          className={cx("okd-absolute okd-ring-2 okd-ring-white", {
            "okd--top-1 okd--right-1": size === 6,
            "okd-top-[-5px] okd-right-[-5px]": size === 8,
            "okd--top-1.5 okd--right-1.5": size === 10,
          })}
          src={chainUrl}
          size={(size === 6 && 12) || (size === 8 && 16) || (size === 10 && 20)}
        />
      )}
    </div>
  );
};

TokenGroup.defaultProps = defaultProps;

export default TokenGroup;
