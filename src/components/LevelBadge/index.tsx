import React, { FC } from "react";
import { upperFirst } from "lodash";
import cx from "classnames";

import Icon from "../Icon";
import { ICON_NAMES } from "../Icon/Icons";

type LevelGrade = "star" | "diamond" | "crown";
interface LevelBadgeProps {
  /**
   * 等级，范围在 [1, 9] 内
   */
  level?: number;
}

const getBadge = (level: number): LevelGrade => {
  switch (true) {
    case level >= 1 && level <= 3:
      return "star";
    case level >= 4 && level <= 6:
      return "diamond";
    case level >= 7 && level <= 9:
      return "crown";
  }
};

/**
 * LevelBadge 是一个用于显示用户等级的徽章组件
 */
const LevelBadge: FC<LevelBadgeProps> = ({ level }) => {
  // Validation, do we even need it?
  if (level < 1 || level > 9) {
    return null;
  }

  const badge = getBadge(level);
  const badgeIconName = upperFirst(`${badge}BadgeIllus`) as ICON_NAMES;

  return (
    <div className="okd-pl-3">
      <div
        className={cx(
          "okd-rounded-tr-sm okd-rounded-br-sm okd-relative okd-w-min okd-h-5 okd-flex okd-items-center okd-select-none",
          {
            "okd-bg-[#FFE5CF]": badge === "star",
            "okd-bg-[#E3E7ED]": badge === "diamond",
            "okd-bg-[#FBE3A2]": badge === "crown",
          }
        )}
      >
        <Icon
          name={badgeIconName}
          width={20}
          height={20}
          className="okd-absolute okd--left-3"
        />
        {/* 使用这个来撑开前面的宽度 */}
        <div className="okd-w-2" />
        <p
          className={cx("okd-text-xs okd-font-medium okd-pl-1 okd-pr-2", {
            "okd-text-[#C97322]": badge === "star",
            "okd-text-[#687E90]": badge === "diamond",
            "okd-text-[#E78E1B]": badge === "crown",
          })}
        >
          Lv.{level}
        </p>
      </div>
    </div>
  );
};

export default LevelBadge;
