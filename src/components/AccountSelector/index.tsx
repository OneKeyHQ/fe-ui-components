import React, { FC } from "react";
import cx, { Argument } from "classnames";

import Popover from "../Popover";
import Trigger, { TriggerProps } from "./Trigger";

export type AccountSelectorProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * Popover 的位置，分别对应左下、中下、右下
   */
  place?: "bottom-start" | "bottom-center" | "bottom-end";
  /**
   * Trigger 的 props
   */
  trigger: TriggerProps;
};

const defaultProps = {} as const;

const AccountSelector: FC<AccountSelectorProps> = ({
  className,
  place,
  trigger,
  ...rest
}) => {
  return (
    <>
      <Popover
        place={place}
        className={cx("okd-w-[343px]", !!className && className)}
        trigger={(status) => <Trigger active={status} {...trigger} />}
        {...rest}
      >
        <div className="okd-p-1">AccontList and Actions</div>
      </Popover>
    </>
  );
};

AccountSelector.defaultProps = defaultProps;

export default AccountSelector;
