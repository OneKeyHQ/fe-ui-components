import React, { FC } from 'react';
import { isNil } from 'lodash';
import cx from 'classnames';

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
  size?: 'large' | 'middle' | 'small';
  /**
   * 为 true 时，显示占位图。反之则直接展示子组件
   */
  loading?: boolean;
}

const defaultProps = {
  animate: true,
  size: 'middle',
  loading: true,
  avatar: true,
  paragraph: true,
} as const;

const Skeleton: FC<SkeletonProps> = ({animate, loading, children, avatar, paragraph}) => {
  if (!isNil(loading) && !loading) return <>{children}</>;

  return (
    <div className={cx("flex items-center px-6 py-4")}>
      <div className={cx("flex items-center", {
        'animate-pulse': animate,
      })}>
        {
          !!avatar && (
            <div className="w-10 h-10 bg-gray-300 rounded-full dark:bg-gray-600" />
          )
        }
        {
          !!paragraph && (
            <div className="ml-3">
              <div className="h-3 mt-2 mb-2.5 bg-gray-300 rounded-full w-28 dark:bg-gray-600" />
              <div className="h-3.5 mb-2 bg-gray-300 rounded-full w-36 dark:bg-gray-600" />
            </div>
          )
        }
      </div>
    </div>
  );
}

Skeleton.defaultProps = defaultProps;

export default Skeleton;