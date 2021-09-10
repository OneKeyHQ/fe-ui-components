import React, { FC } from "react";
import cx from "classnames";
import Token, { TokenProps } from "../Token";

type TokenGroupProps = {
  /**
   * 单个 url 或是列表
   */
  url?: string | string[];
  /**
   * 尺寸大小
   */
  size?: 6 | 8 | 10;
  /**
   * 角标 Token 的 props
   */
  cornerToken?: TokenProps;
};

const defaultProps = {
  size: 6,
} as const;

const TokenGroup: FC<TokenGroupProps> = ({ size, cornerToken, url }) => {
  const list = Array.isArray(url) ? url : [url];

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
      {!!cornerToken && (
        <Token
          className={cx("okd-absolute okd-ring-2 okd-ring-white", {
            "okd--top-1 okd--right-1": size === 6,
            "okd-top-[-5px] okd-right-[-5px]": size === 8,
            "okd--top-1.5 okd--right-1.5": size === 10,
          })}
          size={(size === 6 && 12) || (size === 8 && 16) || (size === 10 && 20)}
          {...cornerToken}
        />
      )}
    </div>
  );
};

TokenGroup.defaultProps = defaultProps;

export default TokenGroup;
