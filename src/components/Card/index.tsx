import React, { FC, isValidElement } from "react";
import cx, { Argument } from "classnames";
import Body from "./Body";

const TitleComponent: FC = ({ children }) => {
  return (
    <h2 className="okd-text-lg okd-leading-6 okd-font-medium okd-text-gray-900">
      {children}
    </h2>
  );
};

type CardProps = {
  /**
   * 卡片图片，接受一个 ReactNode
   */
  cover?: React.ReactNode;
  /**
   * 卡片标题
   */
  title?: string | React.ReactNode;
  /**
   * 头部动作
   */
  actions?: React.ReactNode;
  /**
   * 底部 自定义 Node
   */
  footer?: React.ReactNode;
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const Card: FC<CardProps> & { Body } = ({
  cover,
  title,
  actions,
  className,
  children,
  footer,
  ...rest
}) => {
  const bodyNode =
    isValidElement(children) &&
    (children.type === Body || (children.type as typeof Body).name === "Body") ? (
      children
    ) : (
      <Body>{children}</Body>
    );

  return (
    <div
      className={cx(
        "okd-bg-white okd-border okd-border-gray-200 okd-rounded okd-shadow-sm",
        !!className && className
      )}
      {...rest}
    >
      {/* Cover */}
      {!!cover && (
        <div className="okd-bg-gray-200 okd-aspect-w-1 okd-aspect-h-1 okd-rounded-md okd-overflow-hidden group-hover:okd-opacity-75">
          {cover}
        </div>
      )}
      {/* // Header */}
      {!!(title || actions) && (
        <div
          className={cx(
            "okd-px-4 okd-py-5 okd-border-b okd-border-gray-200 sm:okd-px-6"
          )}
        >
          <div className="okd-flex okd-justify-between okd-items-center okd-flex-wrap sm:okd-flex-nowrap okd--ml-4 okd--mt-4">
            {title && (
              <div className="okd-ml-4 okd-mt-4 okd-flex-1">
                <TitleComponent>{title}</TitleComponent>
              </div>
            )}
            {actions && (
              <div className="okd-ml-4 okd-mt-4 okd-flex-shrink-0">
                {actions}
              </div>
            )}
          </div>
        </div>
      )}
      {/* // Body */}
      {bodyNode}

      {/* Footer */}
      {!!footer && (
        <div
          className={cx(
            "okd-px-4 okd-py-5 okd-border-t okd-border-gray-200 sm:okd-px-6"
          )}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

Card.defaultProps = defaultProps;
Card.Body = Body;

export default Card;
