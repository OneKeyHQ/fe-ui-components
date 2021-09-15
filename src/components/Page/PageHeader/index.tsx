import React, { FC, ReactNode } from "react";
import cx, { Argument } from "classnames";
import Button from "../../Button";

export type PageHeaderProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 面包屑导航
   */
  breadcrubms?: Array<any>;
  /**
   * 设置额外的 class
   */
  actions?: ReactNode;
  /**
   * 标题之前的缩略图
   */
  thumbnail?: ReactNode;
  /**
   * 页面标题
   */
  title?: string;
};

const defaultProps = {} as const;

const PageHeader: FC<PageHeaderProps> = ({
  className,
  children,
  actions,
  breadcrubms,
  thumbnail,
  title,
  ...rest
}) => {
  return (
    <header
      className={cx(
        "okd-flex-shrink-0 okd-border-b okd-border-gray-200",
        !!className && className
      )}
      {...rest}
    >
      <div className="okd-p-4 lg:okd-px-8">
        <div className="okd-flex okd-flex-wrap okd-items-center okd-justify-between okd-max-w-6xl okd-mx-auto">
          <div className="okd-flex okd-items-center okd-min-w-0">
            {!!breadcrubms?.length && breadcrubms.length === 1 ? (
              <nav className="okd-flex okd-items-center okd-justify-center okd-w-5 okd-h-5 okd-mr-5">
                <Button
                  href={breadcrubms[0].url}
                  as="a"
                  leadingIcon="ArrowLeftSolid"
                  type="plain"
                  circular
                >
                  <span className="okd-sr-only">{breadcrubms[0].content}</span>
                </Button>
              </nav>
            ) : null}
            <div className="okd-flex okd-items-center okd-min-w-0 okd-space-x-3">
              {thumbnail && (
                <div className="okd-inline-flex okd-flex-shrink-0">
                  {thumbnail}
                </div>
              )}
              <h1 className="okd-text-lg okd-font-medium okd-text-gray-900 okd-truncate">
                {title}
              </h1>
            </div>
          </div>

          {actions && <div>{actions}</div>}
        </div>
      </div>
    </header>
  );
};

PageHeader.defaultProps = defaultProps;

export default PageHeader;
