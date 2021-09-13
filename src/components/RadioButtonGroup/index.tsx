import React, {
  FC,
  ReactNode,
  Component,
  useMemo,
  ReactElement,
} from "react";
import cx, { Argument } from "classnames";
import { RadioGroup } from "@headlessui/react";
import { isArray, isObject } from "lodash";

type RadioButtonProps = {
  /**
   * The value of the current RadioButton. The type should match the type of the value in the RadioGroup component.
   */
  value?: string | undefined;
  /**
   * Whether or not the RadioButton is disabled..
   */
  disabled?: boolean;
  /**
   * 展示的标题
   */
  label?: String | Component;
  /**
   * 展示的描述
   */
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

const RadioButton: FC<RadioButtonProps> = ({
  value,
  disabled,
  label,
  description,
  className,
  size: givenSize,
  ...rest
}) => {
  const size = givenSize ?? "base";

  return (
    <RadioGroup.Option
      as="button"
      value={value}
      className={({ active, checked }) =>
        cx(
          "okd-flex okd-flex-col okd-items-center okd-justify-center okd-rounded okd-border focus:okd-outline-none",
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

type RadioButtonGroupProps = {
  /**
   * 设置按钮大小
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl";
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
  size,
  ...rest
}) => {
  const childrenWithProps = useMemo(() => {
    const commonOptionProps = { size, disabled } as const;

    const isRadioButton = (item: ReactElement) =>
      item.type === RadioButton ||
      (item.type as typeof RadioButton).name === "RadioButton";

    const traversePropsChildren = (child: ReactNode) => {
      if (React.isValidElement(child)) {
        // Single button
        if (isRadioButton(child)) return child;
        // in Fragment or other container
        return React.cloneElement(
          child,
          child.props,
          traversePropsChildren(child.props.children)
        );
      }

      // Array
      if (isArray(child)) {
        return React.Children.map(child, (child: ReactElement) => {
          if (!React.isValidElement(child)) return child;

          if (isRadioButton(child)) {
            return React.cloneElement(child, {
              ...commonOptionProps,
              ...(isObject(child.props) ? child.props : {}),
            });
          }
          return child;
        });
      }

      return false;
    };

    if (React.Children.count(children) === 0) return [];
    const propsChildren = traversePropsChildren(children) || children;
    return propsChildren;
  }, [children, size, disabled]);

  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={cx(!!className && className)}
      {...rest}
    >
      <RadioGroup.Label className="okd-sr-only">{label}</RadioGroup.Label>
      <div className="okd-flex okd-space-x-2">{childrenWithProps}</div>
    </RadioGroup>
  );
};

RadioButtonGroup.defaultProps = defaultProps;
RadioButtonGroup.Option = RadioButton;

export default RadioButtonGroup;
