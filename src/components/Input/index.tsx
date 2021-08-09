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
          "block w-full pr-10 bg-gray-50 form-input sm:text-sm rounded-md dark:bg-black/50",
          error
            ? "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 dark:text-red-300"
            : "text-gray-700 placeholder-gray-400 focus:ring-brand-500 focus:border-brand-500 border-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-200"
        )}
        placeholder={placeholder}
      />
      {error && (
        <p
          className="mt-2 text-sm text-left text-red-600 dark:text-red-300"
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
