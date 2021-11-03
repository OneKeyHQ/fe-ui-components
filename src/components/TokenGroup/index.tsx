import React, { FC, Fragment } from "react";
import cx from "classnames";
import { flatten } from "lodash";

import Token, { TokenProps } from "../Token";

type TokenItem = {
  /** 右侧展示的 label */
  name?: string;
  /** 图片 url */
  src?: string;
  /** chain 的名称 */
  chain?: string;
  /** 代币合约地址 */
  address?: string;
};

type TokenGroupProps = {
  /**
   * 单个 url 或是列表
   */
  sources?: string | TokenItem | string[] | TokenItem[];
  /**
   * 尺寸大小
   */
  size?: "md" | "lg" | "xl";
  /**
   * 角标 Token 的 props
   */
  cornerToken?: TokenProps;
  /**
   * 右侧底部副标题描述
   */
  description?: string;
};

const defaultProps = {
  size: "md",
} as const;

/** 断言为 TokenItem */
const isTokenItem = (c: TokenGroupProps["sources"]): c is TokenItem =>
  !!(typeof c === "object" && !Array.isArray(c));

const buildProps = (sources: TokenGroupProps["sources"]): TokenItem[] => {
  if (!sources) return [];
  if (typeof sources === "string") {
    return [{ src: sources }];
  }
  if (isTokenItem(sources)) {
    return [sources];
  }
  return flatten(sources.map(buildProps));
};

const TokenGroup: FC<TokenGroupProps> = ({
  size,
  cornerToken,
  sources,
  description,
}) => {
  const list = buildProps(sources);

  return (
    <div className="okd-inline-flex okd-items-center">
      <div className={cx("okd-relative okd-inline-flex")}>
        <div
          className={cx("okd-inline-flex", {
            "okd--space-x-1": size === "md",
            "okd--space-x-2": size === "lg" || size === "xl",
          })}
        >
          {!!list.length &&
            list.map((tokenItem, i) => (
              <Fragment key={i}>
                <Token
                  className="okd-ring-2 okd-ring-white"
                  { ...tokenItem }
                  src={tokenItem.src}
                  chain={tokenItem.chain}
                  address={tokenItem.address}
                  size={size}
                />
              </Fragment>
            ))}
        </div>
        {!!cornerToken && (
          <Token
            className={cx("okd-absolute okd-ring-2 okd-ring-white", {
              "okd--top-1 okd--right-1": size === "md",
              "okd-top-[-5px] okd-right-[-5px]": size === "lg",
              "okd--top-1.5 okd--right-1.5": size === "xl",
            })}
            size={
              (size === "md" && 12) ||
              (size === "lg" && 16) ||
              (size === "xl" && 20)
            }
            {...cornerToken}
          />
        )}
      </div>
      {!!(list.some((s) => s.name) || description) && (
        <div className={cx(size === "md" ? "okd-ml-3" : "okd-ml-4")}>
          {list.some((s) => s.name) && (
            <p
              className={cx(
                size === "xl" ? "okd-text-base" : "okd-text-sm",
                "okd-font-medium okd-text-gray-900"
              )}
            >
              {list
                .filter((l) => !!l.name)
                .map((token, index) => {
                  return (
                    <Fragment key={index}>
                      {index > 0 && (
                        <span className="okd-mx-1 okd-font-normal okd-text-gray-500">
                          /
                        </span>
                      )}
                      <span>{token.name}</span>
                    </Fragment>
                  );
                })}
            </p>
          )}
          {!!description && (
            <p className="okd-text-sm okd-text-gray-500">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

TokenGroup.defaultProps = defaultProps;

export default TokenGroup;
