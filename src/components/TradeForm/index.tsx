import React, { FC } from "react";
import cx, { Argument } from "classnames";

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

const TradeForm: FC<TradeFormProps> = ({
  label,
  labelCorner,
  className,
  ...rest
}) => {
  return (
    <div className={cx("", !!className && className)} {...rest}>
      {!!(label || labelCorner) && (
        <div className="okd-flex okd-items-center okd-justify-between okd-mb-2">
          <h5 className="okd-text-sm okd-font-medium okd-text-gray-700">{label}</h5>
          <div>{labelCorner}</div>
        </div>
      )}
    </div>
  );
};

TradeForm.defaultProps = defaultProps;

export default TradeForm;
