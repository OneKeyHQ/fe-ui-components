import React, { FC } from "react";
import cx, { Argument } from "classnames";
import Header from "./Header";
import { InputItem, DescriptionItem } from "./Items";

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
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const TradeForm: FC<TradeFormProps> & { Input, Description } = ({
  label,
  labelCorner,
  className,
  children,
  ...rest
}) => {

  return (
    <div className={cx("", !!className && className)} {...rest}>
      {/* header */}
      {!!(label || labelCorner) && (
        <Header label={label} labelCorner={labelCorner} />
      )}
      {/* Items Wrapper */}
      <div className={cx("okd-flex okd-flex-col okd--space-y-px")}>
        {children}
      </div>
    </div>
  );
};

TradeForm.defaultProps = defaultProps;
TradeForm.Input = InputItem;
TradeForm.Description = DescriptionItem;

export default TradeForm;
