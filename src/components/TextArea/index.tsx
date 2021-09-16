import React, { useState, FC, useCallback } from "react";
import cx, { Argument } from "classnames";
import Tooltip from "../Tooltip/index";
import Icon from "../Icon/index";

type TextAreaProps = {
  /**
   * 声明 textArea 类型，text or code类型
   */
  type?: "text" | "code";
  /**
   * 是否可清空内容，默认为 false
   */
  allowClear?: boolean;
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
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {
  initialValue: "",
  type: "text",
} as const;

const TextArea: FC<TextAreaProps> = ({
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
}) => {
  const [defaultValue, setInitialValue] = useState(initialValue ?? "");
  const currentValue = value ?? defaultValue;

  const clearContent = useCallback(() => {
    if (currentValue) {
      setInitialValue("");
    }
  }, [currentValue]);

  return (
    <div className={cx(!!className && className)}>
      {/* Label */}
      {!!label && (
        <div className="okd-flex okd-items-center okd-justify-between okd-mb-1">
          {/* Leading Contnet */}
          <div className="okd-flex okd-items-center">
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
        </div>
      )}
      <div className="okd-relative">
        {/* TextArea */}
        <textarea
          id="textAreaID"
          name="textAreaID"
          value={currentValue}
          onChange={(e) => {
            const content = e.target.value;
            onChange?.(content);
            setInitialValue(content);
          }}
          className={cx(
            "okd-resize-none form-input okd-border-gray-200 okd-rounded-sm okd-block okd-w-full sm:okd-text-sm okd-bg-white okd-shadow-sm okd-placeholder-gray-400 disabled:okd-text-gray-400 disabled:okd-bg-gray-50 disabled:okd-cursor-not-allowed"
          )}
          style={{
            paddingRight:
              !readOnly && !disabled && !!currentValue && allowClear ? 24 : "",
          }}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
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
      </div>
    </div>
  );
};

TextArea.defaultProps = defaultProps;

export default TextArea;
