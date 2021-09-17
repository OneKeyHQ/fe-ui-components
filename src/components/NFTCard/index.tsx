import React, { isValidElement, ReactNode, useMemo } from "react";
import cx, { Argument } from "classnames";

import { Badge, Card, Image } from "..";

export type NFTCardProps = {
  /**
   * 封面图片对象，支持类型为 string 的 src 或 自定义图片 element
   */
  image?: ReactNode;
  /**
   * 标题
   */
  title?: ReactNode;
  /**
   * 当 title 为 string 时显示 NFT 使用的数量
   */
  amount?: number;
  /**
   * 描述
   */
  description?: ReactNode;
  /**
   * 底部显示
   */
  footer?: ReactNode;
  /**
   * 自定义 Card className 样式
   */
  className?: Argument;
  /**
   * 自定义 Card Body className 样式
   */
  bodyClassName?: Argument;
  /**
   * 自定义 footer className 样式
   */
  footerClassName?: Argument;
};

const NFTCard: React.FC<NFTCardProps> = ({
  image,
  title,
  amount,
  description,
  footer,
  className,
  bodyClassName,
  footerClassName,
}) => {
  const cover = useMemo(() => {
    return isValidElement(image) ? image : <Image src={image} />;
  }, [image]);

  const titleNode =
    title &&
    (isValidElement(title) ? (
      title
    ) : (
      <div className="okd-flex okd-items-center okd-justify-between">
        <h5 className="okd-text-base okd-font-medium okd-text-gray-900 okd-truncate">
          {title}
        </h5>
        {typeof amount !== "undefined" && (
          <Badge className="okd-ml-2">X {amount}</Badge>
        )}
      </div>
    ));

  const descriptionNode =
    description &&
    (isValidElement(description) ? (
      description
    ) : (
      <p className="okd-mt-1 okd-text-sm okd-text-gray-500">{description}</p>
    ));

  const footerNode =
    footer &&
    (isValidElement(footer) ? (
      footer
    ) : (
      <p
        className={cx("okd-text-xs okd-font-medium okd-mt-2", footerClassName)}
      >
        {footer}
      </p>
    ));

  return (
    <Card
      className={cx(
        "okd-mx-auto okd-flex okd-flex-col okd-overflow-hidden",
        className
      )}
      cover={cover}
      children={
        <Card.Body
          className={cx("okd-flex-1 okd-flex okd-flex-col", bodyClassName)}
        >
          <div className="okd-flex okd-flex-col okd-justify-between okd-flex-1">
            <div className="okd-flex-1">
              {titleNode}
              {descriptionNode}
            </div>
          </div>
          {footerNode}
        </Card.Body>
      }
    />
  );
};

export default NFTCard;
