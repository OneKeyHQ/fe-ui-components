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
  diameter?: number;
  /**
   * 是否展示为圆形
   */
  round?: boolean;
  /**
   * 默认加载失败或 canvas 渲染失败提示文案
   */
  alt?: string;
};

const defaultProps = {
  diameter: 32,
  round: false,
} as const;

const Avatar: FC<AvatarProps> = ({ address, diameter, alt, round }) => {
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
      className={cx("overflow-hidden inline-block", {
        "rounded-full": round,
      })}
    >
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <img src={dataUrl} height={diameter} width={diameter} alt={alt || ""} />
    </div>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
