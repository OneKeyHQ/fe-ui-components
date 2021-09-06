import React, { FC } from "react";
import cx from "classnames";
import JazzIcon from "react-jazzicon";

type AvatarProps = {
  /**
   * 字符串种子
   */
  address: string;
  /**
   * 图像尺寸大小
   */
  size?: 20 | 24 | 32 | 40 | 48 | 56;
};

const defaultProps = {
  size: 32,
} as const;

const Avatar: FC<AvatarProps> = ({ address, size }) => {
  return (
    <div className={cx("okd-overflow-hidden okd-inline-block")}>
      <JazzIcon diameter={size} seed={address} />
    </div>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
