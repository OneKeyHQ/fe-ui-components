import React, { FC, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { renderIcon } from "@download/blockies";

type AvatarProps = {
  /**
   * 生成 blockies 头像的地址数据，或字符串种子
   */
  address: string;
  /**
   * 图像尺寸大小
   */
  size?: 5 | 6 | 8 | 10 | 12 | 14;
  /**
   * 是否展示为圆形
   */
  circular?: boolean;
  /**
   * 默认加载失败或 canvas 渲染失败提示文案
   */
  alt?: string;
};

const defaultProps = {
  size: 5,
  circular: true,
} as const;

const Avatar: FC<AvatarProps> = ({ address, size, alt, circular }) => {
  const [dataUrl, setDataUrl] = useState<string>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    renderIcon({ seed: address.toLowerCase() }, canvas);
    const updatedDataUrl = canvas ? canvas.toDataURL() : undefined;

    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl);
    }
  }, [dataUrl, address]);

  return (
    <div
      className={cx("okd-overflow-hidden okd-inline-block", {
        "okd-rounded-full": circular,
      })}
    >
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <img
        src={dataUrl}
        className={cx({
          "okd-w-5 okd-h-5": (size === 5),
          "okd-w-6 okd-h-6": (size === 6),
          "okd-w-8 okd-h-8": (size === 8),
          "okd-w-10 okd-h-10": (size === 10),
          "okd-w-12 okd-h-12": (size === 12),
          "okd-w-14 okd-h-14": (size === 14),
        })}
        alt={alt || ""}
      />
    </div>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
