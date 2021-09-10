import React, { FC } from "react";
import cx from "classnames";

import Image from '../Image';
import Icon from "../Icon";

export type TokenProps = {
  /**
   * Token src
   */
  src?: string;
  /**
   * 尺寸大小
   */
  size?: number;
  /**
   * 设置额外的 class
   */
  className?: string | null;
  /**
   * 链的 symbol，提供 chain 之后就可以默认使用 cdn 的 chain 的图标
   */
  chain?: string;
  /**
   * 当前 token 右侧展示的文案
   */
  name?: string;
  /**
   * 当前 token 右侧展示的子文案
   */
  description?: string;
};

const defaultProps = {
  size: 24,
} as const;

const Token: FC<TokenProps> = ({ src, size, className, chain, name, description }) => {
  return (
    <div className="okd-inline-flex okd-items-center">
      <div
        className={cx(
          "okd-inline-flex okd-rounded-full",
          {
            "okd-bg-gray-100": !src,
          },
          !!className && className
        )}
        style={{width: size, height: size}}
      >
        {!!(src || chain) ? (
          <Image src={chain ? `https://onekey-asset.com/assets/${chain}/${chain}.png` : src} alt="Token" />
        ) : (
          <Icon
            className="okd-w-full okd-h-full okd-text-gray-400"
            name="QuestionMarkOutline"
          />
        )}
      </div>
      {
        !!(name || description) && (
          <div className="okd-ml-4 okd-text-sm okd-inline-flex okd-flex-col okd-justify-center">
            {
              !!name && (
                <p className="okd-font-medium okd-text-gray-900">
                  <span>{name}</span>
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

Token.defaultProps = defaultProps;

export default Token;
