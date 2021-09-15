import React, { FC, Fragment } from "react";
import cx, { Argument } from "classnames";
import ItemWrapper from "./ItemWrapper";

type DescriptionItemProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 设置额外的 class
   */
  list?: Array<any>;
};

const defaultProps = {} as const;

const DescriptionItem: FC<DescriptionItemProps> = ({
  className,
  list,
  ...rest
}) => {
  return (
    <>
      <ItemWrapper
        className={cx("okd-space-y-2 okd-bg-white", !!className && className)}
        {...rest}
      >
        {!!list.length &&
          list.map((item, i) => {
            return (
              <Fragment key={i}>
                <div className="okd-flex okd-justify-between okd-text-sm">
                  <span className="okd-text-gray-500 okd-font-medium">
                    {item.description}
                  </span>
                  <div className="okd-text-gray-900 okd-mt-1 sm:okd-mt-0">
                    {!!Array.isArray(item.values)
                      ? item.values.map((item, i) => {
                          return (
                            <Fragment key={i}>
                              <div>
                                {item.value}{" "}
                                <span className="okd-uppercase">
                                  {item.name}
                                </span>
                              </div>
                            </Fragment>
                          );
                        })
                      : item.values}
                  </div>
                </div>
              </Fragment>
            );
          })}
      </ItemWrapper>
    </>
  );
};

DescriptionItem.defaultProps = defaultProps;

export default DescriptionItem;
