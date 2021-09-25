import React, { useState, FC, useCallback, useEffect } from "react";
import cx, { Argument } from "classnames";
import Tooltip from "../Tooltip/index";
import Icon from "../Icon/index";

interface Rule {
  required: boolean;
  message: string;
  pattern?: RegExp; //校验规则，不符合规则不显示内容
}
type TextAreaProps = {
  /**
   * 声明 textArea 类型，text or code类型
   */
  type?: "text" | "code";
  /**
   * 校验规则，不符合规则不显示内容
   */
  rule?: Rule;
  /**
   * 是否可清空内容，默认为 false
   */
  allowClear?: boolean;
  /**
   * 设置后置内容
   */
  addonAfter?: React.ReactNode;
  /**
   * 是否禁用状态，默认为 false
   */
  disabled?: boolean;
  /**
   * 只读，默认为 false
   */
  readOnly?: boolean;
  /**
   * 指定textArea的行数，原生属性
   */
  rows?: number;
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
   * Label for textArea
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
   * 最大长度，超出部分不显示
   */
  maxLength?: number;
  /**
   * 是否是错误样式
   */
  error?: boolean;
  /**
   * 错误信息
   */
  helpText?: string;
};

const defaultProps = {
  initialValue: "",
  type: "text",
} as const;

const TextArea: FC<TextAreaProps> = ({
  rows,
  error,
  helpText,
  allowClear,
  disabled,
  readOnly,
  value,
  initialValue,
  onChange,
  placeholder,
  label,
  labelTooltip,
  className,
  maxLength,
  addonAfter,
  rule,
  labelCorner,
}) => {
  const [defaultValue, setInitialValue] = useState(initialValue ?? "");
  const [errorValue, setErrorValue] = useState(error ?? false);
  const [helptextValue, setHelptextValue] = useState(helpText ?? "");
  const currentValue = maxLength
    ? value?.slice(0, maxLength) ?? defaultValue?.slice(0, maxLength)
    : value ?? defaultValue;

  const clearContent = useCallback(() => {
    if (currentValue) {
      setInitialValue("");
    }
  }, [currentValue]);

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
          <div className="okd-text-sm okd-flex okd-items-center">
            <label
              className="okd-text-sm okd-font-medium okd-text-gray-700"
              htmlFor="textAreaID"
            >
              {label}
            </label>
            {!!labelTooltip && (
              <Tooltip place="bottom" content={labelTooltip}>
                <div className="okd-inline-flex okd-items-center okd-justify-center okd-w-4 okd-h-4">
                  <Icon
                    className="okd-min-w-[18px] okd-h-[18px] okd-text-gray-300"
                    name="QuestionMarkCircleSolid"
                  />
                </div>
              </Tooltip>
            )}
          </div>
          {/* labelCorner */}
          {!!labelCorner && (
            <div className="okd-text-sm okd-text-gray-500 okd-inline-flex okd-items-center">
              {labelCorner}
            </div>
          )}
        </div>
      )}
      <div className="okd-relative">
        {/* TextArea */}
        <textarea
          id="textAreaID"
          name="textAreaID"
          value={currentValue}
          onChange={handleChange}
          className={cx(
            "okd-resize-none form-input okd-rounded okd-block okd-w-full sm:okd-text-sm okd-bg-white okd-shadow-sm okd-placeholder-gray-400 disabled:okd-text-gray-400 disabled:okd-bg-gray-50 disabled:okd-cursor-not-allowed",
            errorValue
              ? "okd-border-red-300 focus:okd-ring-red-500 focus:okd-border-red-500 okd-text-red-900"
              : "okd-border-gray-300 focus:okd-ring-brand-500 focus:okd-border-brand-500 okd-text-gray-900"
          )}
          style={{
            paddingRight:
              !readOnly && !disabled && !!currentValue && allowClear ? 24 : "",
          }}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          rows={rows}
        />
        {/* allowClear */}
        {!readOnly && !disabled && !!currentValue && allowClear && (
          <div
            onClick={clearContent}
            className="okd-absolute okd-inset-y-0 okd-right-0 okd-pt-2 okd-pr-3 okd-text-gray-400 sm:okd-text-sm"
          >
            <Icon
              name="CloseCircleOutline"
              size={20}
              className="okd-text-gray-400 okd-cursor-pointer"
            ></Icon>
          </div>
        )}
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

TextArea.defaultProps = defaultProps;

export default TextArea;
