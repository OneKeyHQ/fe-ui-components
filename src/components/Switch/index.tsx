import React, { FC, useState } from "react";

import { Switch as BaseSwitch } from "@headlessui/react";
import classNames from "classnames";

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
};

const defaultProps = {
  initialValue: false,
} as const;

const Switch: FC<SwitchProps> = ({ value, onChange, initialValue }) => {
  const [enabled, setEnabled] = useState(initialValue);
  const active = value ?? enabled;
  return (
    <BaseSwitch
      checked={!!active}
      onChange={(val) => {
        onChange?.(val);
        setEnabled(val);
      }}
      className={classNames(
        active ? "okd-bg-brand-500" : "okd-bg-gray-200 dark:okd-bg-gray-600",
        "okd-relative okd-inline-flex okd-flex-shrink-0 okd-h-5 okd-w-10 okd-border-4 okd-border-transparent okd-rounded-full okd-cursor-pointer okd-transition-colors okd-ease-in-out okd-duration-200 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-2 focus:okd-ring-brand-500 dark:focus:okd-ring-offset-gray-900"
      )}
    >
      <span className="okd-sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          active
            ? "okd-translate-x-5 dark:okd-bg-white"
            : "okd-translate-x-0 dark:okd-bg-gray-900",
          "okd-pointer-events-none okd-bg-white okd-inline-block okd-h-3 okd-w-3 okd-rounded-full okd-shadow okd-transform okd-ring-0 okd-transition okd-ease-in-out okd-duration-200"
        )}
      />
    </BaseSwitch>
  );
};

Switch.defaultProps = defaultProps;

export default Switch;
