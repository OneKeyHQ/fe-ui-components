import React, { useState, FC } from "react";
import cx from "classnames";

type InputProps = {
  /**
   * 是否是错误样式
   */
  error?: boolean;
  /**
   * 错误信息
   */
  errorMessage?: string;
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
};

const defaultProps = {
  initialValue: "",
} as const;

const Input: FC<InputProps> = ({
  error,
  value,
  initialValue,
  onChange,
  errorMessage,
  placeholder,
}) => {
  const [defaultValue, setInitialValue] = useState(initialValue ?? "");
  const currentValue = value ?? defaultValue;
  return (
    <div>
      <input
        value={currentValue}
        onChange={(e) => {
          const content = e.target.value;
          onChange?.(content);
          setInitialValue(content);
        }}
        type="text"
        className={cx(
          "okd-block okd-w-full okd-pr-10 okd-bg-gray-50 okd-form-input sm:okd-text-sm okd-rounded dark:okd-bg-black/50",
          error
            ? "okd-border-red-300 okd-text-red-900 okd-placeholder-red-300 focus:okd-outline-none focus:okd-ring-red-500 focus:okd-border-red-500 dark:okd-text-red-300"
            : "okd-text-gray-700 okd-placeholder-gray-400 focus:okd-ring-brand-500 focus:okd-border-brand-500 okd-border-gray-200 dark:okd-border-gray-600 dark:okd-placeholder-gray-500 dark:okd-text-gray-200"
        )}
        placeholder={placeholder}
      />
      {error && (
        <p
          className="okd-mt-2 okd-text-sm okd-text-left okd-text-red-600 dark:okd-text-red-300"
          id="email-error"
        >
          {errorMessage ?? "error"}
        </p>
      )}
    </div>
  );
};

Input.defaultProps = defaultProps;

export default Input;
