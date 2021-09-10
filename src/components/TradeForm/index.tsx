import React, { FC, useMemo } from "react";
import cx, { Argument } from "classnames";
import { isArray, isObject } from "lodash";
import Header from "./Header";
import Item from "./Item";

type TradeFormProps = {
  /**
   * 表单标签
   */
  label?: string;
  /**
   * Corner content
   */
  labelCorner?: React.ReactNode;
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * 表单数值
   */
  value?: string;
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const TradeForm: FC<TradeFormProps> = ({
  label,
  labelCorner,
  readonly,
  value,
  className,
  children,
  ...rest
}) => {
  const childrenWithProps = useMemo(() => {
    if (React.isValidElement(children)) {
      if (isArray(children.props.children)) {
        const commonOptionProps = { readonly } as const;
        return React.Children.map(children.props.children, (child) => {
          // Checking isValidElement is the safe way and avoids a typescript error too.
          if (React.isValidElement(child) && child.type === Header) {
            return React.cloneElement<TradeFormProps>(child, {
              ...commonOptionProps,
              ...(isObject(child.props) ? child.props : {}),
            });
          }
          return child;
        });
      }
    }

    return children;
  }, [children, readonly]);

  return (
    <div className={cx("", !!className && className)} {...rest}>
      {/* header */}
      {!!(label || labelCorner) && (
        <Header label={label} labelCorner={labelCorner} />
      )}
      {/* Items Wrapper */}
      <div className={cx("okd-flex okd-flex-col okd--space-y-px")}>
        {childrenWithProps}
        <Item>
          <div className="okd-flex okd-justify-between">
            <input
              type="text"
              className="form-input okd-flex-1 okd-p-0 okd-text-2xl okd-leading-10 okd-text-gray-900 okd-bg-transparent okd-border-none focus:okd-outline-none focus:okd-ring-0 okd-placeholder-gray-400"
              readOnly={readonly}
              placeholder="0.0"
              value={value}
            />
          </div>
        </Item>
        <Item>
          <div className="okd-flex okd-justify-between">
            <input
              type="text"
              className="form-input okd-flex-1 okd-p-0 okd-text-2xl okd-leading-10 okd-text-gray-900 okd-bg-transparent okd-border-none focus:okd-outline-none focus:okd-ring-0 okd-placeholder-gray-400"
              readOnly={readonly}
              placeholder="0.0"
              value={value}
            />
          </div>
        </Item>
      </div>
    </div>
  );
};

TradeForm.defaultProps = defaultProps;

export default TradeForm;
