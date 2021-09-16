import React, { FC } from "react";
import cx from "classnames";
import JazzIcon from "react-jazzicon";
import ImageFallback from "react-image-fallback";
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
  size?: 20 | 24 | 32 | 40 | 48 | 56;
};

const defaultProps = {
  size: 32,
} as const;

const Avatar: FC<AvatarProps> = ({ address, size, logoUrl }) => {
  const seed = parseInt(address.slice(2, 10), 16);

  return (
    <div className={cx("okd-overflow-hidden okd-inline-block")}>
      {/* <JazzIcon diameter={size} seed={seed} /> */}
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
              overflow: "hidden",
            }}
            diameter={size}
            seed={seed}
          />
        }
        alt="avatar"
        className={cx("", {
          rounded: "rounded-full overflow-hidden",
        })}
        style={{ minWidth: size, minHeight: size }}
      />
    </div>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
