import React, { useState, LegacyRef, FC, useCallback, useEffect } from "react";
import cx, { Argument } from "classnames";
import Tooltip from "../Tooltip/index";
import Icon from "../Icon/index";

interface Rule {
  required: boolean;
  message: string;
  pattern?: RegExp; //校验规则，不符合规则不显示内容
}

type InputProps = {
  /**
   * 声明 input 类型
   */
  type?: string;
  /**
   * 校验规则，不符合规则不显示内容
   */
  rule?: Rule;
  /**
   * 是否禁用状态，默认为 false
   */
  disabled?: boolean;
  /**
   * 只读，默认为 false
   */
  readOnly?: boolean;
  /**
   * 设置前置内容
   */
  addonBefore?: React.ReactNode;
  /**
   * 设置后置内容
   */
  addonAfter?: React.ReactNode;
  /**
   * 覆盖默认左间距，当添加了 `addonBefore` 时，适用于 `addonBefore` 为图标的默认值 `40` 会被应用，当不为图标时（如纯文本、按钮或者选择器），可自定义
   */
  paddingLeft?: number;
  /**
   * 同 `paddingLeft`
   */
  paddingRight?: number;
  /**
   * 是否是错误样式
   */
  error?: boolean;
  /**
   * 错误信息
   */
  helpText?: string;
  /**
   * 受控的表单控件的值
   */
  value?: string;
  /**
   * 初始值，仅第一次渲染有效
   */
  initialValue?: string;
  /**
   * 没有内容时的占位符
   */
  placeholder?: string;
  /**
   * 内容更改回调信息
   */
  onChange?: (content: string) => void;
  /**
   * Label for input
   */
  label?: string;
  /**
   * Label tooltip
   */
  labelTooltip?: string;
  /**
   * Corner content
   */
  labelCorner?: React.ReactNode;
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * Reference
   */
  innerRef?: LegacyRef<HTMLInputElement>;
  /**
   * 最大长度，超出部分不显示
   */
  maxLength?: number;
};

const defaultProps = {
  initialValue: "",
  type: "text",
  paddingLeft: 40,
  paddingRight: 40,
} as const;

const Input: FC<InputProps> = ({
  type,
  disabled,
  readOnly,
  error,
  value,
  initialValue,
  onChange,
  helpText,
  placeholder,
  addonBefore,
  addonAfter,
  paddingLeft,
  paddingRight,
  label,
  labelTooltip,
  labelCorner,
  className,
  innerRef,
  maxLength,
  rule,
}) => {
  const [defaultValue, setInitialValue] = useState(initialValue ?? "");
  const [errorValue, setErrorValue] = useState(error ?? false);
  const [helptextValue, setHelptextValue] = useState(helpText ?? "");
  const currentValue = maxLength
    ? value?.slice(0, maxLength) ?? defaultValue?.slice(0, maxLength)
    : value ?? defaultValue;

  const handleChange = useCallback(
    (e) => {
      const content = e.target.value;
      const { required, message, pattern } = rule || {};
      if (pattern && content && !pattern.test(content)) {
        return;
      }
      if (required && !content) {
        setErrorValue(true);
        setHelptextValue(message);
      }
      if (required && content) {
        setErrorValue(false);
        setHelptextValue("");
      }
      onChange?.(content);
      setInitialValue(content);
    },
    [onChange, rule]
  );

  useEffect(() => {
    setErrorValue(error);
    setHelptextValue(helpText);
  }, [error, helpText]);

  return (
    <div className={cx(!!className && className)}>
      {/* Label */}
      {!!label && (
        <div className="okd-flex okd-items-center okd-justify-between okd-mb-1">
          {/* Leading Contnet */}
          <div className="okd-flex okd-items-center">
            <label
              className={cx(
                "okd-text-sm okd-font-medium okd-text-gray-700",
                labelTooltip ? "okd-mr-1" : null
              )}
              htmlFor="inputID"
            >
              {label}
            </label>
            {!!labelTooltip && (
              <Tooltip place="top" content={labelTooltip}>
                <Icon
                  className="okd-w-[18px] okd-h-[18px] okd-text-gray-300"
                  name="QuestionMarkCircleSolid"
                />
              </Tooltip>
            )}
          </div>
          {/* labelCorner */}
          {!!labelCorner && (
            <div className="okd-text-sm okd-text-gray-500">{labelCorner}</div>
          )}
        </div>
      )}
      {/* Input 的容器，包含 `addOnBefore`、`addOnAfter` 和 `input` */}
      <div className="okd-relative">
        {/* addonBefore */}
        {!!addonBefore && (
          <div className="okd-absolute okd-inset-y-0 okd-left-0 okd-flex okd-items-center okd-pl-3 okd-text-gray-500 okd-pointer-events-none sm:okd-text-sm">
            {addonBefore}
          </div>
        )}
        {/* Input */}
        <input
          id="inputID"
          name="inputID"
          value={currentValue}
          onChange={handleChange}
          type={type}
          className={cx(
            "form-input okd-block okd-w-full sm:okd-text-sm okd-rounded okd-bg-white okd-shadow-sm okd-placeholder-gray-400 disabled:okd-text-gray-700 disabled:okd-bg-gray-100 disabled:okd-cursor-not-allowed",
            errorValue
              ? "okd-border-red-300 focus:okd-ring-red-500 focus:okd-border-red-500 okd-text-red-900"
              : "okd-border-gray-300 focus:okd-ring-brand-500 focus:okd-border-brand-500 okd-text-gray-900"
          )}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          style={{
            paddingLeft: addonBefore ? paddingLeft : "",
            paddingRight: addonAfter ? paddingRight : "",
          }}
          ref={innerRef}
        />
        {/* addOnAfter */}
        {!!addonAfter && (
          <div className="okd-absolute okd-inset-y-0 okd-right-0 okd-flex okd-items-center okd-pr-3 okd-text-gray-400 okd-pointer-events-none sm:okd-text-sm">
            {addonAfter}
          </div>
        )}
      </div>
      {/* `helpText` 即是帮助文本，在 `error` 时，也可以修改为错误的提示文本 */}
      {!!helptextValue && (
        <p
          className={cx(
            "okd-mt-2 okd-text-sm okd-text-left",
            errorValue ? "okd-text-red-600" : "okd-text-gray-400"
          )}
        >
          {helptextValue}
        </p>
      )}
    </div>
  );
};

Input.defaultProps = defaultProps;

export default Input;
