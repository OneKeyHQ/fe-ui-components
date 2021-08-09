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
        active ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-600",
        "relative inline-flex flex-shrink-0 h-5 w-10 border-4 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 dark:focus:ring-offset-gray-900"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          active
            ? "translate-x-5 dark:bg-white"
            : "translate-x-0 dark:bg-gray-900",
          "pointer-events-none bg-white inline-block h-3 w-3 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
        )}
      />
    </BaseSwitch>
  );
};

Switch.defaultProps = defaultProps;

export default Switch;
