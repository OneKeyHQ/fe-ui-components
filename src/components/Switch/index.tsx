import React, { FC, useState } from "react";

import { Switch as BaseSwitch } from "@headlessui/react";
import cx from "classnames";

type SwitchProps = {
  /**
   * 表单标签
   */
  label?: string;
  /**
   * 初始值（仅第一次渲染生效）
   */
  initialValue?: boolean;
  /**
   * 表单受控值，通过 value 属性控制当前表单结果
   */
  value?: boolean;
  /**
   * 表单 value 改变回调函数，参数为变化后表单 value 结果
   */
  onChange?: (val: boolean) => void;
  /**
   * 不可选状态
   */
  disabled?: boolean;
  /**
   * 尺寸
   */
  size?: "sm" | "lg";
};

const defaultProps = {
  initialValue: false,
  label: null,
  disabled: false,
  size: "sm",
} as const;

const Switch: FC<SwitchProps> = ({
  value,
  onChange,
  initialValue,
  label,
  disabled,
  size,
}) => {
  const [enabled, setEnabled] = useState(initialValue);
  const active = value ?? enabled;
  return (
    <BaseSwitch.Group as="div" className="okd-flex okd-items-center">
      <BaseSwitch
        checked={!!active}
        onChange={(val) => {
          onChange?.(val);
          setEnabled(val);
        }}
        className={cx(
          "okd-relative okd-inline-flex okd-flex-shrink-0 okd-border-4 okd-border-transparent okd-rounded-full okd-cursor-pointer okd-transition-colors okd-ease-in-out okd-duration-200 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-offset-white focus:okd-ring-brand-500",
          {
            "okd-h-5 okd-w-10": size === "sm",
            "okd-h-6 okd-w-12": size === "lg",
          },
          active
            ? {
                "okd-bg-brand-50": disabled,
                "okd-bg-brand-500": !disabled,
              }
            : {
                "okd-bg-gray-50": disabled,
                "okd-bg-gray-200": !disabled,
              },
          { "okd-cursor-not-allowed okd-pointer-events-none": disabled }
        )}
      >
        <span
          aria-hidden="true"
          className={cx(
            "okd-inline-block okd-bg-white okd-rounded-full okd-shadow okd-transform okd-ring-0 okd-transition okd-ease-in-out okd-duration-200 okd-pointer-events-none",
            {
              "okd-h-3 okd-w-3": size === "sm",
              "okd-h-4 okd-w-4": size === "lg",
            },
            active
              ? {
                  "okd-translate-x-5": size === "sm",
                  "okd-translate-x-6": size === "lg",
                }
              : "okd-translate-x-0"
          )}
        />
      </BaseSwitch>
      {label && (
        <BaseSwitch.Label as="span" className="okd-ml-3 okd-inline-flex">
          <span
            className={cx(
              disabled ? "okd-text-gray-400" : "okd-text-gray-900",
              "okd-text-sm okd-font-medium"
            )}
          >
            {label}
          </span>
        </BaseSwitch.Label>
      )}
    </BaseSwitch.Group>
  );
};

Switch.defaultProps = defaultProps;

export default Switch;
