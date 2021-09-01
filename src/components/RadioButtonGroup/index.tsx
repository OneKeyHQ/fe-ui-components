import React, { FC, ReactNode, Component } from "react";
import cx, { Argument } from "classnames";
import { RadioGroup } from "@headlessui/react";

type RadioButtonProps = {
  /**
   * The value of the current RadioButton. The type should match the type of the value in the RadioGroup component.
   */
  value?: string | undefined;
  /**
   * Whether or not the RadioButton is disabled..
   */
  disabled?: boolean;
  label?: String | Component;
  description?: ReactNode;
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 设置按钮大小
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl";
};

const RadioButtonDefaultProps = {
  size: "base",
} as const;

const RadioButton: FC<RadioButtonProps> = ({
  value,
  disabled,
  label,
  description,
  className,
  size,
  ...rest
}) => {
  return (
    <RadioGroup.Option
      as="button"
      value={value}
      className={({ active, checked }) =>
        cx(
          "okd-flex okd-flex-col okd-items-center okd-rounded okd-border focus:okd-outline-none",
          disabled
            ? "okd-bg-white okd-border-gray-200 okd-cursor-not-allowed"
            : checked
            ? "okd-bg-brand-500 okd-border-brand-500 hover:okd-bg-brand-600 hover:okd-border-brand-600"
            : "okd-bg-white okd-border-gray-200 hover:okd-bg-gray-50",
          active
            ? "okd-ring-2 okd-ring-offset-2 okd-ring-offset-white okd-ring-brand-500"
            : "",
          size === "xs" ? "okd-px-2.5 okd-py-1.5" : "",
          size === "sm" ? "okd-px-3 okd-py-2" : "",
          size === "base" ? "okd-px-4 okd-py-2" : "",
          size === "lg" ? "okd-px-4 okd-py-2" : "",
          size === "xl" ? "okd-px-6 okd-py-3" : "",
          !!className && className
        )
      }
      {...rest}
      disabled={disabled}
    >
      {({ checked }) => (
        <>
          {label && (
            <RadioGroup.Label
              as="p"
              className={cx(
                "okd-font-medium",
                disabled
                  ? "okd-text-gray-300"
                  : checked
                  ? "okd-text-white"
                  : "okd-text-gray-700",
                size === "xs" ? "okd-text-xs" : "",
                size === "sm" ? "okd-text-sm" : "",
                size === "base" ? "okd-text-sm" : "",
                size === "lg" ? "okd-text-base" : "",
                size === "xl" ? "okd-text-base" : ""
              )}
            >
              {label}
            </RadioGroup.Label>
          )}
          {description && (
            <RadioGroup.Description
              as="span"
              className={cx(
                disabled
                  ? "okd-text-gray-300"
                  : checked
                  ? "okd-text-brand-100"
                  : "okd-text-gray-500",
                size === "xs" ? "okd-text-xs" : "",
                size === "sm" ? "okd-text-xs" : "",
                size === "base" ? "okd-text-xs" : "",
                size === "lg" ? "okd-text-sm" : "",
                size === "xl" ? "okd-text-sm" : ""
              )}
            >
              {description}
            </RadioGroup.Description>
          )}
        </>
      )}
    </RadioGroup.Option>
  );
};

RadioButton.defaultProps = RadioButtonDefaultProps;

type RadioButtonGroupProps = {
  /**
   * Improving the semantics and accessibility of your custom selector.
   */
  label?: string | Component;
  /**
   * The current selected value in the `RadioButtonGroup`.
   */
  value?: string | undefined;
  /**
   * Whether or not the RadioButtonGroup and all of its RadioButtonGroup's are disabled..
   */
  disabled?: boolean;
  /**
   * The function called to update the RadioGroup value.
   */
  onChange?: (value: string) => void;
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 设置按钮大小
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl";
};

const defaultProps = {} as const;

const RadioButtonGroup: FC<RadioButtonGroupProps> & {
  Option: React.FC<RadioButtonProps>;
} = ({
  disabled,
  label,
  value,
  onChange,
  children,
  className,
  ...rest
}) => {

  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={cx(!!className && className)}
      {...rest}
    >
      <RadioGroup.Label className="okd-sr-only">{label}</RadioGroup.Label>
      <div className="okd-flex okd-space-x-2">{children}</div>
    </RadioGroup>
  );
};

RadioButtonGroup.defaultProps = defaultProps;
RadioButtonGroup.Option = RadioButton;

export default RadioButtonGroup;
