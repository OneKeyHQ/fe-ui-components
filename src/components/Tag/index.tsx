import React, { FC, useCallback, useState } from 'react';
import cx from 'classnames';

import Token, { TokenProps } from '../Token';

export type TagProps = {
  /** 前置 token 的 props 属性，同 Token 组件 */
  token?: TokenProps;
  /** 是否是激活状态 */
  active?: boolean;
  /** 状态改变回调函数 */
  onChange?: (status: boolean) => void;
}

const Tag: FC<TagProps> = ({ token, children, active, onChange }) => {
  const [status, setStatus] = useState(false);
  const isActive = active ?? status;

  const handleClick = useCallback(() => {
    onChange?.(!isActive);
    setStatus(!isActive)
  }, [onChange, isActive]);

  return (
    <div
      className={cx("okd-inline-flex okd-items-center okd-border okd-justify-center okd-rounded-full okd-cursor-pointer okd-bg-gray-100", {
        "okd-border-brand-500": isActive,
      })}
      onClick={handleClick}
    >
      {!!token && <Token {...token}></Token>}
      <div className="okd-text-sm okd-font-medium okd-mx-2 okd-text-gray-500">
        {children}
      </div>
    </div>
  );
}

export default Tag;