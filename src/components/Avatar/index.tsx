import React, { FC } from "react";
import cx, { Argument } from "classnames";
import JazzIcon from "react-jazzicon";
import ImageFallback from "../Image/react-image-fallback";
import { CDN_PREFIX } from "../utils/index";

type AvatarProps = {
  /**
   * 字符串种子
   */
  address: string;
  /**
   * avatar img src
   */
  logoUrl?: string;
  /**
   * 图像尺寸大小
   */
  size?: number | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /**
   * className 样式
   */
  className?: Argument
};

const defaultProps = {
  size: "lg",
} as const;

const Avatar: FC<AvatarProps> = ({ address, size, logoUrl, className }) => {
  const seed = parseInt(address.slice(2, 10), 16);

  return (
    <div className={cx("okd-inline-flex okd-overflow-hidden", className)}>
      <ImageFallback
        src={
          logoUrl ??
          `${CDN_PREFIX}/onekey/avatar/${address}?timestamp=${Date.now()}`
        }
        fallbackImage={
          <JazzIcon
            paperStyles={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
            diameter={
              typeof size === "number"
                ? size
                : size === "sm"
                ? 20
                : size === "md"
                ? 24
                : size === "lg"
                ? 32
                : size === "xl"
                ? 40
                : size === "2xl"
                ? 48
                : size === "3xl"
                ? 56
                : null
            }
            seed={seed}
          />
        }
        alt="avatar"
      />
    </div>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
