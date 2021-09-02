import React, { FC } from "react";
import cx, { Argument } from "classnames";

const TitleComponent: FC = ({ children }) => {
  return (
    <h2 className="okd-text-lg okd-leading-6 okd-font-medium okd-text-gray-900">
      {children}
    </h2>
  );
};

type CardProps = {
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

const Card: FC<CardProps> = ({
  title,
  actions,
  className,
  children,
  footer,
  ...rest
}) => {
  return (
    <div
      className={cx(
        "okd-bg-white okd-border okd-border-gray-200 okd-rounded okd-shadow-sm",
        !!className && className
      )}
      {...rest}
    >
      {/* // Header */}
      {!!(title || actions) && (
        <div
          className={cx(
            "px-4 okd-py-5 okd-border-b okd-border-gray-200 sm:okd-px-6"
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
      <div className={cx("okd-px-4 sm:okd-px-6 okd-py-6")}>{children}</div>

      {/* Footer */}
      <div
        className={cx(
          "px-4 okd-py-5 okd-border-t okd-border-gray-200 sm:okd-px-6"
        )}
      >
        {footer}
      </div>
    </div>
  );
};

Card.defaultProps = defaultProps;

export default Card;
