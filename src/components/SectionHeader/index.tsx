import React, { FC, ReactNode } from "react";
import cx, { Argument } from "classnames";

export type SectionHeaderProps = {
  /**
   * 标题
   */
  title?: ReactNode;
  /**
   * 标题描述
   */
  description?: ReactNode;
  /**
   * 操作组件，在 Desktop 中放置在 `title` 右侧
   */
  actions?: ReactNode;
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const Title = ({ children }) => {
  return (
    <h3 className="okd-text-lg okd-font-medium okd-text-gray-900">
      {children}
    </h3>
  );
};

const Description = ({ children }) => {
  return (
    <p className={cx("okd-mt-1 okd-max-w-4xl okd-text-sm okd-text-gray-500")}>
      {children}
    </p>
  );
};

const SectionHeader: FC<SectionHeaderProps> = ({ title, description, actions, className }) => {
  return (
    <div
      className={cx(
        "sm:okd-flex okd-items-center okd-justify-between okd-mb-2",
        !!className && className
      )}
    >
      {/* Title */}
      {title && (
        <div className="sm:okd-w-0 okd-flex-1">
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </div>
      )}
      {/* Actions */}
      {actions && (
        <div className={cx("okd-mt-3 okd-flex sm:okd-mt-0 sm:okd-ml-4")}>
          {actions}
        </div>
      )}
    </div>
  );
};

SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
