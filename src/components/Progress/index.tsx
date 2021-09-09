import React from "react";
import type { FC } from "react";
import { useProportions } from "./portion";

export type ProgressProps = {
  /**
   * 进度条当前数值
   */
  value?: number;
  /**
   * 最大值
   */
  max?: number;
};

const defaultProps = {
  value: 0,
  max: 100,
} as const;

/**
 * Progress 是一个进度条组件，用于展示事件或与之相关的任务进展。
 */
const Progress: FC<ProgressProps> = ({ value, max = 100 }) => {
  const portionValue = useProportions(value, max);

  return (
    <div className="okd-relative okd-bg-green-200 okd-w-full okd-h-[6px] okd-rounded">
      <div
        className="okd-absolute okd-inset-0 okd-h-full okd-transition-all okd-duration-100 okd-ease-in okd-rounded okd-bg-green-500"
        style={{ width: `${portionValue}%` }}
        title={`${portionValue}%`}
      />
      <progress
        value={value}
        max={max}
        className="okd-fixed okd--top-[1000px] okd-opacity-0 okd-invisible okd-pointer-events-none"
      />
    </div>
  );
};

Progress.defaultProps = defaultProps;
Progress.displayName = "Progress";
export default Progress;
