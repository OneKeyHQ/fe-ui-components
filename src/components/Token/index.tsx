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
   * 链的 symbol
   */
  chain?: string;
};

const defaultProps = {
  size: 24,
} as const;

const Token: FC<TokenProps> = ({ src, size, className, chain }) => {
  return (
    <div
      className={cx(
        "okd-inline-flex okd-rounded-full okd-overflow-hidden",
        {
          "okd-bg-gray-100": !src,
        },
        !!className && className
      )}
      style={{width: size, height: size}}
    >
      {(src || chain) ? (
        <Image src={chain ? `https://onekey-asset.com/assets/${chain}/${chain}.png` : src} alt="Token" />
      ) : (
        <Icon
          className="okd-w-full okd-h-full okd-text-gray-400"
          name="QuestionMarkOutline"
        />
      )}
    </div>
  );
};

Token.defaultProps = defaultProps;

export default Token;
