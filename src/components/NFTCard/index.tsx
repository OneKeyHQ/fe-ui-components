import React, { useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import cx from "classnames";

import Card from "../Card";
import { useRef } from "react";

const StackImage = ({
  total,
  src,
  index,
  current,
  isHovering,
  onHover,
  size = 120,
}) => {
  const space = 66;
  const offset = 20;
  const scale = 0.96;
  const isActive = index === current;
  const initialRight = (total - index - 1) * space - offset;
  const ref = useRef(initialRight);

  return (
    <div
      className="okd-absolute okd--bottom-8 okd-cursor-pointer"
      style={{
        right: isHovering ? ref.current * scale : ref.current,
        zIndex: isActive ? total : "initial",
      }}
      onMouseEnter={() => {
        onHover(index);
      }}
      onMouseLeave={() => {
        onHover(undefined);
      }}
    >
      <div
        className={cx(
          "okd-flex okd-justify-center okd-items-center okd-p-1 okd-border okd-border-gray-200 okd-rounded",
          "okd-bg-white okd-shadow-sm",
          "okd-transform okd-rotate-[-15deg] okd-transition-all okd-duration-100",
          isActive && "okd--translate-y-10"
        )}
        style={{ width: size, height: size }}
      >
        <div
          className={cx(
            "okd-bg-white okd-absolute okd-inset-0 okd-opacity-0 okd-z-50 okd-transition-opacity",
            isHovering && !isActive && "okd-opacity-40"
          )}
        />
        <img
          src={src}
          style={{ width: size * 0.9, height: size * 0.9 }}
          className="okd-rounded-sm okd-box-border okd-w-[108px] okd-h-[108px]"
          alt="OneKey NFT pets"
        />
      </div>
    </div>
  );
};

export type NFTCardProps = {
  title?: ReactNode;
  subTitle?: ReactNode;
  sources?: string[];
  className?: string;
  action?: ReactNode;
  imageSize?: number;
};

/**
 * 用于展示所拥有的 NFT 宠物封面 与 动画，可自定义标题和动作信息
 */
const NFTCard: FC<NFTCardProps> = ({
  sources,
  title,
  subTitle,
  className,
  action,
  imageSize,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentHoverIndex, setCurrentHoverIndex] = useState<number>();

  const imagesNode = useMemo(() => {
    // Maximum 5 stack images
    const images = sources?.slice(0, 5).map((src, index) => (
      <StackImage
        total={sources.length}
        src={src}
        index={index}
        current={currentHoverIndex}
        isHovering={isHovering}
        size={imageSize}
        onHover={(index?: number) => {
          setCurrentHoverIndex(index);
        }}
      />
    ));

    return images;
  }, [currentHoverIndex, imageSize, isHovering, sources]);

  return (
    <Card className={cx("okd-relative okd-overflow-hidden okd-w-full", className)}>
      <div className="okd-relative okd-z-[1000] okd-flex okd-flex-col okd-min-h-[160px] okd-w-[fit-content]">
        <div>{title}</div>
        <div>{subTitle}</div>
        {!!action && <div className="okd-mt-auto">{action}</div>}
      </div>
      <div
        // className="okd-float-right"
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        {imagesNode}
      </div>
    </Card>
  );
};

export default NFTCard;
