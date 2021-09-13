import React, { ReactNode, useMemo } from "react";
import type { FC } from "react";
import { useIntl } from "react-intl";

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
  hint?: boolean;
  customHint?: ReactNode;
  leftText?: ReactNode;
  rightText?: ReactNode;
};

const defaultProps = {
  value: 0,
  max: 100,
  hint: false,
} as const;

/**
 * Progress 是一个进度条组件，用于展示事件或与之相关的任务进展。
 */
const Progress: FC<ProgressProps> = ({
  value,
  max,
  hint,
  customHint,
  leftText,
  rightText,
}) => {
  const portionValue = useProportions(value, max);
  const { formatMessage } = useIntl();

  const levelUpText = formatMessage(
    { id: "ui-components__progress__how_much_to_level_up" },
    { value }
  );

  const hintNode = useMemo(() => {
    if (leftText || rightText)
      return (
        <div className="okd-flex okd-justify-between okd-text-black okd-text-xs okd-leading-5 okd-font-normal">
          <p className="okd-justify-self-start">{leftText}</p>
          <p className="okd-justify-self-end">{rightText}</p>
        </div>
      );

    return (
      (!!customHint || hint) && (
        <div className="okd-flex okd-justify-between okd-text-black okd-text-xs okd-leading-5 okd-font-normal">
          <p>{customHint || levelUpText}</p>
          <p>{max}</p>
        </div>
      )
    );
  }, [customHint, hint, leftText, levelUpText, max, rightText]);

  return (
    <div className="okd-space-y-2 okd-w-full">
      <div className="okd-relative okd-bg-green-200 okd-h-[6px] okd-rounded">
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
      {hintNode}
    </div>
  );
};

Progress.defaultProps = defaultProps;
Progress.displayName = "Progress";
export default Progress;
