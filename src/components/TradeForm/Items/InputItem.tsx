import React, { ChangeEventHandler, LegacyRef } from "react";
import cx, { Argument } from "classnames";
import ItemWrapper from "./ItemWrapper";
import Button from "../../Button";

type InputItemProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 只读状态
   */
  readOnly?: boolean;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 表单数值
   */
  value?: string;
  /**
   * 数值类型，指代所属 Token
   */
  valueType?: React.ReactNode;
  /**
   * 是否显示汇率
   */
  showRate?: boolean;
  /**
   * 是否显示余额
   */
  showBalance?: boolean;
  /**
   * Reference
   */
  innerRef?: LegacyRef<HTMLInputElement>;
  /**
   * Input onChange 输入事件
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
};

const defaultProps = {} as const;

const InputItem = React.forwardRef<HTMLInputElement, InputItemProps>(
  (
    {
      className,
      readOnly,
      value,
      valueType,
      placeholder,
      showRate,
      showBalance,
      innerRef,
      onChange,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <ItemWrapper
          className={cx(
            "",
            readOnly
              ? "okd-bg-white"
              : "okd-bg-gray-50 focus-within:okd-ring-1 focus-within:okd-ring-brand-500 focus-within:okd-border-brand-500 focus-within:okd-z-10",
            !!className && className
          )}
          {...rest}
        >
          <div className="okd-flex okd-justify-between">
            <div className="okd-flex-1 okd-pr-3">
              <input
                type="text"
                className="form-input okd-w-full okd-p-0 okd-text-2xl okd-leading-10 okd-text-gray-900 okd-bg-transparent okd-border-none focus:okd-outline-none focus:okd-ring-0 okd-placeholder-gray-400"
                readOnly={readOnly}
                placeholder={placeholder}
                value={value}
                ref={innerRef}
                onChange={onChange}
              />
            </div>
            {!!valueType && (
              <div className="okd-inline-flex okd-flex-shrink-0">
                {valueType}
              </div>
            )}
          </div>
          {!!(showRate || showBalance) && (
            <div className="okd-flex okd-justify-between okd-mt-1">
              {!!showRate && (
                <span className="okd-text-sm okd-text-gray-500">$906.69</span>
              )}
              {!!showBalance && (
                <Button
                  type="plain"
                  size="sm"
                  className="!okd-p-0 okd-text-brand-600 hover:okd-bg-gray-100"
                >
                  Balance: 2.3245
                </Button>
              )}
            </div>
          )}
        </ItemWrapper>
      </>
    );
  }
);

InputItem.defaultProps = defaultProps;

export default InputItem;
