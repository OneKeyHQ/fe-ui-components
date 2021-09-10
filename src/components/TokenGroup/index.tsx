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
};

type TokenGroupProps = {
  /**
   * 单个 url 或是列表
   */
  sources?: string | TokenItem | string[] | TokenItem[];
  /**
   * 尺寸大小
   */
  size?: 6 | 8 | 10;
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
  size: 6,
} as const;

/** 断言为 TokenItem */
const isTokenItem = (c: TokenGroupProps['sources']): c is TokenItem => !!(typeof c === 'object' && !Array.isArray(c));

const buildProps = (sources: TokenGroupProps['sources']): TokenItem[] => {
  if (!sources) return [];
  if (typeof sources === 'string') {
    return [{ src: sources }];
  }
  if (isTokenItem(sources)) {
    return [sources];
  }
  return flatten(sources.map(buildProps));
}

const TokenGroup: FC<TokenGroupProps> = ({ size, cornerToken, sources, description }) => {
  const list = buildProps(sources);

  return (
    <div className="okd-inline-flex okd-items-center">
      <div className={cx("okd-relative okd-inline-flex")}>
        <div
          className={cx("okd-inline-flex", {
            "okd--space-x-1": size === 6,
            "okd--space-x-2": size === 8 || size === 10,
          })}
        >
          {!!list.length &&
            list.map((tokenItem, i) => (
              <Fragment key={i}>
                <Token
                  className="okd-ring-2 okd-ring-white first:okd-ring-transparent"
                  src={tokenItem.src}
                  chain={tokenItem.chain}
                  size={
                    (size === 6 && 24) || (size === 8 && 32) || (size === 10 && 40)
                  }
                />
              </Fragment>
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
      {
        !!(list.some(s => s.name) || description) && (
          <div className="okd-ml-4 okd-text-sm okd-inline-flex okd-flex-col okd-justify-center">
            {
              list.some(s => s.name) && (
                <p className="okd-font-medium okd-text-gray-900 okd-inline-flex okd-items-center">
                  {
                    list
                      .filter(l => !!l.name)
                      .map((token, index) => {
                        return (<Fragment key={index}>{index > 0 && (<span className="okd-mx-1 okd-font-normal okd-text-gray-500"> / </span>)}<span>{token.name}</span></Fragment>);
                      })
                  }
                </p>
              )
            }
            {!!description && (<span className="okd-text-gray-500">{description}</span>)}
          </div>
        )
      }
    </div>
  );
};

TokenGroup.defaultProps = defaultProps;

export default TokenGroup;
