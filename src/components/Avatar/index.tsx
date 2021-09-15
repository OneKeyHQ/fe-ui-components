import React, { FC, useEffect, useRef } from "react";
import cx from "classnames";
import jazzicon from 'jazzicon';

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
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    if (address && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild(jazzicon(size, parseInt(address.slice(2, 10), 16)));
    }
  }, [address, size]);

  return (
    <div className={cx("okd-overflow-hidden okd-inline-block")}>
      <div
        ref={ref}
        className={cx({
          "okd-w-5 okd-h-5": (size === 20),
          "okd-w-6 okd-h-6": (size === 24),
          "okd-w-8 okd-h-8": (size === 32),
          "okd-w-10 okd-h-10": (size === 40),
          "okd-w-12 okd-h-12": (size === 48),
          "okd-w-14 okd-h-14": (size === 56),
        })}
      />
    </div>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
