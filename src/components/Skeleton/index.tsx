import React, { FC } from "react";
import { isNil } from "lodash";
import cx from "classnames";

type SkeletonProps = {
  /**
   * 是否展示动画效果
   */
  animate?: boolean;
  /**
   * 是否显示头像占位图
   */
  avatar?: boolean | null;
  /**
   * 是否显示段落占位图
   */
  paragraph?: boolean | null;
  /**
   * 设置占位图的大小
   */
  size?: "large" | "middle" | "small";
  /**
   * 为 true 时，显示占位图。反之则直接展示子组件
   */
  loading?: boolean;
};

const defaultProps = {
  animate: true,
  size: "middle",
  loading: true,
  avatar: true,
  paragraph: true,
} as const;

const Skeleton: FC<SkeletonProps> = ({
  animate,
  loading,
  children,
  avatar,
  paragraph,
}) => {
  if (!isNil(loading) && !loading) return <>{children}</>;

  return (
    <div className={cx("okd-flex okd-items-center okd-px-6 okd-py-4")}>
      <div
        className={cx("okd-flex okd-items-center", {
          "okd-animate-pulse": animate,
        })}
      >
        {!!avatar && (
          <div className="okd-w-10 okd-h-10 okd-bg-gray-300 okd-rounded-full dark:okd-bg-gray-600" />
        )}
        {!!paragraph && (
          <div className="okd-ml-3">
            <div className="okd-h-3 okd-mt-2 okd-mb-2.5 okd-bg-gray-300 okd-rounded-full okd-w-28 dark:okd-bg-gray-600" />
            <div className="okd-h-3.5 okd-mb-2 okd-bg-gray-300 okd-rounded-full okd-w-36 dark:okd-bg-gray-600" />
          </div>
        )}
      </div>
    </div>
  );
};

Skeleton.defaultProps = defaultProps;

export default Skeleton;
