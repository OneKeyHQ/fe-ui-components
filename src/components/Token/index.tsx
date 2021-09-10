import React, { FC } from "react";
import cx from "classnames";

import Image from "../Image";
import Icon from "../Icon";

export type TokenProps = {
  /**
   * Token src
   */
  src?: string;
  /**
   * 尺寸大小，分别对应 `16px` `20px` `24px` `32px` `40px` `48px` `56px`
   */
  size?: number | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
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
  size: "md",
} as const;

const Token: FC<TokenProps> = ({
  src,
  size,
  className,
  chain,
  name,
  description,
}) => {
  return (
    <div
      className={cx(
        size === "xs" || size === "sm" ? "" : "okd-items-center",
        "okd-inline-flex"
      )}
    >
      <div
        className={cx(
          "okd-inline-flex okd-rounded-full",
          size === "xs" ? "okd-w-4 okd-h-4" : "",
          size === "sm" ? "okd-w-5 okd-h-5" : "",
          size === "md" ? "okd-w-6 okd-h-6" : "",
          size === "lg" ? "okd-w-8 okd-h-8" : "",
          size === "xl" ? "okd-w-10 okd-h-10" : "",
          size === "2xl" ? "okd-w-12 okd-h-12" : "",
          size === "3xl" ? "okd-w-14 okd-h-14" : "",
          !src ? "okd-bg-gray-100" : "",
          !!className && className
        )}
        style={
          typeof size === "number"
            ? {
                height: size + "px",
                width: size + "px",
              }
            : {}
        }
      >
        {!!(src || chain) ? (
          <Image
            src={
              chain
                ? `https://onekey-asset.com/assets/${chain}/${chain}.png`
                : src
            }
            alt="Token"
          />
        ) : (
          <Icon
            className="okd-w-full okd-h-full okd-text-gray-400"
            name="QuestionMarkOutline"
          />
        )}
      </div>
      {!!(name || description) && (
        <div
          className={cx(
            size === "xs" || size === "sm" ? "okd-ml-2" : "",
            size === "md" || size === "lg" || size === "xl" ? "okd-ml-3" : "",
            size === "2xl" || size === "3xl" ? "okd-ml-4" : "",
            ""
          )}
        >
          {!!name && (
            <p
              className={cx(
                size === "xs" ? "okd-text-xs" : "",
                size === "sm" || size === "md" ? "okd-text-sm" : "",
                size === "lg"
                  ? !!description
                    ? "okd-text-sm"
                    : "okd-text-base"
                  : "",
                size === "xl" ? "okd-text-base" : "",
                size === "2xl" ? "okd-text-lg" : "",
                size === "3xl" ? "okd-text-xl" : "",
                "okd-font-medium okd-text-gray-900"
              )}
            >
              {name}
            </p>
          )}
          {!!description && (
            <p
              className={cx(
                size === "xs" || size === "sm" ? "okd-text-xs" : "okd-text-sm",
                "okd-text-gray-500"
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

Token.defaultProps = defaultProps;

export default Token;
